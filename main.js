// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
// ( function(){
//
//   // Select the first element from the array
//   let first = formData[ 0 ];
//   // Log the first object
//   //console.log( first );
//   // Log the string "First Name"
//   //console.log( first.label );
// } )();


// -------- Your Code Goes Below this Line --------

function fillForm(data) {
  let wrapper = document.getElementById('fields');

  console.log("Created wrapper:",wrapper);

  for (i=0;i<data.length;i++){

    console.log("Main Loop:",i);
    let newInput = document.createElement("input")
      //console.log("newInput:",newInput);
    newInput.setAttribute("type",data[i].type);
      //console.log("\tType:",data[i].type);
    newInput.setAttribute("id",data[i].id);
      //console.log("\tID:",data[i].id);
    newInput.setAttribute("placeholder",data[i].label);
      //console.log("\tPlaceholder:",data[i].label);

    console.log(newInput);

    if (data[i].type == "select") {
      console.log("The input type was 'select'")
        //console.log("\tOptions:",data[i].options);

      for (j=0;j<data[i].options.length;j++){
        console.log("sub-loop:",j);
        let newOption = document.createElement("option");
        newOption.setAttribute("value",data[i].options[j].value);
        newOption.setAttribute("label",data[i].options[j].label);
        newInput.appendChild(newOption);
        console.log(newOption);
        console.log(newInput);
      }
    console.log(newInput);
    //console.log("past the sub-loop, here's the newInput again:",newInput);

    //console.log("Wrapper:",wrapper);
    //console.log("attempting to attach to wrapper")

    }
    wrapper.appendChild(newInput);
    console.log(wrapper);
  }

}

fillForm(formData);
