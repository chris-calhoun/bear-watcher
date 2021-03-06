# Bear Watcher

## Motivation

Each year between July and September brown bears in the Katmai National Park congregate along the Brooks River. This river is one of the main rivers that Sockeye Salmon swim up to spawn. The brown bears wait in the shallows of the river and catch the salmon as they jump over rocks.

This website helps scientists and park rangers to track bears.

## Build Status

Reached MVP.
Working on stretch goals.

1. Tracking Features
2. Fattest Bear Award

## Screenshots

N/A

## Tech/Framwork

- Bootstrap for styling
- HTML and JavaScript ES6

## Features

- Bootstrap form that allows user to enter in a bear name and image url for a new bear.
- When the user clicks the submit button on the new bear form a bear should be added to the page.
- When there are bears being tracked, the user should see all their information displayed on the card.

## Code Example

```
const createBearCards = bearArray => {
  const newestBear = bearArray[bearArray.length - 1];
  $('#bearCards').append(`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${newestBear.image} alt="Card image cap">
    <div class="card-body" >
      <h5 class="card-title text-center"  > ${newestBear.name}</h5>
    </div>
  </div>
    `);
};
```
