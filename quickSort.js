function quickSort(unsortedList){
    unsortedList = unsortedList.slice();
    var stack = [unsortedList];
    var sorted = [];
    while (stack.length) {
        var temp = stack.pop();
        var length = temp.length;
 
        if (length == 1) {
            sorted.push(temp[0]);
            continue;
        } // if
        var pivot = temp[0];
        var left = [];
        var right = [];
 
        for (var i = 1; i < length; i++) {
            if (temp[i] < pivot) {
                left.push(temp[i]);
            } else {
                right.push(temp[i]);
            } // if-else
        } // for
        left.push(pivot);
        if (right.length) {
            stack.push(right);
        } // if
        if (left.length) {
            stack.push(left);
        } // if
    } // while
}