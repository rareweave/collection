module.exports = async function (state, action, handler) {
    ContractAssert(action.input.inputs && Array.isArray(action.input.inputs), "No inputs specified")
    for (input of action.input.inputs) {

        let { state: newState } = await handler(state, { ...action, input })
        if (newState) {
            state = newState
        }
    }


    return { state };
};


/*function-description
Bulk actions
function-description*/