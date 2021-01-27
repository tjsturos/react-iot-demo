## IoT Devices Demo

### Development Requirements
  - A MySQL 5.7 Server running on your local computer that you can import the `database_schema.sql` into.
  - A user named `iot_device_admin` with a password of `password` with appropriate privileges for the `react_iot_demo` database.
  - NPM or Yarn package managers installed

## Setting up a MySQL Server

### Installing the Server
Please follow instructions here: https://dev.mysql.com/doc/mysql-getting-started/en/.

### Creating Demo Database
Using a user that has privileges to create a database, in a command shell/terminal, move into this project's root directory and enter this command: `mysql -u username -p password react_iot_demo < database_schema.sql`.

### Creating a SQL User
Log into your MySQL prompt as root or somebody who can create users.
Once in the prompt, type:
```sql
CREATE USER 'iot_device_admin'@'localhost' IDENTIFIED BY 'password';
GRANT INSERT, SELECT, UPDATE, DELETE ON react_iot_demo.* TO 'iot_device_admin'@'localhost';
FLUSH PRIVILEGES;
quit
```

Your SQL server should be good to go.  You can log into your MySQL Workbench (if you have that installed, too) and try connect.  Once connected you should see the `react_iot_demo` database with a `devices` and `models` table.

## Installing Yarn or NPM
NPM is installed with Node.js by default.  If you have Node.js, you can skip this step.

You should checkout https://nodejs.dev/ for installation instructions.

For a healthcheck, you should get the Node version by running `node -v` in your terminal.

## Running the project
In this project's root directory, run `npm run dev` or `yarn dev`.

This command will run the REST API server located in the `backend` directory as well as the React Development server in the `frontend` directory.

There should be no data initially in the database.

Your default browser should open to http://localhost:3000/#/devices automatically.

