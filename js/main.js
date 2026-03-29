const TRANSLATIONS = {
  en: {
    "common.lang.aria": "Switch language",
    "common.nav.home": "Home",
    "common.nav.about": "About",
    "common.nav.favorites": "Favorites",
    "common.nav.thoughts": "Thoughts",
    "common.nav.football": "Football",
    "common.nav.travel": "Travel",
    "common.footer.back": "Back to",
    "common.footer.home": "Home",
    "common.footer.tech": "Built with HTML + CSS + Vanilla JS · Glassmorphism UI",
    "title.home": "Jack Yu | Portfolio",
    "title.about": "About | Jack Yu",
    "title.favorites": "Favorites | Jack Yu",
    "title.thoughts": "Thoughts | Jack Yu",
    "title.football": "Football | Jack Yu",
    "title.travel": "Travel | Jack Yu",
    "travel.city.beijing": "Beijing",
    "travel.label.photos": "{name} photos",
    "travel.label.trip": "{name} trip",
    "travel.label.cityWalk": "{name} city walk",
    "travel.label.noRoute": "No route data yet.",
    "travel.label.routePreview": "Route preview",
    "travel.viewer.close": "Close",
    "travel.legend": "Beijing → Destinations",
    "travel.detail.placeholderTitle": "Select a country card",
    "football.loading.standings": "Loading standings...",
    "football.loading.latest": "Loading latest match...",
    "football.loading.history": "Loading match history...",
    "football.loading.unavailableStandings": "Unable to load standings.",
    "football.loading.unavailableCenter": "Unable to load match center now.",
    "football.loading.unavailableHistory": "Unable to load match history now.",
    "football.loading.noRecent": "No recent finished matches found.",
    "football.label.dataSource": "Data source:",
    "football.label.nextMatch": "Next Match",
    "football.label.latestResult": "Latest Result",
    "football.label.venueTbd": "Venue TBD",
    "football.label.competition": "Competition",
    "football.label.unknownDate": "Unknown date",
    "football.standings.team": "Team",
    "football.standings.played": "P",
    "football.standings.win": "W",
    "football.standings.draw": "D",
    "football.standings.loss": "L",
    "football.standings.goalDiff": "GD",
    "football.standings.points": "Pts",
    "index.logo": "Jack Yu / Portfolio",
    "index.hero.subtitle": "SE Student @ BUAA | Data & Algo Intern",
    "index.hero.cta": "View My Work →",
    "index.quick.title": "Quick Intro",
    "index.quick.body":
      "I love <span class=\"emph\">Artificial Intelligence</span>, live for <span class=\"emph\">Real Madrid</span>, and keep a <span class=\"emph\">travel</span> mindset, curious, open, and always exploring new ideas.",
    "index.quick.ai": "AI",
    "index.quick.madrid": "Real Madrid",
    "index.quick.travel": "Travel",
    "index.explore.title": "Explore The Pages",
    "index.explore.body": "This homepage is a quick overview. Jump into each page for the full story, galleries, and notes.",
    "index.card.about.title": "About Me",
    "index.card.about.body": "Background, skills, and what I focus on in software engineering.",
    "index.card.favorites.title": "My Favorites",
    "index.card.favorites.body": "Football, favorite clubs, and the games I play.",
    "index.card.thoughts.title": "Thoughts",
    "index.card.thoughts.body": "Recent ideas and short notes on ML and autonomy.",
    "index.card.football.title": "Football (Hala Madrid)",
    "index.card.football.body": "Real Madrid news, fixtures, and fandom highlights.",
    "index.card.travel.title": "Travel Gallery",
    "index.card.travel.body": "Horizontal gallery with notes from recent trips.",
    "about.logo": "Jack Yu / About",
    "about.hero.title": "About Me",
    "about.hero.subtitle": "SE Student @ BUAA | Data & Algo Intern",
    "about.hero.body":
      "I'm Jack Yu, a Software Engineering student at BUAA and a data & algorithm intern. I build clean, reliable systems and bring the same midfield mindset to engineering: read the game early, move the ball fast, and make teammates better.",
    "about.chip.python": "Python",
    "about.chip.cpp": "C++",
    "about.chip.ai": "AI / ML",
    "about.chip.cm": "CM · Playmaker",
    "about.chip.madrid": "Real Madrid",
    "about.chip.press": "High Press Mindset",
    "about.panel.hala": "Hala Madrid",
    "about.panel.title": "Midfield Profile",
    "about.panel.body": "Preferred role: central midfielder. I focus on progressive passing, tempo control, and covering transition lanes.",
    "about.focus.title": "Focus Areas",
    "about.focus.body":
      "Working on perception pipelines, high-quality datasets, and efficient model training. I'm especially interested in bridging research ideas into production-grade autonomy systems.",
    "about.dna.title": "Football DNA",
    "about.dna.club.title": "Club Identity",
    "about.dna.club.body": "Real Madrid supporter, inspired by elite standards and composure under pressure.",
    "about.dna.pitch.title": "On-Pitch Style",
    "about.dna.pitch.body": "Central midfield role with quick scanning, line-breaking passes, and compact positioning.",
    "about.dna.engineering.title": "Engineering Parallel",
    "about.dna.engineering.body": "Build systems like match control: clear structure, fast transitions, and resilient execution.",
    "thoughts.logo": "Jack Yu / Thoughts",
    "thoughts.hero.title": "Thoughts",
    "thoughts.hero.subtitle": "Short notes on ML, autonomy, and systems.",
    "thoughts.item1.title": "Data-centric autonomy",
    "thoughts.item1.body": "Exploring how clean labeling and curriculum design can accelerate perception performance.",
    "thoughts.item2.title": "Efficiency first",
    "thoughts.item2.body": "Reducing training cost with mixed-precision pipelines and smarter data sampling.",
    "thoughts.item3.title": "Product-minded ML",
    "thoughts.item3.body": "Aligning model metrics with real-world driving KPIs for measurable impact.",
    "favorites.logo": "Jack Yu / Favorites",
    "favorites.hero.kicker": "Personal Moodboard",
    "favorites.hero.title": "My Favorites",
    "favorites.hero.subtitle": "Football, ski days, Cristiano Ronaldo, and late-night gaming energy.",
    "favorites.stats.passions": "Main Passions",
    "favorites.stats.years": "Years of Football",
    "favorites.stats.rank": "Peak Rank",
    "favorites.stats.reset": "Winter Reset",
    "favorites.stage.pill": "What Defines My Off-Time",
    "favorites.stage.title": "Speed, atmosphere, and a little obsession with iconic moments.",
    "favorites.stage.body":
      "This page is the visual version of what I keep going back to: match nights, ski tracks, Ronaldo edits, and games that feel competitive even when they are just for fun.",
    "favorites.tag.football": "Football Culture",
    "favorites.tag.ski": "Ski Trips",
    "favorites.tag.ronaldo": "CR7 Aura",
    "favorites.tag.gaming": "Gaming Nights",
    "favorites.mosaic.ronaldo": "Iconic tunnel-vision focus.",
    "favorites.mosaic.ski": "Cold air, clean lines, zero noise.",
    "favorites.mosaic.football": "Live football atmosphere always hits different.",
    "favorites.mosaic.gaming": "Competitive games, but make them personal.",
    "favorites.ski.kicker": "01 / Skiing",
    "favorites.ski.title": "When I want to clear my head, I go for speed on snow.",
    "favorites.ski.body":
      "Skiing is the cleanest reset I know. No crowd, no noise, just rhythm, balance, and the feeling of cutting through fresh white tracks. It is the kind of hobby that turns focus into calm.",
    "favorites.ski.note1.title": "Why it stays",
    "favorites.ski.note1.body": "Fast, quiet, technical, and visually addictive.",
    "favorites.ski.note2.title": "Best part",
    "favorites.ski.note2.body": "The moment after the turn when everything feels weightless.",
    "favorites.ronaldo.kicker": "02 / Cristiano Ronaldo",
    "favorites.ronaldo.title": "The aura is part discipline, part theatre, and all conviction.",
    "favorites.ronaldo.body":
      "Ronaldo has always been more than numbers. It is the posture, the silhouette before kickoff, the obsession with detail, and the way every entrance feels cinematic. He makes ambition look stylish.",
    "favorites.ronaldo.tag1": "Relentless",
    "favorites.ronaldo.tag2": "Sharp",
    "favorites.ronaldo.tag3": "Elite mentality",
    "favorites.ronaldo.tag4": "Main-character energy",
    "favorites.football.kicker": "03 / Football Culture",
    "favorites.football.title": "From club badges to stadium noise, football still runs through everything.",
    "favorites.football.body":
      "The clubs I keep close say a lot about what I admire: legacy, style, intensity, and atmosphere. Real Madrid for the standard, Dortmund for the fire, AC Milan for the look, Beijing Guoan for the feeling of being there in person.",
    "favorites.club.title": "Favorite Clubs",
    "favorites.club.pill": "Identity",
    "favorites.stadium.title": "Live Match Atmosphere",
    "favorites.stadium.body": "The kind of crowd that makes ninety minutes feel much bigger than the scoreline.",
    "favorites.pitch.title": "On The Pitch",
    "favorites.pitch.pill": "CM · Playmaker",
    "favorites.pitch.body": "Through passes, late runs, long shots, and the habit of looking for the extra pass.",
    "favorites.gaming.kicker": "04 / Gaming",
    "favorites.gaming.title": "Competitive games are part rank grind, part visual memory.",
    "favorites.gaming.body":
      "Gaming for me is not only about winning. It is the interface glow, the queue-up mood, the soundtrack, and the screenshots you keep because they mark a moment. Honor of Kings is the center of that world right now.",
    "football.logo": "Jack Yu / Football",
    "football.hero.title": "Hala Madrid",
    "football.hero.body": "I’m a die-hard Madridista. This page collects the latest Real Madrid updates, fixtures, and match headlines, plus a few personal notes.",
    "football.hero.badge1": "Real Madrid · Since 1902",
    "football.hero.badge2": "Position: CM · Through Balls",
    "football.news.title": "Latest News",
    "football.news.desc":
      "Latest verified updates as of <strong>2026-03-29</strong>. This feed is refreshed from public match and fixture sources for Real Madrid's most recent results plus the next key dates.",
    "football.news.item1.title": "Madrid derby final: Real Madrid 3-2 Atletico (LaLiga)",
    "football.news.item1.body": "ESPN match center confirms Madrid won 3-2 at the Bernabeu in a key league clash before the April run-in.",
    "football.news.item2.title": "UEFA UCL result: Man City 1-2 Real Madrid (agg 1-5)",
    "football.news.item2.body": "ESPN match report lists Madrid's 2-1 away win at the Etihad, sealing qualification with a 5-1 aggregate score.",
    "football.news.item3.title": "Upcoming fixtures: Mallorca vs Real Madrid (Apr 4), then Bayern (Apr 7)",
    "football.news.item3.body": "ESPN fixtures list Mallorca away on April 4, 2026, followed by the UCL quarterfinal first leg vs Bayern on April 7.",
    "football.standings.title": "La Liga Standings",
    "football.center.title": "Match Center",
    "football.center.desc": "Live from public football data: next fixture plus recent Real Madrid results.",
    "football.center.recent": "Recent Results",
    "football.table.date": "Date",
    "football.table.competition": "Competition",
    "football.table.match": "Match",
    "football.table.score": "Score",
    "football.ritual.title": "Matchday Ritual",
    "football.ritual.body": "Weekend matchdays are for early line-up checks, tactical notes, and a late-night highlight replay. Hala Madrid y nada más.",
    "travel.logo": "Jack Yu / Travel",
    "travel.hero.title": "Travel Gallery",
    "travel.hero.subtitle": "World map · Beijing to every destination.",
    "travel.viewer.title": "Trip photos",
    "travel.detail.placeholderBody": "Click a travel card to zoom map and show your in-country route.",
  },
  zh: {
    "common.lang.aria": "切换语言",
    "common.nav.home": "首页",
    "common.nav.about": "关于我",
    "common.nav.favorites": "我的热爱",
    "common.nav.thoughts": "想法",
    "common.nav.football": "足球",
    "common.nav.travel": "旅行",
    "common.footer.back": "返回",
    "common.footer.home": "首页",
    "common.footer.tech": "基于 HTML + CSS + Vanilla JS 构建 · 玻璃拟态界面",
    "title.home": "Jack Yu | 个人主页",
    "title.about": "关于我 | Jack Yu",
    "title.favorites": "我的热爱 | Jack Yu",
    "title.thoughts": "想法 | Jack Yu",
    "title.football": "足球 | Jack Yu",
    "title.travel": "旅行 | Jack Yu",
    "travel.city.beijing": "北京",
    "travel.label.photos": "{name} 的照片",
    "travel.label.trip": "{name} 之旅",
    "travel.label.cityWalk": "{name} 城市漫步",
    "travel.label.noRoute": "暂时还没有路线数据。",
    "travel.label.routePreview": "路线预览",
    "travel.viewer.close": "关闭",
    "travel.legend": "北京 → 目的地",
    "travel.detail.placeholderTitle": "请选择一张国家卡片",
    "football.loading.standings": "积分榜加载中...",
    "football.loading.latest": "最近比赛加载中...",
    "football.loading.history": "比赛记录加载中...",
    "football.loading.unavailableStandings": "暂时无法加载积分榜。",
    "football.loading.unavailableCenter": "暂时无法加载比赛中心。",
    "football.loading.unavailableHistory": "暂时无法加载比赛记录。",
    "football.loading.noRecent": "暂未找到最近已结束的比赛。",
    "football.label.dataSource": "数据来源：",
    "football.label.nextMatch": "下一场比赛",
    "football.label.latestResult": "最近赛果",
    "football.label.venueTbd": "场地待定",
    "football.label.competition": "赛事",
    "football.label.unknownDate": "日期未知",
    "football.standings.team": "球队",
    "football.standings.played": "场",
    "football.standings.win": "胜",
    "football.standings.draw": "平",
    "football.standings.loss": "负",
    "football.standings.goalDiff": "净胜球",
    "football.standings.points": "积分",
    "index.logo": "Jack Yu / 个人主页",
    "index.hero.subtitle": "北航软件工程学生 ｜ 数据与算法实习生",
    "index.hero.cta": "查看我的世界 →",
    "index.quick.title": "快速介绍",
    "index.quick.body":
      "我热爱 <span class=\"emph\">人工智能</span>，为 <span class=\"emph\">皇家马德里</span> 着迷，也一直保持 <span class=\"emph\">旅行者</span> 的心态，保持好奇、开放，持续探索新想法。",
    "index.quick.ai": "人工智能",
    "index.quick.madrid": "皇家马德里",
    "index.quick.travel": "旅行",
    "index.explore.title": "浏览页面",
    "index.explore.body": "这里是我的简要总览。点进每个页面，可以看到更完整的故事、图片和记录。",
    "index.card.about.title": "关于我",
    "index.card.about.body": "我的背景、技能，以及我在软件工程中关注的方向。",
    "index.card.favorites.title": "我的热爱",
    "index.card.favorites.body": "足球、喜欢的俱乐部，还有我常玩的游戏。",
    "index.card.thoughts.title": "想法",
    "index.card.thoughts.body": "一些关于机器学习和自动驾驶的短笔记。",
    "index.card.football.title": "足球（Hala Madrid）",
    "index.card.football.body": "皇马资讯、赛程，以及我作为球迷的记录。",
    "index.card.travel.title": "旅行相册",
    "index.card.travel.body": "最近旅行的横向画廊和一些沿途笔记。",
    "about.logo": "Jack Yu / 关于我",
    "about.hero.title": "关于我",
    "about.hero.subtitle": "北航软件工程学生 ｜ 数据与算法实习生",
    "about.hero.body":
      "我是 Jack Yu，北航软件工程专业学生，也是一名数据与算法实习生。我喜欢构建干净、可靠的系统，也把中场思维带进工程里：更早读懂局势、更快把球传出去、也让团队配合得更好。",
    "about.chip.python": "Python",
    "about.chip.cpp": "C++",
    "about.chip.ai": "AI / ML",
    "about.chip.cm": "中场 · 组织者",
    "about.chip.madrid": "皇家马德里",
    "about.chip.press": "高压逼抢思维",
    "about.panel.hala": "Hala Madrid",
    "about.panel.title": "中场画像",
    "about.panel.body": "偏好的位置是中场。我更关注向前推进的传球、节奏控制，以及对转换线路的覆盖。",
    "about.focus.title": "关注方向",
    "about.focus.body": "我正在做感知流水线、高质量数据集和高效模型训练，也尤其关注如何把研究想法真正落到生产级自动驾驶系统里。",
    "about.dna.title": "足球 DNA",
    "about.dna.club.title": "俱乐部气质",
    "about.dna.club.body": "作为皇马球迷，我始终被顶级标准和关键时刻的从容所吸引。",
    "about.dna.pitch.title": "球场风格",
    "about.dna.pitch.body": "主打中场位置，强调快速观察、打穿防线的传球，以及紧凑站位。",
    "about.dna.engineering.title": "工程映射",
    "about.dna.engineering.body": "我喜欢像掌控比赛那样构建系统：结构清晰、转换快速、执行稳定。",
    "thoughts.logo": "Jack Yu / 想法",
    "thoughts.hero.title": "想法",
    "thoughts.hero.subtitle": "关于机器学习、自动驾驶和系统的一些短笔记。",
    "thoughts.item1.title": "数据中心的自动驾驶",
    "thoughts.item1.body": "我在思考更干净的标注和更合理的课程设计，是否能更快提升感知表现。",
    "thoughts.item2.title": "效率优先",
    "thoughts.item2.body": "通过混合精度训练和更聪明的数据采样，进一步降低训练成本。",
    "thoughts.item3.title": "产品视角的机器学习",
    "thoughts.item3.body": "让模型指标真正对应到真实驾驶中的关键 KPI，才能产生可衡量的价值。",
    "favorites.logo": "Jack Yu / 我的热爱",
    "favorites.hero.kicker": "个人兴趣板",
    "favorites.hero.title": "我的热爱",
    "favorites.hero.subtitle": "足球、滑雪、C 罗，还有深夜游戏时的氛围感。",
    "favorites.stats.passions": "核心热爱",
    "favorites.stats.years": "足球年限",
    "favorites.stats.rank": "最高段位",
    "favorites.stats.reset": "冬日重启",
    "favorites.stage.pill": "什么构成了我的休息时刻",
    "favorites.stage.title": "速度、氛围感，以及一点对经典瞬间的执着。",
    "favorites.stage.body": "这一页基本就是我会反复回到的东西：比赛夜、雪道、C 罗的镜头感，还有那些带着竞争味道的游戏时刻。",
    "favorites.tag.football": "足球文化",
    "favorites.tag.ski": "滑雪旅行",
    "favorites.tag.ronaldo": "CR7 气场",
    "favorites.tag.gaming": "游戏夜晚",
    "favorites.mosaic.ronaldo": "极致专注，本身就很有画面感。",
    "favorites.mosaic.ski": "冷空气、清晰的雪痕、和完全安静的世界。",
    "favorites.mosaic.football": "现场足球的氛围，永远比镜头里更震撼。",
    "favorites.mosaic.gaming": "游戏可以竞争，也可以很私人。",
    "favorites.ski.kicker": "01 / 滑雪",
    "favorites.ski.title": "想把脑子清空的时候，我就去雪地里感受速度。",
    "favorites.ski.body": "滑雪是我最直接的 reset。没有人群，没有噪音，只有节奏、平衡，还有雪板切开雪面的那种干净感。这种爱好会把专注慢慢变成平静。",
    "favorites.ski.note1.title": "为什么一直喜欢",
    "favorites.ski.note1.body": "够快、够安静、够技术流，也足够上头。",
    "favorites.ski.note2.title": "最喜欢的瞬间",
    "favorites.ski.note2.body": "转弯结束的那一下，整个人像短暂失重。",
    "favorites.ronaldo.kicker": "02 / C 罗",
    "favorites.ronaldo.title": "他的气场，一半来自自律，一半来自表演感，但全部都很坚定。",
    "favorites.ronaldo.body": "对我来说，Ronaldo 从来不只是数据。他的站姿、开球前的轮廓、对细节的执念，以及每次出场都像电影镜头一样的感觉，都会让野心显得很高级。",
    "favorites.ronaldo.tag1": "狠",
    "favorites.ronaldo.tag2": "利落",
    "favorites.ronaldo.tag3": "顶级心态",
    "favorites.ronaldo.tag4": "主角气场",
    "favorites.football.kicker": "03 / 足球文化",
    "favorites.football.title": "从队徽到看台噪音，足球一直贯穿着我的兴趣结构。",
    "favorites.football.body": "我长期偏爱的俱乐部，基本也代表了我欣赏的东西：传统、风格、强度与氛围。皇马代表标准，多特代表热度，米兰代表审美，国安代表亲临现场的情绪价值。",
    "favorites.club.title": "喜欢的俱乐部",
    "favorites.club.pill": "身份认同",
    "favorites.stadium.title": "现场看球氛围",
    "favorites.stadium.body": "那种让九十分钟看起来远不止比分本身的看台氛围，很难替代。",
    "favorites.pitch.title": "我在场上的感觉",
    "favorites.pitch.pill": "中场 · 组织者",
    "favorites.pitch.body": "更喜欢直塞、后插上、远射，以及永远想多看一眼再把球传出去。",
    "favorites.gaming.kicker": "04 / 游戏",
    "favorites.gaming.title": "竞技游戏一半是上分，一半是氛围记忆。",
    "favorites.gaming.body": "对我来说，游戏不只是赢。还有界面的光感、排位前的情绪、BGM，以及那些会留下来的截图。现在这个世界里，王者荣耀是最中心的存在。",
    "football.logo": "Jack Yu / 足球",
    "football.hero.title": "Hala Madrid",
    "football.hero.body": "我是很纯粹的 Madridista。这一页会收集最新的皇马动态、赛程、比赛 headlines，以及一些我自己的球迷笔记。",
    "football.hero.badge1": "皇家马德里 · 创立于 1902",
    "football.hero.badge2": "位置：中场 · 擅长直塞",
    "football.news.title": "最新动态",
    "football.news.desc": "以下是截至 <strong>2026-03-29</strong> 的已核实更新。内容基于公开比赛与赛程来源，整理了皇马最近的赛果和接下来的关键时间点。",
    "football.news.item1.title": "马德里德比战报：皇家马德里 3 比 2 马德里竞技（西甲）",
    "football.news.item1.body": "ESPN 比赛中心显示，皇马在伯纳乌以 3 比 2 拿下关键联赛胜利，为四月冲刺阶段开了一个好头。",
    "football.news.item2.title": "欧冠战报：曼城 1 比 2 皇家马德里（总比分 1 比 5）",
    "football.news.item2.body": "ESPN 战报显示，皇马在伊蒂哈德客场 2 比 1 取胜，并以总比分 5 比 1 晋级。",
    "football.news.item3.title": "接下来的赛程：4 月 4 日客战马略卡，4 月 7 日对阵拜仁",
    "football.news.item3.body": "ESPN 赛程页面显示，2026 年 4 月 4 日皇马将客战马略卡，随后在 4 月 7 日迎来欧冠四分之一决赛首回合对阵拜仁。",
    "football.standings.title": "西甲积分榜",
    "football.center.title": "比赛中心",
    "football.center.desc": "基于公开足球数据展示：下一场比赛，以及皇马最近的比赛结果。",
    "football.center.recent": "近期赛果",
    "football.table.date": "日期",
    "football.table.competition": "赛事",
    "football.table.match": "比赛",
    "football.table.score": "比分",
    "football.ritual.title": "比赛日仪式感",
    "football.ritual.body": "周末比赛日，就是早早看首发、记战术细节，再在深夜把集锦回放一遍。Hala Madrid y nada más。",
    "travel.logo": "Jack Yu / 旅行",
    "travel.hero.title": "旅行相册",
    "travel.hero.subtitle": "世界地图 · 从北京出发，抵达每一个目的地。",
    "travel.viewer.title": "旅途照片",
    "travel.detail.placeholderBody": "点击一张旅行卡片，地图会缩放到对应国家，并展示我在当地的路线。",
  },
};

