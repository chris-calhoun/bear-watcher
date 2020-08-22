// const renderToDOM = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML = textToPrint;
// };

// const createBearCards = bearArray => {
//   let domString = '';
//   for (let i = 0; i < bearArray.length; i++) {
//     domString += `<div class="card" style="width: 18rem;">
//         <img class="card-img-top" src=${bearArray[i].image} alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title"> ${bearArray[i].name}</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>`;
//   }
//   renderToDOM('bearCards', domString);
// };

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

export { createBearCards };
