import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router";
import api from "../../services/api";
import { CityBackground, CityDashboard, PetGrid, PetsContainer, Spinner } from "./styles";

import { PetCard } from "../../components/PetCard";
import { Link } from "react-router-dom";
import { LeftContainer } from "../../components/LeftContainer";

export default function City() {
  const { city } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [listOfPets, setListOfPets] = useState([])

  async function handleFetchPetsByCity() {
    setIsLoading(true)
    const response = await api.get(`/animals/${city}`)
    setListOfPets(response.data)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  useEffect(() => {
    handleFetchPetsByCity()
  }, [])

  return (
    <CityBackground>
      <CityDashboard>
        <div className="dashboard">
          <LeftContainer />
        </div>
        <div className="content-container">
        {isLoading === true ? (
          <Spinner>
            <Oval
              height={180}
              width={180}
              color="#F15156"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#E44449"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </Spinner>
        ) : (
          <PetsContainer>
            <h3>Encontre <span>{listOfPets.length} amigo(s)</span> na sua cidade</h3>
            <PetGrid>
            {listOfPets.map((pet) => {
              return (
                <Link to={`http://localhost:3000/pets/${pet.id}`}>
                  <PetCard 
                    photo={pet.photo}
                    name={pet.name}
                  />
                </Link>
              )
            })}
            </PetGrid>
          </PetsContainer>
        )}
        </div>
      </CityDashboard>
      
    </CityBackground>
    
  )
}