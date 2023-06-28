// pages/learn/learn.js
import { request } from "../../request/index.js";     
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[  
      {
        id: 0,
        value: "课程",
        isActive: true
      },
      {
        id: 1,
        value: "教材",
        isActive: false
      },
      {
        id: 2,
        value: "练习室",  
        isActive: false
      }  
    ],
    tuijianList:[]
    


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   //获取学习页面中的课程内容
    request({ url : "https://island.caiicaii.top/firstImg/listGoodCourse" })
    .then((result)=>{ 
      this.setData({      
        tuijianList: result.data.data     
      })
    })  

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  },

   //标题点击事件
 handleTabsItemChange(e){  
  //获取被点击的标题索引 
  const index=e.detail.index;   
  //修改源数组      
  let tabs =this.data.tabs;  
  tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);  
  //赋值到data中
  this.setData({  
    tabs  
 })  
}
})