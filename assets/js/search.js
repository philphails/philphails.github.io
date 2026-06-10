fetch("/search.json")
  .then(res => res.json())
  .then(data => {
    initSearch(data)
  })

function initSearch(store) {

  var idx = lunr(function () {

    this.field('title')
    this.field('excerpt')
    this.field('content')
    this.field('categories')
    this.field('tags')
    this.field('guest')
    this.ref('url')

    var that = this

    store.forEach(function (item) {
      that.add({
        title: item.title || "",
        excerpt: item.excerpt || "",
        content: item.content || "",
        guest: item.guest || "",
        categories: (item.categories || []).join(" "),
        tags: (item.tags || []).join(" "),
        url: item.url
      })
    })

  })

  var input = document.querySelector("#search")
  var results = document.querySelector("#results")

  input.addEventListener("keyup", function () {

    var query = input.value.trim()
    if (!query) {
      results.innerHTML = ""
      return
    }

    var result = idx.query(function (q) {

      query.split(lunr.tokenizer.separator).forEach(function (term) {

        if (!term) return

        q.term(term, { boost: 100 })

        q.term(term, {
          wildcard: lunr.Query.wildcard.TRAILING,
          boost: 10
        })

        q.term(term, {
          editDistance: 1,
          boost: 1
        })

      })

    })

    results.innerHTML = ""

    result.forEach(function (r) {

      var doc = store.find(d => d.url === r.ref)
      if (!doc) return

      // ----------------------------
      // TEASER IMAGE (NEW)
      // ----------------------------
      var teaserHTML = ""

      if (doc.teaser) {
        teaserHTML = `
          <div class="search-teaser">
            <img src="${doc.teaser}" alt="${doc.title}">
          </div>
        `
      }

      var div = document.createElement("div")

div.className = "grid__item"

div.innerHTML = `
  <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">

    ${doc.teaser ? `
      <div class="archive__item-teaser">
        <img src="${doc.teaser}" alt="${doc.title}">
      </div>
    ` : ""}

    <h2 class="archive__item-title" itemprop="headline">
      <a href="${doc.url}" rel="permalink">${doc.title}</a>
    </h2>

    <p class="archive__item-excerpt" itemprop="description">
      ${(doc.excerpt || "")
        .split(" ")
        .slice(0, 20)
        .join(" ")}...
    </p>

  </article>
`

results.appendChild(div)

    })

  })

}