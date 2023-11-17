import "./App.css";
import ItemCategories from "./Components/ItemCategories.tsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

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

function App() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center bg-[#201C2A] p-12">
      <Header />
      <div className="h-6"></div>
      <div className="grid gap-4 md:grid-cols-2">
        <ItemCategories
          title="General"
          description="Borders, gaps, layout, etc."
          faIcon="gears"
        />
        <ItemCategories
          title="Decoration"
          description="Rounding, blur, opacity, shadow, etc."
          faIcon="paintbrush"
        />
        <ItemCategories
          title="Input"
          description="Sensitivity, keyboard layout, etc."
          faIcon="computer-mouse"
        />
        <ItemCategories
          title="Gesture"
          description="Workspace swipe gestures"
          faIcon="fingerprint"
        />
        <ItemCategories
          title="Miscellaneous"
          description="VFR, Hyprland logo, etc."
          faIcon="bars"
        />
      </div>
    </div>
  );
}

export default App;
