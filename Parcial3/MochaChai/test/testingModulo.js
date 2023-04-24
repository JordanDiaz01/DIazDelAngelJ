import { areaTriangulo } from "../src/modulo.js";
import { expect } from "chai";

describe("Testing a la funcion AreaTriangulo",()=>{
    it("Deberia de regresarme un numero ",()=>{
        let res = areaTriangulo(2,3)
        expect(res).to.be.a("number");
    })
})