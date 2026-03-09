import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

// Fix default marker icon
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const IftarMap = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetch(`http://localhost:5000/iftarSearch?search=${search}`)
        .then(res => res.json())
        .then(data => setData(data));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search district, upazila or mosque"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
      />

      <MapContainer
        center={[24.8093, 88.9406]}
        zoom={8}
        style={{ height: "500px", width: "100%" }}
      >
        {/* OpenFreeMap tile */}
        <TileLayer
          url="https://tiles.openfreemap.org/styles/liberty/{z}/{x}/{y}.png"
          attribution="© OpenFreeMap © OpenStreetMap"
        />

        {/* Markers */}
        {data.map(item => {
          const lat = parseFloat(item.lat);
          const lng = parseFloat(item.lng);
          if (isNaN(lat) || isNaN(lng)) return null;

          return (
            <Marker key={item._id} position={[lat, lng]}>
              <Popup>
                <b>{item.mosque}</b> <br/>
                {item.upazila}, {item.district} <br/>
                Iftar: {item.iftar}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default IftarMap;