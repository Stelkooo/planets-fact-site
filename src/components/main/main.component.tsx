import React from 'react';

import Mercury from '../../assets/planet-mercury.svg';

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
  return (
    <MainContainer>
      <PlanetImgContainer>
        <PlanetImg
          src={Mercury}
          alt=""
          $mobileHeight={111}
          $tabletHeight={123}
          $desktopHeight={233}
        />
      </PlanetImgContainer>
      <PlanetName>Mercury</PlanetName>
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
          <FactValue>243 Days</FactValue>
        </Fact>
        <Fact>
          <FactName>Revolution Time</FactName>
          <FactValue>87.97 Days</FactValue>
        </Fact>
        <Fact>
          <FactName>Radius</FactName>
          <FactValue>2,439.7 km</FactValue>
        </Fact>
        <Fact>
          <FactName>Average Temp.</FactName>
          <FactValue>430°C</FactValue>
        </Fact>
      </FactsContainer>
    </MainContainer>
  );
}

export default Main;
