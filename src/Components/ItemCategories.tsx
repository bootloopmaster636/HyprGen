import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeData } from "../Contexts.ts";

// @ts-ignore
export default function ItemCategories({ title, description, faIcon }) {
  return (
    <div
      className={
        ThemeData.bgColor +
        " flex h-24 w-[24rem] flex-row items-center rounded-xl px-5" +
        " hover-scale-105 transition-all hover:border-4 hover:border-[#ffffff40] hover:shadow-xl"
      }
    >
      <div className="min-w-[2rem] text-center text-3xl">
        <FontAwesomeIcon icon={["fas", faIcon]} />
      </div>
      <div className="w-4"></div>
      <div>
        <h1 className={ThemeData.onPrimary + " text-start text-2xl font-bold"}>
          {title}
        </h1>
        <p className="text-start text-white">{description}</p>
      </div>
    </div>
  );
}
