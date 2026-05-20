---
title: "Mind"
layout: archive
classes: wide
permalink: /mind/
author_profile: false

header:
  image: /assets/images/mindPageImage.jpg
sidebar:
  nav: "mind-body-spirit"
---

{% assign posts = site.episodes | where_exp: "post", "post.categories contains 'mind'" | sort: "episode_number" | reverse %}

<div class="entries-grid">
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>