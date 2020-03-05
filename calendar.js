module.exports.dynamicTemplate =function(session){
      try{
        var MonthsArray = ["Jan", "Feb", "Mar", "Apr", "May",
                          "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var WeekArray = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
        var currentYear = new Date().getFullYear();
        var msg ="";
        var monthCounter= 0;
        for(var x=0;x<12;x++){           
          var firstDay = (new Date(currentYear,x)).getDay();         
          msg +="<div style='width:24%;float:left;margin-right:2px'><div style='width: 100%;background: #1abc9c;text-align: center;'>" 
          +"<ul style='margin: 0;  padding: 0;'>"
            +"<li style='color: white;font-size: 10px;text-transform: uppercase;letter-spacing:1px;'>"
            +MonthsArray[x]+" - "
            +"<span style='font-size:10px'>"
            +currentYear +"</span>"
            +"</li>"
            +"</ul>"
            +"</div>"
            +" <ul style='margin: 0;padding: 0px 0;background-color: #ddd;'>";
            for(var w = 0;w<WeekArray.length;w++){
              msg += "<li style='display: inline-block;width: 13.6%;color: #666;text-align: center;font-size:8px;'>";
              msg+= WeekArray[w]+"</li>";
            }            
            msg+="</ul>"
            +"<ul style='padding: 6px 0;background: #eee;margin: 0;'>";
            var nod = 32 - new Date(currentYear,x,32).getDate(); 
            var date = 1; 
            for(var d =0;d<nod+firstDay;d++){
              if(d < firstDay){
                msg+="<li style=' list-style-type: none;display: inline-block;width: 13.6%;text-align: center;margin-bottom: 5px;font-size:8px;color: #777;'>"
                msg+=""+"</li>";
              }
              else{
                
                msg+="<li style=' list-style-type: none;display: inline-block;width: 13.6%;text-align: center;margin-bottom: 5px;font-size:8px;color: #777;'>"
                msg+=date+"</li>";
                date++;
              }              
            }           
            
           msg +="</ul>"
            +"</div>";
          monthCounter++;
          if(monthCounter>=4){
            session.send(msg);
            msg="";
            monthCounter =0;
          }
        }
        
      }
      catch(ex){
          console.log(ex.message);
      }
}
