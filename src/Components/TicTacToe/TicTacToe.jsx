import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/o.png'
import cross_icon from '../Assets/x.png'

let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    const toggle = (e, index) => {
        if (lock) {
            return 0;
        }

        if (data[index] === "") {
            if (count % 2 === 0) {
                e.target.innerHTML = `<img src='${cross_icon}'>`;
                data[index] = "x";
                setCount(++count);
            }
            else {
                e.target.innerHTML = `<img src='${circle_icon}'>`;
                data[index] = "o";
                setCount(++count);
            }
        }

        checkWinner();
    }

    const checkWinner = () => {
        // horizontal
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            win(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            win(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            win(data[8]);
        }
        // vertical
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            win(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            win(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            win(data[8]);
        }
        // diagonal
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            win(data[8]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            win(data[6]);
        }

    }

    const win = (winner) => {
        setLock(true);

        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations : <img src='${cross_icon}'> Wins`
        }
        else {
            titleRef.current.innerHTML = `Congratulations : <img src='${circle_icon}'> Wins`
        }
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = `Tic Tac Toe in <span>React</span>`
        box_array.map((e) => {
            e.current.innerHTML = ``;
        })
        setCount(0);
    }


    return (
        <div className="container">
            <h1 className="title" ref={titleRef}>Tic Tac Toe in <span>React</span></h1>
            <div className="board">

                <div className="row1">
                    <div className="boxes" onClick={(e) => { toggle(e, 0) }} ref={box1}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 1) }} ref={box2}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 2) }} ref={box3}></div>
                </div>

                <div className="row2">
                    <div className="boxes" onClick={(e) => { toggle(e, 3) }} ref={box4}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 4) }} ref={box5}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 5) }} ref={box6}></div>
                </div>

                <div className="row3">
                    <div className="boxes" onClick={(e) => { toggle(e, 6) }} ref={box7}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 7) }} ref={box8}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 8) }} ref={box9}></div>
                </div>

            </div>
            <button className="reset" onClick={() => { reset() }}>Reset</button>
        </div>
    )
}
