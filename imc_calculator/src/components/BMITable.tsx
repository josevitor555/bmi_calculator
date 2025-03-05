import React from 'react'

// import Button from './Button'

import { Button } from "@/components/ui/button"

import "./BMITable.css"

interface DataItem {
  classification: string;
  info: string;
  obesity: string;
}

interface BMITableProps {
  data: DataItem[];
  bmi: string;
  info: string;
  infoClass: string;
  resetCalc: () => void;
}

const BMITable: React.FC<BMITableProps> = ({ data, bmi, info, infoClass, resetCalc }) => {
  return (
    <div id='result-container'>
      <p id='bmi-number'>
        Your BMI: <span className={infoClass}> {bmi} </span>
      </p>
      <p id="bmi-info">
        Your Current Situation - <span className={infoClass}> {info} </span>
      </p>

      <h3 className='text-base'> Check the classifications </h3>

      <div id="bmi-table">
        <div className="table-header">
          <h4> BMI </h4>
          <h4> Classification </h4>
          <h4> Obesity </h4>
        </div>

        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p> {item.classification} </p>
            <p> {item.info} </p>
            <p> {item.obesity} </p>
          </div>
        ))}
      </div>

      <Button className="cursor-pointer" id="back-btn" onClick={resetCalc}> Back </Button>
    </div>
  )
}

export default BMITable;
