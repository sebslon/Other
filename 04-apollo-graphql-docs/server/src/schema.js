const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        "Tracks array for homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }

    "A track is a group of Modules about specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        description: String
        numberOfViews: Int
        modules: [Module!]!
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
        length: Int
    }
`;

module.exports = typeDefs;