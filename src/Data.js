

let dataTodo = {
    text : ['a','b'],
    push : function pushData(params) {
        dataTodo.text.push(params)
    },
    remove : function removeData(index) {
        dataTodo.text = dataTodo.text.filter((item)=>{
            return item !== dataTodo.text[index]
        })
        console.log(dataTodo.text);
    }
}

// dataTodo.push(4)
// dataTodo.push('ko')
// dataTodo.remove(0)
// console.log(dataTodo.text);

export default dataTodo









