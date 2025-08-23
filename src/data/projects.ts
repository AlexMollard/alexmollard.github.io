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
  // Professional Game Development (Big Ant Studios)
  {
    name: 'TIEBREAK',
    blurb: 'Official tennis game of the ATP and WTA. Featuring major tournaments, multiplayer, and customizable play styles.',
    stack: ['C++', 'Game Development', 'Tennis Simulation'],
    link: 'https://store.steampowered.com/app/2264340/TIEBREAK_Official_game_of_the_ATP_and_WTA/',
    language: 'C++',
    featured: true,
  },
  {
    name: 'Cricket 24',
    blurb: 'Culmination of a decade of Cricket video game development, featuring teams from around the globe.',
    stack: ['C++', 'Game Development', 'Sports Simulation'],
    link: 'https://store.steampowered.com/app/2358260/Cricket_24/',
    language: 'C++',
    featured: true,
  },
  {
    name: 'AFL 23',
    blurb: 'The most realistic AFL game ever - Feel the atmosphere, chase your dreams, and make it your own.',
    stack: ['C++', 'Game Development', 'Sports Simulation'],
    link: 'https://store.steampowered.com/app/2337630/AFL_23/',
    language: 'C++',
    featured: true,
  },
  
  // Game Engines & Graphics
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
  },
  {
    name: 'PBR Renderer',
    blurb: 'OpenGL physically based rendering pipeline using up to 6 different textures per model for realistic lighting.',
    stack: ['OpenGL', 'PBR', 'Graphics', 'Lighting'],
    language: 'C++',
  },
  
  // Audio & Media
  {
    name: 'Fly',
    blurb: 'Modern audio player with real-time visualization, spatial controls, and advanced processing (OpenAL + ImGui UI).',
    stack: ['C++', 'OpenAL', 'ImGui', 'DSP'],
    repo: 'https://github.com/AlexMollard/Fly',
    language: 'C++',
    featured: true,
  },
  
  // Networking & Systems
  {
    name: 'EnetPlayGround',
    blurb: 'Networking sandbox using ENet for reliable UDP; client-server model, ImGui visualization, MySQL integration.',
    stack: ['C', 'ENet', 'Networking', 'ImGui', 'MySQL'],
    repo: 'https://github.com/AlexMollard/EnetPlayGround',
    language: 'C',
    featured: true,
  },
  
  // Graphics & Rendering Tools
  {
    name: 'RenderAlchemy',
    blurb: 'OpenGL HDR + color grading lab: CLUT based workflows, tone mapping experiments, and UI-driven grading pipeline.',
    stack: ['C', 'OpenGL', 'HDR', 'Color'],
    repo: 'https://github.com/AlexMollard/RenderAlchemy',
    language: 'C',
  },
  
  // Game Projects
  {
    name: 'Frozen Depths',
    blurb: 'Final project at AIE Melbourne featuring ice melting and creation using the cube marching algorithm.',
    stack: ['C++', 'Procedural Generation', 'Cube Marching'],
    language: 'C++',
  },
  {
    name: '2D Unnamed Game',
    blurb: '2D game built with OpenGL featuring collision detection, sprite rendering, text rendering, texture atlasing, and user input.',
    stack: ['OpenGL', '2D Graphics', 'Game Development'],
    language: 'C++',
  },
  {
    name: 'Temple of the Yokai',
    blurb: 'First big group project. Responsible for all UI and serialization of settings, exploring Unity UI systems and controller input.',
    stack: ['Unity', 'UI', 'Serialization', 'C#'],
    repo: 'https://github.com/MoltenMoustache/YokaiTemple',
    language: 'C#',
  },
  
  // Procedural Generation & Simulation
  {
    name: 'Hex Game',
    blurb: 'Procedural terrain generation using Perlin noise for height, rivers, humidity calculation, and realistic biome distribution.',
    stack: ['Procedural Generation', 'Perlin Noise', 'Terrain'],
    repo: 'https://github.com/AlexMollard/HexGridPractice',
    language: 'C++',
  },
  {
    name: 'Fluid Simulator',
    blurb: 'Physics simulation using cellular automata with falling sand mechanics, density cells, and flowing water.',
    stack: ['Physics', 'Cellular Automata', 'Simulation'],
    repo: 'https://github.com/AlexMollard/Fluid-Simulation',
    language: 'C++',
  },
  {
    name: 'Cellular Automata Noise Gen',
    blurb: 'Noise generation using rock-paper-scissors cellular automata variation, programmed with AIE bootstrap engine.',
    stack: ['Cellular Automata', 'Noise Generation', 'C++'],
    repo: 'https://github.com/AlexMollard/Noise-Gen-Cellular-Automata',
    language: 'C++',
  },
  {
    name: 'Wire World',
    blurb: 'Cellular automata implementation of Wire World ruleset, capable of creating complex machines and computers.',
    stack: ['Cellular Automata', 'Logic Simulation'],
    repo: 'https://github.com/AlexMollard/wireworld',
    language: 'C++',
  },
  
  // Educational & Documentation
  {
    name: 'CppOdyssey',
    blurb: 'Educational C++ resource hub: guides, tutorials, and advanced systems topics (Vulkan, engine patterns, tooling).',
    stack: ['C++', 'Documentation', 'Education', 'Vulkan'],
    repo: 'https://github.com/AlexMollard/CppOdyssey',
    language: 'HTML',
  },
  
  // Business Ventures
  {
    name: 'Woven Minds Studios',
    blurb: 'Game development studio in early stages, working on an ambitious game project with focus on innovation.',
    stack: ['Game Development', 'Business', 'Studio Management'],
    link: 'https://wovenminds.online/',
    language: 'Various',
  }
];

export const featured = projects.filter(p => p.featured);
