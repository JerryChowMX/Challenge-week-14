-- Insert initial users
INSERT INTO user (username, email, password)
VALUES 
('JaneDoe', 'jane.doe@example.com', 'password123'),
('JohnDoe', 'john.doe@example.com', 'password123');

-- Insert initial posts (Assuming the user IDs are 1 and 2, adjust as needed)
INSERT INTO post (title, content, userId, createdAt)
VALUES 
('First Blog Post', 'This is the content of the first blog post.', 1, NOW()),
('Second Blog Post', 'This is the content of the second blog post.', 2, NOW());

-- Insert initial comments (Adjust post IDs and user IDs as needed)
INSERT INTO comment (content, postId, userId, createdAt)
VALUES 
('Great post!', 1, 2, NOW()),
('Thank you!', 2, 1, NOW());
