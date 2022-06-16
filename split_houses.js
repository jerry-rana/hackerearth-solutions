
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write(foo(input));       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
function foo(input){
    let res =  input.split('\n');
    let n = res[0];
    let h = res[1].split('');
    let ville = [];

    if(n <= 20 && n >= 1 ){
        for(let x=0; x<h.length; x++){
            if(h[x] === 'H'){
                ville.push('H');
            }
            if(h[x] === '.'){
                ville.push('B');
            }
        }

        const isFence = ville.includes('B');
        if(isFence){
            return 'YES\n'+ville.join('');
        }else{
            return 'NO';
        }       

    }else{
        return 'NO\n'+ville.join('');
    }

    //return res[0]+''
}

