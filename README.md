# Increment & Decrement Challenge in React JS

This repository contains a React JS project that implements an increment and decrement functionality using Material-UI components. The application displays a counter that can be incremented or decremented based on user interaction.

## Features

- Intuitive UI with Material-UI buttons for incrementing and decrementing the counter.
- Visual feedback for when the counter reaches zero, displaying the counter in red.
- Tooltip component from Material-UI for additional context on the buttons.
- Zoom effect on tooltip transition for a smooth user experience.

## Getting Started

### Installation

1. Clone the repository: `git clone https://github.com/MD-ANIKS/react-material-ui-increment-decrement.git`
2. Navigate to the project directory: `cd react-increment-decrement`
3. Install dependencies: `npm install`

### Usage

1. Import the necessary components from the Material-UI library: `Button`, `AddIcon`, `DeleteIcon`, `Tooltip`, and `Zoom`.
2. Create a functional component named `App`.
3. Set up a state variable named `counter` using the `useState` hook.
4. Implement `incValue` and `decValue` functions to handle the increment and decrement logic respectively.
5. Use the `Button` component from Material-UI for the increment and decrement buttons.
6. Wrap the buttons with the `Tooltip` component to provide additional context.
7. Apply the `Zoom` transition effect to the tooltip for a smooth appearance.
8. Style the counter based on the value, displaying it in red when the counter is zero.

```jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

function App() {
  const [counter, setCounter] = useState(0);

  const incValue = () => {
    setCounter(counter + 1);
  }

  const decValue = () => {
    setCounter(counter > 0 ? counter - 1 : counter);
    if (counter === 0) {
      alert(' Sorry ! Value is not decreases ')
    }
  }

  return (
    <>
      <header>
        <h1>Increment & Decrement Challenge In React Js</h1>
      </header>
      <main>
        <div className="container">
          <div className="box-area">
            <div className="counter">
              <h1 className="count" style={{ color: counter === 0 ? 'red' : '#f1f1f1' }}>{counter}</h1>
            </div>
            <div className='buttons'>
              <Tooltip title="Add" TransitionComponent={Zoom} arrow>
                <Button onClick={incValue} className='incBtn'><AddIcon /></Button>
              </Tooltip>
              <Tooltip title="Delete" TransitionComponent={Zoom} arrow>
                <Button className='decBtn' onClick={decValue}><DeleteIcon /></Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
```

## Contributing

Contributions, bug reports, and feature requests are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This project was inspired by the need to implement an increment and decrement functionality using React JS and Material-UI components. Special thanks to the React and Material-UI communities for their contributions and support.

