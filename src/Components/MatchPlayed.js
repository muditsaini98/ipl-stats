import React from 'react'
import { data } from "../matches"
import { Bar } from "react-chartjs-2";
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

const MatchPlayed = () => {


    let arr1 = [];
    for (var key in data) {
        if (data[key].team1 === "Royal Challengers Bangalore" || data[key].team2 === "Royal Challengers Bangalore") {
            arr1.push("Royal Challengers Bangalore")
        }
    }
    const arrRCB = arr1.length;
    let arr2 = [];
    for (key in data) {
        if (data[key].team1 === "Sunrisers Hyderabad" || data[key].team2 === "Sunrisers Hyderabad") {
            arr2.push("Sunrisers Hyderabad")
        }
    }
    const arrSH = arr2.length;
    let arr3 = [];
    for (key in data) {
        if (data[key].team1 === "Mumbai Indians" || data[key].team2 === "Mumbai Indians") {
            arr3.push("Mumbai Indians")
        }
    }
    const arrMI = arr3.length
    let arr4 = [];
    for (key in data) {
        if (data[key].team1 === "Rising Pune Supergiant" || data[key].team2 === "Rising Pune Supergiant") {
            arr4.push("Rising Pune Supergiant")
        }
    }
    const arrRPS = arr4.length;
    let arr5 = [];
    for (key in data) {
        if (data[key].team1 === "Gujarat Lions" || data[key].team2 === "Gujarat Lions") {
            arr5.push("Gujarat Lions")
        }
    }
    const arrGL = arr5.length;
    let arr6 = [];
    for (key in data) {
        if (data[key].team1 === "Kolkata Knight Riders" || data[key].team2 === "Kolkata Knight Riders") {
            arr6.push("Kolkata Knight Riders")
        }
    }
    const arrKKR = arr6.length
    let arr7 = [];
    for (key in data) {
        if (data[key].team1 === "Kings XI Punjab" || data[key].team2 === "Kings XI Punjab") {
            arr7.push("Kings XI Punjab")
        }
    }
    const arrKP = arr7.length;
    let arr8 = [];
    for (key in data) {
        if (data[key].team1 === "Delhi Daredevils" || data[key].team2 === "Delhi Daredevils") {
            arr8.push("Delhi Daredevils")
        }
    }
    const arrDD = arr8.length;
    let arr9 = [];
    for (key in data) {
        if (data[key].team1 === "Chennai Super Kings" || data[key].team2 === "Chennai Super Kings") {
            arr9.push("Chennai Super Kings")
        }
    }
    const arrCSK = arr9.length
    let arr10 = [];
    for (key in data) {
        if (data[key].team1 === "Rajasthan Royals" || data[key].team2 === "Rajasthan Royals") {
            arr10.push("Rajasthan Royals")
        }
    }
    const arrRR = arr10.length
    let arr11 = [];
    for (key in data) {
        if (data[key].team1 === "Deccan Chargers" || data[key].team2 === "Deccan Chargers") {
            arr11.push("Deccan Chargers")
        }
    }
    const arrDC = arr11.length;
    let arr12 = [];
    for (key in data) {
        if (data[key].team1 === "Kochi Tuskers Kerala" || data[key].team2 === "Kochi Tuskers Kerala") {
            arr12.push("Kochi Tuskers Kerala")
        }
    }
    const arrKTK = arr12.length;
    let arr13 = [];
    for (key in data) {
        if (data[key].team1 === "Pune Warriors" || data[key].team2 === "Pune Warriors") {
            arr13.push("Pune Warriors")
        }
    }
    const arrPW = arr13.length

    let color = `rgba(${ Math.floor(Math.random()*255)}, ${ Math.floor(Math.random()*255)}, ${ Math.floor(Math.random()*255)}, ${Math.random()})`
    console.log(color)

    let color2 = `rgb(${ Math.floor(Math.random()*255)}, ${ Math.floor(Math.random()*255)}, ${ Math.floor(Math.random()*255)})`
    console.log(`#${Math.floor(100000 + Math.random() * 900000)}`)
    

    return (
        <Bar
            redraw={true}
            data={{
                labels: [ "Rajasthan Royals", "Deccan Chargers", "Kochi Tuskers Kerala", "Pune Warriors", "Royal Challengers Bangalore", "Sunrisers Hyderabad", "Mumbai Indians", "Rising Pune Supergiant", "Gujarat Lions", "Kolkata Knight Riders", "Kings XI Punjab", "Delhi Daredevils", "Chennai Super Kings"],
                datasets: [
                    {
                        label: "Match Played",
                        borderWidth: 1,
                        borderColor: color2,
                        backgroundColor: color,
                        data: [ arrRR, arrDC, arrKTK, arrPW, arrRCB, arrSH, arrMI, arrRPS, arrGL, arrKKR, arrKP, arrDD, arrCSK],
                    },
                ],
            }}
        />
    )
}

export default MatchPlayed