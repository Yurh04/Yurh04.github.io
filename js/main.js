const glow = document.body;
const updateGlow = (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  glow.style.setProperty("--glow-x", `${x}%`);
  glow.style.setProperty("--glow-y", `${y}%`);
};
window.addEventListener("mousemove", updateGlow);

const reveals = document.querySelectorAll("[data-reveal]");
if (reveals.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

const mapContainer = document.getElementById("travel-map");
if (mapContainer && window.L) {
  const map = L.map("travel-map", {
    zoomControl: true,
    scrollWheelZoom: true,
  });
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
    attribution: "&copy; Esri &mdash; Esri, DeLorme, NAVTEQ, USGS, NASA, METI, NRCAN, GEBCO, NOAA, iPC",
    maxZoom: 16,
    errorTileUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=",
  }).addTo(map);

  map.createPane("countries");
  map.getPane("countries").style.zIndex = 200;

  const nodes = Array.from(document.querySelectorAll(".map-data [data-lat][data-lon]"));
  const points = nodes.map((node) => ({
    name: node.dataset.name,
    type: node.dataset.type,
    lat: parseFloat(node.dataset.lat),
    lon: parseFloat(node.dataset.lon),
  }));
  const origin = points.find((point) => point.type === "origin") || points[0];
  if (origin) {
    const bounds = [];
    const originLatLng = [origin.lat, origin.lon];
    bounds.push(originLatLng);

    L.circleMarker(originLatLng, {
      radius: 7,
      color: "#5de4c7",
      weight: 2,
      fillColor: "#5de4c7",
      fillOpacity: 0.8,
    })
      .addTo(map)
      .bindPopup("Beijing");

    const visited = new Set([
      "china",
      "south korea",
      "republic of korea",
      "korea, republic of",
      "singapore",
      "qatar",
      "united arab emirates",
      "uae",
      "portugal",
      "austria",
      "germany",
      "netherlands",
      "belgium",
      "italy",
      "switzerland",
      "united kingdom",
      "uk",
      "france",
      "spain",
      "japan",
      "taiwan",
      "taiwan, province of china",
      "hong kong",
      "china, hong kong sar",
      "hong kong sar china",
      "thailand",
      "indonesia",
      "united states",
      "united states of america",
      "usa",
    ]);

    points
      .filter((point) => point !== origin)
      .forEach((point) => {
        const target = [point.lat, point.lon];
        bounds.push(target);
        L.circleMarker(target, {
          radius: 6,
          color: "#3ba1ff",
          weight: 2,
          fillColor: "#3ba1ff",
          fillOpacity: 0.85,
        })
          .addTo(map)
          .bindPopup(point.name);

        L.polyline([originLatLng, target], {
          color: "#5de4c7",
          weight: 2,
          opacity: 0.7,
          dashArray: "6 8",
        }).addTo(map);
      });

    map.fitBounds(bounds, { padding: [20, 20] });

    fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
      .then((res) => res.json())
      .then((geojson) => {
        L.geoJSON(geojson, {
          pane: "countries",
          style: (feature) => {
            const name = (feature.properties && feature.properties.name) || "";
            const isVisited = visited.has(name.toLowerCase());
            return {
              color: isVisited ? "rgba(93,228,199,0.8)" : "rgba(255,255,255,0.12)",
              weight: isVisited ? 1.2 : 0.6,
              fillColor: isVisited ? "rgba(93,228,199,0.32)" : "rgba(255,255,255,0.04)",
              fillOpacity: isVisited ? 0.7 : 0.2,
            };
          },
        }).addTo(map);
      })
      .catch(() => {});
  }
}

const latestMatchCard = document.getElementById("latest-match-card");
const matchHistoryBody = document.getElementById("match-history-body");

if (latestMatchCard && matchHistoryBody) {
  const teamId = "133738"; // Real Madrid in TheSportsDB
  const endpoint = `https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${teamId}`;

  const renderLatest = (event) => {
    const home = event.strHomeTeam || "Home";
    const away = event.strAwayTeam || "Away";
    const homeScore = event.intHomeScore ?? "-";
    const awayScore = event.intAwayScore ?? "-";
    const league = event.strLeague || "Competition";
    const date = event.dateEvent || event.strTimestamp || "Unknown date";
    const venue = event.strVenue || "Venue TBD";

    latestMatchCard.innerHTML = `
      <div class="meta">
        <span>${date}</span>
        <span>${league}</span>
      </div>
      <div class="teams">${home} vs ${away}</div>
      <div class="scoreline">${homeScore} : ${awayScore}</div>
      <div class="venue">${venue}</div>
    `;
  };

  const renderHistory = (events) => {
    const rows = events
      .map((event) => {
        const date = event.dateEvent || "-";
        const league = event.strLeague || "-";
        const home = event.strHomeTeam || "Home";
        const away = event.strAwayTeam || "Away";
        const homeScore = event.intHomeScore ?? "-";
        const awayScore = event.intAwayScore ?? "-";
        return `
          <tr>
            <td>${date}</td>
            <td>${league}</td>
            <td>${home} vs ${away}</td>
            <td class="score">${homeScore} : ${awayScore}</td>
          </tr>
        `;
      })
      .join("");

    matchHistoryBody.innerHTML = rows;
  };

  const renderError = () => {
    latestMatchCard.innerHTML = `<p class="match-loading">Unable to load latest match now.</p>`;
    matchHistoryBody.innerHTML = `
      <tr>
        <td colspan="4" class="match-loading">Unable to load match history now.</td>
      </tr>
    `;
  };

  fetch(endpoint)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch match data");
      }
      return res.json();
    })
    .then((data) => {
      const events = (data && data.results) || [];
      if (events.length === 0) {
        throw new Error("No match data");
      }
      renderLatest(events[0]);
      renderHistory(events.slice(0, 8));
    })
    .catch(() => {
      renderError();
    });
}
