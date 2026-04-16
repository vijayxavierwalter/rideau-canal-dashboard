require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { CosmosClient } = require('@azure/cosmos');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const client = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY
});

const database = client.database(process.env.DATABASE_NAME);
const container = database.container(process.env.CONTAINER_NAME);

app.get('/data', async (req, res) => {
  try {
    const querySpec = {
      query: "SELECT * FROM c ORDER BY c.timestamp DESC"
    };

    const { resources } = await container.items.query(querySpec).fetchAll();
    res.json(resources);
  } catch (error) {
    console.error('Error fetching data from Cosmos DB:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});