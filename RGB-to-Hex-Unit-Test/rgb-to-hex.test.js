/**
 * Created by 1234 on 12.7.2017 г..
 */
let rgbToHexColor=require('./rgb-to-hex').rgbToHexColor;
let expect=require('chai').expect;

describe("RGB to Hex color",()=>{
    it("Should return  #FF9EAA to (255, 158, 170)",()=>{
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    })
    it("Should return  #0C0D0E to (12,13,14)",()=>{
        expect(rgbToHexColor(12,13,14)).to.equal('#0C0D0E');
    })
    it("Should return  #000000 to (0,0,0)",()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })
    it("Should return  #FFFFFF to (255,255,255)",()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    })
    it("Should return  undefined for negative values",()=>{
        expect(rgbToHexColor(-1,5,18)).to.be.undefined;
    })
    it("Should return  undefined for values greater than 255",()=>{
        expect(rgbToHexColor(256,5,18)).to.be.undefined;
    })
    it("Should return  undefined for values greater than 255",()=>{
        expect(rgbToHexColor(23,256,18)).to.be.undefined;
    })
    it("Should return  undefined for values greater than 255",()=>{
        expect(rgbToHexColor(2,5,318)).to.be.undefined;
    })
    it("Should return  undefined for fractions",()=>{
        expect(rgbToHexColor(3.24,4.5,2.18)).to.be.undefined;
    })
    it("Should return  undefined for objects values",()=>{
        expect(rgbToHexColor('pesho',{name:'ani'},[])).to.be.undefined;
    })
})