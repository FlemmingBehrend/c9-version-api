const projects = [
    {
        id: '1',
        name: 'c9-general-app',
        type: 'webapp',
        team: 'migration',
        organisation: 'Migration',
        artifact: {
            name: 'webapp',
            projectType: 'Webapp',
            version: '1.0.0',
            framework: 'REACT'
        }
    },
    {
        id: '2',
        name: 'c9-general-proxy',
        team: 'cloud9',
        organisation: 'c9',
        artifact: {
            name: 'c9-general-proxy-stack',
            projectType: 'Service',
            version: '20180101134643H3fh34d3',
            outputs: [
                {
                    key: 'c9 general proxy',
                    export: 'c9GeneralProxy',
                    value: 'arn for general proxy'
                }
            ],
            description: 'description for general proxy',
            status: 'CreateComplete',
            resources: [
                {
                    logicalId: 'c9-general-proxy-lambda',
                    type: 'lambda',
                    status: 'UpdateComplete'
                },
                {
                    logicalId: 'c9-general-proxy-role',
                    type: 'iam role',
                    status: 'RollbackComplete'
                }
            ]
        }
    }
];

module.exports = projects;
