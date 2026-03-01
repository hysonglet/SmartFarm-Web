/* eslint-disable no-alert */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function setEncodedSrc(imgEl, path) {
  if (!imgEl || !path) return;
  imgEl.src = encodeURI(path);
}

function mountDataImgs() {
  $$("img[data-img]").forEach((img) => {
    const path = img.getAttribute("data-img");
    setEncodedSrc(img, path);
    img.addEventListener(
      "error",
      () => {
        img.alt = img.alt || "图片加载失败";
        img.style.background = "rgba(0,0,0,.18)";
      },
      { once: true }
    );
  });
}

function createCard({ title, desc, img, tags = [] }) {
  const el = document.createElement("article");
  el.className = "card";

  const imgEl = document.createElement("img");
  imgEl.className = "card__img";
  imgEl.alt = title;
  setEncodedSrc(imgEl, img);
  imgEl.loading = "lazy";

  const body = document.createElement("div");
  body.className = "card__body";

  const h = document.createElement("h4");
  h.className = "card__title";
  h.textContent = title;

  const p = document.createElement("p");
  p.className = "card__desc";
  p.textContent = desc;

  const meta = document.createElement("div");
  meta.className = "card__meta";
  tags.forEach((t) => {
    const b = document.createElement("span");
    b.className = "badge";
    b.textContent = t;
    meta.appendChild(b);
  });

  body.appendChild(h);
  body.appendChild(p);
  if (tags.length) body.appendChild(meta);

  el.appendChild(imgEl);
  el.appendChild(body);

  return el;
}

function mountCards() {
  const productGrid = $("#productGrid");
  const farmGrid = $("#farmGrid");
  const scoutGrid = $("#scoutGrid");
  const opsGrid = $("#opsGrid");

  const products = [
    {
      title: "农田档案",
      desc: "以地块为核心沉淀作物、投入品与作业记录，建立可追溯的农田台账。",
      img: "images/农田信息管理.png",
      tags: ["地块", "归档", "追溯"],
    },
    {
      title: "智能巡田",
      desc: "巡田影像对齐与对比分析，辅助快速发现异常并定位到地块/分区。",
      img: "images/智能巡田分析2.jpg",
      tags: ["巡田", "识别", "对比"],
    },
    {
      title: "变量处方",
      desc: "基于长势与风险评估，制作变量处方并按地块/分区输出执行策略。",
      img: "images/指导变量作业2.jpg",
      tags: ["处方", "变量", "分区"],
    },
    {
      title: "三维航线",
      desc: "根据地形与障碍约束生成更安全的三维航线，减少重复与漏喷风险。",
      img: "images/生成三维航线1.jpg",
      tags: ["航线", "三维", "安全"],
    },
    {
      title: "作业监测",
      desc: "作业数据回传后进行覆盖率、用量与质量评估，形成可复盘的效果报表。",
      img: "images/数据化监管理2.jpg",
      tags: ["监测", "评估", "报表"],
    },
    {
      title: "知识结构",
      desc: "把流程、指标与决策逻辑结构化，统一团队理解并提升协同效率。",
      img: "images/思维导图.png",
      tags: ["流程", "指标", "协同"],
    },
  ];

  const farmCards = [
    {
      title: "影像重建",
      desc: "快速生成高精底图，为规划与巡田提供统一参考坐标。",
      img: "images/生成三维航线2.jpg",
      tags: ["底图", "重建"],
    },
    {
      title: "地块规划",
      desc: "自动识别边界与面积，支持分组与标签管理。",
      img: "images/生成三维航线1.jpg",
      tags: ["边界", "面积"],
    },
    {
      title: "信息归档",
      desc: "把作物、投入品、时间线与责任人沉淀到地块档案。",
      img: "images/农田信息管理.png",
      tags: ["档案", "台账"],
    },
    {
      title: "效果复盘",
      desc: "把作业记录与监测结果串联，便于复盘优化下一季策略。",
      img: "images/数据化监管理1.jpg",
      tags: ["复盘", "优化"],
    },
  ];

  const scoutCards = [
    {
      title: "巡田影像",
      desc: "组织巡田任务并对影像进行对齐与分区展示。",
      img: "images/智能巡田分析1.png",
      tags: ["采集", "对齐"],
    },
    {
      title: "状态评估",
      desc: "从长势、风险与异常分布等维度进行综合评估。",
      img: "images/智能巡田分析2.jpg",
      tags: ["长势", "风险"],
    },
    {
      title: "数据化监测",
      desc: "以图表与指标展示地块状态与变化趋势。",
      img: "images/数据化监管理1.jpg",
      tags: ["指标", "趋势"],
    },
    {
      title: "全周期跟踪",
      desc: "多期巡田对比帮助建立全周期的变化理解。",
      img: "images/数据化监管理2.jpg",
      tags: ["对比", "周期"],
    },
  ];

  const opsCards = [
    {
      title: "作业指导",
      desc: "从处方到执行路径，把策略落实到具体地块任务。",
      img: "images/指导变量作业1.png",
      tags: ["指导", "落地"],
    },
    {
      title: "变量作业",
      desc: "按分区差异化用量，提高投入效率并降低浪费。",
      img: "images/指导变量作业2.jpg",
      tags: ["变量", "用量"],
    },
    {
      title: "航线生成",
      desc: "考虑地形与边界约束，生成更可靠的作业航线。",
      img: "images/生成三维航线1.jpg",
      tags: ["生成", "约束"],
    },
    {
      title: "三维规划",
      desc: "对复杂地形提供三维规划方式，提升安全与覆盖质量。",
      img: "images/生成三维航线2.jpg",
      tags: ["三维", "规划"],
    },
  ];

  const mount = (root, list) => {
    if (!root) return;
    root.innerHTML = "";
    list.forEach((item) => root.appendChild(createCard(item)));
  };

  mount(productGrid, products);
  mount(farmGrid, farmCards);
  mount(scoutGrid, scoutCards);
  mount(opsGrid, opsCards);
}

