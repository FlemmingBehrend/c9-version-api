const { GraphQLList, GraphQLString } = require('graphql');
const Project = require('./../types/project');
const TestData = require('./../test-data');

module.exports = {
    type: new GraphQLList(Project),
    description: 'List all projects',
    args: {
        team: {
            type: GraphQLString
        }
    },
    resolve: (obj, args) => {
        if (args.team) {
            return TestData.filter(artifact => artifact.team === args.team);
        } else {
            return TestData;
        }
    }
};
