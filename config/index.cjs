/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx15e672bfeadf0f18',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7866c3c65256532f7c45b5eb8bbb8b2b',

  PROVINCE: '湖北省',
  CITY: '孝感市',
  USERS: [
    {
      // 想要发送的人的名字
      name: '小橙子宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQHHJ6PoQmF7xrHLwsFKK_WGms4o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0ou-0deAbMrg5r86CArJU0TacLuYNyKVA8kWz1inafg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-03',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      festivals: [
        {
          type: '生日', name: '小橙子🍊', year: '1999', date: '11-03',
        },
         {
          type: '*生日', name: '大陈🍊', year: '1999', date: '07-08',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-05-20' },
      ],
       /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,
      // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '陈小毅',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQHHJ6PoQmF7xrHLwsFKK_WGms4o',
    }
  ],

}

module.exports = USER_CONFIG

