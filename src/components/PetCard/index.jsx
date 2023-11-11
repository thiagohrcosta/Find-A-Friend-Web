import { PetCardContainer } from "./styles";

export function PetCard({photo, name}) {
  return (
    <PetCardContainer>
      <img src={photo} alt="Pet"/>
      <p>{name}</p>
    </PetCardContainer>
  )
}