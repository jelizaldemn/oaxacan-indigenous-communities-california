// DATA Sources: IFS (Indigenous Farmworker Study), NCFH, Census 2000-2020, MICOP, Fresno Bee, UC Berkeley
// Population estimates reflect best available data from multiple sources.
// Many communities are significantly undercounted in official statistics.

const dataByLanguage = [
  {
    name: "Mixtec",
    nameNative: "(Tu'un Savi)",
    population: 185000,
    percent: 53,
    region: "Mixteca (Alta, Baja, Costa)",
    caRegions: "Central Valley, Ventura, San Diego, Central Coast",
    detail: "The most spoken Indigenous language in California. 150,000+ estimated speakers. They come from the Mixteca region of Oaxaca, Guerrero and Puebla. They work primarily in agriculture.",
    color: "var(--chart-1)"
  },
  {
    name: "Zapotec",
    nameNative: "(Diidxaza)",
    population: 91000,
    percent: 26,
    region: "Central Valleys, Sierra Norte",
    caRegions: "Los Angeles, Central Valley",
    detail: "Second largest community. 50,000-60,000 in Los Angeles. They work in restaurants, construction and services. The most urbanized community.",
    color: "var(--chart-2)"
  },
  {
    name: "Triqui",
    nameNative: "(Driki)",
    population: 35000,
    percent: 10,
    region: "Mixteca Alta (Copala, Chicahuaxtla, Itunyoso)",
    caRegions: "Central Coast, Central Valley, Sonoma",
    detail: "Third largest community. Concentrated in Greenfield, Salinas and Santa Rosa. High rate of monolingualism in Indigenous language.",
    color: "var(--chart-3)"
  },
  {
    name: "Chatino",
    nameNative: "(Chat'nio)",
    population: 7000,
    percent: 2,
    region: "Sierra Sur / Coast of Oaxaca",
    caRegions: "Central Valley (Madera), Santa Cruz",
    detail: "Growing community in California. 'Kitse chat'nio' means 'Work of Words'. They come from southwest Oaxaca.",
    color: "var(--chart-4)"
  },
  {
    name: "Nahuatl",
    nameNative: "(Nahuatlahtolli)",
    population: 7000,
    percent: 2,
    region: "Northern Oaxaca and Guerrero/Puebla",
    caRegions: "Central Valley, Los Angeles",
    detail: "The most widely spoken Indigenous language in Mexico overall. In California they come from border regions of Oaxaca, Guerrero and Puebla.",
    color: "var(--chart-5)"
  },
  {
    name: "Mixe",
    nameNative: "(Ayuuk)",
    population: 5000,
    percent: 1.5,
    region: "Sierra Norte (Highlands)",
    caRegions: "Los Angeles",
    detail: "Community concentrated in Los Angeles. Isolated language of the Mixe-Zoquean group. Known for high rate of monolingualism in Oaxaca.",
    color: "var(--chart-6)"
  },
  {
    name: "Amuzgo",
    nameNative: "(Tzjon Non)",
    population: 4000,
    percent: 1.2,
    region: "Costa Chica (Oaxaca-Guerrero border)",
    caRegions: "San Diego, Ventura, Madera",
    detail: "Tzjon Non means 'Village of Textiles'. Present in San Diego and Ventura County. Relatively small but established community.",
    color: "var(--chart-7)"
  },
  {
    name: "Chinantec",
    nameNative: "(Tsa jujmi)",
    population: 3500,
    percent: 1,
    region: "Sierra Norte (Chinantla)",
    caRegions: "Central Valley, Los Angeles",
    detail: "They come from the Chinantla region in northern Oaxaca. Language with 11 linguistic variants recognized by INALI.",
    color: "var(--chart-8)"
  },
  {
    name: "Mazatec",
    nameNative: "(Ha shuta enima)",
    population: 2500,
    percent: 0.7,
    region: "Canada (Sierra Mazateca)",
    caRegions: "Central Valley",
    detail: "They come from the Canada region of Oaxaca. 16 linguistic variants. Historically an agricultural community in their regions of origin.",
    color: "var(--chart-9)"
  },
  {
    name: "Other Languages",
    nameNative: "Cuicatec, Huave, Chontal, Zoque...",
    population: 10000,
    percent: 3,
    region: "Various regions of Oaxaca",
    caRegions: "Various destinations in California",
    detail: "Includes speakers of Cuicatec, Huave, Oaxacan Chontal, Zoque, Popoloca, Chocho and other minor languages. Communities dispersed throughout California.",
    color: "var(--chart-10)"
  }
];

