import "../App.css";
import AppBar from "../Components/AppBar.tsx";
import { ThemeData } from "../consts.ts";

export default function SettingsGeneralPage() {
  return (
    <div className={ThemeData.backgroundShallow + " min-w-screen min-h-screen"}>
      <AppBar title="General" />
    </div>
  );
}
