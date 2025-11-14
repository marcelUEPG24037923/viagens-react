import './NewTripButton.css';

export default function NewTripButton({onAdd}) {
    return (
        <button onClick={onAdd} id="new-trip-button">Criar viagem</button>
    )
}