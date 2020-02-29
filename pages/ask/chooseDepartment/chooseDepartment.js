const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [{
		id : 1,
		name : '内科',
	},{
		id : 122,
		name : '内科2',
	},{
		id : 13,
		name : '内科3',
	},{
		id : 14,
		name : '内科4',
	},{
		id : 15,
		name : '内科5',
	},{
		id : 16,
		name : '内科6',
	},{
		id : 17,
		name : '内科7',
	},{
		id : 18,
		name : '内科8'
	},{
		id : 19,
		name : '内科9',
	}],
	list2 : [2,2,1,231,312,3123,123,123,123,123,123,123,123],
    load: true,
	title : '',
  },
  onLoad() {
    // wx.showLoading({
    //   title: '加载中...',
    //   mask: true
    // });
  },
  onReady() {
    // wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.target.name,
    })
	var get = e.currentTarget.dataset.target.id;
	var list = []
	for(let i = 0;i < get;i++){
		list[i] = get;
	}
	this.setData({
		list2 : list
	})
	this.setData({
		title : get
	})
  },
  tabDepartment(){
	  wx.navigateTo({
		  url : "/pages/ask/chooseDoctor/chooseDoctor"
	  })
  }
})