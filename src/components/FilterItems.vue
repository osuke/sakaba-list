<template>
  <v-col>
    <FilterItem
      v-for="item in items"
      :key="`restaurant-${item.url}`"
      :id="item.id"
      :url="item.url"
      :name="item.name"
    />
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FilterItem from '@/components/FilterItem.vue';
import { IRestaurant } from '@/api/fetchSakabaList';

@Component({
  components: {
    FilterItem,
  },
})
export default class FilterItems extends Vue {
  @Prop() private items!: IRestaurant[];
}
</script>

<style scoped>
</style>
