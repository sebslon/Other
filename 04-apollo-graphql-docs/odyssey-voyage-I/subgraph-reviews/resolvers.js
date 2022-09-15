const resolvers = {
  Query: {
    latestReviews: (_, __, { dataSources }) => {
      return dataSources.reviewsAPI.getLatestReviews();
    },
  },
  Mutation: {
    submitReview: (_, { locationReview }, { dataSources }) => {
      const newReview =
        dataSources.reviewsAPI.submitReviewForLocation(locationReview);
      return {
        code: 200,
        success: true,
        message: 'success',
        locationReview: newReview,
      };
    },
  },
  Review: {
    location: (review) => {
      return { id: review.locationId }; // __typename + id - representation - specific location within the another subgraph
    },
  },
};

module.exports = resolvers;
