import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Ingredients from './components/Ingredients'

import { getRecipeFromOpenAI } from './services/openai'



function App() {

  const [ingredientList, setIngredientList] = useState(["oregano", "tomaten", "schinken"])
  const [recipe, setRecipe] = useState("")

  function addIngredient(formData) {
    const newIngredient = formData.get("userIngredient")
    if (newIngredient !== "" && newIngredient !== " " && !ingredientList.includes(newIngredient.toLowerCase())) {
      setIngredientList(prevIngredientList => [...prevIngredientList, newIngredient.toLowerCase()])
    }
  }

  async function generateRecipe() {
    try {
      const text = await getRecipeFromOpenAI(ingredientList);
      setRecipe(text);
    } catch (e) {
      console.error(e);
      setRecipe("Fehler: " + e.message);
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
            <button id='rezeptGenerieren' onClick={generateRecipe}>Rezept generieren</button>
          </div>
        </div>
        <Ingredients ingredientList={ingredientList} />
      </main>
    </>
  )
}

export default App
