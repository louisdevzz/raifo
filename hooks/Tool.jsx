const formatString = (str)=>{
    if(str.length > 63){
        return str.slice(0,63)+"..."
    }else{
        return str;
    }
}

const formatStringDescription = (str)=>{
    if(str.length > 159){
        return str.slice(0,159)+"..."
    }else{
        return str;
    }
}
const reverseArr = (input) => {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

export{
    formatString,
    formatStringDescription,
    reverseArr
}