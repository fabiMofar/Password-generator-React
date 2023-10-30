import './App.css';
import {useState} from "react";
import {upperCaseLetters, lowerCaseLetters, numbers, special} from "./data";
import {Checkbox} from "primereact/checkbox";
import {InputNumber} from "primereact/inputnumber";
import {Button} from "primereact/button";
function App() {
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(6);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const generatePassword = (e) => {
    e.preventDefault();

    let _password = "";

    for (let i = 0; i < counter; i++) {
      _password += getRandom();
    }

    setPassword(_password);
  };

  const getRandom = () => {
    const chars = [];

    if (isUppercase) {
      chars.push(
          upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
      );
    }

    if (isLowercase) {
      chars.push(
          lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
      );
    }

    if (isNumber) {
      chars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (isSymbol) {
      chars.push(special[Math.floor(Math.random() * special.length)]);
    }

    if (chars.length === 0) return "";

    return chars[Math.floor(Math.random() * chars.length)];
  };




  return (
      <div className="h-screen flex flex-column justify-content-center align-items-center surface-800 text-blue-900">
        <div className="w-30rem p-8 border-round-md bg-white">
          <h2 className="text-center mb-4">Password Generator</h2>
          <h4 className="text-center mb-4">{password}</h4>

          <form className="flex justify-content-between mb-4">
            <div>
              <div className="flex justify-content-between align-items-center mb-4">
                <label htmlFor="uppercase" className="ml-2">Uppercase</label>
                <Checkbox
                    inputId="uppercase"
                    name="uppercase"
                    onChange={(e) => setIsUppercase(e.target.checked)}
                    checked={isUppercase} />
              </div>

              <div className="flex justify-content-between align-items-center mb-4">
                <label htmlFor="lowercase" className="ml-2">Lowercase</label>
                <Checkbox
                    checked={isLowercase}
                    onChange={(e) => setIsLowercase(e.target.checked)}
                    type="checkbox"
                    id="lowercase"
                    name="lowercase"
                />
              </div>

              <div className="flex justify-content-between align-items-center mb-4">
                <label htmlFor="numbers" className="ml-2">Numbers</label>
                <Checkbox
                    checked={isNumber}
                    onChange={(e) => setIsNumber(e.target.checked)}
                    type="checkbox"
                    id="numbers"
                    name="numbers"
                />
              </div>

              <div className="flex justify-content-between align-items-center mb-4">
                <label htmlFor="symbols" className="ml-2">Symbols</label>
                <Checkbox
                    checked={isSymbol}
                    onChange={(e) => setIsSymbol(e.target.checked)}
                    type="checkbox"
                    id="symbols"
                    name="symbols"
                />
              </div>

              <div className="flex flex-column align-items-center justify-content-center mt-6 mb-6 p-3 border-round bg-white">
                <h4 className="mb-2">Password Length</h4>
                <InputNumber value={counter}
                             onValueChange={(e) => setCounter(e.value)}
                             showButtons
                             buttonLayout="horizontal"
                             decrementButtonClassName="p-button-danger"
                             incrementButtonClassName="p-button-success"
                             incrementButtonIcon="pi pi-plus"
                             decrementButtonIcon="pi pi-minus"
                             min={6}
                             max={20}
                />
              </div>
              <div className="flex justify-content-center">
                <Button label="Generate Password" onClick={generatePassword} className="p-3"/>
              </div>
            </div>
          </form>
        </div>
  </div>
  );
}

export default App;
