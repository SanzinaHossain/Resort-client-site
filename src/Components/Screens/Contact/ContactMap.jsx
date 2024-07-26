import GoogleMapReact from "google-map-react"
const AnyReactComponent = ({ text }) => <div className="text-black">{text}</div>
export default function ContactMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  }
  return (
    <div className="lg:h-[100vh] h-[50vh] w-[100%] mt-10">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}
