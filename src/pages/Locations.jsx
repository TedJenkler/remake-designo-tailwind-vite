import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Locations() {
  return (
    <main className='mb-80'>
      <div className='flex flex-col items-center h-screen mb-10'>
        <div className='h-80 w-full'>
          <MapContainer center={["43.648233", "-79.375602"]} zoom={13} style={{ height: '100%', width: '100%', margin: 0, padding: 0 }} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={["43.648233", "-79.375602"]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className='py-20 px-6 text-center bg-bg w-full bg-locationoval bg-no-repeat bg-left-top'>
          <h1 className='px32peach mb-6'>Canada</h1>
          <p className='px15grey font-bold'>Designo Central Office</p>
          <p className='px15grey font-normal'>3886 Wellington Street</p>
          <p className='px15grey font-normal mb-6'>Toronto, Ontario M9C 3J5</p>
          <p className='px15grey font-bold'>Contact</p>
          <p className='px15grey font-normal'>P : +1 253-863-8967</p>
          <p className='px15grey font-normal'>M : contact@designo.co</p>
        </div>
      </div>
      <div className='flex flex-col items-center h-screen mb-10'>
        <div className='h-80 w-full'>
          <MapContainer center={["-30.329530", "149.788190"]} zoom={13} style={{ height: '100%', width: '100%', margin: 0, padding: 0 }} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={["-30.329530", "149.788190"]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className='py-20 px-6 text-center bg-bg w-full bg-locationoval bg-no-repeat bg-left-top'>
          <h1 className='px32peach mb-6'>Australia</h1>
          <p className='px15grey font-bold'>Designo AU Office</p>
          <p className='px15grey font-normal'>19 Balonne Street</p>
          <p className='px15grey font-normal mb-6'>New South Wales 2443</p>
          <p className='px15grey font-bold'>Contact</p>
          <p className='px15grey font-normal'>P : (02) 6720 9092</p>
          <p className='px15grey font-normal'>M : contact@designo.au</p>
        </div>
      </div>
      <div className='flex flex-col items-center h-screen mb-10'>
        <div className='h-80 w-full'>
          <MapContainer center={["51.141530", "1.297640"]} zoom={13} style={{ height: '100%', width: '100%', margin: 0, padding: 0 }} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={["51.141530", "1.297640"]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className='py-20 px-6 text-center bg-bg w-full bg-locationoval bg-no-repeat bg-left-top'>
          <h1 className='px32peach mb-6'>United Kingdom</h1>
          <p className='px15grey font-bold'>Designo UK Office</p>
          <p className='px15grey font-normal'>13  Colorado Way</p>
          <p className='px15grey font-normal mb-6'>Rhyd-y-fro SA8 9GA</p>
          <p className='px15grey font-bold'>Contact</p>
          <p className='px15grey font-normal'>P : 078 3115 1400</p>
          <p className='px15grey font-normal'>M : contact@designo.uk</p>
        </div>
      </div>
    </main>
  );
}

export default Locations;