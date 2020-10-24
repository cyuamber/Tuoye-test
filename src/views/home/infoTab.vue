<template>
  <div>
    <div class="imageHolder">
      <img :src="imageName" alt="image" @click="showImg()" />
    </div>
    <h2>{{ info }}:{{ correctAnswer }}</h2>
  </div>
</template>
<script>
import { ImagePreview } from 'vant'
export default {
  data() {
    return {
      info: '',
      answers: '',
      correctAnswer: ''
    }
  },
  created() {
    this.init()
  },
  computed: {
    imageName() {
      const url = require(`@/assets/images/${this.answers}/${this.info}.jpg`)
      return url
    }
  },
  methods: {
    init() {
      // TODO:做一个清空历史记录的东西
      this.info = this.$route.params.detail
      this.answers = this.$route.params.currentAnswer
      this.correctAnswer = this.$route.params.answer
    },
    showImg() {
      const img = require(`@/assets/images/${this.answers}/${this.info}.jpg`)
      ImagePreview([img])
    }
  }
}
</script>

<style lang="less" scoped>
.imageHolder {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  margin: 20% 10px 0;
  img {
    width: 100%;
  }
}
h2 {
  text-align: center;
}
</style>