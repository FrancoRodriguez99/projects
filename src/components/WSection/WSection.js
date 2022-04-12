import "./WSection.css";
import { useLanguage } from "../../hooks/useLanguage";
import { useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import me from "../../assets/me.png";

const WSection = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const langstring = useSelector((state) => state.lang.lang);
  const { WSection } = useLanguage(langstring);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x4a94fa,
          color1: 0xff00e0,
          color2: 0xcdff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} id="welcome-section">
      <img src={me} alt="The Developer Itself!" id="me"></img>
      <nav id="textofwelcome">
        <h1>{WSection[0]}</h1>
        <h2>{WSection[1]}</h2>
        <h2>{WSection[2]}</h2>
      </nav>
    </div>
  );
};

export default WSection;
