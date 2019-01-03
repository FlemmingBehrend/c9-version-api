const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString } = require('graphql');
const QueryByProjects = require('./queries/query-by-projects');
const CreateProject = require('./mutations/create-project');
const UpdateProject = require('./mutations/update-project');
const DeleteProject = require('./mutations/delete-project');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => {
        return {
            projects: QueryByProjects
        };
    }
});

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => {
        return {
            createProject: CreateProject,
            updateProject: UpdateProject,
            deleteProject: DeleteProject
        };
    }
});

const graphqlSchema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

module.exports = graphqlSchema;
