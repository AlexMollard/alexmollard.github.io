export interface ProjectInfo {
  name: string;
  blurb: string;
  stack?: string[];
  link?: string; // live/demo link
  repo?: string; // source code link
  language?: string;
  stars?: number; // optional snapshot; could be dynamic later via API
  featured?: boolean;
}

export const projects: ProjectInfo[] = [
  {
    name: 'SlimeProject',
    blurb: 'SlimeEngine playground exploring modern Vulkan 1.3 features; a clean, extensible graphics framework for learning & experimentation.',
    stack: ['C++20', 'Vulkan 1.3', 'GPU', 'Rendering'],
    repo: 'https://github.com/Slime-Dev/SlimeProject',
    language: 'C++',
    featured: true,
  },
  {
    name: 'Odyssean-Engine',
    blurb: 'Modular 2D/3D engine with PBR, OpenGL/Vulkan backends, and a flexible architecture for gameplay systems.',
    stack: ['C++', 'OpenGL', 'Vulkan', 'PBR'],
    repo: 'https://github.com/AlexMollard/Odyssean-Engine',
    language: 'C++',
    featured: true,
  },
  {
    name: 'Fly',
    blurb: 'Modern audio player with real-time visualization, spatial controls, and advanced processing (OpenAL + ImGui UI).',
    stack: ['C++', 'OpenAL', 'ImGui', 'DSP'],
    repo: 'https://github.com/AlexMollard/Fly',
    language: 'C++',
    featured: true,
  },
  {
    name: 'CppOdyssey',
    blurb: 'Educational C++ resource hub: guides, tutorials, and advanced systems topics (Vulkan, engine patterns, tooling).',
    stack: ['C++', 'Content', 'Vulkan'],
    repo: 'https://github.com/AlexMollard/CppOdyssey',
    language: 'HTML',
  },
  {
    name: 'EnetPlayGround',
    blurb: 'Networking sandbox using ENet for reliable UDP; client-server model, ImGui visualization, MySQL integration.',
    stack: ['C', 'ENet', 'Networking', 'ImGui', 'MySQL'],
    repo: 'https://github.com/AlexMollard/EnetPlayGround',
    language: 'C',
  },
  {
    name: 'RenderAlchemy',
    blurb: 'OpenGL HDR + color grading lab: CLUT based workflows, tone mapping experiments, and UI-driven grading pipeline.',
    stack: ['C', 'OpenGL', 'HDR', 'Color'],
    repo: 'https://github.com/AlexMollard/RenderAlchemy',
    language: 'C',
  },
  // Original placeholder / internal systems-oriented efforts (optional keep)
  {
    name: 'ZeroMQ Market Data Fanout',
    blurb: 'Ultra-low latency market data distribution layer using lock-free ring buffers and kernel bypass experiments.',
    stack: ['C++20', 'ZeroMQ', 'Linux', 'Perf'],
    repo: 'https://github.com/AlexMollard',
    language: 'C++'
  },
  {
    name: 'Deterministic Job Scheduler',
    blurb: 'High-throughput async job system w/ work-stealing, structured concurrency & deterministic simulation mode.',
    stack: ['C++20', 'Atomics', 'Concurrency'],
    language: 'C++'
  },
  {
    name: 'Binary Format Toolkit',
    blurb: 'Header-only serde + codegen for describing & fuzzing custom binary protocols and file formats.',
    stack: ['C++17', 'Fuzzing', 'Clang'],
    language: 'C++'
  },
  {
    name: 'Latency Lab',
    blurb: 'Microbenchmark harness + visualizer for cross-platform latency characterization (timers, syscalls, queues).',
    stack: ['C++20', 'Benchmark', 'Visualization'],
    language: 'C++'
  }
];

export const featured = projects.filter(p => p.featured);
