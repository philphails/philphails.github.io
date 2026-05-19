---
title: "Spirit"
layout: archive
permalink: /spirit/
author_profile: false
entries_layout: grid
classes: wide
---

{% assign posts = site.episodes | where_exp: "post", "post.categories contains 'spirit'" | sort: "episode_number" | reverse %}

<div class="entries-grid">
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>