import { useEffect, useState } from "react";
import axios from "axios";

function PetList() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://rich-onions-retire.loca.lt")
      .then(response => {
        setPets(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching pets:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading pets...</p>;

  return (
    <div>
      <h2>🐾 PetHub Pets</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            {pet.name} ({pet.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;
