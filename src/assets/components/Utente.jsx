// Rappresenta un utente singolo: titolo per l'utente attivo, voce lista per gli altri.
function Utente({ nome, isUtente = false }) {
  if (isUtente) {
    return (
      <h2 className="section-title">
        Benvenuto {nome === 'gabriele' ? 'GABRIELE' : nome}
      </h2>
    )
  }

  return <li className="user-list-item">{nome}</li>
}

export default Utente