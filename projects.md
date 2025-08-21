---
layout: page
title: Projects
permalink: /projects/
---

Below is a concise list of public projects / sandboxes. Order reflects current relevance.

{% assign all = site.data.pinned | sort: 'order' %}
{% for p in all %}
### [{{ p.display }}]({{ p.url }}){% if p.language %} <small><code>{{ p.language }}</code></small>{% endif %}

{{ p.description }}

---
{% endfor %}
