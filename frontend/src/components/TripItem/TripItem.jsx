import './TripItem.css';

export default function TripItem({ trip, onEdit, onDelete }) {
    
    if (!trip) return null; 

    return (
        <div className="item-container">
            <div className='informations'>
                <h1>{trip.destino}</h1>
                <p>Duração: {trip.duracao}</p>
                <p>Valor: R${trip.valor}</p>
            </div>
            <div className='actions'>
                <button onClick={() => onEdit(trip)} id="edit-item"></button>
                <button onClick={() => onDelete(trip.id)} id="delete-item"></button>
            </div>
        </div>
    );
}
