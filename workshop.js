/* =========================
   Data (edit here)
   ========================= */

const EVENT_START_ISO = "2026-03-12T11:30:00-04:00";
const EVENT_END_ISO = "2026-03-12T16:10:00-04:00";
const EVENT_TITLE = "AI4L Workshop — Robust ML Systems";
const EVENT_LOCATION = "Hybrid (Toronto / Vancouver / Online)";
const EVENT_DESCRIPTION =
  "An Empirical Framework for Robust Machine Learning Systems and its Application in AI4L.\n" +
  "Agenda includes keynotes, technical sessions, and networking.\n";

const AGENDA = [
  {
    type: "NETWORK",
    startISO: "2026-03-12T11:30:00-04:00",
    title: "Sign-in, Mingle Bingo & Coffee",
    speakers: [],
    mode: "In-person / Hybrid",
    details: "Arrive early, grab coffee, and use the bingo card to meet new people."
  },
  {
    type: "BREAK",
    startISO: "2026-03-12T12:00:00-04:00",
    title: "Opening Remarks",
    speakers: ["Dr. Pulei Xiong (NRC)", "Prof. Ke Wang (SFU)", "Prof. Liang Xue (York U)"],
    mode: "Hybrid",
    details: "Welcome and opening overview of the project and workshop goals."
  },
  {
    type: "KEYNOTE",
    startISO: "2026-03-12T12:15:00-04:00",
    title: "Keynote 1 — The Importance of Trustworthy AI in Heavily Regulated Domains",
    speakers: ["Lovedeep Gondara (Head of AI R&D, Vanguard)"],
    mode: "In-person",
    details:
      "Trustworthy AI in high-stakes regulated sectors: explainability, robustness, fairness, validation, and human oversight."
  },
  {
    type: "KEYNOTE",
    startISO: "2026-03-12T12:45:00-04:00",
    title: "Keynote 2 — Modern Privacy-Preserving Machine Learning: Principled Design and Audit",
    speakers: ["Zihang Xiang"],
    mode: "Remote",
    details:
      "Modern machine learning relies on vast amounts of sensitive data, creating a fundamental tension between utility and privacy. " +
      "While differential privacy (DP) provides a rigorous mathematical framework for protecting individuals, significant challenges remain: " +
      "how can we design practical private algorithms with strong performance, and how can we verify that their privacy guarantees truly hold?\n" +
      "In this talk, I present a research program built on two complementary pillars: designing differentially private algorithms for complex " +
      "machine learning systems, such as federated learning and graph neural networks, and developing principled auditing tools to empirically " +
      "validate privacy claims. Together, these efforts contribute to robust privacy-enhancing technologies.\n" +
      "Keywords: Private machine learning, data privacy"
  },
  {
    type: "BREAK",
    startISO: "2026-03-12T13:15:00-04:00",
    title: "Lunch Break",
    speakers: [],
    mode: "Hybrid",
    details: "Guelph / Brunch at SFU during lunch break."
  },
  {
    type: "TECH",
    startISO: "2026-03-12T13:45:00-04:00",
    title: "Technical Session Part I",
    speakers: ["Amirhossein Ansari", "Sonal Allana", "Zhuoxin Zhan"],
    mode: "Hybrid",
    details:
      "• Out-of-Distribution Detection for Trustworthy Machine Learning — Amirhossein Ansari\n" +
      "• Privacy Enhancing Technologies for Explainable AI — Sonal Allana\n" +
      "• Adversarial Robustness for Trustworthy Machine Learning — Zhuoxin Zhan"
  },
  {
    type: "BREAK",
    startISO: "2026-03-12T14:45:00-04:00",
    title: "Break",
    speakers: [],
    mode: "Hybrid",
    details: "Short break."
  },
  {
    type: "TECH",
    startISO: "2026-03-12T15:00:00-04:00",
    title: "Technical Session Part II",
    speakers: ["Prof. Liang Xue", "Dilli Prasad Sharma"],
    mode: "Hybrid",
    details:
      "• A Generic Framework for Privacy Risk Assessment of Machine Learning Models — Prof. Liang Xue\n" +
      "• Enhancing Adversarial Robust IoT Intrusion Detection via SHAP Attribution Fingerprinting — Dilli Prasad Sharma"
  },
  {
    type: "NETWORK",
    startISO: "2026-03-12T15:40:00-04:00",
    title: "Poster Session / Networking",
    speakers: [],
    mode: "Hybrid",
    details: "Showcasing project publications and research contributions."
  },
  {
    type: "BREAK",
    startISO: "2026-03-12T16:10:00-04:00",
    title: "Closure",
    speakers: [],
    mode: "Hybrid",
    details: "Wrap-up and next steps."
  }
];

