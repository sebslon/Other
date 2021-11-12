const resolvers = {
  Query: {
    tracksForHome: (_, __, context) => {
      const { dataSources } = context;

      return dataSources.trackAPI.getTracksForHome();
    },
  },

  Track: {
    author: (parent, _, {dataSources}) => {
      const { authorId } = parent;

      return dataSources.trackAPI.getAuthor(authorId);
    }
  }
};

module.exports = resolvers;