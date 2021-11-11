const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        "Tracks array for homepage grid"
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules about specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;