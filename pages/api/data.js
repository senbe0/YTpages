const crypto = require("crypto");

const { connect_videosDB, connect_viewersDB } = require("lib/db")


async function get_video_records() {
  const videosDB = await connect_videosDB()
  try {
    return new Promise((resolve, reject) => {
      videosDB.all('SELECT * FROM video_records', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  } catch (err) {
    console.error(err.message);
  }
}


const getAllRowsFromDB = async(viewersDB, videoID) => {
  let hash = crypto.createHash("md5");
  hash.update(videoID);
  let hex_dig = hash.digest("hex");
  let table_name = "v" + hex_dig

  return new Promise((resolve, reject) => {
    try {
      viewersDB.all(`SELECT * FROM ${table_name}`, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      })
    } catch(e) {
      console.log(`error: ${e}`)
    }
  })
}


const get_video_obj_list = async() => {
  let video_obj_list = [];
  let viewersDB = await connect_viewersDB();
  let videoList = await get_video_records();
  for(let i=0; i < videoList.length; i++) {
    let videoInfo = videoList[i]
    let viewersRecordsList = await getAllRowsFromDB(viewersDB, videoInfo.videoID);
    let video_object = {
      "videoID": videoInfo.videoID,
      "channelID": videoInfo.channelID,
      "videoURL": videoInfo.videoURL,
      "videoTitle": videoInfo.title,
      // *viewersData exsample*
      // "viewersData": [{sequence: 1, time: "20:90", vew: teststream}, {sequence: 2, time: 20:90, title: teststream} ...,
      "viewersData": viewersRecordsList,
      "iconURL": videoInfo.IconImageURL
    }

    video_obj_list.push(video_object)
  }
  return video_obj_list
}



export default async function handler(req, res) {

  let video_obj_list = await get_video_obj_list()

  res.status(200).json(video_obj_list);
}
