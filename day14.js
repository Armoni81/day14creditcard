//last four digits only need to be shown 
// for example 098502348503 should return 
// ########8503

function maskify(cc) {
    let Z = cc.length-4
    let maskCC = ''
    console.log(Z)
    for (i = 0; i< cc.length;i++){
        console.log(cc[i])


        if (i< Z){
            maskCC += '#'
        } 
        else {
            maskCC += cc[i]
        }
    }

return maskCC
}

console.log(maskify('123456789894237'))