const SPEAKERS = [
  {
    name: "Lovedeep Gondara",
    role: "Head of AI Research & Development at Vanguard (Toronto)",
    talk: "The Importance of Trustworthy AI in Heavily Regulated Domains",
    abstract:
      "The deployment of AI systems in heavily regulated domains such as healthcare and finance presents unique challenges that extend beyond " +
      "technical performance metrics to encompass fundamental questions of trust, accountability, and societal impact. Both sectors share " +
      "critical characteristics: they involve high-stakes decisions with material consequences for individuals, operate under stringent " +
      "regulatory oversight, and are fundamentally client-facing, requiring that end-users, whether patients or investors, place significant " +
      "trust in system outputs that may influence their health outcomes or financial wellbeing.\n" +
      "This talk examines the core pillars of trustworthy AI in these contexts, including transparency and explainability of model decisions, " +
      "robustness to distribution shift and adversarial inputs, fairness across demographic groups, rigorous validation against domain-specific " +
      "standards, and mechanisms for human oversight and intervention.\n" +
      "We argue that trustworthiness is not merely an ethical desideratum but a practical necessity: systems that fail to earn stakeholder trust " +
      "face regulatory barriers, adoption resistance, and reputational risk. By drawing parallels between both heavily regulated domains, we " +
      "identify transferable lessons for building AI systems that meet the elevated standards these domains demand."
  },
  {
    name: "Zihang Xiang",
    role: "Postdoctoral Researcher （Department of ECE, UCLA）",
    talk: "Modern Privacy-Preserving Machine Learning: Principled Design and Audit",
    abstract:
      "Modern machine learning relies on vast amounts of sensitive data, creating a fundamental tension between utility and privacy. " +
      "While differential privacy (DP) provides a rigorous mathematical framework for protecting individuals, significant challenges remain. " +
      "In this talk, I present a research program built on two complementary pillars: designing differentially private algorithms for " +
      "complex machine learning systems, and developing principled auditing tools to empirically validate privacy claims.\n" +
      "Keywords: Private machine learning, data privacy"
  },
  {
    name: "Amirhossein Ansari",
    role: "Technical Talk Presenter",
    talk: "Out-of-Distribution Detection for Trustworthy Machine Learning",
    abstract:
      "Out-of-distribution (OOD) detection is a central challenge in trustworthy machine learning. Models deployed in real-world settings " +
      "inevitably encounter inputs that differ from the in-distribution data seen during training, including samples from unseen classes, " +
      "sensor failures, or adversarially crafted inputs. For such OOD samples, model predictions are often unreliable yet highly overconfident, " +
      "posing serious safety and reliability risks. In this talk, I provide an overview of the OOD detection problem, review recent advances " +
      "in computer vision and tabular data, and highlight their key limitations. I then briefly introduce our recent approaches aimed at " +
      "addressing these challenges.\n" +
      "Keywords: Out-of-Distribution Detection, Trustworthy Machine Learning, Classification"
  },
  {
    group: "SPEAKER",
    name: "Sonal Allana",
    org: "University of Guelph",
    role: "PhD Candidate / Presenter",
    photo: "assets/people/sonal-allana.jpg",
    links: [
      { label: "Scholar", url: "https://scholar.google.com/citations?hl=en&user=XRSx8pcAAAAJ" },
      { label: "UofG Seminar", url: "https://www.uoguelph.ca/computing/event/sonal-allana-phd-seminar-1" }
    ],
    bio: "Sonal Allana is a PhD Candidate at the Data Management and Privacy Governance Lab at the University of Guelph. She is strongly interested in the ethical aspects of technology and its impact on society. Her current research area is at the intersection of privacy and explainability in artificial intelligence systems. She has previously worked in creating a safety framework for children’s IoT in collaboration with industry. Sonal is dedicated to student-centred learning and has extensive teaching experience in undergraduate and graduate courses in computer science and engineering. She has also worked in the industry as a software engineer and project lead, managing cross-functional teams in the successful delivery of high-value solutions."
  },
  {
    name: "Zhuoxin Zhan",
    role: "Technical Talk Presenter",
    talk: "Adversarial Robustness for Trustworthy Machine Learning",
    abstract:
      "Adversarial robustness is a core challenge in trustworthy machine learning. Modern machine learning (ML) models, despite achieving strong " +
      "performance on benchmark datasets, remain highly vulnerable to carefully crafted adversarial inputs that induce incorrect and harmful " +
      "predictions. In real-world deployments, such vulnerabilities pose serious safety and reliability risks, particularly in security-critical " +
      "and high-stakes applications.\n" +
      "In this talk, I provide an overview of adversarial attacks and defenses across different ML models. I first review adversarial examples " +
      "for convolutional neural networks in the vision domain, highlighting representative attack methods, robustness evaluation practices, " +
      "and the limitations of existing defenses. I then shift to large language models, discussing recent jailbreak attacks that exploit " +
      "weaknesses in safety alignment to elicit harmful model behaviors. Through these two domains, I emphasize common robustness challenges, " +
      "emerging attack patterns, and open problems that hinder the deployment of truly trustworthy systems. Finally, I briefly introduce our " +
      "recent research efforts aimed at improving adversarial robustness and mitigating these vulnerabilities.\n" +
      "Keywords: Adversarial Robustness, Trustworthy Machine Learning, Adversarial Examples, Jailbreak Attacks"
  },
  {
    name: "Prof. Liang Xue",
    role: "Technical Talk Presenter",
    talk: "A Generic Framework for Privacy Risk Assessment of Machine Learning Models",
    abstract:
      "Privacy attacks on machine learning (ML) models pose significant risks to individuals whose personal data is used for training or querying these models. " +
      "Although concerns about the potential exposure of sensitive information through ML models continue to grow, existing safeguard mechanisms " +
      "primarily focus on security threats, often neglecting privacy risks. In this paper, we examine existing tools to assess privacy risks of ML models " +
      "and provide an overview of various privacy attacks and defense strategies. Given the lack of a comprehensive framework for assessing privacy " +
      "vulnerabilities, we propose a generic framework for evaluating the privacy of ML systems and establish a set of tailored evaluation metrics " +
      "for different types of privacy attacks. In addition, we develop a dedicated testbed to implement our framework and present experimental " +
      "results that demonstrate the impact of various privacy attacks on different ML models.\n" +
      "Keywords: Privacy risk evaluation, attacks and defenses, and machine learning models"
  },
  {
    name: "Dilli Prasad Sharma",
    role: "Technical Talk Presenter",
    talk: "Enhancing Adversarial Robust IoT Intrusion Detection via SHAP Attribution Fingerprinting",
    abstract:
      "The rapid proliferation of Internet of Things (IoT) devices has transformed numerous industries by enabling seamless connectivity and " +
      "data-driven automation. However, this expansion has also exposed IoT networks to increasingly sophisticated security threats, including " +
      "adversarial attacks targeting AI/ML-based NIDS to deliberately evade detection, induce misclassification, and systematically undermine " +
      "the reliability and integrity of security defenses. To address these challenges, we propose a novel adversarial detection model that " +
      "enhances the robustness of IoT IDS against adversarial attacks through SHapley Additive exPlanations (SHAP)-based fingerprinting. " +
      "Using SHAP’s DeepExplainer, we extract attribution fingerprints from network traffic features, enabling the IDS to reliably distinguish " +
      "between clean and adversarially perturbed inputs. By capturing subtle attribution patterns, the model becomes more resilient to evasion " +
      "attempts and adversarial manipulations. We evaluated the model on a standard IoT benchmark dataset, where it significantly outperformed " +
      "a state-of-the-art method in detecting adversarial attacks. In addition to enhanced robustness, this approach improves model " +
      "transparency and interpretability, thereby increasing trust in the IDS through explainable AI.\n" +
      "Keywords: Intrusion Detection; Robustness; Trustworthiness; Adversarial Detection; Attribution Fingerprinting; Explainable AI; " +
      "Interpretability; Adversarial Machine Learning"
  }
];

