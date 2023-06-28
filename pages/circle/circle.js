// pages/circle/circle.js
import { request } from "../../request/index.js"; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[  
      {
        id: 0,
        value: "关注",
        isActive: true
      },
      {
        id: 1,
        value: "推荐",
        isActive: false
      } 
    ],
    circleList:[
      {
        url:"/pages/zhaomu/zhaomu",
        src:"../../icon/huodongzhaomu.png",
        title: "#线下活动招募"
      },
      {
        url:"/pages/daka/daka",
        src:"../../icon/huace.png",
        title: "#每日打卡"
      },
      {
        url:"/pages/share/share",
        src:"../../icon/share.png",
        title: "#今日分享"
      },
      {
        url:"/pages/huace/huace",
        src:"../../icon/daka.png",
        title: "#画册"
      }  
    ],
    fabuList:{
      list1:[
        {
          touxiang:"../../icon/touoxiang.png",
          username:"ab~",
          level: "等级lv1",
          guanzhu:"../../icon/guanzhu.png",
          title:"今天是我学习侨批课程的第二天，打卡！",
          img_show:[
            "../../icon/daka.png",
            "../../icon/share.png",
            "../../icon/huodongzhaomu.png"  
          ]
        }
      ]
    },
    shequList:[],//社区的展示图片
  }  ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //1.发送异步请求获取圈子的的展示图片
     request({ url : "https://island.caiicaii.top/url/listCircle1" })
     .then((result)=>{
       this.setData({    
         shequList: result.data.data   
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