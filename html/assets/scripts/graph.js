"use strict";
/* グラフに使う記録を持ってくる */
const ContentTimes = contenttimes.map(function(record){
  return record.CT
});
  // 配列がstringだったから数値に変換
const ContentsTimes = ContentTimes.map(Number);

const LanguageTimes = languagetimes.map(function(record){
  return record.LT
});
  // 配列がstringだったから数値に変換
const LanguagesTimes = LanguageTimes.map(Number);

/* record chart */ 
{
  var labels = study_date;
  var data = study_times.map(function (e) {
    return e.study_time;
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
          callback: function (value) {
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
  // var jsonfile2 = {
  //   jsonarray2: [
  //     {
  //       lang: "HTML",
  //       time: 30,
  //     },
  //     {
  //       lang: "CSS",
  //       time: 20,
  //     },
  //     {
  //       lang: "JavaScript",
  //       time: 10,
  //     },
  //     {
  //       lang: "PHP",
  //       time: 5,
  //     },
  //     {
  //       lang: "Laravel",
  //       time: 5,
  //     },
  //     {
  //       lang: "SQL",
  //       time: 20,
  //     },
  //     {
  //       lang: "SHELL",
  //       time: 20,
  //     },
  //     {
  //       lang: "その他",
  //       time: 10,
  //     },
  //   ],
  // };

  var BAChartDataLabel = languages.map(function (e) {
    return e.language;
  });
  // var BAChartDataValue = jsonfile2.jsonarray2.map(function (e) {
  //   return e.time;
  // });

  var dataLabelPlugin = {
    afterDatasetsDraw: function (chart) {
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
          // data: BAChartDataValue,
          data: LanguagesTimes,
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
    afterDatasetsDraw: function (chart) {
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
  const Contents = contents.map(function(record){
    return record.content
  });
  var myChart = "content_chart";
  var chart = new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: Contents,
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
          // data: [40, 20, 40],
          data: ContentsTimes,
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