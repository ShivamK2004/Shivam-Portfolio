const G = "https://github.com/";
const P = [
  {
    t: "Agent Harness Pro",
    c: "ai",
    s: "Prototype",
    f: 1,
    live: 1,
    d: "Build, run and trace tool-using LLM workflows through a Planner → Researcher → Executor → Verifier pipeline. Switch between Gemini, local Ollama or a deterministic Mock provider per run.",
    m: "Demo loads; run a task or benchmark to see results.",
    k: ["Python", "FastAPI", "Next.js", "Gemini", "Ollama", "SQLite", "Docker"],
    n: "Verifier and scoring are explainable heuristics, not guarantees of correctness.",
    g: G + "ShivamK2004/Agent-Harness-Pro",
    l: "https://agent-harness-pro.vercel.app/",
  },
  {
    t: "Nexora AI + NexoraLM Starter",
    c: "ai",
    s: "Working prototype (v1.3)",
    f: 1,
    d: "Local-first chat workspace with searchable history, document upload (up to 5 files), retrieval, memory and swappable providers, plus a small decoder-only Transformer research prototype.",
    m: "Baseline v1.3 with API and provider tests.",
    k: [
      "Python",
      "FastAPI",
      "JavaScript",
      "SQLite",
      "Gemini",
      "Ollama",
      "PyTorch",
    ],
    n: "Demo URL returned HTTP 503 on 05 Nov 2026. Check the Render service before sharing. NexoraLM is not a trained foundation model.",
    g: G + "ShivamK2004/Nexora-AI",
    l: "https://nexora-ai-h6a7.onrender.com/",
  },
  {
    t: "LLM Agent Evaluation Harness",
    c: "ai",
    s: "Research internship",
    d: "Compares autonomous LLM agents on generated tasks of different difficulty in a restricted sandbox, with a Streamlit reliability dashboard.",
    m: "72.5% task success · 7.5% heuristic hallucination · 0.574 avg similarity (40 records, 2 agents)",
    k: ["Python", "Ollama", "Llama 3", "Streamlit", "scikit-learn"],
    n: "Figures are from the internship snapshot, not the Agent Harness Pro demo.",
    g: G + "ShivamK2004/Research_Intership_Project_Ai_Agent_Harness",
  },
  {
    t: "Smart Attendance System",
    c: "app",
    s: "Built",
    d: "Camera-based enrollment and recognition replaces manual roll-call. Flutter app, Node/Express API and a FastAPI InsightFace service, with analytics and PDF reports.",
    m: "Daily, monthly and yearly analytics; PDF exports.",
    k: [
      "Flutter",
      "Node.js",
      "MongoDB",
      "FastAPI",
      "InsightFace",
      "OpenCV",
      "JWT",
    ],
    n: "No recognition-accuracy figure published.",
    g: G + "shivamkumar130/Smart-Attendance-System",
    l: "https://smart-attendance-system-henna-rho.vercel.app/",
  },
  {
    t: "Smart School Management System",
    c: "app",
    s: "Built",
    d: "Role-based portal for admins, teachers and students: attendance, homework, notices, results and timetables, with a face-recognition attendance component.",
    k: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Python"],
    g: G + "shivamkumar130/smart-school-management-system",
    l: "https://ps-sarangpur-gopalpur-smart-school.vercel.app/",
  },
  {
    t: "Shoplifting Detection (YOLOv8)",
    c: "cv",
    s: "Model prototype",
    d: "Classifies surveillance video frames as Normal or Shoplifting. Compares a pretrained YOLOv8 baseline with a fine-tuned model.",
    m: "Frame-level accuracy 48.65% → 85.95% after fine-tuning",
    k: ["Python", "YOLOv8", "Ultralytics", "OpenCV", "scikit-learn"],
    n: "Frame-level classification, not a real-time theft-prevention product.",
    g: G + "shivamkumar130/Shoplifting-Detection-System-using-YOLOv8",
  },
  {
    t: "Retail Wizard — Smart Retail Management System",
    c: "app",
    s: "Python Desktop & Web Application",
    d: "Developed a retail management system with POS billing, inventory tracking, sales analytics, invoice generation, refunds and AI-assisted business insights.",
    k: ["Python", "Tkinter", "FastAPI", "SQLite", "Pandas", "REST API"],
    n: "Features role-based access, Excel/CSV import, PDF invoices, stock alerts, audit logs and automated database backups.",
    g: "ShivamK2004/Retail-Wizard",
    l: "https://retail-wizard-web-free.onrender.com/setup"
  },
  {
    t: "FraudShield — Fraud Detection Website",
    c: "app",
    s: "Built",
    d: "A web-based fraud detection platform featuring a transaction-monitoring dashboard and fraud analysis workflow. My contribution: frontend dashboard development.",
    k: ["React", "Vite", "Node.js", "Express", "MongoDB", "Machine Learning"],
    g: G + "ShivamK2004/FraudShield",
    l: "https://fraud-shield-green.vercel.app/",
  },
  {
    t: "MandiCast India",
    c: "ml",
    s: "AI/ML & Full-Stack Project",
    d: "Built a commodity forecasting platform with dataset analysis, data validation and time-series prediction using a PyTorch LSTM with temporal attention.",
    k: ["Python", "PyTorch", "LSTM", "FastAPI", "React", "Pandas"],
    n: "Supports CSV, XLSX, JSON and Parquet datasets with forecasting and experiment tracking.",
    l: "https://frontend-shivam-b48a.vercel.app/",
    g: "https://github.com/ShivamK2004/MandiCast-India",
  },
 
  {
    t: "Dn2MFGL — Deep NMF",
    c: "res",
    s: "Research reproduction",
    d: "Two-layer deep nonnegative matrix factorization preserving local and global structure on UMIST faces (575 images, 20 classes), evaluated with K-Means.",
    m: "ACC 39.50% ± 1.31% · NMI 62.09% ± 1.07%",
    k: ["Python", "NumPy", "SciPy", "scikit-learn", "Colab"],
    n: "Methodology reproduction, not an exact replication of the paper.",
    g: G + "ShivamK2004/DL_Project_1",
  },
  {
    t: "Vehicle Price Prediction",
    c: "ml",
    s: "Built",
    d: "End-to-end regression workflow estimating vehicle prices from specifications, make and model.",
    m: "R² 0.85",
    k: ["Python", "Pandas", "scikit-learn"],
    g: G + "shivamkumar130/vehicle_price_prediction",
  },
  {
    t: "Forest Cover Type Prediction",
    c: "ml",
    s: "Built",
    d: "Seven-class classifier predicting forest cover from cartographic and environmental features of Roosevelt National Forest, Colorado.",
    m: "Accuracy 87.3%",
    k: ["Python", "Pandas", "scikit-learn"],
    g: G + "shivamkumar130/forest-cover-prediction",
  },
  {
    t: "Heart Disease Prediction",
    c: "ml",
    s: "Built",
    d: "Supervised classification model for heart disease prediction, with preprocessing, feature engineering, scaling, tuning and evaluation.",
    k: ["Python", "NumPy", "Pandas", "scikit-learn"],
    n: "No project-specific metric verified yet.",
    g: G + "shivamkumar130/heart-disease-detection",
  },
  {
    t: "Magneto-Inductive Communication",
    c: "res",
    s: "Group report",
    d: "Literature review (2007–2025) of near-field magneto-inductive links for water, soil, rock and industrial settings versus RF, acoustic and optical.",
    k: ["Literature review", "Data analysis", "Jupyter"],
    n: "Academic report with Dev Saraswat, Dream Vijay Sahare, Harshit Manhas and Rajkumar; instructor Sunandita Debnath. No code or demo.",
  },
];
const F = [
  ["all", "All"],
  ["ai", "AI & LLM"],
  ["app", "Apps"],
  ["cv", "Vision"],
  ["ml", "Machine learning"],
  ["res", "Research"],
  ["graphics", "Graphics / C++"],
];
const E = (s) =>
  s.replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
