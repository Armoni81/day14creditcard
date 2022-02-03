//last four digits only need to be shown 
// for example 098502348503 should return 
// ########8503

function maskify(cc) {
    let Z = cc.length-4
    for (i = 0; i<= cc.length;i++){
        console.log(cc[i] ='#')


        if (i >cc.length){
           //console.log(cc[i] ='#') 
           break;
        } 
    }

return cc
}
maskify('9676999')