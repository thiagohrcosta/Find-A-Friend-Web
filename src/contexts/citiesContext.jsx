import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const CitiesContext = createContext({});

export function CitiesContextProvider(props) {
  const [listOfStates, setListOfStates] = useState([])

  async function fetchStatesAndCities() {
    const response = await api.get("http://localhost:3333/companies/list_of_cities")
    setListOfStates(response.data)

  }
  useEffect(() => {
    fetchStatesAndCities()
  }, [])

 return (
    <CitiesContext.Provider
      value={{ listOfStates, setListOfStates }}
    >
      {props.children}
    </CitiesContext.Provider>
  );
}
