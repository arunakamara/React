const redux = require('redux');

const ReducerFunc = (state = {counter: 0}, action) => {
    if (action.type === 'increment'){
        return {
            ...state,
            counter: state.counter + 1,
        }
    }

    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }

    return state
}

const store = redux.createStore(ReducerFunc);