const dataByRegion = [
  {
    name: "Mixteca",
    population: 195000,
    languages: "Mixtec, Triqui, Amuzgo",
    subregions: "Mixteca Alta, Mixteca Baja, Mixteca de la Costa",
    caRegions: "Central Valley, Ventura, San Diego, Central Coast",
    detail: "The region that sends the most migrants to California. Includes parts of northwest Oaxaca, southern Puebla and eastern Guerrero. Land of the Nuu Savi (Rain People).",
    color: "var(--chart-1)"
  },
  {
    name: "Central Valleys",
    population: 65000,
    languages: "Zapotec",
    subregions: "Tlacolula, Zimatlan, Etla, Ocotlan",
    caRegions: "Los Angeles, Central Valley",
    detail: "Heart of Zapotec civilization. Monte Alban and Mitla. Main source of Zapotec migrants to Los Angeles where they work in services and restaurants.",
    color: "var(--chart-2)"
  },
  {
    name: "Sierra Norte",
    population: 32000,
    languages: "Zapotec, Mixe, Chinantec",
    subregions: "Sierra de Juarez, Villa Alta, Ixtlan",
    caRegions: "Los Angeles, Central Valley",
    detail: "Mountainous region with great linguistic diversity. Home of highland Zapotecs, Mixes and Chinantecs. Rich in biodiversity and ecotourism.",
    color: "var(--chart-3)"
  },
  {
    name: "Sierra Sur",
    population: 15000,
    languages: "Chatino, Zapotec",
    subregions: "Juquila, Sola de Vega, Miahuatlan",
    caRegions: "Central Valley, Santa Cruz",
    detail: "Remote and mountainous region. Home of the Chatinos and southern Zapotecs. The Chatinos call themselves Kitse chat'nio (Work of Words).",
    color: "var(--chart-4)"
  },
  {
    name: "Canada",
    population: 8000,
    languages: "Mazatec, Cuicatec, Nahuatl",
    subregions: "Huautla, Teotitlan, Cuicatlan",
    caRegions: "Central Valley",
    detail: "Narrow region in northeast Oaxaca. Predominantly Mazatec. Known for herbal medicine and natural springs. The Mazatecs have 16 linguistic variants.",
    color: "var(--chart-5)"
  },
  {
    name: "Coast",
    population: 12000,
    languages: "Coastal Mixtec, Chatino, Amuzgo",
    subregions: "Jamiltepec, Pinotepa Nacional, Tututepec",
    caRegions: "San Diego, Ventura, Central Valley",
    detail: "Pacific coast of Oaxaca. Afro-Mexican influences. Mix of coastal Mixtec, Chatino and Amuzgo. Region of traditional textiles.",
    color: "var(--chart-6)"
  },
  {
    name: "Isthmus of Tehuantepec",
    population: 10000,
    languages: "Isthmus Zapotec, Huave, Zoque",
    subregions: "Juchitan, Tehuantepec, San Mateo del Mar",
    caRegions: "Los Angeles, Central Valley",
    detail: "Isthmus region with strong Zapotec identity. The Huaves live on the Pacific coast. Known for matrilineal society and muxes.",
    color: "var(--chart-7)"
  },
  {
    name: "Chinantla",
    population: 5000,
    languages: "Chinantec",
    subregions: "Valle Nacional, Usila, Ojitlan",
    caRegions: "Central Valley, Los Angeles",
    detail: "Forested and humid region in northern Oaxaca. Eleven Chinantec linguistic variants. Region affected by dam construction that displaced communities.",
    color: "var(--chart-8)"
  },
  {
    name: "Other regions",
    population: 8000,
    languages: "Various",
    subregions: "Various",
    caRegions: "Various destinations",
    detail: "Includes migrants from the high Sierra Mixe, Papaloapan, and border regions with Veracruz, Guerrero and Puebla.",
    color: "var(--chart-10)"
  }
];

