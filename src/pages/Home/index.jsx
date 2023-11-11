import Logo from '../../assets/images/logo.svg';
import Pets from "../../assets/images/animals.svg";
import { BannerContent, FooterContent, HomeBackground, HomeContainer } from './style';
import { SearchIcon } from '../../components/Icons/searchIcon';

export default function Home(){
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
              <p>Busque por cidade</p>
            </div>
            <div className="input-container">
              <input></input>
              <SearchIcon 
                width={"72px"}
                height={"72px"}
                iconSize={"26px"}
              />
            </div>
          </div>
        </FooterContent>
      </HomeContainer>
    </HomeBackground>
  )
}