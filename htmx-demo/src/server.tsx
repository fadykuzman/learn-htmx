import {type Context, Hono } from 'hono'
import {serveStatic} from 'hono/bun'

const app = new Hono()

app.use('/*', serveStatic({root: './public'}));

app.get('/version', (c: Context) => {
	return c.html(<div id="bun">{Bun.version}</div>)
});

export default app
