import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectCurrentPlanet } from '../../store/planet/planet.selector';

// svg import
import { ReactComponent as SourceIcon } from '../../assets/icon-source.svg';

// style import
import {
  MainContainer,
  PlanetImgContainer,
  PlanetImg,
  PlanetName,
  PlanetDesc,
  Source,
  SourceLink,
  FactsContainer,
  Fact,
  FactName,
  FactValue,
} from './main.styled';

function Main() {
  const currentPlanet = useAppSelector(selectCurrentPlanet);

  return (
    currentPlanet && (
      <MainContainer>
        <PlanetImgContainer>
          <PlanetImg
            src={`/assets/planet-${currentPlanet.name.toLowerCase()}.svg`}
            alt=""
            $mobileHeight={currentPlanet.sizes.mobile}
            $tabletHeight={currentPlanet.sizes.tablet}
            $desktopHeight={currentPlanet.sizes.desktop}
          />
        </PlanetImgContainer>
        <PlanetName>{currentPlanet.name}</PlanetName>
        <PlanetDesc>
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun`&apos;`s planets. Mercury is one of four terrestrial
          planets in the Solar System, and is a rocky body like Earth.
        </PlanetDesc>
        <Source>
          Source :{' '}
          <SourceLink href="top">
            Wikipedia
            <SourceIcon />
          </SourceLink>
        </Source>
        <FactsContainer>
          <Fact>
            <FactName>Rotation Time</FactName>
            <FactValue>{currentPlanet.rotation}</FactValue>
          </Fact>
          <Fact>
            <FactName>Revolution Time</FactName>
            <FactValue>{currentPlanet.revolution}</FactValue>
          </Fact>
          <Fact>
            <FactName>Radius</FactName>
            <FactValue>{currentPlanet.radius}</FactValue>
          </Fact>
          <Fact>
            <FactName>Average Temp.</FactName>
            <FactValue>{currentPlanet.temperature}</FactValue>
          </Fact>
        </FactsContainer>
      </MainContainer>
    )
  );
}

export default Main;
