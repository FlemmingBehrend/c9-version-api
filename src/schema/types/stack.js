const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Stack',
    fields: () => {
        const Output = require('./output');
        const CfnStatusType = require('./cfn-status-type');
        const CfnResourceType = require('./cfn-resource');
        const ProjectType = require('./project-type');
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'The stack name used for the cloudformation template'
            },
            projectType: {
                type: new GraphQLNonNull(ProjectType),
                description: 'The type of the project contained in the github respository'
            },
            version: {
                type: new GraphQLNonNull(GraphQLString),
                description:
                    'The version of the web applciation, represented as <<DATE>>H<<HASH>> 20180101134643H3fh34d3 etc.'
            },
            outputs: {
                type: new GraphQLList(Output),
                description: 'Output objects from the cloudformation stack'
            },
            description: {
                type: GraphQLString,
                description: 'The stack description'
            },
            status: {
                type: new GraphQLNonNull(new GraphQLList(CfnStatusType)),
                description: 'The status that the cloudformation stack is in'
            },
            resources: {
                type: new GraphQLList(CfnResourceType),
                description: 'The resources that the cloudformation stack contains'
            }
        };
    },
    description: 'Represents a subset of information about a cloudformation stack'
});
