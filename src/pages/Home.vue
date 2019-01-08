<script>
export default {
  data: () => ({
    beanAmount: 20
  })
}
</script>

<style lang="css" scoped>
.wrap {
  color: #666;
}
.table {
  margin-top: 60px;
  color: #333;
}
</style>
<template>
  <div class="wrap">
    <ol>
      <li>ペーパーを湯通しする</li>
      <li>総湯量を40%と60%に分けて淹れる</li>
    </ol>
    <div>
    豆の量（グラム）
    <input type="text" v-model="beanAmount" />g
    </div>
    <div>
      <table class="table">
        <thead>
          <th>
            累積時間
          </th>
          <th>
            累積注湯量
          </th>
        </thead>
        <tbody>
          <tr>
            <td>0秒</td>
            <td class="blue">{{ beanAmount * 2.5 }} ml</td>
          </tr>
          <tr>
            <td>45秒</td>
            <td>{{ beanAmount * 6 }} ml</td>
          </tr>
          <tr>
            <td>1分30秒</td>
            <td>{{ beanAmount * 9 }} ml</td>
          </tr>
          <tr>
            <td>2分10秒</td>
            <td>{{ beanAmount * 12 }} ml</td>
          </tr>
          <tr>
            <td>2分45秒</td>
            <td>{{ beanAmount * 15 }} ml</td>
          </tr>
          <tr>
            <td>3分30秒</td>
            <td>ドリッパーを外す</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <router-link to="/about">Go to About page.</router-link> -->
  </div>
</template>

