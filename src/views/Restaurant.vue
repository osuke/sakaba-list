<template>
  <div>
    <Header />
    <div>{{restaurantInfo.name}}</div>
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
  private get restaurantInfo() {
    const data = this.$store.state.restaurant.items.filter((restaurant: IRestaurant) => {
      return restaurant.id === this.$route.params.id;
    });
    // tslint:disable-next-line
    console.log(data);
    return data[0];
  }
}
</script>
