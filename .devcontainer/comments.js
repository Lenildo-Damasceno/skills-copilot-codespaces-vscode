// Create web server for comments microservice
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

// Get comments for a specific post
app.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params;
  res.send(commentsByPostId[id] || []);
});

// Add a comment to a specific post
app.post('/posts/:id/comments', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const commentId = uuidv4();
  const newComment = { id: commentId, content };

