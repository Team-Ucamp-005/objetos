//Given a sorted array, write a function that returns the index for a given element

//nums = [1,3,5,7,9,11,13]
//target = 8

const arr = ['a', 'b', 'c', 'x', 'y', 'z']

// const findMe = (arr, target) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
// }

// findMe(arr, 'b')

const findMe = (target, start, end) =>{
    if(start > end){
        return 'not found'
    }

    const middle = Math.floor((start + end) / 2)

    if(target === arr[middle]){
        return `Found it at index ${middle}`
    }

    if(arr[middle] > target){
        return findMe(target, start, middle-1)
    }

    if(arr[middle] < target){
        return findMe(target, middle+1, end)
    }
}

findMe('y', 0, 5)