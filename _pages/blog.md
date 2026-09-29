---
title: "Blog"
permalink: /blog/
---

<span class='anchor' id='blog'></span>

# 📝 Blog

Notes, updates, and longer-form writing on **embodied AI**, **autonomous driving**, and engineering. <a href="{{ '/' | relative_url }}">← Back to homepage</a>

<div class="blog-list">
{%- for post in site.posts %}
  <div class="blog-item">
    <h2 class="blog-item__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="blog-item__meta"><i class="fas fa-calendar-alt" aria-hidden="true"></i> {{ post.date | date: "%b %-d, %Y" }}{% if post.tags.size > 0 %} &middot; {% for tag in post.tags %}<span class="blog-item__tag">{{ tag }}</span>{% endfor %}{% endif %}</p>
    <p class="blog-item__excerpt">{{ post.excerpt | strip_html | normalize_whitespace | truncate: 220 }}</p>
    <a class="blog-item__more" href="{{ post.url | relative_url }}">Read more <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
{%- endfor %}
</div>

{% if site.posts.size == 0 %}
*No posts yet — stay tuned!*
{% endif %}
