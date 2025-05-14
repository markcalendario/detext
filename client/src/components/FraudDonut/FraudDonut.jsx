import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FraudDonut({ fraudConfidence }) {
  const data = {
    labels: ["Safe", "Potential Fraud"],
    datasets: [
      {
        data: [100 - fraudConfidence, fraudConfidence],
        backgroundColor: ["#cbd5e1", "#c03447"]
      }
    ]
  };

  const options = {
    responsive: true,
    cutout: "50%",
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  };

  return (
    <Doughnut
      data={data}
      options={options}
    />
  );
}