const LANGUAGE_KEY = "site-language";
const defaultLanguage =
  localStorage.getItem(LANGUAGE_KEY) ||
  (navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
let currentLanguage = defaultLanguage in TRANSLATIONS ? defaultLanguage : "en";

const t = (key, vars = {}) => {
  const template =
    TRANSLATIONS[currentLanguage]?.[key] ??
    TRANSLATIONS.en[key] ??
    key;
  return Object.entries(vars).reduce(
    (result, [name, value]) => result.replaceAll(`{${name}}`, value),
    template
  );
};

const updateLanguageToggle = () => {
  document.querySelectorAll(".lang-toggle").forEach((button) => {
    button.setAttribute("aria-label", t("common.lang.aria"));
    const textNode = button.querySelector(".lang-toggle-text");
    if (textNode) {
      textNode.textContent = currentLanguage === "en" ? "中文" : "EN";
    }
  });
};

const applyTranslations = () => {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });

  if (document.body?.dataset.titleKey) {
    document.title = t(document.body.dataset.titleKey);
  }

  updateLanguageToggle();
  window.dispatchEvent(new CustomEvent("languagechange", { detail: { language: currentLanguage } }));
};

document.querySelectorAll(".lang-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "zh" : "en";
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    applyTranslations();
  });
});

