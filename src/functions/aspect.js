export default () =>
  window.matchMedia('(max-width: 576px)').matches ? 3 / 4 : 5 / 3;