const PEOPLE = [
  {
    group: "ORGANIZER",
    name: "Dr. Pulei Xiong",
    org: "National Research Council Canada (NRC)",
    role: "Organizer",
    photo: "assets/people/pulei-xiong.jpg",
    links: [{ label: "Bio", url: "https://example.com/bio" }]
  },
  {
    group: "ORGANIZER",
    name: "Prof. Liang Xue",
    org: "York University",
    role: "Organizer / Presenter",
    photo: "assets/people/liang-xue.jpg",
    links: [{ label: "Bio", url: "https://profiles.laps.yorku.ca/profiles/lxue03/" }],
    bio: "Dr. Liang Xue is currently an assistant professor at the School of Information Technology, York University. She received her Ph.D. degree in Electrical and Computer Engineering from the University of Waterloo, Canada, in 2022. She was a Postdoctoral Research Fellow at the School of Computer Science, University of Guelph. Her research interests include applied cryptography，security and privacy preservation in the Internet of Things, cloud computing, machine learning, and blockchain-based applications."
  },
  {
    group: "ORGANIZER",
    name: "Prof. Ke Wang",
    org: "Simon Fraser University (SFU)",
    role: "Organizer",
    photo: "assets/people/ke-wang.jpg",
    links: [
      { label: "Profile", url: "https://www.sfu.ca/fas/computing/people/faculty/faculty-members/wangk.html" },
      { label: "Bio", url: "https://www.cs.sfu.ca/~wangk/resume.html" }
    ],
    bio: "Ke Wang received Ph.D from Georgia Institute of Technology. He is currently a professor at School of Computing Science, Simon Fraser University. Ke Wang's research interests include database technology, data mining and knowledge discovery, with emphasis on massive datasets, graph and network data, and data privacy. He is particularly interested in combining the strengths of database, statistics, machine learning and optimization to provide actionable solutions to real life problems and industrial applications. Ke Wang has published in database, information retrieval, and data mining conferences, including SIGMOD, SIGIR, PODS, VLDB, ICDE, EDBT, SIGKDD, SDM, ICDM, WWW, AAAI, and CIKM. He co-authored a book \"Introduction to Privacy-Preserving Data Publishing: Concepts and Techniques\", Data Mining and Knowledge Discovery Series, Chapman & Hall/CRC, August 2010. He was an associate editor of the ACM TKDD journal, associate editor of the IEEE TKDE journal, an editorial board member for Journal of Data Mining and Knowledge Discovery. He has been the general co-chair for the SIAM Conference on Data Mining 2015 and 2016, and the PC co-chair for SIAM Conference on Data Mining 2008 and the PC co-chair for IEEE International Conference on Intelligence and Security Informatics (ISI) 2010."
  },
  {
    group: "ORGANIZER",
    name: "Dr. Dilli Prasad Sharma",
    org: "York University",
    role: "Organizer",
    photo: "assets/people/dilli-prasad-sharma.png",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/dilli-sharma-phd-a667243b/" }],
    bio: "Dilli Prasad Sharma received the Ph.D. degree in Computer Science from the University of Canterbury, New Zealand. He is currently a Postdoctoral Researcher at York University, Toronto, and has previously held similar positions at the University of Toronto and the University of New Brunswick, Canada. Dr. Sharma’s research focuses on cybersecurity and artificial intelligence. His research interests include privacy-preserving technologies, explainable  AI, model robustness, security metrics, IoT security, moving target defense, adversarial machine learning, and trustworthy and responsible AI."
  },
  {
    group: "ORGANIZER",
    name: "Zhuoxin Zhan",
    org: "Simon Fraser University (SFU)",
    role: "Organizer",
    photo: "assets/people/zhuoxin-zhan.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/zhuoxinzhan/" }],
    bio: "Zhuoxin Zhan is a PhD student researching trustworthy AI, focusing on the foundations of adversarial robustness, spanning vision adversarial examples and LLM prompt injection, toward reliable evaluation and mitigation."
  },
  {
    group: "ORGANIZER",
    name: "Amirhossein Ansari",
    org: "Simon Fraser University (SFU)",
    role: "Organizer",
    photo: "assets/people/amirhossein-ansari.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/ah-ansari/" }],
    bio: "Amirhossein Ansari is a PhD student in the School of Computing Science at Simon Fraser University (SFU), supervised by Prof. Ke Wang. His research focuses on Trustworthy Artificial Intelligence, with a particular emphasis on Out-of-Distribution (OOD) detection and robustness in machine learning models. His work aims to develop reliable models that can recognize and appropriately handle inputs that differ from their training data, improving safety and reliability in real-world deployments."
  },
  {
    name: "Sonal Allana",
    role: "PhD Candidate, Data Management and Privacy Governance Lab (University of Guelph)",
    talk: "Privacy Enhancing Technologies for Explainable AI",
    abstract: "Explainability is a pillar of Trustworthy AI and crucial for transparency of black-box decisionmaking systems. However, recent research has shown that explainability in the form of Explainable AI (XAI) methods can expose the privacy of the underlying data and the confidentiality of models. To address this concern, in this workshop we investigate the use of Privacy Enhancing Technologies (PETs) as a defense mechanism against a privacy attack that exploits explanations generated by feature-based XAI methods. We present the results of empirical evaluation of three types of PETs, namely, synthetic training data, differentially private training and noise addition, across two categories of feature-based XAI. Our findings reveal varying levels of effectiveness among the mitigation strategies, as well as trade-offs between privacy, utility, and system performance. Based on our evaluation, we propose strategies for effectively integrating PETs into XAI to maximize privacy protection and minimize the risk of sensitive information leakage."
  },
  {
    group: "SPEAKER",
    name: "Lovedeep Gondara",
    org: "Vanguard (Toronto)",
    role: "Keynote Speaker",
    photo: "assets/people/lovedeep-gondara.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/lovedeepg/" }],
    bio: "Lovedeep Gondara is the Head of AI Research & Development at Vanguard, Toronto, where he leads a team of AI engineers and scientists working on generative AI, natural language processing, and responsible AI. He holds an adjunct professor appointment at the University of British Columbia's School of Population and Public Health. Previously, he served as Research Scientist Team Lead at BC Cancer Registry, where he developed and deployed NLP solutions for various clinical applications. Lovedeep received his Ph.D. in Computer Science from Simon Fraser University and has authored over 90 publications spanning machine learning, statistics, and healthcare."
  },
  {
    group: "SPEAKER",
    name: "Zihang Xiang",
    org: "UCLA",
    role: "Keynote Speaker",
    photo: "assets/people/zihang-xiang.jpg",
    links: [{ label: "Bio", url: "https://www.linkedin.com/in/zihang-xiang/" }],
    bio: "Zihang Xiang is a Postdoctoral Researcher in the Department of Electrical and Computer Engineering at UCLA, working with Prof. Yuan Tian. He received his Ph.D. in Computer Science from KAUST, advised by Prof. Di Wang.\nHis research focuses on privacy-preserving machine learning, with an emphasis on developing rigorous and falsifiable privacy guarantees for modern ML systems. In particular, he studies differential privacy and design principled learning algorithms and builds tools to audit and verify privacy claims. His work spans graph neural networks, federated learning, large-scale model training, and privacy auditing.\n\nHis research has been published in leading venues including IEEE S&P, USENIX Security, NDSS, SIGMOD, NeurIPS, and Science Advances. His broader goal is to help reconcile the tension between powerful data-driven models and strong individual privacy guarantees."
  }
];

