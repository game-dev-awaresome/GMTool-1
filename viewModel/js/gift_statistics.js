	//var Basic_Form_Nonmove_Options=["GBID","暱稱","註冊入口","會員級別","目前G幣"];
  var userformidx = gUrls[gUrls.indexOf('_machine_query_history')-1];
  //alert(userformidx);
  var uuu = gUrls;
	var arrContent = [];
	var LoginAccounts;
  var avail_options;
  var selected_options;
  var gs_selectoption;
  var subject_chkbox_id_lists=[];
  var query_fields;
  var QueryResult;
  var query_fields;
  var title_lists;
  var select_items;
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

  now=new Date();
  now.setDate(now.getDate()-14);
  $("#fYEAR").val(now.getFullYear());
  $("#fMON").val(now.getMonth()+1);
  $("#fDAY").val(now.getDate());
  //$("#fHOUR").val(now.getHours());
  //$("#fMIN").val(now.getMinutes());
  now=new Date();
  $("#tYEAR").text(now.getFullYear());
  $("#tMON").text(now.getMonth()+1);
  $("#tDAY").text(now.getDate());
  //$("#tHOUR").text(now.getHours());
  //$("#tMIN").text(now.getMinutes());
  adjDate("fYEAR","fMON","fDAY");

  $("#fYEAR, #fMON, #fDAY").change(function() {
    //alert( "#fYEAR, #fMON, #fDAY change called." );
    //alert(parseInt($("#fDAY").val()));
    //now=new Date();
    now.setFullYear(parseInt($("#fYEAR").val()));
    now.setMonth(parseInt($("#fMON").val())-1);
    now.setDate(parseInt($("#fDAY").val())+14);
    //now.setDate(parseInt($("#fDAY").val())+14);
    $("#tYEAR").text(now.getFullYear());
    $("#tMON").text(now.getMonth()+1);
    $("#tDAY").text(now.getDate());
    //$("#tHOUR").text(now.getHours());
    //$("#tMIN").text(now.getMinutes());
    genQueryField();
  });
  genQueryField();
});

