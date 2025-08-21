---
layout: home
title: Home
permalink: /
---

<div class="hero">
  <h1>Hi, I'm Alex.</h1>
  <p class="lead">I build thoughtful software with a bias for clarity, simplicity, and shipping things that matter.</p>
  <p style="margin-top:1.1rem;">
    <a class="btn-inline" href="/about/">More about me →</a>
  </p>
</div>

<h2 id="posts" class="posts-heading">Recent Posts</h2>

{% if site.posts.size == 0 %}
<p style="text-align:center; opacity:.65;">Nothing here yet — first post coming soon.</p>
{% endif %}
---
title: "C++ Vulkan Graphics Experiments"
layout: landing
excerpt: "Pushing pixels & polygons — modern rendering, engine architecture, and low-level performance adventures."
---

<div class="hero-intro">
  <h1>Alex Mollard <span class="dim">| C++ Vulkan Enthusiast & Graphics Tinkerer</span></h1>
  <p class="tagline">Diving deep into C++ & Vulkan — crafting real‑time rendering pipelines, engine internals, tooling, and performance experiments.</p>
  <div class="link-pills">
    <a class="pill" href="https://github.com/AlexMollard" target="_blank" rel="noopener">GitHub</a>
    <a class="pill" href="https://www.linkedin.com/in/" target="_blank" rel="noopener">LinkedIn</a>
    <a class="pill" href="https://www.alexmollard.dev/" target="_blank" rel="noopener">Portfolio</a>
    <a class="pill" href="https://github.com/AlexMollard?tab=followers" target="_blank" rel="noopener">Followers ↗</a>
  </div>
  <div class="skills-cloud">
    <span>C++</span><span>Vulkan</span><span>GLSL</span><span>HLSL</span><span>CMake</span><span>OpenGL</span><span>Render Graphs</span><span>Clang</span><span>ImGui</span><span>Optimization</span>
  </div>
</div>

<section class="pinned-projects">
  <h2>Selected / Pinned Projects</h2>
  {% assign pinned = site.data.pinned_repos | sort: 'order' %}
  <div class="project-grid">
  {% for repo in pinned %}
    <div class="project-card">
      <div class="project-head">
        <h3><a href="{{ repo.url }}" target="_blank" rel="noopener">{{ repo.name }}</a></h3>
        {% if repo.language %}<span class="lang lang-{{ repo.language | downcase }}">{{ repo.language }}</span>{% endif %}
      </div>
      <p class="desc">{{ repo.description }}</p>
      <div class="meta">
        {% if repo.stars %}<span title="Stars">⭐ {{ repo.stars }}</span>{% endif %}
        {% if repo.updated %}<span title="Recent activity">🕒 {{ repo.updated }}</span>{% endif %}
      </div>
    </div>
  {% endfor %}
  </div>
</section>

<section class="github-activity">
  <h2>GitHub Activity Snake</h2>
  <p class="dim small">(Fun visualization of contribution grid)</p>
  <img src="https://raw.githubusercontent.com/AlexMollard/AlexMollard/output/github-contribution-grid-snake.svg" alt="github contribution snake" loading="lazy" />
</section>

<section class="contact-cta">
  <h2>Collaboration & Reach Out</h2>
  <p>I'm always excited to collaborate on rendering, engine architecture, tools, or performance‑oriented C++ projects. Feel free to connect.</p>
  <blockquote>💬 "Code is like humour. When you have to explain it, it's bad." – Cory House</blockquote>
</section>

<section class="recent-posts">
  <h2>Latest Writing</h2>
  {% assign recent = site.posts | slice: 0, 5 %}
  <ul class="post-list-inline">
  {% for post in recent %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a><span class="date">{{ post.date | date: '%Y-%m-%d' }}</span></li>
  {% endfor %}
  </ul>
  <p class="more-posts"><a href="/blog/">Browse all posts →</a></p>
</section>

<section class="tech-stack">
  <h2>Core Focus Areas</h2>
  <ul class="focus-grid">
    <li>Modern Vulkan 1.3 features</li>
    <li>Frame graph & render graph design</li>
    <li>Memory allocation strategies</li>
    <li>Descriptor & resource management</li>
    <li>Real-time debugging & tooling</li>
    <li>Performance profiling & optimization</li>
  </ul>
</section>

<section class="cta-footer">
  <p>Want to chat about graphics programming? <a href="https://github.com/AlexMollard" rel="noopener" target="_blank">Reach out on GitHub</a>.</p>
</section>

