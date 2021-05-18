function getSecondLargest(nums) {    
    var sortedArray = nums.sort(function(a,b) {return a-b});
    
    var uniqSortedArray = sortedArray.filter(function(element,index,self){
        return index === self.indexOf(element);
    })

    return uniqSortedArray[uniqSortedArray.length - 2];
}