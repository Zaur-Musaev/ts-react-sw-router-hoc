import React, { useEffect, useState } from "react";
import {
  base_url,
  characters,
  navItems,
  period_month,
} from "../utils/constants";

import { withHeroId } from "../hoc/withHeroId";

interface Props {
  heroId: string;
}

const AboutMe = ({ heroId }: Props) => {
  const [hero, setHero] = useState<any>();

  useEffect(() => {
    const hero1 = JSON.parse(localStorage.getItem(`${heroId}`)!);

    if (hero1 && Date.now() - hero1.time < period_month) {
      setHero(hero1.payload);
    } else {
      fetch(characters[heroId].url)
        .then((response) => response.json())
        .then((data) => {
          setHero(data);
          const info = {
            payload: data,
            time: Date.now(),
          };
          localStorage.setItem(`${heroId}`, JSON.stringify(info));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {hero && (
        <div>
          <img
            className={"image"}
            src={`${base_url}/${hero.image}`}
            alt={hero.name}
          />
          <p>birth_year: {hero.birth_year}</p>
          <p>eye_color: {hero.eye_color}</p>
          <p>gender: {hero.gender}</p>
          <p>hair_color: {hero.hair_color}</p>
          <p>height: {hero.height}</p>
          <p>mass: {hero.mass}</p>
          <p>skin_color: {hero.skin_color}</p>
        </div>
      )}
    </div>
  );
};

export default withHeroId(navItems[1].route)(AboutMe);
