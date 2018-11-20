//箭头函数  不具备this和arguments

//写法规则,去掉function关键字,参数有一个时候可以省略小括号,小括号和大括号之间有一个箭头,如果没有大括号就直接返回值,有大括号必须写return

//自己加没有this就找上一级的this

//如何更改this指向
//1.call  apply  bind
//2.var  that = this;
//3.=>


//怎么写箭头函数
//举个栗子

/*
function a(b){//执行函数必须有return
    return b+1;
}
*/






let a = b =>b+1;

//下面转换成箭头函数
/*function s(b){
    return function (c){
        return b+c;
    }
}
*/







let s = b => c =>b+c;//俩箭头以上的叫高阶函数
console.log(s(1)(2));

//什么是闭包:函数执行的一瞬间叫闭包,(不销毁的作用域),当执行后返回的结果是引用数据类型,被外界变量接受,此时这个函数不被销毁(模块化);
/*let bao = function (b){
    return function (c){
        return b+c;
    }
}();*/


/*[1,2,3].forEach(function(item){
    console.log(item)
});*/

[1,2,3].forEach(item=>console.log(item));


