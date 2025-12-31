export interface Deliverable {
  id: string;
  text: string;
  completed: boolean;
}

export interface Week {
  id: string;
  weekNumber: number;
  phase: string;
  topics: string[];
  deliverables: Deliverable[];
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
    name: "Foundations & Logic (January)",
    goal: "Master the syntax, tools, and algorithmic thinking. Building a weak foundation ensures failure later.",
    weeks: [
      {
        id: "month-1-week-1",
        weekNumber: 1,
        phase: "Web & Setup",
        topics: [
          "L1 Mod 0: Environment Setup",
          "L1 Mod 3: Git & GitHub",
          "L1 Mod 32-1: HTTP, DNS, Request Lifecycle",
        ],
        deliverables: [
          { id: "m1w1d1", text: "GitHub Account Setup", completed: false },
          { id: "m1w1d2", text: "README.md explaining 'How the Web Works'", completed: false },
        ],
      },
      {
        id: "month-1-week-2",
        weekNumber: 2,
        phase: "JS Core",
        topics: [
          "L1 Milestone 3: Loops, Functions, Arrays",
          "L1 Mod 16: Objects & Strings",
        ],
        deliverables: [
          { id: "m1w2d1", text: "Solve 10 Basic Problems (HackerRank/LeetCode)", completed: false },
        ],
      },
      {
        id: "month-1-week-3",
        weekNumber: 3,
        phase: "Modern JS",
        topics: [
          "L1 Milestone 5: ES6, Arrow Functions",
          "Async/Await: Promises, Try/Catch",
        ],
        deliverables: [
          { id: "m1w3d1", text: "Solve 10 Intermediate JS Problems", completed: false },
        ],
      },
      {
        id: "month-1-week-4",
        weekNumber: 4,
        phase: "DSA Logic",
        topics: [
          "L2 Mission 0: Data Structures & Algorithms",
          "Problem Solving: Stack, Queue, Linear Search",
        ],
        deliverables: [
          { id: "m1w4d1", text: "Solve 10 Logic Problems (Sorting/Searching)", completed: false },
          { id: "m1w4d2", text: "Solve 5 Medium 'Array + String' problems", completed: false },
        ],
      },
    ],
  },
  {
    id: "month-2",
    monthNumber: 2,
    name: "The First Backend (February)",
    goal: "Build functional APIs using Node.js and transition to TypeScript.",
    weeks: [
      {
        id: "month-2-week-1",
        weekNumber: 1,
        phase: "Node.js Basics",
        topics: [
          "L2 Mission 2: Node.js Core & Express.js",
          "L1 Mod 51: REST API Principles",
        ],
        deliverables: [
          { id: "m2w1d1", text: "Functional 'Hello World' API Server", completed: false },
        ],
      },
      {
        id: "month-2-week-2",
        weekNumber: 2,
        phase: "Mongo & Auth",
        topics: [
          "L1 Mod 52-56: MongoDB CRUD",
          "Security: JWT Authentication, Hashing",
        ],
        deliverables: [
          { id: "m2w2d1", text: "'Bookstore API' with Login/Registration", completed: false },
        ],
      },
      {
        id: "month-2-week-3",
        weekNumber: 3,
        phase: "TypeScript",
        topics: [
          "L2 Mission 1: TS Basics, Interfaces, Generics",
          "Refactoring: JS to TS Migration",
          "Strict Mode: Use noImplicitAny & strictNullChecks",
        ],
        deliverables: [
          { id: "m2w3d1", text: "Refactor Bookstore API to TypeScript (Strict Mode)", completed: false },
        ],
      },
      {
        id: "month-2-week-4",
        weekNumber: 4,
        phase: "⚠️ Reality Check",
        topics: [
          "NO VIDEOS - PURE CODING CHALLENGE",
          "Logic Test: Inventory Management",
          "Security Test: Role-Based Dashboard",
        ],
        deliverables: [
          { id: "m2w4d1", text: "Assignment A: Inventory API Repo", completed: false },
          { id: "m2w4d2", text: "Assignment B: Auth System Repo", completed: false },
        ],
      },
    ],
  },
  {
    id: "month-3",
    monthNumber: 3,
    name: "The Professional Standard (March)",
    goal: "Master Relational Databases (SQL) and ORMs used by top tier companies.",
    weeks: [
      {
        id: "month-3-week-1",
        weekNumber: 1,
        phase: "SQL & RDBMS",
        topics: [
          "L2 Mission 3: ER Diagrams, Normalization",
          "Database: PostgreSQL Setup",
        ],
        deliverables: [
          { id: "m3w1d1", text: "ER Diagram for University Mgmt System", completed: false },
        ],
      },
      {
        id: "month-3-week-2",
        weekNumber: 2,
        phase: "Prisma ORM",
        topics: [
          "L2 Mission 4: Prisma Schema & Migration",
          "Integration: Connect Node.js to Postgres",
        ],
        deliverables: [
          { id: "m3w2d1", text: "Connected Database with Seed Data", completed: false },
        ],
      },
      {
        id: "month-3-week-3",
        weekNumber: 3,
        phase: "Next.js Bridge",
        topics: [
          "L2 Mission 4: Next.js App Router Basics",
          "Server Actions: Replacing API Routes",
        ],
        deliverables: [
          { id: "m3w3d1", text: "Small 'Blog' App (Next.js + Prisma)", completed: false },
        ],
      },
      {
        id: "month-3-week-4",
        weekNumber: 4,
        phase: "Advanced CRUD",
        topics: [
          "L2 Mod 17-18: Complex Relations (1-to-many)",
          "Architecture: Service-Controller Pattern",
        ],
        deliverables: [
          { id: "m3w4d1", text: "Backend for University Mgmt System", completed: false },
        ],
      },
    ],
  },
  {
    id: "month-4",
    monthNumber: 4,
    name: "Capstone Project 1 - DeshDoor (April)",
    goal: "Build a 'Hirable' Hyperlocal Marketplace (Service Booking System).",
    weeks: [
      {
        id: "month-4-week-1",
        weekNumber: 1,
        phase: "Setup & Auth",
        topics: [
          "Next.js 14 Setup",
          "3-Role Auth (Admin, Provider, User) via NextAuth",
        ],
        deliverables: [
          { id: "m4w1d1", text: "Next.js 14 Setup Complete", completed: false },
          { id: "m4w1d2", text: "3-Role Auth System Implemented", completed: false },
        ],
      },
      {
        id: "month-4-week-2",
        weekNumber: 2,
        phase: "Core Logic",
        topics: [
          "Service Booking: Date/Time Slot selection logic",
          "Database: Relational Schema (User -> Booking -> Service)",
        ],
        deliverables: [
          { id: "m4w2d1", text: "Service Booking Logic Implemented", completed: false },
          { id: "m4w2d2", text: "Database Schema Created", completed: false },
        ],
      },
      {
        id: "month-4-week-3",
        weekNumber: 3,
        phase: "Dashboard",
        topics: [
          "Provider Panel: Accept/Reject jobs",
          "Admin Panel: Manage categories & users",
        ],
        deliverables: [
          { id: "m4w3d1", text: "Provider Panel Complete", completed: false },
          { id: "m4w3d2", text: "Admin Panel Complete", completed: false },
        ],
      },
      {
        id: "month-4-week-4",
        weekNumber: 4,
        phase: "Deploy & Docs",
        topics: [
          "Deploy Database to Neon/Supabase & App to Vercel",
          "Documentation: Add Swagger/Postman docs",
        ],
        deliverables: [
          { id: "m4w4d1", text: "Deployed to Vercel", completed: false },
          { id: "m4w4d2", text: "API Documentation Complete", completed: false },
        ],
      },
    ],
  },
  {
    id: "month-5",
    monthNumber: 5,
    name: "Capstone Project 2 - RideShare Backend (May)",
    goal: "Demonstrate High-Performance Backend Engineering (Microservice Architecture).",
    weeks: [
      {
        id: "month-5-week-1",
        weekNumber: 1,
        phase: "Setup",
        topics: [
          "Node.js/Express Microservice setup",
          "Redis Installation & Connection",
        ],
        deliverables: [
          { id: "m5w1d1", text: "Microservice Setup Complete", completed: false },
          { id: "m5w1d2", text: "Redis Connected", completed: false },
        ],
      },
      {
        id: "month-5-week-2",
        weekNumber: 2,
        phase: "Complex Logic",
        topics: [
          "Geo-Spatial: Tracking Mock Driver Locations",
          "Caching: Store active drivers in Redis",
        ],
        deliverables: [
          { id: "m5w2d1", text: "Geo-Spatial Tracking Implemented", completed: false },
          { id: "m5w2d2", text: "Redis Caching Working", completed: false },
        ],
      },
      {
        id: "month-5-week-3",
        weekNumber: 3,
        phase: "Analytics & Testing",
        topics: [
          "SQL Aggregation: Calculate daily earnings per driver",
          "Testing: Add Jest/Supertest Unit Tests",
        ],
        deliverables: [
          { id: "m5w3d1", text: "Analytics Dashboard Complete", completed: false },
          { id: "m5w3d2", text: "Unit Tests Added", completed: false },
        ],
      },
      {
        id: "month-5-week-4",
        weekNumber: 4,
        phase: "Docker",
        topics: [
          "Write Dockerfile & docker-compose.yml",
          "Containerize App + DB + Redis",
        ],
        deliverables: [
          { id: "m5w4d1", text: "Dockerfile Created", completed: false },
          { id: "m5w4d2", text: "Docker Compose Working", completed: false },
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
        phase: "DevOps Basic",
        topics: [
          "L2 Mission 9: NGINX Reverse Proxy",
          "Monitoring: Add basic console logs or optional PM2",
        ],
        deliverables: [
          { id: "m6w1d1", text: "NGINX Configuration Complete", completed: false },
          { id: "m6w1d2", text: "Monitoring Setup", completed: false },
        ],
      },
      {
        id: "month-6-week-2",
        weekNumber: 2,
        phase: "Resume Polish",
        topics: [
          "Highlight Keywords: Docker, Prisma, Next.js, PostgreSQL",
          "GitHub: Ensure neat README.md with screenshots",
        ],
        deliverables: [
          { id: "m6w2d1", text: "Resume Updated", completed: false },
          { id: "m6w2d2", text: "GitHub Profile Polished", completed: false },
        ],
      },
      {
        id: "month-6-week-3",
        weekNumber: 3,
        phase: "Mock Interview",
        topics: [
          "Practice Verbal Answers: Event Loop, Indexing, JWT Flow",
          "System Design Practice (Whiteboard)",
        ],
        deliverables: [
          { id: "m6w3d1", text: "Mock Interview Completed", completed: false },
          { id: "m6w3d2", text: "System Design Practice Done", completed: false },
        ],
      },
      {
        id: "month-6-week-4",
        weekNumber: 4,
        phase: "Application",
        topics: [
          "Target: Apply to 20+ Junior/Intern roles",
          "Platforms: LinkedIn, BdJobs, Indeed, Company Career Pages",
        ],
        deliverables: [
          { id: "m6w4d1", text: "Applied to 20+ Positions", completed: false },
        ],
      },
    ],
  },
];

