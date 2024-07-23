import './Word.css';
import React from 'react';

export function Word({ word }) {

    /*  Word component consisting of the count (number of times used in Romeo and Juliet)
        and the value (the word itself) */

    return (
        <div>
            <li>
                <div className="count">{word.count}</div>
                <div className="value">{word.value}</div>
            </li>
        </div>
    )
}