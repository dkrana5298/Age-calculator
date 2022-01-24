function age() {
    var d1 = document.getElementById('date1').value;
    d1=parseInt(d1)
    if(d1 === ""){
      alert("You can not leave date field empty: ")
      return;
    }
    var m1 = document.getElementById('month1').value;
    m1=parseInt(m1)
    if(m1 === ""){
      alert("You can not leave month field empty: ")
      return;
    }
    var y1 = document.getElementById('year1').value;
    y1=parseInt(y1)
    if(y1 === ""){
      alert("You can not leave year field empty: ")
      return;
    }
    var d2 = document.getElementById('date2').value;
    d2=parseInt(d2)
    if(d2 === ""){
      alert("You can not leave date field empty: ")
      return;
    }
    var m2 = document.getElementById('month2').value;
    m2=parseInt(m2);
    if(m2 === ""){
      alert("You can not leave month field empty: ")
      return;
    }
    var y2 = document.getElementById('year2').value;
    y2=parseInt(y2)
    if(y2 === ""){
      alert("You can not leave year field empty: ")
      return;
    }

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if(d1 > d2){
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
      
    }
    if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    
    var m = m2 - m1;
    if(y1 > y2){
      alert("You Can not put year greater then year of below:  ")
      return;
    }
    var y = y2 - y1;
    var leap=0;
    for(var i=y1 + 1; i<=y2; i++){
      if(( i % 4 == 0) && ( i % 100 != 0) || ( i % 400 == 0)){
        leap++
      }
    }
    d=d+leap;

    if(d > 30){
      m = m + 1 ;
    }
    document.getElementById('age').innerHTML = +y+' Years, '+m+' Months '+d+' Days';
    var final_year=y + m/12 + d/365 ;
    document.getElementById('years').innerHTML="=  "+final_year.toFixed(2)+"  years";
    var final_month=y*12 + m + d/30 ;
    document.getElementById('months').innerHTML="=  "+final_month.toFixed(2)+"  months";
    var final_weeks=y*52 + m*4 + d/7;
    document.getElementById('weeks').innerHTML="=  "+final_weeks.toFixed(2)+"  weeks";
    var final_day=y*365 + m*30 + d ;
    document.getElementById('days').innerHTML="=  "+final_day.toFixed(2)+"  days";
  }
  function reset(){
    var d1 = document.getElementById('date1').value=" ";
    var m1 = document.getElementById('month1').value=" ";
    var y1 = document.getElementById('year1').value=" ";
  
    var d2 = document.getElementById('date2').value=" ";
    var m2 = document.getElementById('month2').value=" ";
    var y2 = document.getElementById('year2').value=" ";
  }  
