FormValidator
=============

Light weight, client side form validator

How to use


include the Js file, besure to have jquery installed,
and add this to the page that has the form you want to validate, 
and add the parameters, and check the console for messages, it speaks ;) 




var RequiredFields = [
       "#fieldIDName",
       "#name2"
];

FormValidation("formSelector", RequiredFields);


