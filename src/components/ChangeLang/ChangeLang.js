import "./ChangeLang.css";
import { useLanguage } from "../../hooks/useLanguage";
import { useSelector, useDispatch } from "react-redux";
import { switchLang } from "../../redux/slices/langSlice";
import image from "../../assets/translator.png";

function ChangeLang() {
  const langstring = useSelector((state) => state.lang.lang);
  const { lang, otherLang, flag } = useLanguage(langstring);
  const dispatch = useDispatch();
  return (
    <div id="changeLang">
      <div id="visiblebutton">
        <button className="Currentlang">
          <img src={flag} alt="flag"></img> {lang}{" "}
          <img src={image} alt="change language"></img>
        </button>
      </div>
      <button
        className="OtherLang"
        onClick={() => dispatch(switchLang(otherLang[0][0]))}
      >
        {otherLang[0][0]} {otherLang[0][1]}
      </button>
      <button
        className="OtherLang"
        onClick={() => dispatch(switchLang(otherLang[1][0]))}
      >
        {otherLang[1][0]} {otherLang[1][1]}
      </button>
    </div>
  );
}

export default ChangeLang;
