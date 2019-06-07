const express = require('express')
const helmet = require('helmet')
const knex = require('knex')
const knexConfig = require('./knexfile.js')

const db = knex(knexConfig.development)
const server = express()

server.use(helmet());
server.use(express.json());

// PROJECT

server.get('/api/project', async (req, res) => {
    try {
      const project = await db('project');
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json(error);
    }
  });

server.get('/api/project/:id', async (req, res) => {
    try {
        const project = await db('project')
            .where({ id: req.params.id })
            .first();
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json(error);
    }
});

server.post('/api/project', async (req, res) => {
    try {
        const [id] = await db('project').insert(req.body);
        const project = await db('project')
            .where({ id })
            .first();

        res.status(201).json(project);
    } catch (error) {
        const message = errors[error.errno] || 'We ran into an error for project';
        res.status(500).json({ message, error });
    }
});

// ACTION

server.get('/api/action', async (req, res) => {
    try {
      const action = await db('action');
      res.status(200).json(action);
    } catch (error) {
      res.status(500).json(error);
    }
  });

server.post('/api/action', async (req, res) => {
    try {
        const [id] = await db('action').insert(req.body);
        const action = await db('action')
            .where({ id })
            .first();

        res.status(201).json(action);
    } catch (error) {
        const message = errors[error.errno] || 'We ran into an error for actions';
        res.status(500).json({ message, error });
    }
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
    console.log(`\n** API running on http://localhost:${port} **\n`)
);