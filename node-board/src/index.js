const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const db = require('./model');
const { koaBody } = require('koa-body');
const bodyParser = require('koa-bodyparser');

/*const bodyParser = () => {
    return koaBody({ multipart: true });
};*/

const app = new Koa();
const router = new Router();
app.use(cors());
app.use(koaBody());
app.use(bodyParser());


// Add User
const addUser = async ctx => {
    const { userName } = ctx.request.body;
    const ret = await db.addUser({ userName });

    ctx.body = ret;
};

router.post('/add/user', bodyParser(), addUser);


// Find User
const findUser = async ctx => {
    const { userId } = ctx.request.query;
    const ret = await db.findUser({ userId });

    ctx.body = ret;
};

router.get('/find/user', findUser);


// Add Content
const addContent = async ctx => {
    const { userId, title, content } = ctx.request.body;
    const ret = await db.addContent({ userId, title, content });

    ctx.body = ret;
};

router.post('/add/content', bodyParser(), addContent);


// Modify Content
const modifyContent = async ctx => {
    const { contentId, title, content } = ctx.request.body;
    const ret = await db.modifyContent({ contentId, title, content });

    ctx.body = ret;
};

router.post('/modify/content', bodyParser(), modifyContent);


// Delete Content
const deleteContent = async ctx => {
    const { contentId } = ctx.request.body;
    const ret = await db.deleteContent({ contentId });

    ctx.body = ret;
};

router.post('/delete/content', bodyParser(), deleteContent);


// Find Content
const findContent = async ctx => {
    const { contentId } = ctx.request.query;
    const ret = await db.findContent({ contentId });

    ctx.body = ret;
};

router.get('/find/content', findContent);


// Find Content List
const findContentList = async ctx => {
    const ret = await db.findContentList();

    ctx.body = ret;
};

router.get('/find/content/list', findContentList);


// Add Comment
const addComment = async ctx => {
    const { userId, contentId, comment } = ctx.request.body;
    const ret = await db.addComment({ userId, contentId, comment });

    ctx.body = ret;
};

router.post('/add/comment', bodyParser(), addComment);


// Find Comment
const findComment = async ctx => {
    const { contentId } = ctx.request.query;
    const ret = await db.findComment({ contentId });

    ctx.body = ret;
};

router.get('/find/comment', findComment);


// Add Sub Comment
const addSubComment = async ctx => {
    const { commentId, userId, subcomment } = ctx.request.body;
    const ret = await db.addSubComment({ commentId, userId, subcomment });

    ctx.body = ret;
};

router.post('/add/sub-comment', bodyParser(), addSubComment);


// Find Sub Comment
const findSubComment = async ctx => {
    const { commentId } = ctx.request.query;
    const ret = await db.findSubComment({ commentId });

    ctx.body = ret;
};

router.get('/find/sub-comment', findSubComment);


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);