import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function WorkInProgress() {
  const navigator = useNavigate();
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-[#808030]">
      <div className={"text-3xl"}>
        <FontAwesomeIcon icon={["fas", "tools"]} />
      </div>
      <p className="text-center text-4xl">Work in progress</p>
      <div className={"h-2"}></div>
      <button onClick={() => navigator("/")}>Go back</button>
    </div>
  );
}

export default WorkInProgress;
