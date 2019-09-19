import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { fetchSearchResult } from '@/api/fetchSearchResult';

@Module
export class Result extends VuexModule {
  public items: any[] = [];

  @Action
  public async setResultItems(restaurant: any) {
    let strArr: string[] = restaurant.name.split('「');
    strArr = strArr[strArr.length - 1].split('」');

    const data = await fetchSearchResult(strArr[0]).catch(() => { this.context.commit('APP_ERROR'); });

    if (data) {
      this.context.commit('SET_RESULT_ITEMS', data.rest);
    }
  }

  @Mutation
  private SET_RESULT_ITEMS(data: any) {
    // tslint:disable-next-line
    console.log(data);
    this.items = data;
  }
}
