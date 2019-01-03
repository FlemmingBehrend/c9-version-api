const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Webapp',
    fields: () => {
        const FrameworkType = require('./framework-type');
        const ProjectType = require('./project-type');
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'The name of the web application'
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
            framework: {
                type: new GraphQLNonNull(new GraphQLList(FrameworkType)),
                description: 'The framework used by this web application'
            }
        };
    },
    description: 'Represents information about a web application'
});
