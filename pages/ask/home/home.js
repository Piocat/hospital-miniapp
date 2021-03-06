var app = getApp()
Component({
  
  options: {
    addGlobalClass: true,
  },
  data: {
    elements: [{
        title: '挂号预约',
        name: 'layout',
        color: 'cyan',
        icon: 'newsfill'
      },
      {
        title: '体检预约',
        name: 'background',
        color: 'blue',
        icon: 'colorlens'
      }
    ],
	
	others:[{
		title : '添加就诊人',
		icon : 'friend',
	},{
		title : '体检报告查询',
		icon : 'form',
	}]
  },
  methods : {
	
    toLink(){
      wx.request({
        url: 'http://www.tp5.com/index.php/api/patient/select_patient', //仅为示例，并非真实的接口地址
        data: {
		  'patient_id': 10,
		  'token' : app.getToken()
        },
		method : 'POST',
        header: {
          'content-type': 'application/json', // 默认值
		  
		},
        success(res) {
          console.log(res.data)
        }
      })
    },
	  toBook(res){
		  var res = res.currentTarget.dataset.title
		  if(res == '挂号预约'){
			  wx.navigateTo({
			  			  url : "/pages/ask/chooseDepartment/chooseDepartment"
			  })
		  }else{
			  // wx.navigateTo({
			  // 			  url : "/pages/ask/chooseDepartment/chooseDepartment"
			  // })
		  }
	  },
	  toAddPatient(){
		  wx.navigateTo({
			  url : '/pages/my/addPatient/addPatient'
		  })
	  },
	  toTestList(){
	  		  wx.navigateTo({
	  			  url : '/pages/my/testResultList/testResultList'
	  		  })
	  },
	  toJump(e){
		  // console.log(e)
    //   this.toLink()
		var title = e.currentTarget.dataset.target.title
		if(title == '添加就诊人'){
			wx.navigateTo({
						  url : '/pages/my/addPatient/addPatient'
			})
		}
		if(title == '体检报告查询'){
			wx.navigateTo({
				url : '/pages/my/testResultList/testResultList'
			})
		}
		if(title == '缴费记录'){
			wx.navigateTo({
						  url : '/pages/my/addPatient/addPatient'
			})
		}
		if(title == '体检预约'){
			wx.navigateTo({
						  url : '/pages/ask/chooseTestProject/chooseTestProject'
			})
		}
		if(title == '挂号预约'){
			wx.navigateTo({
						  url : '/pages/ask/chooseDepartment/chooseDepartment'
			})
		}
	  }
	  
  },
  onLoad(){
    // console.log('开始')
    this.methods.toLink()
  }
})