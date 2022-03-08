//--Default Difficulties--
var AddDiff = 1;
var SubDiff = 2;
var DivDiff = 3;
var MulDiff = 4;
//------------------------

module.exports = function() {

  return {
    New: function(cb) {
        var a = Math.floor(Math.random() * 10) + 1;
        var b = Math.floor(Math.random() * 10) + 1;
        var c = [Math.floor(Math.random()*4)];
        var op = ["+", "-", "/", "*"][c];
        cb(Question, CalDiff(a, c, b));
    },
    CalDiff: function(a, b, c, cb) {
        cb(CalDiff(a, c, b))
    }
  }
};

//Main function
function CalDiff(a, c, b){
    const TypeDiff = CalTypeDiff(c);
    const NumDiff = CalNumDiff(a, b);
    return CalComDiff(TypeDiff, NumDiff);
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
    const a = Math.abs(a);
    const b = Math.abs(b);
    return +[a] + +[b];
};

//Calculate combined (CalTypeDif + CalNumDiff) difficulty.
function CalComDiff(TypeDiff, NumDiff){
    const TypeDiffAfterMult = +[TypeDiff] * +[NumDiff / 2];
    return TypeDiffAfterMult;
}