const BINGO_PROMPTS = [
  "Works on privacy threats",
  "Works on adversarial ML",
  "Has deployed ML in production",
  "Uses OOD detection",
  "Has done threat modeling",
  "Works on explainable AI (XAI)",
  "Has read a new AI regulation",
  "Works in healthcare or finance",
  "Has done red teaming",
  "Builds ML evaluation pipelines",
  "Has an open-source ML project",
  "Has worked with SHAP",
  "Has worked with IoT security",
  "Interested in standards",
  "Uses ML monitoring tools",
  "Teaches ML / security",
  "New to robust ML",
  "Has written an ML paper",
  "Has organized a workshop",
  "Loves case studies",
  "Interested in procurement checks",
  "Builds datasets",
  "Works on fairness",
  "Works on model security",
  "Wants to collaborate"
];

/* =========================
   Helpers
   ========================= */
function $(sel, root = document) { return root.querySelector(sel); }
function $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }
function normalize(s) { return (s || "").toLowerCase().trim(); }

function fmtTime(date, mode) {
  const opts = { hour: "numeric", minute: "2-digit" };
  if (mode === "ET") opts.timeZone = "America/Toronto";
  if (mode === "PT") opts.timeZone = "America/Vancouver";
  return new Intl.DateTimeFormat(undefined, opts).format(date);
}
function fmtMeta(date, mode) {
  const time = fmtTime(date, mode);
  const tag = mode === "ET" ? "ET" : mode === "PT" ? "PT" : "Local";
  return `${time} ${tag}`;
}

