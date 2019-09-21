<template>
  <div>
    <Header />
    <v-content>
      <v-container fluid>
        <div
          class="subtitle-1 mb-3"
          v-if="restaurantInfo"
        >
          {{restaurantInfo.name}}の検索結果<br>
          by ぐるなびAPI
        </div>
        <v-card
          class="mb-3 text-left"
          v-for="item in result"
          :key="`id-${item.id}`"
          flat
        >
          <v-card-title>{{item.name}}</v-card-title>
          <v-card-text class="d-flex align-center">
            <v-icon class="mr-1" small>mdi-map-marker</v-icon>
            <a
              :href="`https://www.google.com/maps/search/?api=1&query=${item.address}`"
              target="_blank"
            >
              {{item.address}}
            </a>
          </v-card-text>
          <v-card-text class="d-flex justify-end">
            <v-icon class="mr-1" small>mdi-open-in-new</v-icon>
            <a :href="item.url" target="_blank">
              店舗情報詳細
            </a>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import { IRestaurant } from '@/api/fetchSakabaList';
import { ISearchResultItem } from '@/api/fetchSearchResult';

@Component({
  components: {
    Header,
  },
})
export default class Restaurant extends Vue {
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
    let items: ISearchResultItem[] = [];

    if (this.restaurantInfo) {
      items = this.$store.state.result.items.filter((item: ISearchResultItem) => {
        return item.address.indexOf(this.restaurantInfo.area) !== -1;
      });
    }

    return items;
  }

  private get restaurantInfo() {
    const data: IRestaurant[] = this.$store.state.restaurant.items.filter((restaurant: IRestaurant) => {
      return restaurant.id === this.$route.params.id;
    });
    return data[0];
  }
}
</script>
