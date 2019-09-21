<template>
  <v-card class="mb-2" flat>
    <v-card-title class="subtitle-1">{{name}}</v-card-title>
    <div class="d-flex justify-end">
      <v-card-actions>
        <router-link class="subtitle-2" :to="pageUrl">店舗を検索</router-link>
      </v-card-actions>
      <v-card-actions>
        <v-icon class="mr-1" small>mdi-open-in-new</v-icon>
        <a class="subtitle-2" :href="url" target="_blank">番組ページ</a>
      </v-card-actions>
    </div>
  </v-card>
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
