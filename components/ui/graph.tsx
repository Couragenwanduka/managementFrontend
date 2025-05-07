 "use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Clocked In (hrs)',
      data: [9, 8.5, 9, 8, 9.5],
      backgroundColor: '#4F46E5', // Indigo
    },
    {
      label: 'Productive Hours',
      data: [6, 5.5, 6.5, 4.5, 7],
      backgroundColor: '#F97316', // Orange
    }
  ],
};

const options = {
  responsive: true,
  scales: {
    y: { beginAtZero: true, max: 10 }
  }
};

const ProductivityChart = () => (
  <div className="bg-white p-6 rounded-xl shadow-md w-[100%] -ml-6 mt-8">
    <h2 className="text-lg font-bold mb-4 text-primary">Clocked In vs Productive Time</h2>
    <Bar data={data} options={options} />
  </div>
);

export default ProductivityChart;
