/* eslint-disable @typescript-eslint/dot-notation */
import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setCurrentPlanet,
  PlanetList,
} from '../../store/planet/planet.reducer';
import {
  selectPlanets,
  selectCurrentPlanet,
} from '../../store/planet/planet.selector';

// style import
import {
  PlanetOptionsContainer,
  Planet,
  PlanetColor,
  PlanetName,
  Chevron,
} from './planet-options.styled';

type Props = {
  toggleHamburger: boolean;
  setToggleHamburger: React.Dispatch<React.SetStateAction<boolean>>;
};

function PlanetOptions({ toggleHamburger, setToggleHamburger }: Props) {
  const dispatch = useAppDispatch();
  const planets = useAppSelector(selectPlanets);
  const currentPlanet = useAppSelector(selectCurrentPlanet);

  const windowWidth = useRef(window.innerWidth);

  function handleOnClick(planetName: PlanetList): void {
    if (planetName !== currentPlanet.name) {
      dispatch(setCurrentPlanet(planetName));
      if (windowWidth.current < 768) setToggleHamburger(!toggleHamburger);
    }
  }

  return (
    <PlanetOptionsContainer>
      {planets.map((planet) => (
        <Planet key={planet.name} onClick={() => handleOnClick(planet.name)}>
          <PlanetColor $planet={planet.color} />
          <PlanetName>{planet.name}</PlanetName>
          <Chevron />
        </Planet>
      ))}
    </PlanetOptionsContainer>
  );
}

export default PlanetOptions;
