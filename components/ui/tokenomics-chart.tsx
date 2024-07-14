"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Label,
  Tooltip,
  PieLabelRenderProps,
} from "recharts";

interface DataItem {
  name: string;
  value: number;
}

const data01: DataItem[] = [
  { name: "Airdrop", value: 5 },
  { name: "Contributors", value: 9.2 },
  { name: "Public", value: 17 },
  { name: "Ecosystem", value: 16.75 },
  { name: "Treasury", value: 9.2 },
  { name: "Team", value: 17 },
  { name: "Liquidity", value: 30 },
];

const COLORS: string[] = [
  "#A55AF1",
  "#6C61F1",
  "#FFB462",
  "#9CD489",
  "#FB9731",
  "#F9D284",
  "#F15A5F",
];

const RADIAN: number = Math.PI / 180;

const renderCustomizedLabel = (props: PieLabelRenderProps) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, index } = props;

  if (
    typeof cx !== "number" ||
    typeof cy !== "number" ||
    typeof innerRadius !== "number" ||
    typeof outerRadius !== "number"
  ) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#FAFAFA"
      className="font-lato text-[0.8rem] font-[600]"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent ? percent * 100 : 0).toFixed(0)}%`}
    </text>
  );
};

interface BulletProps {
  backgroundColor: string;
  size: string;
}

const Bullet: React.FC<BulletProps> = ({ backgroundColor, size }) => {
  return (
    <div
      className="CirecleBullet"
      style={{
        backgroundColor,
        width: size,
        height: size,
      }}
    ></div>
  );
};

interface CustomizedLegendProps {
  payload?: Array<{
    value: string;
    payload: {
      fill: string;
      value: number;
    };
  }>;
}

const CustomizedLegend: React.FC<CustomizedLegendProps> = (props) => {
  const { payload } = props;
  if (!payload) return null;

  return (
    <ul className="LegendList flex justify-between">
      {payload.map((entry, index) => (
        <li key={`item-${index}`}>
          <div className="flex justify-between">
            <Bullet backgroundColor={entry.payload.fill} size="10px" />
            <div className="font-lato ml-1 text-[0.6rem] text-[#556380]">
              {entry.value}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const PieChartCo: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={200}>
        <Pie
          data={data01}
          dataKey="value"
          labelLine={false}
          // label={renderCustomizedLabel}
          innerRadius={40}
          outerRadius={100}
          className="focus:outline-none"
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        {/* <Legend content={<CustomizedLegend />} /> */}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartCo;
