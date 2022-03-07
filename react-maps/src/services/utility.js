import { town_names } from "../constants/constants";
export function getNextCounty(area) {
  debugger;
  console.log(JSON.stringify(town_names.length));
  let newIndex = town_names.map((x) => x.name).indexOf(area.name) + 1;

  return newIndex < town_names.length ? town_names[newIndex] : town_names[0];
}

export function getPreviousCounty(area) {
  let newIndex = town_names.indexOf((x) => x.name === area.name) - 1;
  return newIndex < 0 ? town_names[newIndex] : town_names[0];
}