function card(p) {
  const lk =
    (p.l
      ? `<a href="${p.l}" target="_blank" rel="noopener">Live demo</a>`
      : "") +
      (p.g
        ? `<a href="${p.g}" target="_blank" rel="noopener">GitHub</a>`
        : "") || "<span>No public link yet</span>";
  return `<article class="card"><span class="badge${p.live ? " live" : ""}">${E(p.s)}</span><h3>${E(p.t)}</h3><p>${E(p.d)}</p>${p.m ? `<p class="metric">${E(p.m)}</p>` : ""}<ul class="tags">${p.k.map((x) => `<li>${E(x)}</li>`).join("")}</ul>${p.n ? `<p class="note">${E(p.n)}</p>` : ""}<div class="links">${lk}</div></article>`;
}
document.getElementById("featGrid").innerHTML = P.filter((p) => p.f)
  .map(card)
  .join("");
const grid = document.getElementById("grid"),
  fl = document.getElementById("filters");
fl.innerHTML = F.map(
  ([k, l], i) =>
    `<button role="tab" data-k="${k}" aria-selected="${i == 0}">${l}</button>`,
).join("");
function show(k) {
  grid.innerHTML = P.filter((p) => k == "all" || p.c == k)
    .map(card)
    .join("");
  fl.querySelectorAll("button").forEach((b) =>
    b.setAttribute("aria-selected", b.dataset.k == k),
  );
}
fl.addEventListener("click", (e) => {
  if (e.target.dataset.k) show(e.target.dataset.k);
});
show("all");
// hero: one pass through the agent pipeline on load, then stays lit
const li = [...document.querySelectorAll("#steps li")];
if (matchMedia("(prefers-reduced-motion:reduce)").matches)
  li.forEach((x) => x.classList.add("on"));
else
  li.forEach((x, i) => setTimeout(() => x.classList.add("on"), 500 + i * 700));

// skills
const S = [
  ["Programming languages", ["Python", "C++","Java","C","JavaScript"]],
  [
    "AI and machine learning",
    [
      "PyTorch",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "LSTM and attention networks",
      "YOLOv8",
      "Deep NMF",
      "OpenCV",
      "InsightFace",
    ],
  ],
  [
    "Generative AI and LLM engineering",
    [
      "Gemini API",
      "Ollama",
      "LLM agent workflows",
      "RAG",
      "Agent evaluation and benchmarking",
      "Prompt engineering",
    ],
  ],
  [
    "Web and app development",
    [
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flutter",
      "Streamlit",
    ],
  ],
  [
    "Databases and tools",
    [
      "SQLite",
      "MongoDB",
      "Git and GitHub",
      "Docker",
      "Jupyter Notebook",
      "Google Colab",
    ],
  ],
];
document.getElementById("skillGrid").innerHTML = S.map(
  ([t, l]) =>
    `<article class="card"><h3>${E(t)}</h3><ul class="tags">${l.map((x) => `<li>${E(x)}</li>`).join("")}</ul></article>`,
).join("");
