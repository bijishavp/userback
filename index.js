

// import json server package
//using require method to import backend 

const jsonserver=require('json-server')

//create json server
//all packages in json servr is imported using require and assigned to a variable.


const server=jsonserver.create()

// to use data in json server
// 1st step
const router=jsonserver.router("db.json")


// create middleware
// it helps to pass json server data to jaavscript format


const middleware=jsonserver.defaults()


// create port for backend

const PORT=process.env.PORT||4000


// using middleware in server
// helps to pass  json  data in server to javscript format

server.use(middleware)
//2nd step in use data in json server
server.use(router)

// checking created server is wrking or not

server.listen(PORT,()=>{
    console.log('UserREgistartion  server  started at port:'+PORT);
})


