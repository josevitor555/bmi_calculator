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
      <div id='bmi-number'>
        Seu IMC: <span className={infoClass}> {bmi} </span>
      </div>

      <div id="bmi-info">
        <span className='text-2xl'> Sua situação Atual </span> - <span className={`${infoClass}`}> {info} </span>
      </div>

      <div className='text-base'> Verifique as classificações </div>

      <div id="bmi-table">
        <div className="table-header">
          <h4> IMC </h4>
          <h4> Classificação </h4>
          <h4> Obesidade </h4>
        </div>

        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p> {item.classification} </p>
            <p> {item.info} </p>
            <p> {item.obesity} </p>
          </div>
        ))}
      </div>

      <Button className="cursor-pointer" id="back-btn" onClick={resetCalc}> Voltar </Button>
    </div>
  )
}

export default BMITable;
