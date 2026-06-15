---
title: "Browse Episodes by Topic"
layout: single
permalink: /topics/
classes: wide
header:
  image: /assets/images/episodesPageImage.jpg
sidebar:
  nav: "mind-body-spirit"
---

{% comment %}
1. GATHER ALL UNIQUE TAGS FROM YOUR EPISODES COLLECTION
{% endcomment %}
{% assign raw_tags = "" %}
{% for episode in site.episodes %}
  {% if episode.tags %}
    {% assign episode_tags = episode.tags | join: ',' %}
    {% assign raw_tags = raw_tags | append: ',' | append: episode_tags %}
  {% endif %}
{% endfor %}
{% assign unique_tags = raw_tags | split: ',' | uniq | sort %}

{% comment %}
2. THE DEFAULT TAXONOMY LIST (Hidden if a URL parameter is present)
{% endcomment %}
<div id="topics-index-view">
  <p>Select a topic below to filter episodes:</p>
  <ul class="taxonomy__index">
    {% for tag in unique_tags %}
      {%- if tag == "" -%}{%- continue -%}{%- endif -%}
      <li>
        <a href="?tag={{ tag | slugify }}">
          <strong>{{ tag }}</strong> 
          <span class="taxonomy__count">
            ({% assign count = 0 %}{% for ep in site.episodes %}{% if ep.tags contains tag %}{% assign count = count | plus: 1 %}{% endif %}{% endfor %}{{ count }})
          </span>
        </a>
      </li>
    {% endfor %}
  </ul>
</div>

{% comment %}
3. THE GRID VIEW (Updated with a robust string-split array check)
{% endcomment %}
<div id="topics-grid-view">
  {% for tag in unique_tags %}
    {%- if tag == "" -%}{%- continue -%}{%- endif -%}
    
    <div id="archive-{{ tag | slugify }}" class="topic-group-section" style="display: none;">
      <h2 class="archive__subtitle" style="border-bottom: 2px solid #3d4144; padding-bottom: 0.3em; margin-bottom: 1.5em;">Topic: {{ tag | capitalize }}</h2>
      
      <div class="entries-grid">
        {% assign sorted_episodes = site.episodes | sort: "episode_number" | reverse %}
        {% for ep in sorted_episodes %}
          
          {% comment %} 
            SAFE GUARD: Convert whatever the front matter format is into a clean, uniform array
          {% endcomment %}
          {% assign ep_tags_string = ep.tags | join: ',' | downcase %}
          {% assign ep_tags_array = ep_tags_string | split: ',' %}
          {% assign target_tag_clean = tag | downcase %}

          {% if ep_tags_array contains target_tag_clean %}
            
            <div class="grid__item">
              <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
                {% if ep.header.teaser %}
                  <div class="archive__item-teaser">
                    <img src="{{ ep.header.teaser | relative_url }}" alt="">
                  </div>
                {% endif %}
                <h3 class="archive__item-title no_toc" itemprop="headline">
                  <a href="{{ ep.url | relative_url }}" rel="permalink">{{ ep.title }}</a>
                </h3>
                {% if ep.date %}
                  <p class="page__meta"><i class="fa fa-fw fa-calendar" aria-hidden="true"></i> {{ ep.date | date: "%B %d, %Y" }}</p>
                {% endif %}
                {% if ep.excerpt %}
                  <div class="archive__item-excerpt" itemprop="description">
                    {{ ep.excerpt | markdownify | strip_html | truncatewords: 25 }}
                  </div>
                {% endif %}
              </article>
            </div>

          {% endif %}
        {% endfor %}
      </div>
      
      <p style="margin-top: 3em;"><a href="/topics/" class="btn btn--primary">&larr; Return to All Topics</a></p>
    </div>
  {% endfor %}
</div>

{% comment %}
4. JAVASCRIPT DISPLAY ENGINE
{% endcomment %}
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetTag = urlParams.get('tag');

    if (targetTag) {
      const activeSection = document.getElementById('archive-' + targetTag);
      if (activeSection) {
        // Hide global index list
        document.getElementById('topics-index-view').style.display = 'none';
        // Reveal selected tag grid
        activeSection.style.display = 'block';
        
        // Dynamically alter main heading to match style sheet rules
        const pageTitle = document.querySelector('.page__title');
        if (pageTitle) {
          const cleanTitle = targetTag.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
          pageTitle.innerText = cleanTitle + " Episodes";
        }
      }
    }
  });
</script>