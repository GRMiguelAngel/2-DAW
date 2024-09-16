function three_var_control(){

    let array = [
    parseFloat(document.getElementById("num1_ejer1").value),
    parseFloat(document.getElementById("num2_ejer1").value),
    parseFloat(document.getElementById("num3_ejer1").value)
    ]

    if (lower_than(array,0)){
        message = "Error: hay variables con valores negativos.";
    } 
    else if (equal_to(array,0)){
        message = "Error: todas las variables son iguales a cero.";
    }
    else if (greater_than(array, 10) && diferent_than(array)){
        message = "Error: la suma total de las variables es mayor a 10, siendo todas estas diferentes."
    }
    else {
        message = "Todo esta correcto."
    }
    document.getElementById("result1").textContent = message;
    console.log(message);
}

function lower_than(all_nums, limit)
{
    is_lower = false;
    for (index = 0; index < all_nums.length; index++){
        if (all_nums[index] < limit){
            is_lower = true;
            break;
        }
    }

    return is_lower;
}

function equal_to(all_nums, comparator_num)
{
    is_equal = true;
    for (index = 0; index < all_nums.length; index++){
        if (all_nums[index] != comparator_num){
            is_equal = false;
            break;
        }
    }
    return is_equal;
}

function greater_than(all_nums, limit)
{
    is_greater = false;
    num_sum = all_nums[0];
    for (index = 1; index < all_nums.length; index++){
        num_sum += all_nums[index];
        }
    if (num_sum > limit){
        is_greater = true;
    }
    return is_greater;
    }


function diferent_than(all_nums)
{
    return equal_to(all_nums,all_nums[1]) && equal_to(all_nums,all_nums[2]) && equal_to(all_nums,all_nums[3]);
}