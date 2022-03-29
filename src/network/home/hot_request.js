import { request } from "../request"

/*
获取首页-热门 数据
ps:每页视频数量
pn:页数
*/
const getHomeHotMultidata = (ps, pn) => {
  return request({
    // url: "https://www.bilibili.com/index/ding.json"
    url: "/popular",
    params: {
      ps,
      pn
    }
  })
}

export { getHomeHotMultidata }
