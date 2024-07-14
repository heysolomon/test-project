import dynamic from "next/dynamic";

const PieChartCo = dynamic(() => import("./tokenomics-chart"), { ssr: false });

const ClientSidePieChart = () => {
  return <PieChartCo />;
};

export default ClientSidePieChart;
