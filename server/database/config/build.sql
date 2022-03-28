begin;

drop table if exists users, posts, comments, cascade;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL  
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id int,
    post_id int,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO users (username, email, password) values('Amran', 'amran@gmail.com', '1234');

INSERT INTO posts (title, content, user_id) values ('this is title', 'this is content bla bla', 1);

INSERT INTO comments (content, user_id, post_id) values ('this is comment', 1, 1);


commit;