<template>
  <div class="step">
    <div class="icon">
      <CoffeeIcon v-if="step.lastStepFlg" />
      <WaterIcon v-else />
    </div>
    <div class="time">
      {{ step.time >= 60 ? (step.time - (step.time % 60)) / 60 + 'm' : ''
      }}{{ zeroPadding(step.time % 60, step.time) }}s
    </div>
    <div class="weight">
      {{
        step.lastStepFlg
          ? 'END'
          : waterRatioDisplayMode == 'total'
            ? Math.round(beanAmount * step.waterPerBean) + 'ml'
            : Math.round(beanAmount * step.waterPerBeanThisStep) + 'ml'
      }}
    </div>
  </div>
</template>
<script>
import CoffeeIcon from 'vue-material-design-icons/Coffee'
import WaterIcon from 'vue-material-design-icons/Water'

export default {
  components: {
    CoffeeIcon,
    WaterIcon,
  },
  props: {
    step: {
      type: Object,
      default: () => ({}),
    },
    beanAmount: {
      type: Number,
      default: () => 0,
    },
    waterRatioDisplayMode: {
      type: String,
       default: () => '',
    }
  },
  methods: {
    zeroPadding(num, originalNum) {
      if (num >= 10 || originalNum === 0) {
        return '' + num
      }
      if (num < 10) {
        return '0' + num
      }
    },
  },
}
</script>
