"use client";

import * as d3 from "d3";

const data = [
  { year: "2014", month: "2", day: "6", cycle: "200", trend: "396.60" },
  { year: "2014", month: "2", day: "7", cycle: "200", trend: "396.61" },
  { year: "2014", month: "2", day: "8", cycle: "200", trend: "396.61" },
  { year: "2014", month: "2", day: "9", cycle: "200", trend: "396.62" },
  { year: "2014", month: "2", day: "10", cycle: "200", trend: "396.63" },
  { year: "2014", month: "2", day: "11", cycle: "200", trend: "396.63" },
  { year: "2014", month: "2", day: "12", cycle: "200", trend: "396.64" },
  { year: "2014", month: "2", day: "13", cycle: "200", trend: "396.65" },
  { year: "2014", month: "2", day: "14", cycle: "200", trend: "396.66" },
  { year: "2014", month: "2", day: "15", cycle: "200", trend: "396.66" },
  { year: "2014", month: "2", day: "16", cycle: "398.39", trend: "396.67" },
  { year: "2014", month: "2", day: "17", cycle: "398.41", trend: "396.68" },
  { year: "2014", month: "2", day: "18", cycle: "398.43", trend: "396.69" },
  { year: "2014", month: "2", day: "19", cycle: "398.44", trend: "396.69" },
  { year: "2014", month: "2", day: "20", cycle: "398.46", trend: "396.70" },
  { year: "2014", month: "2", day: "21", cycle: "398.48", trend: "396.71" },
  { year: "2014", month: "2", day: "22", cycle: "398.50", trend: "396.71" },
  { year: "2014", month: "2", day: "23", cycle: "398.51", trend: "396.72" },
  { year: "2014", month: "2", day: "24", cycle: "398.53", trend: "396.73" },
  { year: "2014", month: "2", day: "25", cycle: "398.55", trend: "396.73" },
  { year: "2014", month: "2", day: "26", cycle: "398.56", trend: "396.74" },
  { year: "2014", month: "2", day: "27", cycle: "398.58", trend: "396.75" },
  { year: "2014", month: "2", day: "28", cycle: "398.59", trend: "396.76" },
  { year: "2014", month: "3", day: "1", cycle: "398.61", trend: "396.76" },
  { year: "2014", month: "3", day: "2", cycle: "398.62", trend: "396.77" },
  { year: "2014", month: "3", day: "3", cycle: "398.64", trend: "396.78" },
  { year: "2014", month: "3", day: "4", cycle: "398.65", trend: "396.78" },
  { year: "2014", month: "3", day: "5", cycle: "398.66", trend: "396.79" },
  { year: "2014", month: "3", day: "6", cycle: "398.68", trend: "396.80" },
  { year: "2014", month: "3", day: "7", cycle: "398.69", trend: "396.81" },
  { year: "2014", month: "3", day: "8", cycle: "398.70", trend: "396.81" },
  { year: "2014", month: "3", day: "9", cycle: "398.71", trend: "396.82" },
  { year: "2014", month: "3", day: "10", cycle: "398.73", trend: "396.83" },
  { year: "2014", month: "3", day: "11", cycle: "398.74", trend: "396.83" },
  { year: "2014", month: "3", day: "12", cycle: "398.75", trend: "396.84" },
  { year: "2014", month: "3", day: "13", cycle: "398.76", trend: "396.85" },
  { year: "2014", month: "3", day: "14", cycle: "398.77", trend: "396.86" },
  { year: "2014", month: "3", day: "15", cycle: "398.78", trend: "396.86" },
  { year: "2014", month: "3", day: "16", cycle: "398.79", trend: "396.87" },
  { year: "2014", month: "3", day: "17", cycle: "398.80", trend: "396.88" },
  { year: "2014", month: "3", day: "18", cycle: "398.81", trend: "396.88" },
  { year: "2014", month: "3", day: "19", cycle: "398.82", trend: "396.89" },
  { year: "2014", month: "3", day: "20", cycle: "398.83", trend: "396.90" },
  { year: "2014", month: "3", day: "21", cycle: "398.84", trend: "396.90" },
  { year: "2014", month: "3", day: "22", cycle: "398.85", trend: "396.91" },
  { year: "2014", month: "3", day: "23", cycle: "398.85", trend: "396.92" },
  { year: "2014", month: "3", day: "24", cycle: "398.86", trend: "396.93" },
  { year: "2014", month: "3", day: "25", cycle: "398.87", trend: "396.93" },
  { year: "2014", month: "3", day: "26", cycle: "398.88", trend: "396.94" },
  { year: "2014", month: "3", day: "27", cycle: "398.89", trend: "396.95" },
  { year: "2014", month: "3", day: "28", cycle: "398.90", trend: "396.95" },
  { year: "2014", month: "3", day: "29", cycle: "398.90", trend: "396.96" },
  { year: "2014", month: "3", day: "30", cycle: "398.91", trend: "396.97" },
  { year: "2014", month: "3", day: "31", cycle: "398.92", trend: "396.97" },
  { year: "2014", month: "4", day: "1", cycle: "398.93", trend: "396.98" },
  { year: "2014", month: "4", day: "2", cycle: "398.94", trend: "396.99" },
  { year: "2014", month: "4", day: "3", cycle: "398.95", trend: "396.99" },
  { year: "2014", month: "4", day: "4", cycle: "398.95", trend: "397.00" },
  { year: "2014", month: "4", day: "5", cycle: "398.96", trend: "397.01" },
  { year: "2014", month: "4", day: "6", cycle: "398.97", trend: "397.02" },
  { year: "2014", month: "4", day: "7", cycle: "398.98", trend: "397.02" },
  { year: "2014", month: "4", day: "8", cycle: "398.99", trend: "397.03" },
  { year: "2014", month: "4", day: "9", cycle: "399.00", trend: "397.04" },
  { year: "2014", month: "4", day: "10", cycle: "399.01", trend: "397.04" },
  { year: "2014", month: "4", day: "11", cycle: "399.01", trend: "397.05" },
  { year: "2014", month: "4", day: "12", cycle: "399.02", trend: "397.06" },
  { year: "2014", month: "4", day: "13", cycle: "399.03", trend: "397.06" },
  { year: "2014", month: "4", day: "14", cycle: "399.04", trend: "397.07" },
  { year: "2014", month: "4", day: "15", cycle: "399.05", trend: "397.08" },
  { year: "2014", month: "4", day: "16", cycle: "399.06", trend: "397.08" },
  { year: "2014", month: "4", day: "17", cycle: "399.07", trend: "397.09" },
  { year: "2014", month: "4", day: "18", cycle: "399.08", trend: "397.10" },
  { year: "2014", month: "4", day: "19", cycle: "399.09", trend: "397.10" },
  { year: "2014", month: "4", day: "20", cycle: "399.10", trend: "397.11" },
  { year: "2014", month: "4", day: "21", cycle: "399.11", trend: "397.12" },
  { year: "2014", month: "4", day: "22", cycle: "399.12", trend: "397.12" },
  { year: "2014", month: "4", day: "23", cycle: "399.14", trend: "397.13" },
  { year: "2014", month: "4", day: "24", cycle: "399.15", trend: "397.14" },
  { year: "2014", month: "4", day: "25", cycle: "399.16", trend: "397.14" },
  { year: "2014", month: "4", day: "26", cycle: "399.17", trend: "397.15" },
  { year: "2014", month: "4", day: "27", cycle: "399.18", trend: "397.16" },
  { year: "2014", month: "4", day: "28", cycle: "399.19", trend: "397.16" },
  { year: "2014", month: "4", day: "29", cycle: "399.20", trend: "397.17" },
  { year: "2014", month: "4", day: "30", cycle: "399.21", trend: "397.18" },
];

const Graph = () => {
  const list: number[][] = [
    [60, 220],
    [70, 250],
    [80, 300],
    [90, 400],
    [100, 250],
  ];

  const margin: { top: number; right: number; bottom: number; left: number } = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  let xScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => parseInt(d.day))))
    .range([margin.left, 1000 - margin.right]);

  let yScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => parseInt(d.cycle))))
    .range([400 - margin.bottom, margin.top]);

  let line = d3
    .line()
    .x((d: any) => xScale(parseInt(d.day)))
    .y((d: any) => yScale(parseInt(d.cycle)));

  let result = line(data);
  console.log(result);

  return (
    <div>
      <svg
        className="bg-gray-950"
        viewBox={"0 0 1000 400"}
        width="1000"
        height="400"
      >
        <path d={result} fill="none" stroke="red" />
      </svg>
    </div>
  );
};

export default Graph;
