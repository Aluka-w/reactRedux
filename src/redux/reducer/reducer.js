export function reducer (state={ count: 0}, action) {
  const count = state.count
  switch (action.type) {
    case 'ADD_CLICK':
      return {
        count: count + 1
      }
    case 'REDUCE_CLICK':
      return {
        count: count <=0 ? 0: count - 1
      }
    default:
      return state;
  }
}