function mountHeroBg() {
  const bg = $(".hero__bg");
  if (!bg) return;
  bg.style.backgroundImage = `linear-gradient(to bottom, rgba(7,12,20,.55), rgba(7,12,20,.85)), url("${encodeURI(
    "images/案例2.png"
  )}")`;
}

function mountTopbarElevate() {
  const topbar = $(".topbar");
  if (!topbar) return;
  const onScroll = () => {
    const elevated = window.scrollY > 8;
    topbar.setAttribute("data-elevate", elevated ? "true" : "false");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function mountTabs() {
  const tabs = document.querySelector("[data-tabs]");
  if (!tabs) return;

  const buttons = $$("[data-tab]", tabs);
  const panes = $$("[data-pane]", tabs);

  const setActive = (key) => {
    buttons.forEach((b) => {
      const active = b.getAttribute("data-tab") === key;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });
    panes.forEach((p) => {
      const active = p.getAttribute("data-pane") === key;
      p.classList.toggle("is-active", active);
    });
  };

  buttons.forEach((b) => {
    b.addEventListener("click", () => setActive(b.getAttribute("data-tab")));
  });
}

function openImageModal({ src, caption = "" }) {
  const dlg = $("#imgModal");
  const img = $("#modalImg");
  const cap = $("#modalCaption");
  if (!dlg || !img || !cap) return;

  img.alt = caption || "图片预览";
  img.src = encodeURI(src);
  cap.textContent = caption;

  if (typeof dlg.showModal === "function") dlg.showModal();
}

function closeModal() {
  const dlg = $("#imgModal");
  if (!dlg) return;
  dlg.close();
}

function mountMasonry() {
  const root = $("#caseMasonry");
  if (!root) return;

  const tiles = [
    { src: "images/案例1.jpg", label: "案例 1", span: 7 },
    { src: "images/案例2.png", label: "案例 2", span: 5 },
    { src: "images/案例3.png", label: "案例 3", span: 6 },
    { src: "images/智能巡田分析2.jpg", label: "巡田分析", span: 6 },
    { src: "images/数据化监管理2.jpg", label: "数据化监测", span: 5 },
    { src: "images/指导变量作业1.png", label: "变量作业", span: 7 },
  ];

  root.innerHTML = "";

  tiles.forEach((t) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "tile";
    tile.style.gridColumn = `span ${t.span}`;
    tile.setAttribute("aria-label", `打开 ${t.label} 预览`);

    const img = document.createElement("img");
    img.className = "tile__img";
    img.alt = t.label;
    img.loading = "lazy";
    setEncodedSrc(img, t.src);

    const overlay = document.createElement("div");
    overlay.className = "tile__overlay";
    overlay.setAttribute("aria-hidden", "true");

    const label = document.createElement("div");
    label.className = "tile__label";
    label.innerHTML = `<span>${t.label}</span><span class="tile__hint">点击放大</span>`;

    tile.appendChild(img);
    tile.appendChild(overlay);
    tile.appendChild(label);

    tile.addEventListener("click", () => openImageModal({ src: t.src, caption: t.label }));
    root.appendChild(tile);
  });
}

function mountModalClose() {
  const dlg = $("#imgModal");
  if (!dlg) return;

  dlg.addEventListener("click", (e) => {
    // 点击灰色遮罩关闭（原生 <dialog> 常用写法）
    if (e.target === dlg) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dlg.open) closeModal();
  });

  $$("[data-action='closeModal']").forEach((b) => b.addEventListener("click", closeModal));
}

function mountContactForm() {
  const form = $("#contactForm");
  const tip = $("#formTip");
  if (!form || !tip) return;

  const setTip = (msg, ok = false) => {
    tip.textContent = msg;
    tip.style.color = ok ? "rgba(39,192,125,.92)" : "rgba(255,255,255,.68)";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const role = String(fd.get("role") || "").trim();
    const email = String(fd.get("email") || "").trim();

    if (!role) {
      setTip("请先选择职业（必填）。");
      $("select[name='role']")?.focus();
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setTip("请填写有效的邮箱地址（必填）。");
      $("input[name='email']")?.focus();
      return;
    }

    setTip("提交成功（示例）：我们会尽快与你联系。", true);
    form.reset();
  });

  form.addEventListener("reset", () => setTip(""));
}

function mountActions() {
  $$("[data-action='openDemo']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = $("#solutions");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function mountYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function main() {
  mountYear();
  mountHeroBg();
  mountTopbarElevate();
  mountCards();
  mountMasonry();
  mountTabs();
  mountDataImgs();
  mountModalClose();
  mountContactForm();
  mountActions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}

