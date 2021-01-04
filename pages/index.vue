<template>
  <div id="root">
    <div v-if="showingPage == 'Setup'" class="bm-brewing-coffee-setup">
      <div class="body">
        <div>
          <div class="title">BREWING <br />COFFEE STYLES</div>
          <div class="coffee-setup">
            <div class="form">
              <div :class="$style.settingFiled">
                <div :class="$style.settingFiledLabel">豆の量</div>
                <div :class="$style.settingFiledInput">
                  <div
                    :class="$style.settingStepper"
                    @click="subtractBeanAmount"
                  >
                    -
                  </div>
                  <input
                    v-model="beanAmount"
                    type="number"
                    pattern="\d*"
                    max="999"
                    min="0"
                    :class="$style.settingFiledInputControl"
                    data-format="$1 g"
                  />
                  <div :class="$style.settingUnit">g</div>
                  <div :class="$style.settingStepper" @click="addBeanAmount">
                    +
                  </div>
                </div>
              </div>
              <div :class="$style.settingFiled">
                <div :class="$style.settingFiledLabel">淹れ方</div>
                <div :class="$style.settingFiledInput">
                  <select
                    v-model="selectedBrewMethod"
                    name="brewing-type"
                    :class="$style.settingFiledInputControl"
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
            <div>waterRatioDisplayMode {{ waterRatioDisplayMode }}</div>
          </div>
        </div>
        <div class="action" @click="resetTimer">
          <CloseIcon />
        </div>
      </div>
      <div class="body bm-brewing-coffee-now">
        <div :class="$style.waterRatioDisplayModeTabs">
          <div
            :class="[
              $style.waterRatioDisplayModeTab,
              waterRatioDisplayMode == 'total' ? $style.current : null,
            ]"
            @click="waterRatioDisplayMode = 'total'"
          >
            累積
          </div>
          <div
            :class="[
              $style.waterRatioDisplayModeTab,
              waterRatioDisplayMode == 'step' ? $style.current : null,
            ]"
            @click="waterRatioDisplayMode = 'step'"
          >
            注水量
          </div>
        </div>
        <div class="weight">
          {{
            waterRatioDisplayMode == 'total'
              ? beanAmount * stepNow.waterPerBean
              : beanAmount * stepNow.waterPerBeanThisStep
          }}
          <span class="unit">ml</span>
        </div>
        <div v-if="shouldAlertNextStep" class="text">
          {{
            waterRatioDisplayMode == 'total'
              ? 'まで注水してください'
              : 'を注水してください'
          }}
        </div>
        <div v-if="shouldAlertNextStep" :class="$style.helpDescription">
          {{
            waterRatioDisplayMode == 'total'
              ? 'このステップ：+' + beanAmount * stepNow.waterPerBeanThisStep + 'ml'
              : '合計：' + beanAmount * stepNow.waterPerBean + 'ml'
          }}
        </div>
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
            :water-ratio-display-mode="waterRatioDisplayMode"
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
    waterRatioDisplayMode: 'total',
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
            waterPerBeanThisStep: 2.5,
          },
          {
            stepNumber: 2,
            memo: '',
            time: 45,
            waterPerBean: 6,
            waterPerBeanThisStep: 3.5,
          },
          {
            stepNumber: 3,
            memo: '',
            time: 1 * 60 + 30,
            waterPerBean: 9,
            waterPerBeanThisStep: 3,
          },
          {
            stepNumber: 4,
            memo: '',
            time: 2 * 60 + 10,
            waterPerBean: 12,
            waterPerBeanThisStep: 3,
          },
          {
            stepNumber: 5,
            memo: '',
            time: 2 * 60 + 45,
            waterPerBean: 15,
            waterPerBeanThisStep: 3,
          },
          {
            stepNumber: 6,
            memo: '',
            time: 3 * 60 + 30,
            waterPerBean: 15,
            waterPerBeanThisStep: 0,
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
    addBeanAmount() {
      if (this.beanAmount < 999) this.beanAmount++
    },
    subtractBeanAmount() {
      if (this.beanAmount > 1) this.beanAmount--
    },
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

<style lang="sass" module>

.settingFiled
  padding: 8px 0
  display: flex
  align-items: center
.settingFiledLabel
  font-size: 18px
  color: rgba(#fff, 0.9)
  width: 75px
  margin: 0 8px -2px 0
.settingFiledInput
  display: flex
  align-items: center
  border-bottom: 2px solid #fff
  flex: 1
.settingFiledInputControl
  appearance: none
  background: transparent
  color: #ff0
  font-family: "Oswald", sans-serif
  border: 0
  outline: none
  padding: 6px
  font-size: 34px
  border-radius: 0
  text-align: center
  flex: 1
.settingStepper
  font-size: 20px
  padding: 8px 12px
  background-color: rgba(#fff, 0.1)
.settingUnit
  font-size: 24px
  color: rgba(#fff, 0.7)
  position: relative
  left: -18px
  bottom: -7px

.waterRatioDisplayModeTabs
  display: flex
  border: 1px solid rgba(#fff, 0.4)
  margin: 0 auto 30px auto
  width: 180px
.waterRatioDisplayModeTab
  flex: 1
  padding: 9px 6px
  color: rgba(#fff, 0.7)
  &.current
    background-color: rgba(#fff, 0.2)
    color: #fff
  & + &
    border-left: 1px solid rgba(#fff, 0.4)
.helpDescription
  font-size: 14px
  opacity: 0.7
  margin-top: 12px
</style>