applyTranslations();

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
      .bindPopup(t("travel.city.beijing"));

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
      mapPhotoViewerTitle.textContent = t("travel.label.photos", { name: cityName });
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

      tripTitle.textContent = t("travel.label.trip", { name: country });
      tripYear.textContent = year;
      tripRoute.textContent =
        route.length > 1
          ? route.map((point) => point.name).join(" -> ")
          : route.length === 1
          ? t("travel.label.cityWalk", { name: route[0].name })
          : t("travel.label.noRoute");

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

    window.addEventListener("languagechange", () => {
      if (mapPhotoViewerTitle && !mapPhotoViewer.hidden && mapPhotoViewerTitle.textContent) {
        const cityName = mapPhotoViewerTitle.textContent.replace(/\s*(photos|的照片)\s*$/, "");
        mapPhotoViewerTitle.textContent = t("travel.label.photos", { name: cityName });
      }

      const selectedCard = document.querySelector(".travel-card.is-selected");
      if (selectedCard) {
        const route = parseRoute(selectedCard);
        const photoMap = parsePhotoMap(selectedCard);
        renderTripDetail(selectedCard, route, photoMap);
      } else {
        if (tripTitle) {
          tripTitle.textContent = t("travel.detail.placeholderTitle");
        }
        if (tripYear) {
          tripYear.textContent = t("travel.label.routePreview");
        }
        if (tripRoute) {
          tripRoute.textContent = t("travel.detail.placeholderBody");
        }
      }
    });

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
      const endpoint = `https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${LA_LIGA_ID}&s=2025-2026`;
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
          <th>${t("football.standings.team")}</th>
          <th>${t("football.standings.played")}</th>
          <th>${t("football.standings.win")}</th>
          <th>${t("football.standings.draw")}</th>
          <th>${t("football.standings.loss")}</th>
          <th>${t("football.standings.goalDiff")}</th>
          <th>${t("football.standings.points")}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.join("")}
          </tbody>
        </table>
        <p class="match-source">
          ${t("football.label.dataSource")}
          <a href="https://www.thesportsdb.com/" target="_blank" rel="noreferrer">TheSportsDB</a>
        </p>
      `;
    } catch {
      standingsPanel.innerHTML = `
        <p class="match-loading">
          ${t("football.loading.unavailableStandings")}
          <a href="https://www.laliga.com/en-GB/laliga-easports/standing" target="_blank" rel="noreferrer" style="color: #a6fff1;">View LaLiga table</a>
        </p>
      `;
    }
  };

  fetchStandings();
  window.addEventListener("languagechange", fetchStandings);
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
    const league = event.strLeague || t("football.label.competition");
    const date = event.dateEvent || event.strTimestamp || t("football.label.unknownDate");
    const venue = event.strVenue || t("football.label.venueTbd");
    const scoreline = isUpcoming ? "vs" : `${homeScore} : ${awayScore}`;
    const subtitle = isUpcoming ? t("football.label.nextMatch") : t("football.label.latestResult");

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
    latestMatchCard.innerHTML = `<p class="match-loading">${t("football.loading.unavailableCenter")}</p>`;
    matchHistoryBody.innerHTML = `
      <tr>
        <td colspan="4" class="match-loading">${t("football.loading.unavailableHistory")}</td>
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
            <td colspan="4" class="match-loading">${t("football.loading.noRecent")}</td>
          </tr>
        `;
      }
    } catch {
      renderError();
    }
  };

  loadMatchCenter();
  window.addEventListener("languagechange", loadMatchCenter);
}
