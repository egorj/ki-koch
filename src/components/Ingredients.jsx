import "../css/ingredients.css"

export default function Ingredients({ ingredientList }) {
    return (
        <ul>
            {ingredientList.map(ingredient => <li key={ingredient}>{ingredient[0].toUpperCase() + ingredient.slice(1)}</li>)}
        </ul>
    )
}