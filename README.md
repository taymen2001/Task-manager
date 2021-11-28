# taskmanager
## Instructions
**Back-end assumption**: 
- Localhost with XAMPP, PHP, MySQL

### Set up database
- Execute the SQL script: ```src/assets/students.sql```

### Run XAmpp Apache to server the back-end script
The **back-end PHP script** is an adaptation of the one from week 9: `src/assets/apis.php`

- Under folder $XAMPP/htdocs, create a subdirectory named ```vuex```
- Move the back-end PHP script to that directory
- Change the database connection parameters in the back-end PHP script: user, password, db

## Project setup
```
npm install (Optional as I've already included the node_modules files within the zip)
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

