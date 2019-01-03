const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
    name: 'ProjectType',
    values: {
        WEBAPP: { value: 'Webapp' },
        SERVICE: { value: 'Service' }
    },
    description: 'The type of project that this github respository contains'
});
