import { useState } from 'react'
import Admin from './assets/components/Pages/Admin.jsx'
import Bottone from './assets/components/Bottone.jsx'
import Guest from './assets/components/Pages/Guest.jsx'
import Sviluppo from './assets/components/Sviluppo.jsx'
import Titolo from './assets/components/Titolo.jsx'
import './App.css'

// Un utente mancante o marcato come "ospite" viene gestito nella vista pubblica.
function isOspite(utente) {
  return !utente || utente === 'ospite'
}

// Il cookie development attiva un piccolo badge visivo per la modalità sviluppo.
function isSviluppoAttivo() {
  return document.cookie.includes('development')
}

function App() {
  // Lo stato utente parte dal valore persistito nel browser.
  const [utente, setUtente] = useState(() => localStorage.getItem('utente'))
  const isGuest = isOspite(utente)
  const isSviluppo = isSviluppoAttivo()

  // Simula un login admin salvando un nome utente diverso da "ospite".
  function handleEntraAdmin() {
    const utenteAdmin = 'paolo'
    localStorage.setItem('utente', utenteAdmin)
    setUtente(utenteAdmin)
  }

  // Simula il logout: rimuove l'utente e riporta la UI in modalità ospite.
  function handleEsciAdmin() {
    localStorage.removeItem('utente')
    setUtente(null)
  }

  return (
    <main className="app-shell">
      <section className="app-panel">
        <header className="app-header">
          <Titolo>Il mio Hobby</Titolo>
          <p className="app-subtitle">
            Una piccola area demo con una vista ospite e una vista amministratore.
          </p>

          <div className="app-auth-actions">
            <p className="app-auth-status">
              Stato accesso: <strong>{isGuest ? 'Ospite' : `Admin (${utente})`}</strong>
            </p>

            {isGuest ? (
              <Bottone onClick={handleEntraAdmin}>Entra come Admin</Bottone>
            ) : (
              <Bottone onClick={handleEsciAdmin} colore="red">
                Esci da Admin
              </Bottone>
            )}
          </div>
        </header>

        {/* Se l'utente e ospite mostra la pagina pubblica, altrimenti quella admin. */}
        {isGuest ? <Guest /> : <Admin />}
        {isSviluppo && <Sviluppo />}
      </section>
    </main>
  )
}

console.log('App renderizzata 😎') // Log per dimostrare il rendering dell'app.
export default App