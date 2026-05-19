---
title: "Mind"
layout: archive
permalink: /mind/
author_profile: false
entries_layout: grid
classes: wide
---

{% assign posts = site.episodes | where_exp: "post", "post.categories contains 'mind'" | sort: "episode_number" | reverse %}

{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}