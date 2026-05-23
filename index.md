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

<h2>Episodes Like This</h2>

{% assign featured = site.episodes | where: "featured", true | sort: "episode_number" | reverse | limit: 4 %}

<div class="entries-grid">
  {% for post in featured %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

<p style="margin-top: 1rem;">
  <a href="/episodes/" class="btn btn--light-outline">
    View all Episodes
  </a>
</p>

<hr class="hub-divider">

<div class="hub-footer">

  <div class="hub-footer-actions">

    <!-- SUBSCRIBE -->
    <div class="hub-action">
      <div class="hub-action-title">
        <span class="hub-icon">▶</span>
        <h3>Subscribe</h3>
      </div>

      <p>New conversations on mind, body, spirit, philosophy, and psychology.</p>

      <a class="hub-button primary"
         href="https://www.youtube.com/@PhilPhails?sub_confirmation=1"
         target="_blank"
         rel="noopener">
        Subscribe on YouTube
      </a>
    </div>

    <!-- SUPPORT -->
    <div class="hub-action">
      <div class="hub-action-title">
        <span class="hub-icon">♥</span>
        <h3>Support</h3>
      </div>

      <p>Help keep Phil Phails independent and growing.</p>

      <a class="hub-button secondary"
         href="https://www.paypal.com/donate/?hosted_button_id=GGGL6YZNFGLCC">
        Support the Work
      </a>
    </div>

    <!-- WHY / CONTEXT -->
    <div class="hub-action">
      <div class="hub-action-title">
        <span class="hub-icon">⟡</span>
        <h3>Why This Exists</h3>
      </div>

      <p>
        Conversations designed to help people think more clearly, feel more honestly, and live with more intention.
      </p>

    </div>

  </div>

</div>