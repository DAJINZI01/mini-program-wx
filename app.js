const TOKEN = "token"

// 注册一个小程序实例
App({
    globalData: {
        token: ""
    },
    onLaunch: function(){
        // 1. 从本地取出token
        const token = wx.getStorageSync(TOKEN)
        if(token && token.length){
            // 验证token是否过期
            this.check_token(token)
        }else{
            // 2. 登录操作
            // code 只有5分钟的有效期
            this.myLogin()
        } 
    },
    check_token: function(token){
        wx.request({
            url: 'http://123.207.32.32:3000/auth',
            header: {
                token: token,
            },
            method: "post",
            success: function(res){
                console.log(res.data.message)
            },
            fail: function(res){
                console.log(res)
            }

        })
    },
    myLogin: function(){
        wx.login({
            success: (res) => {
                // 1. 获取code
                const code = res.code
                // 2. 获取token，向自己的服务器发送请求
                wx.request({
                    url: 'http://123.207.32.32:3000/login',
                    method: "post",
                    data: {
                        code: code
                    },
                    success: (res) => {
                        this.globalData.token = res.data.token
                        console.log(this.globalData.token)
                        // 3. 本地存储
                        wx.setStorageSync(TOKEN, this.globalData.token)
                    },
                })
            }
        })
    }
});

