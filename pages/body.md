---
title: "Body"
layout: archive
permalink: /body/
author_profile: false
entries_layout: grid

header:
  image: /assets/images/bodyPageImage.jpg
sidebar:
  nav: "mind-body-spirit"
---

{% assign posts = site.episodes | where_exp: "post", "post.categories contains 'body'" | sort: "episode_number" | reverse %}

<div class="entries-grid">
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>