
import './App.scss';
import Card from './components/Card';
import { useState } from 'react';

function App() {

  const [state, setstate] = useState([
    {
      topping: 'фуа-гра',
      portion: { numb: '10', text: 'порций'},
      gift: { numb: '', text: 'мышь в подарок'},
      weight: '0,5',
      // text: 'хозяин доволен',
      description: { clicked: 'Печень утки разварная с артишоками.' }
    },

    {
      topping: 'рыбой',
      portion: { numb: '40', text: 'порций'},
      gift: { numb: '2', text: 'мыши в подарок'},
      // text: 'хозяин доволен',
      weight: '2',
      description: { clicked: 'Головы щучьи с чесноком да свежайшая сёмгушка.' }
    },

    {
      topping: 'курой',
      portion: { numb: '100', text: 'порций'},
      gift: { numb: '5', text: 'мышей в подарок'},
      text: 'хозяин доволен',
      weight: '5',
      disabled: true,
      description: { clicked: 'Филе из цыплят с трюфелями в бульоне.' }
    }
  ]);
  

  return (
    <div className="App">
      <h1>Ты сегодня покормил кота?</h1>

      <div className='section'>

        {
          state.map((el, index) => {
            return <Card {...el} key={index} />
          })
        }
        

      </div>

    </div>
  );
}

export default App;
