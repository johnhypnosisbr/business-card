import '../App.css'

export default function NavBarComp() {
    return (
        <nav>
            <img name="navLogo" src="./ramen.jpg" />
            <ul>
                <a href="/sabores">
                    <li>Sabores</li>
                </a>
                <a href="/pedidos">
                    <li>Pedidos</li>
                </a>
                <a href="/login">
                    <li>Login</li>
                </a>
            </ul>
        </nav>
    )
}