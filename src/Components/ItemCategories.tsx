import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeData } from "../consts.ts";
import { useNavigate } from "react-router-dom";

// @ts-ignore
export default ({ title, description, faIcon, navLink }) => {
  const navigator = useNavigate();
  return (
    <a
      className={
        ThemeData.surface +
        " flex h-24 w-[24rem] flex-row items-center rounded-xl px-5" +
        " hover-scale-105 transition-all hover:border-4 hover:border-[#ffffff40] hover:shadow-xl"
      }
      onClick={() => navigator(navLink)}
    >
      <div className="min-w-[2rem] text-center text-3xl text-white">
        <FontAwesomeIcon icon={["fas", faIcon]} />
      </div>
      <div className="w-4"></div>
      <div>
        <h1 className={ThemeData.onPrimary + " text-start text-2xl font-bold"}>
          {title}
        </h1>
        <p className="text-start text-white">{description}</p>
      </div>
    </a>
  );
};
