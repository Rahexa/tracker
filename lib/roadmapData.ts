import { Month, LearningItem, Day, Week } from './roadmapTypes';

// Helper to create learning items
function createItem(
  title: string,
  type: LearningItem['type'],
  searchKeyword?: string,
  count?: number
): LearningItem {
  return {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title,
    type,
    completed: false,
    searchKeyword,
    count,
    currentCount: 0,
  };
}

// Helper to create a day
function createDay(dayNumber: number, title: string, items: LearningItem[]): Day {
  return {
    id: `day-${dayNumber}`,
    dayNumber,
    title,
    items,
    completed: false,
  };
}

// Helper to create a week
function createWeek(weekNumber: number, title: string, days: Day[]): Week {
  return {
    id: `week-${weekNumber}`,
    weekNumber,
    title,
    days,
    completed: false,
  };
}

export const roadmapData: Month[] = [
  {
    id: 'month-1',
    monthNumber: 1,
    title: 'The Engineer\'s Foundation',
    goal: 'Master Web Architecture, Git, JavaScript Runtime, and Logic.',
    completed: false,
    weeks: [
      createWeek(1, 'Web Architecture, Git & JS Syntax', [
        createDay(1, 'Web & Git Setup', [
          createItem('HTTP vs HTTPS', 'topic'),
          createItem('DNS Resolution', 'topic'),
          createItem('Request/Response Cycle', 'topic'),
          createItem('Git Init/Commit/Push', 'topic'),
          createItem('how the web works dns http tcp ip', 'search', 'how the web works dns http tcp ip'),
          createItem('gitflow workflow tutorial 2026', 'search', 'gitflow workflow tutorial 2026'),
        ]),
        createDay(2, 'JS Variables & Loops', [
          createItem('let vs const vs var', 'topic'),
          createItem('Data Types', 'topic'),
          createItem('for loops vs map/forEach', 'topic'),
          createItem('javascript variables let const var explained', 'search', 'javascript variables let const var explained'),
          createItem('javascript loops vs map', 'search', 'javascript loops vs map'),
        ]),
        createDay(3, 'Functions & Objects', [
          createItem('Function Declarations vs Expressions', 'topic'),
          createItem('Object Destructuring', 'topic'),
          createItem('Spread Operator', 'topic'),
          createItem('javascript object destructuring tutorial', 'search', 'javascript object destructuring tutorial'),
          createItem('javascript spread operator uses', 'search', 'javascript spread operator uses'),
        ]),
        createDay(4, 'ES6+ Modern JS', [
          createItem('Arrow Functions', 'topic'),
          createItem('Template Literals', 'topic'),
          createItem('Modules (Import/Export)', 'topic'),
          createItem('javascript es6 features crash course', 'search', 'javascript es6 features crash course'),
          createItem('javascript modules import export', 'search', 'javascript modules import export'),
        ]),
        createDay(5, 'Async JavaScript', [
          createItem('Callbacks', 'topic'),
          createItem('Promises', 'topic'),
          createItem('Async/Await syntax', 'topic'),
          createItem('try/catch blocks', 'topic'),
          createItem('javascript async await fetch api tutorial', 'search', 'javascript async await fetch api tutorial'),
          createItem('javascript promises explained', 'search', 'javascript promises explained'),
        ]),
        createDay(6, 'Practice & Logic', [
          createItem('Solving basic array manipulation problems (Filter, Find, Reduce)', 'practice'),
          createItem('javascript map filter reduce exercises', 'search', 'javascript map filter reduce exercises'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(2, 'JavaScript Runtime (The Engine)', [
        createDay(1, 'V8 Engine & Call Stack', [
          createItem('Single Threaded nature', 'topic'),
          createItem('Call Stack', 'topic'),
          createItem('Memory Heap', 'topic'),
          createItem('javascript call stack visualizer', 'search', 'javascript call stack visualizer'),
          createItem('how v8 engine works', 'search', 'how v8 engine works'),
        ]),
        createDay(2, 'Event Loop & Queues', [
          createItem('Event Loop mechanics', 'topic'),
          createItem('Macro-tasks (setTimeout) vs Micro-tasks (Promises)', 'topic'),
          createItem('nodejs event loop visualization 2026', 'search', 'nodejs event loop visualization 2026'),
        ]),
        createDay(3, 'Blocking vs Non-Blocking', [
          createItem('I/O operations', 'topic'),
          createItem('Blocking the main thread', 'topic'),
          createItem('Concurrency', 'topic'),
          createItem('blocking vs non-blocking nodejs explained', 'search', 'blocking vs non-blocking nodejs explained'),
        ]),
        createDay(4, 'Node.js Modules', [
          createItem('CommonJS (require) vs ES Modules (import)', 'topic'),
          createItem('module.exports', 'topic'),
          createItem('nodejs require vs import explained', 'search', 'nodejs require vs import explained'),
        ]),
        createDay(5, 'HTTP & Status Codes', [
          createItem('Headers', 'topic'),
          createItem('Body', 'topic'),
          createItem('Status Codes (200, 201, 400, 401, 403, 404, 500)', 'topic'),
          createItem('http status codes explained', 'search', 'http status codes explained'),
          createItem('http headers crash course', 'search', 'http headers crash course'),
        ]),
        createDay(6, 'Deep Logic Practice', [
          createItem('Sliding Window pattern', 'practice'),
          createItem('Two Pointer technique', 'practice'),
          createItem('leetcode sliding window pattern javascript', 'search', 'leetcode sliding window pattern javascript'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(3, 'TypeScript (Strict Mode)', [
        createDay(1, 'TS Setup & Basic Types', [
          createItem('tsconfig.json setup', 'topic'),
          createItem('String/Number/Boolean', 'topic'),
          createItem('Arrays', 'topic'),
          createItem('any (and why to avoid it)', 'topic'),
          createItem('setup nodejs typescript nodemon', 'search', 'setup nodejs typescript nodemon'),
          createItem('typescript basic types', 'search', 'typescript basic types'),
        ]),
        createDay(2, 'Interfaces & Types', [
          createItem('Interface vs Type Alias', 'topic'),
          createItem('Optional Properties', 'topic'),
          createItem('Readonly', 'topic'),
          createItem('typescript interface vs type explained', 'search', 'typescript interface vs type explained'),
        ]),
        createDay(3, 'Generics & Utility Types', [
          createItem('Generic Functions <T>', 'topic'),
          createItem('Partial', 'topic'),
          createItem('Pick', 'topic'),
          createItem('Omit', 'topic'),
          createItem('typescript generics explained', 'search', 'typescript generics explained'),
          createItem('typescript utility types tutorial', 'search', 'typescript utility types tutorial'),
        ]),
        createDay(4, 'OOP in TypeScript', [
          createItem('Classes', 'topic'),
          createItem('Access Modifiers (public/private/protected)', 'topic'),
          createItem('Inheritance', 'topic'),
          createItem('object oriented programming typescript', 'search', 'object oriented programming typescript'),
        ]),
        createDay(5, 'Promise & Async TS', [
          createItem('Typing Promises', 'topic'),
          createItem('Async function return types', 'topic'),
          createItem('typescript async await types', 'search', 'typescript async await types'),
        ]),
        createDay(6, 'Mini Project (CLI)', [
          createItem('Building a small Command Line Interface tool with TS', 'project'),
          createItem('build cli tool nodejs typescript', 'search', 'build cli tool nodejs typescript'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(4, 'DSA for Backend', [
        createDay(1, 'Hash Maps', [
          createItem('Key-Value pairs', 'topic'),
          createItem('Frequency Counters', 'topic'),
          createItem('Map vs Object', 'topic'),
          createItem('hash map data structure javascript', 'search', 'hash map data structure javascript'),
        ]),
        createDay(2, 'Stacks & Queues', [
          createItem('LIFO vs FIFO', 'topic'),
          createItem('implementing them in JS', 'topic'),
          createItem('stack vs queue data structure javascript', 'search', 'stack vs queue data structure javascript'),
        ]),
        createDay(3, 'Recursion', [
          createItem('Base case', 'topic'),
          createItem('recursive step', 'topic'),
          createItem('factorial/fibonacci examples', 'topic'),
          createItem('recursion javascript tutorial', 'search', 'recursion javascript tutorial'),
        ]),
        createDay(4, 'Time Complexity', [
          createItem('Big O Notation', 'topic'),
          createItem('O(1) vs O(n) vs O(n^2)', 'topic'),
          createItem('big o notation explained javascript', 'search', 'big o notation explained javascript'),
        ]),
        createDay(5, 'Logic Practice (Strings)', [
          createItem('String reversal', 'practice'),
          createItem('Palindromes', 'practice'),
          createItem('Anagrams', 'practice'),
        ]),
        createDay(6, 'Logic Practice (Arrays)', [
          createItem('Sorting', 'practice'),
          createItem('Searching', 'practice'),
          createItem('Duplicates', 'practice'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
    ],
  },
  {
    id: 'month-2',
    monthNumber: 2,
    title: 'Backend Basics',
    goal: 'Build APIs with Node.js, Express, MongoDB, and integrate File Uploads.',
    completed: false,
    weeks: [
      createWeek(1, 'Node.js, Express & Debugging', [
        createDay(1, 'File System', [
          createItem('Reading/Writing files (fs module)', 'topic'),
          createItem('path manipulation', 'topic'),
          createItem('nodejs fs module tutorial', 'search', 'nodejs fs module tutorial'),
        ]),
        createDay(2, 'Express Server Setup', [
          createItem('Creating a server', 'topic'),
          createItem('Request/Response objects', 'topic'),
          createItem('basic routing', 'topic'),
          createItem('express js crash course', 'search', 'express js crash course'),
        ]),
        createDay(3, 'Middleware', [
          createItem('Application-level vs Router-level middleware', 'topic'),
          createItem('next()', 'topic'),
          createItem('express middleware explained', 'search', 'express middleware explained'),
        ]),
        createDay(4, 'Error Handling', [
          createItem('Try/Catch in routes', 'topic'),
          createItem('Global Error Handler middleware', 'topic'),
          createItem('express global error handler', 'search', 'express global error handler'),
        ]),
        createDay(5, 'VS Code Debugging', [
          createItem('Breakpoints', 'topic'),
          createItem('Watch window', 'topic'),
          createItem('Call Stack navigation', 'topic'),
          createItem('debugging nodejs in vscode', 'search', 'debugging nodejs in vscode'),
        ]),
        createDay(6, 'Mini Project (API)', [
          createItem('Building a CRUD API with in-memory data (no DB yet)', 'project'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(2, 'MongoDB & Mongoose', [
        createDay(1, 'MongoDB Compass & Atlas', [
          createItem('Cloud Database setup', 'topic'),
          createItem('Connection strings', 'topic'),
          createItem('Collections', 'topic'),
          createItem('mongodb atlas tutorial', 'search', 'mongodb atlas tutorial'),
        ]),
        createDay(2, 'Mongoose Schemas', [
          createItem('Defining Models', 'topic'),
          createItem('Data Types', 'topic'),
          createItem('Validation', 'topic'),
          createItem('Required fields', 'topic'),
          createItem('mongoose schema validation', 'search', 'mongoose schema validation'),
        ]),
        createDay(3, 'Advanced Queries', [
          createItem('Filtering ($gt, $lt)', 'topic'),
          createItem('Logic ($or, $and)', 'topic'),
          createItem('Sorting', 'topic'),
          createItem('Limiting', 'topic'),
          createItem('mongodb advanced queries tutorial', 'search', 'mongodb advanced queries tutorial'),
        ]),
        createDay(4, 'Aggregation Framework', [
          createItem('Pipelines', 'topic'),
          createItem('$match', 'topic'),
          createItem('$group', 'topic'),
          createItem('$lookup (Joins)', 'topic'),
          createItem('mongodb aggregation pipeline tutorial', 'search', 'mongodb aggregation pipeline tutorial'),
        ]),
        createDay(5, 'File Uploads', [
          createItem('multipart/form-data', 'topic'),
          createItem('Multer library', 'topic'),
          createItem('saving files to disk', 'topic'),
          createItem('multer nodejs file upload tutorial', 'search', 'multer nodejs file upload tutorial'),
        ]),
        createDay(6, 'Project Integration', [
          createItem('Connecting Express API to MongoDB', 'project'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(3, 'Auth & Security (JWT)', [
        createDay(1, 'Hashing', [
          createItem('Bcrypt', 'topic'),
          createItem('Salting', 'topic'),
          createItem('Hash comparison', 'topic'),
          createItem('bcrypt password hashing nodejs', 'search', 'bcrypt password hashing nodejs'),
        ]),
        createDay(2, 'JWT Basics', [
          createItem('Signing tokens', 'topic'),
          createItem('verify signature', 'topic'),
          createItem('decoding payloads', 'topic'),
          createItem('jwt authentication nodejs explained', 'search', 'jwt authentication nodejs explained'),
        ]),
        createDay(3, 'Auth Middleware', [
          createItem('Protecting routes', 'topic'),
          createItem('extracting tokens from Headers', 'topic'),
          createItem('express js route protection jwt', 'search', 'express js route protection jwt'),
        ]),
        createDay(4, 'Refresh Tokens', [
          createItem('Short-lived access tokens vs Long-lived refresh tokens', 'topic'),
          createItem('refresh token rotation nodejs', 'search', 'refresh token rotation nodejs'),
        ]),
        createDay(5, 'RBAC (Roles)', [
          createItem('Admin vs User permissions', 'topic'),
          createItem('checking roles in middleware', 'topic'),
          createItem('rbac nodejs express tutorial', 'search', 'rbac nodejs express tutorial'),
        ]),
        createDay(6, 'Auth Project', [
          createItem('Building a Login/Register system with Roles', 'project'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(4, 'Reality Check (Assignments)', [
        createDay(1, 'Logic Assignment (Inventory)', [
          createItem('Stock management logic', 'assignment'),
          createItem('Transaction concepts (mock)', 'assignment'),
          createItem('inventory management system database design', 'search', 'inventory management system database design'),
        ]),
        createDay(2, 'Logic Assignment (Inventory)', [
          createItem('Stock management logic', 'assignment'),
          createItem('Transaction concepts (mock)', 'assignment'),
        ]),
        createDay(3, 'Security Assignment (Dashboard)', [
          createItem('Securing Admin routes', 'assignment'),
          createItem('Helmet.js for headers', 'assignment'),
          createItem('securing express apps with helmet', 'search', 'securing express apps with helmet'),
        ]),
        createDay(4, 'Security Assignment (Dashboard)', [
          createItem('Securing Admin routes', 'assignment'),
          createItem('Helmet.js for headers', 'assignment'),
        ]),
        createDay(5, 'Refactor to TS', [
          createItem('Converting JS Express app to strict TypeScript', 'project'),
        ]),
        createDay(6, 'Catch up / Buffer', []),
        createDay(7, 'Catch up / Buffer', []),
      ]),
    ],
  },
  {
    id: 'month-3',
    monthNumber: 3,
    title: 'RDBMS & Architecture',
    goal: 'Master PostgreSQL, Prisma, and Next.js Backend.',
    completed: false,
    weeks: [
      createWeek(1, 'PostgreSQL & SQL', [
        createDay(1, 'Relational Design', [
          createItem('Tables', 'topic'),
          createItem('Rows', 'topic'),
          createItem('Columns', 'topic'),
          createItem('Primary Keys', 'topic'),
          createItem('Foreign Keys', 'topic'),
          createItem('er diagram tutorial for beginners', 'search', 'er diagram tutorial for beginners'),
        ]),
        createDay(2, 'Normalization', [
          createItem('1NF', 'topic'),
          createItem('2NF', 'topic'),
          createItem('3NF', 'topic'),
          createItem('reducing redundancy', 'topic'),
          createItem('database normalization 1nf 2nf 3nf', 'search', 'database normalization 1nf 2nf 3nf'),
        ]),
        createDay(3, 'Basic SQL', [
          createItem('SELECT statements', 'topic'),
          createItem('INSERT statements', 'topic'),
          createItem('UPDATE statements', 'topic'),
          createItem('DELETE statements', 'topic'),
          createItem('postgresql sql queries tutorial', 'search', 'postgresql sql queries tutorial'),
        ]),
        createDay(4, 'Joins', [
          createItem('INNER JOIN', 'topic'),
          createItem('LEFT JOIN', 'topic'),
          createItem('RIGHT JOIN', 'topic'),
          createItem('postgresql joins visual explanation', 'search', 'postgresql joins visual explanation'),
        ]),
        createDay(5, 'Transactions', [
          createItem('ACID properties', 'topic'),
          createItem('BEGIN', 'topic'),
          createItem('COMMIT', 'topic'),
          createItem('ROLLBACK', 'topic'),
          createItem('acid transactions sql explained', 'search', 'acid transactions sql explained'),
        ]),
        createDay(6, 'DB Setup', [
          createItem('Setting up Postgres locally or on Neon/Supabase', 'project'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(2, 'Prisma ORM', [
        createDay(1, 'Prisma Model', [
          createItem('schema.prisma syntax', 'topic'),
          createItem('defining models', 'topic'),
          createItem('prisma orm crash course', 'search', 'prisma orm crash course'),
        ]),
        createDay(2, 'Migrations', [
          createItem('Creating migrations', 'topic'),
          createItem('applying to DB', 'topic'),
          createItem('version control', 'topic'),
          createItem('prisma migrate explained', 'search', 'prisma migrate explained'),
        ]),
        createDay(3, 'Relations', [
          createItem('One-to-One', 'topic'),
          createItem('One-to-Many', 'topic'),
          createItem('Many-to-Many syntax', 'topic'),
          createItem('prisma schema relations', 'search', 'prisma schema relations'),
        ]),
        createDay(4, 'CRUD with Prisma', [
          createItem('findMany', 'topic'),
          createItem('create', 'topic'),
          createItem('update', 'topic'),
          createItem('delete', 'topic'),
          createItem('prisma client crud operations', 'search', 'prisma client crud operations'),
        ]),
        createDay(5, 'Filtering & Sorting', [
          createItem('Where clauses', 'topic'),
          createItem('Ordering', 'topic'),
          createItem('Pagination', 'topic'),
          createItem('prisma filtering and sorting', 'search', 'prisma filtering and sorting'),
        ]),
        createDay(6, 'Project Practice', [
          createItem('Building a University Schema (Students/Courses)', 'project'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(3, 'Next.js 15 Backend', [
        createDay(1, 'App Router', [
          createItem('Folder structure', 'topic'),
          createItem('page.tsx', 'topic'),
          createItem('layout.tsx', 'topic'),
          createItem('nextjs 15 app router crash course', 'search', 'nextjs 15 app router crash course'),
        ]),
        createDay(2, 'Server Components', [
          createItem('Fetching data on the server', 'topic'),
          createItem('async components', 'topic'),
          createItem('react server components explained', 'search', 'react server components explained'),
        ]),
        createDay(3, 'Server Actions', [
          createItem('Form submissions without API routes', 'topic'),
          createItem('use server', 'topic'),
          createItem('nextjs server actions tutorial', 'search', 'nextjs server actions tutorial'),
        ]),
        createDay(4, 'Route Handlers', [
          createItem('Creating route.ts (GET/POST) for external APIs', 'topic'),
          createItem('nextjs api routes tutorial', 'search', 'nextjs api routes tutorial'),
        ]),
        createDay(5, 'Data Fetching', [
          createItem('Caching', 'topic'),
          createItem('Revalidating data', 'topic'),
          createItem('fetch API extensions', 'topic'),
          createItem('nextjs data fetching server side', 'search', 'nextjs data fetching server side'),
        ]),
        createDay(6, 'Blog Project', [
          createItem('Building a Blog with Next.js + Prisma', 'project'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(4, 'Architecture & Quality', [
        createDay(1, 'Service Pattern', [
          createItem('Separating Business Logic from Controllers', 'topic'),
          createItem('nodejs service controller pattern', 'search', 'nodejs service controller pattern'),
        ]),
        createDay(2, 'Zod Validation', [
          createItem('Schema validation for inputs/environment variables', 'topic'),
          createItem('zod validation tutorial', 'search', 'zod validation tutorial'),
        ]),
        createDay(3, 'Error Handling', [
          createItem('error.tsx in Next.js', 'topic'),
          createItem('Custom Error classes', 'topic'),
          createItem('nextjs error handling best practices', 'search', 'nextjs error handling best practices'),
        ]),
        createDay(4, 'Linting', [
          createItem('ESLint', 'topic'),
          createItem('Prettier setup', 'topic'),
          createItem('Husky hooks', 'topic'),
          createItem('eslint prettier setup nextjs', 'search', 'eslint prettier setup nextjs'),
        ]),
        createDay(5, 'Refactoring', [
          createItem('Cleaning up code', 'topic'),
          createItem('applying patterns', 'topic'),
        ]),
        createDay(6, 'Refactoring', [
          createItem('Cleaning up code', 'topic'),
          createItem('applying patterns', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
    ],
  },
  {
    id: 'month-4',
    monthNumber: 4,
    title: 'Capstone 1 - DeshDoor',
    goal: 'Build a Service Marketplace (Next.js, Postgres, Prisma, Cloudinary).',
    completed: false,
    weeks: [
      createWeek(1, 'Auth & Setup', [
        createDay(1, 'Next.js Setup', [
          createItem('Next.js Setup', 'topic'),
          createItem('ShadcnUI', 'topic'),
          createItem('NextAuth v5 Configuration (Providers, Callbacks)', 'topic'),
          createItem('next-auth v5 role based access control', 'search', 'next-auth v5 role based access control'),
        ]),
        createDay(2, 'Next.js Setup', [
          createItem('Next.js Setup', 'topic'),
          createItem('ShadcnUI', 'topic'),
          createItem('NextAuth v5 Configuration (Providers, Callbacks)', 'topic'),
        ]),
        createDay(3, 'Next.js Setup', [
          createItem('Next.js Setup', 'topic'),
          createItem('ShadcnUI', 'topic'),
          createItem('NextAuth v5 Configuration (Providers, Callbacks)', 'topic'),
        ]),
        createDay(4, 'Next.js Setup', [
          createItem('Next.js Setup', 'topic'),
          createItem('ShadcnUI', 'topic'),
          createItem('NextAuth v5 Configuration (Providers, Callbacks)', 'topic'),
        ]),
        createDay(5, 'Next.js Setup', [
          createItem('Next.js Setup', 'topic'),
          createItem('ShadcnUI', 'topic'),
          createItem('NextAuth v5 Configuration (Providers, Callbacks)', 'topic'),
        ]),
        createDay(6, 'Next.js Setup', [
          createItem('Next.js Setup', 'topic'),
          createItem('ShadcnUI', 'topic'),
          createItem('NextAuth v5 Configuration (Providers, Callbacks)', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(2, 'Services & Images', [
        createDay(1, 'DB Schema & Images', [
          createItem('DB Schema for Services', 'topic'),
          createItem('Image Upload to Cloudinary', 'topic'),
          createItem('nextjs cloudinary upload widget tutorial', 'search', 'nextjs cloudinary upload widget tutorial'),
        ]),
        createDay(2, 'DB Schema & Images', [
          createItem('DB Schema for Services', 'topic'),
          createItem('Image Upload to Cloudinary', 'topic'),
        ]),
        createDay(3, 'DB Schema & Images', [
          createItem('DB Schema for Services', 'topic'),
          createItem('Image Upload to Cloudinary', 'topic'),
        ]),
        createDay(4, 'DB Schema & Images', [
          createItem('DB Schema for Services', 'topic'),
          createItem('Image Upload to Cloudinary', 'topic'),
        ]),
        createDay(5, 'DB Schema & Images', [
          createItem('DB Schema for Services', 'topic'),
          createItem('Image Upload to Cloudinary', 'topic'),
        ]),
        createDay(6, 'DB Schema & Images', [
          createItem('DB Schema for Services', 'topic'),
          createItem('Image Upload to Cloudinary', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(3, 'Booking Logic', [
        createDay(1, 'Booking System', [
          createItem('Relational Schema (User-Booking-Service)', 'topic'),
          createItem('Transactions', 'topic'),
          createItem('Vendor Dashboard', 'topic'),
          createItem('prisma transaction booking system', 'search', 'prisma transaction booking system'),
        ]),
        createDay(2, 'Booking System', [
          createItem('Relational Schema (User-Booking-Service)', 'topic'),
          createItem('Transactions', 'topic'),
          createItem('Vendor Dashboard', 'topic'),
        ]),
        createDay(3, 'Booking System', [
          createItem('Relational Schema (User-Booking-Service)', 'topic'),
          createItem('Transactions', 'topic'),
          createItem('Vendor Dashboard', 'topic'),
        ]),
        createDay(4, 'Booking System', [
          createItem('Relational Schema (User-Booking-Service)', 'topic'),
          createItem('Transactions', 'topic'),
          createItem('Vendor Dashboard', 'topic'),
        ]),
        createDay(5, 'Booking System', [
          createItem('Relational Schema (User-Booking-Service)', 'topic'),
          createItem('Transactions', 'topic'),
          createItem('Vendor Dashboard', 'topic'),
        ]),
        createDay(6, 'Booking System', [
          createItem('Relational Schema (User-Booking-Service)', 'topic'),
          createItem('Transactions', 'topic'),
          createItem('Vendor Dashboard', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(4, 'Deploy & Docs', [
        createDay(1, 'Deployment', [
          createItem('Deploying to Vercel + Neon', 'project'),
          createItem('writing README.md', 'project'),
          createItem('deploy nextjs prisma vercel', 'search', 'deploy nextjs prisma vercel'),
        ]),
        createDay(2, 'Deployment', [
          createItem('Deploying to Vercel + Neon', 'project'),
          createItem('writing README.md', 'project'),
        ]),
        createDay(3, 'Deployment', [
          createItem('Deploying to Vercel + Neon', 'project'),
          createItem('writing README.md', 'project'),
        ]),
        createDay(4, 'Deployment', [
          createItem('Deploying to Vercel + Neon', 'project'),
          createItem('writing README.md', 'project'),
        ]),
        createDay(5, 'Deployment', [
          createItem('Deploying to Vercel + Neon', 'project'),
          createItem('writing README.md', 'project'),
        ]),
        createDay(6, 'Deployment', [
          createItem('Deploying to Vercel + Neon', 'project'),
          createItem('writing README.md', 'project'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
    ],
  },
  {
    id: 'month-5',
    monthNumber: 5,
    title: 'Capstone 2 - RideShare',
    goal: 'Microservices, Real-time, Redis',
    completed: false,
    weeks: [
      createWeek(1, 'Redis & Caching', [
        createDay(1, 'Redis Setup', [
          createItem('Redis Setup', 'topic'),
          createItem('SET/GET', 'topic'),
          createItem('Expiration', 'topic'),
          createItem('Caching API responses', 'topic'),
          createItem('redis caching strategy nodejs', 'search', 'redis caching strategy nodejs'),
        ]),
        createDay(2, 'Redis Setup', [
          createItem('Redis Setup', 'topic'),
          createItem('SET/GET', 'topic'),
          createItem('Expiration', 'topic'),
          createItem('Caching API responses', 'topic'),
        ]),
        createDay(3, 'Redis Setup', [
          createItem('Redis Setup', 'topic'),
          createItem('SET/GET', 'topic'),
          createItem('Expiration', 'topic'),
          createItem('Caching API responses', 'topic'),
        ]),
        createDay(4, 'Redis Setup', [
          createItem('Redis Setup', 'topic'),
          createItem('SET/GET', 'topic'),
          createItem('Expiration', 'topic'),
          createItem('Caching API responses', 'topic'),
        ]),
        createDay(5, 'Redis Setup', [
          createItem('Redis Setup', 'topic'),
          createItem('SET/GET', 'topic'),
          createItem('Expiration', 'topic'),
          createItem('Caching API responses', 'topic'),
        ]),
        createDay(6, 'Redis Setup', [
          createItem('Redis Setup', 'topic'),
          createItem('SET/GET', 'topic'),
          createItem('Expiration', 'topic'),
          createItem('Caching API responses', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(2, 'Real-time Tracking', [
        createDay(1, 'Socket.io', [
          createItem('Socket.io basics', 'topic'),
          createItem('emitting events', 'topic'),
          createItem('listening for location updates', 'topic'),
          createItem('socket.io react nodejs tutorial real time map', 'search', 'socket.io react nodejs tutorial real time map'),
        ]),
        createDay(2, 'Socket.io', [
          createItem('Socket.io basics', 'topic'),
          createItem('emitting events', 'topic'),
          createItem('listening for location updates', 'topic'),
        ]),
        createDay(3, 'Socket.io', [
          createItem('Socket.io basics', 'topic'),
          createItem('emitting events', 'topic'),
          createItem('listening for location updates', 'topic'),
        ]),
        createDay(4, 'Socket.io', [
          createItem('Socket.io basics', 'topic'),
          createItem('emitting events', 'topic'),
          createItem('listening for location updates', 'topic'),
        ]),
        createDay(5, 'Socket.io', [
          createItem('Socket.io basics', 'topic'),
          createItem('emitting events', 'topic'),
          createItem('listening for location updates', 'topic'),
        ]),
        createDay(6, 'Socket.io', [
          createItem('Socket.io basics', 'topic'),
          createItem('emitting events', 'topic'),
          createItem('listening for location updates', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(3, 'Payments & Testing', [
        createDay(1, 'Payments & Testing', [
          createItem('SSLCommerz/Stripe Integration', 'topic'),
          createItem('Jest Unit Tests', 'topic'),
          createItem('sslcommerz nodejs integration tutorial', 'search', 'sslcommerz nodejs integration tutorial'),
          createItem('jest unit testing nodejs', 'search', 'jest unit testing nodejs'),
        ]),
        createDay(2, 'Payments & Testing', [
          createItem('SSLCommerz/Stripe Integration', 'topic'),
          createItem('Jest Unit Tests', 'topic'),
        ]),
        createDay(3, 'Payments & Testing', [
          createItem('SSLCommerz/Stripe Integration', 'topic'),
          createItem('Jest Unit Tests', 'topic'),
        ]),
        createDay(4, 'Payments & Testing', [
          createItem('SSLCommerz/Stripe Integration', 'topic'),
          createItem('Jest Unit Tests', 'topic'),
        ]),
        createDay(5, 'Payments & Testing', [
          createItem('SSLCommerz/Stripe Integration', 'topic'),
          createItem('Jest Unit Tests', 'topic'),
        ]),
        createDay(6, 'Payments & Testing', [
          createItem('SSLCommerz/Stripe Integration', 'topic'),
          createItem('Jest Unit Tests', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(4, 'Docker', [
        createDay(1, 'Docker Setup', [
          createItem('Dockerfile creation', 'topic'),
          createItem('Docker Compose services (App+Redis+DB)', 'topic'),
          createItem('docker compose nodejs redis postgres tutorial', 'search', 'docker compose nodejs redis postgres tutorial'),
        ]),
        createDay(2, 'Docker Setup', [
          createItem('Dockerfile creation', 'topic'),
          createItem('Docker Compose services (App+Redis+DB)', 'topic'),
        ]),
        createDay(3, 'Docker Setup', [
          createItem('Dockerfile creation', 'topic'),
          createItem('Docker Compose services (App+Redis+DB)', 'topic'),
        ]),
        createDay(4, 'Docker Setup', [
          createItem('Dockerfile creation', 'topic'),
          createItem('Docker Compose services (App+Redis+DB)', 'topic'),
        ]),
        createDay(5, 'Docker Setup', [
          createItem('Dockerfile creation', 'topic'),
          createItem('Docker Compose services (App+Redis+DB)', 'topic'),
        ]),
        createDay(6, 'Docker Setup', [
          createItem('Dockerfile creation', 'topic'),
          createItem('Docker Compose services (App+Redis+DB)', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
    ],
  },
  {
    id: 'month-6',
    monthNumber: 6,
    title: 'DevOps & Job Hunt',
    goal: 'Professional Polish and Getting Hired.',
    completed: false,
    weeks: [
      createWeek(1, 'Linux & NGINX', [
        createDay(1, 'Linux & NGINX', [
          createItem('Linux CLI (ssh, grep)', 'topic'),
          createItem('NGINX Configuration (Reverse Proxy)', 'topic'),
          createItem('nginx reverse proxy nodejs tutorial', 'search', 'nginx reverse proxy nodejs tutorial'),
          createItem('linux basics for developers', 'search', 'linux basics for developers'),
        ]),
        createDay(2, 'Linux & NGINX', [
          createItem('Linux CLI (ssh, grep)', 'topic'),
          createItem('NGINX Configuration (Reverse Proxy)', 'topic'),
        ]),
        createDay(3, 'Linux & NGINX', [
          createItem('Linux CLI (ssh, grep)', 'topic'),
          createItem('NGINX Configuration (Reverse Proxy)', 'topic'),
        ]),
        createDay(4, 'Linux & NGINX', [
          createItem('Linux CLI (ssh, grep)', 'topic'),
          createItem('NGINX Configuration (Reverse Proxy)', 'topic'),
        ]),
        createDay(5, 'Linux & NGINX', [
          createItem('Linux CLI (ssh, grep)', 'topic'),
          createItem('NGINX Configuration (Reverse Proxy)', 'topic'),
        ]),
        createDay(6, 'Linux & NGINX', [
          createItem('Linux CLI (ssh, grep)', 'topic'),
          createItem('NGINX Configuration (Reverse Proxy)', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(2, 'Documentation', [
        createDay(1, 'Documentation', [
          createItem('Swagger/OpenAPI setup', 'topic'),
          createItem('System Architecture Diagrams', 'topic'),
          createItem('swagger nodejs express tutorial', 'search', 'swagger nodejs express tutorial'),
        ]),
        createDay(2, 'Documentation', [
          createItem('Swagger/OpenAPI setup', 'topic'),
          createItem('System Architecture Diagrams', 'topic'),
        ]),
        createDay(3, 'Documentation', [
          createItem('Swagger/OpenAPI setup', 'topic'),
          createItem('System Architecture Diagrams', 'topic'),
        ]),
        createDay(4, 'Documentation', [
          createItem('Swagger/OpenAPI setup', 'topic'),
          createItem('System Architecture Diagrams', 'topic'),
        ]),
        createDay(5, 'Documentation', [
          createItem('Swagger/OpenAPI setup', 'topic'),
          createItem('System Architecture Diagrams', 'topic'),
        ]),
        createDay(6, 'Documentation', [
          createItem('Swagger/OpenAPI setup', 'topic'),
          createItem('System Architecture Diagrams', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(3, 'System Design', [
        createDay(1, 'System Design', [
          createItem('Vertical/Horizontal Scaling', 'topic'),
          createItem('Load Balancers', 'topic'),
          createItem('CAP Theorem', 'topic'),
          createItem('system design primer for beginners', 'search', 'system design primer for beginners'),
        ]),
        createDay(2, 'System Design', [
          createItem('Vertical/Horizontal Scaling', 'topic'),
          createItem('Load Balancers', 'topic'),
          createItem('CAP Theorem', 'topic'),
        ]),
        createDay(3, 'System Design', [
          createItem('Vertical/Horizontal Scaling', 'topic'),
          createItem('Load Balancers', 'topic'),
          createItem('CAP Theorem', 'topic'),
        ]),
        createDay(4, 'System Design', [
          createItem('Vertical/Horizontal Scaling', 'topic'),
          createItem('Load Balancers', 'topic'),
          createItem('CAP Theorem', 'topic'),
        ]),
        createDay(5, 'System Design', [
          createItem('Vertical/Horizontal Scaling', 'topic'),
          createItem('Load Balancers', 'topic'),
          createItem('CAP Theorem', 'topic'),
        ]),
        createDay(6, 'System Design', [
          createItem('Vertical/Horizontal Scaling', 'topic'),
          createItem('Load Balancers', 'topic'),
          createItem('CAP Theorem', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
      createWeek(4, 'Job Hunt', [
        createDay(1, 'Job Hunt', [
          createItem('Resume Optimization', 'topic'),
          createItem('LinkedIn Outreach', 'topic'),
          createItem('Applications', 'topic'),
          createItem('backend developer resume tips', 'search', 'backend developer resume tips'),
        ]),
        createDay(2, 'Job Hunt', [
          createItem('Resume Optimization', 'topic'),
          createItem('LinkedIn Outreach', 'topic'),
          createItem('Applications', 'topic'),
        ]),
        createDay(3, 'Job Hunt', [
          createItem('Resume Optimization', 'topic'),
          createItem('LinkedIn Outreach', 'topic'),
          createItem('Applications', 'topic'),
        ]),
        createDay(4, 'Job Hunt', [
          createItem('Resume Optimization', 'topic'),
          createItem('LinkedIn Outreach', 'topic'),
          createItem('Applications', 'topic'),
        ]),
        createDay(5, 'Job Hunt', [
          createItem('Resume Optimization', 'topic'),
          createItem('LinkedIn Outreach', 'topic'),
          createItem('Applications', 'topic'),
        ]),
        createDay(6, 'Job Hunt', [
          createItem('Resume Optimization', 'topic'),
          createItem('LinkedIn Outreach', 'topic'),
          createItem('Applications', 'topic'),
        ]),
        createDay(7, 'Review & Rest', []),
      ]),
    ],
  },
];
