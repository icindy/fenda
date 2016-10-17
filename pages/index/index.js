//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    questions: [{
      qtype: 0,//0为限时免费、1为一元
      content: '小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。',
      authorHead: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1702198402,2278399184&fm=111&gp=0.jpg',
      authorName: '李小船',
      authorBio:'央企集团总部人力资源经理，百单行家',
      createTime: 140000000000
    }, {
      qtype: 1,//0为限时免费、1为一元
      content: '小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。',
      authorHead: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1702198402,2278399184&fm=111&gp=0.jpg',
      authorName: '李小船',
      authorBio:'央企集团总部人力资源经理，百单行家',
      createTime: 140000000000
    },{
      qtype: 0,//0为限时免费、1为一元
      content: '小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。',
      authorHead: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1702198402,2278399184&fm=111&gp=0.jpg',
      authorName: '李小船',
      authorBio:'央企集团总部人力资源经理，百单行家',
      createTime: 140000000000
    }, {
      qtype: 1,//0为限时免费、1为一元
      content: '小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。',
      authorHead: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1702198402,2278399184&fm=111&gp=0.jpg',
      authorName: '李小船',
      authorBio:'央企集团总部人力资源经理，百单行家',
      createTime: 140000000000
    },{
      qtype: 0,//0为限时免费、1为一元
      content: '小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。',
      authorHead: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1702198402,2278399184&fm=111&gp=0.jpg',
      authorName: '李小船',
      authorBio:'央企集团总部人力资源经理，百单行家',
      createTime: 140000000000
    }, {
      qtype: 1,//0为限时免费、1为一元
      content: '小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。',
      authorHead: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1702198402,2278399184&fm=111&gp=0.jpg',
      authorName: '李小船',
      authorBio:'央企集团总部人力资源经理，百单行家',
      createTime: 140000000000
    },{
      qtype: 0,//0为限时免费、1为一元
      content: '小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。',
      authorHead: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1702198402,2278399184&fm=111&gp=0.jpg',
      authorName: '李小船',
      authorBio:'央企集团总部人力资源经理，百单行家',
      createTime: 140000000000
    }, {
      qtype: 1,//0为限时免费、1为一元
      content: '小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。',
      authorHead: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1702198402,2278399184&fm=111&gp=0.jpg',
      authorName: '李小船',
      authorBio:'央企集团总部人力资源经理，百单行家',
      createTime: 140000000000
    }],
    // 顶部切换
    currentTab: 0,
    hidden: true,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
