<template>
  <div>
    <div class="videocard">
      <div class="videocard-container">
        <a class="videocard-img">
          <div class="videocard-img-container">
            <img
              src="~assets/img/home/hot/hot_1.webp"
              alt=""
              class="videocard-img__img"
            />
          </div>
          <div class="videocard-time">
            <span class="videocard-time-text">00:03:00</span>
          </div>
        </a>
        <div class="videocard-content">
          <div class="videocard-title">
            <span class="videocard-title-text"
              >如果新垣结衣对你说【生日快乐】</span
            >
          </div>
          <div class="videocard-tag">
            <span class="videocard-tag-text"></span>
          </div>
          <div class="videocard-up">
            <span class="videocard-up-icon"></span>
            <span class="videocard-up-name">垣气满满的gakki</span>
          </div>
          <div class="videocard-play-info">
            <div class="videocard-play-info-detail videocard-play-counter">
              <div class="videocard-play-icon__img">
                <img src="~assets/img/home/hot/play.svg" alt="" />
              </div>
              <span class="videocard-play-counter-text">653</span>
            </div>
            <div class="videocard-play-info-detail videocard-play-date">
              <span class="videocard-play-date-text">3-5</span>
            </div>
            <div class="videocard-play-info-detail videocard-play-share">
              <div class="videocard-share-icon__img">
                <img src="~assets/img/home/hot/share.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const videoCardProps = {}
export default {}
</script>
<style>
.videocard {
  position: relative;
  box-sizing: border-box;
  padding: 8px 16px;
  background-color: #fafafa;
}
.videocard:not(:first-child) {
  margin-top: 8px;
}
.videocard-container {
  display: flex;
}
.videocard-img {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 146px;
  height: 82px;
  margin-right: 8px;
}
.videocard-content {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-width: 0;
  min-height: 82px;
}
.videocard-img-container {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.videocard-img__error,
.videocard-img__img,
.videocard-img__loading {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.videocard-time {
  display: inling-block;
  position: absolute;
  bottom: 3px;
  right: 5px;
  background: rgba(0, 0, 0, 0.3);
  color: #eee;
  font-size: 14px;
  border-radius: 5px;
}

.videocard-title {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 32px;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}
.videocard-tag-text {
  border: 1px solid #ea6da3;
  color: #ea6da3;
  font-size: 12px;
  border-radius: 2px;
}
.videocard-tag-text::before {
  content: "百万播放";
  pointer-events: none;
}
.videocard-up-icon {
  position: relative;
  display: inline-block;
  border: 1px solid #999;
  color: #999;
  font-size: 12px;
  border-radius: 2px;
  margin-right: 1px;
}
.videocard-up-icon::before {
  content: "up";
  pointer-events: none;
}
.videocard-up-name {
  font-size: 12px;
  color: #999;
}
.videocard-play-info {
  display: flex;
}
.videocard-play-info-detail {
  flex: 1;
}
.videocard-play-icon__img,
.videocard-share-icon__img {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 3px;
  vertical-align: middle;
}
.videocard-play-counter-text,
.videocard-play-date-text {
  font-size: 16px;
}
.videocard-play-date {
  text-align: center;
}
.videocard-play-share {
  text-align: right;
}
</style>
