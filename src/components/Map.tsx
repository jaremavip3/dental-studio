import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Map() {
  const apiKey = process.env.GOOGLE_MAP_API_KEY || "";
  const location = process.env.GOOGLE_MAP_CLINIC_LOCATION || "";
  return (
    <section id="map" className="w-full ">
      <GoogleMapsEmbed
        apiKey={apiKey}
        height="300px"
        width="100%"
        mode="place"
        q={location}
        style="border:0"
        zoom="14"
        loading="eager"
      />
    </section>
  );
}
