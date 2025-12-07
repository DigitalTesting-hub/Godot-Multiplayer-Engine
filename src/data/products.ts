export interface Addon {
  id: string
  name: string
  description: string
  price: number
  image: string
  features: string[]
  videoId?: string
  category: string
}

export interface Course {
  id: string
  name: string
  description: string
  price: number
  image: string
  lessons: number
  duration: string
  level: string
}

export interface Script {
  id: string
  name: string
  description: string
  price: number
  category: string
}

export const addons: Addon[] = [
  {
    id: 'multiplayer-framework',
    name: 'Complete Multiplayer Framework',
    description: 'Full multiplayer system with lobby, matchmaking, player sync, and more.',
    price: 499,
    image: '/addon-multiplayer.jpg',
    features: [
      'Lobby system',
      'Player synchronization',
      'Matchmaking',
      'Chat system',
      'RPC helpers',
      'Network interpolation'
    ],
    category: 'Networking'
  },
  {
    id: 'weapon-system',
    name: 'Complete Weapon System',
    description: 'Modular weapon system with shooting, reloading, and damage calculation.',
    price: 299,
    image: '/addon-weapons.jpg',
    features: [
      'Multiple weapon types',
      'Ammo system',
      'Damage calculation',
      'VFX & SFX included',
      'Network synced',
      'Easy customization'
    ],
    category: 'Combat'
  },
  {
    id: 'ai-enemies',
    name: 'AI Enemy System',
    description: 'Smart AI enemies with pathfinding, combat, and patrol behaviors.',
    price: 349,
    image: '/addon-ai.jpg',
    features: [
      'Pathfinding (A*)',
      'Combat AI',
      'Patrol system',
      'Sight & hearing',
      'Squad behavior',
      'Easy to extend'
    ],
    category: 'AI'
  },
  {
    id: 'vehicle-sync',
    name: 'Vehicle Sync System',
    description: 'Multiplayer vehicle system with passenger sync and physics.',
    price: 399,
    image: '/addon-vehicle.jpg',
    features: [
      'Vehicle physics',
      'Passenger sync',
      'Multiple vehicle types',
      'Enter/exit system',
      'Damage model',
      'Network optimized'
    ],
    category: 'Networking'
  },
  {
    id: 'battle-royale',
    name: 'Battle Royale Kit',
    description: 'Complete BR system with shrinking zone, loot, and 100 player support.',
    price: 499,
    image: '/addon-br.jpg',
    features: [
      'Shrinking zone',
      'Loot system',
      'Inventory UI',
      'Kill feed',
      '100 player optimized',
      'Leaderboard'
    ],
    category: 'Game Mode'
  },
  {
    id: 'inventory-system',
    name: 'Inventory System',
    description: 'Drag-and-drop inventory with equipment slots and crafting.',
    price: 249,
    image: '/addon-inventory.jpg',
    features: [
      'Grid inventory',
      'Equipment slots',
      'Drag & drop',
      'Item stacking',
      'Crafting system',
      'Save/Load support'
    ],
    category: 'UI'
  }
]

export const courses: Course[] = [
  {
    id: 'multiplayer-basics',
    name: 'Godot Multiplayer Basics',
    description: 'Learn the fundamentals of multiplayer game development in Godot 4.',
    price: 299,
    image: '/course-multiplayer.jpg',
    lessons: 15,
    duration: '3 hours',
    level: 'Beginner'
  },
  {
    id: 'ai-systems',
    name: 'AI Systems in Godot',
    description: 'Build smart AI enemies with pathfinding and behavior trees.',
    price: 349,
    image: '/course-ai.jpg',
    lessons: 20,
    duration: '4 hours',
    level: 'Intermediate'
  },
  {
    id: 'inventory-course',
    name: 'Inventory Systems',
    description: 'Create professional inventory and item systems from scratch.',
    price: 249,
    image: '/course-inventory.jpg',
    lessons: 12,
    duration: '2.5 hours',
    level: 'Beginner'
  },
  {
    id: 'weapon-course',
    name: 'Weapon Systems',
    description: 'Build modular weapon systems with shooting mechanics.',
    price: 299,
    image: '/course-weapons.jpg',
    lessons: 18,
    duration: '3.5 hours',
    level: 'Intermediate'
  },
  {
    id: 'character-movement',
    name: 'Character Movement',
    description: 'Master character controllers for FPS, TPS, and platformers.',
    price: 199,
    image: '/course-movement.jpg',
    lessons: 10,
    duration: '2 hours',
    level: 'Beginner'
  },
  {
    id: 'android-export',
    name: 'Export to Android',
    description: 'Complete guide to exporting and publishing Godot games on Android.',
    price: 149,
    image: '/course-android.jpg',
    lessons: 8,
    duration: '1.5 hours',
    level: 'Beginner'
  }
]

export const scripts: Script[] = [
  { id: 'weapon-script', name: 'Weapon System Script', description: 'Modular weapon handling with ammo and reload', price: 99, category: 'Combat' },
  { id: 'ai-script', name: 'AI System Script', description: 'Basic AI with pathfinding and states', price: 99, category: 'AI' },
  { id: 'inventory-script', name: 'Inventory System Script', description: 'Grid-based inventory logic', price: 79, category: 'UI' },
  { id: 'networking-rpc', name: 'Networking RPC Helpers', description: 'Simplified RPC wrapper functions', price: 49, category: 'Networking' },
  { id: 'vehicle-sync-script', name: 'Vehicle Sync Script', description: 'Basic vehicle synchronization', price: 149, category: 'Networking' },
  { id: 'supabase-auth', name: 'Supabase Auth Script', description: 'Ready-to-use Supabase authentication', price: 99, category: 'Backend' },
  { id: 'character-selection', name: 'Character Selection Script', description: 'Lobby character selection system', price: 79, category: 'UI' },
  { id: 'shrinking-zone', name: 'Shrinking Zone Script', description: 'Battle royale zone system', price: 99, category: 'Game Mode' },
  { id: 'throwables', name: 'Throwables Script', description: 'Grenades and throwable items', price: 79, category: 'Combat' }
]

export const customScripts: Script[] = [
  { id: 'full-multiplayer', name: 'Full Multiplayer Framework', description: 'Complete customized multiplayer solution', price: 499, category: 'Networking' },
  { id: 'complete-weapon', name: 'Complete Weapon System', description: 'Fully customized weapon system', price: 399, category: 'Combat' },
  { id: 'complete-ai', name: 'Complete AI Pack', description: 'Custom AI behaviors and systems', price: 449, category: 'AI' },
  { id: 'car-system', name: 'Complete Multiplayer Car System', description: 'Full vehicle multiplayer with customization', price: 449, category: 'Networking' },
  { id: 'supabase-login', name: 'Supabase Login System', description: 'Complete auth with profiles and leaderboards', price: 349, category: 'Backend' }
]