/* =========================
   Nav + scroll spy
   ========================= */
function initNav() {
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  toggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$(".nav__link").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }));

  const links = $$(".nav__link");
  const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const id = `#${en.target.id}`;
      links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === id));
    });
  }, { rootMargin: "-55% 0px -40% 0px", threshold: 0.01 });

  sections.forEach(s => obs.observe(s));
}

/* =========================
   Theme toggle
   ========================= */
function initTheme() {
  const btn = $("#themeToggle");
  const saved = localStorage.getItem("ai4l_theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  btn?.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ai4l_theme", next);
  });
}

/* =========================
   Countdown + ICS
   ========================= */
function initCountdown() {
  const el = $("#countdownValue");
  if (!el) return;

  const start = new Date(EVENT_START_ISO);

  function tick() {
    const now = new Date();
    const diff = start - now;

    if (diff <= 0) {
      el.textContent = "Today — see you at the workshop!";
      return;
    }

    const sec = Math.floor(diff / 1000);
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const mins = Math.floor((sec % 3600) / 60);

    el.textContent = `${days}d ${hours}h ${mins}m`;
  }

  tick();
  setInterval(tick, 30_000);
}

function toICSDate(dt) {
  return new Date(dt).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function initICS() {
  const btn = $("#addToCalendar");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const dtStart = toICSDate(EVENT_START_ISO);
    const dtEnd = toICSDate(EVENT_END_ISO);

    const ics =
      `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AI4L//Workshop//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@ai4l
DTSTAMP:${toICSDate(new Date())}
DTSTART:${dtStart}
DTEND:${dtEnd}
SUMMARY:${EVENT_TITLE}
LOCATION:${EVENT_LOCATION}
DESCRIPTION:${EVENT_DESCRIPTION.replace(/\n/g, "\\n")}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ai4l-workshop-2026.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  });
}

/* =========================
   Agenda (expanded by default)
   ========================= */
function initAgenda() {
  const list = $("#agendaList");
  const search = $("#agendaSearch");
  const chips = $$("#agendaChips .chip");
  const tzBtns = $$(".seg__btn");

  if (!list) return;

  let tzMode = "ET";
  let typeFilter = "ALL";
  let q = "";

  function render() {
    const nq = normalize(q);

    const items = AGENDA.filter(it => {
      const typeOk = typeFilter === "ALL" || it.type === typeFilter;
      const hay = normalize([it.title, (it.speakers || []).join(" "), it.details, it.mode].join(" "));
      const qOk = !nq || hay.includes(nq);
      return typeOk && qOk;
    });

    list.innerHTML = items.map((it) => {
      const dt = new Date(it.startISO);
      const meta = fmtMeta(dt, tzMode);
      const speakers = (it.speakers || []).length ? it.speakers.join(" • ") : "—";
      const tag = it.type;

      return `
        <div class="accordion__item is-open">
          <button class="accordion__btn" type="button" aria-expanded="true">
            <div>
              <div class="accordion__title">${escapeHtml(meta)} • ${escapeHtml(it.title)}</div>
              <div class="accordion__meta">${escapeHtml(tag)} • ${escapeHtml(it.mode || "Hybrid")} • ${escapeHtml(speakers)}</div>
            </div>
            <div class="accordion__chev" aria-hidden="true">▾</div>
          </button>
          <div class="accordion__panel">
            <div>${escapeHtml(it.details || "").replace(/\n/g, "<br/>")}</div>
          </div>
        </div>
      `;
    }).join("");

    $$(".accordion__item", list).forEach(item => {
      const btn = $(".accordion__btn", item);
      btn.addEventListener("click", () => {
        const open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }

  chips.forEach(ch => ch.addEventListener("click", () => {
    chips.forEach(x => x.classList.remove("is-active"));
    ch.classList.add("is-active");
    typeFilter = ch.dataset.type;
    render();
  }));

  tzBtns.forEach(b => b.addEventListener("click", () => {
    tzBtns.forEach(x => x.classList.remove("is-active"));
    b.classList.add("is-active");
    tzMode = b.dataset.tz;
    render();
  }));

  search?.addEventListener("input", (e) => {
    q = e.target.value || "";
    render();
  });

  render();
}

/* =========================
   People gallery
   ========================= */
function initPeople() {
  const grid = $("#peopleGrid");
  const search = $("#peopleSearch");
  const chips = $$("#peopleChips .chip");

  if (!grid) return;

  let q = "";
  let group = "ALL";

  function render() {
    const nq = normalize(q);

    const items = PEOPLE.filter(p => {
      const groupOk = group === "ALL" || p.group === group;
      const hay = normalize([p.name, p.role, p.org].join(" "));
      const qOk = !nq || hay.includes(nq);
      return groupOk && qOk;
    });

    grid.innerHTML = items.map((p, idx) => {
      const linksHtml = (p.links || []).map(l =>
        `<a class="person__link" href="${escapeAttr(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)}</a>`
      ).join("");

      const bio = p.bio || "";
      const isLong = bio.length > 150;
      const shortBio = isLong ? bio.slice(0, 150) + "..." : bio;
      const bioHtml = bio
        ? `<div class="person__bio" id="bio-${idx}">${escapeHtml(shortBio)}</div>`
        : "";
      const moreBtn = isLong
        ? `<button class="person__more" type="button" aria-expanded="false" aria-controls="bio-${idx}">Read more</button>`
        : "";

      return `
        <article class="card person" data-idx="${idx}">
          <div class="person__top">
            <img class="avatar" src="${escapeAttr(p.photo)}" alt="${escapeAttr(p.name)} photo" loading="lazy">
            <div>
              <div class="person__name">${escapeHtml(p.name)}</div>
              <div class="person__meta">${escapeHtml(p.role || "")}${p.org ? " • " + escapeHtml(p.org) : ""}</div>
            </div>
            <span class="badge">${escapeHtml(p.group)}</span>
          </div>

          <div class="person__links">
            ${linksHtml || `<span class="muted small">Bio link coming soon</span>`}
          </div>

          ${bioHtml}
          ${moreBtn}
        </article>
      `;
    }).join("");

    // Add event listeners for "Read more" buttons
    $$(".person", grid).forEach(card => {
      const more = $(".person__more", card);
      if (!more) return;

      const idx = card.dataset.idx;
      const p = items[idx];
      const bioEl = $(".person__bio", card);
      let expanded = false;

      more.addEventListener("click", () => {
        expanded = !expanded;
        bioEl.textContent = expanded ? p.bio : (p.bio.slice(0, 150) + "...");
        more.textContent = expanded ? "Show less" : "Read more";
        more.setAttribute("aria-expanded", expanded);
      });
    });
  };

  chips.forEach(ch => ch.addEventListener("click", () => {
    chips.forEach(x => x.classList.remove("is-active"));
    ch.classList.add("is-active");
    group = ch.dataset.group;
    render();
  }));

  search?.addEventListener("input", (e) => {
    q = e.target.value || "";
    render();
  });

  render();
}

