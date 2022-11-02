"use script";
/* record chart */ 
{
  var jsonfile = {
    jsonarray: [
      {
        day:1,
        time: 3,
      },
      {
        day: 2,
        time: 4,
      },
      {
        day: 3,
        time: 5,
      },
      {
        day: 4,
        time: 3,
      },
      {
        day: 5,
        time: 0,
      },
      {
        day: 6,
        time: 0,
      },
      {
        day: 7,
        time: 4,
      },
      {
        day: 8,
        time: 2,
      },
      {
        day: 9,
        time: 2,
      },
      {
        day: 10,
        time: 8,
      },
      {
        day: 11,
        time: 8,
      },
      {
        day: 12,
        time: 2,
      },
      {
        day: 13,
        time: 2,
      },
      {
        day: 14,
        time: 1,
      },
      {
        day: 15,
        time: 7,
      },
      {
        day: 16,
        time: 4,
      },
      {
        day: 17,
        time: 4,
      },
      {
        day: 18,
        time: 3,
      },
      {
        day: 19,
        time: 3,
      },
      {
        day: 20,
        time: 3,
      },
      {
        day: 21,
        time: 2,
      },
      {
        day: 22,
        time: 2,
      },
      {
        day: 23,
        time: 6,
      },
      {
        day: 24,
        time: 2,
      },
      {
        day: 25,
        time: 2,
      },
      {
        day: 26,
        time: 1,
      },
      {
        day: 27,
        time: 1,
      },
      {
        day: 28,
        time: 1,
      },
      {
        day: 29,
        time: 7,
      },
      {
        day: 30,
        time: 8,
      },
    ],
  };

  var labels = jsonfile.jsonarray.map(function (e) {
    return e.day;
  });
  var data = jsonfile.jsonarray.map(function (e) {
    return e.time;
  });

  var data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: "rgba(0,85,150,1)",
        borderColor: "rgba(0,85,150,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(0,85,150,0.8)",
        hoverBorderColor: "rgba(0,85,150,1)",
        data: data,
      },
    ],
  };

  var options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        suggestedMax: 8,
        stacked: true,
        ticks: {
          stepSize: 2,
          callback: function (value, index, values) {
            return value + "h";
          },
        },
        grid: {
          display: false,
          drawBorder: false,
          color: "rgba(255,99,132,0.2)",
        },
      },
      x: {
        ticks: {
          stepSize: 2, // 間隔
          callback: function(value){
            if(value % 2 != 0  && value != 0){
              return value + 1;
          }},
          minRotation: 0,
          maxRotation: 0,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  new Chart("time_chart", {
    type: "bar",
    options: options,
    data: data,
  });
}
/* languages chart */ 
{
  var jsonfile2 = {
    jsonarray2: [
      {
        lang: "HTML",
        time: 30,
      },
      {
        lang: "CSS",
        time: 20,
      },
      {
        lang: "JavaScript",
        time: 10,
      },
      {
        lang: "PHP",
        time: 5,
      },
      {
        lang: "Laravel",
        time: 5,
      },
      {
        lang: "SQL",
        time: 20,
      },
      {
        lang: "SHELL",
        time: 20,
      },
      {
        lang: "その他",
        time: 10,
      },
    ],
  };

  var BAChartDataLabel = jsonfile2.jsonarray2.map(function (e) {
    return e.lang;
  });
  var BAChartDataValue = jsonfile2.jsonarray2.map(function (e) {
    return e.time;
  });

  var dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
      // To only draw at the end of animation, check for easing === 1
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
        var dataSum = 0;
        dataset.data.forEach(function (element) {
          dataSum += element;
        });

        var meta = chart.getDatasetMeta(i);
        if (!meta.hidden) {
          meta.data.forEach(function (element, index) {
            // Draw the text in black, with the specified font
            ctx.fillStyle = "rgb(255, 255, 255)";

            var fontSize = 12;
            var fontStyle = "normal";
            var fontFamily = "Helvetica Neue";
            ctx.font = Chart.helpers.fontString(
              fontSize,
              fontStyle,
              fontFamily
            );

            // Just naively convert to string for now
            var labelString = chart.data.labels[index];
            var dataString =
              (
                Math.round((dataset.data[index] / dataSum) * 100) 
              ).toString() + "%";

            // Make sure alignment settings are correct
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            var padding = 10;
            var position = element.tooltipPosition();
            ctx.fillText(
              dataString,
              position.x,
              position.y + fontSize / 2 - padding
            );
          });
        }
      });
    },
  };
  
  var myChart = "language_chart";
  var chart = new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: BAChartDataLabel,
      datasets: [
        {
          label: "Sample",
          backgroundColor: [
            "#0042E5",
            "#0070B9",
            "#01BDDB",
            "#02CDFA",
            "#B29DEE",
            "#6C43E5",
            "#460AE8",
          ],
          data: BAChartDataValue,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            textAlign:'left',
          
          },
          position: "bottom",
        },
      },
      title: {
        display: true,
        text: "Sample",
      },
      maintainAspectRatio: false,
    },
    plugins: [dataLabelPlugin],
  });
}
/* contents chart */ 
{
  var dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
      // To only draw at the end of animation, check for easing === 1
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
        var dataSum = 0;
        dataset.data.forEach(function (element) {
          dataSum += element;
        });

        var meta = chart.getDatasetMeta(i);
        if (!meta.hidden) {
          meta.data.forEach(function (element, index) {
            // Draw the text in black, with the specified font
            ctx.fillStyle = "rgb(255, 255, 255)";

            var fontSize = 12;
            var fontStyle = "normal";
            var fontFamily = "Helvetica Neue";
            ctx.font = Chart.helpers.fontString(
              fontSize,
              fontStyle,
              fontFamily
            );

            // Just naively convert to string for now
            var labelString = chart.data.labels[index];
            var dataString =
              (
                Math.round((dataset.data[index] / dataSum) * 1000) / 10
              ).toString() + "%";

            // Make sure alignment settings are correct
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            var padding = 5;
            var position = element.tooltipPosition();
            // ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
            ctx.fillText(
              dataString,
              position.x,
              position.y + fontSize / 2 - padding
            );
          });
        }
      });
    },
  };
  var myChart = "content_chart";
  var chart = new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: ["N予備校", "ドットインストール", "POSSE課題"],
      datasets: [
        {
          label: "Sample",
          backgroundColor: [
            "#0042E5",
            "#0070B9",
            "#01BDDB",
            "#02CDFA",
            "#B29DEE",
            "#6C43E5",
            "#460AE8",
          ],
          data: [40, 20, 40],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
          },
          position: "bottom",
        },
      },
      title: {
        display: true,
        text: "Sample",
      },
      maintainAspectRatio: false,
    },
    plugins: [dataLabelPlugin],
  });
}
