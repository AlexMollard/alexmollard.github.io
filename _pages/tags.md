---
layout: page
title: Tags
permalink: /tags/
excerpt: "Browse posts by tag."
---

<ul class="tag-cloud">
{% assign sorted = site.tags | sort %}
{% for tag in sorted %}
  <li><a href="#{{ tag[0] | slugify }}">{{ tag[0] }} ({{ tag[1].size }})</a></li>
{% endfor %}
</ul>

{% for tag in sorted %}
  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
  <ul>
  {% for post in tag[1] %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>{{ post.date | date: '%Y-%m-%d' }}</small></li>
  {% endfor %}
  </ul>
{% endfor %}
---
layout: tags
title: "Tags"
permalink: /tags/
author_profile: false
---
