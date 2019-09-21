<template>
  <v-row align="center">
    <v-col class="d-flex" cols="12" xl="6">
      <v-select
        v-model="pref01"
        :items="prefs"
        label="エリアを選択"
        hide-details
        outlined
      ></v-select>
    </v-col>
    <v-col v-if="pref01 === '東京'" class="d-flex" cols="12" xl="6">
      <v-select
        v-model="pref02"
        :items="tokyo"
        label="エリアを選択"
        hide-details
        outlined
      ></v-select>
    </v-col>

    <v-col
      v-if="(pref01.length > 0 && pref01 !== '東京') || (pref02.length > 0 && pref01 === '東京')"
    >
      <FilterItem
        v-for="restaurant in result"
        :key="`restaurant-${restaurant.url}`"
        :id="restaurant.id"
        :url="restaurant.url"
        :name="restaurant.name"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FilterItem from '@/components/FilterItem.vue';
import { IRestaurant } from '@/api/fetchSakabaList';

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

@Component({
  components: {
    FilterItem,
  },
})
export default class FilterItems extends Vue {
  private tokyo: string[] = tokyo;
  private pref01: string = '';
  private pref02: string = '';

  private updated() {
    // tslint:disable-next-line
    console.log(this.$store.state);
    if (this.pref01 !== '東京') {
      this.pref02 = '';
    }
  }

  private get prefs() {
    const areas: string[] = ['東京'];

    this.$store.state.restaurant.items.forEach((restaurant: IRestaurant) => {
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

    const restaurants = this.$store.state.restaurant.items.filter((restaurant: IRestaurant) => {
      return restaurant.area === area;
    });

    return restaurants;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
