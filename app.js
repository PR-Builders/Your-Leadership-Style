(function () {
  const $ = (id) => document.getElementById(id);
  const screens = { home: $("screen-home"), quiz: $("screen-quiz"), result: $("screen-result") };

  let quiz = null;
  let answers = []; // true / false per statement
  let index = 0;

  function show(name) {
    Object.entries(screens).forEach(([k, el]) => (el.hidden = k !== name));
    window.scrollTo(0, 0);
  }

  function start(id) {
    quiz = QUIZZES[id];
    answers = [];
    index = 0;
    $("quiz-title").textContent = quiz.title;
    show("quiz");
    render();
  }

  function render() {
    const total = quiz.statements.length;
    $("statement").textContent = quiz.statements[index];
    $("progress-text").textContent = `${index + 1} of ${total}`;
    $("bar-fill").style.width = `${(index / total) * 100}%`;
    $("btn-back").disabled = index === 0;
    const prev = answers[index];
    $("btn-true").classList.toggle("picked", prev === true);
    $("btn-false").classList.toggle("picked", prev === false);
  }

  function answer(value) {
    if (!quiz || screens.quiz.hidden) return;
    answers[index] = value;
    if (index === quiz.statements.length - 1) return finish();
    index++;
    render();
  }

  function back() {
    if (index > 0) {
      index--;
      render();
    }
  }

  function score() {
    return quiz.categories.map((c) => ({
      name: c.name,
      count: c.items.filter((n) => answers[n - 1] === true).length,
      total: c.items.length,
    }));
  }

  function renderDetails(scores, top) {
    const box = $("details");
    box.innerHTML = "";
    let list = top.map((t) => t.name);
    if (quiz.virtueThreshold) {
      const strong = scores.filter((s) => s.count >= quiz.virtueThreshold).map((s) => s.name);
      if (strong.length) list = strong;
    }
    const h = document.createElement("h3");
    h.textContent = "What this means";
    box.appendChild(h);
    list.forEach((name) => {
      const d = quiz.details[name];
      const art = document.createElement("article");
      art.className = "detail";
      const title = document.createElement("h4");
      title.textContent = name;
      const sum = document.createElement("p");
      sum.textContent = d.summary;
      const sh = document.createElement("strong");
      sh.textContent = "Strengths";
      const ul = document.createElement("ul");
      d.strengths.forEach((x) => {
        const li = document.createElement("li");
        li.textContent = x;
        ul.appendChild(li);
      });
      const w = document.createElement("p");
      const wl = document.createElement("strong");
      wl.textContent = "Watch for: ";
      w.append(wl, d.watch);
      const sc = document.createElement("p");
      const sl = document.createElement("strong");
      sl.textContent = "In schools: ";
      sc.append(sl, d.inSchools);
      const wk = document.createElement("p");
      const wkl = document.createElement("strong");
      wkl.textContent = "In a day job, watch for: ";
      wk.append(wkl, AT_WORK[quiz.id][name]);
      const fu = FULL[quiz.id][name];
      const full = [["How you lead", fu.leads], ["Under pressure", fu.pressure], ["How to grow", fu.grow]].map(([k, v]) => {
        const p = document.createElement("p");
        const b = document.createElement("strong");
        b.textContent = k + ": ";
        p.append(b, v);
        return p;
      });
      art.append(title, sum, ...full, sh, ul, w, sc, wk);
      box.appendChild(art);
    });
  }

  function finish() {
    const scores = score();
    const max = Math.max(...scores.map((s) => s.count));
    const top = scores.filter((s) => s.count === max);

    $("result-heading").textContent = quiz.resultHeading;

    const main = $("result-main");
    main.innerHTML = "";
    const label = document.createElement("div");
    label.className = "result-label";
    label.textContent = top.length > 1 ? "Your top categories (tied)" : "Your top category";
    const names = document.createElement("div");
    names.className = "result-names";
    names.textContent = top.map((t) => t.name).join(" + ");
    const frac = document.createElement("div");
    frac.className = "result-frac";
    frac.textContent = `${max}/8`;
    main.append(label, names, frac);

    const wrap = $("scores");
    wrap.innerHTML = "";
    scores
      .slice()
      .sort((a, b) => b.count - a.count)
      .forEach((s) => {
        const row = document.createElement("div");
        row.className = "score-row" + (s.count === max ? " top" : "");
        const name = document.createElement("span");
        name.className = "score-name";
        name.textContent = s.name;
        const track = document.createElement("div");
        track.className = "score-track";
        const fill = document.createElement("div");
        fill.className = "score-fill";
        fill.style.width = "0%";
        track.appendChild(fill);
        const val = document.createElement("span");
        val.className = "score-val";
        val.textContent = `${s.count}/${s.total}`;
        row.append(name, track, val);
        wrap.appendChild(row);
        requestAnimationFrame(() => requestAnimationFrame(() => (fill.style.width = `${(s.count / s.total) * 100}%`)));
      });

    renderDetails(scores, top);

    let note;
    if (quiz.virtueThreshold) {
      const strong = scores.filter((s) => s.count >= quiz.virtueThreshold).map((s) => s.name);
      note = strong.length
        ? `With ${quiz.virtueThreshold} or more true responses, you probably possess: ${strong.join(", ")}.`
        : `No category reached ${quiz.virtueThreshold} true responses, so your highest-scoring categories above are the best indication of your natural virtues.`;
    } else {
      note = max === 8
        ? "Your quality is the category with the highest score. A tie means your quality is represented by all tied categories."
        : "No category scored 8/8, so your quality is represented by the next highest score. A tie means your quality is represented by all tied categories.";
    }
    $("result-note").textContent = note + " No single assessment can accurately evaluate a person's inclinations or abilities; use these results to prompt reflection.";

    const otherId = quiz.id === "quality" ? "virtues" : "quality";
    $("btn-other").textContent = `Take: ${QUIZZES[otherId].title}`;
    $("btn-other").onclick = () => start(otherId);

    $("btn-copy").onclick = () => {
      const text = `${quiz.resultHeading}: ${top.map((t) => t.name).join(" + ")} (${max}/8)\n` +
        scores.map((s) => `${s.name}: ${s.count}/${s.total}`).join("\n");
      const done = () => ($("btn-copy").textContent = "Copied!");
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => {});
      setTimeout(() => ($("btn-copy").textContent = "Copy results"), 1800);
    };
    $("btn-copy").textContent = "Copy results";

    $("bar-fill").style.width = "100%";
    show("result");
  }

  document.querySelectorAll(".card").forEach((b) => b.addEventListener("click", () => start(b.dataset.quiz)));
  $("btn-true").addEventListener("click", () => answer(true));
  $("btn-false").addEventListener("click", () => answer(false));
  $("btn-back").addEventListener("click", back);
  $("btn-quit").addEventListener("click", () => show("home"));
  $("btn-retake").addEventListener("click", () => start(quiz.id));

  document.addEventListener("keydown", (e) => {
    if (screens.quiz.hidden || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (k === "t") answer(true);
    else if (k === "f") answer(false);
    else if (e.key === "ArrowLeft") back();
  });
})();
