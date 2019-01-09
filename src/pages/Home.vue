<script>
export default {
  data: () => ({
    beanAmount: 20
  })
};
</script>

<template>
  <div class="wrap">
    <div class="page-title">
      4:6 methodCalc
    </div>
    <div class="coffee-setup">
      <div class="title">豆の量</div>
      <div class="form">
        <input type="number" v-model="beanAmount" />
      </div>
      <div class="unit number">g</div>
    </div>
    <div class="coffee-steps">
      <table class="table">
        <thead>
          <th>
            累積時間
          </th>
          <th>
            累積注湯量
          </th>
        </thead>
        <tbody class="large-text">
          <tr class="start">
            <td><span class="number">0</span>秒</td>
            <td><span class="number">{{ beanAmount * 2.5 }} ml</span></td>
          </tr>
          <tr class="end sep">
            <td><span class="number">45</span>秒</td>
            <td><span class="number">{{ beanAmount * 6 }} ml</span></td>
          </tr>
          <tr class="start">
            <td><span class="number">1</span>分<span class="number">30</span>秒</td>
            <td><span class="number">{{ beanAmount * 9 }} ml</span></td>
          </tr>
          <tr>
            <td><span class="number">2</span>分<span class="number">10</span>秒</td>
            <td><span class="number">{{ beanAmount * 12 }} ml</span></td>
          </tr>
          <tr>
            <td><span class="number">2</span>分<span class="number">45</span>秒</td>
            <td><span class="number">{{ beanAmount * 15 }} ml</span></td>
          </tr>
          <tr class="end">
            <td><span class="number">3</span>分<span class="number">30</span>秒</td>
            <td><span style="font-size:17px;">ドリッパーを外す</span></td>
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
            <td class="sep">
              浅煎り
              <div class="od">
                <span class="number">93</span>℃
              </div>
            </td>
            <td class="sep">
              中煎り
              <div class="od">
                <span class="number">88</span>℃
              </div>
            </td>
            <td>
              深煎り
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
      <div class="quote">このシミュレーターは、バリスタ世界チャンピオン・粕谷哲さんの<a href="https://www.buzzfeed.com/jp/koumibaisen/coffee-lesson">&nbsp;4:6 method</a>&nbsp;を参考に作成しています。</div>
    </div>
    <!-- <router-link to="/about">Go to About page.</router-link> -->
  </div>
</template>
