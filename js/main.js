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

    const tripLayer = L.layerGroup().addTo(map);
    const photoStackLayer = L.layerGroup().addTo(map);
    const travelCards = Array.from(document.querySelectorAll(".travel-grid .travel-card"));
    const tripTitle = document.getElementById("trip-detail-title");
    const tripYear = document.getElementById("trip-detail-year");
    const tripRoute = document.getElementById("trip-detail-route");
    const tripPhotoGrid = document.getElementById("trip-photo-grid");
    const mapPhotoViewer = document.getElementById("map-photo-viewer");
    const mapPhotoViewerTitle = document.getElementById("map-photo-viewer-title");
    const mapPhotoViewerGrid = document.getElementById("map-photo-viewer-grid");
    const mapPhotoViewerClose = document.getElementById("map-photo-viewer-close");

    const defaultRoutes = {
      "South Korea": [{ name: "Seoul", lat: 37.5665, lon: 126.978 }],
      Singapore: [{ name: "Singapore", lat: 1.3521, lon: 103.8198 }],
      Qatar: [{ name: "Doha", lat: 25.2854, lon: 51.531 }],
      UAE: [{ name: "Abu Dhabi", lat: 24.4539, lon: 54.3773 }],
      Austria: [{ name: "Vienna", lat: 48.2082, lon: 16.3738 }],
      Germany: [{ name: "Berlin", lat: 52.52, lon: 13.405 }],
      Netherlands: [{ name: "Amsterdam", lat: 52.3676, lon: 4.9041 }],
      Belgium: [{ name: "Brussels", lat: 50.8503, lon: 4.3517 }],
      "United Kingdom": [{ name: "London", lat: 51.5074, lon: -0.1278 }],
      "United States": [{ name: "New York", lat: 40.7128, lon: -74.006 }],
      Italy: [{ name: "Rome", lat: 41.9028, lon: 12.4964 }],
      Switzerland: [{ name: "Zurich", lat: 47.3769, lon: 8.5417 }],
      France: [{ name: "Paris", lat: 48.8566, lon: 2.3522 }],
      Spain: [{ name: "Madrid", lat: 40.4168, lon: -3.7038 }],
      Portugal: [{ name: "Lisbon", lat: 38.7223, lon: -9.1393 }],
      Japan: [{ name: "Tokyo", lat: 35.6762, lon: 139.6503 }],
      Taiwan: [{ name: "Taipei", lat: 25.033, lon: 121.5654 }],
      "Hong Kong": [{ name: "Hong Kong", lat: 22.3193, lon: 114.1694 }],
      Thailand: [{ name: "Bangkok", lat: 13.7563, lon: 100.5018 }],
      Indonesia: [{ name: "Jakarta", lat: -6.2088, lon: 106.8456 }],
    };

    const parseRoute = (card) => {
      const country = card.dataset.country || card.querySelector("strong")?.textContent?.trim() || "";
      const raw = card.dataset.route || "";
      if (!raw) {
        return defaultRoutes[country] || [];
      }
      return raw
        .split(";")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => {
          const [name, lat, lon] = item.split(",");
          return { name: name?.trim(), lat: parseFloat(lat), lon: parseFloat(lon) };
        })
        .filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lon));
    };

    const parsePhotoMap = (card) => {
      const mapping = new Map();
      const raw = card.dataset.routePhotos || "";
      raw
        .split(";")
        .map((item) => item.trim())
        .filter(Boolean)
        .forEach((item) => {
          const splitIndex = item.indexOf(",");
          if (splitIndex === -1) {
            return;
          }
          const stop = item.slice(0, splitIndex).trim();
          const urls = item
            .slice(splitIndex + 1)
            .split("|")
            .map((url) => url.trim())
            .filter(Boolean);
          if (stop && urls.length > 0) {
            mapping.set(stop, urls);
          }
        });
      return mapping;
    };

    const closePhotoViewer = () => {
      if (!mapPhotoViewer) {
        return;
      }
      mapPhotoViewer.hidden = true;
      if (mapPhotoViewerGrid) {
        mapPhotoViewerGrid.innerHTML = "";
      }
    };

    const openPhotoViewer = (cityName, photoUrls, fallbackImage) => {
      if (!mapPhotoViewer || !mapPhotoViewerTitle || !mapPhotoViewerGrid) {
        return;
      }
      mapPhotoViewerTitle.textContent = `${cityName} photos`;
      mapPhotoViewerGrid.innerHTML = photoUrls
        .map(
          (url) =>
            `<img src="${url}" alt="${cityName}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'" />`
        )
        .join("");
      mapPhotoViewer.hidden = false;
    };

    const drawTripRoute = (route, photoMap, fallbackImage) => {
      tripLayer.clearLayers();
      photoStackLayer.clearLayers();
      closePhotoViewer();
      if (route.length === 0) {
        return;
      }
      const latlngs = route.map((point) => [point.lat, point.lon]);
      if (latlngs.length > 1) {
        L.polyline(latlngs, {
          color: "#ffd166",
          weight: 3,
          opacity: 0.9,
        }).addTo(tripLayer);
        map.flyToBounds(latlngs, { padding: [40, 40], maxZoom: 7 });
      } else {
        map.flyTo(latlngs[0], 6);
      }
      route.forEach((point, index) => {
        L.circleMarker([point.lat, point.lon], {
          radius: index === 0 ? 7 : 6,
          color: "#ffd166",
          weight: 2,
          fillColor: "#ffd166",
          fillOpacity: 0.75,
        })
          .addTo(tripLayer)
          .bindPopup(point.name);

        const cityPhotos = photoMap.get(point.name) || [fallbackImage];
        const stackSources = [fallbackImage, fallbackImage, fallbackImage].filter(Boolean);
        const stackHtml = `
          <div class="photo-stack-icon">
            <div class="stack-card one" style="background-image:url('${stackSources[0]}')"></div>
            <div class="stack-card two" style="background-image:url('${stackSources[1] || stackSources[0]}')"></div>
            <div class="stack-card three" style="background-image:url('${stackSources[2] || stackSources[0]}')"></div>
            <div class="stack-label">${point.name}</div>
          </div>
        `;
        const stackMarker = L.marker([point.lat, point.lon], {
          icon: L.divIcon({
            className: "",
            html: stackHtml,
            iconSize: [74, 74],
            iconAnchor: [37, 37],
          }),
        }).addTo(photoStackLayer);
        stackMarker.on("click", () => openPhotoViewer(point.name, cityPhotos, fallbackImage));
      });
    };

    const renderTripDetail = (card, route, photoMap) => {
      if (!tripTitle || !tripYear || !tripRoute || !tripPhotoGrid) {
        return;
      }
      const country = card.dataset.country || card.querySelector("strong")?.textContent?.trim() || "Trip";
      const year = card.dataset.year || card.querySelector("span")?.textContent?.trim() || "";
      const fallbackImage = card.querySelector("img")?.src || "";

      tripTitle.textContent = `${country} trip`;
      tripYear.textContent = year;
      tripRoute.textContent =
        route.length > 1
          ? route.map((point) => point.name).join(" -> ")
          : route.length === 1
          ? `${route[0].name} city walk`
          : "No route data yet.";

      tripPhotoGrid.innerHTML = route
        .map((point) => {
          const urls = photoMap.get(point.name) || [fallbackImage];
          const url = urls[0] || fallbackImage;
          return `
            <figure class="trip-photo">
              <img src="${url}" alt="${point.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}'" />
              <figcaption>${point.name}</figcaption>
            </figure>
          `;
        })
        .join("");
    };

    const activateCard = (card) => {
      travelCards.forEach((item) => item.classList.remove("is-selected"));
      card.classList.add("is-selected");
      const route = parseRoute(card);
      const photoMap = parsePhotoMap(card);
      const fallbackImage = card.querySelector("img")?.src || "";
      drawTripRoute(route, photoMap, fallbackImage);
      renderTripDetail(card, route, photoMap);
    };

    travelCards.forEach((card) => {
      card.addEventListener("click", () => activateCard(card));
    });

    if (mapPhotoViewerClose) {
      mapPhotoViewerClose.addEventListener("click", closePhotoViewer);
    }

    // Keep world overview by default; only drill down after user clicks a card.
  }
}

