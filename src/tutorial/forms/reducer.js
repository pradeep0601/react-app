const reducer = (oldState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ADD_USER':
            return [
                ...oldState,
                {
                    ...payload.user,
                    id: `${new Date().getTime()}`
                },
                
            ];
         case 'UPDATE_USER_LIST':
            return [
                ...oldState,
                ...payload.users
                
            ];
        case 'REMOVE_USER':
            return oldState.filter(person => person.id !== payload.id)
        default:
            break;
    }
}
module.exports = reducer;