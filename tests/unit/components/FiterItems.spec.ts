import { shallowMount, createLocalVue } from '@vue/test-utils';
import FilterItems from '@/components/FilterItems.vue';
import FilterItem from '@/components/FilterItem.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('FilterItems', () => {
  it('render FilterItem.vue', () => {
    const wrapper = shallowMount(FilterItems, { localVue });
    wrapper.setProps({
      items: [
        {
          id: '010',
          area: '杉並区',
          name: 'オウサム居酒屋',
          url: 'https://hogehoge.com',
        },
      ],
    });

    expect(wrapper.contains(FilterItem)).toBe(true);
  });

  it('does not render FilterItem.vue', () => {
    const wrapper = shallowMount(FilterItems, { localVue });
    wrapper.setProps({
      items: [],
    });

    expect(wrapper.contains(FilterItem)).toBe(false);
  });
});
