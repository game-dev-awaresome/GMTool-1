	//var Basic_Form_Nonmove_Options=["GBID","暱稱","註冊入口","會員級別","目前G幣"];
  var userformidx = gUrls[gUrls.indexOf('_login_history')-1];
  //alert(userformidx);
  var uuu = gUrls;
	var arrContent = [];
	var LoginAccounts;
  var avail_options;
  var selected_options;
  var lp_selectoption;
	/*var AID = '<%= Account_ID %>';*/
	//alert('basic_report gAid = '+gAid);

var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
//var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var month=["","01","02","03","04","05","06","07","08","09","10","11","12"];
var d=new Date();
function createSelectTagChild(start,end,selected,special_case)
{
	var str=new String("");

	for(var i=start; i<=end; i++)
	{
		switch (special_case)
		{
			case "week":
				 if (i==selected)
					str+="<option value="+i+" selected>"+week[i]+"</option>";
				 else
					str+="<option value="+i+">"+week[i]+"</option>";
				 break;
			case "month":
				 if (i==selected)
					str+="<option value="+i+" selected>"+month[i]+"</option>";
				 else
					str+="<option value="+i+">"+month[i]+"</option>";
				 break;
			default:
				 if (i==selected)
					str+="<option value="+i+" selected>"+i+"</option>";
				 else
					str+="<option value="+i+">"+i+"</option>";
				 break;
		}
	}
	//document.writeln(str);
	return str;
}
function adjDate(y,m,d)
{
  var i,days;
  //alert("adjDate() "+m+" = "+$("#"+m).val());
  //alert("adjDate() "+d+" = "+$("#"+d+" option").length);
	switch(eval($("#"+m).val()))
	{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
		  //$('#'+d).empty(); // remove old options
		  //for(i=1;i<=31;i++)
		  //   $('#'+d).append($("<option></option>").attr("value",i).text(i));
		  for(i=$('#'+d+' option').length+1;i<=31;i++)
			   $('#'+d).append($("<option></option>").attr("value",i).text(i));
		  break;
		case 4:
		case 6:
		case 9:
		case 11:
		  //$('#'+d).empty(); // remove old options
		  //for(i=1;i<=30;i++)
		  //   $('#'+d).append($("<option></option>").attr("value",i).text(i));
		  if ($("#"+d+" option").length<=30)
		  {
		  	//alert('11111');
			  for(i=$("#"+d+" option").length+1;i<=30;i++)
			   //f.tDAY.options[i-1]=new Option(i,i);
			     $('#'+d).append($("<option></option>").attr("value",i).text(i));
		  }
		  else
		  {
		  	//alert('22222');
			  for(i=$("#"+d+" option").length;i>30;i--)
			     //f.tDAY.options[i-1]= null;
			     $('#'+d+' option[value="'+i+'"]').remove();
		  }
		  break;
		case 2:
		  //$('#'+d).empty(); // remove old options
		  days = 28;
		  if(($('#'+y).val()%4) == 0) days=29;
		  //for(i=1;i<=days;i++)
		  //   $('#'+d).append($("<option></option>").attr("value",i).text(i));
	    for(i=$("#"+d+" option").length;i>days;i--)
			   //f.tDAY.options[i-1]= null;
			   //$('#'+d+' option[index='+i+']').remove();
			   $('#'+d+' option[value="'+i+'"]').remove();
		  break;
		default:
		  alert("some ERRORs in html!!");
		  break;
	}
	switch(eval($("#"+y).val()))
	{
		default:
		  //$('#'+d).empty(); // remove old options
		  if(eval($("#"+m).val())==2)
		  {
		    days = 28;
		    if(($('#'+y).val()%4)==0) days=29;
		    //for(i=1;i<=days;i++)
		    //   $('#'+d).append($("<option></option>").attr("value",i).text(i));
	      if($("#"+d+" option").length<days)
	      {
 	        for(i=$("#"+d+" option").length+1;i<=days;i++)
 	           $('#'+d).append($("<option></option>").attr("value",i).text(i));
	      }
	      else
	      {
	        for(i=$("#"+d+" option").length;i>days;i--)
			       //f.tDAY.options[i-1]= null;
			       //$('#'+d+' option[index='+i+']').remove();
			       $('#'+d+' option[value="'+i+'"]').remove();
			  }
		  }
		  break;
  }
}

