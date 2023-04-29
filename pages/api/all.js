

export default async function handler(req, res) {
    let response = await fetch("http://127.0.0.1:8100/getVideoObjList_all");
    response = await response.json();
    let video_obj_list = response.video_obj_list;

    res.status(200).json(video_obj_list);
}