import { getBears } from '../helpers/data/bearData.js';
import { createBearCards } from '../components/river.js';

const createNewBearForm = () => {
  $('#bearForm').html(`
    <form>
    <div class="form-group row">
      <label for="inputBearName" class="col-sm-2 col-form-label"
        >Bear Name</label
      >
      <div class="col-sm-5">
        <input
          type="text"
          class="form-control"
          id="inputBearName"
          placeholder="Baloo"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="bearPictureURL" class="col-sm-2 col-form-label">URL</label>
      <div class="col-sm-5">
        <input
          type="text"
          class="form-control"
          id="inputBearUrl"
          placeholder="https://upload.wikimedia.org/wikipedia/en/2/25/Baloo_the_bear.jpg"
        />
      </div>
    </div>
    <button type="button" id="submitNewBear" class="btn btn-primary">
      Submit
    </button>
  </form>
    `);
};

const submitNewBear = () => {
  $('#submitNewBear').on('click', () => {
    let bear = {
      name: $('#inputBearName').val(),
      image: $('#inputBearUrl').val(),
    };
    getBears().push(bear);
    clearForm();
    createBearCards(getBears());
  });
};

const clearForm = () => {
  $('#inputBearName').val('');
  $('#inputBearUrl').val('');
};

export { createNewBearForm, submitNewBear };
