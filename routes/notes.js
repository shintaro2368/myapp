var express = require('express');
var router = express.Router();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://shintaro2368:aA!415415415@cluster0.pigatkw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');
// idが1のドキュメントを取得
const query = { id: 1 };
const note = await notes.findOne(query);
res.json(note);
})
module.exports = router;