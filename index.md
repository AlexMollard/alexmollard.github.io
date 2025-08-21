---
layout: home
title: "Alex Mollard"
permalink: /
---

Hi, I'm **Alex Mollard**.

I work on C++ engine & systems programming, rendering pipelines, and developer tooling/performance.

### Projects

See [Projects](/projects/) for more — a few highlights:

{% assign pinned = site.data.pinned | sort: 'order' | slice: 0, 3 %}
{% for p in pinned %}
- [{{ p.display }}]({{ p.url }}) — {{ p.description }}
{% endfor %}

### Latest

{% if site.posts.size > 0 %}
{% assign latest = site.posts | slice: 0,3 %}
{% for post in latest %}
- [{{ post.title }}]({{ post.url | relative_url }}) <small>{{ post.date | date: '%Y-%m-%d' }}</small>
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

GitHub: <https://github.com/AlexMollard>



