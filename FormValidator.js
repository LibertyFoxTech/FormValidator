//Form Validator
//Version 1.0
//Written By Thomas Depole


function FormValidation(form, requiredFields) {
    if (!form || !requiredFields) {
        console.log("The form validator is missing values, and will not work, please review the code");
    } else {
        $("head").append("<style> .FormValidation_input-red { border: 1px solid red !important; }</style> ")
        $(form).attr('onSubmit', 'return FormValidation_Validator( ' + JSON.stringify(requiredFields) + ' );');
        console.log("Form validator has successfully binded");
    }
}

function FormValidation_MissedField(selector) {
    if (selector == "CLEAR") {
        $("input").removeClass("FormValidation_input-red");
    } else {
        $(selector).addClass("FormValidation_input-red");
        $('html, body').animate({
            scrollTop: ($(selector).offset().top)
        }, 500);
    }
}

function FormValidation_Validator(requiredFields) {
    var fieldType = null;
    var selector = null;
    FormValidation_MissedField("CLEAR");


    for (var i in requiredFields) {
        selector = requiredFields[i];
        fieldType = $(selector).attr("type");

        //check Text/Date Fields 
        if (fieldType == "text" || fieldType == "date") {
            if (!$(selector).val()) {
                FormValidation_MissedField(selector);
                return false;
            }
        }
        
        if (fieldType == "checkbox") {
            console.log("Field Typeof CheckBox isn't supported, please check ")
        }
        
        if (fieldType == "radio") {
            
        }
    }
}