const dataByCaliforniaRegion = [
  {
    name: "Central Valley",
    population: 100000,
    counties: "Fresno, Madera, Tulare, Kern, Merced, San Joaquin, Stanislaus, Kings",
    languages: "Mixtec, Triqui, Zapotec, Chatino",
    detail: "Largest concentration of Oaxacans in California. 45,000-100,000 people. Center of agriculture and farmwork. Fresno, Madera and Tulare are the main counties.",
    color: "var(--chart-1)"
  },
  {
    name: "Los Angeles Metro",
    population: 120000,
    counties: "Los Angeles, Orange, San Bernardino, Riverside",
    languages: "Zapotec, Mixe, Mixtec, Triqui",
    detail: "Largest and most urbanized community. 50,000-250,000 estimated. Zapotecs predominate. They work in restaurants, construction and services. Mar Vista, Pico Union, Koreatown.",
    color: "var(--chart-2)"
  },
  {
    name: "San Diego County",
    population: 25000,
    counties: "San Diego",
    languages: "Mixtec, Amuzgo, Triqui",
    detail: "25,000 estimated. 10,000-15,000 in informal camps in the hills of northern San Diego County. Predominantly male and young community. Oceanside, Vista, Escondido.",
    color: "var(--chart-3)"
  },
  {
    name: "Central Coast",
    population: 30000,
    counties: "Santa Barbara, Monterey, Santa Cruz, San Mateo, San Benito",
    languages: "Mixtec, Triqui, Zapotec, Chatino",
    detail: "15,000-30,000 people. Most linguistically diverse region. Santa Maria, Greenfield, Salinas, Watsonville. Agricultural work in strawberries, lettuce and coastal hotels.",
    color: "var(--chart-4)"
  },
  {
    name: "Ventura County",
    population: 20000,
    counties: "Ventura",
    languages: "Mixtec, Triqui, Zapotec, Amuzgo, Chatino",
    detail: "20,000 estimated. Oxnard, Port Hueneme, El Rio. Work harvesting strawberries and raspberries. 80% speak some Spanish. Newer migrants are younger and monolingual.",
    color: "var(--chart-5)"
  },
  {
    name: "San Francisco Bay Area",
    population: 15000,
    counties: "Santa Clara, San Mateo, Alameda, San Francisco, Contra Costa",
    languages: "Mixtec, Zapotec",
    detail: "Growing urban community. San Jose, Milpitas, Half Moon Bay. Mix of agricultural work (Pescadero) and urban services.",
    color: "var(--chart-6)"
  },
  {
    name: "North Bay",
    population: 5000,
    counties: "Sonoma, Napa",
    languages: "Mixtec, Triqui",
    detail: "Emerging community. Santa Rosa, Graton, Sebastopol, St. Helena. Work in vineyards and agriculture. Communities in Healdsburg, Windsor, Cloverdale.",
    color: "var(--chart-7)"
  }
];
// --- CHART COLOR GETTERS ---
const chartColors = ["--chart-1","--chart-2","--chart-3","--chart-4","--chart-5","--chart-6","--chart-7","--chart-8","--chart-9","--chart-10","--chart-11","--chart-12"];
function getColor(index) {
  const style = getComputedStyle(document.documentElement);
  return style.getPropertyValue(chartColors[index % chartColors.length]).trim();
}

// --- GLOBALS ---
let currentView = "language";
let simulation;
let svgG;
let width, height;
let highlightedGroup = null;

