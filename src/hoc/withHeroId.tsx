import { useNavigate, useParams } from "react-router-dom";
import { characters, defaultHero } from "../utils/constants";
import { useContext, useEffect } from "react";
import { SWContext } from "../utils/context";

export const withHeroId = (route: string) => (Component: React.FC<any> ) => (props: any) => {
  let { heroId = defaultHero } = useParams();
  const { changeHero } = useContext(SWContext);
  const navigate = useNavigate();
  heroId = characters[heroId] ? heroId : defaultHero

  useEffect(() => {
    if (!characters[heroId]) {
      navigate(`/${route}/${heroId}`);
      return;
    }
    changeHero(heroId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroId]);

  return <Component heroId={heroId} {...props}/>
};
