module.exports = async function (state, action) {
    ContractAssert(state.admins.include(action.caller), "Caller should be collection admin");
    state.items.push(action.input.item)
    return { state };
};


/*function-description
Adds items to collection.
function-description*/