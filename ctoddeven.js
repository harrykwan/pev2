var ctjsoneven = {}
var ctjsonodd = {}
var nowjson = outputjsondata()

for (var j=0; j<nowjson.length; j++){
    for (var k=1; k<=4; k++){
         if (nowjson[j][k]){
            if (!ctjsonodd[nowjson[j][k]]) ctjsonodd[nowjson[j][k]] = 0
            if (!ctjsoneven[nowjson[j][k]]) ctjsoneven[nowjson[j][k]] = 0
            if (parseInt(nowjson[j][6])%2==1) ctjsonodd[nowjson[j][k]]++
            if (parseInt(nowjson[j][6])%2==1) ctjsoneven[nowjson[j][k]]++
         }
    }
}
