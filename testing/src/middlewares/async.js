export default ({ dispatch }) => next => action => {
  // Checks to see if action has a promise on payload prop
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // wait for promise to resolve and then create new action and dispatch
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
