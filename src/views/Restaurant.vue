<template>
  <div>
    <Header />
    <div v-if="restaurantInfo">{{restaurantInfo.name}}の検索結果 by ぐるなびAPI</div>
    <div
      v-for="item in result"
      :key="`id-${item.id}`"
    >{{item.name}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import { IRestaurant } from '@/store';

@Component({
  components: {
    Header,
  },
})
export default class Restaurant extends Vue {
  private items: any[] = [];

  private created() {
    if (this.$store.state.restaurant.items.length !== 0) {
      this.$store.dispatch('setResultItems', this.restaurantInfo);
    }
  }

  private updated() {
    if (this.$store.state.result.items.length === 0) {
      this.$store.dispatch('setResultItems', this.restaurantInfo);
    }
  }

  private get result() {
    return this.$store.state.result.items;
  }

  private get restaurantInfo() {
    const data: IRestaurant[] = this.$store.state.restaurant.items.filter((restaurant: IRestaurant) => {
      return restaurant.id === this.$route.params.id;
    });
    return data[0];
  }
}
</script>
