import { useState } from 'react'
import Benvenuto from '../Benvenuto.jsx'
import Bottone from '../Bottone.jsx'
import Ospite from '../Ospite.jsx'

function Guest() {
  // Stato locale della demo ospite.
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [nomeUtente, setNomeUtente] = useState('')

  // Aggiorna il contatore con lo stato precedente, evitando race condition.
  function handleAggiungi() {
    setCount((currentCount) => currentCount + 1)
  }

  function handleDiminuisci() {
    setCount((currentCount) => currentCount - 1)
  }

  // Un solo toggle controlla l'intera area di dettagli, evitando variabili fuori dallo state.
  function handleVisible() {
    setIsVisible((currentValue) => !currentValue)
  }

  function handleNomeUtente(event) {
    setNomeUtente(event.target.value)
  }

  return (
    <section className="page guest-page">
      <Ospite />
      <Benvenuto>{nomeUtente}</Benvenuto>

      <div className="info-card">
        <p className="guest-summary">
          {nomeUtente || 'Ospite'} hai cliccato <strong>{count}</strong> volte il bottone.
        </p>
      </div>

      <label className="field" htmlFor="nomeutente">
        <span>Inserisci nome utente</span>
        {/* Input controllato: il valore mostrato dipende sempre dallo state. */}
        <input
          id="nomeutente"
          type="text"
          value={nomeUtente}
          onChange={handleNomeUtente}
          placeholder="Scrivi il tuo nome"
        />
      </label>

      <div className="actions-row">
        <Bottone onClick={handleVisible}>Mostra/Nascondi dettagli</Bottone>
        <Bottone onClick={handleAggiungi}>Aumenta</Bottone>
        <Bottone onClick={handleDiminuisci}>Diminuisci</Bottone>
      </div>

      {/* Render condizionale: il blocco appare solo quando isVisible e true. */}
      {isVisible && (
        <div className="info-card info-card--soft">
          <p>Questo e un testo nascosto.</p>
          <p>Questo e un altro testo nascosto.</p>
        </div>
      )}

      <code className="status-box">Visibile: [{isVisible ? 'true' : 'false'}]</code>
    </section>
  )
}

export default Guest
