import "../css/header.css"

import KochSymbol from "../assets/chef.svg"

export default function Header() {
    return (
        <header>
            <img src={KochSymbol} />
            <span>Dein KI Koch</span>
        </header>
    )
}