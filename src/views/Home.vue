<template>
  <div class="home">
    <Header />
    <v-content>
      <v-container fluid>
        <FilterItems />
      </v-container>
    </v-content>
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
}
</script>
