import './TripForm.css'
import { useState, useEffect } from 'react';
import { createTrip, updateTrip } from "../../services/api.js";

export default function TripForm({ trip, onClose, trips, setTrips }) {

    const [destino, setDestino] = useState('');
    const [duracao, setDuracao] = useState('');
    const [valor, setValor] = useState('');

    useEffect(() => {
        if (trip) {
            setDestino(trip.destino);
            setDuracao(trip.duracao);
            setValor(trip.valor);
        } else {
            setDestino('');
            setDuracao('');
            setValor('');
        }
    }, [trip]);

    async function handleSubmit() {
        const data = {
            destino,
            duracao,
            valor
        };

        if (trip) {
            const updated = await updateTrip(trip.id, data);
            setTrips(trips.map(t => t.id === trip.id ? updated : t));
        } else {
            const created = await createTrip(data);
            setTrips([...trips, created]);
        }

        onClose();
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <h2>{trip ? 'Editar Viagem' : 'Nova Viagem'}</h2>

                <label htmlFor="destino">Destino</label>
                <input
                    id="destino"
                    type="text"
                    placeholder="Insira o destino"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                />

                <label htmlFor="dias">Duração</label>
                <input
                    id="dias"
                    type="text"
                    placeholder="Insira a quantidade de dias"
                    value={duracao}
                    onChange={(e) => setDuracao(e.target.value)}
                />

                <label htmlFor="valor">Valor</label>
                <input
                    id="valor"
                    type="text"
                    placeholder="Insira o valor"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />

                <div className='actions'>
                    <button id="botao-cancelar" onClick={onClose}>Cancelar</button>
                    <button id="botao-confirmar" onClick={handleSubmit}>Confirmar</button>
                </div>
            </div>
        </div>
    )
}
