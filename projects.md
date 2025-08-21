---
layout: page
title: Projects
permalink: /projects/
---

Below is a concise list of public projects / sandboxes. Order reflects current relevance.

<div class="project-grid">
{% assign all = site.data.pinned | sort: 'order' %}
{% for p in all %}
  <div class="project-card">
    <div class="head">
      <h3><a href="{{ p.url }}" target="_blank" rel="noopener">{{ p.display }}</a></h3>
      {% if p.language %}<span class="lang">{{ p.language }}</span>{% endif %}
    </div>
    <p class="desc">{{ p.description }}</p>
  </div>
{% endfor %}
</div>
