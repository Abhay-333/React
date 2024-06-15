import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers === true) {
      str += "0123456789";
    } else if (characters === true) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      let pass = Math.floor(Math.random() * str.length + 1); // This will generate a random integer between 1 to str.length(i.e 52)
      password += str.charAt(pass);
    }

    setPassword(password);
  }, [length, numbers, characters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, passwordGenerator]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="password-generator h-screen w-full flex items-center justify-center ">
        <div className="box w-[40vw] h-[25vh] bg-zinc-700 rounded-lg p-5">
          <div className="flex items-center justify-center gap-2">
            <input
              ref={passwordRef}
              value={password}
              className="w-full p-3 rounded-lg text-[1.8vw] text-black"
              type="text"
              placeholder="Password..."
            />
            <button
              onClick={copyPassword}
              className="bg-[#005CC8] rounded-full px-5 py-3"
            >
              Copy
            </button>
          </div>

          <div className="mt-3 flex items-center justify-around">
            <input
              type="range"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              min={6}
              max={80}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>

            <div className="checkbox1 flex gap-2">
              <input
                type="checkbox"
                id="NumbersAllowed"
                defaultChecked={numbers}
                onChange={() => {
                  setNumbers((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>

            <div className="checkbox2 flex gap-2">
              <input
                type="checkbox"
                id="CharactersAllowed"
                defaultChecked={characters}
                onChange={() => {
                  setCharacters((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