/* =========================
   Speakers renderer
   ========================= */
function initSpeakers() {
  const grid = $("#speakerGrid");
  const search = $("#speakerSearch");
  const count = $("#speakerCount");
  if (!grid) return;

  let q = "";

  function render() {
    const nq = normalize(q);
    const items = SPEAKERS
      .map((sp, idx) => ({ sp, idx }))
      .filter(({ sp }) => {
        const hay = normalize([sp.name, sp.role, sp.talk, sp.abstract].join(" "));
        return !nq || hay.includes(nq);
      });

    if (count) count.textContent = `${items.length} speakers`;

    grid.innerHTML = items.map(({ sp, idx }) => {
      const abstract = sp.abstract || "";
      const short = abstract.length > 180 ? abstract.slice(0, 180) + "…" : abstract;
      const needsMore = abstract.length > 180;

      return `
        <article class="card speaker" data-idx="${idx}">
          <div class="speaker__top">
            <div>
              <div class="speaker__name">${escapeHtml(sp.name)}</div>
              <div class="speaker__role">${escapeHtml(sp.role || "")}</div>
            </div>
            <span class="badge">Presenter</span>
          </div>

          <div class="speaker__talk">${escapeHtml(sp.talk || "")}</div>

          <p class="speaker__abstract">${escapeHtml(short)}</p>

          ${needsMore ? `<button class="speaker__more" type="button">Read more</button>` : ""}
        </article>
      `;
    }).join("");

    $$(".speaker", grid).forEach(card => {
      const more = $(".speaker__more", card);
      if (!more) return;

      const idx = Number(card.getAttribute("data-idx"));
      const full = (SPEAKERS[idx]?.abstract || "");
      const p = $(".speaker__abstract", card);

      const short = p.textContent;
      let expanded = false;

      more.addEventListener("click", () => {
        expanded = !expanded;
        p.textContent = expanded ? full : short;
        more.textContent = expanded ? "Show less" : "Read more";
      });
    });
  }

  search?.addEventListener("input", (e) => {
    q = e.target.value || "";
    render();
  });

  render();
}

