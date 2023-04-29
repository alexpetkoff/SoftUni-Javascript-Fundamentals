function addAndSubstract(int1, int2, int3) { 

    sum();
    substract();
    
    function sum() {
        let result = int1 + int2;
        return result;
    }

    function substract() {
        let result = sum() - int3;
        console.log(result);
    }

}

addAndSubstract(1, 17, 30);