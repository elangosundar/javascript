
### CRUD operations with NodeJs, ExpressJs with Mongodb  ###

1. initialing package.json and creating the server.js file
```
npm init
sudo nano server.js
Add some js code and run as `npm server.js`
```
2. Installing `ExpressJS`
```
npm install express --save
```
check json file and express will added in the dependency sections.

3. Install `nodemon` for automatically loaded when we changed the js file.

```
npm install nodemon --save-dev
./node_modules/.bin/nodemon server.js
```
4. Install `BodyParser` and `MongoDb`

```
npm install body-parser --save
npm install mongodb --save
```
5. Create the mongo db by using two ways:
`
     a. Cloud MongoDb
     b. Localhost MongoDb
`

6. `Cloud MongoDb` : Creating the mongodb by using cloud mongo account 
create the account as MLab:

```
https://mlab.com/signup/
create the account as MLab:

user/acct Name : `XXXXX`/`YYYY`

DB Name: 
Db username/password : mongodb/mongodb@123

Mongo db Url:

mongodb://<dbuser>:<dbpassword>@ds01411338.mlab.com:14318/mongodb
```
7. Localhost Mongodb Steps:

https://docs.mongodb.com/manual/administration/install-community/

8. Deploy and run 'node server.js'


Ref:

<a href="https://zellwk.com/blog/crud-express-mongodb/"> https://zellwk.com/blog/crud-express-mongodb/ </a> <br>
<a href="https://docs.mongodb.com/manual/administration/install-on-linux/">https://docs.mongodb.com/manual/administration/install-on-linux/</a><br>
<a href="http://codingslover.blogspot.com/">http://codingslover.blogspot.com</a>
