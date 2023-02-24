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

function ExpensesBar(props: any) {
  let filteredExpensesByYear = Array(12).fill(0);

  if (props.items.length > 0) {
    filteredExpensesByYear = props.items.reduce((result: any, current: any) => {
      const month = current.date.getMonth();
      result[month] += +current.amount;
      return result;
    }, filteredExpensesByYear);
  }

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
        suggestedMax: 500_000,
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
        data: filteredExpensesByYear,
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

export default ExpensesBar;
