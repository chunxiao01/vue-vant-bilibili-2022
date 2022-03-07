import { request } from "../request"

const getHomeHotMultidata = () => {
  return request({
    // url: "https://www.bilibili.com/index/ding.json"
    url: "http://127.0.0.1:8000/api/bilibili_hot",
    params: {
      ps: 20,
      pn: 2
    }
  })
}

export { getHomeHotMultidata }
