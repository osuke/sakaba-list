<template>
  <div class="home">
    <FilterItems :restaurantData="restaurantData"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilterItems, { IRestaurant } from '@/components/FilterItems.vue'; // @ is an alias to /src
import axios, { AxiosResponse } from 'axios';

interface IResponse {
  items: IRestaurant[];
}


@Component({
  components: {
    FilterItems,
  },
})
export default class Home extends Vue {
  private restaurantData: IRestaurant[] = [];

  private created() {
    this.fetchData();
  }

  private fetchData() {
    axios.get('/api/posts')
      .then((res: AxiosResponse<IResponse>) => {
        this.restaurantData = res.data.items;
      });
  }
}
</script>
