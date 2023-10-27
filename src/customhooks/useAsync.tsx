import  { useEffect, useReducer } from 'react'
type TState = {
    status: string,
    data: any,
    error: any,
    initialstate?: any
}
type TAction = {
    payload?: any,
    type : string
}
let initial: TState = {
        status:'idle',
        data: null,
    error: null,
        initialstate: null,
}

const stateReducer = (state:TState, action: TAction) => {
    switch (action.type) {
        case 'pending':
            return {
                ...state, 
                status: action.type,
                error: null,
                data: null,
            }
        case 'resolved':
            return {
                ...state,
                data: action.payload,
                status: action.type,
                error: null
            }
        case 'rejected':
            return {
                ...state, 
                status: action.type,
                data: null,
                error : action.payload
            }
        default:
            throw new Error(`Unsupported action type : ${action.type}`)
    }
    
}

const init = (initialState: TState) => {
    return initialState
}
const useAsync = (asynCallback: () => any, dependencies: any[], initialstate?: any) => {
    initial.initialstate = initialstate;
    const [state, stateDispatch] = useReducer<(a: TState, b: TAction) => TState, TState>(stateReducer, initial, init)
    

    const promiseResolver = (promise: any) => {
        stateDispatch({ type: 'pending' })
        setTimeout(() => {
            promise
                .then((data: any) => stateDispatch({type:'resolved', payload: data}))
                .catch((error: any) => stateDispatch({type: 'rejected', payload: error}))
        },1000)
    }
    useEffect(() => {
        const promise = asynCallback();
        if (!promise) return;
        promiseResolver(promise);
    },dependencies)
  return state
}

export default useAsync;
