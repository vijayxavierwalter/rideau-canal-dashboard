let chart;

async function loadData() {
  try {
    const response = await fetch('/data');
    const data = await response.json();

    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';

    // Latest per location
    const latestData = {};
    data.forEach(item => {
      if (!latestData[item.location]) {
        latestData[item.location] = item;
      }
    });

    Object.values(latestData).forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h2>${item.location}</h2>
        <p><strong>Average Ice Thickness:</strong> ${item.avgIceThickness.toFixed(2)}</p>
        <p><strong>Average Water Temperature:</strong> ${item.avgWaterTemperature.toFixed(2)}</p>
        <p><strong>Skating Condition:</strong> ${item.skatingCondition}</p>
        <p><strong>Timestamp:</strong> ${item.timestamp}</p>
      `;

      cardsContainer.appendChild(card);
    });

    // 🔥 Create chart data (use last 10 records)
    const chartData = data.slice(0, 10).reverse();

    const labels = chartData.map(d => new Date(d.timestamp).toLocaleTimeString());
    const values = chartData.map(d => d.avgIceThickness);

    const ctx = document.getElementById('iceChart').getContext('2d');

    if (chart) {
      chart.destroy();
    }

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Ice Thickness',
          data: values,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true
      }
    });

  } catch (error) {
    console.error('Error loading dashboard data:', error);
  }
}

loadData();
setInterval(loadData, 10000);
