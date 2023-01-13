import React from 'react'

// Add Chartjs Component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Add fakerjs
import { faker } from '@faker-js/faker';

// Add Utilities Components
import BtnOutline from '../../Utilities/BtnOutline'
import Btn from '../../Utilities/Btn'

// chartjs components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// options variable
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
  },
};

// month variable
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// data variable
export const data = {
  labels,
  datasets: [
    {
      label: 'BTC',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'orange',
      backgroundColor: '#ffa600a2',
    },
    {
      label: 'LTC',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'blue',
      backgroundColor: '#0051ff83',
    }
  ],
};

const TradeChart = () => {
  return (
    <>
      {/* Chart 1 */}
      <div className='trade_chart-1'>
        <h4>Trade Chart</h4>
        <div className='btns'>
          <BtnOutline value={'D'} />
          <Btn value={'M'} />
          <BtnOutline value={'Y'} />
        </div>
        <div className='chart'>
          {/* chartjs-2 */}
          <Line options={options} data={data} width={'100%'} height={'35%'} />
        </div>
      </div>

      {/* Chart 2 */}
      <div className='trade_chart-2'>
        <img className='img_fluid' src="/images/diagram-1.jpg" alt="chart" />
      </div>
    </>
  )
}

export default TradeChart