const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const Project = require('../types/project');
const TestData = require('../test-data');

module.exports = {
    type: Project,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(obj, args) {
        const project = TestData.find(p => p.id === args.id);
        const index = TestData.findIndex(p => p.id === args.id);
        TestData.splice(index, 1);
        return project;
    }
};
