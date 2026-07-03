import Soleil from "./components/images/soleil";
import Help from "./components/images/help";
import Horloge from "./components/images/horloge";

import ArrowUp from "./components/micro/arrowUp";
import Hero from "./components/sections/hero";
import Services from "./components/sections/services";
import Expertise from "./components/sections/expertise";
import Portfolio from "./components/sections/portfolio";
import About from "./components/sections/about";
import Temoignages from "./components/sections/temoignages";
import Contact from "./components/sections/contact";
import Faq from "./components/sections/faq";

import {
  DUREE,
  init,
  anim,
} from "./components/animate/textAppear";

export default function Home() {
  return (
    // Utiliser partout https://motion.dev/examples/react-hero-stagger
    // UTILISER PARTOUT https://motion.dev/examples/react-enter-animation
    // UTILISER pour transitions entre thème si position différente https://motion.dev/examples/react-css-spring
    // POUR LES BOUTONS : https://motion.dev/examples/react-material-design-ripple
    <div>
      <Hero init={init} anim={anim} duree={DUREE} />
      <ArrowUp />

      <Services />

      <Expertise />

      <Portfolio init={init} anim={anim} duree={DUREE}/>

      <About />

      <Temoignages />

      <Contact init={init} anim={anim} duree={DUREE} />

      <Faq />
    </div>
  );
}
