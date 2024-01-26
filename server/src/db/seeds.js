// This file will be used to setup the database schema -> all of the tables for the all
// It will also add records to populate the app for development and test environments
const userData = [];
const movieResponseData = [];
const userConnectionData = [];
const categoryData = [];

const dropTables = async() => {
    console.log("BEGIN - Dropping All Tables");
    const droppedTables = db.query("DROP TABLE IF EXISTS users, movie_responses, user_connections, llamas");
    console.log("END - Dropping All Tables");
};

const createTables = async() => {
    console.log("BEGIN - Create All Tables");
    // TODO: Determine if the serial key should be x_id or just id
    const llama = await db.query('CREATE TABLE llamas(id SERIAL PRIMARY KEY, name varchar(50))');
    const result = await db.query('CREATE TABLE users(id SERIAL PRIMARY KEY, name varchar(50), email varchar(50))');
    // const userConnectionsTable = await db.query('CREATE TABLE user_connections(user_connection_id SERIAL PRIMARY KEY, name varchar(50), created_at DATE NOT NULL DEFAULT CURRENT_DATE)');
    const userConnectionsTable = await db.query('CREATE TABLE user_connections(id SERIAL PRIMARY KEY, name varchar(50), created_at DATE NOT NULL DEFAULT CURRENT_DATE)');
    const movieResponsesTable = await db.query('CREATE TABLE movie_responses(id SERIAL PRIMARY KEY, movie_id varchar(30), movie_title varchar(50), movie_category varchar(10), liked BOOLEAN)');
    const movieCategoryTable = await db.query('CREATE TABLE movie_categories(id SERIAL PRIMARY KEY, tmbd_id varchar(10), name varchar(50))')
    console.log("END - Create All Tables");
};

const createRecords = async() => {
    console.log("BEGIN - Create All Records")
    // Create arrays of values above and iterate over those arrays to insert records
    const insertLlama = await db.query("INSERT INTO llamas (name) VALUES( 'Jim' )");
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