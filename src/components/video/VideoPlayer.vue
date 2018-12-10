<template>
  <div class="video-container">
    <video
      class="video-player"
      ref="videoPlayer"
      webkit-playsinline="true"
      playsinline
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
      controls="false"
      :src='url'
      @click="onPlayOrPause"
    ></video>
    <div class="video-control">

    </div>
  </div>
</template>
<script>
export default {
  props: {
    url: ''
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    onPlayOrPause () {
      let video = this.$refs.videoPlayer
      if (video.paused) {
        video.play()

        if (video.webkitRequestFullScreen) {
          video.webkitRequestFullScreen()
        }
      } else {
        video.pause()
      }
    },
    // 播放
    onPlay () {
      this.$refs.videoPlayer.play()
    },
    // 暂停
    onPause () {
      this.$refs.videoPlayer.pause()
    },
    // 释放资源
    onRelease () {},
    // 进入全屏
    enterFullScreen () {
      let video = this.$refs.videoPlayer
      window.onresize = function () {
        video.style.width = window.innerWidth + 'px'
        video.style.height = window.innerHeight + 'px'
      }
    }
  }
}
</script>
<style scoped>
.video-container {
  text-align: center;
}
.video-player {
  width: 100%;
}
.video-control {
}
</style>
