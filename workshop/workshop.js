/* =========================
   Data (edit here)
   ========================= */

const EVENT_START_ISO = "2026-03-12T11:30:00-04:00";
const EVENT_END_ISO   = "2026-03-12T16:10:00-04:00";
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
    title: "Keynote 2 — Title TBD",
    speakers: ["Zihang Xiang"],
    mode: "Remote",
    details: "Abstract coming soon."
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
    speakers: ["Amirhossein Ansari", "Sonal", "Zhuoxin Zhan"],
    mode: "Hybrid",
    details:
      "• Out-of-Distribution Detection for Trustworthy ML (Amirhossein Ansari)\n" +
      "• Privacy Enhancing Technologies in Explainable AI (Sonal)\n" +
      "• Adversarial Robustness for Trustworthy ML (Zhuoxin Zhan)"
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
      "• Privacy Risks in Machine Learning (Topic TBD) — Prof. Liang Xue\n" +
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
      "AI in healthcare and finance requires more than performance metrics: explainability, robustness, fairness, validation, and human oversight " +
      "are essential to meet regulatory expectations and earn stakeholder trust."
  },
  {
    name: "Zihang Xiang",
    role: "Keynote Speaker",
    talk: "Title TBD",
    abstract: "Abstract coming soon."
  },
  {
    name: "Amirhossein Ansari",
    role: "Technical Talk Presenter",
    talk: "Out-of-Distribution Detection for Trustworthy Machine Learning",
    abstract:
      "Models often become overconfident on out-of-distribution inputs. This talk introduces OOD detection, reviews recent advances, and " +
      "highlights limitations and new approaches."
  },
  {
    name: "Sonal",
    role: "Technical Talk Presenter",
    talk: "Towards integration of privacy enhancing technologies in Explainable AI",
    abstract: "Abstract details pending."
  },
  {
    name: "Zhuoxin Zhan",
    role: "Technical Talk Presenter",
    talk: "Adversarial Robustness for Trustworthy Machine Learning",
    abstract:
      "ML models remain vulnerable to adversarial inputs. This talk overviews attacks/defenses across domains and discusses challenges for deployment."
  },
  {
    name: "Prof. Liang Xue",
    role: "Technical Talk Presenter",
    talk: "Privacy Risks in Machine Learning (TBD)",
    abstract: "Abstract details pending."
  },
  {
    name: "Dilli Prasad Sharma",
    role: "Technical Talk Presenter",
    talk: "Enhancing Adversarial Robust IoT Intrusion Detection via SHAP Attribution Fingerprinting",
    abstract:
      "A SHAP-based fingerprinting approach improves resilience of IoT IDS against adversarial manipulation while enhancing interpretability."
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
    links: [{ label: "Bio", url: "https://example.com/bio" }]
  },
  {
    group: "ORGANIZER",
    name: "Prof. Ke Wang",
    org: "Simon Fraser University (SFU)",
    role: "Organizer",
    photo: "assets/people/ke-wang.jpg",
    links: [{ label: "Bio", url: "https://example.com/bio" }]
  },
  {
    group: "SPEAKER",
    name: "Lovedeep Gondara",
    org: "Vanguard (Toronto)",
    role: "Keynote Speaker",
    photo: "assets/people/lovedeep-gondara.jpg",
    links: [
      { label: "Bio", url: "https://example.com/bio" },
      { label: "LinkedIn", url: "https://example.com/linkedin" }
    ]
  },
  {
    group: "SPEAKER",
    name: "Zihang Xiang",
    org: "",
    role: "Keynote Speaker",
    photo: "assets/people/zihang-xiang.jpg",
    links: [{ label: "Bio", url: "https://example.com/bio" }]
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
function $(sel, root=document){ return root.querySelector(sel); }
function $$(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }
function normalize(s){ return (s || "").toLowerCase().trim(); }

function fmtTime(date, mode){
  const opts = { hour: "numeric", minute: "2-digit" };
  if (mode === "ET") opts.timeZone = "America/Toronto";
  if (mode === "PT") opts.timeZone = "America/Vancouver";
  return new Intl.DateTimeFormat(undefined, opts).format(date);
}
function fmtMeta(date, mode){
  const time = fmtTime(date, mode);
  const tag = mode === "ET" ? "ET" : mode === "PT" ? "PT" : "Local";
  return `${time} ${tag}`;
}

/* =========================
   Nav + scroll spy
   ========================= */
function initNav(){
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
function initTheme(){
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
function initCountdown(){
  const el = $("#countdownValue");
  if (!el) return;

  const start = new Date(EVENT_START_ISO);

  function tick(){
    const now = new Date();
    const diff = start - now;

    if (diff <= 0){
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

function toICSDate(dt){
  return new Date(dt).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function initICS(){
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
function initAgenda(){
  const list = $("#agendaList");
  const search = $("#agendaSearch");
  const chips = $$("#agendaChips .chip");
  const tzBtns = $$(".seg__btn");

  if (!list) return;

  let tzMode = "ET";
  let typeFilter = "ALL";
  let q = "";

  function render(){
    const nq = normalize(q);

    const items = AGENDA.filter(it => {
      const typeOk = typeFilter === "ALL" || it.type === typeFilter;
      const hay = normalize([it.title, (it.speakers||[]).join(" "), it.details, it.mode].join(" "));
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
function initPeople(){
  const grid = $("#peopleGrid");
  const search = $("#peopleSearch");
  const chips = $$("#peopleChips .chip");

  if (!grid) return;

  let q = "";
  let group = "ALL";

  function render(){
    const nq = normalize(q);

    const items = PEOPLE.filter(p => {
      const groupOk = group === "ALL" || p.group === group;
      const hay = normalize([p.name, p.role, p.org].join(" "));
      const qOk = !nq || hay.includes(nq);
      return groupOk && qOk;
    });

    grid.innerHTML = items.map(p => {
      const linksHtml = (p.links || []).map(l =>
        `<a class="person__link" href="${escapeAttr(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)}</a>`
      ).join("");

      return `
        <article class="card person">
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
        </article>
      `;
    }).join("");
  }

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
function initSpeakers(){
  const grid = $("#speakerGrid");
  const search = $("#speakerSearch");
  const count = $("#speakerCount");
  if (!grid) return;

  let q = "";

  function render(){
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
function initVenueTabs(){
  const tabs = $$(".tab");
  const panes = $$(".pane");
  tabs.forEach(t => t.addEventListener("click", () => {
    const target = t.dataset.tab;
    tabs.forEach(x => x.classList.toggle("is-active", x === t));
    panes.forEach(p => p.classList.toggle("is-active", p.dataset.pane === target));
  }));
}

async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    return true;
  }catch{
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

function initCopy(){
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
function initToTop(){
  const btn = $("#toTop");
  if (!btn) return;

  function onScroll(){
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
function shuffle(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initBingo(){
  const modal = $("#bingoModal");
  const openBtn = $("#openBingo");
  const grid = $("#bingoGrid");
  const shuffleBtn = $("#shuffleBingo");

  function open(){
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close(){
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function render(){
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
function escapeHtml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(str){
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
