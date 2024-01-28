export const userTableCreate = `
    CREATE TABLE users(
        id SERIAL PRIMARY KEY, 
        name varchar(50), 
        email varchar(50)
    )
`;

export const movieResponseTableCreate = `
    CREATE TABLE movie_responses(
        id SERIAL PRIMARY KEY, 
        movie_id varchar(30), 
        movie_title varchar(50), 
        movie_category varchar(10), 
        liked BOOLEAN, 
        user_id INT
    )
`;

export const movieCategoryTableCreate = `
    CREATE TABLE movie_categories(
        id SERIAL PRIMARY KEY, 
        tmbd_id varchar(10), 
        name varchar(50)
    )
`;

export const userConnectionTableCreate = `
    CREATE TABLE user_connections(
        id SERIAL PRIMARY KEY, 
        name varchar(50), 
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
    )
`;