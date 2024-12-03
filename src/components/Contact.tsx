import React, { useEffect, useState } from "react";
import contactStyle from "../css_modules/contactStyle.module.css";
import { base_url, navItems, period_month } from "../utils/constants";
import { withHeroId } from "../hoc/withHeroId";

const Contact = () => {
  const [planets, setPlanets] = useState(["wait..."]);

  const fillPlanets = async (url: string) => {
    const response = await fetch(url);
    const json: Array<{ name: string }> = await response.json();
    const planets = json.map((item) => item.name);
    const info = {
      payload: planets,
      time: Date.now(),
    };
    localStorage.setItem("planets", JSON.stringify(info));
  };

  useEffect(() => {
    const planets = JSON.parse(localStorage.getItem("planets")!);

    if (planets && Date.now() - planets.time < period_month) {
      setPlanets(planets.payload);
    } else {
      fillPlanets(`${base_url}/v1/planets`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={contactStyle.all}>
      <div className={contactStyle.container}>
        <div>
          <h2>Contact Us</h2>
        </div>

        <div className={contactStyle.row}>
          <div className={contactStyle.column}>
            <img src="/w3images/map.jpg" alt="" />
          </div>

          <div className={contactStyle.column}>
            <form action="/action_page.php">
              <div className="contactStyle.line">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>

              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                {planets!.map((planet: string) => (
                  <option value={planet} key={planet}>
                    {planet}
                  </option>
                ))}
              </select>

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withHeroId(navItems[3].route)(Contact);
