const scoreCalculator=(pinsDownArray)=>{
    let frames=[];
    let frameCount=0;
    let totalScore=0;
    for(let i=0;i<pinsDownArray.length;i++){
        let currentFrameScore=0;
        if(frameCount==10){
            if(pinsDownArray[i]==10){
                totalScore+=10;
                i+=1;
            }else{
                if(i+1<pinsDownArray.length){
                    totalScore+=10;
                    i+=1;
                }
            }
        }
        if(pinsDownArray[i]==10){
            currentFrameScore=10+pinsDownArray[i+1]+pinsDownArray[i+2];
            frames.push([10, pinsDownArray[i+1], pinsDownArray[i+2]]);
            frameCount+=1;
        }else if(i+2<pinsDownArray.length&&pinsDownArray[i]+pinsDownArray[i+1]==10){
            currentFrameScore=10+pinsDownArray[i+2];
            i+=1;
            frames.push([pinsDownArray[i], pinsDownArray[i+1], pinsDownArray[i+2]]);
            frameCount+=1;
        }else if(i+1<pinsDownArray.length){
            currentFrameScore=pinsDownArray[i]+pinsDownArray[i+1];
            i+=1;
            frames.push([pinsDownArray[i], pinsDownArray[i+1]]);
            frameCount+=1;
        }
        totalScore+=currentFrameScore;
        
    }
    if(frameCount>10) throw new Error("Number of frames more than 10");
    if(frameCount<10) throw new Error("Number of frames less than 10");
    return totalScore;
};
console.log(scoreCalculator([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
module.exports={
    scoreCalculator
};