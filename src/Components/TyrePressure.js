import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';

const TyrePressure = () => {
    const [chartOptions, setChartOptions] = useState({
        title: { text: 'Tyre Pressure Data' },
        subtitle: { text: 'Data Since 2023' },
        legend: {
            position: 'bottom',
        },
        data: [
            { month: 'Jan', frontLeft: 32, frontRight: 31, rearLeft: 30, rearRight: 32 },
            { month: 'Feb', frontLeft: 33, frontRight: 32, rearLeft: 31, rearRight: 33 },
            { month: 'Mar', frontLeft: 34, frontRight: 33, rearLeft: 32, rearRight: 34 },
            { month: 'Apr', frontLeft: 33, frontRight: 32, rearLeft: 31, rearRight: 33 },
            { month: 'May', frontLeft: 34, frontRight: 33, rearLeft: 32, rearRight: 34 },
            { month: 'Jun', frontLeft: 35, frontRight: 34, rearLeft: 33, rearRight: 35 },
            { month: 'Jul', frontLeft: 34, frontRight: 33, rearLeft: 32, rearRight: 34 },
            { month: 'Aug', frontLeft: 33, frontRight: 32, rearLeft: 31, rearRight: 33 },
            { month: 'Sep', frontLeft: 32, frontRight: 31, rearLeft: 30, rearRight: 32 },
            { month: 'Oct', frontLeft: 33, frontRight: 32, rearLeft: 31, rearRight: 33 },
            { month: 'Nov', frontLeft: 32, frontRight: 31, rearLeft: 30, rearRight: 32 },
            { month: 'Dec', frontLeft: 31, frontRight: 30, rearLeft: 29, rearRight: 31 },
        ],
        series: [
            { type: 'line', xKey: 'month', yKey: 'frontLeft', yName: 'Front Left Tyre Pressure (PSI)' },
            { type: 'line', xKey: 'month', yKey: 'frontRight', yName: 'Front Right Tyre Pressure (PSI)' },
            { type: 'line', xKey: 'month', yKey: 'rearLeft', yName: 'Rear Left Tyre Pressure (PSI)' },
            { type: 'line', xKey: 'month', yKey: 'rearRight', yName: 'Rear Right Tyre Pressure (PSI)' },
        ],
    });

    return (
        <div className='w-auto mt-20'>
            <h1 className='text-center text-3xl text-green-400'>GRAPH OF TYRE PRESSURE</h1>
            <AgCharts options={chartOptions} />
        </div>
    );
};

export default TyrePressure;
