// components/my-slot/my-slot.js
Component({
    /**
     * 组件的属性列表，可以给组件出入数据
     */
    properties: {

    },

    /**
     * 组件的初始数据，定义组件内部的初始化数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    /**
     * 定义组件的配置选项
     */
    options: {
        // 在使用多插槽时需要设置为true
        multipleSlots: true,
        // 
        styleIslolation: true,
    },
    /**
     * externalClasses 数组
     */
    externalClasses: ["box1", "box2"],
    /**
     * 监听properties/data属性值的改变
     */
    observers: {
        num: function(){
            console.log(num)
        }
    },
    // 组件中的生命周期函数（组件本身的生命周期，页面的生命周期）
    // 1. 页面的生命周期函数
    pageLifetimes: {
        show: function(event){
            console.log(event)
        },
        hide: function(event){
            console.log(event)
        },

    },
    // 2. 组件的生命周期函数
    lifetimes: {
        created: function(){
            console.log("组件created")
        },
        attached: function(){
            console.log("组件attached")
        },
        ready: function () {
            console.log("组件ready")
        },
        move: function () {
            console.log("组件move")
        },
        detached: function () {
            console.log("组件detached")
        },

    }

})
