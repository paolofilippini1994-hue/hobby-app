import './Benvenuto.css'

// Messaggio di benvenuto dinamico usato nella pagina ospite.
function Benvenuto({ children }) {
    const nome = children?.trim?.() ? children : 'visitatore'

    return <h2 className="welcome-title">Benvenuto, {nome}</h2>
}

export default Benvenuto