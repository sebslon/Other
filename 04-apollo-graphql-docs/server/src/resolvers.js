const resolvers = {
  Query: {
    tracksForHome: (parent, args, context, info) => {
      const { dataSources } = context;

      return dataSources.trackAPI.getTracksForHome();
    },

    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  // Resolver chaining
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    modules: ({id}, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    }
  },
};

module.exports = resolvers;
