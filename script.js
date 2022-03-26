function calclulate()
{
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;
    let r = parseInt(w)/(parseFloat(h)*parseFloat(h));
    let a = r.toFixed(2);
    document.getElementById("display").innerHTML = a;
}

 function cal()
 {
     let wtwo = document.getElementById("weighttwo").value;
     let h2  =  document.getElementById("heightcm").value;
     let ten = 100 ;
     let meter = h2/ ten ;
     let rs =parseInt(wtwo)/(parseFloat(meter)*parseFloat(meter));
     let q = rs.toFixed(2);
    
     document.getElementById("display").innerHTML = q;
     
}