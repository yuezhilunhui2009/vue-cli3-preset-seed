import axios from 'axios'

export default {
  // 请修改为实际的 http api
  axiosGet () {
    axios.get('/user?ID=12345')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // 请修改为实际的 http api
  axiosPost () {
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // 请修改为实际的 http api
  fetchList () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rand = Math.random()
        // 模拟成功、失败两种情况
        if (rand < 0.9) {
          resolve({
            data: {
              list: [{
                title: '房东直租昌平区水关新村3室2厅1厨1卫122平米南北通透房屋',
                pubTime: '2018-10-18 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538367'
              }, {
                title: '房主直租1号线古城地铁口两居室整套出租',
                pubTime: '2018-10-17 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538062'
              }, {
                title: '房东直租百子湾赛洛城附近小区新装修带车位二居室出租',
                pubTime: '2018-10-17 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538066'
              }, {
                title: '[原创]业主直租北七家-龙冠冠华苑-精装整租-两室一厅-90平',
                pubTime: '2018-10-17 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538073'
              }, {
                title: '房东直租，志新村南向次卧2800/月，6/6层',
                pubTime: '2018-10-17 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538078'
              }, {
                title: '说说直租房子的有效途径',
                pubTime: '2018-10-17 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538101'
              }, {
                title: '6号线通州北关站精装一居房东直租，附照片',
                pubTime: '2018-10-17 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538111'
              }, {
                title: '[原创]房屋直租（次卧一间）',
                pubTime: '2018-10-17 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538115'
              }, {
                title: '海淀区农大南路厢黄旗万树园小区主卧个人直租',
                pubTime: '2018-10-17 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538120'
              }, {
                title: '房屋出租--（房东直租）北五环外北苑家园绣菊园北区塔楼顶层二',
                pubTime: '2018-10-17 00:00:00',
                url: 'http://m.newsmth.net/article/HouseRent/538127'
              }]
            },
            code: 0,
            msg: ''
          })
        } else {
          reject(new Error('network error'))
        }
      }, 2000)
    })
  }
}
