export default () =>
  window.matchMedia('(max-width: 576px)').matches ? 3 / 4 : 4 / 3;
