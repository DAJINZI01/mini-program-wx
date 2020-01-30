// pages/wxml/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        time: (new Date()).toString(),
        a: 10,
        b: 20,
        c: 30,
        name: "张三",
        condition: true,
        length: 7,
        students: [
            { "name": "zhangsan", "age": 20 },
            { "name": "lisi", "age": 32 },
            { "name": "wangwu", "age": 41 },
            { "name": "zaoliu", "age": 21 },
        ],
        objectArray: [
            { "id": 1, "unique": "id_1" },
            { "id": 2, "unique": "id_2" },
            { "id": 3, "unique": "id_3" },
            { "id": 4, "unique": "id_4" },
        ],
        numberArray: [1, 2, 3, 4],
        item: {
            "index": 0,
            "msg": "this is a message.",
            "time": (new Date()).toLocaleDateString()
        },
        // 样式
        color: "#ff0",
        fontsize: "50rpx",

    },

    switch: function(e){
        const length = this.data.objectArray.length
        for (let i = 0; i < length; ++i) {
            const x = Math.floor(Math.random() * length)
            const y = Math.floor(Math.random() * length)
            const temp = this.data.objectArray[x]
            this.data.objectArray[x] = this.data.objectArray[y]
            this.data.objectArray[y] = temp
        }
        this.setData({
            objectArray: this.data.objectArray
        })
    },
    addToFront: function (e) {
        const length = this.data.objectArray.length
        this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
        this.setData({
            objectArray: this.data.objectArray
        })
    },
    addNumberToFront: function (e) {
        this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
        this.setData({
            numberArray: this.data.numberArray
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("页面加载的时候执行：onLoad");
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("页面显示的时候执行：onShow")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("页面隐藏的时候执行：onHide")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})