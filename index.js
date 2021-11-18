'use strict'



// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const pageviews = ['10K', '50K', '100K', '500K', '1M']
const cost = [8, 12, 16, 24, 36]


const calculateCost = function (cost) {
  return (cost) * 0.25;
}

const discountAmount = [calculateCost(cost[0]), calculateCost(cost[1]), calculateCost(cost[2]), calculateCost(cost[3]), calculateCost(cost[4])]

const discount = [
  cost[0] - discountAmount[0],
  cost[1] - discountAmount[1],
  cost[2] - discountAmount[2],
  cost[3] - discountAmount[3],
  cost[4] - discountAmount[4]
]


const updateCheckbox = function () {

  // document.querySelector('.cost').textContent = `${discount[2]}$`;
  const checker = document.querySelector('.discount-check-box');


  if (checker.checked) {
    let sliderValue = Number(document.querySelector('.slider').value);
    // alert('Slider value')

    if (sliderValue == 0) {
      document.querySelector('.view').textContent = `${pageviews[0]}`;
      document.querySelector('.cost').textContent = `$${numeral(discount[0]).format('0.00')} `;

    }
    else if (sliderValue === 1) {
      document.querySelector('.view').textContent = `${pageviews[1]} `
      document.querySelector('.cost').textContent = `$${numeral(discount[1]).format('0.00')} `;
    }
    else if (sliderValue === 2) {
      document.querySelector('.view').textContent = `${pageviews[2]} `
      document.querySelector('.cost').textContent = `$${numeral(discount[2]).format('0.00')}  `;

    }
    else if (sliderValue === 3) {
      document.querySelector('.view').textContent = `${pageviews[3]} `
      document.querySelector('.cost').textContent = `$${numeral(discount[3]).format('0.00')} `;

    }
    else if (sliderValue === 4) {
      document.querySelector('.view').textContent = `${pageviews[4]} `
      document.querySelector('.cost').textContent = `$${numeral(discount[4]).format('0.00')} `;
    }
    else {
      document.querySelector('.span').textContent = 'An error'
    }
  } else if (!checker.checked) {
    document.querySelector('.cost').textContent = `$${numeral(discount[2]).format('0.00')}  `;
    let sliderValue = Number(document.querySelector('.slider').value);


    if (sliderValue == 0) {
      document.querySelector('.view').textContent = `${pageviews[0]} `;
      document.querySelector('.cost').textContent = `$${numeral(cost[0]).format('0.00')} `;

    } else if (sliderValue === 1) {
      document.querySelector('.view').textContent = `${pageviews[1]} `
      document.querySelector('.cost').textContent = `$${numeral(cost[1]).format('0.00')} `;
    }

    else if (sliderValue === 2) {
      document.querySelector('.view').textContent = `${pageviews[2]} `
      document.querySelector('.cost').textContent = `$${numeral(cost[2]).format('0.00')}`;

    } else if (sliderValue === 3) {
      document.querySelector('.view').textContent = `${pageviews[3]} `
      document.querySelector('.cost').textContent = `$${numeral(cost[3]).format('0.00')}`;

    }
    else if (sliderValue === 4) {
      document.querySelector('.view').textContent = `${pageviews[4]} `
      document.querySelector('.cost').textContent = `$${numeral(cost[4]).format('0.00')}`;
      const choosenValue = cost[4]
    } else {
      document.querySelector('.span').textContent = 'An error'
    }
  }

}


// DEFUALT VALUE OF SLIDER // COST // VIEWS

let sliderValue = Number(document.querySelector('.slider').value = 2);

document.querySelector('.view').textContent = `${pageviews[2]} `;
// document.querySelector('.cost').textContent = `${ cost[2] } $`;


const checker = document.querySelector('.discount-check-box');


checker.addEventListener('click', function () {
  updateCheckbox()
})

document.querySelector('.slider').addEventListener('input',
  function () {
    updateCheckbox()

  })


const startTrial = () => {
  document.querySelector('.start-trial-button').addEventListener('click', function (e) {
    window.location.href = 'confirmationPage.html'
  })
}



startTrial()

updateCheckbox()





// REFACTOR LATER TO A FOR OR FOREACH LOOP


// sliderValue.forEach(function val, i, arr){

// }
