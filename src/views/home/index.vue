<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <h1 class="demo-home__title"><img src="https://imgs.solui.cn/weapp/logo.png" /><span>你需要的托业答案</span></h1>
      <h2 class="demo-home__desc">{{ currentTime }}</h2>
    </div>
    <van-cell icon="success" v-for="item in list" :key="item" :title="item" @click="showPopup(item)" />
    <van-popup v-model="showAnswer" :style="{ width: '80%' }">
      <van-cell v-for="item in rightAnswer" :key="item" :title="item" />
    </van-popup>
  </div>
</template>

<script>
import { ANSWERS } from '@/constant/answers'
console.log(ANSWERS)
export default {
  data() {
    return {
      currentTime: '',
      rightAnswer: '',
      showAnswer: false
    }
  },

  created() {
    this.getCurrentTime()
  },
  computed: {
    list() {
      let listArr = []
      ANSWERS.map(item => {
        const title = Object.keys(item)
        listArr.push(title[0])
      })
      return listArr
    }
  },
  watch: {
    currentTime(newValue) {
      return newValue
    }
  },

  methods: {
    getCurrentTime() {
      setInterval(() => {
        this.currentTime = new Date()
      }, 1000)
    },
    showPopup(item) {
      console.log(item)
      this.showAnswer = true
      ANSWERS.filter(answer => {
        if (item === Object.keys(answer)[0]) {
          this.rightAnswer = Object.values(answer)[0].split(' ')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  .warpper {
    padding: 12px;
    background: #fff;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 32px;
      .demo-home__title img,
      .demo-home__title span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 32px;
      }
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
    .demo-home__desc {
      margin: 0 0 20px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 14px;
    }
  }
}
</style>
