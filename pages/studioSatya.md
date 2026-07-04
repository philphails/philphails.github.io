---
layout: hub
classes: wide
category: studio satya
title: "Studio Satya"
permalink: /studio-satya/
author_profile: false

header:
  image: /assets/images/studioSatyaPageImage.jpg
sidebar:
  nav: "mind-body-spirit"
---

Studio Satya has become a second home for many of my conversations about yoga, mindfulness, philosophy, and living with greater intention. Across these episodes, owners Mary Richardson-Perez, Karlie Lemos, and Hollie Meador share decades of experience while exploring topics that reach far beyond the yoga mat.

Together, these conversations examine resilience, nervous system regulation, relationships, community, balance, purpose, and the lifelong practice of becoming more fully ourselves. Whether discussing the Yoga Sutras, navigating life's changing seasons, or building a welcoming community in Austin, each episode offers practical wisdom grounded in compassion, curiosity, and presence.

If you're looking for thoughtful conversations about yoga as a way of living—not simply a form of exercise—this collection is a great place to begin.

<section class="hub-episodes">

  <div class="entries-wrapper">
    <div class="entries-grid">
      {% assign posts = site.episodes | where_exp: "post", "post.categories contains 'studio satya'" | sort: "episode_number" | reverse %}
      {% for post in posts %}
        {% include archive-single.html type="grid" source="studio satya" %}
      {% endfor %}
    </div>
  </div>
</section>

![studio satya logo](../assets/images/sponsors/studio-satya.jpg)

## About Studio Satya

Studio Satya is an independent yoga studio in North Austin dedicated to traditional yoga, meditation, breathwork, and mindful living. Founded by Mary Richardson-Perez and now co-owned with Karlie Lemos and Hollie Meador, the studio offers an inclusive environment where practitioners of all experience levels can deepen their practice through movement, philosophy, and community.

<h3>Connect with Studio Satya</h3>

<div class="contact-links">

  <p>
    📍
    <strong>Address:</strong>
    <a href="https://maps.google.com/?q=1308+W+Anderson+Lane+Suite+A+Austin+TX+78757"
       target="_blank"
       rel="noopener noreferrer">
      1308 W. Anderson Lane, Suite A, Austin, TX 78757
    </a>
  </p>

  <p>
    🌐
    <strong>Website:</strong>
    <a href="https://www.studiosatya.com/"
       target="_blank"
       rel="noopener noreferrer"
       class="track-sponsor"
       data-sponsor="Studio Satya">
      studiosatya.com
    </a>
  </p>

  <p>
    📸
    <strong>Instagram:</strong>
    <a href="https://www.instagram.com/studio_satya_austin/"
       target="_blank"
       rel="noopener noreferrer"
       class="track-sponsor"
       data-sponsor="Studio Satya">
      @studio_satya_austin
    </a>
  </p>

  <p>
    👍
    <strong>Facebook:</strong>
    <a href="https://www.facebook.com/StudioSatyaAustin/"
       target="_blank"
       rel="noopener noreferrer"
       class="track-sponsor"
       data-sponsor="Studio Satya">
      Studio Satya Austin
    </a>
  </p>

  <p>
    📞
    <strong>Phone:</strong>
    <a href="tel:+15124000168">
      (512) 400-0168
    </a>
  </p>

</div>