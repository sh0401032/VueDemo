<template>
  <div class="video-container">
    <video
      class="video-player"
      ref="videoPlayer"
      webkit-playsinline="true"
      playsinline
      :src='url'
      @click="requestFullScreen"
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
  created () {
    this.init()
  },
  mounted () {
  },
  methods: {
    init () {
      document.addEventListener('webkitfullscreenchange', () => {
        var el = document.fullscreenElement || document.webkitFullscreenElement
        if (el && el.tagName === 'VIDEO') {
          let video = this.$refs.videoPlayer
          if (video && video.paused) {
            video.play()
          }
        }
      })
      document.addEventListener('fullscreenchange', () => {
        var el = document.fullscreenElement || document.webkitFullscreenElement
        if (el && el.tagName === 'VIDEO') {
          let video = this.$refs.videoPlayer
          if (video && video.paused) {
            video.play()
          }
        }
      })
    },
    requestFullScreen () {
      let video = this.$refs.videoPlayer
      console.log(video.requestFullscreen)
      console.log(video.webkitRequestFullScreen)
      if (video.requestFullscreen) {
        video.requestFullscreen()
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen()
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
