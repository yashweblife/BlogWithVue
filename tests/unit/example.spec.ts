import { mount } from '@vue/test-utils'
import Tab1Page from '@/views/Tab1Page.vue'
import Card from '@/components/Card.vue'
describe('Tab1Page.vue', () => {
  it('renders tab 1 Tab1Page', () => {
    const wrapper = mount(Tab1Page)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})

describe('Card.vue',()=>{
  it('renders a card', ()=>{
    const wrapper = mount(Card)
    expect(wrapper.text()).toMatch('')
  })
})