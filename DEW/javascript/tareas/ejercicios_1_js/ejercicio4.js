function while_loop(){

    let result = 1, arg1, arg2, res1, res2;
    console.log(result);
    while (result > 0){
        arg1 = Math.random() - 0.5;
        if (arg1 < 0){
            continue;
        }
        res1 = Math.sqrt(arg1);
        arg2 = Math.random();
        sum_operation = arg1 + arg2;
        if (sum_operation === 0){
            break;
        }
        res2 = res1/sum_operation;
        result = res1 + res2;
        console.log(result);
    }
}