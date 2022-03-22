

console.log(soma(5))

function soma(limite) {

    let cinco = 0
    let tres = 0

    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0)
            tres += i
        if (i % 5 === 0)
            cinco += i
    }
    console.log(tres + cinco)
}