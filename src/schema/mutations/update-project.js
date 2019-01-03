const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const Project = require('../types/project');
const TestData = require('../test-data');

const ProjectUpdateInput = new GraphQLInputObjectType({
    name: 'ProjectUpdateInput',
    description: 'The input parameters for updating an existing project',
    fields: {
        name: {
            type: GraphQLString,
            description: 'The name of the project, this is the same name as the github respository'
        },
        team: {
            type: GraphQLString,
            description: 'The team responsible for the project'
        },
        organisation: {
            type: GraphQLString,
            description: 'The github organisation that contains the project'
        }
    }
});

module.exports = {
    type: Project,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        input: {
            type: new GraphQLNonNull(ProjectUpdateInput)
        }
    },
    resolve(obj, args) {
        const project = TestData.find(p => args.id === p.id);
        if (args.input.name) {
            project.name = args.input.name;
        }
        if (args.input.team) {
            project.team = args.input.team;
        }
        if (args.input.organisation) {
            project.organisation = args.input.organisation;
        }
        return project;
    }
};
