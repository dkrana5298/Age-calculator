function age() {
    var d1 = document.getElementById('date1').value;
    var m1 = document.getElementById('month1').value;
    var y1 = document.getElementById('year1').value;
  
    var d2 = document.getElementById('date2').value;
    var m2 = document.getElementById('month2').value;
    var y2 = document.getElementById('year2').value;

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
    if(d>100){
     d= parseInt(d/100);
    }
    var m = m2 - m1;
    if(m>100){
      m=parseInt(m/100);
    }
    var y = y2 - y1;
   
    document.getElementById('age').innerHTML = +y+' Years, '+m+' Months '+d+' Days';
    var final_year=y + m/12 + d/365 ;
    document.getElementById('years').innerHTML="=  "+final_year.toFixed(2)+"  years";
    var final_month=y*12 + m + d/30 ;
    document.getElementById('months').innerHTML="=  "+final_month.toFixed(2)+"  months";
    var final_weeks=y*52 + m*7 + d/7;
    document.getElementById('weeks').innerHTML="=  "+final_weeks.toFixed(2)+"  weeks";
    var final_day=y*365 + m*12 + d ;
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
