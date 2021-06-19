  // remember we'll have 4 app states
 // foods: initialFoods
  // searchValue -> input tendré que hacer un filter
  // todaysFood
  // showForm: false/true


import React from 'react';
import './App.css';
import foods from './foods.json';

import FoodBox from './components/FoodBox'
import Form from './components/Form'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     quantity: 1,
  //   }
  // }
  render () {
    return(
      <>
      <h1>Iron Nutrition</h1>
      <Form />
     
       
       {foods.map((food, index) => {
         return (
           <FoodBox 
             name={food.name}
             image={food.image}
             calories={food.calories}
           />
         )
       })}
     </>
    )
  }
}

export default App;


