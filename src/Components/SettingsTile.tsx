import { ThemeData } from "../consts.ts";

// @ts-ignore
export default ({ title, description }) => {
  return (
    <div
      className={
        ThemeData.backgroundDeep +
        " h-[8rem] min-w-[18rem] max-w-[24rem] rounded-xl transition-all hover:h-[12rem]"
      }
    >
      <div
        className={
          ThemeData.surface +
          " h-[8rem] min-w-[18rem] max-w-[24rem] rounded-xl p-4"
        }
      >
        <p className={ThemeData.onPrimary + " text-bold text-xl"}>{title}</p>
        <div className={"h-20 overflow-y-scroll"}>
          <p className={"text-md"}>{description}</p>
        </div>
      </div>
    </div>
  );
};
