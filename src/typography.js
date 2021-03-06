import { css } from 'styled-components';

export default css`
  .italic, .oblique, em, i { font-style: italic; }
  .bold, strong, b { font-weight: bold; }
  .regular, .normal, address { font-weight: normal; }
  .thin, .light { font-weight: lighter; }

  h3, h4, h5, h6 {
    line-height: 1.2;
    margin: 0;
    font-weight: bold;
    > sub {
      display: block;
      font-size: .65em;
      opacity: .5;
    }
  }

  h1 {
    font-size: 2.5em;
    letter-spacing: -.025em;
    font-weight: 100;
  }

  h2 {
    font-size: 2em;
    letter-spacing: -.025em;
    font-weight: 300;
  }

  h3 {
    font-size: 1.6em;
    text-transform: uppercase;
    font-weight: 400;
  }

  h4 { font-size: 1.35em; font-weight: 700; }

  h5 { font-size: 1.2em; }

  h6 {
    font-size: 1em;
    font-weight: 800;
  }
`;
