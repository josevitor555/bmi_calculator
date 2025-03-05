import './App.css';
import './input.css';

import React, { useState, useEffect } from 'react';
import BMICalculator from './components/BMICalculator';
import BMITable from './components/BMITable';

interface DataItem {
  min: number;
  max: number;
  classification: string;
  info: string;
  obesity: string;
  infoClass: string;
}

function App() {
  const [bmi, setBMI] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const [infoClass, setInfoClass] = useState<string>("");
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/bmi-data")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error to get dates:", error));
  }, []);

  const calcBmi = (e: React.MouseEvent<HTMLButtonElement>, height: string, weight: string): void => {
    e.preventDefault();

    if (!weight || !height) return;
    const weightFloat: number = parseFloat(weight.replace(",", "."));
    const heightFloat: number = parseFloat(height.replace(",", "."));

    if (!weightFloat || !heightFloat) return;

    const bmiResult: string = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
    setBMI(bmiResult);

    const result = data.find((item) => parseFloat(bmiResult) >= item.min && parseFloat(bmiResult) <= item.max);
    if (result) {
      setInfo(result.info);
      setInfoClass(result.infoClass);
    }
  };

  const resetCalc = (e?: React.MouseEvent<HTMLButtonElement>): void => {
    e?.preventDefault();
    setBMI("");
    setInfo("");
    setInfoClass("");
  };

  return (
    <div className="container">
      {!bmi ? (
        <BMICalculator calcBmi={calcBmi} />
      ) : (
        <BMITable data={data} bmi={bmi} info={info} infoClass={infoClass} resetCalc={resetCalc} />
      )}
    </div>
  );
}

export default App;
