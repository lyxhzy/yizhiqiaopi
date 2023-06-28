// pages/store/store.js
import { request } from "../../request/index.js";   
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    


    //被点击的左侧的菜单
    index: 0,
    curNav: 0,

    goodsList:[
      {
        src:"../../icon/shoujike.jpg",
        des:"手机壳"
      },
      {
        src:"../../icon/erji.jpg",
        des:"耳机壳"
      },
      {
        src:"../../icon/pingbanke.jpg",
        des:"平板壳"
      },
      {
        src:"../../icon/guajian.jpg",
        des:"挂件"
      },
      {
        src:"../../icon/fanbubao.jpg",
        des:"帆布包"
      }
    ],
    tabs:[    
      {
        id:0,
        value:"热卖区",
        isActive:true,  
        
      },
      {
        id:1,
        value:"周边",
        isActive:false,
        
      },
      {
        id:2,
        value:"畅销画册",
        isActive:false,
      
      },
      {
        id:3,
        value:"福利区",
        isActive:false,
        
      }
    ],
    shijiList:[],  //商城展示图片  
    zhoubianList:[],   //商城周边商品数据
    huaceList:[],   //商城画册数据
    fuliList:[] ,   //商城福利区数据
    remaiList:[]   //热卖数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //商城展示图片  
    request({ url : "https://island.caiicaii.top/url/listShiji" })
    .then((result)=>{   
      this.setData({      
        shijiList: result.data.data         
      })
    })  

    //热卖区商品图片
    request({ url : "https://island.caiicaii.top/shop/listPeriphery" })
    .then((result)=>{   
      this.setData({      
        zhoubianList: result.data.data          
      })
    })  

    //畅销画册图片
    request({ url : "https://island.caiicaii.top/shop/listPicture" })
    .then((result)=>{   
      this.setData({      
        huaceList: result.data.data           
      })
    })  

    //福利区图片
    request({ url : "https://island.caiicaii.top/shop/listWelfare" })
    .then((result)=>{     
      this.setData({      
        fuliList: result.data.data           
      })
    })  

    //热卖区商品图片      
    request({ url : "https://island.caiicaii.top/shop/listHot" })
    .then((result)=>{     
      this.setData({          
        remaiList: result.data.data           
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