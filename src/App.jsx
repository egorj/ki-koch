import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Ingredients from './components/Ingredients'


function App() {

  const [ingredientList, setIngredientList] = useState(["oregano", "tomaten", "schinken"])

  function addIngredient(formData) {
    const newIngredient = formData.get("userIngredient")
    if (newIngredient !== "" && newIngredient !== " " && !ingredientList.includes(newIngredient)) {
      setIngredientList(prevIngredientList => [...prevIngredientList, newIngredient])
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className='userInputWrapper'>
          <h2>Welche Zutaten hast du zur Verfügung?</h2>
          <div className='userInput'>
            <form action={addIngredient}>
              <input type='text' name='userIngredient' placeholder='z. B. Tomaten' />
              <button>+ Zutat hinzufügen</button>
            </form>
            <button id='rezeptGenerieren'>Rezept generieren</button>
          </div>
        </div>
        <Ingredients ingredientList={ingredientList} />
      </main>
    </>
  )
}

export default App