function genQueryField()
{
	var k=1;
	//alert('genQueryField');
  query_fields={};
  query_fields["項目"]='item';
  var ofset = parseInt($('#fDAY option:last-child').val())-parseInt($('#fDAY').val())+1;
  if(ofset<15)
  {
    for(var i=parseInt($('#fDAY').val());i<=parseInt($('#fDAY option:last-child').val());i++)
    {
      //query_fields.push(parseInt($('#fMON').val())+'/'+i);
      //query_fields[$('#fMON').val()+'/'+i]=$('#fMON').val()+'/'+i;
      query_fields[$('#fMON').val()+'/'+i]='d'+k;
      k++;
    }
    for(var i=1;i<=parseInt($('#tDAY').text());i++)
    {
      //query_fields.push(parseInt($('#tMON').text())+'/'+i);
      //query_fields[$('#tMON').text()+'/'+i]=$('#tMON').text()+'/'+i;
      query_fields[$('#tMON').text()+'/'+i]='d'+k;
      k++;
    }
  }
  else
  {
    for(var i=parseInt($('#fDAY').val());i<=parseInt($('#tDAY').text());i++)
    {
      //query_fields.push(parseInt($('#fMON').val())+'/'+i);
      //query_fields[$('#fMON').val()+'/'+i]=$('#fMON').val()+'/'+i;
      query_fields[$('#fMON').val()+'/'+i]='d'+k;
      k++;
    }
  }
  //alert(JSON.stringify(query_fields));
}

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
        $.each(data.Machine_Query_History_Available_Field_Options, function(i,v) {
        	//alert(i);
        	//alert(Object.keys(v)[0]);
        	//alert(v[Object.keys(v)]);
        	var exclude=0;
        	$.each(data.Machine_Query_History_Selected_Field_Options, function(j,val) {
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
        $.each(data.Machine_Query_History_Selected_Field_Options, function(i,v) {
        	var unmovable=0;
        	$.each(data.Machine_Query_History_Nonmove_Options, function(j,val) {
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
        });
        //alert('222 genFilterLists(selected_options) => '+JSON.stringify(selected_options));
        genQueryDataLists(selected_options);
      });
      //alert('111 genFilterLists(selected_options) => '+JSON.stringify(selected_options));
      //genFilterLists(selected_options);
    }
  	if(classify=='TimeRangeTableSelection')
  	{
  		$('#timerangetable').empty();
  		var s="";
      s+="<table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" border=\"0\">";
      s+="  <tr>";
      s+="    <td style=\"width:15%;\">時間範圍</td>";
      s+="    <td style=\"font-weight:bold;text-align:left;\">";
      s+="    	<div style=\"float:left;width:4%;\">從</div>";
      s+="    	<div style=\"float:left;width:26%;\">";
    	s+="    	  <div style=\"float:left;width:40%;\">";
    	s+="    	  	<div style=\"float:left;width:75%\">";
      s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"fYEAR\",\"fMON\",\"fDAY\"); size=1 name=\"fYEAR\" id=\"fYEAR\">";
      s+=                createSelectTagChild(2016,2026,d.getFullYear(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:25%\">年</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:30%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="    	      <select style=\"font-size: 12px\" onchange=adjDate(\"fYEAR\",\"fMON\",\"fDAY\"); size=1 name=\"fMON\" id=fMON>";
      s+=                createSelectTagChild(1,12,d.getMonth()+1,"month");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">月</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:30%;\">";
    	s+="    	  	<div style=\"float:left;width:70%\">";
      s+="    	      <select style=\"font-size: 12px\" size=1 name=\"fDAY\" id=fDAY>";
      s+=                createSelectTagChild(1,31,d.getDate(),"");
      s+="            </select>";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">日</div>";
    	s+="    	  </div>";
    	//s+="    	  <div style=\"float:left;width:19%;\">";
    	//s+="    	  	<div style=\"float:left;width:70%\">";
      //s+="            <select style=\"font-size: 12px\" size=1 name=\"fHOUR\" id=\"fHOUR\">";
      //s+=                createSelectTagChild(0,23,d.getHours(),"");
      //s+="            </select>";
      //s+="          </div>";
      //s+="          <div style=\"float:left;width:30%\">時</div>";
    	//s+="    	  </div>";
    	//s+="    	  <div style=\"float:left;width:19%;\">";
    	//s+="    	  	<div style=\"float:left;width:70%\">";
      //s+="            <select style=\"font-size: 12px\" size=1 name=\"fMIN\" id=\"fMIN\">";
      //s+=                createSelectTagChild(0,59,d.getMinutes(),"");
      //s+="            </select>";
      //s+="          </div>";
      //s+="          <div style=\"float:left;width:30%\">分</div>";
    	//s+="    	  </div>";
    	s+="    	</div>";
    	s+="    	<div style=\"float:left;width:2%;text-align:center;\">~</div>";
    	s+="    	<div style=\"float:left;width:28%;\">";
    	s+="    	  <div style=\"float:left;width:26%;\">";
    	s+="    	  	<div id=\"tYEAR\" style=\"float:left;width:75%;text-align:center;\">";
      s+="          </div>";
      s+="          <div style=\"float:left;width:25%;\">年</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:20%;\">";
    	s+="    	  	<div id=\"tMON\" style=\"float:left;width:70%;text-align:center;\">";
      s+="          </div>";
      s+="          <div style=\"float:left;width:20%;\">月</div>";
    	s+="    	  </div>";
    	s+="    	  <div style=\"float:left;width:30%;\">";
    	s+="    	  	<div id=\"tDAY\" style=\"float:left;width:70%;text-align:center;\">";
      s+="          </div>";
      s+="          <div style=\"float:left;width:30%\">日</div>";
    	s+="    	  </div>";
    	//s+="    	  <div style=\"float:left;width:19%;\">";
    	//s+="    	  	<div id=\"tHOUR\" style=\"float:left;width:70%\">";
      //s+="          </div>";
      //s+="          <div style=\"float:left;width:30%\">時</div>";
    	//s+="    	  </div>";
    	//s+="    	  <div style=\"float:left;width:19%;\">";
    	//s+="    	  	<div id=\"tMIN\" style=\"float:left;width:70%\">";
      //s+="          </div>";
      //s+="          <div style=\"float:left;width:30%\">分</div>";
    	//s+="    	  </div>";
    	s+="    	</div>";
    	s+="    </td>";
      s+="  </tr>";
      s+="</table>";
      //alert(s);
  		$('#timerangetable').html(s);
    }
	  if(classify=='Game_Subject')
	  {
      var s="";
      $('#game_subject_lists').empty(); // remove old options
      $.getJSON('/js/game.json', function(data) {
      	//alert(JSON.stringify(data));
        $.each(data.Game_Subjects, function(i,v) {
      	   //alert(i);
      	   var c=(i==0)?"checked":"";
    	     //alert(Object.keys(v)[0]);
    	     //alert('v['+i+'] = '+ JSON.stringify(v));
    	     subject_chkbox_id_lists.push("ckb_"+v[Object.keys(v)[0]]);
           s+="<input type=\"radio\" name=\"game_subject\" id=\"ckb_"+v[Object.keys(v)[0]]+"\" class=\"filled-in\" "+c+"></input>";
           s+="<label for=\"ckb_"+v[Object.keys(v)[0]]+"\">"+Object.keys(v)[0]+"</label>";
	      });
	      //alert(s);
	      //alert(subject_chkbox_id_lists);
	      $('#game_subject_lists').html(s);
        $('#game_subject_lists input').change(function() {
        	//alert("##### input state changed #####");
        	//genqueryDataArray();
        });
	    });
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
  //genField('Available');
  //genField('Selected');
  genField('TimeRangeTableSelection');
  //genField('Game_Subject');

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
	  	d.formname = LoginAccounts.property.user_historyquery.game_history[userformidx-1].formname;
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
      for (var i=0; i<LoginAccounts.property.user_historyquery.game_history.length; i++)
      {
        if (LoginAccounts.property.user_historyquery.game_history[i]==null)
        {
        	len1=i;
        	has_null_element1 = 1;
        	break;
        }
      }
      if(!has_null_element1)
      {
         len1=LoginAccounts.property.user_historyquery.game_history.length;
         LoginAccounts.property.user_historyquery.game_history.push(d);
      }
      else
      {
         LoginAccounts.property.user_historyquery.game_history[len1] = d;
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
        LoginAccounts.property.menuLists.push({"category":"member","page":"user_game_history","url":"/member/user"+(len1+1)+"_game_history","content": d.formname});
      }
      else
      {
        LoginAccounts.property.menuLists[len2]={"category":"member","page":"user_game_history","url":"/member/user"+(len1+1)+"_game_history","content": d.formname};
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
                         location.href='/member/user'+(len1+1)+'_game_history';
                         //location.href='/member/user_report';
                         /*
                         $.getJSON('/js/menu.json', function(d) {
                         	//var s= '{"category":"member","page":"basic_reportu","url":"/member/user1_report","content":"'+result.formname+'"}';
                         	d.arrayContent.push({"category":"member","page":"basic_reportu","url":"/member/user1_report","content": result.formname});
                         	console.log(JSON.stringify(d.arrayContent));
                         });
                         */
                         //arrContent.push({"category":"member","page":"basic_reportu","url":"/member/user1_report","content": result.formname});
                         //console.log(JSON.stringify(arrContent));
                         //location.href='/member/user1_report';
	                   }
	               }
	            });
	          }
        }
      });
	  }
	  else  //edit old form
	  {
      LoginAccounts.property.user_historyquery.game_history[userformidx-1] = d;
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
                        location.href='/member/user'+userformidx+'_game_history';
	                  }
	              }
	            });
	          }
        }
      });
	  }
  }

