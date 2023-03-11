/* eslint-disable @typescript-eslint/dot-notation */
import React, { useState, useEffect } from 'react';
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

  const [dimensions, setDimensions] = useState({ width: window.innerWidth });

  function handleOnClick(planetName: PlanetList): void {
    if (planetName !== currentPlanet.name) {
      dispatch(setCurrentPlanet(planetName));
      if (dimensions.width < 768) setToggleHamburger(!toggleHamburger);
    }
  }

  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth });
    }

    window.addEventListener('resize', handleResize);
  }, []);

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
