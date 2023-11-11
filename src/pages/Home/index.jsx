import Logo from '../../assets/images/logo.svg';
import Pets from "../../assets/images/animals.svg";
import { BannerContent, FooterContent, HomeBackground, HomeContainer } from './style';
import { SearchIcon } from '../../components/Icons/searchIcon';
import { useCities } from '../../hooks/useCities';
import { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Home(){
  const { listOfStates } = useCities();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCities, setSelectedCities] = useState(["Escolha uma cidade"]);
  const [citySelected, setCitySelected] = useState(null);

  function handleStateChange(e) {
    const state = e.target.value;
    console.log(state)
    setSelectedState(state);
    setSelectedCities([...selectedCities, ...(listOfStates[state] || [])]);
  }

  function handleCitySelectedByUser(e) {
    console.log(e)
    setCitySelected(e)
  }

  return (
    <HomeBackground>
      <HomeContainer>
        <img src={Logo} alt="Logo"/>
        <BannerContent>
          <div>
            <h1>Leve a felicidade para o seu lar</h1>
          </div>
          <div>
            <img src={Pets} alt="Pets" />
          </div>
        </BannerContent>
        <FooterContent>
          <div>
            <h3>Encontre o animal de estimação ideal para o seu estilo de vida!</h3>
          </div>
          <div className="search-home-container">
            <div>
              <p>Buscar</p>
            </div>
            <div className="input-container">
              <select id="states" value={selectedState} onChange={handleStateChange}>
                <option value="">Selecione um estado</option>
                {Object.keys(listOfStates)?.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {selectedState && selectedCities.length > 0 && (
                <>
                  <select
                    id="cities"
                    value={citySelected}
                    onChange={(e) => {
                      handleCitySelectedByUser(e.target.value);
                    }}
                  >
                    {selectedCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </>
              )}
              {citySelected !== null ? (
                <Link to={`http://localhost:3000/${citySelected}`}>
                  <SearchIcon width={"72px"} height={"72px"} iconSize={"26px"} />
                </Link>
              ) : (
                <SearchIcon width={"72px"} height={"72px"} iconSize={"26px"} />
              )}
            </div>
          </div>
        </FooterContent>
      </HomeContainer>
    </HomeBackground>
  )
}