const latestMatchCard = document.getElementById("latest-match-card");
const matchHistoryBody = document.getElementById("match-history-body");
const standingsPanel = document.getElementById("standings-panel");
const LA_LIGA_ID = "4335";

if (standingsPanel) {
  const fetchStandings = async () => {
    try {
      const endpoint = `https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${LA_LIGA_ID}&s=2024-2025`;
      const res = await fetch(endpoint);
      const data = await res.json();

      if (!data.table || data.table.length === 0) {
        throw new Error("No standings data");
      }

      const rows = data.table.slice(0, 10).map((team) => {
        const isRealMadrid = team.strTeam.toLowerCase().includes("madrid");
        return `
          <tr class="${isRealMadrid ? "highlight" : ""}">
            <td class="rank">${team.intRank}</td>
            <td class="team">
              <img src="${team.strTeamBadge || ""}" alt="${team.strTeam}" onerror="this.style.display='none'" />
              ${team.strTeam}
            </td>
            <td>${team.intPlayed}</td>
            <td>${team.intWin}</td>
            <td>${team.intDraw}</td>
            <td>${team.intLoss}</td>
            <td>${team.intGoalsFor}:${team.intGoalsAgainst}</td>
            <td class="points">${team.intPoints}</td>
          </tr>
        `;
      });

      standingsPanel.innerHTML = `
        <table class="standings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            ${rows.join("")}
          </tbody>
        </table>
        <p class="match-source">
          Data source:
          <a href="https://www.thesportsdb.com/" target="_blank" rel="noreferrer">TheSportsDB</a>
        </p>
      `;
    } catch {
      standingsPanel.innerHTML = `
        <p class="match-loading">
          Unable to load standings.
          <a href="https://www.laliga.com/en-GB/laliga-easports/standing" target="_blank" rel="noreferrer" style="color: #a6fff1;">View LaLiga table</a>
        </p>
      `;
    }
  };

  fetchStandings();
}

