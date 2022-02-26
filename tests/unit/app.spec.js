import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('Test click event', async () => {
    const msg = 'Awesome!';
    const wrapper = mount(App);
    await wrapper.find('button').trigger('click');
    expect(wrapper.vm.message).toBe(msg);
  });
});
