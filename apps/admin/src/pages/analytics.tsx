import { Card } from '@repo/ui/card'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)

const revenueData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 3000, 5000, 2000, 30000, 45000],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
}

const userGrowthData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'User Growth',
      data: [100, 120, 150, 180, 220, 250, 300],
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: false,
    },
  ],
}

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Platform Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <h2 className="text-2xl font-bold mb-2">Revenue Over Time</h2>
          <Bar data={revenueData} />
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">User Growth</h2>
          <Line data={userGrowthData} />
        </Card>
      </div>
    </div>
  )
}
