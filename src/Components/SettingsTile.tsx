import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeData } from "../consts.ts";
import { useNavigate } from "react-router-dom";
import { Simulate } from "react-dom/test-utils";
import dragExit = Simulate.dragExit;

// @ts-ignore
export default ({ title, description }) => {
  return (
    <div
      className={ThemeData.backgroundDeep + " h-[10rem] w-[20rem] rounded-xl"}
    >
      <div className={ThemeData.surface + " h-[7rem] w-[20rem] rounded-xl p-4"}>
        <p className={ThemeData.onPrimary + " text-bold text-xl"}>{title}</p>
        <p className={"text-md"}>{description}</p>
      </div>
    </div>
  );
};
