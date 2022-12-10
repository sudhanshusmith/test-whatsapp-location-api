// const successCallback = (position) => {
//   console.log(position);
// };

// const errorCallback = (error) => {
//   console.log(error);
// };

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);









let activeNumber = 917870565464


// Fetching User Address Sucessfully by using Open Cage Reverse Geocoding API

function fetchLocation(){

  const successfulLookup = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=c2b866cbbf784197830fa18ed8445727`)
      .then(response => response.json())
      .then(data => {
        // alert(data.results[0].formatted)
        // document.querySelector(".allow").innerText = data.results[0].formatted

        let location = data.results[0].formatted;
        
        

        let callAmbulance = document.querySelectorAll(".call")
        for (let i=0; i < callAmbulance.length; i++) {
          let text = callAmbulance[i].innerText
          let combined = "Please send " + text + " at " + location
          let attachLocation = combined.replace(/ /g, "%20")
          let whatsappMsg = (`https://wa.me/${activeNumber}?text=${attachLocation}`)
          callAmbulance[i].href=whatsappMsg
          }
        
        document.querySelector(".di").style.display = "block";

      });
  };

  const errorCallback = (error) => {
    document.querySelector(".block").innerText = "Unable to Fetch Your Location, Kindly Give Your Location access!!"
  };

  window.navigator.geolocation
    .getCurrentPosition(successfulLookup, errorCallback);

}



// let callAmbulance = document.querySelectorAll(".call")

// for (let i=0; i < callAmbulance.length; i++) {
// callAmbulance[i].addEventListener("click", fetchLocation)
// }

let callAmbulance = document.querySelector(".initiate");
callAmbulance.addEventListener("click", fetchLocation)


























// Fetching User Locality Sucessfully with Reverse Geocoding withou any Paid API

// function fetchLocation() {
  

//   const successCallback = (position) => {
//     const lat = position.coords.latitude ;
//     const long = position.coords.longitude ;
//     const geoApiUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en'

//     fetch(geoApiUrl)
//     .then(res => res.json())
//     .then(data => {
//       // console.log(data)
//       first = data.localityInfo.administrative[3].name
//       second = data.localityInfo.administrative[2].name
//       third = data.localityInfo.administrative[1].name
//       forth = data.localityInfo.administrative[0].name
//       document.querySelector(".allow").textContent = first + ", " + second +  ", " + third +  ", " + forth
//     })
//   };

//   const errorCallback = (error) => {
//     document.querySelector(".block").innerText =
//       "Unable to Fetch Your Location, Kindly Give Your Location access!!";
//   };

//   window.navigator.geolocation.getCurrentPosition(
//     successCallback,
//     errorCallback
//   );
// }

// document.querySelector(".call").addEventListener("click", fetchLocation);
