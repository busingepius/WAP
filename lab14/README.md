### Instructor

1. Create everything from scrtach for studentRegistration-server that we discussed in the lecture14.
2. Inside studentRegistration-server REST applicaiton:
    1. implement getAllStudents (consider filter and sort if there is any query string), getStudentById, createStudent, deleteStudent, and updateStudent functionality in router, controller, and model.
    2. Place routes in the appropriate order.
    3. Use Postman to test your REST APIs (all endpoints).

#### BACKEND
11. Node.js:
    NodeJS is a single thread.
    V8
    Event loop
    Libuv
    4 main queues in Libuv: timers, IO, check, and close handler queues
    Next Tick and Microtask/Promise queues in Node.js

12. Node.js module & npm
    require
    module.exports/exports
    http
    path
    fs - read/write a file (sync and async)
    stream
    What is npm?
    npm init
    package.json
    npm install –g nodemon


13. Express.js
    What is Middleware?
    Application level middleware: app.all, app.use
    Routing Middleware: app.METHOD and router.METHOD: get, post, delete, and update.
    next(), next('route'), next('err')
    Request object: params, query, and  body
    Response object: send(), json(), sendfile(), and status()
    Error-handling middleware

14. Rest API
    What is Rest? What is a resource in Rest? What is URI?
    Naming/Defining the recourses.
    HTTP Methods: get, post, put, delete
    What is an idempotent method in the http methods?
    What is a safe method in the http methods?

15. What is a Promise? Executor, Consumers: then, catch, finally
    Promises chaining
    Async /await
    Fetch API
    What is CORS? What is the origin? 