var n,now,day;
$(function(){
	if($("#gc_alertreason").val()=="backend_op")
 	  $("#backend_account").show();
 	else
 		$("#backend_account").hide();

  $("#gc_alertreason").change(function() {
  	//alert("gc_alertreason");
  	if($("#gc_alertreason").val()=="backend_op")
  	  $("#backend_account").show();
  	else
  		$("#backend_account").hide();
  });

  $("#1hourago").click(function(){
    //alert("The 1hourago was clicked.");
    now=new Date();
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val(now.getHours());
    $("#tMIN").val(now.getMinutes());
    now.setHours(now.getHours()-1);
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val(now.getHours());
    $("#fMIN").val(now.getMinutes());
  });
  $("#3hourago").click(function(){
    //alert("The 3hourago was clicked.");
    now=new Date();
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val(now.getHours());
    $("#tMIN").val(now.getMinutes());
    now.setHours(now.getHours()-3);
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val(now.getHours());
    $("#fMIN").val(now.getMinutes());
  });
  $("#6hourago").click(function(){
    //alert("The 6hourago was clicked.");
    now=new Date();
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val(now.getHours());
    $("#tMIN").val(now.getMinutes());
    now.setHours(now.getHours()-6);
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val(now.getHours());
    $("#fMIN").val(now.getMinutes());
  });
  $("#12hourago").click(function(){
    //alert("The 12hourago was clicked.");
    now=new Date();
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val(now.getHours());
    $("#tMIN").val(now.getMinutes());
    now.setHours(now.getHours()-12);
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val(now.getHours());
    $("#fMIN").val(now.getMinutes());
  });
  $("#today").click(function(){
    //alert("The today was clicked.");
    now=new Date();
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val("0");
    $("#fMIN").val("0");
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val("23");
    $("#tMIN").val("59");
  });
  $("#this_week").click(function(){
    //alert("The this_week was clicked.");
    now=new Date();
    n = now.getDay();
    if(n==0) n=7;
    now.setDate(now.getDate()-(n-1));
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val("0");
    $("#fMIN").val("0");
    now=new Date();
    n = now.getDay();
    if(n==0) n=7;
    now.setDate(now.getDate()+(7-n));
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val("23");
    $("#tMIN").val("59");
  });
  $("#this_month").click(function(){
    //alert("The this_month was clicked.");
    now=new Date();
    now.setMonth(now.getMonth(), 1);
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val("0");
    $("#fMIN").val("0");
    now=new Date();
    now.setMonth(now.getMonth()+1, 0);
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val("23");
    $("#tMIN").val("59");
  });
  $("#yesterday").click(function(){
    //alert("The yesterday was clicked.");
    now=new Date();
    now.setDate(now.getDate()-1);
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val("0");
    $("#fMIN").val("0");
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val("23");
    $("#tMIN").val("59");
  });
  $("#last_week").click(function(){
    //alert("The last_week was clicked.");
    now=new Date();
    n = now.getDay();
    if(n==0) n=7;
    now.setDate(now.getDate()-(n-1)-7);
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val("0");
    $("#fMIN").val("0");
    now=new Date();
    n = now.getDay();
    if(n==0) n=7;
    now.setDate(now.getDate()+(7-n)-7);
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val("23");
    $("#tMIN").val("59");
  });
  $("#last_month").click(function(){
    //alert("The last_month was clicked.");
    now=new Date();
    now.setMonth(now.getMonth()-1, 1);
    $("#fYEAR").val(now.getFullYear());
    $("#fMON").val(now.getMonth()+1);
    $("#fDAY").val(now.getDate());
    $("#fHOUR").val("0");
    $("#fMIN").val("0");
    now=new Date();
    now.setMonth(now.getMonth(), 0);
    $("#tYEAR").val(now.getFullYear());
    $("#tMON").val(now.getMonth()+1);
    $("#tDAY").val(now.getDate());
    $("#tHOUR").val("23");
    $("#tMIN").val("59");
  });
})

  function genField(classify)
  {
  	//alert(classify);
  	if(classify=='Available')
  	{
  	  var $el = $("#avail_fields");
      $el.empty(); // remove old options
      $.getJSON('/js/rf_field_data.json', function(data) {
      	//alert(JSON.stringify(data));
      	//JSON.parse(data);
        $.each(data.Login_History_Available_Field_Options, function(i,v) {
        	//alert(i);
        	//alert(Object.keys(v)[0]);
        	//alert(v[Object.keys(v)]);
        	var exclude=0;
        	$.each(data.Login_History_Selected_Field_Options, function(j,val) {
        	  //if(value=="GBID" || value=="暱稱" || value=="註冊入口" || value=="會員級別" || value=="目前G幣")
        	  //alert(Object.keys(val));
        	  if(Object.keys(v)[0]==Object.keys(val)[0])
        	  {
        	  	exclude=1;
        	  	return;
        	  }
        	});
        	//alert('exclude = '+exclude);
          if(!exclude)
          {
            $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text(Object.keys(v)[0]));
          }
          //alert('### Available ###');
        });
      });
    }
  	if(classify=='Selected')
  	{
  	  var $el = $("#selected_fields");
      $el.empty(); // remove old options
      $.getJSON('/js/rf_field_data.json', function(data) {
        $.each(data.Login_History_Selected_Field_Options, function(i,v) {
        	var unmovable=0;
        	$.each(data.Login_History_Nonmove_Options, function(j,val) {
        	  //if(value=="GBID" || value=="暱稱" || value=="註冊入口" || value=="會員級別" || value=="目前G幣")
        	  //alert(Object.keys(val));
        	  if(Object.keys(v)[0]==Object.keys(val)[0])
        	  {
        	  	unmovable = 1;
        	  	return;
        	  }
        	});
          if(unmovable)
          {
        	  $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text('*'+Object.keys(v)[0]).css("color","red"));
        	  //$el.append($("<option></option>").attr("value", i).text('*'+value).addClass('redText'));
        	}
          else
          {
            $el.append($("<option></option>").attr("value", v[Object.keys(v)[0]]).text(Object.keys(v)[0]));
          }
          //alert('### Selected ###');
          //alert($('#selected_fields option').length);
        });
        //alert($('#selected_fields option').length);
        genField('FilterLists');
      });
    }
  	if(classify=='FilterLists')
  	{
  		selected_options = [];
  		//alert('### FilterLists ###');
  		//alert('FilterLists selected_options length--> '+ $('#selected_fields option').length);
      $.getJSON('/js/rf_field_data.json', function(data) {
        for(var i=0;i<data.Login_History_Has_Index.length;i++)
        {
        	//alert('sss='+data.Login_History_Has_Index[i][Object.keys(data.Login_History_Has_Index[i])[0]]);
        	$('#switch_'+data.Login_History_Has_Index[i][Object.keys(data.Login_History_Has_Index[i])[0]]).hide();
        	if(data.Login_History_Has_Index[i][Object.keys(data.Login_History_Has_Index[i])[0]]=="login_time")
        	  $('#switch_login_time_quick').hide();
        }
        $('#selected_fields option').each(function() {
        	var jsonstr={};
        	var v=this.value;
        	if((this.text).indexOf("*")!=-1)
        	  var k=this.text.split("*")[1];
        	else
        		var k=this.text;
          //alert('FilterLists jsonstr --> '+JSON.stringify(jsonstr));
          jsonstr[k]=this.value;
          selected_options.push(jsonstr);
          //alert('FilterLists --> '+JSON.stringify(selected_options));
          //alert('### FilterLists ###');
          for(var i=0;i<data.Login_History_Has_Index.length;i++)
          {
          	//alert('v1='+v);
          	//$('#switch_'+data.Login_History_Has_Index[i][Object.keys(data.Login_History_Has_Index[i])[0]]).hide();
          	//alert(data.Login_History_Has_Index[i][Object.keys(data.Login_History_Has_Index[i])[0]]);
          	if(v==data.Login_History_Has_Index[i][Object.keys(data.Login_History_Has_Index[i])[0]])
          	{
          		//alert('v2='+v);
          		$('#switch_'+v).show();
          		//if(v=="gbid") alert('zzzzzzzzzzzzzzzzzzzzzzzzz');
          		if(v=="login_time")
          		  $('#switch_login_time_quick').show();
          		break;
          	}
          }
        });
        //alert('222 genFilterLists(selected_options) => '+JSON.stringify(selected_options));
        genQueryDataLists(selected_options);
      });
      //alert('111 genFilterLists(selected_options) => '+JSON.stringify(selected_options));
      //genFilterLists(selected_options);
    }
  	if(classify=='LoginTimeTableSelection')
  	{
  		$('#logintimetable').empty();
  		var s="";
      s+="<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">";
      s+="  <tr>";
      s+="    <td style=\"width:15%;\">登入時間</td>";
      s+="    <td style=\"font-weight:bold;text-align:left;\">";
      s+="    	<div style=\"float:left;width:4%;\">從</div>";
      s+="    	<div style=\"float:left;width:46%;\">";
    	s+="    	  <div style=\"float:left;width:24%;\">";
    	s+="    	  	<div style=\"float:left;width:75%\">";
      s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"fYEAR\",\"fMON\",\"fDAY\"); size=1 name=\"fYEAR\" id=\"fYEAR\">";
      s+=                createSelectTagChild(2016,2026,d.getFullYear(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:25%\">年</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:19%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"fYEAR\",\"fMON\",\"fDAY\"); size=1 name=\"fMON\" id=fMON>";
      s+=                createSelectTagChild(1,12,d.getMonth()+1,"month");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">月</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:19%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="    	      <select style=\"font-size: 12px\" size=1 name=\"fDAY\" id=fDAY>";
      s+=                createSelectTagChild(1,31,d.getDate(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">日</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:19%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="            <select style=\"font-size: 12px\" size=1 name=\"fHOUR\" id=\"fHOUR\">";
      s+=                createSelectTagChild(0,23,d.getHours(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">時</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:19%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="            <select style=\"font-size: 12px\" size=1 name=\"fMIN\" id=\"fMIN\">";
      s+=                createSelectTagChild(0,59,d.getMinutes(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">分</div>";
    	s+="    	  </div>";
    	s+="    	</div>";
    	s+="    	<div style=\"float:left;width:4%;\">到</div>";
    	s+="    	<div style=\"float:left;width:46%;\">";
    	s+="    	  <div style=\"float:left;width:24%;\">";
    	s+="    	  	<div style=\"float:left;width:75%\">";
      s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"tYEAR\",\"tMON\",\"tDAY\"); size=1 name=\"tYEAR\" id=\"tYEAR\">";
      s+=                createSelectTagChild(2016,2026,d.getFullYear(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:25%\">年</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:19%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"tYEAR\",\"tMON\",\"tDAY\"); size=1 name=\"tMON\" id=\"tMON\">";
      s+=                createSelectTagChild(1,12,d.getMonth()+1,"month");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">月</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:19%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="    	      <select style=\"font-size: 12px\" size=1 name=\"tDAY\" id=\"tDAY\">";
      s+=                createSelectTagChild(1,31,d.getDate(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">日</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:19%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="            <select style=\"font-size: 12px\" size=1 name=\"tHOUR\" id=\"tHOUR\">";
      s+=                createSelectTagChild(0,23,d.getHours(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">時</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:19%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="            <select style=\"font-size: 12px\" size=1 name=\"tMIN\" id=\"tMIN\">";
      s+=                createSelectTagChild(0,59,d.getMinutes(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">分</div>";
    	s+="    	  </div>";
    	s+="    	</div>";
    	s+="    </td>";
      s+="  </tr>";
      s+="</table>";
      //alert(s);
  		$('#logintimetable').html(s);
    }
	  if(classify=='LoginPlatformSelectOption')
	  {
      lp_selectoption="";
      lp_selectoption+="<option value=\"android_GP\">安卓GP版</option>";
      lp_selectoption+="<option value=\"android_MA\">安卓MA</option>";
      lp_selectoption+="<option value=\"android_IOS\">IOS</option>";
      lp_selectoption+="<option value=\"android_WEB\">WEB</option>";
      //alert(lp_selectoption);
      genField('LoginPlatformFilter');
	  }
	  if(classify=='LoginPlatformFilter')
	  {
      var s="";
      $('#lp_selection').empty(); // remove old options
      s+="<div style='width:13%;float:left'>";
      s+=" <select id='sel_loginplatform' name='sel_loginplatform'>";
      s+= lp_selectoption;
      s+=" </select>";
      s+="</div>";
      s+="<div id='more' style='float:left;cursor:pointer;'>";
      s+=" &nbsp;<img src='/images/more.png' onclick=\"showHide('loginplatform1',1);showHide('or',1);showHide('more',0);showHide('more1',1);showHide('less',1)\">";
      s+="</div>";
      s+="<div id='or' style='float:left;display:none;'>";
      s+=" &nbsp;or&nbsp;";
      s+="</div>";
      s+="<div id='loginplatform1' style='width:13%;float:left;display:none;'>";
      s+=" <select id='sel_loginplatform1' name='sel_loginplatform1'>";
      s+= lp_selectoption;
      s+=" </select>";
      s+="</div>";
      s+="<div id='more1' style='float:left;display:none;cursor:pointer;'>";
      s+=" &nbsp;<img src='/images/more.png' onclick=\"showHide('loginplatform2',1);showHide('or1',1);showHide('more1',0);showHide('less',0);showHide('less1',1);\">";
      s+="</div>";
      s+="<div id='or1' style='float:left;display:none;'>";
      s+=" &nbsp;or&nbsp;";
      s+="</div>";
      s+="<div id='less' style='float:left;display:none;cursor:pointer;'>";
      s+=" &nbsp;<img src='/images/less.png' onclick=\"showHide('loginplatform1',0);showHide('or',0);showHide('more',1);showHide('more1',0);showHide('less',0)\">";
      s+="</div>";
      s+="<div id='loginplatform2' style='width:13%;float:left;display:none;'>";
      s+=" <select id='sel_loginplatform2' name='sel_loginplatform2'>";
      s+= lp_selectoption;
      s+=" </select>";
      s+="</div>";
      s+="<div id='less1' style='float:left;display:none;cursor:pointer;'>";
      s+=" &nbsp;<img src='/images/less.png' onclick=\"showHide('loginplatform2',0);showHide('or1',0);showHide('more1',1);showHide('less1',0);showHide('less',1);\">";
      s+="</div>";
      //alert(s);
      $('#lp_selection').html(s);
	  }
  }
/*
  async.series([
     function(cb){
     	genField('Available');
     	cb()
     },
     function(cb){
     	genField('Selected');
     	cb()
     },
     function(cb){
     	genField('FilterLists');
     	cb()
     },
    ],function(err, results){
       //alert(results);
  });
*/
  genField('Available');
  genField('Selected');
  genField('LoginTimeTableSelection');
  genField('LoginPlatformSelectOption');

  var opt={
  	        dateFormat: 'yy/mm/dd',
	          showSecond: true,
            timeFormat: 'HH:mm:ss'
          };

  /*var opt1={
  	        dateFormat: 'yy/mm/dd',
	          showTime: false,
            showButtonPanel: false
          };
  */
/*
  $('#fregistertime').datetimepicker(opt);
  $('#tregistertime').datetimepicker(opt);
  $('#fstartsuspendedtime').datetimepicker(opt);
  $('#tstartsuspendedtime').datetimepicker(opt);
  $('#fstartgagtime').datetimepicker(opt);
  $('#tstartgagtime').datetimepicker(opt);
  $('#flastlogintime').datetimepicker(opt);
  $('#tlastlogintime').datetimepicker(opt);
  $('#flastlogouttime').datetimepicker(opt);
  $('#tlastlogouttime').datetimepicker(opt);
  $('#faccumulatedlogintime').datetimepicker(opt);
  $('#taccumulatedlogintime').datetimepicker(opt);
  $('#faccumulatedgametime').datetimepicker(opt);
  $('#taccumulatedgametime').datetimepicker(opt);
  $('#birthday').datepicker({dateFormat:"yy/mm/dd"});
*/
	$.ajax({
		type: 'GET',
    //url: '/api/v1/accounts/<%= Account_ID %>',
    url: '/api/v1/accounts/'+gAid,

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
            LoginAccounts = result;
            //alert(JSON.stringify(LoginAccounts));
            //genField('Available');
            //genField('Selected');
            //genField('FilterLists');
        }
    }
  });

  /*form = dialog.find("form").on("submit", function(event) {
     event.preventDefault();
     SaveBasicReportName();
  });*/

  function SaveCancel(n)
  {
  	if(n==1)
  	{
      //$("#save_basic").button().on("click", function() {
      dialog.dialog("open");
      //});
    }
  	if(n==2)
  	{
  		 location.reload();
    }
  }

  $.getJSON('/js/menu.json', function(d) {
  	arrContent = d.arrayContent;
  	//alert(JSON.stringify(arrContent));
  });

  dialog = $("#dialog-form").dialog({
     autoOpen: false,
     height: 160,
     width: 250,
     modal: true,
     buttons: {
       "OK": function() { SaveForms(1);},
       "Cancel": function() {
         dialog.dialog( "close" );
       }
     }
     /*
     close: function() {
       //form[0].reset();
       //allFields.removeClass( "ui-state-error" );
     }*/
  });
  $(".ui-dialog-titlebar").hide();

  /*function showHide(id,show)
  {
  	if(show)
  	  document.getElementById(id).style.display='block';
  	else
  		document.getElementById(id).style.display='none';
  }*/

  /*function memberlevel_more_or_less(id1,s1,id2,s2,id3,s3,id4,s4)
  {
  }*/

  /*$('#searchresult').Scrollable({
      ScrollHeight: 100
  });
  */

	function SaveForms(another)
	{
    //alert('SaveForms');
    avail_options = [];
    $('#avail_fields option').each(function() {
    	var jsonstr={};
    	//alert('#avail_fields option');
    	//alert('this.text = '+this.text);
    	//alert('this.value = '+this.value);
    	//avail_options.push(this.text);
    	jsonstr[this.text]=this.value;
    	//alert(JSON.stringify(jsonstr));
      avail_options.push(jsonstr);
    });
    //alert(JSON.stringify(avail_options));
    selected_options = [];
    $('#selected_fields option').each(function() {
    	var jsonstr={};
      jsonstr[this.text]=this.value;
      selected_options.push(jsonstr);
      //selected_options.push({this.text:this.value});
    });
    //alert(JSON.stringify(selected_options));
    //var reportforms = [];
	  var d = {};
	  var cmenu = {};
	  var data={};
	  if(another)
	    d.formname = $("#formname").val();
	  else
	  	d.formname = LoginAccounts.property.user_historyquery.login_history[userformidx-1].formname;
	  d.avail_fields = avail_options;
	  d.selected_fields = selected_options;
    
    //alert('data.formname = '+d.formname);
    //alert('data.avail_fields = '+d.avail_fields);
    //alert('data.selected_fields = '+d.selected_fields);

    //reportforms.push(data);
    //alert('SaveForms reportforms >> '+JSON.stringify(reportforms));
    /*delete LoginAccounts._id;
    delete LoginAccounts.createDate;
    delete LoginAccounts.login;
    delete LoginAccounts.username;
    delete LoginAccounts.password;
    delete LoginAccounts.permission;*/
    //alert('SaveForms LoginAccounts.property.menuLists >> '+JSON.stringify(LoginAccounts.property.menuLists));
    //LoginAccounts.property.menuLists.push({"category":"member","page":"basic_reportu","url":"/member/user1_report","content": data.formname});
    //data.property.menuLists = LoginAccounts.property.menuLists;
    //data.property.user_reportforms = reportforms;
    if(another)  //save as another form
    {
    	var has_null_element1=0, has_null_element2=0;
    	var len1,len2;
      for (var i=0; i<LoginAccounts.property.user_historyquery.login_history.length; i++)
      {
        if (LoginAccounts.property.user_historyquery.login_history[i]==null)
        {
        	len1=i;
        	has_null_element1 = 1;
        	break;
        }
      }
      if(!has_null_element1)
      {
         len1=LoginAccounts.property.user_historyquery.login_history.length;
         LoginAccounts.property.user_historyquery.login_history.push(d);
      }
      else
      {
         LoginAccounts.property.user_historyquery.login_history[len1] = d;
      }
      for (var j=0; j<LoginAccounts.property.menuLists.length; j++)
      {
        if (LoginAccounts.property.menuLists[j]==null)
        {
        	len2=j;
        	has_null_element2 = 1;
        	break;
        }
      }
      if(!has_null_element2)
      {
        LoginAccounts.property.menuLists.push({"category":"member","page":"user_login_history","url":"/member/user"+(len1+1)+"_login_history","content": d.formname});
      }
      else
      {
        LoginAccounts.property.menuLists[len2]={"category":"member","page":"user_login_history","url":"/member/user"+(len1+1)+"_login_history","content": d.formname};
      }
      data.property = LoginAccounts.property;
      //alert('SaveForms data >> '+JSON.stringify(data));
      cmenu.menuLists=LoginAccounts.property.menuLists;
      //cmenu.user_reportforms=LoginAccounts.property.user_reportforms;
      //cmenu.user_historyquery=LoginAccounts.property.user_historyquery;
      //alert('SaveForms cmenu >> '+JSON.stringify(cmenu));
      //console.log('SaveForms cmenu >> '+JSON.stringify(cmenu));
      //alert(AID);
	    $.ajax({
	    	type: 'post',
	    	contentType: "application/json",
	    	data: JSON.stringify(cmenu),
	      //url: '/api/v1/accounts/<%= Account_ID %>',
	      url: '/writeCurrMenuJSONFile',
      
	      success: function(result) {
	          //console.log(JSON.stringify(result));
	          if(result.error){
	          }else{
	          	console.log("55555555555555555555555555555555555555555555nnnnn");
	            $.ajax({
	    	         type: 'PUT',
	    	         contentType: "application/json",
	    	         data: JSON.stringify(data),
	               //url: '/api/v1/accounts/<%= Account_ID %>',
	               url: '/api/v1/accounts/'+gAid,
                 
	               success: function(result) {
	                   //console.log(JSON.stringify(result));
	                   if(result.error){
	                   }else{
                         //alert('success update forms');
                         location.href='/member/user'+(len1+1)+'_login_history';
	                   }
	               }
	            });
	          }
        }
      });
	  }
	  else  //edit old form
	  {
      LoginAccounts.property.user_historyquery.login_history[userformidx-1] = d;
      //LoginAccounts.property.menuLists.push({"category":"member","page":"user_report","url":"/member/user"+(len+1)+"_report","content": d.formname});
      data.property = LoginAccounts.property;
      //alert('SaveForms data >> '+JSON.stringify(data));
      cmenu.menuLists=LoginAccounts.property.menuLists;
      //cmenu.user_reportforms=LoginAccounts.property.user_reportforms;
      //cmenu.user_historyquery=LoginAccounts.property.user_historyquery;
      //alert('SaveForms cmenu >> '+JSON.stringify(cmenu));
      //alert(AID);
	    $.ajax({
	    	type: 'post',
	    	contentType: "application/json",
	    	data: JSON.stringify(cmenu),
	      //url: '/api/v1/accounts/<%= Account_ID %>',
	      url: '/writeCurrMenuJSONFile',
      
	      success: function(result) {
	          //console.log(JSON.stringify(result));
	          if(result.error){
	          }else{
	            $.ajax({
	    	        type: 'PUT',
	    	        contentType: "application/json",
	    	        data: JSON.stringify(data),
	              //url: '/api/v1/accounts/<%= Account_ID %>',
	              url: '/api/v1/accounts/'+gAid,
                
	              success: function(result) {
	                  //console.log(JSON.stringify(result));
	                  if(result.error){
	                  }else{
                        //alert('success update forms');
                        location.href='/member/user'+userformidx+'_login_history';
	                  }
	              }
	            });
	          }
        }
      });
	  }
  }
/*
	var Rform = new Vue({
		el: '#basicformModal',
		data: {
			formname:'',
			avail_fields:'',
			selected_fields:''
		},
		methods:{
			SaveForms: function(){
        //alert('SaveForms');
        var avail_options = [];
        $('#avail_fields option').each(function() {
          avail_options.push(this.text);
        });

        var selected_options = [];
        $('#selected_fields option').each(function() {
          selected_options.push(this.text);
        });

		    var data = {};
		    data.formname = $("#formname").val();
		    data.avail_fields = avail_options;
		    data.selected_fields = selected_options;
        
        //alert('data.formname = '+data.formname);
        //alert('data.avail_fields = '+data.avail_fields);
        //alert('data.selected_fields = '+data.selected_fields);
        
		    $.ajax({
		    	type: 'POST',
		    	data: data,
		      url: '/api/v1/reportforms',

		      success: function(result) {
		          console.log(JSON.stringify(result));
		          if(result.error){
                                 
		          	swal({
		          		title: "Account Modify Error!",
		          		text: result.error,
		          		type: "error",
		          		confirmButtonText: "OK" 
		          	},function(){
		          		location.reload();
		          	});
		          }else{
		          	swal({
		          		title: "Account Modify Success!",
		          		text: JSON.stringify(result),
		          		type: "success",
		          		confirmButtonText: "OK" 
		          	},function(){
                  //alert('success modify account');
		          		location.reload();
		          	});
		          }
		      }
		    });
      }
    }
  });
*/
