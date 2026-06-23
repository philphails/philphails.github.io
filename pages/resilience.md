---
layout: hub
classes: wide
category: resilience
title: "Resilience"
permalink: /resilience/
author_profile: false

header:
  image: /assets/images/resilience-page-image.jpg
sidebar:
  nav: "mind-body-spirit"
---
<section class="hub-episodes">

  <div class="entries-wrapper">
    <div class="entries-grid">
      {% assign posts = site.episodes | where_exp: "post", "post.categories contains 'resilience'" | sort: "episode_number" | reverse %}
      {% for post in posts %}
        {% include archive-single.html type="grid" source="resilience" %}
      {% endfor %}
    </div>
  </div>
</section>