const app = getApp()
const token = app.globalData.token
Page({
    showToast: function(){
        wx.showToast({
            title: 'loading...',
            icon: "loading",
            duration: 2500,
            image: "../../images/2.gif",
            mask: true,
            success: function(){
                console.log("success")
            },
            fail: function () {
                console.log("fail")
            },
            complete: function () {
                console.log("complete")
            },
        })

    },
    showModal: function(){
        wx.showModal({
            title: '你好吗',
            content: '我是谁，没有绝对安全的系统',
            cancelColor: "#f00",
            // showCancel: false,
            cancelText: "不好",
            success: function(res){
                console.log(res)
            }
        })
    },
    showLoading: function(){
        wx.showLoading({
            title: '加载中。。。',
            mask: true,
        })
        setTimeout(function(){
            wx.hideLoading()
        }, 2000)
    },
    showActionSheet: function(){
        wx.showActionSheet({
            itemList: ["你好", "我好", "大家好"],
            itemColor: "#fc0",
            success: function(res){
                console.log(res)
                console.log(res.tapIndex)
            },
            fail: function(res){
                console.log(res.errMsg)
            },
        })
    },
    onShareAppMessage: function(){
        return {
            title: "你好啊",
            path: "pages/index/index",
            imageUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1399387690,172148506&fm=11&gp=0.jpg"
        }
    }
})