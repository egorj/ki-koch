import ReactMarkdown from "react-markdown"
import "../css/recipe.css"

export default function Recipe(props) {
    return (
        <section className="suggested-recipe-container">
            <h2>Dieses Rezept wurde von der KI vorgeschlagen:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}