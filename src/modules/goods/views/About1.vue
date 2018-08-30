<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="dialogVisible = true">打开弹窗</el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      title="摄像头"
      @open="dialogOpen"
      @close="closeVideo">
      <video
        ref="video"
        autoplay/>

      <span slot="footer">
        <el-button @click="closeVideo">取 消</el-button>
        <el-button
          type="primary"
          @click="startVideo">
          开启
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialogVisible: false,

    videoConstraint: {
      width: 200,
      height: 100,
      frameRate: 30,
    },

    videoEl: null,

    videoTracks: null,
  }),

  mounted() {
    // this.videoEl = this.$refs.video;
  },

  methods: {
    dialogOpen() {
      // console.log(this.$refs);
      this.$nextTick(() => {
        this.videoEl = this.$refs.video;
      });
      // this.videoEl = this.$refs.video;
    },

    closeVideo() {
      this.videoEl.srcObject = null;
    },
    startVideo() {
      navigator.mediaDevices
        .getUserMedia({
          video: this.videoConstraint,
          audio: false,
        })
        .then((stream) => {
          const videoTracks = stream.getVideoTracks();
          this.$nextTick(() => {
            this.videoEl.srcObject = stream;
          });
          if (videoTracks.length) {
            const [track] = videoTracks;
            this.videoTrack = track;
          }
        })
        .then(() => {
          // eslint-disable-next-line
          new Promise(((resolve) => {
            this.videoEl.onloadedmetadata = resolve;
          }));
        })
        .then(() => {
          // getCurrentSettings();
        })
        .catch();
    },
  },
};
</script>

