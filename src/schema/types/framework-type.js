const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
    name: 'FrameworkType',
    values: {
        REACT: { value: 'React' },
        ANGULAR: { value: 'Angular' },
        VUE: { value: 'Vue' }
    },
    description: 'The framework used by the web application'
});
