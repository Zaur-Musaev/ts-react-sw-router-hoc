import { useEffect, useState } from "react";
import { base_url } from "../utils/constants";

const FarGalaxy = () => {
  const [openingCrawl, setOpeningCrawl] = useState("Loading...");

  useEffect(() => {
    const openingCrawl = sessionStorage.getItem("opening_crawl");
    if (openingCrawl) {
      setOpeningCrawl(openingCrawl);
    } else {
      const episode = Math.floor(1 + Math.random() * 6);
      fetch(`${base_url}/v1/films/${episode}`)
        .then((response) => response.json())
        .then((data) => {
          setOpeningCrawl(data.opening_crawl);
          sessionStorage.setItem("opening_crawl", data.opening_crawl);
        });
    }
  }, []);
  return <p className={"farGalaxy"}>{`${openingCrawl}`}</p>;
};

export default FarGalaxy;
