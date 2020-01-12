<h3>Overview</h3>
This app was created with express for routing, sequelize for the ORM, and swagger for the API documentation. Swagger is a tool to document and test API routes. You can view and try out my routes by visiting 
`http://localhost:3000/api-docs`


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
