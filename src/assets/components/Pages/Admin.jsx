import Bottone from '../Bottone.jsx'
import Utente from '../Utente.jsx'

// Lista demo mostrata nella vista amministratore.
const utenti = ['gabriele', 'mario', 'luigi']

function Admin() {
    // Azione demo dedicata all'area amministratore.
    function handleClick() {
        alert('Sei un admin')
    }

    return (
        <section className="page admin-page">
            <Utente nome="Paolo" isUtente />

            <div className="info-card">
                <p className="section-label">Utenti registrati</p>
                {/* Render dinamico della lista utenti con key stabile. */}
                <ul className="user-list">
                    {utenti.map((nome) => (
                        <Utente key={nome} nome={nome} />
                    ))}
                </ul>
            </div>

            <Bottone onClick={handleClick} colore="red">
                Sono un bottone
            </Bottone>
        </section>
    )
}

export default Admin