---
layout: home
title: "Alex Mollard"
permalink: /
---

<div class="hero">
  <h1>Alex Mollard <span class="dim" style="opacity:.55; font-size:.55em; font-weight:400;">| C++ Vulkan Enthusiast & Graphics Tinkerer</span></h1>
  <p class="lead">Diving into modern rendering, engine internals, and performance—crafting pixels & pushing polygons.</p>
  <p style="margin-top:1.1rem">
    <a class="btn-inline" href="/about/">About →</a>
    <a class="btn-inline alt" href="https://github.com/AlexMollard" target="_blank" rel="noopener">GitHub ↗</a>
    <a class="btn-inline alt" href="https://www.linkedin.com/in/" target="_blank" rel="noopener">LinkedIn ↗</a>
    <a class="btn-inline alt" href="https://www.alexmollard.dev/" target="_blank" rel="noopener">Portfolio ↗</a>
  </p>
</div>

<div class="skills-cloud">
  <span>C++</span><span>Vulkan</span><span>GLSL</span><span>HLSL</span><span>CMake</span><span>OpenGL</span><span>C</span><span>Clang</span><span>Render Graphs</span><span>Optimization</span>
</div>

<section class="pinned">
  <h2>Pinned Projects</h2>
  {% assign pinned = site.data.pinned | sort: 'order' %}
  <div class="project-grid">
    {% for p in pinned %}
    <div class="project-card">
      <div class="head">
        <h3><a href="{{ p.url }}" target="_blank" rel="noopener">{{ p.display }}</a></h3>
        {% if p.language %}<span class="lang">{{ p.language }}</span>{% endif %}
      </div>
      <p class="desc">{{ p.description }}</p>
      <div class="meta">
        {% if p.stars %}<span>⭐ {{ p.stars }}</span>{% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<section class="collab">
  <p>I'm always excited to collaborate on rendering, engine architecture, tools, or performance‑driven C++ projects. Reach out via GitHub.</p>
  <blockquote>💬 "Code is like humour. When you have to explain it, it's bad." — Cory House</blockquote>
</section>

{% if site.posts.size > 0 %}
<section class="recent-posts">
  <h2>Recent Writing</h2>
  <ul class="post-list-inline">
    {% assign recent = site.posts | slice: 0, 5 %}
    {% for post in recent %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a><span class="date">{{ post.date | date: '%Y-%m-%d' }}</span></li>
    {% endfor %}
  </ul>
</section>
{% endif %}



