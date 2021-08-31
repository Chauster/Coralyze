import React from 'react';
import './Dashboard.scss';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts';

// Array data is to be changed later on when we are able to fetch tinker data // For now, all data below is currently fake-d.
const totaldetections = [
  {
    month: 'JAN',
    detections: 1006,
    male: 648,
    female: 358,
  },
  {
    month: 'FEB',
    detections: 2340,
    male: 505,
    female: 1835,
  },
  {
    month: 'MAR',
    detections: 3152,
    male: 2536,
    female: 616,
  },
  {
    month: 'APR',
    detections: 4722,
    male: 1522,
    female: 3200,
  },
  {
    month: 'MAY',
    detections: 3315,
    male: 2696,
    female: 619,
  },
  {
    month: 'JUN',
    detections: 3934,
    male: 2292,
    female: 1642,
  },
  {
    month: 'JUL',
    detections: 2366,
    male: 1358,
    female: 1008,
  },
  {
    month: 'AUG',
    detections: 1796,
    male: 1055,
    female: 741,
  },
  {
    month: 'SEP',
    detections: 3555,
    male: 1565,
    female: 1990,
  },
  {
    month: 'OCT',
    detections: 2397,
    male: 973,
    female: 424,
  },
  {
    month: 'NOV',
    detections: 1241,
    male: 840,
    female: 401,
  },
  {
    month: 'DEC',
    detections: 3104,
    male: 2554,
    female: 550,
  },
];
const agedetections = [
  {
    agegroup: '0-10yr',
    detections: 200,
  },
  {
    agegroup: '11-20yr',
    detections: 750,
  },
  {
    agegroup: '21-40yr',
    detections: 500,
  },
  {
    agegroup: '41-60yr',
    detections: 550,
  },
  {
    agegroup: '61-70yr',
    detections: 420,
  },
  {
    agegroup: '70+yr',
    detections: 850,
  },
];
const genderdetections = [
  {
    male: 18544,
    gender: 'Male',
  },
  {
    female: 13384,
    gender: 'Female',
  },
];
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Dashboard = () => {
  return (
    <div>
      <div class="dashboard">
        <div class="dashboard__title">
          <h3>Dashboard.</h3>
        </div>
        <div class="dashboard__graph">
          <div class="dashboard__graph__one__subheading">
            <p>Total Detections</p>
            <div class="dashboard__graph__one__buttons">
              <button class="dashboard__graph__one__buttons__daily">
                Daily
              </button>
              <button class="dashboard__graph__one__buttons__monthly">
                Monthly
              </button>
              <button class="dashboard__graph__one__buttons__yearly">
                Yearly
              </button>
            </div>
          </div>
          <div class="dashboard__graph__one__heading">
            <p>Detections</p>
          </div>
          <ResponsiveContainer width="100%" height="30%">
            <LineChart
              width={500}
              height={400}
              data={totaldetections}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid horizontal={false} stroke="#3E74FF" />
              <XAxis dataKey="month" strokeWidth={0} />
              <YAxis strokeWidth={0} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="detections"
                stroke="#5383FF"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="male" stroke="#8884d8" />
              <Line type="monotone" dataKey="female" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex">
            <div className="container">
              <div class="dashboard__graph__two__subheading">
                <p>Detections per age group</p>
              </div>
              <div class="dashboard__graph__two__heading">
                <p>Age Demographic</p>
              </div>
              <ResponsiveContainer width={'100%'} height={285}>
                <LineChart
                  width={500}
                  height={400}
                  data={agedetections}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid horizontal={false} stroke="#3E74FF" />
                  <XAxis dataKey="agegroup" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="detections"
                    stroke="#5383FF"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="container">
              <div class="dashboard__graph__three__subheading">
                <p>Detections per gender group</p>
              </div>
              <div class="dashboard__graph__three__heading">
                <p>Gender Demographic</p>
              </div>
              <ResponsiveContainer width={'100%'} height={285}>
                <BarChart
                  width={500}
                  height={400}
                  data={genderdetections}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="gender" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="male" fill="#3E74FF" />
                  <Bar dataKey="female" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="container">
              <div class="dashboard__graph__four__subheading">
                <p>Tinker Edge R - Device 1</p>
              </div>
              <div class="dashboard__graph__four__heading">
                <p>System Performance</p>
              </div>
              <div className="dashboard__graph__four__grid">
                <ResponsiveContainer
                  width={'100%'}
                  height={285}
                  className="dashboard__graph__four__grid__left"
                >
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div class="dashboard__graph__four__grid__right">
                  <p>Usage</p>
                  <div class="dashboard__graph__four__performance__usage__CPU">
                    <div className="dashboard__graph__four__grid__right__flex">
                      <div class="square__one"></div>
                      <p>CPU</p>
                      <p>33% 1.5GHz</p>
                    </div>
                  </div>
                  <div class="dashboard__graph__four__performance__usage__GPU">
                    <div className="dashboard__graph__four__grid__right__flex">
                      <div class="square__two"></div>
                      <p>GPU</p>
                      <p>25% 40 C</p>
                    </div>
                  </div>
                  <div class="dashboard__graph__four__performance__usage__RAM">
                    <div className="dashboard__graph__four__grid__right__flex">
                      <div class="square__three"></div>
                      <p>RAM</p>
                      <p>25% 0.5/1GB</p>
                    </div>
                  </div>
                  <div class="dashboard__graph__four__performance__usage__HDD">
                    <div className="dashboard__graph__four__grid__right__flex">
                      <div class="square__four"></div>
                      <p>HDD</p>
                      <p>17% 400MB/s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
