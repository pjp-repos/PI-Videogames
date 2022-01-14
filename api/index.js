// ==== server and database import
const server = require('./src/app.js');
const { dbConn } = require('./src/db.js');

// ------------------------ OPTIONS ------------------------------
// # sync is an asynchronous function (Promese)
// # dbConn.sync(arg) => Syncing all the models at once. 
// # model.sync(arg) => synchronizes only one model
// # arg = { force: true } => Drop all tables and information and redo it
// # arg = { alter: true } => It makes only changes models vs database

// - Synchronizing sequelize ORM with real dababase ---
// await dbConn.sync({ force: true })
// - Then ... Start express server
server.listen(3001, () => {console.log('%s listening at 3001');});

