## Backend REST API
This API will retrieve Iot Devices (base route: /devices) and Models (base route: /models)

### Requirements
- Nodejs
- NPM/Yarn
- SQL Server running

### Routes Available
list all them here or refer to a swagger file

### Setup and starting the server
The SQL server and Node.js (along with your package manager) should be setup as described in the project's root README.

Install packages with `yarn` and `yarn start` or `npm install` and `npm run start`.

You should see output to the console to the effect of: `React-IoT Demo app is running on http://localhost:3001`

### Logging
There is request logging going on, so you can see the requests come into the server by viewing the console after you start the server.

### Auth
There is no auth-- yet.  This is a demo so it's too much work to build that in at this point.

### Development
The server will hot-reload after you make changes to the backend files.