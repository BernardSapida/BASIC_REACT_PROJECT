import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function ExpenseBar() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        suggestedMax: 150_000,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Monthly Expense",
        borderRadius: 5,
        data: [
          10_000, 20_000, 30_000, 40_000, 50_000, 60_000, 70_000, 80_000,
          90_000, 100_000, 110_000, 120_000,
        ],
        backgroundColor: "rgba(53, 162, 235)",
      },
    ],
  };

  return (
    <Bar
      options={options}
      data={data}
      style={{ maxWidth: "800px", width: "100%", height: "400px" }}
      className="m-auto"
    />
  );
}

export default ExpenseBar;
