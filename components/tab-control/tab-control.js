// components/tab-control/tab-control.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        items: {
            type: Array,
            value: ["条目1", "条目2", "条目3", "条目4", "条目5"]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentIndex: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleTap: function (event) {
            const dataset = event.currentTarget.dataset
            this.setData({currentIndex: dataset.index})
            // console.log(event)
            this.triggerEvent("getItemIndex", {dataset: dataset})
        }
    }
})
