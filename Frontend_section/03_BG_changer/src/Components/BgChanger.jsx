import { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <div style={{ backgroundColor: color }} className="h-screen w-full">
        <div className="flex flex-wrap justify-center">
          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
            className="w-20 h-10"
          >
            Yellow
          </button>
          <button
            style={{ backgroundColor: "Lavender" }}
            onClick={() => setColor("lavender")}
            className="w-20 h-10 "
          >
            lavender
          </button>
          <button
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
            className="w-20 h-10 "
          >
            Pink
          </button>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
            className="w-20 h-10 "
          >
            Red
          </button>
        </div>
      </div>
    </>
  );
};

export default BgChanger;
