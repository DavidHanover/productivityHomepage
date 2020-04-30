const d = new Date();
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "november",
  "december",
];
let leets = [
  {
    name: "Two Sum",
    link: "https://leetcode.com/problems/two-sum",
  },
  {
    name: "Longest Substring Without Repeating Characters",
    link:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters",
  },
  {
    name: "Longest Palindromic Substring",
    link: "https://leetcode.com/problems/longest-palindromic-substring",
  },
  {
    name: "Container With Most Water",
    link: "https://leetcode.com/problems/container-with-most-water",
  },
  {
    name: "3Sum",
    link: "https://leetcode.com/problems/3sum",
  },
  {
    name: "Remove Nth Node From End of List",
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
  },
  {
    name: "Valid Parentheses",
    link: "https://leetcode.com/problems/valid-parentheses",
  },
  {
    name: "Merge Two Sorted Lists",
    link: "https://leetcode.com/problems/merge-two-sorted-lists",
  },
  {
    name: "Merge k Sorted Lists",
    link: "https://leetcode.com/problems/merge-k-sorted-lists",
  },
  {
    name: "Search in Rotated Sorted Array",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array",
  },
  {
    name: "Combination Sum",
    link: "https://leetcode.com/problems/combination-sum",
  },
  {
    name: "Rotate Image",
    link: "https://leetcode.com/problems/rotate-image",
  },
  {
    name: "Group Anagrams",
    link: "https://leetcode.com/problems/group-anagrams",
  },
  {
    name: "Maximum Subarray",
    link: "https://leetcode.com/problems/maximum-subarray",
  },
  {
    name: "Spiral Matrix",
    link: "https://leetcode.com/problems/spiral-matrix",
  },
  {
    name: "Jump Game",
    link: "https://leetcode.com/problems/jump-game",
  },
  {
    name: "Merge Intervals",
    link: "https://leetcode.com/problems/merge-intervals",
  },
  {
    name: "Insert Interval",
    link: "https://leetcode.com/problems/insert-interval",
  },
  {
    name: "Unique Paths",
    link: "https://leetcode.com/problems/unique-paths",
  },
  {
    name: "Climbing Stairs",
    link: "https://leetcode.com/problems/climbing-stairs",
  },
  {
    name: "Set Matrix Zeroes",
    link: "https://leetcode.com/problems/set-matrix-zeroes",
  },
  {
    name: "Minimum Window Substring",
    link: "https://leetcode.com/problems/minimum-window-substring",
  },
  {
    name: "Word Search",
    link: "https://leetcode.com/problems/word-search",
  },
  {
    name: "Decode Ways",
    link: "https://leetcode.com/problems/decode-ways",
  },
  {
    name: "Validate Binary Search Tree",
    link: "https://leetcode.com/problems/validate-binary-search-tree",
  },
  {
    name: "Same Tree",
    link: "https://leetcode.com/problems/same-tree",
  },
  {
    name: "Binary Tree Level Order Traversal",
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal",
  },
  {
    name: "Maximum Depth of Binary Tree",
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree",
  },
  {
    name: "Construct Binary Tree from Preorder and Inorder Traversal",
    link:
      "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
  },
  {
    name: "Best Time to Buy and Sell Stock",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
  },
  {
    name: "Binary Tree Maximum Path Sum",
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum",
  },
  {
    name: "Valid Palindrome",
    link: "https://leetcode.com/problems/valid-palindrome",
  },
  {
    name: "Longest Consecutive Sequence",
    link: "https://leetcode.com/problems/longest-consecutive-sequence",
  },
  {
    name: "Clone Graph",
    link: "https://leetcode.com/problems/clone-graph",
  },
  {
    name: "Word Break",
    link: "https://leetcode.com/problems/word-break",
  },
  {
    name: "Linked List Cycle",
    link: "https://leetcode.com/problems/linked-list-cycle",
  },
  {
    name: "Reorder List",
    link: "https://leetcode.com/problems/reorder-list",
  },
  {
    name: "Maximum Product Subarray",
    link: "https://leetcode.com/problems/maximum-product-subarray",
  },
  {
    name: "Find Minimum in Rotated Sorted Array",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",
  },
  {
    name: "Reverse Bits",
    link: "https://leetcode.com/problems/reverse-bits",
  },
  {
    name: "Number of 1 Bits",
    link: "https://leetcode.com/problems/number-of-1-bits",
  },
  {
    name: "House Robber",
    link: "https://leetcode.com/problems/house-robber",
  },
  {
    name: "Number of Islands",
    link: "https://leetcode.com/problems/number-of-islands",
  },
  {
    name: "Reverse Linked List",
    link: "https://leetcode.com/problems/reverse-linked-list",
  },
  {
    name: "Course Schedule",
    link: "https://leetcode.com/problems/course-schedule",
  },
  {
    name: "Implement Trie (Prefix Tree)",
    link: "https://leetcode.com/problems/implement-trie-prefix-tree",
  },
  {
    name: "Add and Search Word - Data structure design",
    link:
      "https://leetcode.com/problems/add-and-search-word-data-structure-design",
  },
  {
    name: "Word Search II",
    link: "https://leetcode.com/problems/word-search-ii",
  },
  {
    name: "House Robber II",
    link: "https://leetcode.com/problems/house-robber-ii",
  },
  {
    name: "Contains Duplicate",
    link: "https://leetcode.com/problems/contains-duplicate",
  },
  {
    name: "Invert Binary Tree",
    link: "https://leetcode.com/problems/invert-binary-tree",
  },
  {
    name: "Kth Smallest Element in a BST",
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
  },
  {
    name: "Lowest Common Ancestor of a Binary Search Tree",
    link:
      "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree",
  },
  {
    name: "Product of Array Except Self",
    link: "https://leetcode.com/problems/product-of-array-except-self",
  },
  {
    name: "Valid Anagram",
    link: "https://leetcode.com/problems/valid-anagram",
  },
  {
    name: "Meeting Rooms",
    link: "https://leetcode.com/problems/meeting-rooms",
  },
  {
    name: "Meeting Rooms II",
    link: "https://leetcode.com/problems/meeting-rooms-ii",
  },
  {
    name: "Graph Valid Tree",
    link: "https://leetcode.com/problems/graph-valid-tree",
  },
  {
    name: "Missing Number",
    link: "https://leetcode.com/problems/missing-number",
  },
  {
    name: "Alien Dictionary",
    link: "https://leetcode.com/problems/alien-dictionary",
  },
  {
    name: "Encode and Decode Strings",
    link: "https://leetcode.com/problems/encode-and-decode-strings",
  },
  {
    name: "Find Median from Data Stream",
    link: "https://leetcode.com/problems/find-median-from-data-stream",
  },
  {
    name: "Serialize and Deserialize Binary Tree",
    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
  },
  {
    name: "Longest Increasing Subsequence",
    link: "https://leetcode.com/problems/longest-increasing-subsequence",
  },
  {
    name: "Coin Change",
    link: "https://leetcode.com/problems/coin-change",
  },
  {
    name: "Number of Connected Components in an Undirected Graph",
    link:
      "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph",
  },
  {
    name: "Counting Bits",
    link: "https://leetcode.com/problems/counting-bits",
  },
  {
    name: "Top K Frequent Elements",
    link: "https://leetcode.com/problems/top-k-frequent-elements",
  },
  {
    name: "Sum of Two Integers",
    link: "https://leetcode.com/problems/sum-of-two-integers",
  },
  {
    name: "Pacific Atlantic Water Flow",
    link: "https://leetcode.com/problems/pacific-atlantic-water-flow",
  },
  {
    name: "Longest Repeating Character Replacement",
    link:
      "https://leetcode.com/problems/longest-repeating-character-replacement",
  },
  {
    name: "Non-overlapping Intervals",
    link: "https://leetcode.com/problems/non-overlapping-intervals",
  },
  {
    name: "Subtree of Another Tree",
    link: "https://leetcode.com/problems/subtree-of-another-tree",
  },
  {
    name: "Palindromic Substrings",
    link: "https://leetcode.com/problems/palindromic-substrings",
  },
];
let systems = [
  "Design commenting system",
  "Design subscription based sports website which can display scores, game status, history for any games.",
  "Design Netflix => search, video serving, authentication, encryption, dns lookup,caching strategy,serving multi quality video etc",
  "Design a Latency Management System",
  "Design a Library Management System",
  "Design a Notification service",
  "Design ESPN/Cricinfo/Cricbuzz",
  "Design Uber",
  "Design Whatsapp",
  "Design Quora",
  "Design Lookahead system",
  "Design Google Docs/ Collaborative Editing service",
  "Design URL Shortner service",
  "Design RedBus",
  "Design BookMyShow",
  "Design Domain Backdooring system",
  "Design Amazon Locker",
  "Design Movies Review Aggregator System > Data should be fetched from movie rating providers like imdb, rotten tomatoes, etc",
  "Design offline caching system for Ecommerce platform",
  "Design Amazon E-commerce",
  "Design Online chess game/Multiplayer game",
  "Design gaming platform. A number of games can be hosted on this platform. User can login and select a particular game",
  "Design a last-mile delivery platform in case of peak seasons",
  "Design Zomato/Swiggy/Foodpanda",
  "Design Meeting Calendar system",
  "Design Spotify",
  "Design Promo Code API by taking into account Amazon's customer traffic into picture",
  "Design Vending machine with following functionalities ==> Three types of Users : User, Operator, Admin User can select and buy multiple items at a time. Money can be inputted multiple times (you will get the item if there is a time gap > 30 secs). He can also do window shopping (see only the prices of items and buy nothing) Operator can load the items and mark the items as expired if needed, gets notified if a product goes out of stock. Admin can own multiple vending machines, he should have a analytics report of the items purchased in a month. He can also change the prices directly and it should reflect in all the vending machines which he owns.Exception handling in all the edge cases",
  "Design splitwise",
  "Design Google pay at scale",
  "Design a Job schedular => scalability, fault tolerance, high availability, how scheduler picks up job, how will you take care where one job can run for 30 min and one for 30 hour, how will you distribute jobs on servers. Based on frequency & time how will you execute them ? How will you notify back the user about start/stop or completion of a job ? How will your system know if a job is killed / terminated due to unknown reasons ?",
  "Design Meeting Scheduler",
  "Design Debugger",
  "Design Automatic Parking System",
  "Design a ranking system. We have an infinite supply of words ending with ‘.’ We need to implement a reader program that ranks words on the basis of certain criteria Example: This is my cat. This house belongs to my uncle An amazing country with so many tourist places And so on.. Ranking System criteria : rank the words on the basis of occurrence, for example Output : This:2, is:2, my:2… highest rank (sorted asc or desc based on provided flag) Design it completely and scalable Ranking System",
  "Design Amazon Cart system",
  "Design Google Search",
  "Design Twitter",
  "Design Facebook",
  "Design Snapchat",
  "Design Instagram",
  "Design App-store",
  "Design a music player application",
  "Design a distributed LRU Cache",
  "Design Gmail",
  "Design a recommendation system",
  "Design a food sharing application",
  "Design payment module for Uber app",
  "Design Truecaller type of system",
  "Design performance management system (appraisal workflow system) that can be used across companies.",
  "Design comment system like disqus",
  "Design flight system",
  "Design Tinder",
  "Design survey site like surveymonkey",
  "Design a geographically partitioned multi-player card game, that supports multiple players, multiple games at a time. Each game will have one contractor like ones we have in a bar, He can play a game or just watch it. Integrate payment systems",
  "Design a kind of kindle fire application where we can subscribe news channel and read the news from all publishers as a digital format",
  "Design a realtime Video chat like Google Duo",
  "Design News paper & Magazine subscription system",
  "Design a system like Hackerrank/Codechef/Topcoder",
  "Design a concurrent Hashmap",
  "Design an ATM Machine system which can support massive amount of transactions",
  "Design Airport Baggage system",
  "Design Flight Information Display system",
  "Design a conference room booking system for a company which can have offices in multiple cities, each city can have multiple buildings, each building can have multiple floors, each floor can have multiple rooms. Each room can have features like capacitiy, video conferencing available, etc.",
  "Design newsfeed feature of Facebook",
  "Design an efficient Mail delivery system",
  "Design like/dislike feature at Youtube scale.",
  "Design Paypal",
  "Design Air traffic control system",
  "Design a realtime service which tells your friends who is online",
  "Design Google Maps",
  "Design Grammarly",
];
let courses = [
  {
    title: "CS50 AI with Python",
    URL:
      "https://courses.edx.org/courses/course-v1:HarvardX+CS50AI+1T2020/course/",
  },
  {
    title: "Junior-to-Senior",
    URL:
      "https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/learn/",
  },
  {
    title: "Ethical Hacking",
    URL: "file:///E:/Courses/practical-ethical-hacking",
  },
  {
    title: "Traversy: React front-to-back",
    URL: "https://www.udemy.com/course/modern-react-front-to-back/learn",
  },
  {
    title: "NestJS: Modern Typescript Backend Development",
    URL: "https://www.udemy.com/course/nestjs-zero-to-hero/learn/",
  },
  {
    title: "Advanced CSS",
    URL: "https://www.udemy.com/course/advanced-css-and-sass/learn",
  },
];
//set up random generator for leetcode
//and also set up the date for the HN thread
var thisMonth = `${months[d.getMonth()]}-${d.getFullYear()}`;
var todaysLC = leets[Math.ceil(Math.random() * 74)];
var todaysSystem = systems[Math.ceil(Math.random() * 72)];
var todaysCourse = courses[Math.ceil(Math.random() * 6)];
//set up all the anchors..... hn = HackerNews lc = LeetCode
var hnThreadA = document.createElement("a");
var lcA = document.createElement("a");
var linkedinA = document.createElement("a");
var systemA = document.createElement("a");
var courseA = document.createElement("a");
//setting up all the list item parents
var hnThreadLI = document.createElement("li");
var lcLI = document.createElement("li");
var linkedinLI = document.createElement("li");
var systemDes = document.createElement("li");
var courseLI = document.createElement("li");
courseA.href = todaysCourse.URL;
courseA.innerHTML = `Course: ${todaysCourse.title}`;
courseA.target = "_blank";
courseLI.appendChild(courseA);
//set up HN and append the link to the li
hnThreadA.href = `https://hnhiring.com/${thisMonth}`;
hnThreadA.innerHTML = `HN Who Is Hiring? (${thisMonth})`;
hnThreadA.target = "_blank";
hnThreadLI.appendChild(hnThreadA);
//leet code, same as above
lcA.href = todaysLC.link;
lcA.innerHTML = `Daily Leet: ${todaysLC.name}`;
lcA.target = "_blank";
lcLI.appendChild(lcA);
//finally do simple linkedin setup
linkedinA.href =
  "https://www.linkedin.com/jobs/search/?geoId=102277331&keywords=software%20engineer&location=San%20Francisco&sortBy=DD";
linkedinA.innerHTML =
  "LinkedIn - most recent postings for Software Engineer in SF";
linkedinA.target = "_blank";
linkedinLI.appendChild(linkedinA);
//set one up for beat generator
var beatLI = document.createElement("li");
var beatA = document.createElement("a");
beatA.innerHTML = "Beat Generator";
beatA.href =
  "https://davidhanover.github.io/productivityHomepage/beat-generator/";
beatA.target = "_blank";
beatLI.appendChild(beatA);
//append inner text for system design
systemA.href = `https://google.com/search?q=system+${todaysSystem}`;
systemA.target = "_blank";
systemA.innerHTML = `System Design: ${todaysSystem}`;
systemDes.appendChild(systemA);
//get the list of links and append all these elements
var links = document.getElementById("links");
links.appendChild(lcLI);
links.appendChild(hnThreadLI);
links.appendChild(linkedinLI);
links.appendChild(beatLI);
links.appendChild(systemDes);
links.appendChild(courseLI);
