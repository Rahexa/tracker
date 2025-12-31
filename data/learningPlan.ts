export interface Task {
  id: string;
  text: string;
  completed: boolean;
  youtubeLink?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  youtubeLinks?: string[];
  tasks: Task[];
}

export interface Week {
  id: string;
  weekNumber: number;
  phase: string;
  topics: Topic[];
}

export interface Month {
  id: string;
  monthNumber: number;
  name: string;
  goal: string;
  weeks: Week[];
}

export const learningPlan: Month[] = [
  {
    id: "month-1",
    monthNumber: 1,
    name: "Foundations & JavaScript (January)",
    goal: "Master JS, web basics, Git, and problem-solving.",
    weeks: [
      {
        id: "month-1-week-1",
        weekNumber: 1,
        phase: "Web & Git Basics",
        topics: [
          {
            id: "m1w1t1",
            title: "Web Fundamentals",
            description: "HTTP vs HTTPS, DNS, Request/Response cycle",
            youtubeLinks: [
              "How does the web work",
              "HTTP vs HTTPS explained",
              "DNS explained for beginners",
            ],
            tasks: [
              { id: "m1w1t1task1", text: "Watch: How does the web work", completed: false },
              { id: "m1w1t1task2", text: "Watch: HTTP vs HTTPS explained", completed: false },
              { id: "m1w1t1task3", text: "Watch: DNS explained for beginners", completed: false },
              { id: "m1w1t1task4", text: "Create README.md explaining 'How the Web Works'", completed: false },
            ],
          },
          {
            id: "m1w1t2",
            title: "Git Basics",
            description: "git init, git add, git commit, git push, git branch",
            youtubeLinks: ["Git & GitHub tutorial for beginners"],
            tasks: [
              { id: "m1w1t2task1", text: "Watch: Git & GitHub tutorial for beginners", completed: false },
              { id: "m1w1t2task2", text: "Practice: git init, git add, git commit", completed: false },
              { id: "m1w1t2task3", text: "Practice: git push, git branch", completed: false },
            ],
          },
          {
            id: "m1w1t3",
            title: "GitHub Setup",
            description: "Create repo, push first file",
            youtubeLinks: ["GitHub tutorial for beginners 2026"],
            tasks: [
              { id: "m1w1t3task1", text: "Watch: GitHub tutorial for beginners 2026", completed: false },
              { id: "m1w1t3task2", text: "Create GitHub account", completed: false },
              { id: "m1w1t3task3", text: "Create first repository", completed: false },
              { id: "m1w1t3task4", text: "Push first file to GitHub", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-1-week-2",
        weekNumber: 2,
        phase: "JS Core",
        topics: [
          {
            id: "m1w2t1",
            title: "JavaScript Fundamentals",
            description: "Variables, Loops, Functions, Arrays, Objects, Strings",
            youtubeLinks: [
              "JavaScript basics for beginners",
              "JavaScript ES6 tutorial",
            ],
            tasks: [
              { id: "m1w2t1task1", text: "Watch: JavaScript basics for beginners", completed: false },
              { id: "m1w2t1task2", text: "Watch: JavaScript ES6 tutorial", completed: false },
              { id: "m1w2t1task3", text: "Practice: Variables and Data Types", completed: false },
              { id: "m1w2t1task4", text: "Practice: Loops (for, while, forEach)", completed: false },
              { id: "m1w2t1task5", text: "Practice: Functions", completed: false },
              { id: "m1w2t1task6", text: "Practice: Arrays and Array Methods", completed: false },
              { id: "m1w2t1task7", text: "Practice: Objects and Object Methods", completed: false },
              { id: "m1w2t1task8", text: "Practice: String Methods", completed: false },
            ],
          },
          {
            id: "m1w2t2",
            title: "Problem Solving Practice",
            description: "Solve 10 basic problems on HackerRank/LeetCode",
            youtubeLinks: ["JavaScript coding interview problems beginners"],
            tasks: [
              { id: "m1w2t2task1", text: "Watch: JavaScript coding interview problems beginners", completed: false },
              { id: "m1w2t2task2", text: "Solve 10 Basic Problems (HackerRank/LeetCode)", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-1-week-3",
        weekNumber: 3,
        phase: "Modern JS",
        topics: [
          {
            id: "m1w3t1",
            title: "ES6+ Features",
            description: "Arrow Functions, Template Literals, Async/Await, Promises, Try/Catch",
            youtubeLinks: [
              "JavaScript ES6 features",
              "JavaScript Async Await tutorial",
              "JavaScript Promises tutorial",
            ],
            tasks: [
              { id: "m1w3t1task1", text: "Watch: JavaScript ES6 features", completed: false },
              { id: "m1w3t1task2", text: "Watch: JavaScript Async Await tutorial", completed: false },
              { id: "m1w3t1task3", text: "Watch: JavaScript Promises tutorial", completed: false },
              { id: "m1w3t1task4", text: "Practice: Arrow Functions", completed: false },
              { id: "m1w3t1task5", text: "Practice: Template Literals", completed: false },
              { id: "m1w3t1task6", text: "Practice: Promises", completed: false },
              { id: "m1w3t1task7", text: "Practice: Async/Await", completed: false },
              { id: "m1w3t1task8", text: "Practice: Try/Catch Error Handling", completed: false },
            ],
          },
          {
            id: "m1w3t2",
            title: "Intermediate Problem Solving",
            description: "Solve 10 medium JS problems",
            tasks: [
              { id: "m1w3t2task1", text: "Solve 10 Medium JS Problems (LeetCode/HackerRank)", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-1-week-4",
        weekNumber: 4,
        phase: "DSA Logic",
        topics: [
          {
            id: "m1w4t1",
            title: "Data Structures",
            description: "Stack, Queue, Linked List, Linear Search, Bubble Sort",
            youtubeLinks: [
              "Data Structures JavaScript",
              "JavaScript algorithms for beginners",
              "Stack Queue Linked List JS",
            ],
            tasks: [
              { id: "m1w4t1task1", text: "Watch: Data Structures JavaScript", completed: false },
              { id: "m1w4t1task2", text: "Watch: JavaScript algorithms for beginners", completed: false },
              { id: "m1w4t1task3", text: "Watch: Stack Queue Linked List JS", completed: false },
              { id: "m1w4t1task4", text: "Implement: Stack Data Structure", completed: false },
              { id: "m1w4t1task5", text: "Implement: Queue Data Structure", completed: false },
              { id: "m1w4t1task6", text: "Implement: Linked List", completed: false },
              { id: "m1w4t1task7", text: "Implement: Linear Search Algorithm", completed: false },
              { id: "m1w4t1task8", text: "Implement: Bubble Sort Algorithm", completed: false },
            ],
          },
          {
            id: "m1w4t2",
            title: "Problem Solving Challenge",
            description: "Solve logic problems and Array/String problems",
            tasks: [
              { id: "m1w4t2task1", text: "Solve 10 Logic Problems (Sorting/Searching)", completed: false },
              { id: "m1w4t2task2", text: "Solve 5 Medium 'Array + String' Problems", completed: false },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-2",
    monthNumber: 2,
    name: "First Backend + TypeScript (February)",
    goal: "Build first API, learn MongoDB, TypeScript basics.",
    weeks: [
      {
        id: "month-2-week-1",
        weekNumber: 1,
        phase: "Node.js & Express",
        topics: [
          {
            id: "m2w1t1",
            title: "Node.js Fundamentals",
            description: "Node.js runtime, Modules, Express basics",
            youtubeLinks: [
              "Node.js crash course 2026",
              "Express.js tutorial for beginners",
            ],
            tasks: [
              { id: "m2w1t1task1", text: "Watch: Node.js crash course 2026", completed: false },
              { id: "m2w1t1task2", text: "Watch: Express.js tutorial for beginners", completed: false },
              { id: "m2w1t1task3", text: "Setup Node.js environment", completed: false },
              { id: "m2w1t1task4", text: "Practice: Node.js Modules (require, module.exports)", completed: false },
              { id: "m2w1t1task5", text: "Practice: Express.js basics", completed: false },
            ],
          },
          {
            id: "m2w1t2",
            title: "REST API Basics",
            description: "Build Hello World API and test with Postman",
            youtubeLinks: [
              "Node.js REST API tutorial",
              "Postman API testing tutorial",
            ],
            tasks: [
              { id: "m2w1t2task1", text: "Watch: Node.js REST API tutorial", completed: false },
              { id: "m2w1t2task2", text: "Watch: Postman API testing tutorial", completed: false },
              { id: "m2w1t2task3", text: "Build: 'Hello World' API Server", completed: false },
              { id: "m2w1t2task4", text: "Test API with Postman", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-2-week-2",
        weekNumber: 2,
        phase: "MongoDB & Auth",
        topics: [
          {
            id: "m2w2t1",
            title: "MongoDB & Mongoose",
            description: "MongoDB CRUD with Mongoose, Schemas, Models",
            youtubeLinks: [
              "MongoDB tutorial for beginners",
              "Mongoose CRUD Node.js",
            ],
            tasks: [
              { id: "m2w2t1task1", text: "Watch: MongoDB tutorial for beginners", completed: false },
              { id: "m2w2t1task2", text: "Watch: Mongoose CRUD Node.js", completed: false },
              { id: "m2w2t1task3", text: "Setup MongoDB (local or Atlas)", completed: false },
              { id: "m2w2t1task4", text: "Practice: Create Mongoose Schema", completed: false },
              { id: "m2w2t1task5", text: "Practice: CRUD Operations (Create, Read, Update, Delete)", completed: false },
            ],
          },
          {
            id: "m2w2t2",
            title: "Authentication & Security",
            description: "JWT, bcrypt password hashing",
            youtubeLinks: [
              "JWT authentication Node.js tutorial",
              "bcrypt password hashing Node.js",
            ],
            tasks: [
              { id: "m2w2t2task1", text: "Watch: JWT authentication Node.js tutorial", completed: false },
              { id: "m2w2t2task2", text: "Watch: bcrypt password hashing Node.js", completed: false },
              { id: "m2w2t2task3", text: "Implement: User Registration with bcrypt", completed: false },
              { id: "m2w2t2task4", text: "Implement: JWT Token Generation", completed: false },
              { id: "m2w2t2task5", text: "Implement: JWT Token Verification Middleware", completed: false },
            ],
          },
          {
            id: "m2w2t3",
            title: "Bookstore API Project",
            description: "Complete API with registration/login + CRUD",
            tasks: [
              { id: "m2w2t3task1", text: "Build: Bookstore API with Registration/Login", completed: false },
              { id: "m2w2t3task2", text: "Implement: Book CRUD Operations", completed: false },
              { id: "m2w2t3task3", text: "Test: All endpoints with Postman", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-2-week-3",
        weekNumber: 3,
        phase: "TypeScript Basics",
        topics: [
          {
            id: "m2w3t1",
            title: "TypeScript Fundamentals",
            description: "Types, Interfaces, Generics, Strict Mode",
            youtubeLinks: [
              "TypeScript tutorial for beginners 2026",
              "TypeScript strict mode explained",
            ],
            tasks: [
              { id: "m2w3t1task1", text: "Watch: TypeScript tutorial for beginners 2026", completed: false },
              { id: "m2w3t1task2", text: "Watch: TypeScript strict mode explained", completed: false },
              { id: "m2w3t1task3", text: "Practice: Basic Types (string, number, boolean)", completed: false },
              { id: "m2w3t1task4", text: "Practice: Interfaces", completed: false },
              { id: "m2w3t1task5", text: "Practice: Generics", completed: false },
              { id: "m2w3t1task6", text: "Setup: TypeScript with strict mode (noImplicitAny, strictNullChecks)", completed: false },
            ],
          },
          {
            id: "m2w3t2",
            title: "Refactor to TypeScript",
            description: "Convert Bookstore API from JavaScript to TypeScript",
            tasks: [
              { id: "m2w3t2task1", text: "Refactor: Bookstore API to TypeScript", completed: false },
              { id: "m2w3t2task2", text: "Enable: Strict Mode in tsconfig.json", completed: false },
              { id: "m2w3t2task3", text: "Fix: All TypeScript errors", completed: false },
              { id: "m2w3t2task4", text: "Test: API still works after refactoring", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-2-week-4",
        weekNumber: 4,
        phase: "Reality Check Coding Challenges",
        topics: [
          {
            id: "m2w4t1",
            title: "Assignment A: Inventory API",
            description: "Prevent selling if stock < requested quantity",
            youtubeLinks: ["Node.js inventory management project"],
            tasks: [
              { id: "m2w4t1task1", text: "Watch: Node.js inventory management project", completed: false },
              { id: "m2w4t1task2", text: "Design: Inventory API Schema", completed: false },
              { id: "m2w4t1task3", text: "Implement: Stock validation logic", completed: false },
              { id: "m2w4t1task4", text: "Implement: Prevent selling if stock < requested quantity", completed: false },
              { id: "m2w4t1task5", text: "Create: Inventory API Repository", completed: false },
            ],
          },
          {
            id: "m2w4t2",
            title: "Assignment B: Auth System",
            description: "Simple Auth System with admin-only dashboard",
            youtubeLinks: ["Node.js role based authentication tutorial"],
            tasks: [
              { id: "m2w4t2task1", text: "Watch: Node.js role based authentication tutorial", completed: false },
              { id: "m2w4t2task2", text: "Implement: Role-based authentication (Admin, User)", completed: false },
              { id: "m2w4t2task3", text: "Implement: Admin-only dashboard route", completed: false },
              { id: "m2w4t2task4", text: "Create: Auth System Repository", completed: false },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-3",
    monthNumber: 3,
    name: "SQL & Prisma ORM (March)",
    goal: "Master Relational Databases (SQL) and ORMs used by top tier companies.",
    weeks: [
      {
        id: "month-3-week-1",
        weekNumber: 1,
        phase: "SQL & RDBMS",
        topics: [
          {
            id: "m3w1t1",
            title: "Database Design",
            description: "ER Diagrams, Normalization, SQL queries",
            youtubeLinks: [
              "PostgreSQL tutorial for beginners",
              "ER diagrams tutorial",
              "SQL normalization explained",
            ],
            tasks: [
              { id: "m3w1t1task1", text: "Watch: PostgreSQL tutorial for beginners", completed: false },
              { id: "m3w1t1task2", text: "Watch: ER diagrams tutorial", completed: false },
              { id: "m3w1t1task3", text: "Watch: SQL normalization explained", completed: false },
              { id: "m3w1t1task4", text: "Practice: SQL SELECT queries", completed: false },
              { id: "m3w1t1task5", text: "Practice: SQL INSERT, UPDATE, DELETE", completed: false },
              { id: "m3w1t1task6", text: "Create: ER Diagram for University Management System", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-3-week-2",
        weekNumber: 2,
        phase: "Prisma ORM",
        topics: [
          {
            id: "m3w2t1",
            title: "Prisma Setup & Schema",
            description: "Schema, Migrations, Relations (1:1, 1:N, N:N)",
            youtubeLinks: [
              "Prisma ORM tutorial",
              "Prisma Node.js tutorial",
            ],
            tasks: [
              { id: "m3w2t1task1", text: "Watch: Prisma ORM tutorial", completed: false },
              { id: "m3w2t1task2", text: "Watch: Prisma Node.js tutorial", completed: false },
              { id: "m3w2t1task3", text: "Setup: Prisma with PostgreSQL", completed: false },
              { id: "m3w2t1task4", text: "Create: Prisma Schema", completed: false },
              { id: "m3w2t1task5", text: "Practice: 1:1 Relations", completed: false },
              { id: "m3w2t1task6", text: "Practice: 1:N Relations", completed: false },
              { id: "m3w2t1task7", text: "Practice: N:N Relations", completed: false },
              { id: "m3w2t1task8", text: "Run: Prisma Migrations", completed: false },
              { id: "m3w2t1task9", text: "Connect: Node.js backend to PostgreSQL", completed: false },
              { id: "m3w2t1task10", text: "Create: Seed Data Script", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-3-week-3",
        weekNumber: 3,
        phase: "Next.js Bridge",
        topics: [
          {
            id: "m3w3t1",
            title: "Next.js App Router",
            description: "App Router, Server Actions, Server Components, API Routes",
            youtubeLinks: [
              "Next.js 14 tutorial",
              "Next.js API routes tutorial",
            ],
            tasks: [
              { id: "m3w3t1task1", text: "Watch: Next.js 14 tutorial", completed: false },
              { id: "m3w3t1task2", text: "Watch: Next.js API routes tutorial", completed: false },
              { id: "m3w3t1task3", text: "Practice: App Router structure", completed: false },
              { id: "m3w3t1task4", text: "Practice: Server Components", completed: false },
              { id: "m3w3t1task5", text: "Practice: Server Actions", completed: false },
              { id: "m3w3t1task6", text: "Practice: API Routes", completed: false },
            ],
          },
          {
            id: "m3w3t2",
            title: "Blog App Project",
            description: "Small Blog App (Next.js + Prisma)",
            tasks: [
              { id: "m3w3t2task1", text: "Build: Small Blog App with Next.js + Prisma", completed: false },
              { id: "m3w3t2task2", text: "Implement: Create Post functionality", completed: false },
              { id: "m3w3t2task3", text: "Implement: Read Posts (List & Single)", completed: false },
              { id: "m3w3t2task4", text: "Implement: Update Post", completed: false },
              { id: "m3w3t2task5", text: "Implement: Delete Post", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-3-week-4",
        weekNumber: 4,
        phase: "Advanced CRUD & Architecture",
        topics: [
          {
            id: "m3w4t1",
            title: "Architecture Patterns",
            description: "Service-Controller pattern, modular folder structure",
            youtubeLinks: [
              "Node.js service controller architecture",
              "Node.js project structure best practices",
            ],
            tasks: [
              { id: "m3w4t1task1", text: "Watch: Node.js service controller architecture", completed: false },
              { id: "m3w4t1task2", text: "Watch: Node.js project structure best practices", completed: false },
              { id: "m3w4t1task3", text: "Practice: Service-Controller Pattern", completed: false },
              { id: "m3w4t1task4", text: "Organize: Modular folder structure", completed: false },
            ],
          },
          {
            id: "m3w4t2",
            title: "University Management System",
            description: "Backend with complex relations",
            tasks: [
              { id: "m3w4t2task1", text: "Build: Backend for University Management System", completed: false },
              { id: "m3w4t2task2", text: "Implement: Complex Relations (1-to-many)", completed: false },
              { id: "m3w4t2task3", text: "Implement: CRUD for Students", completed: false },
              { id: "m3w4t2task4", text: "Implement: CRUD for Courses", completed: false },
              { id: "m3w4t2task5", text: "Implement: Enrollment System", completed: false },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-4",
    monthNumber: 4,
    name: "Capstone Project 1 – DeshDoor (April)",
    goal: "Build a 'Hirable' Hyperlocal Marketplace (Service Booking System).",
    weeks: [
      {
        id: "month-4-week-1",
        weekNumber: 1,
        phase: "Project Setup & Auth",
        topics: [
          {
            id: "m4w1t1",
            title: "Next.js 14 Setup",
            description: "Project initialization and configuration",
            tasks: [
              { id: "m4w1t1task1", text: "Initialize: Next.js 14 project", completed: false },
              { id: "m4w1t1task2", text: "Setup: Project folder structure", completed: false },
              { id: "m4w1t1task3", text: "Configure: TypeScript and ESLint", completed: false },
            ],
          },
          {
            id: "m4w1t2",
            title: "NextAuth Multi-Role Authentication",
            description: "3-Role Auth (Admin, Provider, User) via NextAuth",
            youtubeLinks: ["Next.js NextAuth multi role authentication"],
            tasks: [
              { id: "m4w1t2task1", text: "Watch: Next.js NextAuth multi role authentication", completed: false },
              { id: "m4w1t2task2", text: "Install: NextAuth.js", completed: false },
              { id: "m4w1t2task3", text: "Configure: NextAuth with database", completed: false },
              { id: "m4w1t2task4", text: "Implement: User Registration (3 roles)", completed: false },
              { id: "m4w1t2task5", text: "Implement: Login System", completed: false },
              { id: "m4w1t2task6", text: "Implement: Role-based Route Protection", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-4-week-2",
        weekNumber: 2,
        phase: "Core Logic",
        topics: [
          {
            id: "m4w2t1",
            title: "Service Booking Logic",
            description: "Date/Time Slot selection logic",
            youtubeLinks: ["Next.js booking system tutorial"],
            tasks: [
              { id: "m4w2t1task1", text: "Watch: Next.js booking system tutorial", completed: false },
              { id: "m4w2t1task2", text: "Design: Booking System Logic", completed: false },
              { id: "m4w2t1task3", text: "Implement: Date Selection", completed: false },
              { id: "m4w2t1task4", text: "Implement: Time Slot Selection", completed: false },
              { id: "m4w2t1task5", text: "Implement: Slot Availability Check", completed: false },
            ],
          },
          {
            id: "m4w2t2",
            title: "Database Schema",
            description: "Relational Schema (User → Booking → Service)",
            youtubeLinks: ["Prisma relations tutorial"],
            tasks: [
              { id: "m4w2t2task1", text: "Watch: Prisma relations tutorial", completed: false },
              { id: "m4w2t2task2", text: "Design: Database ER Diagram", completed: false },
              { id: "m4w2t2task3", text: "Create: Prisma Schema (User, Service, Booking)", completed: false },
              { id: "m4w2t2task4", text: "Setup: Relations (User → Booking → Service)", completed: false },
              { id: "m4w2t2task5", text: "Run: Database Migrations", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-4-week-3",
        weekNumber: 3,
        phase: "Dashboard",
        topics: [
          {
            id: "m4w3t1",
            title: "Provider Panel",
            description: "Accept/Reject jobs",
            youtubeLinks: ["React dashboard tutorial"],
            tasks: [
              { id: "m4w3t1task1", text: "Watch: React dashboard tutorial", completed: false },
              { id: "m4w3t1task2", text: "Create: Provider Dashboard Layout", completed: false },
              { id: "m4w3t1task3", text: "Implement: View Pending Bookings", completed: false },
              { id: "m4w3t1task4", text: "Implement: Accept Booking", completed: false },
              { id: "m4w3t1task5", text: "Implement: Reject Booking", completed: false },
            ],
          },
          {
            id: "m4w3t2",
            title: "Admin Panel",
            description: "Manage categories & users",
            youtubeLinks: ["Next.js admin panel tutorial"],
            tasks: [
              { id: "m4w3t2task1", text: "Watch: Next.js admin panel tutorial", completed: false },
              { id: "m4w3t2task2", text: "Create: Admin Dashboard Layout", completed: false },
              { id: "m4w3t2task3", text: "Implement: Manage Categories (CRUD)", completed: false },
              { id: "m4w3t2task4", text: "Implement: Manage Users (View, Edit, Delete)", completed: false },
              { id: "m4w3t2task5", text: "Implement: View All Bookings", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-4-week-4",
        weekNumber: 4,
        phase: "Deployment & Documentation",
        topics: [
          {
            id: "m4w4t1",
            title: "Database Deployment",
            description: "Deploy DB to Neon/Supabase",
            youtubeLinks: ["Supabase tutorial"],
            tasks: [
              { id: "m4w4t1task1", text: "Watch: Supabase tutorial", completed: false },
              { id: "m4w4t1task2", text: "Setup: Neon or Supabase account", completed: false },
              { id: "m4w4t1task3", text: "Deploy: Database to Neon/Supabase", completed: false },
              { id: "m4w4t1task4", text: "Update: Connection strings", completed: false },
            ],
          },
          {
            id: "m4w4t2",
            title: "App Deployment",
            description: "Deploy app to Vercel",
            youtubeLinks: ["Vercel deployment tutorial Next.js"],
            tasks: [
              { id: "m4w4t2task1", text: "Watch: Vercel deployment tutorial Next.js", completed: false },
              { id: "m4w4t2task2", text: "Prepare: Environment variables", completed: false },
              { id: "m4w4t2task3", text: "Deploy: App to Vercel", completed: false },
              { id: "m4w4t2task4", text: "Test: Deployed application", completed: false },
            ],
          },
          {
            id: "m4w4t3",
            title: "API Documentation",
            description: "Add Swagger/Postman docs",
            youtubeLinks: ["Swagger tutorial for Node.js"],
            tasks: [
              { id: "m4w4t3task1", text: "Watch: Swagger tutorial for Node.js", completed: false },
              { id: "m4w4t3task2", text: "Create: Swagger/OpenAPI Documentation", completed: false },
              { id: "m4w4t3task3", text: "Create: Postman Collection", completed: false },
              { id: "m4w4t3task4", text: "Document: All API Endpoints", completed: false },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-5",
    monthNumber: 5,
    name: "Capstone Project 2 – RideShare Backend (May)",
    goal: "Demonstrate High-Performance Backend Engineering (Microservice Architecture).",
    weeks: [
      {
        id: "month-5-week-1",
        weekNumber: 1,
        phase: "Setup Microservices & Redis",
        topics: [
          {
            id: "m5w1t1",
            title: "Microservices Setup",
            description: "Node.js microservices architecture",
            youtubeLinks: ["Node.js microservices tutorial"],
            tasks: [
              { id: "m5w1t1task1", text: "Watch: Node.js microservices tutorial", completed: false },
              { id: "m5w1t1task2", text: "Design: Microservices Architecture", completed: false },
              { id: "m5w1t1task3", text: "Setup: Node.js/Express Microservice", completed: false },
              { id: "m5w1t1task4", text: "Organize: Service separation", completed: false },
            ],
          },
          {
            id: "m5w1t2",
            title: "Redis Caching",
            description: "Redis installation & connection",
            youtubeLinks: ["Redis Node.js tutorial"],
            tasks: [
              { id: "m5w1t2task1", text: "Watch: Redis Node.js tutorial", completed: false },
              { id: "m5w1t2task2", text: "Install: Redis (local or cloud)", completed: false },
              { id: "m5w1t2task3", text: "Connect: Node.js to Redis", completed: false },
              { id: "m5w1t2task4", text: "Practice: Basic Redis operations (SET, GET)", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-5-week-2",
        weekNumber: 2,
        phase: "Complex Logic",
        topics: [
          {
            id: "m5w2t1",
            title: "Geo-Spatial Tracking",
            description: "Mock driver GPS tracking",
            youtubeLinks: ["Node.js real time tracking tutorial"],
            tasks: [
              { id: "m5w2t1task1", text: "Watch: Node.js real time tracking tutorial", completed: false },
              { id: "m5w2t1task2", text: "Design: Driver location tracking system", completed: false },
              { id: "m5w2t1task3", text: "Implement: Mock GPS coordinates generator", completed: false },
              { id: "m5w2t1task4", text: "Implement: Driver location update endpoint", completed: false },
            ],
          },
          {
            id: "m5w2t2",
            title: "Redis Caching Strategy",
            description: "Store active drivers in Redis",
            youtubeLinks: ["Redis caching tutorial Node.js"],
            tasks: [
              { id: "m5w2t2task1", text: "Watch: Redis caching tutorial Node.js", completed: false },
              { id: "m5w2t2task2", text: "Implement: Store active drivers in Redis", completed: false },
              { id: "m5w2t2task3", text: "Implement: Driver availability caching", completed: false },
              { id: "m5w2t2task4", text: "Implement: Cache expiration logic", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-5-week-3",
        weekNumber: 3,
        phase: "Analytics & Testing",
        topics: [
          {
            id: "m5w3t1",
            title: "SQL Analytics",
            description: "SQL aggregation queries, ACID transactions",
            tasks: [
              { id: "m5w3t1task1", text: "Practice: SQL Aggregation (SUM, COUNT, AVG)", completed: false },
              { id: "m5w3t1task2", text: "Practice: GROUP BY queries", completed: false },
              { id: "m5w3t1task3", text: "Implement: Calculate daily earnings per driver", completed: false },
              { id: "m5w3t1task4", text: "Implement: ACID transactions for payments", completed: false },
            ],
          },
          {
            id: "m5w3t2",
            title: "Unit Testing",
            description: "Jest + Supertest for API testing",
            youtubeLinks: [
              "Node.js Jest tutorial",
              "Node.js Supertest tutorial",
            ],
            tasks: [
              { id: "m5w3t2task1", text: "Watch: Node.js Jest tutorial", completed: false },
              { id: "m5w3t2task2", text: "Watch: Node.js Supertest tutorial", completed: false },
              { id: "m5w3t2task3", text: "Setup: Jest and Supertest", completed: false },
              { id: "m5w3t2task4", text: "Write: Unit tests for Login endpoint", completed: false },
              { id: "m5w3t2task5", text: "Write: Unit tests for Booking endpoint", completed: false },
              { id: "m5w3t2task6", text: "Run: All tests and achieve >80% coverage", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-5-week-4",
        weekNumber: 4,
        phase: "Docker & Containerization",
        topics: [
          {
            id: "m5w4t1",
            title: "Docker Setup",
            description: "Dockerfile, docker-compose, containerization",
            youtubeLinks: [
              "Docker Node.js tutorial",
              "docker-compose Node.js tutorial",
            ],
            tasks: [
              { id: "m5w4t1task1", text: "Watch: Docker Node.js tutorial", completed: false },
              { id: "m5w4t1task2", text: "Watch: docker-compose Node.js tutorial", completed: false },
              { id: "m5w4t1task3", text: "Create: Dockerfile for Node.js app", completed: false },
              { id: "m5w4t1task4", text: "Create: docker-compose.yml", completed: false },
              { id: "m5w4t1task5", text: "Containerize: App + PostgreSQL + Redis", completed: false },
              { id: "m5w4t1task6", text: "Test: Docker containers run successfully", completed: false },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "month-6",
    monthNumber: 6,
    name: "DevOps & Job Hunt (June)",
    goal: "Polish skills and secure an offer.",
    weeks: [
      {
        id: "month-6-week-1",
        weekNumber: 1,
        phase: "DevOps Basics",
        topics: [
          {
            id: "m6w1t1",
            title: "NGINX Reverse Proxy",
            description: "NGINX configuration and reverse proxy setup",
            youtubeLinks: ["NGINX reverse proxy tutorial"],
            tasks: [
              { id: "m6w1t1task1", text: "Watch: NGINX reverse proxy tutorial", completed: false },
              { id: "m6w1t1task2", text: "Install: NGINX", completed: false },
              { id: "m6w1t1task3", text: "Configure: NGINX reverse proxy", completed: false },
              { id: "m6w1t1task4", text: "Test: Reverse proxy configuration", completed: false },
            ],
          },
          {
            id: "m6w1t2",
            title: "Process Monitoring",
            description: "PM2 monitoring for Node.js",
            youtubeLinks: ["PM2 Node.js tutorial"],
            tasks: [
              { id: "m6w1t2task1", text: "Watch: PM2 Node.js tutorial", completed: false },
              { id: "m6w1t2task2", text: "Install: PM2", completed: false },
              { id: "m6w1t2task3", text: "Setup: PM2 for Node.js app", completed: false },
              { id: "m6w1t2task4", text: "Configure: PM2 monitoring and logs", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-6-week-2",
        weekNumber: 2,
        phase: "Resume & GitHub Polish",
        topics: [
          {
            id: "m6w2t1",
            title: "GitHub Portfolio",
            description: "Update GitHub with screenshots, README.md, deployment instructions",
            youtubeLinks: [
              "How to create a developer portfolio on GitHub",
              "GitHub README tutorial",
            ],
            tasks: [
              { id: "m6w2t1task1", text: "Watch: How to create a developer portfolio on GitHub", completed: false },
              { id: "m6w2t1task2", text: "Watch: GitHub README tutorial", completed: false },
              { id: "m6w2t1task3", text: "Update: All project README.md files", completed: false },
              { id: "m6w2t1task4", text: "Add: Screenshots to project repositories", completed: false },
              { id: "m6w2t1task5", text: "Add: Deployment instructions", completed: false },
              { id: "m6w2t1task6", text: "Highlight: Docker, Prisma, Next.js, PostgreSQL in README", completed: false },
            ],
          },
          {
            id: "m6w2t2",
            title: "Resume Update",
            description: "Highlight key technologies and projects",
            tasks: [
              { id: "m6w2t2task1", text: "Update: Resume with latest projects", completed: false },
              { id: "m6w2t2task2", text: "Highlight: Docker, Prisma, Next.js, PostgreSQL keywords", completed: false },
              { id: "m6w2t2task3", text: "Add: GitHub profile link", completed: false },
              { id: "m6w2t2task4", text: "Add: Live project links", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-6-week-3",
        weekNumber: 3,
        phase: "Mock Interviews",
        topics: [
          {
            id: "m6w3t1",
            title: "Technical Interview Prep",
            description: "Practice verbal answers for common questions",
            youtubeLinks: ["Node.js interview questions"],
            tasks: [
              { id: "m6w3t1task1", text: "Watch: Node.js interview questions", completed: false },
              { id: "m6w3t1task2", text: "Practice: Event Loop explanation", completed: false },
              { id: "m6w3t1task3", text: "Practice: Database Indexing explanation", completed: false },
              { id: "m6w3t1task4", text: "Practice: JWT Flow explanation", completed: false },
              { id: "m6w3t1task5", text: "Practice: REST API concepts", completed: false },
            ],
          },
          {
            id: "m6w3t2",
            title: "System Design Practice",
            description: "System design diagrams and whiteboard practice",
            youtubeLinks: ["Backend system design for beginners"],
            tasks: [
              { id: "m6w3t2task1", text: "Watch: Backend system design for beginners", completed: false },
              { id: "m6w3t2task2", text: "Practice: System design diagrams", completed: false },
              { id: "m6w3t2task3", text: "Practice: Whiteboard system design", completed: false },
              { id: "m6w3t2task4", text: "Complete: Mock interview session", completed: false },
            ],
          },
        ],
      },
      {
        id: "month-6-week-4",
        weekNumber: 4,
        phase: "Applications",
        topics: [
          {
            id: "m6w4t1",
            title: "Job Applications",
            description: "Apply to 20+ Junior/Intern roles",
            youtubeLinks: ["How to apply for software jobs in Bangladesh 2026"],
            tasks: [
              { id: "m6w4t1task1", text: "Watch: How to apply for software jobs in Bangladesh 2026", completed: false },
              { id: "m6w4t1task2", text: "Create: LinkedIn profile (if not exists)", completed: false },
              { id: "m6w4t1task3", text: "Apply: 5 positions on LinkedIn", completed: false },
              { id: "m6w4t1task4", text: "Apply: 5 positions on BdJobs", completed: false },
              { id: "m6w4t1task5", text: "Apply: 5 positions on Indeed", completed: false },
              { id: "m6w4t1task6", text: "Apply: 5+ positions on Company Career Pages", completed: false },
            ],
          },
        ],
      },
    ],
  },
];
