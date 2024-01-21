// Get elements from DOM
let enteredAmountEl = $("#entered-amount")
let submitButtonEl = $("#submit-btn")
//let viewTransHistory = $("#trans-history")
let transHistDiv = $("#tranz-hist")
let currentBalEl = $("#current-bal")
let numOfYearsEl = $("#num-of-years")
let interestRateEl = $("#int-rate")

// Declare some variables
let transHist = "";

// Manipulate DOM
submitButtonEl.click(function(){
    // futureAmount = enteredAmountEl.val() 
    //         * (1 + interestRateEl.val())**numOfYearsEl.val()
    if (interestRateEl.val() >= 0.02 && numOfYearsEl.val()>= 1 && 
                enteredAmountEl.val()>= 1){
        futureAmount = Number(enteredAmountEl.val()) 
            * (1 + Number(interestRateEl.val()))**numOfYearsEl.val()
        console.log("futureAmount: ", (futureAmount.toFixed(2)))

        currentBalEl.text( futureAmount.toFixed(2) )
        // Use interest rate val in %
        transHist = `<p class="bg-light py-2 px-2">
                    ${enteredAmountEl.val()} unit(s) 
                        compounded for 
                     ${numOfYearsEl.val()} years at 
                     ${interestRateEl.val() * 100}% 
                     gives ${futureAmount.toFixed(2)} unit(s)
                      </p>`
        transHistDiv.append(transHist)

    } else{swal("Enter positive numbers for amount and years. \
                Select an interest rate")}

})