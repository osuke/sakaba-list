<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>
        <div>{{ name }}</div>
        <div><router-link :to="pageUrl">店舗を検索</router-link></div>
        <div><a :href="url" target="_blank">番組ページ</a></div>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FilterItem extends Vue {
  @Prop() private id!: string;
  @Prop() private name!: string;
  @Prop() private url!: string;

  private get pageUrl() {
    return `restaurant/${this.id}`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
