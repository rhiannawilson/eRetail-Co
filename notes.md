


config/config.json: 
Configuration file for database connection settings.

models/index.js: 
Entry point for Sequelize models.

migrations/: 
Directory for database migration files.

seeders/: 
Directory for seed files.


Configure the database connection settings in the config/config.json file according to your database setup.

Create your Sequelize models in the models/ directory. You can generate models using Sequelize CLI commands like:

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
Run migrations to create the database tables based on your models:

npx sequelize-cli db:migrate
You can also create seed data for your database using seed files in the seeders/ directory and run them with:

npx sequelize-cli db:seed:all
By following these steps, you can initialize Sequelize in your project and start working with database models, migrations, and seed data.


Created "config/config.json"

Successfully created models folder at "/Users/rhianna/bootcamp/uni-gitlab/Homework/eRetailCo/models".

Successfully created migrations folder at "/Users/rhianna/bootcamp/uni-gitlab/Homework/eRetailCo/migrations".

Successfully created seeders folder at "/Users/rhianna/bootcamp/uni-gitlab/Homework/eRetailCo/seeders".
rhianna@Rhiannas-MBP eRetailCo % 