# quickSort-algorithm
Time complexity = O(n)

# Pesudocode 
   function quickSort (L: list of unsorted items)
     stack := [L]
     S := empty list
     while stack.length exists do:
       temp := stack.pop()
       length := length(temp)
       if length is equal to 1 then
         S.push(temp[0])
         continue
      pivot := temp[0]
      left := empty list
      right := empty list
      for i to length do:
        if temp[i] < pivot
          left.push(temp[i])
        if temp[i] > pivot
          right.push(temp[i])
      left.push(pivot)
      if length(right) exists then
        stack.push(right)
      if length(left) exists then
        stack.push(left)
      return S
  end-function
