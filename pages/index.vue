<template>
  <div id="root">
    <div v-if="showingPage == 'Setup'" class="bm-brewing-coffee-setup">
      <div class="body">
        <div>
          <div class="title">BREWING <br />COFFEE STYLES</div>
          <div class="coffee-setup">
            <div class="form">
              <div class="filed">
                <label>豆の量</label>
                <input
                  v-model="beanAmount"
                  type="number"
                  pattern="\d*"
                  max="999"
                  min="0"
                  class="bm-form-control"
                  data-format="$1 g"
                />
                <div class="unit">g</div>
              </div>
              <div class="filed">
                <label>淹れ方</label>
                <select
                  v-model="selectedBrewMethod"
                  name="brewing-type"
                  class="bm-form-control"
                >
                  <option
                    v-for="brew in brewData"
                    :key="brew.brewName.short"
                    :value="brew"
                  >
                    {{ brew.brewName.short }}
                  </option>
                </select>
              </div>
            </div>
            <div class="button" @click="startTimer">START</div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="copyright">
          <a href="https://www.buckmoon.co.jp/">
            <img src="buckmoon-typo-white.png" alt="buckmoon" />
          </a>
        </div>
        <div class="quote">
          バリスタ世界チャンピオン・粕谷哲さんの
          <a href="https://www.buzzfeed.com/jp/koumibaisen/coffee-lesson"
            >&nbsp;4:6 method</a
          >&nbsp;を参考に作成しています。
        </div>
      </div>
    </div>

    <div v-if="showingPage == 'BrewingCoffee'" class="bm-brewing-coffee">
      <div class="header">
        <div class="title">
          <div class="name">{{ selectedBrewMethod.brewName.long }}</div>
          <div class="options">
            <div class="option weight">
              <ScaleIcon />
              {{ beanAmount }}g
            </div>
            <div class="option temperature">
              <KettleIcon />
              {{ selectedBrewMethod.temperature }}
            </div>
          </div>
        </div>
        <div class="action" @click="resetTimer">
          <CloseIcon />
        </div>
      </div>
      <div class="body bm-brewing-coffee-now">
        <div class="weight">
          {{ beanAmount * stepNow.waterPerBean }}
          <span class="unit">ml</span>
        </div>
        <div v-if="shouldAlertNextStep" class="text">まで注水してください</div>
        <div v-if="!shouldAlertNextStep" class="text">
          ドリッパーを外してください
        </div>
        <div class="separate"></div>
        <div v-if="shouldAlertNextStep" class="time">
          <span class="text">NEXT</span>
          {{ timeToNextStep }}s
        </div>
        <div v-else class="time">
          <span class="text">END</span>
        </div>
        <div v-if="shouldAlertNextStep" class="action">
          <div
            v-if="isTimerInitialized || isTimerPaused"
            class="button start"
            @click="startTimer"
          >
            <PlayIcon />
          </div>
          <div v-if="isTimerRunning" class="button" @click="pauseTimer">
            <PauseIcon />
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="bm-timer">
          <template v-if="timerForText.minutes > 0">
            <div class="number">{{ timerForText.minutes }}</div>
            <div class="unit">:</div>
          </template>
          <template v-else>
            <div class="number">00</div>
            <div class="unit">:</div>
          </template>
          <div class="number">{{ timerForText.seconds10 }}</div>
          <div class="number">{{ timerForText.seconds1 }}</div>
        </div>
        <div class="bm-brewing-coffee-steps">
          <footer-step
            v-for="step in selectedBrewMethod.steps"
            :key="step.stepNumber"
            :class="{ active: step.stepNumber == stepNumber }"
            :step="step"
            :bean-amount="beanAmount"
          ></footer-step>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScaleIcon from 'vue-material-design-icons/Scale'
import KettleIcon from 'vue-material-design-icons/Kettle'
import CloseIcon from 'vue-material-design-icons/Close'
import PlayIcon from 'vue-material-design-icons/Play'
import PauseIcon from 'vue-material-design-icons/Pause'
import FooterStep from '~/components/FooterStep'

