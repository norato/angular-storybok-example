
export default {
  title: 'Addons / ViewPort',
};

export const Default = () => ({
  template: `
  <h1 class="desktop">Desktop</h1>
  <h1 class="mobile">Mobile</h1>
  <h2>Click at <b>VIEWPORT</b> at the menu above to change the view resolution</h2>
  `,
  props: {},
});

Default.story = {
  name: 'component',
};
