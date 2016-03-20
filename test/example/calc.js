import chai from 'chai';
import Calc from './../../src/index';

describe("Calculator", ()=>{
    it("shoud get init value - zero", ()=>{
        let calc = new Calc(0);
        const mem = calc.memory();
        mem.should.be.a('Number');
        mem.should.equal(0);
    });
});
