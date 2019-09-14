<template>
  <div>
    <Header />
    <div>Restaurant {{$route.params.id}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Restaurant extends Vue {
}
</script>
