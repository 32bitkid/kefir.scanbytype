const createScanByType =
  receivers =>
  (state, { type, ...rest }) => {
    for (let key in receivers) {
      if (!receivers.hasOwnProperty(key)) { continue; }
      if (key !== type) { continue; }
      return receivers[key](state, rest);
    }
    return state;
  };


export function scanByType(receivers, ...rest) {
  return this.scan(createScanByType(receivers), ...rest);
}

export default createScanByType;
