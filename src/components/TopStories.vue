<template>
  <div class="top-stories">
    <ol id="story-list">
      <li v-for="(stories, name) in groupedStories(topStories)">
        <strong>{{name}}</strong>
        <ul>
          <li v-for="story in stories">
            <h3>{{story.title}} - {{publishedDate(story.published_date)}}</h3>
            <p>{{story.abstract}}</p>
            <p><a v-bind:href="story.url">Read more...</a></p>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TopStories',
  computed: {
    ...mapGetters([
      'topStories'
    ])
  },
  methods: {
    groupedStories: (topStories, size=10) => {
      if (topStories) {
        return topStories.slice(size).reduce((list, story) => {
          const { section } = story;

          list[section] = list[section] || [];
          list[section].push(story);
          return list;
        }, {})
      }

      return null;
    },
    publishedDate: dateTimeString => {
      const parsedDate = new Date(dateTimeString);
      return parsedDate.toLocaleString('en-US');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
#story-list {
  text-align: left;
}
</style>
