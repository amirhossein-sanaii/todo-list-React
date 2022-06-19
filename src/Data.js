

let dataTodo = {
    text : [],
    push : function pushData(params) {
        dataTodo.text.push(params)
    },
    remove : function removeData(index) {
        // console.log(dataTodo.text);

        dataTodo.text.splice(index,1) 
        return dataTodo.text
    }
}

// dataTodo.push(4)
// dataTodo.push('ko')
// dataTodo.remove(0)
// console.log(dataTodo.text);

export default dataTodo









