import React from "react";
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
// Don't delete this package.
import Chart, { Colors } from 'chart.js/auto';



import SiteTitle from "components/SiteTitle.js";
import Copyright from "components/Copyright.js";



let LineLongOptions = {
    plugins: {
        legend: {
            display: false,
          },
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: {
                display: true
            }
        },
    },
};

function Home() {
    return (
        <div>
          <div className="menu-container">
            <SiteTitle />
            <Menu />
          </div>
          <hr />
          <LineCharts />
          <hr/>
          <div className="copyright">
            <Copyright />
          </div>
        </div>
    );
}

const Menu = () => {
  return (
    <nav>
        <ul className="menubar">
            <li className="menu">Home</li>
            <li className="menu"><Link href="/hololive" className="can-selectMenu">ホロライブJP</Link></li>
            <li className="menu">準備中</li>
            <li className="menu">準備中</li>
            <li className="menu"><Link href="/info" className="can-selectMenu">Info</Link></li>
        </ul>
    </nav>
  );
}

const LineCharts = () => {
  const [NoScheduleMsg, setNoScheduleMsg] = useState("");
  const [video_obj_List, setVideo_obj_List] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((video_obj_list) => {
        video_obj_list.sort((a, b) => b.viewersData[b.viewersData.length-1].viewers - a.viewersData[a.viewersData.length-1].viewers);
        video_obj_list.sort((a, b) => {
          let a_time_list = a.viewersData[a.viewersData.length-1].time.split(" ");
          let a_status = a_time_list[2];
          let b_time_list = b.viewersData[b.viewersData.length-1].time.split(" ");
          let b_status = b_time_list[2];
          if (a_status == "watching" && b_status != "watching") {
            return -1;
          } else if (a_status != "watching" && b_status == "watching") {
            return 1;
          } else {
            return 0;
          }
        });
        setVideo_obj_List(video_obj_list);
      });
  }, [])

  useEffect(() => {
    if (video_obj_List.length == 0) {
      setNoScheduleMsg(<div><strong>現在、予定されている配信はありません。<br/> No scheduled streams. </strong></div>);
    } else {
      setNoScheduleMsg("");
    }
  }, [video_obj_List])


  let Lines = video_obj_List.map((video) => {
    let waiting_times = [];
    let watching_times = [];
    let times = [];
    let waiting_viewers = [];
    let watching_viewers = [];
    let viewers = [];
    let status = "";
    let borderColor = "";
    let point_borderColor = "";
    let viewers_now = video.viewersData[video.viewersData.length-1].viewers;
  
    for (let i = 0; i < video.viewersData.length; i++ ) {
      let time_list = video.viewersData[i].time.split(" ");

      let time = time_list[1];
      let viewer = video.viewersData[i].viewers;

      status = time_list[2]
      if (status == "watching") {
        watching_times.push(time);
        watching_viewers.push(viewer);
      } else {
        waiting_times.push(time);
        waiting_viewers.push(viewer);
      }
    }

    if (status == "watching") {
      borderColor = "rgba(255,100,100,1)";
      point_borderColor = "rgba(255,100,100,1)";
      times = watching_times;
      viewers = watching_viewers
    } else {
      borderColor = "rgba(64,218,131,1)";
      point_borderColor = "rgba(75,192,192,1)";
      times = waiting_times;
      viewers = waiting_viewers;
    }

    let Linedata = {
      labels: times,
      datasets: [
        {
          label: '接続者数',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: borderColor,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: point_borderColor,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 0.5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: viewers
        }
    ]};
    return (
      <div>
        <div className="video-title">
          <Link href={video.videoURL} target="_blank">
            {video.videoTitle}
          </Link>
        </div>
        <div className="MyLongChart">
          <Link href={`https://youtube.com/channel/`+video.channelID} target="_blank">
            <Image src={video.iconURL} className="icon" width="70" height="70"/>
          </Link>
          <div className="viewers-container">
            <strong className="viewers">{viewers_now}</strong>
          </div>
            <Line data={Linedata} options={LineLongOptions} />
        </div>
      </div>
    )
  })

  return (
    <ul className="live-list">
      {NoScheduleMsg}
      {Lines.map((line)=> <div><li className="Line-container">{line}</li>        <div className="container-border"></div></div>)}
    </ul>
  )
}


export default Home
