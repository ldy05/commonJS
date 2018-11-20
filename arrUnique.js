/*20181010*/

var unique = unique||{};


unique.one = function(arr){
        var arrNew = [];
        for(var i = 0;i<arr.length;i++){
            if(arrNew.indexOf(arr[i])==-1){
                arrNew.push(arr[i]);
            }
        }
        return arrNew;
};
unique.two=function(arr){
    for(var i = 0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
};

unique.three = function(arr){
    var arrNew = [];
    for(var i=0;i<arr.length;i++){
        if(!arrNew.includes(arr[i])){
            arrNew.push(arr[i]);
        }
    }
    return arrNew
};
//es6
unique.four=function(arr){
    return  Array.from( new Set(arr));
};








