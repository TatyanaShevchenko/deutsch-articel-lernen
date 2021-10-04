import { useState } from 'react';
import './Endung.css';

export const Endung =({word, articel, setIsCorrect})=>{

    const isArticelCorrect = (articel, user_variant) => {
        if (articel === user_variant) return "correct";
        return "incorrect";
    };

    const checkAnswer = (answer) => {
        setIsCorrect(isArticelCorrect(articel, answer))
    }

    return (
        <div className="endung__wrapper">
            <p className="endung__title">Welcher Artikel?</p>
            <p className="endung__word">{word}</p>
            <div className="endung__variants">
                <button className="endung__variant endung__variant_mannlich" onClick={()=>checkAnswer("Der")}>Der</button>
                <button className="endung__variant endung__variant_feminine" onClick={()=>checkAnswer("Die")}>Die</button>
                <button className="endung__variant endung__variant_neutrale" onClick={()=>checkAnswer("Das")}>Das</button>
            </div>
        </div>
    )
}