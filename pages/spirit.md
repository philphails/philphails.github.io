---
title: "Spirit"
layout: archive
classes: wide
permalink: /spirit/
author_profile: false

header:
  image: /assets/images/spiritPageImage.jpg
sidebar:
  nav: "mind-body-spirit"
---

{% assign posts = site.episodes | where_exp: "post", "post.categories contains 'spirit'" | sort: "episode_number" | reverse %}

<div class="entries-grid">
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>