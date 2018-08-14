/**
 * File: Sort
 * Created by liaoxianzhi
 * Date: 2018/7/31
 * Time: 9:58
 *
 */
// var sortArray = [5,4,6,8,9,10,2]
var sortArray = [4,2,5,6,8,9,10]

// 冒泡
function Bubble(sortArray) {
    var isSwap = false
    for(var i = 0; i < sortArray.length - 1; i++){
        isSwap = false
        for(var j = 0; j < sortArray.length - i - 1;j++){
            if(sortArray[j] > sortArray[j + 1]){
                var temp = sortArray[j]
                sortArray[j] = sortArray[j + 1]
                sortArray[j + 1] = temp
                isSwap = true
            }
        }
        if(!isSwap){
            return
        }
        console.log(JSON.stringify(sortArray))
    }
    return sortArray
}

// 快排1
// function Quick(array) {
//     if(array.length <= 1){
//         return array
//     }
//     var preIndex = Math.floor(array.length / 2)
//     var preValue = array.splice(preIndex,1)[0]
//     var left = []
//     var right = []
//     for(var i = 0; i < array.length ; i++){
//         if (array[i] < preValue){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//     }
//     var last = Quick(left).concat([preValue],Quick(right))
//     return last
// }

// 快排2
function Quick() {
    
}

// Bubble(sortArray)
Quick(sortArray)
