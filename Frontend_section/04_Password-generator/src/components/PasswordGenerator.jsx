import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symAllowed, setSymAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (symAllowed) str += "!@#$%^&*_+`~-.<>,/?";
    if (numAllowed) str += "1234567890";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      // console.log(char);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [numAllowed, symAllowed, length]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [numAllowed, symAllowed, setPassword, length]);

  const passwordRef = useRef(null);

  return (
    <>
      <div className="w-1/2 max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
        {/* <div className="bg-slate-500 w-1/3 p-4 rounded-lg "> */}
        <div className="items-center text-center">
          <label htmlFor="password">
            <h1>Password Generator</h1>
          </label>
          <input
            placeholder="Password"
            name="password"
            type="text"
            readOnly
            ref={passwordRef}
            value={password}
            className="bg-stone-300 p-2 w-1/2 text-black"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-slate-700 p-2 rounded-md"
          >
            Copy
          </button>
        </div>

        <div className="flex gap-5">
          <div className="">
            <input
              onChange={(e) => {
                setLength(e.target.value);
              }}
              type="range"
              min={8}
              max={60}
              name="numRange"
              className="m-2 cursor-pointer"
              value={length}
            />
            <label htmlFor="numRange">Length: {length}</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
              name=""
              id=""
              className="m-2"
            />
            <label htmlFor="numCheck">Number</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="symCheck"
              defaultChecked={symAllowed}
              onChange={() => {
                setSymAllowed((prev) => !prev);
              }}
              className="m-2"
              id=""
            />
            <label htmlFor="symCheck">Symbol</label>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default PasswordGenerator;
