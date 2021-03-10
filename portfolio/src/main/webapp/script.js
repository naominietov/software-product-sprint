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
      ['I am 20 years old', 'I have 3 pets: one dog and two rabbits', 'I love chocolate', 'I like sushi'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  return greetingContainer.innerText = greeting;
}

/** Fetches the current date from the server and adds it to the page. */
async function showServerTime() {
  const responseFromServer = await fetch('/date');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('date-container');
  dateContainer.innerText = textFromResponse;
}

async function getRandomString() {
    
  const responseFromServer = await fetch('/string');
  console.log("Fetch funcionó correctamente");
  const textFromResponse = await responseFromServer.text();

  const strings = document.getElementById('string');
  strings.innerText = textFromResponse;

  // The json() function returns an object that contains fields that we can
  // reference to create HTML.
  const str = await responseFromServer.json();

  const statsListElement = document.getElementById('string');
  statsListElement.innerHTML = '';

  statsListElement.appendChild(str.json1);
  statsListElement.appendChild(str.json2);
  statsListElement.appendChild(str.json3);

  var a = Math.floor(Math.random() * statsListElement.length);

  console.log(statsListElement[a]);

}

