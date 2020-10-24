<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <h1 class="demo-home__title"><span>我做的的托业答案</span></h1>
      <h2 class="demo-home__desc">{{ currentTime }}</h2>
    </div>
    <van-cell icon="success" v-for="item in list" :key="item" :title="item" @click="showPopup(item)" />
    <van-popup v-model="showAnswer" :style="{ width: '80%' }">
      <van-cell-group :title="currentAnswer">
        <van-cell v-for="(answer, i) in rightAnswer" :key="answer" :title="preIndex + i + '：' + answer">
          <template #right-icon>
            <van-icon name="search" class="search-icon" @click="jumptoDetail(preIndex + i, answer)" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { ANSWERS } from '@/constant/answers'
console.log(ANSWERS)
export default {
  data() {
    return {
      currentTime: '', //当前时间
      currentAnswer: '', //当前的
      rightAnswer: '',
      preIndex: 0, //列表中显示的起始题号
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
        this.currentTime = new Date().toLocaleString()
      }, 1000)
    },
    jumptoDetail(detail, answer) {
      this.$router.push({
        name: 'InfoTab',
        params: { detail: detail, answer: answer, currentAnswer: this.currentAnswer }
      })
    },
    showPopup(item) {
      this.currentAnswer = item
      console.log(item)
      const reg = new RegExp('\\w*(?=-)', 'g')
      this.preIndex = Number(item.match(reg)[0])
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
