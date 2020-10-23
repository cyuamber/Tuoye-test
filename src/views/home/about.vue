<!-- home -->
<template>
  <div class="about-container">
    <h2>告示板</h2>
    <div class="warpper">
      <van-cell title="所有题目资料集合" is-link @click="showPopup(1)" />
      <van-cell title="注意事项" is-link @click="showPopup(2)" />
      <van-cell title="请一定注意安全" is-link @click="showPopup(3)" />
    </div>
    <van-popup v-model="showInfoBoard" class="infoboard" :style="{ width: '80%', height: '70%' }">
      <div v-if="infoTag === 1">
        <p>所有题目的资料我已经整理好放进百度网盘中了，可以点击下面的链接下载：</p>
        <!-- <p>链接:https://pan.baidu.com/s/15UJyWOdT8K4vIeJOlScK9A</p> -->
        <van-button plain size="small" hairline type="info" @click="gotoBaidu">点我跳转 </van-button>
        <p>
          <span id="password">密码:rv8x</span>
          <!-- <van-button plain size="mini" hairline type="info" @click="cp(document.getElementById('password'))"
            >粘贴</van-button
          > -->
        </p>
      </div>
      <div v-if="infoTag === 2">
        <h2>注意事项</h2>
        <ul>
          <li>1. 所有的资料都整理好发给你了，需要的话可以在百度网盘里看</li>
          <li>2. 功能还没开发完，这两天会完善一下，你先对照着图看答案，这个功能我这两天有空会做</li>
          <li>3. 答案做的不准确的地方多担待</li>
          <li>4. 以后有什么需要帮忙的地方，可以跟我说，我会尽力帮助你</li>
        </ul>
      </div>
      <div v-if="infoTag === 3">
        <p>听说意大利疫情又反复，请一定注意安全。别嫌我啰嗦，是真的很担心你</p>
        <p>
          驾照确实是没考完，原因是：之前是和贺凌一起去学的驾照，分手之后我实在没有勇气再去那个驾校了，就耽误了。我现在正在重新考。
          之前没告诉你，是怕你嘲笑我，对不起。除此之外，我从没骗过你什么。
        </p>
        <p>祝你一切顺利！考完试记得告诉我结果。</p>
        <p>我会想你的。</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfoBoard: false,
      infoTag: 1
    }
  },
  methods: {
    showPopup(tag) {
      this.infoTag = tag
      this.showInfoBoard = true
    },
    gotoBaidu() {
      window.location.href = 'https://pan.baidu.com/s/15UJyWOdT8K4vIeJOlScK9A'
    },
    paste(x) {
      if (document.selection) {
        var range = document.body.createTextRange()
        range.moveToElementText(x)
        range.select()
      } else if (window.getSelection) {
        var selection = window.getSelection()
        var range = document.createRange()
        selection.removeAllRanges()
        range.selectNodeContents(x)
        selection.addRange(range)
      }
    },
    cp(x) {
      paste(x)
      document.execCommand('copy')
      alert('复制成功')
    }
  }
}
</script>
<style lang="scss">
.about-container {
  background: #fff;
  h2 {
    text-align: center;
  }
  .infoboard {
    padding: 20px;
    li {
      font-size: 16px;
    }
    p {
      font-size: 16px;
    }
  }
}
</style>
