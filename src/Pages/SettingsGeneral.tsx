import "../App.css";
import AppBar from "../Components/AppBar.tsx";
import { ThemeData } from "../consts.ts";
import SettingsTile from "../Components/SettingsTile.tsx";

export default function SettingsGeneralPage() {
  return (
    <div
      className={
        ThemeData.backgroundShallow +
        " min-w-screen flex min-h-screen flex-col items-center"
      }
    >
      <AppBar title="General" />
      <div className="flex max-w-5xl flex-col px-6 py-2">
        <p className={"pb-2 pt-3 text-3xl"}>Border and Gaps</p>
        <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
          <SettingsTile
            title="Border size"
            description="Size of the border around windows"
          />
          <SettingsTile
            title="No border on floating"
            description="Disable borders for floating windows"
          />
          <SettingsTile title="Gaps in" description="Gaps between windows" />
          <SettingsTile
            title="Gaps out"
            description="Gaps between windows and monitor edges"
          />
          <SettingsTile
            title="Inactive border color"
            description="Border color for inactive windows"
          />
          <SettingsTile
            title="Active border color"
            description="Border color for active window"
          />
        </div>
        <p className={"pb-2 pt-6 text-3xl"}>Misc.</p>
      </div>
    </div>
  );
}
