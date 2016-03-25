"use strict";

import 'chai';

import Calc from './../../src/index';

describe("Calculator", ()=>{

    it("shoud get init value - zero", ()=>{
        let calc = new Calc(0);
        const mem = calc.memory();
        mem.should.be.a('Number');
        mem.should.equal(0);
    });

    it("should return a register", ()=>{
        let calc = new Calc(10);
        let mem = calc.memory();
        mem.should.be.a('Number');
        mem.should.equal(10);
    });

    it("should setup a register", ()=>{
        let calc = new Calc(0);
        let mem = calc.memory(9).memory();
        mem.should.be.a('Number');
        mem.should.equal(9);
    });

    it("should add 2 to register", ()=>{
        let calc = new Calc(0);
        let mem = calc.add(2).memory();
        mem.should.be.a('Number');
        mem.should.equal(2);
    });

    it("should reset a register", ()=>{
        let calc = new Calc(0);
        let mem = calc.add(2).reset().memory();

        mem.should.be.a('Number');
        mem.should.equal(0);
    });

    it("should remember a history with results", ()=>{
        let calc = new Calc(0);
        let mem = calc
            .add(2)
            .add(3)
            .memory();
        let history = calc.history();
        expect(history).to.deep.equal([[2, 0], [3, 2]]);
        mem.should.be.a('Number');
        mem.should.equal(5);
    });

    it("should setup a history", ()=>{
        let calc = new Calc(0);
        let mem = calc
            .add(2)
            .add(3)
            .memory();
        calc.history([-1,-1]);
        let history = calc.history();
        expect(history).to.deep.equal([[-1,-1]]);
        mem.should.be.a('Number');
        mem.should.equal(5);
    });

    it("should remember a history with results", ()=>{
        let calc = new Calc(0);
        let mem = calc
            .add(2)
            .add(3)
            .memory();
        let history = calc.history();
        expect(history).to.deep.equal([[2, 0], [3, 2]]);
        mem.should.be.a('Number');
        mem.should.equal(5);
    });

});
