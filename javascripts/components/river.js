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
