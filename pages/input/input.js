// pages/input/input.js
Page({

    handleinput: function(event){
        console.log(event.detail.value)

    },
    handlefocus: function (event){
        console.log(event)
    },
    handleblur: function (event){
        console.log(event)
    }
})