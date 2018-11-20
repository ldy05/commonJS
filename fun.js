//操作数组的方法,参数基本是item,index


let arr = [1,2,3,4,5];

for(var i=0;i<arr.length;i++){
    console.log(arr[i],i);
}


//1 forEach
arr.forEach(function(item,index){
    console.log(item,index);
});

for(let key in arr){
    console.log(key);
}

//2 filter  是否操作原数组:否   返回结果:新数组    回调函数返回结果  如果返回true 表示这一项放到新数组中  用法(删除)
let newAry = [2,3,4,6,9].filter(function(item){//过滤
    return item>2&&item<5;
});
console.log(newAry);

//3 map 映射  将原有的数组映射成一个新数组    用法(更新)
//是否操作原数组:否   返回结果:新数组    回调函数返回结果  回调函数中返回什么,这一项就是什么
let arr1 = [1,2,3].map(function(item){
    return `<li>${item}</li>`;   //"<li>"+item+"</li>"  ``是es6中模板字符串,遇到变量用${}取值
});

console.log(arr1.join(""));


//4 includes 返回boolean 和indexof
let arr3 = [2,4,5,6,77];
console.log(arr3.includes(5));

//5 find 返回找到的那一项   不会改变原数组  回调函数中 返回true表示找到了,停止循环,找不到返回undefined

//找到具体某一项用find

let resule = arr3.find(function(item){
   return item.toString().indexOf(77)>-1;
});

console.log(resule);


//6 some 找ture  找到true后停止,返回true,找不到返回false
//7 every 找false  找到false后停止 返回false




//8 reduce 收敛 4个参数  返回的是叠加后的结果,回调函数返回的结果,原数组不会变


[1,2,3,4,5].reduce(function(prev,next,index,item){
    console.log(prev,next);
    return 100;//本次的返回值作为下一次的prev
});

//举个栗子,es6用reduce方法求和

let sum = [2,4,5,67,9].reduce(function(prev,next){
    console.log(prev,next);
    return prev+next;
});

console.log(sum);

//原始求和方法
var cur_arr = [1,2,4,5,6,7];
function sum1(arr){
    var sum=0;
    for (var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(sum1(cur_arr));

//复杂点

let sum2 = [{pri:20,count:2},{pri:20,count:3},{pri:20,count:5}].reduce(function(pre,next){
    return  pre+next.pri*next.count;
},0);//第一个参数是回调函数,第二个参数是默认指定第一次prev

console.log(sum2);


//二维数组变成一维数组,*concat() 方法用于连接两个或多个数组

let newArr1 = [[1,2,4],[2,3,5],[44,5,7]].reduce(function(prev,next){
    console.log(prev,next);
    return prev.concat(next);
});

console.log(newArr1);






















