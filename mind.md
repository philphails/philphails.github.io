---
title: "Mind"
layout: archive
permalink: /mind/
author_profile: false
classes: wide
---

{% assign posts = site.episodes | where_exp: "post", "post.categories contains 'mind'" | sort: "episode_number" | reverse %}

<div class="entries-grid">
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>