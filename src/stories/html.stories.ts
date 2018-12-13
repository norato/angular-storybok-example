import { storiesOf } from '@storybook/angular';

storiesOf('Custom | HTML / Raw Html Story', module)
  .add('inline style', () => ({
    template: `
      <div style="diaplay: block;">
        <h1 style="color: red;">here is a only html + in-line css story</h1>
      </div>
    `
  }))
  .add('style property', () => ({
    template: `
      <div class="main-div">
        <h1 class="main-title">here is a only html + css property story</h1>
      </div>
    `,
    styles: [
      `
      .main-div {
        display: block;
      }

      .main-div > .main-title {
        color: red;
      }
      `
    ]
  }))
  .add('define a grid', () => ({
    template: `
    <h1> Grid example</h1>
    <div class="wrapper">
    <div class="box a">A</div>
    <div class="box b">B</div>
    <div class="box c">C</div>
    <div class="box d">D</div>
    <div class="box e">E</div>
    <div class="box f">F</div>
  </div>`,
    props: {}
  }))
  .add('typography', () => ({
    template: `
    <div class="container">
      <h1> Typography example</h1>
      <h1>Lighter, Secondary Text</h1>
      <p>The small element is used to create a lighter, secondary text in any heading:</p>
      <h1>h1 heading <small>secondary text</small></h1>
      <h2>h2 heading <small>secondary text</small></h2>
      <h3>h3 heading <small>secondary text</small></h3>
      <h4>h4 heading <small>secondary text</small></h4>
      <h5>h5 heading <small>secondary text</small></h5>
      <h6>h6 heading <small>secondary text</small></h6>
    </div>
    `,
    props: {}
  }));
