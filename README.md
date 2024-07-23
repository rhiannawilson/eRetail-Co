# eRetail-Co
A back end for an e-commerce website that uses the latest technologies to compete with other e-commerce internet retail companies!

## Description
Welcome to Noteworthy, your go-to destination for effortless note-taking. With intuitive features and seamless syncing across devices, capturing ideas and staying organized has never been easier. Join our community today and unleash the power of effortless note-taking with Discover Noteworthy.

## Table of Contents:
- [Description](#Description)
- [Usage & Technical Details](#Usage)
- [Usage Instructions](#Usage_Instructions)
- [Credits](#Credits)
- [Author](#Author)
- [Contributions](#Contributions)
- [License](#License)

1. ![Github Repo](https://github.com/rhiannawilson/Noteworthy)
2. ![Github Deployment]()


### Directory Structure
```  
├── NOTEWORTHY/
    ├── assets/ 
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
    ├── migrations/
    ├── models/
        ├── index.js
    ├── node_modules/
    ├── seeders/
    ├── .env 
    ├── .gitignore 
    ├── LICENSE 
    ├── package-lock.json
    ├── package.json
    └── README.md        
```

## Usage & Technical Details
> - Node Package Manager
> - Express.js
> - PostgresSQL
> - Sequelize
> - dotenv

#### .gitignore 
> - node_modules/
> - .DS_Store

#### Usage_Instructions
1. Open integrated terminal in your code editor
2. Enter “node server.js” in the command line interface
> ![how to run node server.js](./public/assets/images/CLI-nodeServer.js.jpeg)
3. The following message will appear: "App listening at http://localhost:3001"
> ![PORT MSG in CLI : App Listening Link](./public/assets/images/AppListening-MessageResponse.png)
4. cmd + click http://localhost:3001
> ![Noteworthy Intro page](./public/assets/images/NoteWorthy-IntroPage.png)
5. and Enjoy the application in your browser and try creating a note!
> ![Noteworthy Notes page](./public/assets/images/Noteworthy-NotesPage.png)
6. Ctrl + C in your CLI to terminate 
> ![Terminate the live PORT](./public/assets/images/ctrl+c-cancelLiveServer.png)

## User Story
```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria
```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```

## Credits
N/A

## Author
#### @RhiannaWilson

## Contributions
- Express Js

## License ![alt text](https://img.shields.io/badge/License-_MIT-blue.svg)