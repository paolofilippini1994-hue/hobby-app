// Titolo principale della pagina con supporto opzionale per il colore.
function Titolo({ children, colore = 'inherit' }) {
  return (
    <h1 className="page-title" style={{ color: colore }}>
      {children}
    </h1>
  )
}

export default Titolo