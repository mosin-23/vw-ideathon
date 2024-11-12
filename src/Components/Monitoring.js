import React, { lazy, Suspense, useState } from 'react';
import { AgCharts } from 'ag-charts-react';
const EnginePerformance=lazy(()=>import('./EnginePerformance'));
const TyrePressure=lazy(()=>import('./TyrePressure'));
const EnginePerformanceDay=lazy(()=>import('./EnginePerformanceDay'));
const Monitoring = () => {
    const [chartOptions, setChartOptions] = useState({
        title:{text:'Car Usage Data'},
        subtitle: { text: 'Data Since 2023' },
        legend: {
            position: 'bottom',
        },
        data: [
            { month: 'Jan', avgMileage: 15.2, kmDriven: 1200 },
            { month: 'Feb', avgMileage: 16.1, kmDriven: 1500 },
            { month: 'Mar', avgMileage: 14.8, kmDriven: 2000 },
            { month: 'Apr', avgMileage: 15.5, kmDriven: 2500 },
            { month: 'May', avgMileage: 16.7, kmDriven: 3000 },
            { month: 'Jun', avgMileage: 15.9, kmDriven: 3500 },
            { month: 'Jul', avgMileage: 16.3, kmDriven: 3700 },
            { month: 'Aug', avgMileage: 15.6, kmDriven: 3400 },
            { month: 'Sep', avgMileage: 16.0, kmDriven: 3000 },
            { month: 'Oct', avgMileage: 15.4, kmDriven: 2700 },
            { month: 'Nov', avgMileage: 15.1, kmDriven: 2200 },
            { month: 'Dec', avgMileage: 14.5, kmDriven: 1500 },
        ],
        series: [
            {
                type: 'bar',
                xKey: 'month',
                yKey: 'kmDriven',
                yName: 'Km Driven',
             },
            { type: 'line', xKey: 'month', yKey: 'avgMileage' }
        ],
    });

    return (
        <div className='w-auto mt-20 mb-20'>
        <h1 className='text-center text-3xl text-orange-400'>ANALYTICS</h1>
        <Suspense>
        <AgCharts options={chartOptions} />
        <EnginePerformanceDay/>
        <EnginePerformance/>
        <TyrePressure/>
        </Suspense>
        </div>
    );
}
export default Monitoring;
