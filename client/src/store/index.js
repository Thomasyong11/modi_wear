//using valtio to handle state
//first import proxy from valtio
import { proxy } from "valtio";

//set the state
const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