if (latestMatchCard && matchHistoryBody) {
  const teamId = "133738"; // Real Madrid in TheSportsDB
  const todayISO = new Date().toISOString().slice(0, 10);

  const parseEventDate = (event) => {
    const raw = event.dateEvent || event.strTimestamp || "";
    const date = new Date(raw);
    return Number.isNaN(date.getTime()) ? null : date;
  };

  const byDateDesc = (a, b) => {
    const ad = parseEventDate(a);
    const bd = parseEventDate(b);
    if (!ad && !bd) {
      return 0;
    }
    if (!ad) {
      return 1;
    }
    if (!bd) {
      return -1;
    }
    return bd - ad;
  };

  const byDateAsc = (a, b) => {
    const ad = parseEventDate(a);
    const bd = parseEventDate(b);
    if (!ad && !bd) {
      return 0;
    }
    if (!ad) {
      return 1;
    }
    if (!bd) {
      return -1;
    }
    return ad - bd;
  };

  const isFinished = (event) => event.intHomeScore !== null && event.intHomeScore !== undefined;

  const isRealMadridEvent = (event) => {
    const home = (event.strHomeTeam || "").toLowerCase();
    const away = (event.strAwayTeam || "").toLowerCase();
    return home.includes("real madrid") || away.includes("real madrid");
  };

  const renderLeadCard = (event, isUpcoming = false) => {
    const home = event.strHomeTeam || "Home";
    const away = event.strAwayTeam || "Away";
    const homeScore = event.intHomeScore ?? "";
    const awayScore = event.intAwayScore ?? "";
    const league = event.strLeague || "Competition";
    const date = event.dateEvent || event.strTimestamp || "Unknown date";
    const venue = event.strVenue || "Venue TBD";
    const scoreline = isUpcoming ? "vs" : `${homeScore} : ${awayScore}`;
    const subtitle = isUpcoming ? "Next Match" : "Latest Result";

    latestMatchCard.innerHTML = `
      <div class="meta">
        <span>${date}</span>
        <span>${subtitle} · ${league}</span>
      </div>
      <div class="teams">${home} vs ${away}</div>
      <div class="scoreline">${scoreline}</div>
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
    latestMatchCard.innerHTML = `<p class="match-loading">Unable to load match center now.</p>`;
    matchHistoryBody.innerHTML = `
      <tr>
        <td colspan="4" class="match-loading">Unable to load match history now.</td>
      </tr>
    `;
  };

  const loadMatchCenter = async () => {
    try {
      const lastEndpoint = `https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${teamId}`;
      const nextEndpoint = `https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=${teamId}`;
      const seasonEndpoints = [
        `https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=${teamId}&s=2025-2026`,
        `https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=${teamId}&s=2024-2025`,
      ];

      const [lastRes, nextRes, ...seasonRes] = await Promise.all([
        fetch(lastEndpoint),
        fetch(nextEndpoint),
        ...seasonEndpoints.map((url) => fetch(url)),
      ]);

      const [lastData, nextData, ...seasonData] = await Promise.all([
        lastRes.ok ? lastRes.json() : Promise.resolve({}),
        nextRes.ok ? nextRes.json() : Promise.resolve({}),
        ...seasonRes.map((res) => (res.ok ? res.json() : Promise.resolve({}))),
      ]);

      const seasonEvents = seasonData
        .flatMap((data) => data.events || [])
        .filter(isRealMadridEvent);
      const lastEvents = (lastData && lastData.results) || [];
      const nextEvents = (nextData && nextData.events) || [];

      const completedEvents = [...seasonEvents, ...lastEvents]
        .filter(isFinished)
        .sort(byDateDesc);
      const upcomingEvents = [...seasonEvents, ...nextEvents]
        .filter((event) => {
          if (isFinished(event)) {
            return false;
          }
          const rawDate = event.dateEvent || "";
          return !rawDate || rawDate >= todayISO;
        })
        .sort(byDateAsc);

      const leadUpcoming = upcomingEvents[0];
      const leadLatest = completedEvents[0];

      if (leadUpcoming) {
        renderLeadCard(leadUpcoming, true);
      } else if (leadLatest) {
        renderLeadCard(leadLatest, false);
      } else {
        throw new Error("No match data");
      }

      if (completedEvents.length > 0) {
        renderHistory(completedEvents.slice(0, 8));
      } else {
        matchHistoryBody.innerHTML = `
          <tr>
            <td colspan="4" class="match-loading">No recent finished matches found.</td>
          </tr>
        `;
      }
    } catch {
      renderError();
    }
  };

  loadMatchCenter();
}
