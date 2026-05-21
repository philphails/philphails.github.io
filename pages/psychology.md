---
title: "Philosophy"
layout: archive
classes: wide
permalink: /psychology/
author_profile: false

header:
  image: /assets/images/psychologyPageImage.jpg
sidebar:
  nav: "mind-body-spirit"
---

{% assign posts = site.episodes | where_exp: "post", "post.categories contains 'psychology'" | sort: "episode_number" | reverse %}

<div class="entries-grid">
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>