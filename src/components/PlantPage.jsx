import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchPlants() {
      try {
        const response = await fetch("http://localhost:6001/plants");
        if (!response.ok) {
          throw new Error("Unable to load plants.");
        }

        const plantData = await response.json();
        if (isMounted) {
          setPlants(plantData);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.message);
        }
      }
    }

    fetchPlants();
    return () => {
      isMounted = false;
    };
  }, []);

  async function handleAddPlant(plant) {
    setError("");

    try {
      const response = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      });

      if (!response.ok) {
        throw new Error("Unable to add plant.");
      }

      const newPlant = await response.json();
      setPlants((currentPlants) => [...currentPlants, newPlant]);
      return true;
    } catch (fetchError) {
      setError(fetchError.message);
      return false;
    }
  }

  const visiblePlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main>
      {error && <p role="alert">{error}</p>}
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search value={searchQuery} onSearch={setSearchQuery} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
