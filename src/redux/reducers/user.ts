const INITIAL_STATE: string = ''

export default (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case 'SET_USER':
            return action.data
        default: 
            return state
    }
}