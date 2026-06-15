fetch("/search.json")
  .then(res => res.json())
  .then(data => init(data));

function init(store) {

  const container = document.querySelector("#episodes-container");
  const input = document.querySelector("#episodes-search");

  // ----------------------------
  // SORT ON LOAD (MOST IMPORTANT)
  // ----------------------------
  store.sort((a, b) =>
    Number(b.episode_number || 0) - Number(a.episode_number || 0)
  );

  // ----------------------------
  // RENDER FUNCTION
  // ----------------------------
  function render(items) {

    container.innerHTML = "";

    items.forEach(doc => {

      const el = document.createElement("div");
      el.className = "grid__item";

      el.innerHTML = `
        <article class="archive__item">

          ${doc.teaser ? `
            <div class="archive__item-teaser">
              <img src="${doc.teaser}" alt="${doc.title}">
            </div>
          ` : ""}

          <h2 class="archive__item-title">
            <a href="${doc.url}">${doc.title}</a>
          </h2>

          <p class="archive__item-excerpt">
            ${(doc.excerpt || "").split(" ").slice(0, 20).join(" ")}...
          </p>

        </article>
      `;

      container.appendChild(el);
    });
  }

  // ----------------------------
  // INITIAL RENDER (ALL EPISODES)
  // ----------------------------
  render(store);

  // ----------------------------
  // SEARCH
  // ----------------------------
  const idx = lunr(function () {
    this.ref("url");
    this.field("title");
    this.field("excerpt");
    this.field("content");
    this.field("tags");
    this.field("guest");

    store.forEach(doc => this.add(doc));
  });

  input.addEventListener("keyup", () => {

    const q = input.value.trim();

    if (!q) {
      render(store);
      return;
    }

    const results = idx.search(q)
      .map(r => store.find(d => d.url === r.ref))
      .filter(Boolean)
      .sort((a, b) =>
        Number(b.episode_number || 0) - Number(a.episode_number || 0)
      );

    render(results);
  });
}