
<h1 align="center">
  React Progress Tracker
</h1>

<h4 align="center">A UI library to create progress bars and steps to track user progress in React.</h4>

<br>

<p align="center" >
  <a href="https://progress-stepper.netlify.app/">LIVE EXAMPLES</a>
</p>

## Key Features

- Create simple progress bars or with steps
- Customize your steps as you want 
- Customize step colors, progress percentage, number of steps
- Customize the current active step and completed steps

## Installation

To use this library, you'll need the [npm](http://npmjs.com) CLI installed on your computer. From your command line, using npm:

```bash
npm install --save react-progress-tracker
```

Or using yarn:

```bash
yarn add react-progress-tracker
```

## Examples

For more examples take a look at the [official website](https://progress-stepper.netlify.app/).

### Simple progress bar

This example demonstrate how to create a simple progress bar.

```jsx
import React from "react";
import { ProgressBar } from "react-progress-trac";

class ProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
    );
  }
}
```

### Progress bar with steps

This example demonstrate how to create your own progress bar with steps.

```jsx
import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
      </ProgressBar>
    );
  }
}
```
## API

### `<ProgressBar/>`

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>activeStep</td>
      <td>number</td>
      <td>1</td>
	  <td>yes</td>
      <td>The current active step</td>
    </tr>
    <tr>
      <td>children</td>
      <td>Step component(s)</td>
      <td></td>
      <td>no</td>
      <td>ProgressBar accepts Step component as its children</td>
    </tr>
    <tr>
      <td>steps</td>
      <td>array of steps</td>
      <td></td>
      <td>yes</td>
      <td>Step data is of the type {text?:  string  |  object; status?:  string; id:number;progress?:  number;}</td>
    </tr>
    <tr>
      <td>orientation</td>
      <td>string</td>
      <td>horizontal</td>
      <td>no</td>
      <td>This prop is used to horizontally or vertically align the stepper component and display the steps accordingly</td>
    </tr>
    <tr>
      <td>color</td>
      <td>string</td>
      <td>#ccc</td>
      <td>no</td>
      <td>This props is used directly on the CSS background property of the filled part of the Progress Tracker</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>string|React Element</td>
      <td>&lt;i className="fa fa-check"></i></td>
      <td>no</td>
      <td>The icon that indicates the successful completion of a step</td>
    </tr>
    <tr>
      <td>squared</td>
      <td>boolean</td>
      <td>false</td>
      <td>no</td>
      <td>To show the progress steps as square</td>
    </tr>
  </tbody>
</table>

### `<Step/>`

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th style="width: 50px;">required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>className</td>
      <td>string</td>
      <td></td>
      <td>no</td>
      <td>Adds a class to the step component</td>
    </tr>
    <tr>
      <td>position</td>
      <td>number</td>
      <td></td>
      <td></td>
      <td>The position in percentage of the Step on the ProgressBar</td>
    </tr>
    <tr>
      <td>index</td>
      <td>number</td>
      <td></td>
      <td></td>
      <td>The index of the Step in the ProgressBar</td>
    </tr>
    <tr>
      <td>children</td>
      <td>function</td>
      <td></td>
      <td></td>
      <td>The function used to render the content of the Step</td>
    </tr>
    <tr>
      <td>transition</td>
      <td>string</td>
      <td></td>
      <td></td>
      <td>Use one of the built-ins transitions</td>
    </tr>
    <tr>
      <td>transitionDuration (in ms)</td>
      <td>string</td>
      <td>300</td>
      <td></td>
      <td>The duration of the transition</td>
    </tr>
  </tbody>
</table>

#### License

MIT

---

> GitHub [@pierreericgarcia](https://github.com/pierreericgarcia) &nbsp;&middot;&nbsp;
> Twitter [@pierrericgarcia](https://twitter.com/pierrericgarcia) &nbsp;&middot;&nbsp;
> LinkedIn [@pierre-eric-garcia](https://www.linkedin.com/in/pierre-eric-garcia) &nbsp;&middot;&nbsp;
> Medium [@pierrericgarcia](https://medium.com/@pierrericgarcia)