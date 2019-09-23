const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
      case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
      case 'ADD':
      return {
        ...state,
        counter: state.counter + 10
      }
      case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - 20
      }
    case 'STORE_RESULTS':
      return {
        ...state,
        results: state.results.concat(state.counter)
      }

  }
  return state
}

export default reducer