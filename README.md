# Express Mongo JWT

## Installation

- Install NodeJS, MongoDB
- Install `npm` or `yarn`
- Rename `.env.example` to `.env`
- Fulfill `.env` data
- Start MongoDB
- Run `yarn run dev` or `npm run dev`
- Check `http://localhost:3000/api/status` to see it works

## Configuration

| Name         | Description                                                                          | Example                                |
| ------------ | ------------------------------------------------------------------------------------ | -------------------------------------- |
| NODE_ENV     | Environment for node js                                                              | "dev", "prod", "test"                  |
| APP          | Name of the application                                                              | Backend Task                           |
| PORT         | Port to run the application (if you run in **heroku** this will setup automatically) | 3000                                   |
| HOSTNAME     | Host name for running the application                                                | http://localhost:3000                  |
| APP_SECRET   | Secret for running app. Use a strong hash in production and make sure to rotate it   | ddd36434-80fe-4f18-b3b6-e645697f7b84   |
| MONGOURI     | MongoDB connection URI                                                               | mongodb://localhost:27017/slash-db     |
| MONGOTESTURI | MongoDB connection URI for testing                                                   | mongodb://localhost:27017/slashtest-db |
|              |
