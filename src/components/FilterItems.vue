<template>
  <div>
    <div>
      <select v-model="pref01">
        <option value="">選択してください</option>
        <option v-for="(pref, index) in prefs" :key="`pref-${index}`" :value="pref">{{ pref }}</option>
      </select>
      <div v-if="pref01 === '東京'">
        <select v-model="pref02">
          <option value="">選択してください</option>
          <option v-for="(city, index) in tokyo" :key="`city-${index}`" :value="city">{{ city }}</option>
        </select>
      </div>
      <div
        v-if="(pref01.length > 0 && pref01 !== '東京') || (pref02.length > 0 && pref01 === '東京')"
      >
        <article v-for="restaurant in result" :key="`restaurant-${restaurant.url}`">
          <a :href="restaurant.url" target="_blank">{{ restaurant.name }}</a>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface IRestaurant {
  area: string;
  name: string;
  url: string;
}

const tokyo: string[] = [
  '千代田区',
  '中央区',
  '港区',
  '新宿区',
  '文京区',
  '台東区',
  '墨田区',
  '江東区',
  '品川区',
  '目黒区',
  '大田区',
  '世田谷区',
  '渋谷区',
  '中野区',
  '杉並区',
  '豊島区',
  '北区',
  '荒川区',
  '板橋区',
  '練馬区',
  '足立区',
  '葛飾区',
  '江戸川区',
  '東京都（23区以外）',
];

interface ISortedData {
  pref: '東京';
  items: IRestaurant[];
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private restaurantData!: IRestaurant[];
  private tokyo: string[] = tokyo;
  private pref01: string = '';
  private pref02: string = '';

  private updated() {
    if (this.pref01 !== '東京') {
      this.pref02 = '';
    }
  }

  private get prefs() {
    const areas: string[] = ['東京'];

    this.restaurantData.forEach((restaurant) => {
      if (areas.indexOf(restaurant.area) === -1 && tokyo.indexOf(restaurant.area) === -1) {
        areas.push(restaurant.area);
      }
    });

    return areas;
  }

  private get result() {
    let area: string = '';

    if (this.pref01.length > 0 && this.pref01 !== '東京') {
      area = this.pref01;
    } else {
      area = this.pref02;
    }

    const restaurants = this.restaurantData.filter((restaurant) => restaurant.area === area);

    return restaurants;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
