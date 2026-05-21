---
layout: splash
hero_title: Independent long-form conversations on resilience, identity, endurance, and becoming.
header:
    # image: /assets/images/philphailssplashheaderimage.png
    overlay_image: /assets/images/Homepage-hero2.jpg
    overlay_filter: 0.45
    actions:
      - label: "Explore Episodes"
        url: "/episodes/"
        class: "btn--inverse"

      - label: "Watch on YouTube"
        url: "https://www.youtube.com/@PhilPhails"
        class: "btn--light-outline"

excerpt: Explore ideas that help you think more clearly, feel more deeply, and live more intentionally.

    
feature_row:
  - image_path: /assets/images/mind2.png
    alt: "mind"
    title: "mind"
    excerpt: The mind becomes what it repeatedly contemplates.
    url: /mind/
    btn_label: Explore
    btn_class: btn--light-outline

  - image_path: /assets/images/body2.png
    alt: "body"
    title: "body"
    excerpt: Strength is built through resistance.
    url: /body/
    btn_label: Endure
    btn_class: btn--light-outline

  - image_path: /assets/images/spirit2.png
    alt: "spirit"
    title: "spirit"
    excerpt: Meaning is found where suffering becomes purpose.
    url: /spirit/
    btn_label: Become
    btn_class: btn--light-outline

  # - image_path: /assets/images/mind2.png
  #   alt: "philosophy"
  #   title: "Philosophy Book Club"
  #   excerpt: “The examined life begins in conversation.”
  #   url: /philosophy/
  #   btn_label: Think
  #   btn_class: btn--light-outline
---

<h2>Start Here</h2>

<p>
This site is a collection of conversations. Not everything will resonate — and that’s intentional.
</p>

<p>
Start by exploring episodes. Read the articles. Watch the conversations. Follow what feels relevant to you right now.
</p>

{% include feature_row %}

<h2>Episodes Like</h2>
  {% assign featured = site.episodes | where: "featured", true | limit: 4 %}
  <div class="entries-grid">
    {% for post in featured %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  </div>

<p>
<a href="/episodes/" class="btn btn--light-outline">View all episodes</a>
</p>

<h2>If It Resonates</h2>

<p>
If something here connects with you, there are a few ways to go deeper.
</p>
<p>
  <a class="btn btn--primary btn--large"
     href="https://www.youtube.com/@PhilPhails?sub_confirmation=1"
     target="_blank"
     rel="noopener">
     Join the Conversation on YouTube
  </a>
</p>

<ul>
  <li>Like and comment on episodes that speak to you</li>
  <li>Share conversations that might help someone else</li>
</ul>

<p>
This project grows through real engagement — not algorithms.
</p>

<h2>Support the Work</h2>

<p>
Phil Phails is an independent podcast.
</p>

<p>
If these conversations add value to your life, you can help support the ongoing creation of this work.
</p>

<a href="/support" class="btn btn--primary">
Become a Supporter
</a>

<h2>Why This Exists</h2>

<p>
The goal is simple — to create conversations that help people think, feel, and live a little differently than before.
</p>