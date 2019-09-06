const proxy = {
  // 获取提现记录列表
  'GET /api/getCashList': [
    {
    status: "1",
    last: "200",
    id: "7878955878955878",
    state: "待处理"
    },
    {
    status: "2",
    last: "40",
    id: "8758755896358963",
    state: "已到账"
    },
    {
    status: "2",
    last: "23",
    id: "8962896214121412",
    state: "已到账"
    },
    {
    status: "2",
    last: "44",
    id: "2152215223252325",
    state: "已到账"
    },
    {
    status: "2",
    last: "67",
    id: "2532533365433654",
    state: "已到账"
    }
    ],
  // 获取订单列表列表
  'POST /api/getExtractList': (req, res) => {
    if(req.body.orderStatus){
      if(req.body.orderStatus === '1'){ // 已付订单
        return res.send({data:[
          {
          gender: "female",
          name: {
          title: "mrs",
          first: "asha",
          src:'http://img14.360buyimg.com/n5/s54x54_jfs/t1/67064/39/597/158950/5cecf39bEda3871e5/cdf0619b04937264.jpg',
          orderId: "20190902456852",
          des:'【专柜正品】迪奥999Dior口红唇膏烈艳蓝金 哑光滋润520/888/999送礼礼品套装 520+999滋润【遇见真爱 礼盒套装】'
          },
          email: "asha.vanderklugt@example.com",
          nat: "NL"
          },
          {
            gender: "female",
            name: {
            title: "mrs",
            first: "asha",
            src:'http://img14.360buyimg.com/n5/s54x54_jfs/t1/67064/39/597/158950/5cecf39bEda3871e5/cdf0619b04937264.jpg',
            orderId: "20190902456852",
            des:'【专柜正品】迪奥999Dior口红唇膏烈艳蓝金 哑光滋润520/888/999送礼礼品套装 520+999滋润【遇见真爱 礼盒套装】'
            },
            email: "asha.vanderklugt@example.com",
            nat: "NL"
            },
            {
              gender: "female",
              name: {
              title: "mrs",
              first: "asha",
              src:'http://img14.360buyimg.com/n5/s54x54_jfs/t1/67064/39/597/158950/5cecf39bEda3871e5/cdf0619b04937264.jpg',
              orderId: "20190902456852",
              des:'【专柜正品】迪奥999Dior口红唇膏烈艳蓝金 哑光滋润520/888/999送礼礼品套装 520+999滋润【遇见真爱 礼盒套装】'
              },
              email: "asha.vanderklugt@example.com",
              nat: "NL"
              }
          ]})
      }else if (req.body.orderStatus === '2'){ // 待反
        return res.send({data:[
          {
          gender: "female",
          name: {
          title: "mrs",
          first: "asha",
          src:'https://img13.360buyimg.com/n5/jfs/t1/75861/29/758/168917/5cef7617Ed922fa1e/f3ce5cbebcc3481e.jpg',
          orderId: "20190902741879",
          des:'前行者游戏背光发光牧马人真机械手感键盘鼠标套装lol键鼠台式有线薄膜网吧外设电脑笔记本USB外接键盘 牧马人黑色彩虹背光键盘+七彩黑鼠标'
          },
          email: "asha.vanderklugt@example.com",
          nat: "NL"
          }
          ]})
      }else if (req.body.orderStatus === '3'){ // 已反
        return res.send({data:[
          {
          gender: "female",
          name: {
          title: "mrs",
          first: "asha",
          src:'https://img13.360buyimg.com/n5/jfs/t1/41718/37/4966/263513/5ce66c70Ec13e982c/1a502fe70a1bfeac.jpg',
          orderId: "20190902458963",
          des:'耐克NIKE 男子 休闲鞋 气垫 AIR VAPORMAX FLYKNIT 3 运动鞋 AJ6900-004黑色40.5码'
          },
          email: "asha.vanderklugt@example.com",
          nat: "NL"
          },
          {
            gender: "female",
            name: {
            title: "mrs",
            first: "asha",
            src:'https://img13.360buyimg.com/n5/jfs/t1/41718/37/4966/263513/5ce66c70Ec13e982c/1a502fe70a1bfeac.jpg',
            orderId: "20190902458963",
            des:'耐克NIKE 男子 休闲鞋 气垫 AIR VAPORMAX FLYKNIT 3 运动鞋 AJ6900-004黑色40.5码'
            },
            email: "asha.vanderklugt@example.com",
            nat: "NL"
            }
          ]})
      }else if (req.body.orderStatus === '4'){ // 已失效
        return res.send({data:[
          {
          gender: "female",
          name: {
          title: "mrs",
          first: "asha",
          src:'https://img10.360buyimg.com/n1/jfs/t23179/312/1862691384/385365/cd68a2dd/5b6ab13dNeb998f87.jpg',
          orderId: "20190902142356",
          des:'思维导图 记忆力训练法 教你简单快速有效的提升记忆快速提高左右脑思维和技巧 可搭配最强大脑书籍'
          },
          email: "asha.vanderklugt@example.com",
          nat: "NL"
          },
          {
            gender: "female",
            name: {
            title: "mrs",
            first: "asha",
            src:'https://img11.360buyimg.com/n5/jfs/t1/27289/23/7777/351831/5c6e18b2Ee7c48be6/77f9c8539ab40c2a.jpg',
            orderId: "20190902142356",
            des:'局外人(如果你在人群中感到格格不入，一定要读《局外人》 ！精装插图珍藏版！诺奖作品，此生必读)(读客经典文库)'
            },
            email: "asha.vanderklugt@example.com",
            nat: "NL"
            }
          ]})
      }else{
        return res.send({ status: 'error', code: 400 })
      }
    }else {
      return res.send({ status: 'error', code: '20023',errMsg: 'orderStatus is required' })
    }
  },
  'POST /api/login/account': (req, res) => {
      const { password, username } = req.body
      if (password === '888888' && username === 'admin') {
          return res.send({
              status: 'ok',
              code: 0,
              token: 'sdfsdfsdfdsf',
              data: { id: 1, username: 'kenny', sex: 6 }
          })
      } else {
          return res.send({ status: 'error', code: 403 })
      }
  },
  'DELETE /api/user/:id': (req, res) => {
      console.log('---->', req.body)
      console.log('---->', req.params.id)
      res.send({ status: 'ok', message: '删除成功！' })
  }
}
module.exports = proxy
