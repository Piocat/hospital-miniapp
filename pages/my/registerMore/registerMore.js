const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
  },
  onLoad(options) {
    this.setData({
		register_id : options.register_id,
		user_id : app.gGetStorage('userInfo').user_id
	})
  },
  onReady() {
    this.selectRegisterMore()
  },
  
  selectRegisterMore(){
  	  wx.showLoading()
  	  var that = this
  	  app.gRequest({
  	  		  url : 'register/select_register_more',
  	  		  data : {
				 register_id :  that.data.register_id,
				 token : app.getToken()
			  }
  	  }).then(function(res){
  	  		  wx.hideLoading()
  	  		  if(res.code == 200){
  	  			  that.setData({
  	  				  list : res.data
  	  			  })
  	  		  }else{
  	  			  app.showModal(res.msg)
  	  		  }
  	  })
  },
  
  //取消挂号预约
  cancelRegister(){
	  var that = this
	  wx.showModal({
		  title:'取消预约',
		  content:'确定取消预约？',
		  success:function(res){
			  if(res.confirm){
				  wx.showLoading()
				  app.gRequest({
				  		  url : 'register/cancel_register',
				  		  data : {
				  				  register_id : that.data.register_id,
				  				  user_id : that.data.user_id,
				  				  token : app.getToken()
				  			  }
				  }).then(function(res){
				  		  wx.hideLoading()
				  		  if(res.code == 200){
				  			  app.showModal(res.msg)
				  				  setTimeout(function () {
				  				      wx.navigateBack()
				  				  }, 2000) //延迟时间 这里是1秒
				  		  }else{
				  			  app.showModal(res.msg)
				  		  }
				  })
			  }
		  }
	  })
  }
})