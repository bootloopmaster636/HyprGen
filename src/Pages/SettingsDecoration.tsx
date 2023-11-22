import "../App.css";
import AppBar from "../Components/AppBar.tsx";
import { ThemeData } from "../consts.ts";
import SettingsTile from "../Components/SettingsTile.tsx";

export default function SettingsDecorationPage() {
  return (
    <div
      className={
        ThemeData.backgroundShallow +
        " min-w-screen flex min-h-screen flex-col items-center"
      }
    >
      <AppBar title="Decoration" />
      <div className="flex max-w-5xl flex-col px-10 py-2">
        <p className={"pb-2 pt-3 text-3xl"}>Misc.</p>
        <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
          <SettingsTile
            title="Rounding"
            description="Window's rounded corners’ radius (in layout px)"
          />
          <SettingsTile
            title="Screen shader"
            description="A path to a custom shader to be applied at the end of rendering."
          />
        </div>

        <p className={"pb-2 pt-6 text-3xl"}>Window Opacity</p>
        <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
          <SettingsTile
            title="Active window opacity"
            description="Opacity of active windows. (0.0 - 1.0)"
          />
          <SettingsTile
            title="Inactive window opacity"
            description="Opacity of inactive windows. (0.0 - 1.0)"
          />
          <SettingsTile
            title="Fullscreen window opacity"
            description="Opacity of fullscreen window. (0.0 - 1.0)"
          />
        </div>

        <p className={"pb-2 pt-6 text-3xl"}>Drop shadow</p>
        <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
          <SettingsTile
            title="Enable drop shadow"
            description="Master switch of window drop shadow"
          />
          <SettingsTile
            title="Shadow range/size"
            description="Shadow range (“size”) in layout px."
          />
          <SettingsTile
            title="Shadow render power"
            description="In what power to render the falloff (more power, the faster the falloff) [1-4]"
          />
          <SettingsTile
            title="Shadow ignore window"
            description="If true, the shadow will not be rendered behind the window itself, only around it."
          />
          <SettingsTile title="Shadow Color" description="Value in hex RGBA" />
          <SettingsTile
            title="Shadow color (inactive window)"
            description="Value in hex RGBA"
          />
          <SettingsTile
            title="Shadow rendering offset"
            description="Format: [x, y]"
          />
          <SettingsTile
            title="Shadow size/spread"
            description="Shadow's scale (0.0-1.0)"
          />
        </div>

        <p className={"pb-2 pt-6 text-3xl"}>Blur</p>
        <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
          <SettingsTile
            title="Enable blur"
            description="Will enable kawase window background blur"
          />
          <SettingsTile
            title="Blur size"
            description="Set the blur size (distance)"
          />
          <SettingsTile
            title="Blur passes"
            description="Set the blur passes (quality)"
          />
          <SettingsTile
            title="Ignore window opacity"
            description="Make the blur layer ignore the opacity of the window"
          />
          <SettingsTile
            title="Blur X-ray"
            description="If enabled, floating windows will ignore tiled windows in their blur. Will reduce overhead on floating blur significantly."
          />
          <SettingsTile
            title="Blur noise"
            description="How much noise to apply. 0.0 - 1.0"
          />
          <SettingsTile
            title="Blur contrast"
            description="Contrast modulation for blur. 0.0 - 2.0"
          />
          <SettingsTile
            title="Blur noise"
            description="How much noise to apply. 0.0 - 1.0"
          />
          <SettingsTile
            title="Blur brightness"
            description="Brightness modulation for blur. 0.0 - 2.0"
          />
          <SettingsTile
            title="Blur vibrancy"
            description="Increase saturation of blurred colors. 0.0 - 1.0"
          />
          <SettingsTile
            title="Blur vibrancy (dark)"
            description="How strong the effect of vibrancy is on dark areas . 0.0 - 1.0"
          />
          <SettingsTile
            title="Blur on special"
            description="Whether to blur behind the special workspace (note: expensive)"
          />
        </div>

        <p className={"pb-2 pt-6 text-3xl"}>Window dimming</p>
        <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
          <SettingsTile
            title="Enable window dimming"
            description="Will enable dimming on inactive windows"
          />
          <SettingsTile
            title="Window dimming amount"
            description="How much inactive windows should be dimmed, 0.0 - 1.0"
          />
          <SettingsTile
            title="Dim special"
            description="How much to dim the rest of the screen by when a special workspace is open. 0.0 - 1.0"
          />
          <SettingsTile
            title="Dim around (for dimaround rule)"
            description="How much the dimaround window rule should dim by. 0.0 - 1.0"
          />
        </div>
      </div>
    </div>
  );
}
