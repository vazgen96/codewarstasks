// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.

function check(arr,x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
            return true
        }
    }
    return false
}

function check(arr,x) {
    return arr.includes(x)
}