// --- INIT ---
function init() {
  setupThemeToggle();
  setupViewToggle();
  renderChart();
  renderStats();
  window.addEventListener("resize", debounce(renderChart, 250));
}

// --- THEME TOGGLE ---
function setupThemeToggle() {
  const t = document.querySelector("[data-theme-toggle]");
  const r = document.documentElement;
  let d = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  r.setAttribute("data-theme", d);
  updateThemeIcon(t, d);
  t.addEventListener("click", () => {
    d = d === "dark" ? "light" : "dark";
    r.setAttribute("data-theme", d);
    updateThemeIcon(t, d);
    renderChart();
  });
}
function updateThemeIcon(btn, theme) {
  if (!btn) return;
  btn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  btn.innerHTML = theme === "dark" ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

// --- VIEW TOGGLE ---
function setupViewToggle() {
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentView = btn.dataset.view;
      highlightedGroup = null;
      renderChart();
      renderStats();
    });
  });
}

// --- DATA GETTER ---
function getData() {
  switch(currentView) {
    case "language": return dataByLanguage;
    case "region": return dataByRegion;
    case "california": return dataByCaliforniaRegion;
    default: return dataByLanguage;
  }
}

// --- RENDER CHART ---
function renderChart() {
  const container = document.getElementById("chart");
  container.innerHTML = "";
  const rect = container.getBoundingClientRect();
  width = rect.width;
  height = rect.height;
  const svg = d3.select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`);
  svgG = svg.append("g");
  const data = getData();
  const maxPop = d3.max(data, d => d.population);
  const minPop = d3.min(data, d => d.population);
  const maxRadius = Math.min(width, height) * 0.18;
  const minRadius = Math.min(width, height) * 0.03;
  const rScale = d3.scaleSqrt()
    .domain([minPop, maxPop])
    .range([minRadius, maxRadius]);
  const nodes = data.map((d, i) => ({
    ...d,
    r: rScale(d.population),
    colorIndex: i,
    x: width / 2 + (Math.random() - 0.5) * width * 0.3,
    y: height / 2 + (Math.random() - 0.5) * height * 0.3
  }));
  renderLegend(nodes);
  if (simulation) simulation.stop();
  simulation = d3.forceSimulation(nodes)
    .force("center", d3.forceCenter(width / 2, height / 2).strength(0.8))
    .force("charge", d3.forceManyBody().strength(d => -d.r * 0.3))
    .force("collision", d3.forceCollide().radius(d => d.r + 4).strength(0.95))
    .force("x", d3.forceX(width / 2).strength(0.08))
    .force("y", d3.forceY(height / 2).strength(0.12))
    .alpha(0.8)
    .alphaDecay(0.025);
  const bubbleGroups = svgG.selectAll(".bubble-group")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "bubble-group")
    .style("cursor", "pointer");
  bubbleGroups.append("circle")
    .attr("r", 0)
    .attr("fill", (d, i) => getColor(i))
    .attr("opacity", 0.88)
    .attr("stroke", (d, i) => getColor(i))
    .attr("stroke-width", 1.5)
    .attr("stroke-opacity", 0.3)
    .transition()
    .duration(800)
    .delay((d, i) => i * 80)
    .ease(d3.easeCubicOut)
    .attr("r", d => d.r);
  bubbleGroups.each(function(d) {
    const g = d3.select(this);
    const r = d.r;
    if (r < 18) return;
    const sizeClass = r < 35 ? "bubble-label-sm" : r < 55 ? "bubble-label-md" : r < 80 ? "bubble-label-lg" : "bubble-label-xl";
    let label = d.name;
    const maxChars = Math.floor(r / (r < 35 ? 4 : r < 55 ? 5 : 6));
    if (label.length > maxChars + 2 && r < 65) {
      const abbrevs = {
        "San Francisco Bay Area": "Bay Area",
        "San Diego County": "San Diego",
        "Ventura County": "Ventura",
        "North Bay": "N. Bay",
        "Isthmus of Tehuantepec": "Isthmus",
        "Other languages": "Others",
        "Other regions": "Others",
        "Los Angeles Metro": "LA Metro",
        "Central Valleys": "C. Valleys",
        "Chinantec": "Chinant.",
        "Chinantla": "Chinantla",
        "Central Coast": "C. Coast",
        "Mazatec": "Mazatec"
      };
      label = abbrevs[d.name] || label;
    }
    g.append("text")
      .attr("class", `bubble-label ${sizeClass}`)
      .attr("dy", r < 40 ? "-0.3em" : "0.35em")
      .text(label)
      .style("opacity", 0)
      .transition()
      .delay(600 + nodes.indexOf(d) * 80)
      .duration(400)
      .style("opacity", 1);
    if (r >= 40) {
      const popText = formatNumber(d.population);
      g.append("text")
        .attr("class", "bubble-sublabel")
        .attr("dy", "1em")
        .text(popText)
        .style("opacity", 0)
        .transition()
        .delay(600 + nodes.indexOf(d) * 80)
        .duration(400)
        .style("opacity", 0.85);
    }
  });
  const tooltip = document.getElementById("tooltip");
  bubbleGroups
    .on("mouseenter", function(event, d) {
      d3.select(this).select("circle")
        .transition().duration(200)
        .attr("opacity", 1)
        .attr("stroke-width", 3)
        .attr("stroke-opacity", 0.6);
      showTooltip(event, d, tooltip);
    })
    .on("mousemove", function(event) {
      positionTooltip(event, tooltip);
    })
    .on("mouseleave", function() {
      d3.select(this).select("circle")
        .transition().duration(200)
        .attr("opacity", highlightedGroup !== null && this.__data__.colorIndex !== highlightedGroup ? 0.2 : 0.88)
        .attr("stroke-width", 1.5)
        .attr("stroke-opacity", 0.3);
      tooltip.classList.remove("visible");
    });
  bubbleGroups
    .on("touchstart", function(event, d) {
      event.preventDefault();
      showTooltip(event.touches[0], d, tooltip);
    })
    .on("touchend", () => {
      setTimeout(() => tooltip.classList.remove("visible"), 2000);
    });
  bubbleGroups.call(d3.drag()
    .on("start", (event, d) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x; d.fy = d.y;
    })
    .on("drag", (event, d) => {
      d.fx = event.x; d.fy = event.y;
    })
    .on("end", (event, d) => {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null; d.fy = null;
    }));
  simulation.on("tick", () => {
    bubbleGroups.attr("transform", d => {
      const pad = 6;
      d.x = Math.max(d.r + pad, Math.min(width - d.r - pad, d.x));
      d.y = Math.max(d.r + pad, Math.min(height - d.r - pad, d.y));
      return `translate(${d.x},${d.y})`;
    });
  });
}

// --- TOOLTIP ---
function showTooltip(event, d, tooltip) {
  let html = `<div class="tt-header"><span class="tt-name">${d.name}</span>`;
  if (d.nameNative) { html += ` <span class="tt-native">${d.nameNative}</span>`; }
  html += `</div>`;
  html += `<div class="tt-pop">${formatNumber(d.population)}</div>`;
  html += `<div class="tt-details">`;
  if (d.percent) html += `<strong>${d.percent}%</strong> of Oaxacan Indigenous population in CA<br>`;
  if (d.region) html += `<strong>Origin:</strong> ${d.region}<br>`;
  if (d.languages) html += `<strong>Languages:</strong> ${d.languages}<br>`;
  if (d.counties) html += `<strong>Counties:</strong> ${d.counties}<br>`;
  if (d.subregions) html += `<strong>Subregions:</strong> ${d.subregions}<br>`;
  if (d.caRegions) html += `<strong>In California:</strong> ${d.caRegions}<br>`;
  if (d.detail) html += `<br>${d.detail}`;
  html += `</div>`;
  tooltip.innerHTML = html;
  tooltip.classList.add("visible");
  positionTooltip(event, tooltip);
}
function positionTooltip(event, tooltip) {
  const pad = 16;
  let x = (event.clientX || event.pageX) + pad;
  let y = (event.clientY || event.pageY) + pad;
  const tw = tooltip.offsetWidth;
  const th = tooltip.offsetHeight;
  if (x + tw > window.innerWidth - pad) x = (event.clientX || event.pageX) - tw - pad;
  if (y + th > window.innerHeight - pad) y = (event.clientY || event.pageY) - th - pad;
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

// --- LEGEND ---
function renderLegend(nodes) {
  const legend = document.getElementById("legend");
  legend.innerHTML = "";
  nodes.forEach((d, i) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `<span class="legend-dot" style="background:${getColor(i)}"></span><span>${d.name}</span>`;
    item.addEventListener("click", () => {
      if (highlightedGroup === i) {
        highlightedGroup = null;
        resetHighlight();
        document.querySelectorAll(".legend-item").forEach(li => li.classList.remove("dimmed"));
      } else {
        highlightedGroup = i;
        highlightGroup(i);
        document.querySelectorAll(".legend-item").forEach((li, idx) => {
          li.classList.toggle("dimmed", idx !== i);
        });
      }
    });
    legend.appendChild(item);
  });
}
function highlightGroup(index) {
  svgG.selectAll(".bubble-group").each(function(d) {
    const isHighlighted = d.colorIndex === index;
    d3.select(this).select("circle")
      .transition().duration(300)
      .attr("opacity", isHighlighted ? 1 : 0.15);
    d3.select(this).selectAll("text")
      .transition().duration(300)
      .style("opacity", isHighlighted ? 1 : 0.15);
  });
}
function resetHighlight() {
  svgG.selectAll(".bubble-group").each(function() {
    d3.select(this).select("circle")
      .transition().duration(300)
      .attr("opacity", 0.88);
    d3.select(this).selectAll(".bubble-label")
      .transition().duration(300)
      .style("opacity", 1);
    d3.select(this).selectAll(".bubble-sublabel")
      .transition().duration(300)
      .style("opacity", 0.85);
  });
}

// --- STATS ---
function renderStats() {
  const bar = document.getElementById("statsBar");
  const data = getData();
  const total = d3.sum(data, d => d.population);
  const count = data.length;
  const largest = data.reduce((a, b) => a.population > b.population ? a : b);
  let statsHTML = `
    <div class="stat-item"><div class="stat-value">${formatNumber(total)}</div><div class="stat-label">Estimated Total Population</div></div>
    <div class="stat-item"><div class="stat-value">${count}</div><div class="stat-label">${currentView === "language" ? "Languages / Groups" : currentView === "region" ? "Regions of Origin" : "Regions in California"}</div></div>
    <div class="stat-item"><div class="stat-value">${largest.name}</div><div class="stat-label">${currentView === "california" ? "Largest Concentration" : "Largest Group"}</div></div>
    <div class="stat-item"><div class="stat-value">${formatNumber(largest.population)}</div><div class="stat-label">Population of Largest Group</div></div>
  `;
  bar.innerHTML = statsHTML;
}

// --- UTILS ---
function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + " M";
  if (n >= 1000) return Math.round(n / 1000).toLocaleString() + " K";
  return n.toLocaleString();
}
function debounce(fn, ms) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), ms);
  };
}

// --- CALIFORNIA MAP ---
const countyRegionMap = {
  "Fresno": { region: "Central Valley", population: 100000 },
  "Madera": { region: "Central Valley", population: 100000 },
  "Tulare": { region: "Central Valley", population: 100000 },
  "Kern": { region: "Central Valley", population: 100000 },
  "Merced": { region: "Central Valley", population: 100000 },
  "San Joaquin": { region: "Central Valley", population: 100000 },
  "Stanislaus": { region: "Central Valley", population: 100000 },
  "Kings": { region: "Central Valley", population: 100000 },
  "Los Angeles": { region: "Los Angeles Metro", population: 120000 },
  "Orange": { region: "Los Angeles Metro", population: 120000 },
  "San Bernardino": { region: "Los Angeles Metro", population: 120000 },
  "Riverside": { region: "Los Angeles Metro", population: 120000 },
  "San Diego": { region: "San Diego County", population: 25000 },
  "Santa Barbara": { region: "Central Coast", population: 30000 },
  "Monterey": { region: "Central Coast", population: 30000 },
  "Santa Cruz": { region: "Central Coast", population: 30000 },
  "San Mateo": { region: "Central Coast", population: 30000 },
  "San Benito": { region: "Central Coast", population: 30000 },
  "Ventura": { region: "Ventura County", population: 20000 },
  "Santa Clara": { region: "San Francisco Bay Area", population: 15000 },
  "Alameda": { region: "San Francisco Bay Area", population: 15000 },
  "San Francisco": { region: "San Francisco Bay Area", population: 15000 },
  "Contra Costa": { region: "San Francisco Bay Area", population: 15000 },
  "Sonoma": { region: "North Bay", population: 5000 },
  "Napa": { region: "North Bay", population: 5000 },
};
const regionColorIndex = {
  "Central Valley": 0,
  "Los Angeles Metro": 1,
  "San Diego County": 2,
  "Central Coast": 3,
  "Ventura County": 4,
  "San Francisco Bay Area": 5,
  "North Bay": 6
};
function getRegionDetail(regionName) {
  return dataByCaliforniaRegion.find(d => d.name === regionName);
}
async function initMap() {
  const container = document.getElementById("caMap");
  const mapTooltip = document.getElementById("mapTooltip");
  try {
    const resp = await fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json");
    const topoData = await resp.json();
    drawMap(container, topoData, mapTooltip);
  } catch(e) {
    container.innerHTML = `<div class="map-error">Could not load map.</div>`;
  }
}
function drawMap(container, topoData, mapTooltip) {
  container.innerHTML = "";
  const w = container.clientWidth || 720;
  const h = Math.max(460, w * 0.72);
  const svg = d3.select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${w} ${h}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("width", "100%")
    .style("height", "auto");
  const counties = topojson.feature(topoData, topoData.objects.counties);
  const caCounties = {
    type: "FeatureCollection",
    features: counties.features.filter(f => f.id.toString().startsWith("06"))
  };
  const countyNames = {};
  if (topoData.objects.counties.geometries) {
    topoData.objects.counties.geometries.forEach(g => {
      if (g.id && g.id.toString().startsWith("06")) {
        countyNames[g.id] = g.properties.name;
      }
    });
  }
  const projFit = d3.geoMercator().fitExtent([[10, 10], [w - 10, h - 10]], caCounties);
  const path = d3.geoPath().projection(projFit);
  const baseColors = ["#c74b16","#2d6a4f","#6b3fa0","#c69800","#1a6e8e","#a13544","#4a7c59"];
  const darkColors = ["#e87a4a","#52b788","#9b7fd4","#edb336","#4fadcf","#dd6974","#6daa75"];
  function getMapColor(regionName) {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const idx = regionColorIndex[regionName];
    if (idx === undefined) return isDark ? "#3d3830" : "#e6ddd0";
    return isDark ? darkColors[idx] : baseColors[idx];
  }
  const countiesGroup = svg.append("g").attr("class", "counties-group");
  countiesGroup.selectAll(".ca-county")
    .data(caCounties.features)
    .enter()
    .append("path")
    .attr("class", "ca-county")
    .attr("d", path)
    .attr("fill", d => {
      const name = countyNames[d.id] || d.properties.name;
      const info = countyRegionMap[name];
      return info ? getMapColor(info.region) : (document.documentElement.getAttribute("data-theme") === "dark" ? "#3d3830" : "#e6ddd0");
    })
    .attr("opacity", 0)
    .transition().duration(600).delay((d, i) => i * 12)
    .attr("opacity", d => {
      const name = countyNames[d.id] || d.properties.name;
      return countyRegionMap[name] ? 0.88 : 0.55;
    });
  const labelCounties = ["Fresno","Los Angeles","San Diego","Ventura","Monterey","Santa Barbara","Sonoma","Kern","Tulare","Madera","Merced","San Joaquin","Stanislaus","Orange","Santa Clara","Alameda","San Francisco","San Bernardino","Riverside","Napa","Santa Cruz","San Mateo"];
  countiesGroup.selectAll(".county-label")
    .data(caCounties.features.filter(d => {
      const name = countyNames[d.id] || d.properties.name;
      return labelCounties.includes(name);
    }))
    .enter()
    .append("text")
    .attr("class", "county-label")
    .attr("transform", d => {
      const c = path.centroid(d);
      return `translate(${c[0]},${c[1]})`;
    })
    .text(d => {
      const name = countyNames[d.id] || d.properties.name;
      const shorts = {
        "San Francisco": "SF",
        "San Bernardino": "S. Bernardino",
        "San Joaquin": "S. Joaquin",
        "Santa Barbara": "S. Barbara",
        "Santa Clara": "S. Clara",
        "Santa Cruz": "S. Cruz",
        "San Mateo": "S. Mateo"
      };
      return shorts[name] || name;
    })
    .style("opacity", 0)
    .transition().delay(800).duration(400)
    .style("opacity", 1);
  svg.selectAll(".ca-county")
    .on("mouseenter", function(event, d) {
      const name = countyNames[d.id] || d.properties.name;
      const info = countyRegionMap[name];
      showMapTooltip(event, name, info, mapTooltip);
      d3.select(this).raise();
    })
    .on("mousemove", event => positionMapTooltip(event, mapTooltip))
    .on("mouseleave", () => mapTooltip.classList.remove("visible"));
  buildMapLegend(baseColors, darkColors);
  const observer = new MutationObserver(() => {
    svg.selectAll(".ca-county").attr("fill", d => {
      const name = countyNames[d.id] || d.properties.name;
      const info = countyRegionMap[name];
      return info ? getMapColor(info.region) : (document.documentElement.getAttribute("data-theme") === "dark" ? "#3d3830" : "#e6ddd0");
    });
    buildMapLegend(baseColors, darkColors);
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
}
function showMapTooltip(event, countyName, info, tooltip) {
  let html = `<div class="tt-header"><span class="tt-name">${countyName}</span></div>`;
  if (info) {
    const regionDetail = getRegionDetail(info.region);
    html += `<div class="tt-pop">${formatNumber(info.population)}</div>`;
    html += `<div class="tt-details">`;
    html += `<strong>Region:</strong> ${info.region}<br>`;
    if (regionDetail) html += `<strong>Languages:</strong> ${regionDetail.languages}<br>`;
    html += `<br>${regionDetail.detail}`;
    html += `</div>`;
  } else {
    html += `<div class="tt-details">No significant data on Oaxacan Indigenous communities recorded.</div>`;
  }
  tooltip.innerHTML = html;
  tooltip.classList.add("visible");
  positionMapTooltip(event, tooltip);
}
function positionMapTooltip(event, tooltip) {
  const pad = 16;
  let x = event.clientX + pad;
  let y = event.clientY + pad;
  const tw = tooltip.offsetWidth;
  const th = tooltip.offsetHeight;
  if (x + tw > window.innerWidth - pad) x = event.clientX - tw - pad;
  if (y + th > window.innerHeight - pad) y = event.clientY - th - pad;
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}
function buildMapLegend(baseColors, darkColors) {
  const legend = document.getElementById("mapLegend");
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const colors = isDark ? darkColors : baseColors;
  legend.innerHTML = `<div class="map-legend-title">Regions in California</div>`;
  dataByCaliforniaRegion.forEach((region, i) => {
    const item = document.createElement("div");
    item.className = "map-legend-item";
    item.innerHTML = `<span class="map-legend-dot" style="background:${colors[i]}"></span><span>${region.name}</span>&nbsp;<span class="map-legend-pop">${formatNumber(region.population)}</span>`;
    legend.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  initMap();
});
