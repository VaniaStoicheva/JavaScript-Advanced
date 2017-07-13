/**
 * Created by 1234 on 3.7.2017 г..
 */
function validate() {
    let username=$('#username');
    let email=$('#email');
    let password=$('#password');
    let confirmPassword=$('#confirm-password');
    let companyCheckbox=$('#company');
    let companyNumber=$('#companyNumber');
    let companyInfo=$('#companyInfo');
    let submitBtn=$('#submit');
    let validationDiv=$('#valid');
    let allIsValid=true;
    companyCheckbox.on("change",function () {
        if(companyCheckbox.is(":checked")){
            companyInfo.css("display","block");
        }else{
            companyInfo.css("display","none");
        }
    });
    submitBtn.on("click",function (ev) {
        ev.preventDefault();
        validateForm();
        validationDiv.css("display",allIsValid ? "block" : "none");
        allIsValid=true;
    })
    function validateForm() {
        validateInputFromRegex(username,/[A-Za-z\d]{3,20}$/g);
        validateInputFromRegex(email,/^.*?@.*?\..*$/g);
        if(confirmPassword.val()===password.val()){
            validateInputFromRegex(password,/^\w{5,15}$/g);
            validateInputFromRegex(confirmPassword,/^\w{5,15}$/g);
        }else{
            confirmPassword.css("border","solid red");
            password.css("border","solid red");
            allIsValid=false;
        }
        if(companyInfo.is(":checked")){
            validateInfo();
        }

    }
    function validateInputFromRegex(input,pattern) {
        if(pattern.test(input.val())){
            input.css("border","none");
        }else{
            input.css("border","solid red");
            allIsValid=false;

        }
    }
    function validateInfo() {
        let numValue=+companyInfo.val();
        if(numValue>=1000 && numValue<=9999){
            companyInfo.css("border","none");
        }else{
            companyInfo.css("border","solid red");
            allIsValid=false;
        }
    }
}
