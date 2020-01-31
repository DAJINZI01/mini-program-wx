// pages/image/image.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imagePath: []
    },
    // 选择图片函数
    chooseAlbum: function(){
        wx.chooseImage({
            success: (res) => {
                const path = res.tempFilePaths
                console.log(path)
                this.setData({
                    imagePath: path
                })
            }
        })
    }

})