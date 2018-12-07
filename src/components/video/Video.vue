<template>
  <div>
    <video-player
      :url="url"
    ></video-player>
  </div>
</template>
<script>
import VideoPlayer from './VideoPlayer'
export default {
  components: {
    VideoPlayer
  },
  data () {
    return {
      url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
    }
  }
}
</script>
<style scoped>
</style>
