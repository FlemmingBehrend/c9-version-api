const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Output',
    fields: () => {
        return {
            key: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'The key of an output object from a cloudformation resource'
            },
            export: {
                type: GraphQLString,
                description: 'The export name of an output object from a cloudformation resource'
            },
            value: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'The value of an output object from a cloudformation resource'
            }
        };
    },
    description: 'Represents one output variable from a cloudformation resource'
});
