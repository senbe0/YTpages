

export default async function handler(req, res) {
  let response = await fetch("http://localhost:8005/getVideoObjList");
  response = await response.json();
  let video_obj_list = response.video_obj_list;

  res.status(200).json(video_obj_list);
}
