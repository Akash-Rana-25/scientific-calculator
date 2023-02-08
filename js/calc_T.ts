let isComputed:boolean= false;
let isDecimalLegal:boolean = true;
let Operator:boolean = true;
const result:any =(document.getElementById('result')as HTMLFormElement);
let memory: Array<string>  = [];

if (memory.length == 0) {

    (document.getElementById("mr") as HTMLButtonElement).disabled = true;
    (document.getElementById("mc") as HTMLButtonElement).disabled = true;

}
function display(val:any) {

    // console.log(val,'first isComputed'+isComputed);


    if(val === ')' && !(result.value.toString().includes('('))){
        return;
    }

    if ((val === '+' || val === '-' || val === '*' || val === '/') && Operator === false) {
        return;
    } // check first value is oprator
    if ((val === '+' || val === '-' || val === '*' || val === '/') && Operator === true) {
        Operator= false
        isDecimalLegal = true;
        // console.log('first '+Operator);

    } else {
        Operator= true;
        // console.log('second '+Operator);
    }
    if(val === '.'){
        if(isDecimalLegal === false){
            return;
        }else{
            isDecimalLegal = false;
        }
    }

    if (isComputed === false) {
        // console.log(val,'Second isComputed'+isComputed);

        result.value += val;
    }
    else if ((val === '+' || val === '-' || val === '*' || val === '/' ) && isComputed === true) {
        result.value += val;
        isComputed = false;
        // console.log('therd '+Operator);
    }
    else {
        result.value = val;
        isComputed = false;
        // console.log('forth '+Operator);
    }
  
    if ((document.getElementById('result')as HTMLFormElement).value != '') {
        (document.getElementById("c") as HTMLButtonElement).style.display = "none";
        (document.getElementById("ce") as HTMLButtonElement).style.display = "block";
    } else {
        (document.getElementById("ce") as HTMLButtonElement).style.display = "none";
        (document.getElementById("c") as HTMLButtonElement).style.display = "block";
    }

}





function fe_btn() {
    result.value = Number(result.value).toExponential();

}
function memoryFunction(opration:string) {

    (document.getElementById("mr") as HTMLButtonElement).disabled = false;
    (document.getElementById("mc") as HTMLButtonElement).disabled = false;

    let num:any = result.value;
    let ans1:any = 0;
    switch (opration) {

        case 'ms':
            memory.push(num);
            console.log(memory);
            localStorage.setItem("memory", num);

            break;
        case 'mc':
            memory = [];
            console.log(memory);
            break;

        case 'mr':
            ans1 = localStorage.getItem("memory");
            console.log(memory);

            break;

        case 'm_plus':
            // if (memory.length == 0) {
            memory.push(num);
            clearScreen();
            // console.log(memory);
            // } else {
            let a:any;
            ans1 = localStorage.getItem("memory");
            a = Number(ans1) + Number(num);
            localStorage.setItem("memory", a);
            console.log(a);
            console.log(memory);
            // }

            break;
        case 'm_minus':

            memory.push(num);
            clearScreen();

            let a1:any;
            ans1 = localStorage.getItem("memory");
            a1 = Number(ans1) - Number(num);
            localStorage.setItem("memory", a1);
            console.log(a1);
            console.log(memory);
            // }
            break;

        default:
            return 0;
    }
    (document.getElementById('result')as HTMLFormElement).value = ans1
    return ans1;
}


