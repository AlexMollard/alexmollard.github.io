---
layout: home
title: "Alex Mollard"
permalink: /
---

<section class="hero hero--compact">
  <h1 class="hero-title">Alex Mollard</h1>
  <p class="hero-tag">C++ Engine & Systems Programming • Rendering • Tooling & Performance</p>
  <p class="hero-actions">
    <a class="btn-inline" href="/about/">About</a>
    <a class="btn-inline alt" href="https://github.com/AlexMollard" target="_blank" rel="noopener">GitHub ↗</a>
  </p>
  <p class="hero-sub">Focused on clarity, performance, and thoughtful systems.</p>
</section>

<section class="quick-meta">
  <ul>
    <li>Engine architecture & systems</li>
    <li>C++ / Vulkan / performance</li>
    <li>Tooling, profiling, iteration speed</li>
  </ul>
</section>

{% assign pinned = site.data.pinned | sort: 'order' | slice: 0, 3 %}
<section class="pinned pinned--concise">
  <div class="pinned-head">
    <h2 class="section-label">Projects</h2>
    <a class="more-link" href="/projects/">All →</a>
  </div>
  <div class="project-grid project-grid--compact">
  {% for p in pinned %}
    <a class="project-mini" href="{{ p.url }}" target="_blank" rel="noopener">
      <span class="pm-head">{{ p.display }}{% if p.language %}<em>{{ p.language }}</em>{% endif %}</span>
      <span class="pm-desc">{{ p.description }}</span>
    </a>
  {% endfor %}
  </div>
</section>

{% if site.posts.size > 0 %}
<section class="recent recent--inline">
  <h2 class="section-label">Latest</h2>
  <ul>
    {% assign latest = site.posts | slice: 0, 3 %}
    {% for post in latest %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a><time>{{ post.date | date: '%Y-%m-%d' }}</time></li>
    {% endfor %}
  </ul>
</section>
{% endif %}

<section class="footer-note">
  <p>Open to collaborating on focused rendering & engine tooling work.</p>
</section>



