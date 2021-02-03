function add(){
    var maths=Number(document.getElementById("maths").value);
    var Physcics=Number(document.getElementById("Physcics").value);
    var english=Number(document.getElementById("english").value);
    var urdu=Number(document.getElementById("urdu").value);
    var total;
    var obtain;
    obtain=(maths+english+Physcics+urdu);
    document.getElementById("marks").innerHTML=obtain;
}