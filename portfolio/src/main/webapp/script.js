// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */

function addRandomGreeting() {
  const greetings =
      ['"The best love is the kind that awakens the soul; that makes us reach for more; that plants a fire in our hearts and brings peace to our minds."', 
      '"I think our love can do anything we want it to."'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  document.getElementById('greeting-container').style.color = "#30343f";
  document.getElementById('greeting-container').style.fontFamily = "muli";
  document.getElementById('greeting-container').style.fontSize = "14";
  return greetingContainer.innerText = greeting;
}

/** Fetches the current date from the server and adds it to the page. */
async function showServerTime() {
  const responseFromServer = await fetch('/date');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('date-container');
  document.getElementById('date-container').style.color = "#30343f";
  document.getElementById('date-container').style.fontFamily = "muli";
  document.getElementById('date-container').style.fontSize = "14";
  
  dateContainer.innerText = textFromResponse;
}

async function addRandomString() {
  const responseFromServer = await fetch('/string-nao');
  const stats = await responseFromServer.json();

  const strings = stats[Math.floor(Math.random()*stats.length)]
  
  const statsListElement = document.getElementById('string-container');
  document.getElementById('string-container').style.color = "#30343f";
  document.getElementById('string-container').style.fontFamily = "muli";
  document.getElementById('string-container').style.fontSize = "14";
  statsListElement.innerText = strings;

}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Skill');
  data.addColumn('number', 'Count');
        data.addRows([
          ['Programming', 25],
          ['Creativity', 20],
          ['Open-mindedness', 20],
          ['Team work', 45],
          ['Willingness to learn', 50],
          ['Organization', 50]
        ]);

  const options = {
    'width':800,
    'height':500,
    'is3D': 'true',
    'fontName':'karla',
    'fontSize':14,
    'backgroundColor':'#e2eafc',
    'enableInteractivity':'true',
    'legend':{position: 'left', textStyle: {color: '#30343f', fontSize: 16}}
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
    chart.draw(data, options);
}
