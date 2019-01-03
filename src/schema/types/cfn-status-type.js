const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
    name: 'CfnStatusType',
    values: {
        CREATE_COMPLETE: { value: 'CreateComplete' },
        CREATE_IN_PROGRESS: { value: 'CreateInProgress' },
        CREATE_FAILED: { value: 'CreateFailed' },
        DELETE_COMPLETE: { value: 'DeleteComplete' },
        DELETE_FAILED: { value: 'DeleteFailed' },
        DELETE_IN_PROGRESS: { value: 'DeleteInProgress' },
        REVIEW_IN_PROGRESS: { value: 'ReviewInProgress' },
        ROLLBACK_COMPLETE: { value: 'RollbackComplete' },
        ROLLBACK_FAILED: { value: 'RollbackFailed' },
        ROLLBACK_IN_PROGRESS: { value: 'RollbackInProgress' },
        UPDATE_COMPLETE: { value: 'UpdateComplete' },
        UPDATE_COMPLETE_CLEANUP_IN_PROGRESS: { value: 'UpdateCompleteCleanupInProgress' },
        UPDATE_IN_PROGRESS: { value: 'UpdateInProgress' },
        UPDATE_ROLLBACK_COMPLETE: { value: 'UpdateRollbackComplete' },
        UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS: { value: 'UpdateRollbackCompleteCleanupInProgress' },
        UPDATE_ROLLBACK_FAILED: { value: 'UpdateRollbackFailed' },
        UPDATE_ROLLBACK_IN_PROGRESS: { value: 'UpdateRollbackInProgress' }
    },
    description: 'The status returned by the cloudformation stack'
});
