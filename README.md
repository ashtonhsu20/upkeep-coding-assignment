<h3>Overview</h3>
This app was created with express for routing, sequelize for the ORM, and swagger for the API documentation

<h3>Requirements</h3>
MySql >=5.6

<h3>Config</h3>
You can input your custom DB connection settings by creating a new `.env` file using the `.env-example` as a template

<h3>Run the migrations, seeds, and server</h3>
```
npm i
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm start
```

DROP VIEW `upkeep-project`.friends_view RESTRICT;