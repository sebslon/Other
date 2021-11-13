const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        "Tracks array for homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track!
        module(id: ID!): Module!
    }

    type Mutation {
        incrementTrackViews(id: ID!): IncrementTrackViewResponse!
    }

    type IncrementTrackViewResponse {
        code: Int!
        success: Boolean!
        message: String!
        track: Track
    }

    "A track is a group of Modules about specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int @deprecated(reason: "Use durationInSeconds")
        modulesCount: Int
        description: String
        numberOfViews: Int
        modules: [Module!]!
        durationInSeconds: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }

    "A Module is a single unit of teaching. Multiple Modules compose a Track"
    type Module {
        id: ID!
        title: String
        length: Int @deprecated(reason: "Use durationInSeconds")
        content: String
        videoUrl: String
        durationInSeconds: Int
    }
`;

module.exports = typeDefs;