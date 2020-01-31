// pages/scroll/scroll.js
Page({
    data: {
        imagePath: []
    },

    chooseAlbum: function(){
        wx.chooseImage({
            success: (res) => {
                this.setData({
                    imagePath: res.tempFilePaths
                })
            },
        })
    },

    handlescroll: function(event){
        console.log(event)
    }
})