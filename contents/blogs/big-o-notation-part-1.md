---
title: "Let's talk about Big O notation! ( 1 )"
slug: "big-o-notation-part-1"
date: "2025-02-28"
meta_data: {tags: ["BigO"]}
---

Hello everyones, It’s been a while. During these days, I have been LeetCoding and I want to share some methods (algorithms) that I have learned.  Different people have different opinions on doing LeetCode, anyway it’s better than doing nothing. Right?

There are a lot of problems on LeetCode, but every problem has at least one way (algorithm) to solve it. So, instead of trying to remember the answer, learning the algorithm saves time and boosts your problem solving skills. But before learning algorithms, you need to learn about performance measurements like time complexity and space complexity (express using Big O notation: eg: O(n), O(log n)). If you don’t know how to measure the performance of the algorithm, you don’t know how to improve it for better performance and don’t know where to use it correctly. For that saying, I want to share the basics of these measurements. As I said earlier, because this is from my learning, feel free to correct me if you find something incorrect.

When it comes to performance measuring, there are two main measurements. Time complexity and Space complexity. Before diving into these measurements, let’s learn about *Big O notation*.

In Big O notation, n expresses the number of operations in time complexity and allocated memory space in space complexity.

Big O notation focuses on worst-case growth which means how an algorithm's runtime or space usage increases in the worst possible scenario.

### **Examples of Worst-Case Growth:**

Searching in an Unsorted Array (Linear Search); 

```
function linearSearch(arr, target) {
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] === target) {
             return i;
         }
     }
     return -1;
}
```


✅ Best Case: O(1) → The target is the first element.
❌ Worst Case: O(n) → The target is the last element or not present.

 But as I said before, we have to notate O(n) for this function.

There is something to talk about Big O notation like dropping constant factors and lower order terms, but I have characters limits. So, I will end up with these and I will talk about it in another post.