export default {
  components: {
    FooterStep,
    ScaleIcon,
    KettleIcon,
    CloseIcon,
    PlayIcon,
    PauseIcon,
  },
  data: () => ({
    showingPage: 'Setup',
    beanAmount: 20,
    timer: {
      value: 0,
      setIntervalPointer: null,
      status: 'initialized', // "initialized", "running", "paused"
    },
    brewData: [
      {
        brewName: {
          long: '4:6 Coffee Method',
          short: '4:6 Method',
        },
        temperature: '83-93℃',
        steps: [
          {
            stepNumber: 1,
            memo: '',
            time: 0,
            waterPerBean: 2.5,
          },
          {
            stepNumber: 2,
            memo: '',
            time: 45,
            waterPerBean: 6,
          },
          {
            stepNumber: 3,
            memo: '',
            time: 1 * 60 + 30,
            waterPerBean: 9,
          },
          {
            stepNumber: 4,
            memo: '',
            time: 2 * 60 + 10,
            waterPerBean: 12,
          },
          {
            stepNumber: 5,
            memo: '',
            time: 2 * 60 + 45,
            waterPerBean: 15,
          },
          {
            stepNumber: 6,
            memo: '',
            time: 3 * 60 + 30,
            waterPerBean: 15,
            lastStepFlg: true,
          },
        ],
      },
      {
        brewName: {
          long: '井崎英典氏の世界一美味しいコーヒーの淹れ方',
          short: 'Izaki Hidenori',
        },
        temperature: 'X℃',
        steps: [
          {
            stepNumber: 1,
            memo: 'フィルターにもお湯をかけます',
            time: 0,
            waterPerBean: 3,
          },
          {
            stepNumber: 2,
            memo: '',
            time: 60,
            waterPerBean: 6,
          },
          {
            stepNumber: 3,
            memo: '',
            time: 120,
            waterPerBean: 15,
          },
          {
            stepNumber: 4,
            memo: '',
            time: 4 * 60,
            waterPerBean: 15,
            lastStepFlg: true,
          },
        ],
      },
      {
        brewName: {
          long: 'BLUE BOTTLE Pour Over',
          short: 'BLUE BOTTLE',
        },
        temperature: 'X℃',
        steps: [
          {
            stepNumber: 1,
            memo: '',
            time: 0,
            waterPerBean: 2,
          },
          {
            stepNumber: 2,
            memo: '',
            time: 45,
            waterPerBean: 5,
          },
          {
            stepNumber: 3,
            memo: '',
            time: 105,
            waterPerBean: 8.422,
          },
          {
            stepNumber: 4,
            memo: '',
            time: 130,
            waterPerBean: 11.7,
          },
          {
            stepNumber: 5,
            memo: '',
            time: 150,
            waterPerBean: 11.7,
            lastStepFlg: true,
          },
        ],
      },
    ],
    selectedBrewMethod: {},
  }),
  computed: {
    isTimerRunning() {
      return this.timer.status === 'running'
    },
    isTimerInitialized() {
      return this.timer.status === 'initialized'
    },
    isTimerPaused() {
      return this.timer.status === 'paused'
    },
    stepNumber() {
      if (this.timer.status === 'initialized') return 1
      const steps = this.selectedBrewMethod.steps
      const lastStep = steps[steps.length - 1]
      if (this.timer.value >= lastStep.time) return lastStep.stepNumber
      const time = this.timer.value
      const secondsBySteps = this.selectedBrewMethod.steps
        .filter((step) => {
          return time >= step.time
        })
        .map((step) => {
          return step.stepNumber
        })
      // return secondsBySteps
      return Math.max(...secondsBySteps)
    },
    stepNow() {
      return this.selectedBrewMethod.steps[this.stepNumber - 1]
      // return this.selectedBrewMethod.steps[this.stepNumber]
    },
    nextStep() {
      return this.selectedBrewMethod.steps[this.stepNumber]
    },
    shouldAlertNextStep() {
      if (this.isTimerInitialized) return false
      if (this.timeToNextStep < 1) return false
      if (this.timeToNextStep >= 1) return true
      return false
    },
    timeToNextStep() {
      if (this.nextStep) {
        return this.nextStep.time - this.timer.value
      } else {
        return 0
      }
    },
    nextStepNumber() {
      return this.stepNumber + 1
    },
    timerForText() {
      const s = this.timer.value % 60
      const minutes = (this.timer.value - s) / 60
      const seconds1 = s % 10
      const seconds10 = (s - seconds1) / 10
      return { minutes, seconds10, seconds1 }
    },
    selectedSteps() {
      return this.selectedBrewMethod.steps
    },
    waterAmountNeeded() {
      const steps = this.selectedBrewMethod.steps
      const lastStep = steps[steps.length - 1]
      return lastStep.waterPerBean * this.beanAmount
    },
  },
  created() {
    this.selectedBrewMethod = this.brewData[0]
  },
  mounted() {
    // this.$ga.page('/')
  },
  methods: {
    startTimer() {
      this.showingPage = 'BrewingCoffee'
      this.timer.setIntervalPointer = setInterval(() => {
        this.timer.value += 1
      }, 1000)
      this.timer.status = 'running'
    },
    pauseTimer() {
      clearInterval(this.timer.setIntervalPointer)
      this.timer.status = 'paused'
    },
    resetTimer() {
      clearInterval(this.timer.setIntervalPointer)
      this.showingPage = 'Setup'
      this.timer.value = 0
      this.timer.status = 'initialized'
    },
  },
}
</script>
