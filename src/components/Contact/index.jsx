import React, {useState, useEffect} from 'react';
import './style.css'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Include the CSS file for mdb-react-ui-kit
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '450px',
  height: '420px',
};

const center = {
  lat: 47.6062,
  lng: -122.3321,
};


const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAXXLqOziPAgC9Zu9pxAyHaaB0cjUjb7VA',
  })

  const [map, setMap] = React.useState(null)

  // const markerPosition = {
  //   lat: 47.6062, // Replace with the actual latitude
  //   lng: -122.3321, // Replace with the actual longitude
  // };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  
    return (
      <div className='map-container'>
        {isLoaded && (
          
            <div>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            /> 
          </div>  
        )}
        <div className='storeInfo'>
        <div className='operationInfo'>
          <div>
          <h4><strong>Location:</strong></h4>
          <p>Seattle, WA, USA</p>
          <p>Phone: +1 123-456-7890</p>
          </div>
          <div>
          <h4><strong>Operation Hours</strong></h4>
          <p> Monday 1 PM - 10 PM</p>
          <p>Tuesday 1 PM - 10 PM</p>
          <p>Wednesday 1 PM - 10 PM</p>
          <p>Thursday	1 PM - 10 PM</p>
          <p>Friday	11 AM - 10 PM</p>
          <p>Saturday	11 AM - 10 PM </p>
          </div>
        </div> 
        <div className='mapIcon'>
          <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
            <MDBIcon fab icon='linkedin-in' /> LinkedIn
          </MDBBtn>
          <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
            <MDBIcon fab icon='instagram' /> Instagram
          </MDBBtn>
          <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
            <MDBIcon fab icon='facebook-f' /> Facebook
          </MDBBtn>
          <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
            <MDBIcon fab icon='twitter' /> Twitter
          </MDBBtn>
          <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
            <MDBIcon fab icon='whatsapp' /> WhatsApp
          </MDBBtn>
        </div>
        </div>
        </div>
  
    );
  };
  
  export default React.memo(Contact);
  


// const Contact = () => {
//   useEffect(() => {
//     // Initialize and add the map
//     const initMap = () => {
//       const map = new window.google.maps.Map(document.getElementById("map"), {
//         center: { lat: -25.344, lng: 131.031 },
//         zoom: 4,
//       });

//       const marker = new window.google.maps.Marker({
//         position: { lat: -25.344, lng: 131.031 },
//         map: map,
//         title: "Uluru",
//       });
//     }

//     // Load the Google Maps JavaScript API
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=MAP_PASS2&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     return () => {
//       // Clean up the script tag when the component unmounts
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Contact</h1>
//       <div id="map" style={{ height: '400px', width: '100%' }}></div>

      // <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
      //   <MDBIcon fab icon='linkedin-in' /> LinkedIn
      // </MDBBtn>

      // <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
      //   <MDBIcon fab icon='instagram' /> Instagram
      // </MDBBtn>

      // <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
      //   <MDBIcon fab icon='facebook-f' /> Facebook
      // </MDBBtn>

      // <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
      //   <MDBIcon fab icon='twitter' /> Twitter
      // </MDBBtn>

      // <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
      //   <MDBIcon fab icon='whatsapp' /> WhatsApp
      // </MDBBtn>
//     </div>
//   );
// };

// export default Contact;
