<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
</style>

<script>
export default {
  head() {
    return {
      title: 'XXX',
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        {
          hid: 'description',
          name: 'description',
          content:
            'バリスタ世界チャンピオン・粕谷哲さんの考案したコーヒーの抽出方法 4:6 method で注水する量を手軽に計算できるシミュレーターです。'
        }
      ]
    }
  }
}
</script>