import { ThemeData } from "../consts.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

interface AppBarParams {
  title: string;
}

export default function AppBar({ title }: AppBarParams) {
  const navigator = useNavigate();
  return (
    <div
      className={
        ThemeData.backgroundDeep +
        " sticky top-0 flex h-14 w-screen flex-row items-center px-6 "
      }
      onClick={() => navigator("/")}
    >
      <div className={ThemeData.onPrimary}>
        <p>
          <FontAwesomeIcon icon={"angle-left"}></FontAwesomeIcon>
        </p>
      </div>
      <div className={"w-4"}></div>
      <p className={"text-xl"}>{title}</p>
    </div>
  );
}
