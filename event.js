var eventLdy = {
    //绑定事件
    addEvent: function (ele, type, fn) {
        if (ele.addEventListener) {
            ele.addEventListener(type, fn);
        } else if (ele.attachEvent) {
            ele.attachEvent("on" + type, fn);
        } else {
            ele['on' + type] = fn;
        }
    },
    //获取事件对象
    getEvent: function (e) {
        e = event || window.event;
        return e;
    },
    //获取元素
    getTarget: function (e) {
        var event = this.getEvent(e);
        return event.target || event.srcElement;
    },
    //阻止默认事件
    preventDefault: function (e) {
        var event = this.getEvent(e);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //通过ID获取元素
    g: function (id) {
        return document.getElementById(id);
    },
    //获取css属性
    css: function (id, key, value) {
        document.getElementById(id).style[key] = value;
    },
    //设置元素属性
    attr: function (id, key, value) {
        document.getElementById(id)[key] = value;
    },
    //去除空格
    trim: function (str) {
        return str.replace(/^[" "||"　"]*/, "").replace(/[" "|"　"]*$/, "");// 去除头和尾
        return str.replace(/\s/g, '');//去除所有空格
        return str.replace(/(\s*$)/g, "");//去除右边所有空格
    }
}