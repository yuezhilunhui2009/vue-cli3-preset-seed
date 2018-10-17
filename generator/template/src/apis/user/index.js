export default {
  fetchInfo () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rand = Math.random()
        // 模拟成功、失败两种情况
        if (rand < 0.5) {
          resolve({
            data: {
              nickname: '测试用户',
              headimgurl: 'https://avatars0.githubusercontent.com/u/2198309?s=460&v=4'
            },
            code: 0,
            msg: ''
          })
        } else if (rand < 0.9) {
          resolve({
            data: null,
            code: 2,
            msg: '用户未登录'
          })
        } else {
          reject(new Error('network error'))
        }
      }, 2000)
    })
  }
}
