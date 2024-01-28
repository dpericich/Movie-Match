import * as db from './index.js';
import { 
    userTableCreate, 
    movieResponseTableCreate, 
    movieCategoryTableCreate, 
    userConnectionTableCreate 
} from './seedsData.js';
// This file will be used to setup the database schema -> all of the tables for the all
// It will also add records to populate the app for development and test environments
const userData = [];
const movieResponseData = [];
const userConnectionData = [];
const categoryData = [];

const dropTables = async() => {
    console.log("BEGIN - Dropping All Tables");
    const droppedTables = db.query("DROP TABLE IF EXISTS users, movie_responses, user_connections, movie_categories");
    console.log("END - Dropping All Tables");
};

const createTables = async() => {
    console.log("BEGIN - Create All Tables");
    const result = await db.query(userTableCreate);
    const userConnectionsTable = await db.query(userConnectionTableCreate);
    const movieResponsesTable = await db.query(movieResponseTableCreate);
    const movieCategoryTable = await db.query(movieCategoryTableCreate);
    console.log("END - Create All Tables");
};

const createRecords = async() => {
    console.log("BEGIN - Create All Records")
    // Create arrays of values above and iterate over those arrays to insert records
    const insertUser = await db.query("INSERT INTO users (name, email) VALUES('Daniel', 'daniel@yahoo.com'), ('John', 'john@yahoo.com')");
    const inserUserConnection = await db.query("INSERT INTO user_connections (name) VALUES('JIMBOB')");
    const movieResponse = await db.query("INSERT INTO movie_responses (movie_id, movie_title, movie_category, liked) VALUES(6, 'The Greatest Showman', 15, true)")
    const categoryResponse = await db.query("INSERT INTO movie_categories (tmbd_id, name) VALUES(15, 'Musical')")
    console.log("END - Create All Records")
}

// Setup Seeds
const result = await dropTables();
const tables = await createTables();
const records = await createRecords();