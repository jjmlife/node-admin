const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')

const app = new Koa()

const uploadRouter = new Router({ prefix: '/upload' })

const upload = multer({
  dest: './uploads'
})

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.req);
  ctx.response.body = "upload success!"
})

// app.use((ctx, next) => {
//   if (ctx.request.url === '/login') {
//     ctx.response.body = "Login Success~";
//   } else if (ctx.request.url === '/upload') {
//     // ctx.req.setEncoding('binary');
//     console.log(ctx.req.body);
//     console.log("jm======================");
//     console.log(ctx.request.body);
//     ctx.response.body = "upload"
//   } else {
//     ctx.response.body = "other response~"
//   }
// })

app.use(uploadRouter.routes());

app.listen(9000, "localhost", () => {
  console.log("server start~");
})