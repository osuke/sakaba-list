<template>
  <v-row align="center">
    <v-col class="d-flex" cols="12" xl="6">
      <v-select
        v-model="pref01"
        :items="$store.getters.pref"
        label="エリアを選択"
        hide-details
        outlined
        @change="updatedArea"
      ></v-select>
    </v-col>
    <v-col v-if="pref01 === '東京'" class="d-flex" cols="12" xl="6">
      <v-select
        v-model="pref02"
        :items="$store.state.restaurant.tokyo"
        label="エリアを選択"
        hide-details
        outlined
        @change="updatedArea"
      ></v-select>
    </v-col>

    <FilterItems v-if="sortedItems.length" :items="sortedItems" />
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FilterItem from '@/components/FilterItem.vue';
import FilterItems from '@/components/FilterItems.vue';

@Component({
  components: {
    FilterItems,
  },
})
export default class AreaFilter extends Vue {
  private pref01: string = '';
  private pref02: string = '';

  private updatedArea() {
    const area = {
      pref01: this.pref01,
      pref02: this.pref02,
    };

    this.$store.dispatch('setSortedItems', area);
  }

  private get sortedItems() {
    return this.$store.state.restaurant.sortedItems;
  }
}
</script>

<style scoped>
</style>
