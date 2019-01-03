const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'CfnResource',
    fields: () => {
        const CfnStatusType = require('./cfn-status-type');
        return {
            logicalId: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'The Logical ID of the cloudformation resource'
            },
            type: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'An AWS or custom type, AWS::IAM::Policy etc.'
            },
            status: {
                type: new GraphQLNonNull(CfnStatusType),
                description: 'The status that the cloudformation stack is in'
            }
        };
    },
    description: 'Represents a small subset of information from a cloudformation resource'
});
