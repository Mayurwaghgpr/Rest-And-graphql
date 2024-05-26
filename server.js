import express from 'express';
import feeds from './routes/feed.js'
import cors from 'cors'
// import bodyParser from 'body-parser';
import { createHandler } from 'graphql-http/lib/use/express';
import schema from './GraphQl/schema.js';
import resolver from './GraphQl/resolver.js';
import { Sequelize } from 'sequelize';
import Posts from './models/posts.js';
import User from './models/user.js';
import { db } from './database/database.js';
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

User.hasMany(Posts, { foreignKey: 'authorId' })
Posts.belongsTo(User,{ foreignKey: 'authorId' })
app.use((req, res, next) => {
    res.setHeader('Allow-Control-Allow-Origin', '*')
    res.setHeader('Allow-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Allow-Control-Allow-Headers', 'Content-Type,Authorization')
    next()
})

app.use(feeds)

app.use('/graphql', createHandler({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
}));
db.sync().then(() => {
    app.listen(port, () => {
    console.log('listening on :',port)
})
})
