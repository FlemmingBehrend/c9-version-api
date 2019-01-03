const { GraphQLString, GraphQLObjectType, GraphQLID, GraphQLNonNull } = require('graphql');
const Artifact = require('./artifact');

module.exports = new GraphQLObjectType({
    name: 'Project',
    description: 'A project represented by a github repository',
    fields: () => ({
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
        },
        artifact: {
            type: Artifact,
            description: 'The artifact that this project contains'
        }
    })
});
