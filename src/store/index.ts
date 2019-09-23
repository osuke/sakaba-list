import Vue from 'vue';
import Vuex from 'vuex';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { fetchSakabaList, IRestaurant } from '@/api/fetchSakabaList';
import { Result } from '@/store/Result';

Vue.use(Vuex);

@Module
class Restaurant extends VuexModule {
  public items: IRestaurant[] = [];
  public sortedItems: IRestaurant[] = [];
  public tokyo: string[] = [
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

  @Action
  public async setItems() {
    const data = await fetchSakabaList().catch(() => { this.context.commit('APP_ERROR'); });
    if (data) {
      this.context.commit('SET_ITEMS', data.items);
    }
  }

  @Action
  public async setSortedItems(area: { pref01: string; pref02: string; } ) {
    let selectedArea = '';

    if (area.pref01.length > 0 && area.pref01 !== '東京') {
      // not Tokyo
      selectedArea = area.pref01;
    } else {
      // Tokyo
      selectedArea = area.pref02;
    }

    const restaurants = this.items.filter((restaurant) => {
      return restaurant.area === selectedArea;
    });

    this.context.commit('SET_SORTED_ITEMS', restaurants);
  }

  @Mutation
  private SET_ITEMS(items: IRestaurant[]) {
    this.items = items;
  }

  @Mutation
  private SET_SORTED_ITEMS(items: IRestaurant[]) {
    this.sortedItems = items;
  }

  @Mutation
  private APP_ERROR() {
    alert('error');
  }

  private get pref() {
    const areas: string[] = ['東京'];
    this.items.forEach((restaurant: IRestaurant) => {
      if (areas.indexOf(restaurant.area) === -1 && this.tokyo.indexOf(restaurant.area) === -1) {
        areas.push(restaurant.area);
      }
    });

    return areas;
  }
}
export default new Vuex.Store({
  modules: {
    restaurant: Restaurant,
    result: Result,
  },
});
