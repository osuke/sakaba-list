import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { fetchSearchResult, ISearchResultItem } from '@/api/fetchSearchResult';
import { IRestaurant } from '@/api/fetchSakabaList';

@Module
export class Result extends VuexModule {
  public items: ISearchResultItem[] = [];

  @Action
  public async setResultItems(restaurant: IRestaurant) {
    let strArr: string[] = restaurant.name.split('「');
    strArr = strArr[strArr.length - 1].split('」');

    const data = await fetchSearchResult(strArr[0]).catch(() => { this.context.commit('APP_ERROR'); });

    if (data) {
      this.context.commit('SET_RESULT_ITEMS', data.rest);
    }
  }

  @Mutation
  private SET_RESULT_ITEMS(data: ISearchResultItem[]) {
    this.items = data;
  }
}
