import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';

const EnginePerformanceDay = () => {
    const [chartOptions, setChartOptions] = useState({
        title: { text: 'Engine Performance Data (Daily)' },
        subtitle: { text: 'Past Week Performance' },
        legend: {
            position: 'bottom',
        },
        data: [
            { day: 1, avgTemperature: 84, fuelEfficiency: 12.6 },
            { day: 2, avgTemperature: 85, fuelEfficiency: 12.8 },
            { day: 3, avgTemperature: 86, fuelEfficiency: 13.1 },
            { day: 4, avgTemperature: 88, fuelEfficiency: 13.0 },
            { day: 5, avgTemperature: 87, fuelEfficiency: 12.9 },
            { day: 6, avgTemperature: 83, fuelEfficiency: 12.7 },
            { day: 7, avgTemperature: 75, fuelEfficiency: 15 }
        ],
        axes: [
            {
                type: 'category',
                position: 'bottom',
                title: { text: 'Day' },
                label: { rotation: 0 },
            },
            {
                type: 'number',
                position: 'left',
                title: { text: 'Temperature & Efficiency' },
            },
        ],
        series: [
            {
                type: 'line',
                xKey: 'day',
                yKey: 'avgTemperature',
                yName: 'Avg Temperature (°C)',
            },
            {
                type: 'line',
                xKey: 'day',
                yKey: 'fuelEfficiency',
                yName: 'Fuel Efficiency (Km/L)',
            },
        ],
    });

    return (
        <div className='w-auto mt-20'>
            <h1 className='text-center text-3xl text-blue-400'>GRAPH OF DAILY ENGINE PERFORMANCE</h1>
            <AgCharts options={chartOptions} />
        </div>
    );
};

export default EnginePerformanceDay;
