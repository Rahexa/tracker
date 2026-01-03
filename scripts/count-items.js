// Quick script to count items in roadmap
const fs = require('fs');
const path = require('path');

// Read the roadmap data file
const filePath = path.join(__dirname, '../lib/roadmapData.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Count items by type
let topics = 0;
let search = 0;
let practice = 0;
let projects = 0;
let assignments = 0;

// Count createItem calls by type
const topicMatches = content.match(/createItem\([^,]+,\s*'topic'/g);
const searchMatches = content.match(/createItem\([^,]+,\s*'search'/g);
const practiceMatches = content.match(/createItem\([^,]+,\s*'practice'/g);
const projectMatches = content.match(/createItem\([^,]+,\s*'project'/g);
const assignmentMatches = content.match(/createItem\([^,]+,\s*'assignment'/g);

topics = topicMatches ? topicMatches.length : 0;
search = searchMatches ? searchMatches.length : 0;
practice = practiceMatches ? practiceMatches.length : 0;
projects = projectMatches ? projectMatches.length : 0;
assignments = assignmentMatches ? assignmentMatches.length : 0;

console.log('Item Counts:');
console.log(`Topics: ${topics}`);
console.log(`Search Keywords: ${search}`);
console.log(`Practice Problems: ${practice}`);
console.log(`Projects: ${projects}`);
console.log(`Assignments: ${assignments}`);
console.log(`Total: ${topics + search + practice + projects + assignments}`);



