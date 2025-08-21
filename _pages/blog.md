---
layout: page
title: "Blog"
permalink: /blog/
excerpt: "All posts — graphics, C++, engine experiments, and notes."
---

<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>{{ post.date | date: '%Y-%m-%d' }}</small></li>
{% endfor %}
</ul>
