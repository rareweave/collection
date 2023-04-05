module.exports = async function (state, action) {
    ContractAssert(state.admins.include(action.caller), "Caller should be collection admin");
    state.items = state.items.filter(item => item != action.input.item)
    return { state };
};


/*function-description
Removes items from collection
function-description*/