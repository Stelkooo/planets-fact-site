import React from 'react';
import { useAppSelector } from '../../store/hooks';
import {
  selectCurrentPlanet,
  selectCurrentDesc,
} from '../../store/planet/planet.selector';

// component import
import PlanetImage from '../planet-img/planet-img.component';

// svg import
import { ReactComponent as SourceIcon } from '../../assets/icon-source.svg';

// style import
import {
  MainContainer,
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
  const currentDesc = useAppSelector(selectCurrentDesc);

  return (
    currentPlanet && (
      <MainContainer>
        <PlanetImage />
        <PlanetName>{currentPlanet.name}</PlanetName>
        <PlanetDesc>{currentDesc.content}</PlanetDesc>
        <Source>
          Source :{' '}
          <SourceLink href={currentDesc.source} target="_blank">
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
