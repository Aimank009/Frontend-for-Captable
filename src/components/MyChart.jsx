import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Removed CategoryScale import
import { claimed } from '../Pages/Dashboard_emp';

const SteppedGraph = () => {
  // Sample data for the graph
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: ['Unlocked','Claimed'],
        data: [0, 1, 2, 3, 4, 5, 6],
        fill: false,
        borderWidth: 1,
        segment: {
          borderColor: (ctx) => {
            // Change the line segment color after March to red
            return ctx.p0.parsed.x > 2 ? '#DE3333' : 'green';
          },
        },
        lineTension: 0.5,
        stepped: true, // This property makes the line stepped
      },
    ],
  };

  // Chart options
  const options = {
    maintainAspectRatio: false, // Disable maintain aspect ratio
    scales: {
      x: {
         border: {
          display: false,
        },
      }
    },
    elements: {
      point: {
        radius: 5 // Hide data points
      }
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 0, // Set left padding to 0
        right: 0, // Set right padding to 0
      }
    },
    borderColor: 'transparent' // Hide border
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      
     
      responsive: true,
      interaction: {
        intersect: false,
        axis: 'x',
        
      },
      plugins: {
        title: {
          display: true,
          text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
        }
      }
    }
  };

  const actions = [
    {
      name: 'Step: false (default)',
      handler: (chart) => {
        chart.data.datasets.forEach(dataset => {
          dataset.stepped = false;
        });
        chart.update();
      }
    },
    {
      name: 'Step: true',
      handler: (chart) => {
        chart.data.datasets.forEach(dataset => {
          dataset.stepped = true;
        });
        chart.update();
      }
    },
    {
      name: 'Step: before',
      handler: (chart) => {
        chart.data.datasets.forEach(dataset => {
          dataset.stepped = 'before';
        });
        chart.update();
      }
    },
    {
      name: 'Step: after',
      handler: (chart) => {
        chart.data.datasets.forEach(dataset => {
          dataset.stepped = 'after';
        });
        chart.update();
      }
    },
    {
      name: 'Step: middle',
      handler: (chart) => {
        chart.data.datasets.forEach(dataset => {
          dataset.stepped = 'middle';
        });
        chart.update();
      }
    }
  ];

  return (
    <div className=''>
      <h2 className='text-[24px] font-source-code-pro'>Token Timeline</h2>
      <div className='w-full h-[20rem] border-none'> {/* Set border to 'none' */}
        <Line config={config}  actions={actions} options={options} width={600} height={500} data={data} />
      </div>
    </div>
  );
};

export default SteppedGraph;