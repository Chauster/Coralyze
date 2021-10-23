import React from 'react';
import { useState, useEffect } from 'react';
import './Dashboard.scss';
import { Button } from '../Button';
import axios from 'axios';
import icon_one from '../../images/icons/icon 1.png';
import icon_two from '../../images/icons/icon 2.png';
import icon_three from '../../images/icons/icon 3.png';
import downloadIcon from '../../images/icons/download.png';
import Promise from 'bluebird';
import JsZip from 'jszip';
import FileSaver from 'file-saver';
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
import e from 'cors';
import { GiConsoleController, GiEmptyChessboard } from 'react-icons/gi';

const Dashboard = () => {
  const [ChartData, setChartData] = useState(null);
  const [ChartDataTwo, setChartDataTwo] = useState(null);
  const [ChartDataThree, setChartDataThree] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [stateloaded, setstateLoaded] = useState(false);
  const [userLoaded, setUserLoaded] = useState('');
  const [isRendered, setIsRendered] = useState();
  const data = [];
  const datatwo = [];
  const datathree = [];
  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };
  // function download(filename, text) {
  //   var element = document.createElement('a');
  //   element.setAttribute(
  //     'href',
  //     'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  //   );
  //   element.setAttribute('download', filename);

  //   element.style.display = 'none';
  //   document.body.appendChild(element);

  //   element.click();

  //   document.body.removeChild(element);
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('This will run every 10 seconds!');
  //     const grabid = localStorage.getItem('clientID');
  //     console.log(grabid);
  //     setUserLoaded(grabid);
  //     console.log(userLoaded);
  //     setstateLoaded(true);
  //     setError(error);
  //   }, 10000);
  //   return () => clearInterval(interval);

  // }, [userLoaded]);
  // console.log(userLoaded);
  // console.log(stateloaded);
  // const _id = localStorage.getItem('clientID');
  // console.log(_id);

  // const userTest = {
  //   _id: userLoaded
  // };

  //WORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKING
  useEffect(() => {
    const refresh = setInterval(() => {
      // console.log('This will run every 1 seconds!');
      const _id = localStorage.getItem('clientID');
      // console.log(_id);
      // setUserLoaded(_id);
      // console.log(userLoaded);
      // setstateLoaded(true);
      setError(error);
      axios.post('/users/getchartdata/', { _id }, config).then(
        (res) => {
          console.log(res.data);
          data.length = 0; // reset chart data array
          datatwo.length = 0;
          datathree.length = 0;
          for (let i = 0; i < 12; i++) {
            data.push(res.data.chartData[i]);
          }
          for (let i = 12; i < 18; i++) {
            datatwo.push(res.data.chartData[i]);
          }
          for (let i = 18; i < 20; i++) {
            datathree.push(res.data.chartData[i]);
          }
          setChartData(data);
          setChartDataTwo(datatwo);
          setChartDataThree(datathree);
          console.log(ChartData);
          console.log(ChartDataTwo);
          console.log(ChartDataThree);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
    }, 1000);
    return () => clearInterval(refresh);
  }, [ChartData]);
  console.log(ChartData);
  //WORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKINGWORKING

  // async function fetchChartData() {
  //   axios.post('http://localhost:5000/users/getchartdata').then((res) => {
  //     console.log(res.data);
  //     setChartData(res.data);
  //     console.log(ChartData);

  //     for(let i = 0; i < 12; i++){
  //     totaldetections.push(res.data.chartData[i]);
  //     console.log(totaldetections[i]);
  //     }
  //   });
  // }

  // useEffect(() => {
  //   // fetchChartData();
  //   console.log(ChartData);

  // },[]);

  // // fetchChartData();
  // const clientID = localStorage.getItem('clientID');
  // console.log(clientID);
  // const downloadPackage = (e) => {
  //   e.preventDefault();

  //   download('clientID.txt', clientID);

  //   // https://drive.google.com/uc?export=download&id=
  //   var url =
  //     'https://drive.google.com/uc?export=download&id=18Fijin_woUoulXxzYfyd2ptnMP4Z9Axs'; // data_ex.py / zipped

  //   window.open(url, '_blank');
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const { data } = await axios.post('/users/getchartdata', config);
  //     console.log(data);
  //     const test = data;
  //     setChartData(test);
  //     console.log(ChartData);
  //   } catch (error) {
  //     setError(error?.response?.data.error);
  //     setTimeout(() => {
  //       setError('');
  //     }, 5000);
  //     return setError("Could not retrieve chart data");
  //   }
  // }
  const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;

    if (value > 2500) {
      return (
        <svg
          x={cx - 10}
          y={cy - 10}
          width={20}
          height={20}
          fill="red"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
        </svg>
      );
    }

    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="green"
        viewBox="0 0 1024 1024"
      >
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    );
  };

  const cardShow = () => {
    return (
      <div className="row__devices">
        {ChartDataThree.map((device) => (
          <>
            <ul className="dev__list">
              <li className="dev__box">
                <span className="dev__icon"></span>
                <br />
                <span className="dev__name">{device.gender}</span>
                <br />
                <span className="dev__ip">{device.detections}</span>
              </li>
            </ul>
          </>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="form__btn">
            <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
              Get Chart Data
            </Button>
        </div>
      </form> */}
      <div class="dashboard">
        <div class="dashboard__title">
          <h3>Dashboard.</h3>
        </div>
        <div class="dashboard__graph">
          <div class="dashboard__graph__one__subheading">
            <div class="dashboard__graph__one__buttons"></div>
          </div>
          <div class="dashboard__graph__one__heading">
            <div className="icon">
              <img src={icon_one} alt="detections__icon"></img>
            </div>
            <p>Detections</p>
          </div>
          <ResponsiveContainer width="100%" height="30%">
            <LineChart
              width={500}
              height={400}
              data={ChartData}
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
                Dot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="male" stroke="#8884d8" />
              <Line type="monotone" dataKey="female" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex">
            <div className="container">
              <div class="dashboard__graph__two__subheading">
                {/* <p>Detections per age group</p> */}
              </div>
              <div class="dashboard__graph__two__heading">
                <div className="icon">
                  <img src={icon_three} alt="detections__icon"></img>
                </div>
                <p>Age Demographic</p>
              </div>
              <ResponsiveContainer width={'100%'} height={'60%'}>
                <BarChart
                  width={500}
                  height={400}
                  data={ChartDataTwo}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid stroke="#3E74FF" />
                  <XAxis dataKey="agegroup" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {/* <Line
                    type="monotone"
                    dataKey="detections"
                    stroke="#5383FF"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  /> */}
                  <Bar dataKey="detections" fill="#3E74FF" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="container">
              <div class="dashboard__graph__three__subheading">
                {/* <p>Detections per gender group</p> */}
              </div>
              <div class="dashboard__graph__three__heading">
                <div className="icon">
                  <img src={icon_two} alt="detections__icon"></img>
                </div>
                <p>Gender Demographic</p>
              </div>
              <ResponsiveContainer width={'100%'} height={'60%'}>
                <BarChart
                  width={500}
                  height={400}
                  data={ChartDataThree}
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
                  <Bar dataKey="detections" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* <button type="button" class="button" onClick={downloadPackage}>
          <span class="button__text">Download <br/>Coralyze Dependencies</span>
          <span class="button__icon">
            <ion-icon name="cloud-download-outline"></ion-icon>
            <img src={downloadIcon} alt="" width="25px" height="25px"></img>
          </span>
          </button> */}

          {/* <form autoComplete="off" className="form" onSubmit={downloadPackage}>
            <div className="form__btn">
                <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
                  Download Coralyze Dependencies
                </Button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
