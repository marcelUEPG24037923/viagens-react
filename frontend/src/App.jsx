import { useEffect, useState } from "react";
import { getAllTrips, deleteTrip } from "./services/api.js";
import TripItem from "./components/TripItem/TripItem";
import TripForm from "./components/TripForm/TripForm";
import NewTripButton from "./components/NewTripButton/NewTripButton";
import './App.css';

function App() {
  const [trips, setTrips] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await getAllTrips();
      setTrips(data);
    }
    loadData();
  }, []);

  function handleAdd() {
    setSelectedTrip(null);
    setShowModal(true);
  }

  function handleEdit(trip) {
    setSelectedTrip(trip);
    setShowModal(true);
  }

  async function handleDelete(id) {
    await deleteTrip(id);
    setTrips(trips.filter(t => t.id !== id));
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div className='main'>
      <div className='container'>
        <h1 className='titulo'>Lista de Viagens</h1>

        {trips.map(trip => (
          <TripItem 
            key={trip.id}
            trip={trip}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}

        <div className='actions'>
          <NewTripButton onAdd={handleAdd} />
        </div>

        {showModal && (
          <TripForm 
            trip={selectedTrip}
            onClose={handleClose}
            setTrips={setTrips}
            trips={trips}
          />
        )}
      </div>
    </div>
  );
}

export default App;
