import store from '@/store/store'

describe('store.js', () => {
  const topStories = ['All', 'the', 'news', 'that\'s', 'fit', 'to', 'print']
  const {
    getters,
  } = store;

  store.replaceState({
    topStories
  })

  describe('getters', () => {
    it('topStories', () => {
      const result = getters.topStories

      expect(result).to.deep.equal(topStories)
    })
  });
});
