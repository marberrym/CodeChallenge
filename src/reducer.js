let reducer = (oldState, action) => {
    if (action.type === "ASSIGN_USER") {
        let newUser = {
            name: action.user.name,
            id: action.user.id
        }
        return {...oldState,
            user: newUser 
        }
    } else {
        return oldState;
    }
}

export default reducer;