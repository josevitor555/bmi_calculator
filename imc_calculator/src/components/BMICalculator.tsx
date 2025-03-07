import "./BMICalculator.css"

import React, { useState, ChangeEvent, MouseEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ImcCalculatorProps {
    calcBmi: (e: MouseEvent<HTMLButtonElement>, height: string, weight: string) => void;
}

const ImcCalculator: React.FC<ImcCalculatorProps> = ({ calcBmi }) => {
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");

    const clearForm = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    const formatNumber = (value: string): string => {
        return value.replace(/[^0-9,]/g, "");
    }

    const handleHeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const updatedValue = formatNumber(e.target.value);
        setHeight(updatedValue);
    }

    const handleWeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const updatedValue = formatNumber(e.target.value);
        setWeight(updatedValue);
    }

    return (
        <div id='bmi__calculator'>
            <h2 className="text-2xl"> Calculadora de IMC </h2>

            <form action="" id="bmi-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height"> Sua Altura </label>
                        <Input type="text" name='height' id='height' placeholder='Sua Altura Aqui' onChange={(e) => handleHeightChange(e)} value={height} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight"> Seu Peso </label>
                        <Input type="text" name="weight" id="weight" placeholder="Seu Peso Aqui" onChange={(e) => handleWeightChange(e)} value={weight} />
                    </div>
                </div>

                <div className="action-control">
                    <Button className="cursor-pointer" variant={"default"} id="calc-btn" onClick={(e: MouseEvent<HTMLButtonElement>) => calcBmi(e, height, weight)}>
                        Calcular
                    </Button>
                    <Button className="cursor-pointer" variant={"ghost"} id="clear-btn" onClick={clearForm}>
                        Limpar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ImcCalculator;
