# Rideau Canal Monitoring Dashboard

## Overview
This web dashboard provides a real-time visualization of skating conditions on the Rideau Canal. It retrieves processed data from Azure Cosmos DB and displays key metrics such as ice thickness, water temperature, and skating condition for multiple locations.

The dashboard is hosted on Azure App Service and updates automatically to reflect the latest data.

---

## Dashboard Features

- Real-time data updates (every 10 seconds)
- Displays data for:
  - Dow’s Lake
  - Fifth Avenue
  - NAC
- Shows:
  - Average ice thickness
  - Average water temperature
  - Skating condition
  - Timestamp
- Clean card-based UI
- Deployed to Azure App Service

---

## Technologies Used

- Node.js
- Express.js
- Azure Cosmos DB SDK (@azure/cosmos)
- HTML, CSS, JavaScript
- Azure App Service

---

## Prerequisites

- Node.js (v18 or higher)
- Azure account
- Azure Cosmos DB configured
- Data pipeline (IoT Hub + Stream Analytics) running

---

## Installation

git clone https://github.com/vijayxavierwalter/rideau-canal-dashboard.git
cd rideau-canal-dashboard
npm install

---

## Configuration

Create a .env file:

COSMOS_ENDPOINT=your-cosmos-endpoint
COSMOS_KEY=my-cosmos-key
DATABASE_NAME=RideauCanalDB
CONTAINER_NAME=SensorAggregations

---

## API Endpoints

GET /data  
Returns latest sensor data per location

GET /health  
Returns server status

---

## Deployment to Azure App Service

1. Create Web App (Node.js, Linux)
2. Connect GitHub repo
3. Add environment variables
4. Set startup command: node server.js
5. Restart App Service
6. Access via Azure URL

---

## Dashboard Features (Detailed)

### Real-Time Updates
Dashboard refreshes every 10 seconds.

### Data Visualization
Card-based UI showing each location.

### Safety Status Indicators
- Excellent
- Good
- Fair
- Poor

---

## Notes

- Uses Cosmos DB for real-time data
- Uses backend filtering for latest records
- Secure environment variables via Azure App Service