var qdata;
$.getJSON('/js/business.json', function(data) {qdata=data});
function CompositeFilterData()
{
	var d={};
	//var t=[];
	d.begin=$("#fYEAR").val()+'/'+$("#fMON").val()+'/'+$("#fDAY").val();
	//d.begin=$("#fYEAR").val()+'/'+(($("#fMON").val()<10)?'0'+$("#fMON").val():$("#fMON").val())+'/'+(($("#fDAY").val()<10)?'0'+$("#fDAY").val():$("#fDAY").val());
	d.end=$("#tYEAR").text()+'/'+$("#tMON").text()+'/'+$("#tDAY").text();
	//d.end=$("#tYEAR").text()+'/'+(($("#tMON").text()<10)?'0'+$("#tMON").text():$("#tMON").text())+'/'+(($("#tDAY").text()<10)?'0'+$("#tDAY").text():$("#tDAY").text());
  //alert(JSON.stringify($('input[type=radio][name=filter]:checked').val()));
  //alert(JSON.stringify(d));
  //query_fields=[];

  //var q_fields=["daily_totallogin_times","daily_totallogin_people","dnu","dau","wau","mau","repeat_login_accounts",
  //              "normal_member_number","normal_member_logins","whitediamond_member_number","whitediamond_login_number",
  //              "bluediamond_member_number","bluediamond_login_number","goldendiamond_member_number","goldendiamond_login_number",
  //              "reddiamond_member_number","reddiamond_login_number","total_play_sec","grand_total_norepeat_players","pcu",
  //              "acu","number_of_transactions","transactions_total_Gcurrency","transactions_total_pumping_Gcurrency",
  //              "accumulated_transactions_total_Gcurrency","accumulated_transactions_total_pumping_Gcurrency"
  //             ];
  //d.q_fields = q_fields;
//  title_lists=[];
//  //var z = $('#fDAY option:last-child').val();
//  //var d1=parseInt($('#fDAY option:last-child').val());
//  //alert(d1);
//  var ofset = parseInt($('#fDAY option:last-child').val())-parseInt($('#fDAY').val())+1;
//  if(ofset<15)
//  {
//    for(var i=parseInt($('#fDAY').val());i<=parseInt($('#fDAY option:last-child').val());i++)
//    {
//      title_lists.push(parseInt($('#fMON').val())+'/'+i);
//    }
//    for(var i=1;i<=parseInt($('#tDAY').text());i++)
//    {
//      title_lists.push(parseInt($('#tMON').text())+'/'+i);
//    }
//  }
//  else
//  {
//    for(var i=parseInt($('#fDAY').val());i<=parseInt($('#tDAY').text());i++)
//    {
//      title_lists.push(parseInt($('#fMON').val())+'/'+i);
//    }
//  }
  //alert(title_lists);
	select_items=d;
}

