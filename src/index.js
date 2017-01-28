export default
  receivers =>
  (state, { type, ...message }) => {
    const match = Object.keys(receivers).find(key => type === key);
    return (match !== undefined)
      ? receivers[match](state, message)
      : state;
  };
