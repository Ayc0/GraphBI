const convertDataToHashWithDate = (props, state) =>
  btoa(
    JSON.stringify({
      date: Date.now(),
      state: {
        XSelected: props.XSelected,
        YSelected: props.YSelected,
        YSelected2: props.YSelected2,
        compareBy: props.compareBy,
        functionSelected: props.functionSelected,
        functionSelected2: props.functionSelected2,
        graphType: props.graphType,
        timelapse: props.timelapse,
        disabled: state.disabled,
      },
    }),
  );

const convertDataToHash = (props, state) =>
  btoa(
    JSON.stringify({
      XSelected: props.XSelected,
      YSelected: props.YSelected,
      YSelected2: props.YSelected2,
      compareBy: props.compareBy,
      functionSelected: props.functionSelected,
      functionSelected2: props.functionSelected2,
      graphType: props.graphType,
      timelapse: props.timelapse,
      disabled: state.disabled,
    }),
  );

export { convertDataToHash, convertDataToHashWithDate };
