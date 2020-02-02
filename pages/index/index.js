Page({
    data: {
        index_num: 0,
        goods: ["衣服", "裤子", "鞋子", "帽子"],
        isShow: true,
        index: 0,
        isShowMsg: ["隐藏", "显示"],
    },
    handleIsShow: function(){
        this.data.isShow ? this.setData({isShow: false, index: 1}) : this.setData({isShow: true, index: 0})
    },
    handleSum: function(event){
        console.log(event);
        this.setData({
            index_num: this.data.index_num + 1,
        });
    },
    handleItem: function(event) {
        console.log(event)
        const index = event.detail.dataset.index
        const item = this.data.goods[index]
        console.log(item)
    },
    handleIncrement: function(){
        const myevent = this.selectComponent(".myevent")
        // myevent.setData({ dnum: myevent.data.dnum + 1})
        myevent.increment()
        
    },
    handleUserInfo: function(event){
        console.log(event)
    },
    onPageScroll: function(obj){
        console.log(obj)
    },
    onPageScroll: function(obj){
        console.log(obj)
    },
    onReachButtom: function(obj){
        console.log(obj)
    },
    onPullDownRefresh: function(){
        console.log(1234567)
    }
})