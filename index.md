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

<style>
  .hero-intro h1 { margin-bottom: .25rem; }
  .hero-intro .dim { opacity:.65; font-weight:400; }
  .tagline { font-size:1.05rem; max-width:860px; }
  .skills-cloud { display:flex; flex-wrap:wrap; gap:.4rem; margin:1rem 0 1.2rem; }
  .skills-cloud span { background:#111; padding:.35rem .65rem; border:1px solid #222; font-size:.65rem; letter-spacing:.5px; text-transform:uppercase; border-radius:4px; }
  .link-pills { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem; }
  .pill { background:#111; border:1px solid #222; padding:.45rem .8rem; font-size:.6rem; text-transform:uppercase; letter-spacing:.6px; border-radius:20px; text-decoration:none; }
  .pill:hover { background:#182030; border-color:#2a3d55; }
  .pinned-projects { margin-top:2.5rem; }
  .project-grid { display:grid; gap:1rem; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); }
  .project-card { background:#111; border:1px solid #222; padding:1rem 1rem 1.1rem; border-radius:6px; display:flex; flex-direction:column; }
  .project-card h3 { font-size:1rem; margin:0 0 .4rem; }
  .project-card .desc { font-size:.8rem; line-height:1.25rem; flex-grow:1; }
  .project-card .meta { font-size:.65rem; display:flex; gap:.7rem; margin-top:.6rem; opacity:.75; }
  .lang { font-size:.55rem; background:#222; padding:.25rem .45rem; border-radius:4px; text-transform:uppercase; letter-spacing:.6px; }
  .github-activity img { max-width:100%; background:#111; border:1px solid #222; border-radius:6px; margin-top:.5rem; }
  .post-list-inline { list-style:none; padding:0; margin:0; display:grid; gap:.4rem; }
  .post-list-inline li { display:flex; gap:.5rem; font-size:.8rem; }
  .post-list-inline .date { opacity:.55; font-family:monospace; }
  .focus-grid { list-style:none; padding:0; margin:0; display:grid; gap:.6rem; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); font-size:.75rem; }
  .contact-cta blockquote { font-size:.85rem; }
  .cta-footer { margin:3rem 0 1rem; font-size:.85rem; opacity:.85; }
  @media (min-width:1200px){ .skills-cloud span { font-size:.6rem; } }
</style>
