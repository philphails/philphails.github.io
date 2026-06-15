---
layout: hub
classes: wide
category: personal growth
title: "Personal Growth"
permalink: /personal-growth/
author_profile: false

header:
  image: /assets/images/personalGrowthPageImage.jpg
sidebar:
  nav: "mind-body-spirit"
---

<hr class="hub-divider" />

<section class="hub-episodes">

  <div class="entries-wrapper">
    <div class="entries-grid">
      {% assign posts = site.episodes | where_exp: "post", "post.categories contains 'personal growth'" | sort: "episode_number" | reverse %}
      {% for post in posts %}
        {% include archive-single.html type="grid" source="personal growth" %}
      {% endfor %}
    </div>
  </div>
</section>

<hr class="hub-divider" />