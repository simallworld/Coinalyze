import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { chartDays } from "../../utils/constants";

Chart.register(CategoryScale);

const CoinInfo = ({
  historicData,
  setDays,
  setCoinInterval,
  days,
  currency,
}) => {
  if (!historicData) {
    return <Alert message="No data available" type="info" />;
  }

  function handleDayChange(e) {
    const daySelected = e.target.options[e.target.selectedIndex].value;
    if (daySelected === 1) {
      setCoinInterval?.("");
    } else {
      setCoinInterval?.("daily");
    }
    setDays?.(e.target.options[e.target.selectedIndex].value);
  }

  const chartLabels = historicData.prices.map((coinPrice) => {
    const date = new Date(coinPrice[0]);
    const hours = date?.getHours();
    const minutes = date?.getMinutes().toString().padStart(2, "0");
    const time =
      hours > 12 ? `${hours - 12}:${minutes} PM` : `${hours}:${minutes} AM`;

    return days === 1 ? time : date?.toLocaleDateString();
  });

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: `Price (Past ${days} ${
          days === 1 ? "Day" : "Days"
        }) in ${currency?.toUpperCase()}`,
        data: historicData.prices.map((coinPrice) => coinPrice[1]),
        borderColor: "#3b82f6",
        fill: false,
      },
    ],
  };

  const options = {
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        radius: 1, // Hides the points on the line chart
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <>
      <div className="flex flex-col h-[500px] items-center justify-center mt-6 p-6 w-full md:w-3/4 select-none">
        <Line data={chartData} options={options} />
      </div>

      <div className="flex justify-center mt-5 w-full">
        <select
          className="select select-primary w-full max-w-xs cursor-pointer"
          onChange={handleDayChange}
          value={days}
        >
          {chartDays.map((day, index) => {
            return (
              <option key={index} value={day.value}>
                {day.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default CoinInfo;
