// Write your JavaScript code here!
function displayMission () {
   fetch('https://handlers.education.launchcode.org/static/planets.json').then((response) => {
      response.json().then((json) => {
         const destination = document.getElementById('missionTarget');
         let index = Math.floor(Math.random() * 10);
         while (index >= json.length) {
            index = Math.floor(Math.random() * 10);
       }
  
       if (destination) {
         let html = `<h2>Mission Destination</h2>
                        <ol>  
                           <li>Name: ${json[index].name}</li>
                           <li>Diameter: ${json[index].diameter}</li>
                           <li>Star: ${json[index].star}</li>
                           <li>Distance from Earth: ${json[index].distance}</li>
                           <li>Number of Moons: ${json[index].moons}</li>
                        </ol>
                        <img src="${json[index].image}">`;
            destination.innerHTML = html;
       } 
       else {
          console.log('Document elements not found.');
         }
      });
   });
}

      // if (display && h2Status && liPilot && liCoPilot && liFuel & liMass) {
      //    h2status.innerHTML = 'Shuttle is ready for launch.';
      //    h2status.style.color = 'Green';
      //    display.style.visibility = 'Hidden';
      //    liPilot.innerHTML = `Pilot ${inputs[0].value} is ready for launch.`;
      //    liCoPilot.innerHTML = `CoPilot ${inputs[1].value} is ready for launch`;
      //    liFuel.innerHTML = 'Fuel level is accurate for launch';
      //    liMass.innerHTML = "Cargo mass is accurate for launch";

         // if (inputs.every((item) => item.value !== "")) {
         // }
         //    else {
         //       h2status.innerHTML = 'Shuttle not ready for launch';
         //       h2status.style.color = 'Red';
               
         // }

         // if(typeof inputs[0].value !== "string" || typeof inputs[1].value !== "string") {
         //    h2status.innerHTML = 'Shuttle not ready for launch';
         //    h2status.innerHTML = 'Red';

         // }

         // if(isNaN(Number(inputs[2].value)) || isNaN(Number(inputs[3].value))) {
         //    h2status.innerHTML = 'Shuttle not ready for launch';
         //    h2status.innerHTML = 'Red';
         // }


function validateForm(event, inputs) {
   tripRequirements(inputs);
if (inputs.every((item) => item.value !== "" )) {   
   event.preventDefault();
}
else {
   alert('All fields are required');
   event.preventDefault();
}
if (typeof inputs[0].value !== "string" || typeof inputs[1].value !== "string") {
   alert('Please enter a valid name');
   event.preventDefault(); 
}
if (isNaN(Number(inputs[2].value)) || isNaN(Number(inputs[3].value))) {
   alert('Please enter a valid number');
   event.preventDefault();
   }
}

function tripRequirements(inputs) {
   const display = document.getElementById('faultyItems');
   const h2status = document.getElementById('launchStatus');
   const liPilot = document.getElementById('pilotStatus');
   const liCoPilot = document.getElementById('copilotStatus');
   const liFuel = document.getElementById('fuelStatus');
   const liMass = document.getElementById('cargoStatus');

         if (Number(inputs[2].value) < 10000 && Number(inputs[3].value) > 10000) {
            display.style.visibility = 'visible';
            h2status.innerHTML = 'Shuttle not ready for launch';
            h2status.style.color = 'Red'
            liFuel.innerHTML = 'Fuel level too low for launch';
            liMass.innerHTML = 'Cargo mass too high for launch';
            
         } 
          else if (Number(inputs[2].value) < 10000 && Number(inputs[3].value) < 10000) {
               display.style.visibility = 'visible'
               h2status.innerHTML = 'Shuttle not ready for launch';
               h2status.style.color = 'Red';
               liFuel.innerHTML = 'Fuel level too low for launch';
               liMass.innerHTML = 'Shuttle mass low enough for launch';

            }
            else if  (Number(inputs[2].value) >= 10000 && Number(inputs[3].value) > 10000) {
               display.style.visibility = 'visible'
               h2status.innerHTML = 'Shuttle not ready for launch';
               h2status.style.color = 'Red';
               liFuel.innerHTML = 'Fuel level high enough for launch';
               liMass.innerHTML = 'Shuttle mass too high for launch';

            }
            else {
               h2status.innerHTML = 'Shuttle is ready for launch.';
               h2status.style.color = 'Green';
               display.style.visibility = 'visible';
               liPilot.innerHTML  = `Pilot ${inputs[0].value} is ready for launch`;
               liCoPilot.innerHTML = `CoPilot ${inputs[1].value} is ready for launch`;
               liFuel.innerHTML = 'Fuel level is high enough for launch';
               liMass.innerHTML = 'Cargo mass is low enough for launch';

            }

      }

function onSubmit() {
   const submit = document.getElementById('formSubmit');
   const inputs = Array.from(document.getElementsByTagName('input'));
   if (submit) {
      submit.addEventListener('click', (event) => {
         validateForm(event, inputs);
         tripRequirements(inputs);
      });
   }
   else{
      console.log('Document elements not found');
   }
}

function genesis () {
   displayMission();
   onSubmit();
}

window.onload = genesis; 



