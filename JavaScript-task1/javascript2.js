function markesProgram(){
    let mark=85;
    let grade;
    if(mark<50){
        grade='Fail';
    }
    else if(mark>=50 &&mark<=59){
        grade='D';
    }
    else if(mark>=60 &&mark<=59){
        grade='C';
    }
    else if(mark>=70 &&mark<=59){
        grade='B';
    }
    else if(mark>=80 &&mark<=59){
        grade='A';
    }
    else if(mark>=90 &&mark<=59){
        grade='A+';
    }
    else{
        grade="Invalid mark"
    }
   document.write(`Mark: ${mark} :${grade}`)
}