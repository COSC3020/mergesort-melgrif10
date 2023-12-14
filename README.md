[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12562091&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file. 

For the worst case scenario the original array has the greatest element at the begining and descends to the smallest element at the end. The outer loop of the mergeSort function increases the size of the subarrays by 2 each iteration, therfore it will iterate $log_2(n)$ times. The inner loop goes through the entire array once, therfore it will iterate n times. In the worst case scenario the merge function will have to compare each element in the array once. Using this information it can be deducted that the worst-case time complexity would be $O(nlog(n))$ 
The time complexity for this mergeSort program is in-place so eachtime an element from the right array is shifted to the left the program has to copy elements multiple times. This leads to extra work especially with a reverse sorted list. The worst case O complexity would still $O(nlog(n))$ but in practice it would be less efficient than the regular non-in-place version of mergesort.