import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
    iconUrl: "/images/station-marker.png",
    iconSize: [32, 32],
})

const millenniumLine: [number, number][] = [
    [49.26649296431969, -123.07906210425658],
    [49.263038603536394, -123.06871938679667],
    [49.25912003358851, -123.04535854473531],
    [49.26103991997407, -123.0328912024067],
    [49.26511399820594, -123.01358162939212],
    [49.2666494535823, -123.00171533891373],
    [49.26485729774135, -122.98211505822772],
    [49.25931200401528, -122.96391407172085],
    [49.254747027862656, -122.93918000240704],
    [49.25360123700242, -122.91809198706413],
    [49.24858595340344, -122.8970198907648],
    [49.2614826130326, -122.88982948706361],
    [49.27817795617795, -122.84599791589866],
    [49.27734296155179, -122.82819000240586],
    [49.27405703394542, -122.80011106693767],
    [49.28046735885667, -122.79385232939133],
    [49.285775140520926, -122.79156755822675],
]

const expoLine: [number, number][][] = [
    [
        [49.286000832162614, -123.11169213450881],
        [49.28567174247698, -123.12020390240559],
        [49.28346683679188, -123.11605840055539],
        [49.27970046112086, -123.10977610240583],
        [49.273304972438865, -123.10032854473462],
        [49.26276300241943, -123.0692579600782],
        [49.24841824311864, -123.0559065735716],
        [49.24445019190172, -123.046086636253],
        [49.23841419279167, -123.03175777250503],
        [49.229905701852644, -123.01264034473664],
        [49.22599043224243, -123.00386369816673],
        [49.220172177636734, -122.98782977226368],
        [49.21247957113004, -122.95912358706607],
        [49.20007572796733, -122.94888156987331],
        [49.20162020653655, -122.9126182735738],
        [49.20495094687258, -122.9061414600808],
        [49.22475512687768, -122.88943906007991],
        [49.23335364574277, -122.88252990849978],
        [49.24858595340344, -122.8969769754218],
        [49.25354521423976, -122.91805980055688],
    ],
    [
        [49.20495094687258, -122.9061414600808],
        [49.20461094585648, -122.8743599754238],
        [49.199078540675885, -122.8505029410376],
        [49.18970690960439, -122.84788852939558],
        [49.182860003484315, -122.84477648392571],
    ],
]

const stationMarkers: { name: string, coordinates: [number, number] }[] = [
    // Millennium 
    { name: "VCC - Clark Station", coordinates: [49.26649296431969, -123.07906210425658] },
    { name: "Commercial - Broadway Station", coordinates: [49.263038603536394, -123.06871938679667] },
    { name: "Renfrew Station", coordinates: [49.25912003358851, -123.04535854473531] },
    { name: "Rupert Station", coordinates: [49.26103991997407, -123.0328912024067] },
    { name: "Gilmore Station", coordinates: [49.26511399820594, -123.01358162939212] },
    { name: "Brentwood Town Centre Station", coordinates: [49.2666494535823, -123.00171533891373] },
    { name: "Holdom Station", coordinates: [49.26485729774135, -122.98211505822772] },
    { name: "Sperling - Burnaby Lake Station", coordinates: [49.25931200401528, -122.96391407172085] },
    { name: "Lake City Way Station", coordinates: [49.254747027862656, -122.93918000240704] },
    { name: "Production Way - University Station", coordinates: [49.25360123700242, -122.91809198706413] },
    { name: "Lougheed Town Centre Station", coordinates: [49.24858595340344, -122.8970198907648] },
    { name: "Burquitlam Station", coordinates: [49.2614826130326, -122.88982948706361] },
    { name: "Moody Centre Station", coordinates: [49.27817795617795, -122.84599791589866] },
    { name: "Inlet Centre Station", coordinates: [49.27734296155179, -122.82819000240586] },
    { name: "Coquitlam Central Station", coordinates: [49.27405703394542, -122.80011106693767] },
    { name: "Lincoln Station", coordinates: [49.28046735885667, -122.79385232939133] },
    { name: "Lafarge Lake - Douglas Station", coordinates: [49.285775140520926, -122.79156755822675] },
    //Expo
    { name: "Sapperton Station", coordinates: [49.22475512687768, -122.88943906007991] },
    { name: "Braid Station", coordinates: [49.23335364574277, -122.88252990849978] },
    { name: "Columbia Station", coordinates: [49.20495094687258, -122.9061414600808] },
    { name: "Scott Road Station", coordinates: [49.20461094585648, -122.8743599754238] },
    { name: "Gateway Station", coordinates: [49.199078540675885, -122.8505029410376] },
    { name: "Surrey Central Station", coordinates: [49.18970690960439, -122.84788852939558] },
    { name: "King George Station", coordinates: [49.182860003484315, -122.84477648392571] },
    { name: "New Westminster Station", coordinates: [49.20162020653655, -122.9126182735738] },
    { name: "22nd Street Station", coordinates: [49.20007572796733, -122.94888156987331] },
    { name: "Edmonds Station", coordinates: [49.21247957113004, -122.95912358706607] },
    { name: "Royal Oak Station", coordinates: [49.220172177636734, -122.98782977226368] },
    { name: "Metrotown Station", coordinates: [49.22599043224243, -123.00386369816673] },
    { name: "Patterson Station", coordinates: [49.229905701852644, -123.01264034473664] },
    { name: "Joyce - Collingwood Station", coordinates: [49.23841419279167, -123.03175777250503] },
    { name: "29th Ave Station", coordinates: [49.24445019190172, -123.046086636253] },
    { name: "Nanaimo Station", coordinates: [49.24841824311864, -123.0559065735716] },
    { name: "Commercial - Broadway Station", coordinates: [49.26276300241943, -123.06932233309269] },
    { name: "Main Street - Science World Station", coordinates: [49.273304972438865, -123.10032854473462] },
    { name: "Stadium - Chinatown Station", coordinates: [49.27970046112086, -123.10977610240583] },
    { name: "Granville Station", coordinates: [49.28346683679188, -123.11605840055539] },
    { name: "Burrard Station", coordinates: [49.28567174247698, -123.12020390240559] },
    { name: "Waterfront Station", coordinates: [49.286000832162614, -123.11169213450881] },
]

const tealOptions = { color: '#00FADD' }
const blueOptions = { color: '#2872C7' }

const Map = () => {
    return (
        <MapContainer
            style={{ height: '90vh' }}
            center={[49.232587, -122.977568]} zoom={12} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/Mariessa-Pinto/Expo-Line-and-Millennium-Line.git">By Mariessa Pinto</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                stationMarkers && stationMarkers.map((station, index) => {
                    return (
                        <div key={index}>
                            <Marker position={station.coordinates} icon={icon}>
                                <Popup>
                                    {station.name}
                                </Popup>
                            </Marker>
                        </div>
                    )
                })
            }
            <Polyline pathOptions={tealOptions} positions={millenniumLine} />
            <Polyline pathOptions={blueOptions} positions={expoLine} />
        </MapContainer>
    )
}

export default Map;