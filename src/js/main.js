import $ from 'jquery';
function logit(parameter){
  console.log(parameter)
}
var ajaxURL = 'http://json-data.herokuapp.com/forms';
function inputData (){
  var reults = $.ajax({
    url: ajaxURL,
    dataType: 'json'
    // success: addToPage,
    // error: logit
  }).then(function(myasyncdata){
      // console.log(response)
    //  addToPage(myasyncdata)
     myasyncdata.forEach(function(datum){
      if(datum.type === "text" || datum.type === "email" || datum.type === "tel"){
        createInput();
      } else if (datum.type === "select"){
        createSelect();
      } else if(datum.type === "textarea"){
        createTextarea();
      }

     })
  });
};

function createInput (formElement){
  $('.submit-form').append(`<input />`)
};
function createSelect (formElement){
  $('.submit-form').append(`<select></select>`)
};
function createTextarea (formElement){
  $('.submit-form').append(`<textarea></textarea>`)
};

function addToPage(data){
  console.log(data)
  $('.submit-form').before(dataTemplate(data));
}



var button = $('.submit').on('click', function(event){
  event.preventDefault();
});
inputData()
