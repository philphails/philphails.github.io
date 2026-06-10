---
layout: none
---

var store = window.store || [];

var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('content')
  this.field('categories')
  this.field('tags')
  this.ref('url')

  this.pipeline.remove(lunr.trimmer)

  var that = this;

  store.forEach(function (item) {
    that.add({
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      categories: Array.isArray(item.categories) ? item.categories.join(" ") : item.categories,
      tags: Array.isArray(item.tags) ? item.tags.join(" ") : item.tags,
      url: item.url
    })
  })
})

$(document).ready(function () {

  $('input#search').on('keyup', function () {

    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();

    if (!query) {
      resultdiv.empty();
      return;
    }

    var result = idx.query(function (q) {

      query.split(lunr.tokenizer.separator).forEach(function (term) {

        if (!term) return;

        q.term(term, { boost: 100 })

        q.term(term, {
          usePipeline: false,
          wildcard: lunr.Query.wildcard.TRAILING,
          boost: 10
        })

        q.term(term, {
          usePipeline: false,
          editDistance: 1,
          boost: 1
        })

      })
    })

    resultdiv.empty();

    resultdiv.append(
      '<p class="results__found">' +
      result.length +
      ' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}</p>'
    )

    result.forEach(function (r) {

      var ref = r.ref;

      // IMPORTANT: lookup by URL (safe + reliable)
      var doc = store.find(d => d.url === ref);

      if (!doc) return;

      var searchitem =
        '<div class="list__item">' +
          '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">' +
            '<h2 class="archive__item-title" itemprop="headline">' +
              '<a href="' + doc.url + '" rel="permalink">' + doc.title + '</a>' +
            '</h2>' +

            (doc.teaser ?
              '<div class="archive__item-teaser">' +
                '<img src="' + doc.teaser + '" alt="">' +
              '</div>'
              : ''
            ) +

            '<p class="archive__item-excerpt" itemprop="description">' +
              doc.excerpt.split(" ").slice(0, 20).join(" ") +
              '...</p>' +
          '</article>' +
        '</div>';

      resultdiv.append(searchitem);
    });

  });

});