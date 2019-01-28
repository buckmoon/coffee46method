<script>
export default {
  data: () => ({
    beanAmount: 20,
    timer: {
      value: 0,
      setIntervalPointer: null,
      status: "initialized" // "initialized", "running", "paused"
    },
    //secondsToStep: [0, 45, 1 * 60 + 30, 2 * 60 + 10, 2 * 60 + 45, 3 * 60 + 30]
    secondsToStep: [0, 10, 20, 30, 40, 50]
  }),
  methods: {
    startTimer: function() {
      const self = this;
      this.timer.setIntervalPointer = setInterval(function() {
        self.timer.value += 1;
      }, 1000);
      this.timer.status = "running";
    },
    pauseTimer: function() {
      clearInterval(this.timer.setIntervalPointer);
      this.timer.status = "paused";
    },
    resetTimer: function() {
      clearInterval(this.timer.setIntervalPointer);
      this.timer.value = 0;
      this.timer.status = "initialized";
    }
  },
  computed: {
    isTimerRunning: function() {
      return this.timer.status == "running";
    },
    isTimerInitialized: function() {
      return this.timer.status == "initialized";
    },
    isTimerPaused: function() {
      return this.timer.status == "paused";
    },
    isStep1: function() {
      return this.step == 1;
    },
    isStep2: function() {
      return this.step == 2;
    },
    isStep3: function() {
      return this.step == 3;
    },
    isStep4: function() {
      return this.step == 4;
    },
    isStep5: function() {
      return this.step == 5;
    },
    isStep6: function() {
      return this.step == 6;
    },
    step: function() {
      if (this.timer.status == "initialized") return 0;
      if (this.timer.value >= this.secondsToStep[5]) return 6;
      if (this.timer.value >= this.secondsToStep[4]) return 5;
      if (this.timer.value >= this.secondsToStep[3]) return 4;
      if (this.timer.value >= this.secondsToStep[2]) return 3;
      if (this.timer.value >= this.secondsToStep[1]) return 2;
      return 1;
    },
    shouldAlertNextStep: function() {
      if (this.isTimerInitialized) return false;
      if (this.timeToNextStep < 1) return false;
      if (this.timeToNextStep <= 5) return true;
      return false;
    },
    timeToNextStep: function() {
      const nextStep = this.secondsToStep[this.step];
      return nextStep - this.timer.value;
    },
    nextStep: function() {
      return this.step + 1;
    }
  }
};
</script>

<template>
  <div class="wrap">
    <div class="page-title">4:6 methodCalc</div>
    <div class="coffee-setup">
      <div class="title">豆の量</div>
      <div class="form">
        <input type="number" v-model="beanAmount" pattern="\d*">
      </div>
      <div class="unit number">g</div>
    </div>
    <div class="coffee-timer">
      <p id="time_indicator">{{ timer.value }}秒</p>
      <button @click="startTimer" v-if="isTimerInitialized || isTimerPaused">TIMER START</button>
      <button @click="pauseTimer" v-if="isTimerRunning">PAUSE</button>
      <button @click="resetTimer" v-if="isTimerRunning">STOP AND RESET</button>
      <p id="alert-next-step" v-if="shouldAlertNextStep">次の注湯タイミングまで{{ timeToNextStep }}秒</p>
    </div>
    <div class="coffee-steps">
      <table class="table">
        <thead>
          <th>累積時間</th>
          <th>累積注湯量</th>
        </thead>
        <tbody class="large-text">
          <tr class="start" v-bind:class="{active: isStep1}">
            <td>
              <span class="number">0</span>秒
            </td>
            <td>
              <span class="number">{{ beanAmount * 2.5 }} ml</span>
            </td>
          </tr>
          <tr class="end sep" v-bind:class="{active: isStep2}">
            <td>
              <span class="number">45</span>秒
            </td>
            <td>
              <span class="number">{{ beanAmount * 6 }} ml</span>
            </td>
          </tr>
          <tr class="start" v-bind:class="{active: isStep3}">
            <td>
              <span class="number">1</span>分
              <span class="number">30</span>秒
            </td>
            <td>
              <span class="number">{{ beanAmount * 9 }} ml</span>
            </td>
          </tr>
          <tr v-bind:class="{active: isStep4}">
            <td>
              <span class="number">2</span>分
              <span class="number">10</span>秒
            </td>
            <td>
              <span class="number">{{ beanAmount * 12 }} ml</span>
            </td>
          </tr>
          <tr v-bind:class="{active: isStep5}">
            <td>
              <span class="number">2</span>分
              <span class="number">45</span>秒
            </td>
            <td>
              <span class="number">{{ beanAmount * 15 }} ml</span>
            </td>
          </tr>
          <tr class="end" v-bind:class="{active: isStep6}">
            <td>
              <span class="number">3</span>分
              <span class="number">30</span>秒
            </td>
            <td>
              <span style="font-size:17px;">ドリッパーを外す</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="coffee-steps coffee-information">
      <table class="center">
        <tbody>
          <tr class="sep">
            <td colspan="3">お湯の温度</td>
          </tr>
          <tr class="start end">
            <td class="sep">浅煎り
              <div class="od">
                <span class="number">93</span>℃
              </div>
            </td>
            <td class="sep">中煎り
              <div class="od">
                <span class="number">88</span>℃
              </div>
            </td>
            <td>深煎り
              <div class="od">
                <span class="number">83</span>℃
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
    <!-- <router-link to="/about">Go to About page.</router-link> -->
  </div>
</template>

<style>
.active {
  color: red;
}
</style>