const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const Project = require('../types/project');
const TestData = require('../test-data');

const ProjectCreateInput = new GraphQLInputObjectType({
    name: 'ProjectCreateInput',
    description: 'The input parameters for creating a new project',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'A uniqe identifier for this project'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the project, this is the same name as the github respository'
        },
        team: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The team responsible for the project'
        },
        organisation: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The github organisation that contains the project'
        }
    }
});

module.exports = {
    type: Project,
    args: {
        input: {
            type: new GraphQLNonNull(ProjectCreateInput)
        }
    },
    resolve(obj, args) {
        TestData.push(args.input);
        return args.input;
    }
};
