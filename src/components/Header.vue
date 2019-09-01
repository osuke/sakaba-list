<template>
  <v-toolbar class="primary"><v-toolbar-title class="title">酒場リスト</v-toolbar-title></v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<style scoped>
.title {
  color: #fff;
}
</style>
