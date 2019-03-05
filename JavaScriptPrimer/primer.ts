import { TempConventer} from "./tempConventer";

let tuple = ["Nanjing", "raining", TempConventer.convertFtoC("38")];

console.log(`It's ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);