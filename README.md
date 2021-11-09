# quickSort-algorithm
Time complexity = O(n)
# Pesudocode 
1   function quickSort (L: list of unsorted items)
2     stack := [L]
3     S := empty list
4     while stack.length exists do:
5       temp := stack.pop()
6       length := length(temp)
7       if length is equal to 1 then
8         S.push(temp[0])
9         continue
10      pivot := temp[0]
11      left := empty list
12      right := empty list
13      for i to length do:
14        if temp[i] < pivot
15          left.push(temp[i])
16        if temp[i] > pivot
17          right.push(temp[i])
18      left.push(pivot)
19      if length(right) exists then
20        stack.push(right)
21      if length(left) exists then
23        stack.push(left)
24      return S
25  end-function
