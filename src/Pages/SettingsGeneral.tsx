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
      <div className="flex max-w-5xl flex-col px-10 py-2">
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
        <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
          <SettingsTile
            title="Tiling Layout"
            description="Which tiling layout to use"
          />
          <SettingsTile
            title="Cursor Warping"
            description="If enabled, will warp the cursor in many cases (focusing, keybinds, etc)"
          />
          <SettingsTile
            title="Focus Fallback"
            description="If disabled, will not fall back to the next available window when moving focus in a direction where no window was found"
          />
          <SettingsTile
            title="Apply sensitivity to raw input"
            description="[NOT RECOMMENDED] If enabled, will also apply the sensitivity to raw mouse output (e.g. sensitivity in games)."
          />
          <SettingsTile
            title="Resize on border"
            description="Allows you to resize windows by clicking and dragging on borders and gaps"
          />
          <SettingsTile
            title="Extend border grab area"
            description="Extend the area around the border where you can grab it to resize"
          />
          <SettingsTile
            title="Allow screen tearing"
            description="Master switch for allowing screen tearing to occur. See the Tearing page."
          />
        </div>
      </div>
    </div>
  );
}
