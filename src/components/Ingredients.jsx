import "../css/ingredients.css"

export default function Ingredients({ ingredientList }) {
    return (
        <ul>
            {ingredientList.map(ingredient => <li>{ingredient}</li>)}
        </ul>
    )
}