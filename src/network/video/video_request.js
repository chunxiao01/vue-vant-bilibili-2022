import { request } from "../request"

/*
获取视频数据--视频详情和视频相关推荐
aid, 
bvid, 
recommend_type, 
need_rcmd_reason
*/
const getVideoDetailRelateddata = (
  aid,
  bvid,
  recommend_type,
  need_rcmd_reason
) => {
  return request({
    url: "/view/detail",
    params: {
      aid,
      bvid,
      recommend_type,
      need_rcmd_reason
    }
  })
}

/*
  获取视频数据--视频评论信息
  type, //默认为1,视频类型
  oid, //aid
  sort, //排序，默认为0, 0：按时间 1：按点赞数 2：按回复数
  ps, //每页数量
  pn //页数
*/
const getVideoReplydata = (type, oid, sort, ps, pn) => {
  return request({
    url: "/bilibili_reply",
    params: {
      type, //默认为1,视频类型
      oid, //aid
      sort, //排序，默认为0, 0：按时间 1：按点赞数 2：按回复数
      ps, //每页数量
      pn //页数
    }
  })
}

export { getVideoDetailRelateddata, getVideoReplydata }
