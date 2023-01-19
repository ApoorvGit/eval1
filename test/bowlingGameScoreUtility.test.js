const { scoreCalculator }=require("../bowlingGameScoreUtility");

describe("Bowling Score calculator", ()=>{
    describe("Calculates score of a 10 frame bowling game", ()=>{
        it("should provide score when number of frames is 10",()=>{
            const result=scoreCalculator([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
            expect(result).toEqual(90);
        });
        it("should provide score when number of frames is 10",()=>{
            const result=scoreCalculator([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            expect(result).toEqual(16);
        });
        it("should throw an error if number of frames are more than 10",()=>{
            expect(()=>scoreCalculator([100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10])).toThrow("Number of frames more than 10");
        });
        it("should throw an error if number of frames are less than 10",()=>{
            expect(()=>scoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10])).toThrow("Number of frames less than 10");
        });
    });
});