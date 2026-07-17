fetch('https://docs.google.com/spreadsheets/d/1YmfS3tu_gXhhghFqIuHWJk_FZ0IdJDYK6OGvbv1WWpI/edit?usp=sharing')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    document.getElementById('counter').innerText = rows.length - 1;
  });
