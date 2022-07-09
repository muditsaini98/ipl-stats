import React from 'react'
import { data } from "../matches"
import { Line } from "react-chartjs-2";
import { registerables } from "chart.js";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(...registerables);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const MatchWin = () => {


    let arr1 = [];
    for (var key in data) {
        if (data[key].winner === "Royal Challengers Bangalore") {
            arr1.push("Royal Challengers Bangalore")
        }
    }
    const arrRCB = arr1.length;
    let arr2 = [];
    for (key in data) {
        if (data[key].winner === "Sunrisers Hyderabad") {
            arr2.push("Sunrisers Hyderabad")
        }
    }
    const arrSH = arr2.length;
    let arr3 = [];
    for (key in data) {
        if (data[key].winner === "Mumbai Indians") {
            arr3.push("Mumbai Indians")
        }
    }
    const arrMI = arr3.length
    let arr4 = [];
    for (key in data) {
        if (data[key].winner === "Rising Pune Supergiant") {
            arr4.push("Rising Pune Supergiant")
        }
    }
    const arrRPS = arr4.length;
    let arr5 = [];
    for (key in data) {
        if (data[key].winner === "Gujarat Lions") {
            arr5.push("Gujarat Lions")
        }
    }
    const arrGL = arr5.length;
    let arr6 = [];
    for (key in data) {
        if (data[key].winner === "Kolkata Knight Riders") {
            arr6.push("Kolkata Knight Riders")
        }
    }
    const arrKKR = arr6.length
    let arr7 = [];
    for (key in data) {
        if (data[key].winner === "Kings XI Punjab") {
            arr7.push("Kings XI Punjab")
        }
    }
    const arrKP = arr7.length;
    let arr8 = [];
    for (key in data) {
        if (data[key].winner === "Delhi Daredevils") {
            arr8.push("Delhi Daredevils")
        }
    }
    const arrDD = arr8.length;
    let arr9 = [];
    for (key in data) {
        if (data[key].winner === "Chennai Super Kings") {
            arr9.push("Chennai Super Kings")
        }
    }
    const arrCSK = arr9.length
    let arr10 = [];
    for (key in data) {
        if (data[key].winner === "Rajasthan Royals") {
            arr10.push("Rajasthan Royals")
        }
    }
    const arrRR = arr10.length
    let arr11 = [];
    for (key in data) {
        if (data[key].winner === "Deccan Chargers") {
            arr11.push("Deccan Chargers")
        }
    }
    const arrDC = arr11.length;
    let arr12 = [];
    for (key in data) {
        if (data[key].winner === "Kochi Tuskers Kerala") {
            arr12.push("Kochi Tuskers Kerala")
        }
    }
    const arrKTK = arr12.length;
    let arr13 = [];
    for (key in data) {
        if (data[key].winner === "Pune Warriors") {
            arr13.push("Pune Warriors")
        }
    }
    const arrPW = arr13.length

    const options = {
        title: {
            display: true,
            text: 'Number of matches win by each team',
          },
          responsive: true,
    }

    let color = `rgb(${ Math.floor(Math.random()*255)}, ${ Math.floor(Math.random()*255)}, ${ Math.floor(Math.random()*255)})`
    
    return (
        <Line
            options={options}
            redraw={true}
            data={{
                labels: ["Rajasthan Royals", "Deccan Chargers", "Kochi Tuskers Kerala", "Pune Warriors", "Sunrisers Hyderabad", "Mumbai Indians", "Royal Challengers Bangalore", "Rising Pune Supergiant", "Gujarat Lions", "Kolkata Knight Riders", "Kings XI Punjab", "Delhi Daredevils", "Chennai Super Kings"],
                datasets: [
                    {
                        label: "Match Wins",
                        borderWidth: 1,
                        backgroundColor: color,
                        data: [ arrRR, arrDC, arrKTK, arrPW, arrSH, arrMI, arrRCB, arrRPS, arrGL, arrKKR, arrKP, arrDD, arrCSK],
                    },
                ],
            }}
        />
    )
}

export default MatchWin