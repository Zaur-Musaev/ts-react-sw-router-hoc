import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import { navItems } from "../utils/constants";
import { withHeroId } from "../hoc/withHeroId";

const Home = () => {
  return (
    <main className="clearfix">
      <Hero />
      <DreamTeam />
      <FarGalaxy />
    </main>
  );
};

export default withHeroId(navItems[0].route)(Home);
