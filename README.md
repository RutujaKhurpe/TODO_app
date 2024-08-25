# TODO_app
This is simple todo project, tools used are nodejs, mongodb and express, I have added README.ME file to give the thorough explanation of the project

I have used Nodejs and Express js as backend and mongodb as the database and ejs to display in the HTML, CSS format 

step 1:
    terminal : npm install (this will install all the dependencies mentioned in  package.json)

step2 :
    run command "node index.js" , to run the file

step3 :
    after running the command you will get the URL in the terminal "http://localhost:5001", ctrl+click it, it will redirect to the browser,

step4:
    after the browser is opened , you may get message as "cannot get/",
    please add "/tasks" to the URL for exxample : "http://localhost:5001/tasks", after this the page will get displayed 

step 5:
    you will have the inputs to add the todo, edit them as well as delete 

step 6 : 
 API :
        GET all tasks : "http://localhost:5001/tasks" , displays all the task
        get task by id : "http://localhost:5001/tasks/66c83e8120b003601da7a225", (example)
        post task : "http://localhost:5001/tasks" , post the task
        update task by id  :" http://localhost:5001/tasks/66c83e8120b003601da7a225/edit" (example)
        delete task by id : "http://localhost:5001/tasks/66c83e8120b003601da7a225/"  (examaple)


git repo : 

step 7:
    the mongo collections  : this is in models folder-> Task.js, where the fields are -> title , 
    description , status , created at and updated at is automatically inserted while submit the task

step 8 :
    the routes are defined in the routes folder in tasks.js file,
    i have explained the  code as well.
    this routes helps in fetching the data, 
                        posting the new data, 
                        updating the data, 
                        delete it by ID

step9 : 
    seperate .env file to store database URL and Port

step10:
    I have checked the api through postman and all the api work great  

step 11 : 
    I have used the mongodb community and not mongodb atlas


step 11 : 
    index.js files has the modules imported and database connection code 

If liked my project , you can email me -> "rutujakhurpe99@gmail.com"


