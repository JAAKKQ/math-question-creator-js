//--Default Difficulties--
var AddDiff = 2;
var SubDiff = 4;
var DivDiff = 6;
var MulDiff = 8;
//------------------------

module.exports = function(dir) {
    dir = dir;
    return {
        new: function(cb) {
            var a = Math.floor(Math.random() * 10) + 1;
            var b = Math.floor(Math.random() * 10) + 1;
            var c = [Math.floor(Math.random()*4)];
            var op = ["+", "-", "/", "*"][c];
            var Question = a + op + b;
            cb(Question, CalDiff(a, c, b));
        },
        diff: function(Question, cb) {
            const SplitQuestion = Question.split("+");
            cb(CalDiff(SplitQuestion[0], SplitQuestion[1], SplitQuestion[3]))
        }
    }
};

//Main function
function CalDiff(a, c, b){
    const TypeDiff = CalTypeDiff(c);
    const NumDiff = CalNumDiff(a, b);
    return CalComDiff(TypeDiff, NumDiff) / 10;
};

//Calculate type difficulty with the default values.
function CalTypeDiff(Num){
    if(Num = 0){
        return AddDiff;
    }
    if(Num = 1){
        return SubDiff;
    }
    if(Num = 2){
        return DivDiff;
    }
    if(Num = 3){
        return MulDiff;
    }
};

//Calculate question number difficulty.
function CalNumDiff(a, b){
    const First= Math.abs(a);
    const Second = Math.abs(b);
    return +[First] + +[Second];
};

//Calculate combined (CalTypeDif + CalNumDiff) difficulty.
function CalComDiff(TypeDiff, NumDiff){
    const TypeDiffAfterMult = +[TypeDiff] * +[NumDiff];
    return TypeDiffAfterMult;
}