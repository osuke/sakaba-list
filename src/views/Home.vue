<template>
  <div class="home">
    <Header />
    <v-content>
      <v-container fluid>
        <AreaFilter />
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AreaFilter from '@/containers/AreaFilter.vue';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
    AreaFilter,
  },
})
export default class Home extends Vue {
}
</script>
