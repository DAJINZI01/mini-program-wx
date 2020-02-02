// components/myproperty/myproperty.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // title: String,
        // content: String,
        title: {
            type: String,
            value: "标题",
            observer: function(newValue, oldValue){
                console.log(newValue, oldValue);
            }
        },
        content: {
            type: String,
            value: "内容",
            observer: function(newValue, oldValue){
                console.log(newValue, oldValue)
            }
        }
    },
    externalClasses: [
        "tc",
    ],

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
