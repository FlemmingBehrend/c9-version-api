const { GraphQLUnionType } = require('graphql');
const Webapp = require('./webapp');
const Stack = require('./stack');

module.exports = new GraphQLUnionType({
    name: 'Artifact',
    types: [Webapp, Stack],
    resolveType(value) {
        return value.projectType === 'Service' ? Stack : Webapp;
    },
    description: 'A project holds one artifact of type web application or cloudformation stack'
});
