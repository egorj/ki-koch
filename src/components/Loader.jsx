import "../css/loader.css";

export default function Loader({ text = "Die KI erstellt gerade ein Rezept für dich . . ." }) {
    return (
        <div className="loader-wrapper">
            <div className="loader" />
            <span>{text}</span>
        </div>
    );
}
