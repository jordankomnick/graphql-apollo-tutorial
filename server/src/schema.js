const {gql} = require('apollo-server');

const typeDefs = gql`
    
    type Query {
        "query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
        module(id: ID!): Module!
    }
    
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "the track's title"
        title: String!
        "the track's author"
        author: Author!
        "the track's illustration to display in card or on detail page"
        thumbnail: String
        "approximate length to complete in minutes"
        length: Int
        "the number of modules in the track"
        modulesCount: Int
        "description of the track"
        description: String
        "number of times a track has been viewed"
        numberOfViews: Int
        "the track's list of modules"
        modules: [Module!]!
    }
    
    "A module is a single unit of teaching. Multiple modules compose a Track"
    type Module {
        id: ID!
        title: String!
        "length in minutes"
        length: Int
        "url of the lesson video"
        videoUrl: String
        "text of the module"
        content: String
    }
    
    "Author of a track"
    type Author {
        id: ID!
        "author's name"
        name: String!
        "author's profile photo"
        photo: String
    }
`;

module.exports = typeDefs;