function RequestDBdata()
{
  //alert('RequestDBdata');
  //alert(JSON.stringify(select_items));

	$.ajax({
		type: 'post',
		contentType: "application/json",
		data: JSON.stringify(select_items),
	  //url: 'http://172.16.210.16:3000/api/memberlog/game',
	  //url: 'http://172.16.18.63/api/memberlog/game',
	  url: '/api/business/giftstatistics',

	  success: function(result) {
	      console.log(JSON.stringify(result));
	      if(result.error){
	      }else{
	      	console.log("Get response successfully...");
	        //QueryResult=qdata.Gift_Statistics_Info;//result;
	        QueryResult=result;
	        //alert(JSON.stringify(QueryResult));
	      	genDisplayData(QueryResult);
	      	//genQueryResult(QueryResult);
        }
    }
  });
}

var DisplayData=[];
function genDisplayData(obj) {
	//alert('genDisplayData');
	//alert(JSON.stringify(query_fields));
	//alert('genDisplayData received obj=>'+ JSON.stringify(obj));
	//alert('obj length = '+Object.keys(obj).length);
	var d=[];
	var s={};
	var r,u;
  
  //if(Object.keys(obj).length)
  if(obj.length)
  {
	  $.each(obj, function(i,p) {
    	//alert(JSON.stringify(i));
    	//alert(JSON.stringify(p));
    	for(var k=0;k<Object.keys(qdata.Gift_Statistics_Fields).length;k++)
    	{
    		if(qdata.Gift_Statistics_Fields[Object.keys(qdata.Gift_Statistics_Fields)[k]] == p["item"])
    		{
    			u=Object.keys(qdata.Gift_Statistics_Fields)[k];
    			//alert(u);
    			break;
    		}
    	}
    	s={};
      $.each(query_fields, function(j,q) {
	      //alert(JSON.stringify(j));
	      //alert(JSON.stringify(q));
    	  //if(Object.keys(v)[0]==Object.keys(val)[0])
    	  r="N/A";
    	  switch(q)
    	  {
    	  	case "item":
    	  	      r=u;
    	  	      break;
          default:
                r=p[q];
    	  	      break;
    	  }
    	  s[j]=r;
    	  //alert(JSON.stringify(s));
    	});
 	    d.push(s);
 	    //alert(JSON.stringify(d));
      DisplayData = d;
      //alert("zzzzzzzzzzzzzz");
      genQueryResult(DisplayData);
    }/*,function() {
    	alert("---------------2----------------------");
    	genQueryResult(DisplayData,query_fields);
    }*/);
  }
  else
  	genQueryResult(d);
}

function queryResult() {
  $("#basicformModal_str").css("display","none");
  $("#basicformModal_qpage").css("display","none");
  $("#basicformModal_qpage1").css("display","none");
	$("#searchresult").css("display","");
	$("#searchresult #tbody1").css("display","none");
	$("#searchresult #tbody2").css("display","");
	setVueInstanceData(1,query_fields);
  CompositeFilterData();
  RequestDBdata();
  //genDisplayData(result);
  //genQueryResult(DisplayData,query_fields);
}

function genQueryResult(k) {
	//alert('genQueryResult');
	//var s='';
  //alert('genQueryResult k = '+JSON.stringify(k));
  setVueInstanceData(2,k);
  setVueInstanceData(3,100);
  $("#basicformModal_str").css("display","none");
  $("#basicformModal_qpage").css("display","");
  $("#basicformModal_qpage1").css("display","");
  $("#searchresult").css("display","");
	$("#searchresult #tbody1").css("display","");
	$("#searchresult #tbody2").css("display","none");
}
