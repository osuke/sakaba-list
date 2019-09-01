<template>
  <div class="home">
    <Header />
    <FilterItems :restaurantData="restaurantData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilterItems, { IRestaurant } from '@/components/FilterItems.vue'; // @ is an alias to /src
import Header from '@/components/Header.vue'; // @ is an alias to /src
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants';

interface IResponse {
  items: IRestaurant[];
}


@Component({
  components: {
    Header,
    FilterItems,
  },
})
export default class Home extends Vue {
  private restaurantData: IRestaurant[] = [];

  private created() {
    this.fetchData();
  }

  private fetchData() {
    axios.get(API_URL)
      .then((res: AxiosResponse<IResponse>) => {
        this.restaurantData = res.data.items;
      });
  }
}
</script>
