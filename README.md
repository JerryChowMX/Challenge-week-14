# Challenge-week-14
A blog site for developers to publish and comment on posts, using MVC architecture. 

# Developer Blog Site

## Objective

The Developer Blog Site is a CMS-style blog platform where developers can publish their articles, blog posts, share their thoughts, and comment on other developers' posts as well. The primary objective is to create a community-driven platform where developers can exchange knowledge, updates, and personal insights into the tech world.

## Functionality

- **User Authentication**: Users can sign up, log in, and log out securely. Authentication is required to create, update, or delete posts and to leave comments on posts.

- **Blog Posts**: After logging in, users can create, view, update, or delete their own blog posts. Each post includes a title, content, and the publication date.

- **Comments**: Users can comment on their own or others' blog posts, fostering a community of feedback and discussion.

- **Dashboard**: Authenticated users have access to a dashboard where they can view, create, update, or delete their posts.

- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.

## Technologies Used

- **Frontend**: Handlebars.js for templating, CSS for styling, and vanilla JavaScript for frontend logic.
- **Backend**: Node.js and Express.js to create the server and APIs.
- **Database**: MySQL with Sequelize ORM for data management.
- **Authentication**: express-session for managing user sessions.
- **Deployment**: (This can be filled in with deployment details or removed if not deployed)

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
git clone https://github.com/JerryChowMX/Challenge-week-14.git

2. Install NPM packages:
npm install

3. Set up your `.env` file with your MySQL user, password, and database name.
4. Run the schema.sql in your MySQL database to create the necessary tables:
mysql -u root -p < db/schema.sql

5. Start the application:
node server.js


## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Repository URL

[Developer Blog Site Repository](https://github.com/JerryChowMX/Challenge-week-14)

---

Thank you for exploring the Developer Blog Site!
