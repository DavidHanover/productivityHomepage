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
//set up random generator for leetcode
//and also set up the date for the HN thread
var thisMonth = `${months[d.getMonth()]}-${d.getFullYear()}`;
var todaysLC = leets[Math.round(Math.random() * 75) - 1];
//set up all the anchors..... hn = HackerNews lc = LeetCode
var hnThreadA = document.createElement("a");
var lcA = document.createElement("a");
var linkedinA = document.createElement("a");
//setting up all the list item parents
var hnThreadLI = document.createElement("li");
var lcLI = document.createElement("li");
var linkedinLI = document.createElement("li");
//set up HN and append the link to the li
hnThreadA.href = `https://hnhiring.com/${thisMonth}`;
hnThreadA.innerHTML = `HN Who Is Hiring? (${thisMonth})`;
hnThreadA.target = "_blank";
hnThreadLI.appendChild(hnThreadA);
//leet code, same as above
lcA.href = todaysLC.link;
lcA.innerHTML = todaysLC.name;
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
//get the list of links and append all these elements
var links = document.getElementById("links");
links.appendChild(lcLI);
links.appendChild(hnThreadLI);
links.appendChild(linkedinLI);
links.appendChild(beatLI);
