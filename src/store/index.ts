import Vue from 'vue';
import Vuex from 'vuex';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { fetchSakabaList, IRestaurant } from '@/api/fetchSakabaList';
import { Result } from '@/store/Result';

Vue.use(Vuex);

@Module
class Restaurant extends VuexModule {
  public items: IRestaurant[] = [];

  @Action
  public async setItems() {
    const data = await fetchSakabaList().catch(() => { this.context.commit('APP_ERROR'); });
    if (data) {
      this.context.commit('SET_ITEMS', data.items);
    }
  }

  @Mutation
  private SET_ITEMS(items: IRestaurant[]) {
    this.items = items;
  }

  @Mutation
  private APP_ERROR() {
    alert('error');
  }
}
export default new Vuex.Store({
  modules: {
    restaurant: Restaurant,
    result: Result,
  },
});
