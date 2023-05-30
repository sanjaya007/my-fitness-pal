const getPlanBtn = document.getElementById("getPlanBtn");
const planBtn = document.getElementById("planBtn");
const mealModalWrapper = document.getElementById("mealModalWrapper");

const viewMeditationBtn = document.getElementById("viewMeditationBtn");
const viewWorkoutBtn = document.getElementById("viewWorkoutBtn");

function mealPlanHTML() {
  return `
  <div class="table-modal">
  <div class="title">
    <h1>Meal Plan</h1>
  </div>
  <table>
    <thead>
      <tr>
        <th>Meal</th>
        <th>Day 1</th>
        <th>Day 2</th>
        <th>Day 3</th>
        <th>Day 4</th>
        <th>Day 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="td-start">Breakfast</td>
        <td>Vegetable</td>
        <td>White Meat</td>
        <td>Cheese</td>
        <td>Eggs</td>
        <td>Red Meat</td>
      </tr>
      <tr>
        <td class="td-start">Snack</td>
        <td>Vegetable</td>
        <td>White Meat</td>
        <td>Cheese</td>
        <td>Eggs</td>
        <td>Red Meat</td>
      </tr>
      <tr>
        <td class="td-start">Lunch</td>
        <td>Vegetable</td>
        <td>White Meat</td>
        <td>Cheese</td>
        <td>Eggs</td>
        <td>Red Meat</td>
      </tr>
      <tr>
        <td class="td-start">Dinner</td>
        <td>Vegetable</td>
        <td>White Meat</td>
        <td>Cheese</td>
        <td>Eggs</td>
        <td>Red Meat</td>
      </tr>
    </tbody>
  </table>
</div>
    `;
}

function meditationHourHTML() {
  return `
  <div class="table-modal">
  <div class="title">
    <h1>Meditation Hours</h1>
  </div>
  <table>
    <thead>
      <tr>
        <th>Meditation</th>
        <th>Day 1</th>
        <th>Day 2</th>
        <th>Day 3</th>
        <th>Day 4</th>
        <th>Day 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="td-start">Morning</td>
        <td>3 hours</td>
        <td>1 Hour</td>
        <td>2 Hours</td>
        <td>1.5 Hours</td>
        <td>2.5 Hours</td>
      </tr>
      <tr>
        <td class="td-start">Noon</td>
        <td>3 hours</td>
        <td>1 Hour</td>
        <td>2 Hours</td>
        <td>1.5 Hours</td>
        <td>2.5 Hours</td>
      </tr>
      <tr>
        <td class="td-start">Evening</td>
        <td>3 hours</td>
        <td>1 Hour</td>
        <td>2 Hours</td>
        <td>1.5 Hours</td>
        <td>2.5 Hours</td>
      </tr>
      <tr>
        <td class="td-start">Night</td>
        <td>3 hours</td>
        <td>1 Hour</td>
        <td>2 Hours</td>
        <td>1.5 Hours</td>
        <td>2.5 Hours</td>
      </tr>
    </tbody>
  </table>
</div>
  `;
}

function workoutHourHTML() {
  return `
  <div class="table-modal">
            <div class="title">
              <h1>Workout Hours</h1>
            </div>
            <table>
              <thead>
                <tr>
                  <th class="th-red">Workout</th>
                  <th class="th-red">Day 1</th>
                  <th class="th-red">Day 2</th>
                  <th class="th-red">Day 3</th>
                  <th class="th-red">Day 4</th>
                  <th class="th-red">Day 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="td-img">
                    <img src="/images/biceps.png" alt="icon" />
                  </td>
                  <td>2 Hours</td>
                  <td>1 Hour</td>
                  <td>0.5 Hour</td>
                  <td>1.5 Hours</td>
                  <td>3 Hours</td>
                </tr>
                <tr>
                  <td class="td-img">
                    <img src="/images/crunch.jpg" alt="icon" />
                  </td>
                  <td>2 Hours</td>
                  <td>1 Hour</td>
                  <td>0.5 Hour</td>
                  <td>1.5 Hours</td>
                  <td>3 Hours</td>
                </tr>
                <tr>
                  <td class="td-img">
                    <img src="/images/legs.png" alt="icon" />
                  </td>
                  <td>2 Hours</td>
                  <td>1 Hour</td>
                  <td>0.5 Hour</td>
                  <td>1.5 Hours</td>
                  <td>3 Hours</td>
                </tr>
                <tr>
                  <td class="td-img">
                    <img src="/images/chest.png" alt="icon" />
                  </td>
                  <td>2 Hours</td>
                  <td>1 Hour</td>
                  <td>0.5 Hour</td>
                  <td>1.5 Hours</td>
                  <td>3 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
  `;
}

getPlanBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mealModalWrapper.classList.remove("hidden");
});

planBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mealModalWrapper.classList.add("hidden");

  modalBox.innerHTML = "";
  modalWrapper.classList.add("hidden");

  modalWrapper.classList.remove("hidden");
  modalBox.innerHTML = mealPlanHTML();
});

viewMeditationBtn.addEventListener("click", function (e) {
  e.preventDefault();

  modalBox.innerHTML = "";
  modalWrapper.classList.add("hidden");

  modalWrapper.classList.remove("hidden");
  modalBox.innerHTML = meditationHourHTML();
});

viewWorkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  modalBox.innerHTML = "";
  modalWrapper.classList.add("hidden");

  modalWrapper.classList.remove("hidden");
  modalBox.innerHTML = workoutHourHTML();
});
