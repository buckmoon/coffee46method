
<template>
    <div
        class="step"
    >
        <div class="icon">
        <i class="mdi" :class="step.lastStepFlg ? 'mdi-coffee' : 'mdi-water'"></i>
        </div>
        <div
        class="time"
        >{{ step.time >= 60 ? (step.time - step.time % 60) / 60 + "m" : "" }}{{ zeroPadding(step.time % 60, step.time) }}s</div>
        <div
        class="weight"
        >{{ step.lastStepFlg ? "END" : Math.round(beanAmount * step.waterPerBean) + "ml" }}</div>
    </div>
</template>
<script>

export default {
    props: {
        step: {},
        beanAmount: null
    },
    methods: {
        zeroPadding(num, originalNum) {
            if (num >= 10 || originalNum == 0) {
                return "" + num
            }
            if (num < 10) {
                return "0" + num
            }
        }
    }
}
</script>