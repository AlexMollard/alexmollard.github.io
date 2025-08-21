---
title: About
permalink: /about/
layout: page
excerpt: "C++ Vulkan enthusiast & graphics tinkerer."
---

<div class="about-header">
	<h1>Hi, I'm Alex.</h1>
	<p class="tagline">I explore modern real‑time rendering, low-level graphics APIs, and engine architecture. My work is a mix of Vulkan experiments, performance instrumentation, debugging tools, and small engines that grow just enough to teach me the next concept.</p>
	<div class="pill-row">
		<span>C++20/23</span><span>Vulkan 1.3</span><span>GLSL</span><span>HLSL</span><span>Render Graphs</span><span>GPU Debugging</span><span>Performance</span><span>OpenGL (legacy ↗ modern)</span><span>CMake</span><span>ImGui</span>
	</div>
</div>

## What I like building

I gravitate toward core systems: render abstractions, resource lifecycles, memory allocators, frame graphs, profiling overlays, and tooling that shortens the feedback loop while iterating on visuals. I enjoy taking opaque complexity (sync primitives, descriptor management, transient attachments) and creating small, composable layers that feel ergonomic without hiding the important details.

## Philosophy

1. Minimal abstractions first – only earn structure once pain is real.
2. Measure before optimizing: intuition is a noisy profiler.
3. Prefer explicit over clever (especially in lifetime and ownership rules).
4. Good tooling > premature refactors. The ability to see is the ability to improve.
5. Ship learning artifacts. Even unfinished engines teach future-you.

## Current Focus

- Refining a Vulkan render graph prototype (dependency tracking + transient resource reuse)
- Experimenting with GPU-driven techniques and descriptor indexing
- Building small visualization/debug panels (timings, passes, allocations)
- Improving asset pipeline experiments for shader hot-reload & reflection

## Selected Projects

| Project | Area | Notes |
|--------|------|-------|
| SlimeEngine | Vulkan playground | Modular renderer exploring sync, pass isolation, allocator strategy |
| Odyssean-Engine | Hybrid engine | PBR + learning-focused architecture (OpenGL/Vulkan) |
| RenderAlchemy | Post & grading | HDR pipeline + LUT tooling for color workflows |
| Fly | Audio + Viz | Real-time audio visualization & DSP experiments |
| EnetPlayGround | Networking | Reliable UDP exploration + instrumentation |

## Learning Timeline (Selected)

<ul class="timeline">
	<li><time>2025</time> Expanding Vulkan frame graph prototype; iterating on descriptor set reuse + transient attachments.</li>
	<li><time>2024</time> Built color grading lab & HDR experiments; deeper dives into GPU memory patterns.</li>
	<li><time>2023</time> Began systematic profiling of engine subsystems; integrated custom timing overlays.</li>
	<li><time>Earlier</time> Progressive migration from raw OpenGL experiments to Vulkan-first mindset.</li>
</ul>

## Tools & Environment

- Compiler: Clang / MSVC depending on feature set & diagnostics
- Build: CMake with preset profiles
- Debugging: RenderDoc, Nsight Graphics, Tracy, custom logging overlays
- Validation: Vulkan SDK layers always on in dev builds

## Contact

You can find me on GitHub or connect via the links in the site header/footer. I'm open to collaboration on rendering tech, tooling, or focused engine subsystems.

> “If you don’t understand the GPU, the GPU will still run — it just won’t run for you.”

Thanks for visiting.
