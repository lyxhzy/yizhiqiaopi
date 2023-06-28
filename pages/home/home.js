// pages/home/home.js
import { request } from "../../request/index.js"; 
const App=getApp();  //设置顶部标题栏的高度
Page({
  /**
   * 页面的初始数据
   */
  data: {
    categoryList: {  
      pageone: [
        {
        name: "导入课",
        src:  "../../icon/daoru.jpg",     
        url: "/pages/daoru/daoru"
      },
      {
        name: "岁月篇",
        src:  "../../icon/suiyue.jpg",
        url: "/pages/suiyue/suiyue"
      },
      { 
        name: "文化篇",
        src:  "../../icon/wenhua.jpg",
        url: "/pages/wenhua/wenhua"
      },
      
    ],

    pagetwo: [
      {
        name: "党史篇",
        src:  "../../icon/dangshi.jpg",
        url: "/pages/dangshi/dangshi"
      },
      {
      name: "家风篇",
      src:  "../../icon/jiafeng.jpg",
      url: "/pages/jiafeng/jiafeng"
    },
    {  
      name: "总结课",
      src:  "../../icon/sucai.jpg",
      url: "/pages/jiaocai/jiaocai"
    },
    {
      name: "微课", 
      src:  "../../icon/haoke.jpg",
      url:  "/pages/haoke/haoke"
    }
    ] }  ,
    tabs:[  
      {
        id: 0,
        value: "推荐",
        isActive:false
      },
      {
        id: 1,
        value: "精品教材",
        isActive: true 
      },
      {
        id: 2,
        value: "玩中学",
        isActive: false
      },
      {
        id: 3,
        value: "侨批图书馆",  
        isActive: false  
      },
      {
        id: 4,  
        value: "线下招募",  
        isActive: false
      }
    ],
    tuijianList:[],  //首页好课推荐的图片  
    imageList:[],
    bookList:[
      {
        id:0, 
        src:"../../icon/liulan1.jpg"  
      },
      {
        id:1,
        src:"../../icon/liulan2.jpg"
      },
      {
        id:2,
        src:"../../icon/liulan3.jpg"
      }  
    ],
    wenxianList:[],
    dianzishuList:[],
    baomingList:[],  //线下招募的图片
    shudanList:[],  //侨批图书馆的展示图片
    xianxiaList:[], //线下招募的展示图片
    youjuList:[],  //玩中学的展示图片
    redList:[],  //推荐的展示图片
    jpjcList:[], //精品教材的展示图片
    JuJiList:[],

    jiaocaiList:[
      {
        url:"/pages/aiguo/aiguo",
        src1:"../../icon/num1.jpg",
        title:"爱国篇一 《抵制日货》"
      },
      {
        url:"/pages/jiafengpian/jiafengpian",
        src1:"../../icon/num2.jpg",
        src2:"{{JuJiList[1].img}}",
        title:"家风篇一 《见字如面》"
      },
      {    
        url:"/pages/qiaopi/qiaopi",
        src1:"../../icon/num3.jpg",
        src2:"{{JuJiList[2].img}}",
        title:"侨批业篇一 《风雨送批路》"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //1.发送异步请求获取电子书的数据
    request({ url : "https://island.caiicaii.top/userImg/listE_book" })
    .then((result)=>{
      this.setData({    
        dianzishuList: result.data.data   
      })
    })   

    request({ url : "https://island.caiicaii.top/userImg/listLiterature" })
    .then((result)=>{
      this.setData({    
        wenxianList: result.data.data     
      })
    })  
   //精彩信件推荐
    request({ url : "https://island.caiicaii.top/firstPage/listMessage" })
    .then((result)=>{
      this.setData({      
        imageList: result.data.data     
      })
    })  
    //首页好课推荐
    request({ url : "https://island.caiicaii.top/firstImg/listGoodCourse" })
    .then((result)=>{ 
      this.setData({      
        tuijianList: result.data.data     
      })
    })  

    //线下招募的图片
    request({ url : "https://island.caiicaii.top/url/listBaoming" })
    .then((result)=>{ 
      this.setData({      
        baomingList: result.data.data       
      })
    })  

    //侨批图书馆的展示图片
    request({ url : "https://island.caiicaii.top/url/listBook" })
    .then((result)=>{ 
      this.setData({      
        shudanList: result.data.data       
      })
    })  
    //线下招募的展示图片
    request({ url : "https://island.caiicaii.top/url/listZhaomu" })
    .then((result)=>{ 
      this.setData({      
        xianxiaList: result.data.data       
      })
    }) 
    //玩中学的展示图片
    request({ url : "https://island.caiicaii.top/url/listEmail" })
    .then((result)=>{ 
      this.setData({      
        youjuList: result.data.data       
      })
    })   
    //推荐的展示图片
    request({ url : "https://island.caiicaii.top/url/listRed" })
    .then((result)=>{ 
      this.setData({      
        redList: result.data.data       
      })
    })   

    //精品教材的展示图片
    request({ url : "https://island.caiicaii.top/url/listWenhua1" }) 
    .then((result)=>{ 
      this.setData({      
        jpjcList: result.data.data       
      })
    })   

    //创意剧集排行榜的数据获取
    request({ url : "https://island.caiicaii.top/firstImg/listDrama" }) 
    .then((result)=>{ 
      this.setData({      
        JuJiList: result.data.data         
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