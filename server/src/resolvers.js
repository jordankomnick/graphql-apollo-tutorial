const resolvers = {
    Query: {
        //returns an array of tracks that populate the homepage grid
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        // get a single track by ID, for the track detail page
        track: (_, {id}, {dataSources}) => {
            return dataSources.trackAPI.getTrack(id);
        },
        // get a single module by ID, for the module detail page
        module: (_, {id}, {dataSources}) => {
            return dataSources.trackAPI.getModule(id);
        }
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        }
    }
};

module.exports = resolvers;