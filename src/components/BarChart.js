import React from "react";
// rfce to create the import and function to export
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";


function BarChart({ ChartData }) {
    return (
        <Bar data={ChartData} />
    )
}

export default BarChart