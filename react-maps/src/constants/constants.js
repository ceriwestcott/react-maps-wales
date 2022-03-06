export const geo_url =
  "https://raw.githubusercontent.com/ceriwestcott/UK-GeoJSON/master/json/administrative/wal/topo_lad.json";

export const town_names = [
  {
    name: "Isle of Anglesey",
    welsh_name: "Ynys Mon",
    image_url: "src/media/merthyr-master-cmyk.jpg",
    population: 70440,
  },
  { name: "Gwynedd", welsh_name: "Gwynedd", population: 125171 },
  { name: "Conwy", welsh_name: "Conwy", population: 118184 },
  { name: "Denbighshire", welsh_name: "Sir Ddinbych", population: 96664 },
  { name: "Flintshire", welsh_name: "Sir y Fflint", population: 156847 },
  { name: "Wrexham", welsh_name: "Wrecsam", population: 136055 },
  { name: "Ceredigion", welsh_name: "Ceredigion", population: 72895 },
  { name: "Pembrokeshire", welsh_name: "Sir Benfro", population: 126171 },
  {
    name: "Carmarthenshire",
    welsh_name: "Sir Gaerfyrddin",
    population: 190073,
  },
  { name: "Swansea", welsh_name: "Abertawe", population: 246563 },
  {
    name: "Neath Port Talbot",
    welsh_name: "Castell-nedd Port Talbot",
    population: 144386,
  },
  { name: "Bridgend", welsh_name: "Pen-y-bont ar Ogwr", population: 147539 },
  {
    name: "Vale of Glamorgan",
    welsh_name: "Bro Morgannwg",
    population: 135295,
  },
  { name: "Cardiff", welsh_name: "Caerdydd", population: 369202 },
  {
    name: "Rhondda Cynon Taf",
    welsh_name: "Rhondda Cynon Taf",
    population: 241873,
  },
  { name: "Caerphilly", welsh_name: "Caerffili", population: 181731 },
  { name: "Blaenau Gwent", welsh_name: "Blaenau Gwent", population: 70020 },
  { name: "Torfaen", welsh_name: "Torfaen", population: 94832 },
  { name: "Monmouthshire", welsh_name: "Sir Fynwy", population: 95164 },
  { name: "Newport", welsh_name: "Casnewydd", population: 165447 },
  { name: "Powys", welsh_name: "Powys", population: 133030 },
  { name: "Merthyr Tydfil", welsh_name: "Merthyr Tudful", population: 60424 },
];

export const mapStyleConfig = {
  default: {
    fill: "#ff6961",
    outline: "#000",
    transition: "all 250ms",
  },
  hover: {
    fill: "#C1E1C1",
    outline: "none",
    transition: "all 250ms",
  },
  pressed: {
    fill: "#E42",
    outline: "none",
    transition: "all 250ms",
  },
};

export const POPULATION = "POPULATION";
