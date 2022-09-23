const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { randomBytes } = require('crypto');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};
const eventBusUrl = 'http://event-bus-srv:4005/events';

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const { content } = req.body;

  const commentId = randomBytes(4).toString('hex');
  const comments = commentsByPostId[req.params.id] || [];

  const comment = {
    id: commentId,
    postId: req.params.id,
    status: 'pending',
    content,
  };

  comments.push(comment);

  commentsByPostId[req.params.id] = comments;

  await axios.post(eventBusUrl, {
    type: 'CommentCreated',
    data: comment,
  });

  res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
  console.log('Received event:', req.body.type);

  const { type, data } = req.body;

  if (type === 'CommentModerated') {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];

    const comment = comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;

    await axios.post(eventBusUrl, {
      type: 'CommentUpdated',
      data: comment,
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
