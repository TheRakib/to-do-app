# To-do-app
*School assignment to create a to-do-app using Node.js, Express, MongoDB, EJS, SCSS.*

---

### Installation
- Open terminal
- Run `git clone https://github.com/micaelagoffe/to-do-app.git`
- Run `npm i`
- In main.js, fill `mongoose.connect` with your database collection query string and `app.listen` with your preferred port
  (or create .env-file with variables *DB_URL* and *PORT*)
- Run `npm start`
- Run `npm run main-css` and `npm run edit-css` for compiling scss to css
- Go to localhost:*port* in your browser

---

### Naming conventions
##### Variables
- Use *const* or *let* when declaring. Do not use *var*
- Use *camelCase* or *PascalCase*

---

### Project structure
- to-do-app/ - project folder - root of project, main.js, .env, .gitignore, package.json etc goes here
  - models/ - schemas goes here
  - public/ - styles-folder goes here
    - styles/ - compiled .css-files and scss-folder goes here
      - scss/ - styling with file ending .scss goes here
  - routes/ - all routes for to-do-app goes here
  - views/ - all EJS-files goes here