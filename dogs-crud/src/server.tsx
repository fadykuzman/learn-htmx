import {Database, Statement} from 'bun:sqlite'
import {Context, Hono} from 'hono'
import {serveStatic} from 'hono/bun'

//-------------------
// SQL Preparation
//-------------------

const db = new Database('todos.db', {create: true});

const app = new Hono()

app.use('/*', serveStatic({root: './public'}));


export default app
