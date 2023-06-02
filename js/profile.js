const getPlanBtn = document.getElementById("getPlanBtn");
const planBtn = document.getElementById("planBtn");
const mealModalWrapper = document.getElementById("mealModalWrapper");

const viewMeditationBtn = document.getElementById("viewMeditationBtn");
const viewWorkoutBtn = document.getElementById("viewWorkoutBtn");
const viewCalorieBtn = document.getElementById("viewCalorieBtn");

function mealPlanHTML() {
  return `
  <div class="table-modal">
  <div class="title">
    <p>"Routine is best medicine"</p>
    <h1>Meal Plan <i class="fas fa-utensils"></i> </h1>
  </div>
  <table>
    <thead>
      <tr>
        <th>Day</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thur</th>
        <th>Fri</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="td-start">Morning</td>
        <td>Boiled Veg</td>
        <td>Meat</td>
        <td>Cheese</td>
        <td>Eggs</td>
        <td>Fish</td>
      </tr>
      <tr>
        <td class="td-start">Afternoon</td>
        <td>Boiled Veg</td>
        <td>Meat</td>
        <td>Cheese</td>
        <td>Eggs</td>
        <td>Fish</td>
      </tr>
      <tr>
        <td class="td-start">Evening</td>
        <td>Boiled Veg</td>
        <td>Meat</td>
        <td>Cheese</td>
        <td>Eggs</td>
        <td>Fish</td>
      </tr>
      <tr>
        <td class="td-start">Night</td>
        <td>Boiled Veg</td>
        <td>Meat</td>
        <td>Cheese</td>
        <td>Eggs</td>
        <td>Fish</td>
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
    <h1>Meditation Hours <i class="far fa-sun"></i></h1>
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
              <h1>Workout Hours <i class="fas fa-running"></i></h1>
            </div>
            <table>
              <thead>
                <tr>
                  <th class="th-red">Workout</th>
                  <th class="th-red">Mon</th>
                  <th class="th-red">Tue</th>
                  <th class="th-red">Wed</th>
                  <th class="th-red">Thu</th>
                  <th class="th-red">Fri</th>
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
                    <img src="/images/shoulder.png" alt="icon" />
                  </td>
                  <td>2 Hours</td>
                  <td>1 Hour</td>
                  <td>0.5 Hour</td>
                  <td>1.5 Hours</td>
                  <td>3 Hours</td>
                </tr>
                <tr>
                  <td class="td-img">
                    <img src="/images/legs.jpg" alt="icon" />
                  </td>
                  <td>2 Hours</td>
                  <td>1 Hour</td>
                  <td>0.5 Hour</td>
                  <td>1.5 Hours</td>
                  <td>3 Hours</td>
                </tr>
                <tr>
                  <td class="td-img">
                    <img src="/images/abs.jpg" alt="icon" />
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

function calorieHTML() {
  return `
  <div class="table-modal">
            <div class="title">
              <h1>Previous Progress <i class="fas fa-chart-line"></i></h1>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Burn/Fat</th>
                  <th>Jan</th>
                  <th>Feb</th>
                  <th>March</th>
                  <th>April</th>
                  <th>May</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="td-start">1st Week</td>
                  <td>+4%</td>
                  <td>-6%</td>
                  <td>+2%</td>
                  <td>-1%</td>
                  <td>+2%</td>
                </tr>
                <tr>
                  <td class="td-start">2nd Week</td>
                  <td>+4%</td>
                  <td>-6%</td>
                  <td>+2%</td>
                  <td>-1%</td>
                  <td>+2%</td>
                </tr>
                <tr>
                  <td class="td-start">3rd Week</td>
                  <td>+4%</td>
                  <td>-6%</td>
                  <td>+2%</td>
                  <td>-1%</td>
                  <td>+2%</td>
                </tr>
                <tr>
                  <td class="td-start">4th Week</td>
                  <td>+4%</td>
                  <td>-6%</td>
                  <td>+2%</td>
                  <td>-1%</td>
                  <td>+2%</td>
                </tr>
                <tr>
                  <td class="td-add">Status</td>
                  <td class="td-edit">Worst</td>
                  <td class="td-edit">Excellent</td>
                  <td class="td-edit">Not Good</td>
                  <td class="td-edit">Not bad</td>
                  <td class="td-edit">Bad</td>
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

viewCalorieBtn.addEventListener("click", function (e) {
  e.preventDefault();

  modalBox.innerHTML = "";
  modalWrapper.classList.add("hidden");

  modalWrapper.classList.remove("hidden");
  modalBox.innerHTML = calorieHTML();
});
