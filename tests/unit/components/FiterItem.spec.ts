import { shallowMount, createLocalVue } from '@vue/test-utils';
import FilterItem from '@/components/FilterItem.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('FilterItem.vue', () => {
  const props = {
    id: '010',
    name: 'オウサム居酒屋',
    url: 'https://hogehoge.com',
  };

  it('renders name props as a text', () => {
    const wrapper = shallowMount(FilterItem, { localVue });
    wrapper.setProps(props);

    expect(wrapper.find('.subtitle-1').text()).toBe(props.name);
  });

  it('sets url props to a link as href attribute', () => {
    const wrapper = shallowMount(FilterItem, { localVue });
    wrapper.setProps(props);
    const routerLink = wrapper.findAll('.subtitle-2');
    expect(routerLink.at(1).attributes().href).toBe(props.url);
  });

  it('sets correct url to router-link as to attribute', () => {
    const wrapper = shallowMount(FilterItem, { localVue });
    wrapper.setProps(props);
    const routerLink = wrapper.findAll('.subtitle-2');
    expect(routerLink.at(0).attributes().to).toBe(`restaurant/${props.id}`);
  });
});
