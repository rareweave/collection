module.exports = async function (state, action) {
    ContractAssert(state.admins.includes(action.caller), "Caller should be collection admin");
    ContractAssert(typeof state.name == "string", "Invalid name")
    ContractAssert(typeof state.description == "string", "Invalid description")
    ContractAssert(typeof state.tags == "object" && Array.isArray(state.tags), "Invalid tags")
    ContractAssert(typeof state.links == "object", "Invalid links")
    state.description = action.input.description
    state.name = action.input.name
    state.tags = action.input.tags
    state.links = action.input.links
    return { state };
};


/*function-description
Edits collection metadata
function-description*/