/* =========================
   Venue tabs + copy buttons
   ========================= */
function initVenueTabs() {
  const tabs = $$(".tab");
  const panes = $$(".pane");
  tabs.forEach(t => t.addEventListener("click", () => {
    const target = t.dataset.tab;
    tabs.forEach(x => x.classList.toggle("is-active", x === t));
    panes.forEach(p => p.classList.toggle("is-active", p.dataset.pane === target));
  }));
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

function initCopy() {
  $("#copyEmail")?.addEventListener("click", async (e) => {
    const email = e.currentTarget.dataset.email;
    const ok = await copyText(email);
    e.currentTarget.textContent = ok ? "Copied!" : "Copy failed";
    setTimeout(() => e.currentTarget.textContent = "Copy organizer email", 1200);
  });

  $("#copyMeeting")?.addEventListener("click", async () => {
    const el = $("#meetingLink");
    const ok = await copyText(el.textContent.trim());
    const btn = $("#copyMeeting");
    btn.textContent = ok ? "Copied!" : "Copy failed";
    setTimeout(() => btn.textContent = "Copy", 1200);
  });
}

/* =========================
   Back to top
   ========================= */
function initToTop() {
  const btn = $("#toTop");
  if (!btn) return;

  function onScroll() {
    const show = window.scrollY > 600;
    btn.classList.toggle("is-show", show);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================
   Mingle Bingo Modal
   ========================= */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initBingo() {
  const modal = $("#bingoModal");
  const openBtn = $("#openBingo");
  const grid = $("#bingoGrid");
  const shuffleBtn = $("#shuffleBingo");

  function open() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function render() {
    const prompts = shuffle(BINGO_PROMPTS).slice(0, 25);
    grid.innerHTML = prompts.map((t, i) =>
      `<button class="bingo__cell" type="button" data-i="${i}">${escapeHtml(t)}</button>`
    ).join("");

    $$(".bingo__cell", grid).forEach(cell => {
      cell.addEventListener("click", () => cell.classList.toggle("is-marked"));
    });
  }

  openBtn?.addEventListener("click", () => {
    render();
    open();
  });

  shuffleBtn?.addEventListener("click", render);

  modal?.addEventListener("click", (e) => {
    if (e.target?.dataset?.close) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });
}

/* =========================
   Utils: escaping
   ========================= */
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(str) {
  return escapeHtml(str).replaceAll("\n", " ");
}

/* =========================
   Init
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initTheme();
  initCountdown();
  initICS();
  initAgenda();
  initPeople();
  initSpeakers();
  initVenueTabs();
  initCopy();
  initToTop();
  initBingo();
});


