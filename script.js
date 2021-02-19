function donateButtonClick() {
  console.log("On donate button click call");
  var buttonType = document
    .getElementById("donateOption")
    .getElementsByTagName("type");
  console
    .log(buttonType)(
      document.getElementById("submitForm").getElementById("confirmButton")
    )
    .setAttribute("type", buttonType);
}

function submitForm() {
  console.log("On submit button click call");

  var confirmButton = document.getElementById("confirmButton");
  var fname = document.getElementById("firstname").value;
  console.log(fname);
  var name =
    document.getElementById("firstname").value +
    document.getElementById("lastname").value;
  var email = document.getElementById("inputEmail4").value;
  var contact = document.getElementById("inputPassword4").value;
  var address =
    document.getElementById("inputAddress").value +
    document.getElementById("inputAddress2").value +
    document.getElementById("inputCity").value +
    document.getElementById("inputState").value +
    document.getElementById("inputZip").value;
  var donateType = document
    .getElementById("confirmButton")
    .getAttribute("type");

  var data = {
    name: name,
    email: email,
    mobile_number: contact,
    address: address,
    donation_type: donateType,
  };
  console.log(data);
  // $.ajax({

  //   type: "POST",
  //   url: "https://elo3gczif8.execute-api.us-east-1.amazonaws.com/prod",
  //   contentType: 'application/json',
  //   crossDomain: true,
  //   data:{
  //     "mobile_number": 543,
  //     "name": "fs",
  //     "address": "vf",
  //     "donation_type": "vf",
  //     "email": "fva@gmail.com"
  //   },
  //   dataType: 'json',
  //   success: function(){
  //     console.log('Success');
  //   },
  //   error: function(){
  //     console.log('Unsuccessful');
  //   }
  // });

  $.ajax({
    url: "https://elo3gczif8.execute-api.us-east-1.amazonaws.com/prod",
    type: "POST",
    crossDomain: true,
    crossOrigin: true,
    data: JSON.stringify(data),
    dataType: "json",
    success: function (response) {
      var resp = JSON.parse(response);
      alert(resp.status);
    },
    error: function (xhr, status) {
      alert("error");
    },
  });
}
