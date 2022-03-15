function option(){
    let slct = document.getElementById("option").value;
    if(slct == "opt1"){
        document.getElementById("opt1").className = "container";
        document.getElementById("opt2").className = "container d-none";
    } 
    else if(slct == "opt2"){
        document.getElementById("opt2").className = "container";
        document.getElementById("opt1").className = "container d-none";
    } 
    else {
        document.getElementById("opt2").className = "container d-none";
        document.getElementById("opt1").className = "container d-none";
        console.log("option selection none");
    }
    document.getElementById("ansBox").className = "d-none";
}

function calcOpt1(){
    let previousPrice = document.getElementById("previousPrice").value;
    let newPrice = document.getElementById("newPrice").value;
    let previousDemand = document.getElementById("previousDemand").value;
    let newDemand = document.getElementById("newDemand").value;
    
    if((previousPrice || newPrice || previousDemand || newDemand) == ""){
        alert("Please fil the inputs!")
    }else{
        let PCD = (newDemand - previousDemand)/previousDemand * 100;
        let PCP = (newPrice - previousPrice)/previousPrice * 100;
        let PED = PCD/PCP;
        if(PED<1) PED*= -1;
        let eltype = elType(PED);
        document.getElementById("ansBox").innerHTML = "<h2>Answer: </h2>The Price Elasticity Of Demand " + PED + " and Range of price elasticity of demand is "+eltype;
        document.getElementById("ansBox").className = "";
    }
}

function calcOpt2(){
    let PCD = document.getElementById("pcd").value;
    let PCP = document.getElementById("pcp").value;
    if((PCD || PCP) == ""){
        alert("Please fill all the inputs!")
    }else{
        let PED = PCD/PCP;
        if(PED<1) PED*= -1;
        let eltype = elType(PED);
        document.getElementById("ansBox").innerHTML = "<h2>Answer: </h2>The Price Elasticity Of Demand " + PED + " and The Range of price elasticity of demand is "+eltype;
        document.getElementById("ansBox").className = "";
    }
}

function elType(PED){
    let elt;
    if(PED<1) elt = "Inelastic";
    else if(PED>1) elt = "Elastic";
    else if(PED == 1) elt = "Unitary elastic";
    return elt;
}

function CEDcalcOpt1(){
    let demandA1 = document.getElementById("demandA1").value;
    let demandA2 = document.getElementById("demandA2").value;
    let priceB1 = document.getElementById("priceB1").value;
    let priceB2 = document.getElementById("priceB2").value;
    
    if((demandA1 || demandA2 || priceB1 || priceB2) == ""){
        alert("Please fill all the inputs!")
    }else{
        let PCQA = (demandA2 - demandA1)/demandA1 * 100;
        let PCPB = (priceB2 - priceB1)/priceB1 * 100;
        let CPED = PCQA/PCPB;
        document.getElementById("ansBox").innerHTML = "<h2>Answer: </h2>the cross elasticity of demand between the two products: " + CPED;
        document.getElementById("ansBox").className = "";
    }
}

function CEDcalcOpt2(){
    let PCQA = document.getElementById("PCQA").value;
    let PCPB = document.getElementById("PCPB").value;
    if((PCQA || PCPB) == ""){
        alert("Please fill all the inputs!")
    }else{
        let CPED = PCQA/PCPB;
        
        document.getElementById("ansBox").innerHTML = "<h2>Answer: </h2>the cross elasticity of demand between the two products: " + CPED;
        document.getElementById("ansBox").className = "";
    }
}


function IEDcalcOpt1(){
    let income1 = document.getElementById("income1").value;
    let income2 = document.getElementById("income2").value;
    let Qdemand1 = document.getElementById("Qdemand1").value;
    let Qdemand2 = document.getElementById("Qdemand2").value;
    
    if((income1 || income2 || Qdemand1 || Qdemand2) == ""){
        alert("Please fill all the inputs!")
    }else{
        let PCQD= (Qdemand2 - Qdemand1)/Qdemand1 * 100;
        let PCI= (income2 - income1)/income1 * 100;
        let IED =  PCQD/PCI;
        document.getElementById("ansBox").innerHTML = "<h2>Answer: </h2>the The income elasticity for good: " + IED;
        document.getElementById("ansBox").className = "";
    }
}

function IEDcalcOpt2(){
    let PCQD = document.getElementById("PCQD").value;
    let PCI = document.getElementById("PCI").value;
    if((PCQD || PCI) == ""){
        alert("Please fill all the inputs!")
    }else{
        let IED =  PCQD/PCI
        
        document.getElementById("ansBox").innerHTML = "<h2>Answer: </h2>the The income elasticity of Demand for good: " + IED;
        document.getElementById("ansBox").className = "";
    }
}



function PEScalcOpt1(){
    let inPrice = document.getElementById("inPrice").value;
    let fnlPrice = document.getElementById("fnlPrice").value;
    let inSup = document.getElementById("inSup").value;
    let fnlSup = document.getElementById("fnlSup").value;
    
    if((inPrice || fnlPrice || inSup || fnlSup) == ""){
        alert("Please fill all the inputs!")
    }else{
        let PCQS = (fnlSup - inSup)/inSup * 100;
        let PCP = (fnlPrice - inPrice)/inPrice * 100;
        let PES = PCQS/PCP;
        document.getElementById("ansBox").innerHTML = "<h2>Answer: </h2>the The Price Elasticity of Supply for good: " + PES;
        document.getElementById("ansBox").className = "";
    }
}

function PEScalcOpt2(){
    let PCQS = document.getElementById("PCQS").value;
    let PCP = document.getElementById("PCP").value;
    if((PCQS || PCP) == ""){
        alert("Please fill all the inputs!")
    }else{
        let PES = PCQS/PCP;
        document.getElementById("ansBox").innerHTML = "<h2>Answer: </h2>the The Price Elasticity of Supply for good: " + PES;
        document.getElementById("ansBox").className = "";
    }
}
// INPUT previousPrice, newPrice, previousDemand, newDemand
// 	PCD = (newDemand - previousDemand)/previousDemand * 100
// 	PCP = (newPrice - previousPrice)/previousPrice * 100
// 	PED = (+)PCD/(+)PCP

// function test(){
//     let previousPrice = document.getElementById("previousPrice").value;
//     let newPrice = document.getElementById("newPrice").value;
//     let previousDemand = document.getElementById("previousDemand").value;
//     let newDemand = document.getElementById("newDemand").value;
//     let PED = document.getElementById("PED").value;

//     let vals = {"previousPrice":previousPrice, "newPrice": newPrice, "previousDemand":previousDemand, "newDemand":newDemand, "PED":PED};
//     let emptyVal = 0;
//     let answer, outputVal, PCD, PCP;

//     for(let a in vals){
//         console.log(vals[a]);
//         if(vals[a] == ''){
//             emptyVal++;
//             answer = a;
//         } 
//     }

//     if(emptyVal == 1) {
//         console.log(answer);
//         switch(answer){
//             case "PED":
//                 PCD = (newDemand - previousDemand)/previousDemand * 100;
//                 PCP = (newPrice - previousPrice)/previousPrice * 100;
//                 outputVal = PCD/PCP;
//                 break;
//             case "newDemand":
//                 outputVal = ((PED*(newPrice-previousPrice)*previousDemand)+previousPrice**2)/previousPrice;
            

//         }
//         document.getElementById(answer).value = outputVal;
//         document.getElementById(answer).disabled = true;
//     }
// }