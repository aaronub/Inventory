
const ADD_ORDER = 'ADD_ORDER'

export const _addOrder = (order)=>({
    type: ADD_ORDER,
    order
})

export default (state=[], action)=>{
    switch (action.type) {
        case ADD_ORDER:
            return [...state, action.order]
                
        default:
            return state;
    }
}