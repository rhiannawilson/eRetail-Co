# eRetail-Co
A back end for an e-commerce website that uses the latest technologies to compete with other e-commerce internet retail companies!

## Description
Welcome to eRetail-Co, an internet retail platform! This ecommerce website purpose is to provide you with options to purchase and sell your products online. In this application, we focuse on building the back end by modifying starter code and working with Express.js API to use Sequelize to interact with a PostgreSQL database.


## Table of Contents:
- [Description](#Description)
- [Usage & Technical Details](#Usage)
- [Credits](#Credits)
- [Author](#Author)
- [Contributions](#Contributions)
- [License](#License)

## Walkthrough Video
This assignment was submitted as requested via video demonstration, see below:
- [Video Demo](https://drive.google.com/file/d/15rvslFZB9807FZFkwcwFUZ_WnMEYsVv5/view?usp=sharing)

### Directory Structure
```  
├── eRetailCo/
    ├── assets/ 
        ├── videodemo.mov
    ├── config/ 
        ├── config.json   
    ├── develop/  
        ├── config/
           ├── connection.js
        ├── db/
           ├── schema.sql
        ├── models/
           ├── Category.js
           ├── index.js
           ├── Product.js
           ├── ProductTag.js
           ├── Tag.js
        ├── node_modules/
        ├── routes/
           ├── api/
               ├── category-routes.js
               ├── index.js
               ├── product-routes.js
               ├── tag-routes.js
           ├── index.js
        ├── seeds/
           ├── category-seeds.js
           ├── index.js
           ├── product-seeds.js
           ├── product-tag-seeds.js
           ├── tag-seeds.js
        ├── .gitignore
        ├── package-lock.json
        ├── package.json
        ├── server.js 
     ├── .env 
    ├── models/
        ├── index.js
    ├── node_modules/
    ├── seeders/
    ├── .gitignore 
    ├── LICENSE 
    ├── package-lock.json
    ├── package.json
    └── README.md        
```
## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Usage & Technical Details
> - Node Package Manager
> - Express.js
> - PostgresSQL
> - Sequelize
> - dotenv
> - Insomnia - unit testing 

#### .gitignore 
> - node_modules/
> - .DS_Store

## Credits
N/A

## Author
#### @RhiannaWilson

## Contributions
- Express JS

## License ![alt text](https://img.shields.io/badge/License-_MIT-blue.svg)