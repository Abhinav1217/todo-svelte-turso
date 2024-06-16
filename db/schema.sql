-- Designed for libSqlite for turso database

-- Create the users table
CREATE TABLE pesto_users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the statuses table
CREATE TABLE pesto_statuses (
    status_id INTEGER PRIMARY KEY AUTOINCREMENT,
    status_name TEXT NOT NULL UNIQUE
);

-- Populate the statuses table with initial data
INSERT INTO pesto_statuses (status_name) VALUES 
('to-do'),
('doing'),
('done'),
('stashed');

-- Create the todos table
CREATE TABLE pesto_todos (
    todo_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    status_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES pesto_users(user_id),
    FOREIGN KEY (status_id) REFERENCES pesto_statuses(status_id)
);

-- Additional table to keep track of user login sessions (optional)
CREATE TABLE pesto_user_sessions (
    session_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    session_token TEXT NOT NULL UNIQUE,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES pesto_users(user_id)
);

-- Add indexes for performance
CREATE INDEX idx_pesto_user_username ON pesto_users(username);
CREATE INDEX idx_pesto_user_email ON pesto_users(email);
CREATE INDEX idx_pesto_todo_userid ON pesto_todos(user_id);
CREATE INDEX idx_pesto_todo_statusid ON pesto_todos(status_id);
CREATE INDEX idx_pesto_user_sessions_userid ON pesto_user_sessions(user_id);
