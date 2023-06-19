import React, {useState} from 'react';
import './App.css';
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
    setCounter( counter > 0 ? counter - 1 : counter );
    if(counter === 0) {
      alert(' Sorry ! Value is not decreases ')
    }
  }



  return (
    <>
      <header>
        <h1>#7. Increment & Decrement Challenge In React Js</h1>
      </header>
      <main>
          <div className="container">
            <div className="box-area">
              <div className="counter">
                  <h1 className="count" style={{color: counter === 0 ? 'red' : '#f1f1f1'}}>{counter}</h1>
              </div>
              <div className='buttons'>
                <Tooltip title="Add" TransitionComponent={Zoom} arrow>
                    <Button onClick={incValue} className='incBtn' > <AddIcon/> </Button>
                </Tooltip>
                <Tooltip title="Delete" TransitionComponent={Zoom} arrow>
                    <Button className='decBtn' onClick={decValue} > <DeleteIcon/> </Button>
                </Tooltip>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}

export default App;
