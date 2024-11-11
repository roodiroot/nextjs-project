import { YMaps, Map, ZoomControl, Placemark } from "@pbe/react-yandex-maps";

const MapComponent = () => {
  return (
    <YMaps
      query={{
        apikey: "d259a9d4-d627-4f32-981c-ee0d1bd85650",
        lang: "ru_RU",
      }}
    >
      <div className="absolute inset-0">
        <Map
          className="w-full h-full"
          defaultState={{
            center: [55.706715, 37.66203],
            zoom: 17,
          }}
        >
          <ZoomControl options={{ position: { top: 10, left: 5 } }} />
          <Placemark geometry={[55.706715, 37.66203]} />
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;
