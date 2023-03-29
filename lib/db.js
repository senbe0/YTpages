const sqlite3 = require('sqlite3').verbose();


const path = process.env.database_path


async function connect_videosDB() {
    return new Promise((resolve, reject) => {
        let videosDB = new sqlite3.Database(path + 'YTvideos.db', (err) => {
            if (err) reject(err.message);
        })
        console.log("db_video is ok")
        resolve(videosDB);
    })
}


async function connect_viewersDB() {
    return new Promise((resolve, reject) => {
        let viewersDB = new sqlite3.Database(path + 'YTviewers.db', (err) => {
            if (err) reject(err.message);
        })
        console.log("db_viewers is ok")
        resolve(viewersDB);
    })

}



module.exports = {
  connect_videosDB,
  connect_viewersDB
}
