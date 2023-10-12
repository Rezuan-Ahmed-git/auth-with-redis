## Authentication with mongoDb and Redis (refresh token)

### Package manger

- npm

### Technology used

    - Express
    - Mongoose
    - JWT
    - Redis (store refresh token)
    - JOI (schema validation)
    - bcrypt
    - http-errors
    - nodemon
    - morgan
    - dotenv

### Redis instruction

#### Redis supports only on Linux, MacOS. So to install and to use it on Windows you need to enable WSL.

- Install redis on your windows via WSL.
  - Installation guide: https://redis.io/docs/getting-started/installation/install-redis-on-windows/
  - Install a npm package called: redis-commander
  ```bash
  $ npm install -g redis-commander
  $ redis-commander
  ```
  - Start redis server on WSL:
  ```bash
  redis-server
  ```
  - Stop redis server on WSL:
  ```bash
  sudo service redis-server stop
  ```
  - Redis CLI on WSL:
  ```bash
  redis-cli
  ```
  1. SET, GET, and DELETE Key and value on redis DB via Redis CLI
  ```bash
  SET key_name value
  GET key_name
  DEl key_name
  ```
  - Visually see the Redis DATABASE via redis-commander
  ```bash
   redis-commander
  ```
  Redis commander will give you a port, like: http://127.0.0.1:8081, here you can interact with the DB
