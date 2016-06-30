import $ from 'jquery';
function logit(parameter){
  console.log(parameter)
}
var ajaxURL = $.ajax('http://json-data.herokuapp.com/forms');

ajaxURL.then(function(myasyncdata){
  console.log(myasyncdata);
   myasyncdata.forEach(function(datum){
    if(datum.type === "text" || datum.type === "email" || datum.type === "tel"){
      var html = createInput(datum);
      $('.form-area').append(html);
    }else if (datum.type === "select"){
      var html = createSelect(datum);
      $('.form-area').append(html)
    } else if(datum.type === "textarea"){
      var html = createTextarea(datum);
      $('.form-area').append(html)
    }

   })
});

function createInput (obj){
  return `
    <div class="Box" id="${obj.id}">
      <input type="${obj.type}" placeholder="${obj.label}" />
      <i class="fa ${obj.icon}"></i>
    </div>`;
};

var optionsTemp = function(select){
  var optionsHTML = select.options.map(function(option){
    return `<option value="${option.value}">${option.label}</option>`
    }).join("");
    return optionsHTML;
}

function createSelect (obj){
  return `
  <div class="Box" id="${obj.id}">
    <select>
      <option value="">Select Language</option>
      ${optionsTemp(obj)}
    </select>
    <i class="fa ${obj.icon}"></i>
  </div>`;
  <i class="fa ${obj.icon}"></i>
};
function createTextarea (obj){
  return `
  <div class="Box" id="${obj.id}">
    <textarea type="${obj.type}" placeholder="${obj.label}"></textarea>
    <i class="fa ${obj.icon}"></i>
  </div>`
}




var button = $('.submit').on('click', function(event){
  event.preventDefault();
});
