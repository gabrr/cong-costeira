const INITIAL_STATE: any = []

export default (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case 'ADD_APPOINTMENT':
            return [...state, ...action.data]
        case 'CLEAR_APPOINTMENT':
            return []
        default: 
            return state
    }
}