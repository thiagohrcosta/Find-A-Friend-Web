import { useContext } from 'react'
import { CitiesContext } from '../contexts/citiesContext';

export function useCities() {
	const value = useContext(CitiesContext);

	return value;
}