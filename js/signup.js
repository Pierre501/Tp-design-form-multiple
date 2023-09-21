const btn_previous = document.querySelectorAll(".btn-previous");
const btn_next = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const form_steps = document.querySelectorAll(".form-step");
const progress_bar = document.querySelectorAll(".progress-step");
const iconsPassword = document.getElementById("icons_password");
const password = document.getElementById("motdepasse");
const iconsConfirm = document.getElementById("icons_confirm");
const confirm = document.getElementById("confirm");


let formStepNum = 0;
let conditionIconPassword = false;
let conditionIconConfirm = false;

btn_next.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepNum++;
        updateFormSteps();
        updateProgressBar();
    })
})

btn_previous.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepNum--;
        updateFormSteps();
        updateProgressBar();
    })
})

iconsPassword.onclick = function(){
    if(conditionIconPassword == false){
        iconsPassword.setAttribute("class", "fa fa-eye icon-size icon-position");
        password.setAttribute("type", "text");
        conditionIconPassword = true;
    }else{
        iconsPassword.setAttribute("class", "fa fa-eye-slash icon-size icon-position");
        password.setAttribute("type", "password");
        conditionIconPassword = false;
    }
}

iconsConfirm.onclick = function(){
    if(conditionIconConfirm == false){
        iconsConfirm.setAttribute("class", "fa fa-eye icon-size icon-position");
        confirm.setAttribute("type", "text");
        conditionIconConfirm = true;
    }else{
        iconsConfirm.setAttribute("class", "fa fa-eye-slash icon-size icon-position");
        confirm.setAttribute("type", "password");
        conditionIconConfirm = false;
    }
}


function updateFormSteps()
{
    form_steps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") && formStep.classList.remove("form-step-active");
    });
    form_steps[formStepNum].classList.add("form-step-active");
}

function updateProgressBar()
{
    progress_bar.forEach((progressBar, index) => {
        if(index < formStepNum + 1){
            progressBar.classList.add("progress-step-active");
        }else{
            progressBar.classList.remove("progress-step-active");
        }
    })
    const progress_active = document.querySelectorAll(".progress-step-active");
    progress.style.width = ((progress_active.length - 1) / (progress_bar.length -1)) * 100 + "%";    
}



