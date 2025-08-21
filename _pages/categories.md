---
layout: page
title: Categories
permalink: /categories/
excerpt: "Browse posts by category."
---

<ul class="category-list">
{% assign cats = site.categories | sort %}
{% for cat in cats %}
  <li><a href="#{{ cat[0] | slugify }}">{{ cat[0] }} ({{ cat[1].size }})</a></li>
{% endfor %}
</ul>

{% for cat in cats %}
  <h2 id="{{ cat[0] | slugify }}">{{ cat[0] }}</h2>
  <ul>
  {% for post in cat[1] %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>{{ post.date | date: '%Y-%m-%d' }}</small></li>
  {% endfor %}
  </ul>
{% endfor %}
---
layout: categories
title: "Categories"
permalink: /categories/
author_profile: false
---
