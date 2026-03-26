import './Bottone.css'

// Bottone riutilizzabile con una variante evidenziata per azioni più forti.
function Bottone({ children, onClick, colore = 'black' }) {
    const variantClass = colore === 'red' ? 'mioBottone--danger' : ''

    return (
        <button className={`mioBottone ${variantClass}`.trim()} onClick={onClick}>
            {children}
        </button>
    )
}

export default Bottone