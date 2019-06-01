<script>
export default {
  data: () => ({
    showingPage: 'Setup',
    beanAmount: 20,
    timer: {
      value: 0,
      setIntervalPointer: null,
      status: 'initialized' // "initialized", "running", "paused"
    },
    secondsToStep: [0, 45, 1 * 60 + 30, 2 * 60 + 10, 2 * 60 + 45, 3 * 60 + 30]
    // secondsToStep: [0, 10, 20, 30, 40, 50]
  }),
  methods: {
    startTimer: function() {
      const self = this
      this.showingPage = 'BrewingCoffee'
      this.timer.setIntervalPointer = setInterval(function() {
        self.timer.value += 1
      }, 1000)
      this.timer.status = 'running'
    },
    pauseTimer: function() {
      clearInterval(this.timer.setIntervalPointer)
      this.timer.status = 'paused'
    },
    resetTimer: function() {
      clearInterval(this.timer.setIntervalPointer)
      this.showingPage = 'Setup'
      this.timer.value = 0
      this.timer.status = 'initialized'
    }
  },
  computed: {
    isTimerRunning: function() {
      return this.timer.status === 'running'
    },
    isTimerInitialized: function() {
      return this.timer.status === 'initialized'
    },
    isTimerPaused: function() {
      return this.timer.status === 'paused'
    },
    isStep1: function() {
      return this.step === 1
    },
    isStep2: function() {
      return this.step === 2
    },
    isStep3: function() {
      return this.step === 3
    },
    isStep4: function() {
      return this.step === 4
    },
    isStep5: function() {
      return this.step === 5
    },
    isStep6: function() {
      return this.step === 6
    },
    step: function() {
      if (this.timer.status === 'initialized') return 0
      if (this.timer.value >= this.secondsToStep[5]) return 6
      if (this.timer.value >= this.secondsToStep[4]) return 5
      if (this.timer.value >= this.secondsToStep[3]) return 4
      if (this.timer.value >= this.secondsToStep[2]) return 3
      if (this.timer.value >= this.secondsToStep[1]) return 2
      return 1
    },
    shouldAlertNextStep: function() {
      if (this.isTimerInitialized) return false
      if (this.timeToNextStep < 1) return false
      if (this.timeToNextStep >= 1) return true
      return false
    },
    timeToNextStep: function() {
      const nextStep = this.secondsToStep[this.step]
      return nextStep - this.timer.value
    },
    nextStep: function() {
      return this.step + 1
    },
    timerForText: function() {
      const s = this.timer.value % 60
      const minutes = (this.timer.value - s) / 60
      const seconds1 = s % 10
      const seconds10 = (s - seconds1) / 10
      return { minutes: minutes, seconds10: seconds10, seconds1: seconds1 }
    }
  }
}
</script>

<template>
  <div>
    <template v-if="showingPage=='Setup'">
      <div class="bm-brewing-coffee-setup">
        <div class="body">
          <div>
            <div class="title">Brewing Coffee Styles</div>
            <div class="coffee-setup">
              <div class="description">何グラムの豆で抽出しますか？</div>
              <div class="form">
                <input type="number" v-model="beanAmount" pattern="\d*" max="999" min="0">
                <div class="unit number">g</div>
              </div>

              <div @click="startTimer" class="button">START</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="copyright">
            <a href="https://www.buckmoon.co.jp/">
              <img src="buckmoon-typo-white.png" alt="buckmoon">
            </a>
          </div>
          <div class="quote">
            このシミュレーターは、バリスタ世界チャンピオン・粕谷哲さんの
            <a
            href="https://www.buzzfeed.com/jp/koumibaisen/coffee-lesson"
            >&nbsp;4:6 method</a>&nbsp;を参考に作成しています。
          </div>
        </div>
      </div>
    </template>

    <template v-if="showingPage=='BrewingCoffee'">
      <div class="bm-brewing-coffee">
        <div class="header">
          <div class="title">
            <div class="name">4:6 Coffee Method</div>
            <div class="options">
              <div class="option weight">{{beanAmount}}g</div>
              <div class="option temperature">83-93℃</div>
            </div>
          </div>
          <div class="action" @click="resetTimer">
            <i class="mdi mdi-close"></i>
          </div>
        </div>
        <div class="body bm-brewing-coffee-now">
          <div class="weight">50<span class="unit">ml</span></div>
          <div class="text">まで注水してください</div>
          <div class="separate"></div>
          <div class="time" v-if="shouldAlertNextStep"><sapn class="text">NEXT</sapn>{{ timeToNextStep }}s
          </div>
          <div class="action">
            <div
            class="button start"
            @click="startTimer"
            v-if="isTimerInitialized || isTimerPaused"
            ><i class="mdi mdi-play"></i></div>
            <div class="button" @click="pauseTimer" v-if="isTimerRunning"><i class="mdi mdi-pause"></i></div>
          </div>
        </div>

        <div class="footer">
          <div class="bm-timer">
            <template id="time_indicator_minutes" class="time" v-if="timerForText.minutes > 0">
              <div class="number">{{ timerForText.minutes }}</div>
              <div class="unit">:</div>
            </template>
            <template id="time_indicator_minutes" class="time" v-else>
              <div class="number">00</div>
              <div class="unit">:</div>
            </template>
            <template class="time" id="time_indicator_seconds">
              <div class="number">{{ timerForText.seconds10 }}</div>
              <div class="number">{{ timerForText.seconds1 }}</div>
            </template>
          </div>
          <div class="bm-brewing-coffee-steps">
            <div class="step" :class="{ active: isStep1 }">
              <div class="icon">
                <i class="mdi mdi-water"></i>
              </div>
              <div class="time">
                0s
              </div>
              <div class="weight">
                {{ beanAmount * 2.5 }}ml
              </div>
            </div>
            <div class="step" :class="{ active: isStep2 }">
              <div class="icon">
                <i class="mdi mdi-water"></i>
              </div>
              <div class="time">
                45s
              </div>
              <div class="weight">
                {{ beanAmount * 6 }}ml
              </div>
            </div>
            <div class="step" :class="{active: isStep3}">
              <div class="icon">
                <i class="mdi mdi-water"></i>
              </div>
              <div class="time">
                1m30s
              </div>
              <div class="weight">
                {{ beanAmount * 9 }}ml
              </div>
            </div>
            <div class="step" :class="{active: isStep4}">
              <div class="icon">
                <i class="mdi mdi-water"></i>
              </div>
              <div class="time">
                2m10s
              </div>
              <div class="weight">
                {{ beanAmount * 12 }}ml
              </div>
            </div>
            <div class="step" :class="{active: isStep5}">
              <div class="icon">
                <i class="mdi mdi-water"></i>
              </div>
              <div class="time">
                2m45s
              </div>
              <div class="weight">
                {{ beanAmount * 15 }}ml
              </div>
            </div>
            <div class="step" :class="{active: isStep6}">
              <div class="icon">
                <i class="mdi mdi-coffee"></i>
              </div>
              <div class="time">
                3m30s
              </div>
              <div class="weight">
                END
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
