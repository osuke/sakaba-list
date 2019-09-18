<template>
  <div class="home">
    <Header />
    <FilterItems />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilterItems from '@/components/FilterItems.vue';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
    FilterItems,
  },
})
export default class Home extends Vue {
  private created() {
    this.$store.dispatch('setItems');
  }
}
</script>
