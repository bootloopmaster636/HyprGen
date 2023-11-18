import "./App.css";
import ItemCategories from "./Components/ItemCategories.tsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ThemeData } from "./consts.ts";

library.add(fas);

function Header() {
  return (
    <div>
      <p className="text-center text-4xl">HyprConf</p>
      <p className="text-center text-xl">Hyprland configuration tool</p>
      <p className="text-md pt-4 text-center italic">
        "Whaddya want to configure?"
      </p>
    </div>
  );
}

function HomePage() {
  return (
    <div
      className={
        "min-w-screen flex min-h-screen flex-col items-center p-12 " +
        ThemeData.backgroundShallow
      }
    >
      <Header />
      <div className="h-6"></div>
      <div className="grid gap-4 md:grid-cols-2">
        <ItemCategories
          title="General"
          description="Borders, gaps, layout, etc."
          faIcon="gears"
          navLink="/Settings/General"
        />
        <ItemCategories
          title="Decoration"
          description="Rounding, blur, opacity, shadow, etc."
          faIcon="paintbrush"
          navLink="/WorkInProgress"
        />
        <ItemCategories
          title="Input"
          description="Sensitivity, keyboard layout, etc."
          faIcon="computer-mouse"
          navLink="/WorkInProgress"
        />
        <ItemCategories
          title="Gesture"
          description="Workspace swipe gestures"
          faIcon="fingerprint"
          navLink="/WorkInProgress"
        />
        <ItemCategories
          title="Miscellaneous"
          description="VFR, Hyprland logo, etc."
          faIcon="bars"
          navLink="/WorkInProgress"
        />
      </div>
    </div>
  );
}

export default HomePage;
