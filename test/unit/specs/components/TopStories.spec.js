import Vue from 'vue';
import TopStories from '@/components/TopStories';
import backupData from '@/store/backupData';

// NOTE: I wanted to do more thorough testing but was getting errors on backupData loading and
// the Vuex getters. Needed more time to debug...
describe('TopStories.vue', () => {
  let vm;

  before(() => {
    const Constructor = Vue.extend(TopStories);
    vm = new Constructor().$mount();
  })

  describe('methods', () => {
    it('groupedStories when topStories is null', () => {
      expect(vm.groupedStories()).to.equal(
        null
      );
    }),
    it('publishedDate converts to proper string', () => {
      const result = vm.publishedDate("2018-03-09T18:04:32-05:00");
      expect(result).to.equal('March 9, 2018 at 3:04:32 PM PST');
    })
  });
});