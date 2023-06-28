// components/nav-bar/nav-bar.js
const app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuBotton: app.globalData.menuBotton,
    menuHeight: app.globalData.menuHeight,

    backList:[
      {
        img:"../../icon/back.png"
      }
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  back(){
    //返回上一个页面，并且关闭当前页面
    wx.navigateBack({
      delta: 1  
    })
  }
})
