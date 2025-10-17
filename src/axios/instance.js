import axios from "axios";
import baseConfig from "./baseConfig";

const instance=axios.create({...baseConfig});

export default instance;