document.querySelector("#headCircle1").addEventListener("mouseover",  alfaHighLight)
document.querySelector("#headCircle1").addEventListener("mouseout", alfaUnHighLight)

function alfaHighLight(){
    console.log("alfaHighLight");
    document.querySelector("#headCircle1").style.fill="	#3cff00"
}

function alfaUnHighLight(){
    console.log("alfaUnHighLight");
    document.querySelector("#headCircle1").style.fill=" #28a801";
}

document.querySelector("#headCircle2").addEventListener("mouseover",  deltaHighLight)
document.querySelector("#headCircle2").addEventListener("mouseout", deltaUnHighLight)

function deltaHighLight(){
    console.log("deltaHighLight");
    document.querySelector("#headCircle2").style.fill="   #3cff00"
}

function deltaUnHighLight(){
    console.log("deltaUnHighLight");
    document.querySelector("#headCircle2").style.fill=" #28a801";
}


document.querySelector("#headCircle3").addEventListener("mouseover", bravoHighLight)
document.querySelector("#headCircle3").addEventListener("mouseout", bravoUnHighLight)

function bravoHighLight(){
    console.log("bravoHighLight");
    document.querySelector("#headCircle3").style.fill="	#3cff00"
}

function bravoUnHighLight(){
    console.log("bravoUnHighLight");
    document.querySelector("#headCircle3").style.fill=" #28a801";
}


document.querySelector("#headCircle1").addEventListener("click", alfaInfo)
function alfaInfo(){
    console.log("alfaInfo")
    document.querySelector(".info-text > h2").textContent = "Kæmp"
    document.querySelector(".info-text > article > p").textContent = "Hold kampen på jorden, måger trives bedst i luften. Den bedste måde at gå til angreb, er ved først at lave en afledningsmanøvre. Peg ud i luften og sig 'Er det et klaver lavet ud af krapper?', når mågen kigger efter klaveret, så angriber du!" 
}

document.querySelector("#headCircle2").addEventListener("click", deltaInfo)
function deltaInfo(){
    console.log("deltaInfo")
    document.querySelector(".info-text > h2").textContent = "Deeskaler"
    document.querySelector(".info-text > article > p").textContent = "For at deeskalere situationen når du står ansigt til ansigt med en farlig måge, må du tilbyde den noget mad. Så sørg altid for at have en krabbe med i lommen." 
}

document.querySelector("#headCircle3").addEventListener("click", bravoInfo)
function bravoInfo(){
    console.log("bravoInfo")
    document.querySelector(".info-text > h2").textContent = "Identificer"
    document.querySelector(".info-text > article > p").textContent = "Der er forskel på normale måger, og mobiliserede mmåger. Dem du skal passe på, vil altid flyve i flokke af 11, i en 4-4-2 formation" 
}








