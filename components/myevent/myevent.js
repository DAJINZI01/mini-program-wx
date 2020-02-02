// components/myevent/myevent.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        num: {
            type: Number,
            value: 0,
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        dnum: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleSum: function(){
            this.triggerEvent("increment", {name: "张三", age: 20})
        },
        increment: function(){
            this.setData({dnum: this.data.dnum + 100})
        }
    }
})
