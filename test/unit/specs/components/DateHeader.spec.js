import Vue from 'vue'
import DateHeader from '@/components/DateHeader'

describe('DateHeader.vue', () => {
  let vm;

  before(() => {
    const Constructor = Vue.extend(DateHeader)
    vm = new Constructor().$mount()
  })

  describe('computed', () => {
    it('todaysDate', () => {
      const today = new Date()
      expect(vm.todaysDate).to.equal(
        `${today.getMonth() + 1} / ${today.getDate()} / ${today.getFullYear()}`
      )
    })
  })
})