let on:number= 1;
function showrows() {
    on++;
    if (on % 2 == 0) {
        (document.getElementById("x_squre") as HTMLButtonElement).style.display = "none";
        (document.getElementById("sqrt") as HTMLButtonElement).style.display = "none";
        // (document.getElementById("**").style.display = "none";
        (document.getElementById("10squre") as HTMLButtonElement).style.display = "none";
        // (document.getElementById("log").style.display = "none";
        (document.getElementById("in") as HTMLButtonElement).style.display = "none";

        (document.getElementById("x3") as HTMLButtonElement).style.display = "block";
        (document.getElementById("3sqrt") as HTMLButtonElement).style.display = "block";
        // (document.getElementById("y_sqrt").style.display = "block";
        (document.getElementById("xcube") as HTMLButtonElement).style.display = "block";
        // (document.getElementById("log_y").style.display = "block";
        (document.getElementById("ecube") as HTMLButtonElement).style.display = "block";



        (document.getElementById("sin") as HTMLButtonElement).style.display = "none";
        (document.getElementById("cos") as HTMLButtonElement).style.display = "none";
        (document.getElementById("tan") as HTMLButtonElement).style.display = "none";
        (document.getElementById("sec") as HTMLButtonElement).style.display = "none";
        (document.getElementById("csc") as HTMLButtonElement).style.display = "none";
        (document.getElementById("cot") as HTMLButtonElement).style.display = "none";

        (document.getElementById("sin1") as HTMLButtonElement).style.display = "block";
        (document.getElementById("cos1") as HTMLButtonElement).style.display = "block";
        (document.getElementById("tan1") as HTMLButtonElement).style.display = "block";
        (document.getElementById("sec1") as HTMLButtonElement).style.display = "block";
        (document.getElementById("csc1") as HTMLButtonElement).style.display = "block";
        (document.getElementById("cot1") as HTMLButtonElement).style.display = "block";
    } else {
        (document.getElementById("x_squre") as HTMLButtonElement).style.display = "block";
        (document.getElementById("sqrt") as HTMLButtonElement).style.display = "block";
        (document.getElementById("**") as HTMLButtonElement).style.display = "block";
        (document.getElementById("10squre") as HTMLButtonElement).style.display = "block";
        // (document.getElementById("log").style.display = "block";
        (document.getElementById("in") as HTMLButtonElement).style.display = "block";

        (document.getElementById("x3") as HTMLButtonElement).style.display = "none";
        (document.getElementById("3sqrt") as HTMLButtonElement).style.display = "none";
        // (document.getElementById("y_sqrt").style.display = "none";
        (document.getElementById("xcube") as HTMLButtonElement).style.display = "none";
        // (document.getElementById("log_y").style.display = "none";
        (document.getElementById("ecube") as HTMLButtonElement).style.display = "none";



        (document.getElementById("sin") as HTMLButtonElement).style.display = "block";
        (document.getElementById("cos") as HTMLButtonElement).style.display = "block";
        (document.getElementById("tan") as HTMLButtonElement).style.display = "block";
        (document.getElementById("sec") as HTMLButtonElement).style.display = "block";
        (document.getElementById("csc") as HTMLButtonElement).style.display = "block";
        (document.getElementById("cot") as HTMLButtonElement).style.display = "block";

        (document.getElementById("sin1") as HTMLButtonElement).style.display = "none";
        (document.getElementById("cos1") as HTMLButtonElement).style.display = "none";
        (document.getElementById("tan1") as HTMLButtonElement).style.display = "none";
        (document.getElementById("sec1") as HTMLButtonElement).style.display = "none";
        (document.getElementById("csc1") as HTMLButtonElement).style.display = "none";
        (document.getElementById("cot1") as HTMLButtonElement).style.display = "none";
    }

}
function clearScreen() {

    (document.getElementById('result')as HTMLFormElement).value = ''

    if ((document.getElementById('result')as HTMLFormElement).value != '') {
        (document.getElementById("c") as HTMLButtonElement).style.display = "none";
        (document.getElementById("ce") as HTMLButtonElement).style.display = "block";
    } else {
        (document.getElementById("ce") as HTMLButtonElement).style.display = "none";
        (document.getElementById("c") as HTMLButtonElement).style.display = "block";
    }

}
function solve() {

    let x:any =  (document.getElementById('result')as HTMLFormElement).value
    let y:any = eval(x);
    isComputed = true;

    (document.getElementById('result')as HTMLFormElement).value = y

    return y


}
function backspace() {
    (document.getElementById('result')as HTMLFormElement).value = result.value.slice(0, -1);
}



function mathfun(math_obj:string) {
    let z:any = result.value;
    let ans:any;

    switch (math_obj) {
        case 'dfg':
            ans = z * 180 / Math.PI
            break
        case 'log':
            ans = Math.log10(z);
            break;
        case 'in':
            ans = Math.log(z);
            break;
        case 'exp':
            ans = z.toExponential();
            break;
        case 'pi':
            ans = Math.PI;
            break;
        case 'e':
            ans = Math.E;
            break;
        case 'sqrt':
            ans = Math.sqrt(z);
            break;

        case '3sqrt':
            ans = Math.cbrt(z);
            break;

        case 'x_squre':
            ans = Math.pow(z, 2);
            break;

        case 'x3':
            ans = Math.pow(z, 3);
            break;

        case '10squre':
            ans = Math.pow(10, z);
            break;
        case 'xcube':
            ans = Math.pow(2, z);
            break;
        case 'ecube':
            let e;
            e = Math.E;
            ans = Math.pow(e, z);
        case 'fact':
            let factorial = (number:number) => {
                let temp = 1;
                for (let i = 2; i <= number; i++) {
                    temp = temp * i;
                }
                return temp;
            }
            ans = factorial(z);
            break;
        case 'one&half':
            ans = 1 / z;
            break;

        // function dropdown 
        case '|x|':
            ans = Math.abs(z);
            break;
        case 'rand':
            ans = Math.random();
            break;
        case 'ceil':
            ans = Math.ceil(z);
            break;
        case 'floor':
            ans = Math.floor(z);
            break;

        // Trigonometry drop down 

        case 'sin':
            ans = Math.sin(z);
            break;
        case 'cos':
            ans = Math.cos(z);
            break;
        case 'tan':
            ans = Math.tan(z);
            break;

        case 'hyp':
            ans = Math.hypot(z);
            break;
        case 'sec':
            ans = 1 / Math.cos(z);
            break;

        case 'csc':
            ans = 1 / Math.sin(z);
            break;
        case 'cot':
            ans = 1 / Math.tan(z);
            break;
        case 'plus_or_minus':
            ans = z * -1;
            break;
        default:
            return 0;
    }
    (document.getElementById('result')as HTMLFormElement).value = ans


    return ans;
}