import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';

const EnginePerformance = () => {
    const [chartOptions, setChartOptions] = useState({
        title: { text: 'Engine Performance Data' },
        subtitle: { text: 'Data Since 2023' },
        legend: {
            position: 'bottom',
        },
        data: [
            { month: 'Jan', avgTemperature: 85, fuelEfficiency: 12.5 },
            { month: 'Feb', avgTemperature: 90, fuelEfficiency: 13.0 },
            { month: 'Mar', avgTemperature: 92, fuelEfficiency: 11.8 },
            { month: 'Apr', avgTemperature: 87, fuelEfficiency: 13.2 },
            { month: 'May', avgTemperature: 93, fuelEfficiency: 12.9 },
            { month: 'Jun', avgTemperature: 88, fuelEfficiency: 13.4 },
            { month: 'Jul', avgTemperature: 89, fuelEfficiency: 12.7 },
            { month: 'Aug', avgTemperature: 91, fuelEfficiency: 13.1 },
            { month: 'Sep', avgTemperature: 86, fuelEfficiency: 13.5 },
            { month: 'Oct', avgTemperature: 84, fuelEfficiency: 12.6 },
            { month: 'Nov', avgTemperature: 85, fuelEfficiency: 12.8 },
            { month: 'Dec', avgTemperature: 80, fuelEfficiency: 12.4 },
        ],
        series: [
            {
                type: 'line',
                xKey: 'month',
                yKey: 'avgTemperature',
                yName: 'Avg Temperature (°C)',
            },
            {
                type: 'line',
                xKey: 'month',
                yKey: 'fuelEfficiency',
                yName: 'Fuel Efficiency (Km/L)',
            },
        ],
    });

    return (
        <div className='w-auto mt-20'>
            <h1 className='text-center text-3xl text-blue-400'>GRAPH OF ENGINE PERFORMANCE</h1>
            <AgCharts options={chartOptions} />
        </div>
    );
};

export default EnginePerformance;
