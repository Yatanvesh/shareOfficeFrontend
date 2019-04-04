$("document").ready(function(){
				function validate(ctrl){
					var a= $(ctrl).val();
					if(a.length== " "){
						$(ctrl).attr("placeholder","Please Enter value!").css({"box-shadow":"1px 1px 1px 1px red inset","border":"2px solid red"});
						return false;
					}
					else{
						$(ctrl).css({"box-shadow":"1px 2px 2px 1px white inset","border":"1px solid black"});
						return true;
					}
				};
				function validatecn(ctrl){
						var a = $(ctrl).val();
						if(a==null)
						{
							$(ctrl).css({"box-shadow":"1px 1px 1px 1px red inset","border":"2px solid red"});
							return false;
						}
						else
						{
							$(ctrl).css({"box-shadow":"1px 2px 2px 1px white inset","border":"1px solid black"});
							return true;
						}
					}
				$("#inp1").blur(function(){
					validate(this);
				});
				$("#inp2").blur(function(){
					validate(this);
				});
				$("#inp3").blur(function(){
					var mailformat=/^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/ 
					var b= $(this).val();
					if(validate(this)){
						if(mailformat.test(b))
						{  
							$(this).css({"box-shadow":"1px 2px 2px 1px white inset","border":"1px solid black"});
							return true; 
						}  
						else  
						{  
							$(this).attr("placeholder","You have entered an invalid email address!").css({"box-shadow":"1px 1px 1px 1px red inset","border":"2px solid red"});
							return false; 
						}	
					};
				});
				$("#inp4").blur(function(){
					var mailformat=/^\d{3}-\d{3}-\d{4}$/ 
					var b= $(this).val();
					if(validate(this)){
						if(mailformat.test(b))
						{  
							$(this).css({"box-shadow":"1px 2px 2px 1px white inset","border":"1px solid black"});
							return true; 
						}  
						else  
						{  
							$(this).attr("placeholder","You have entered an invalid mobile no!").css({"box-shadow":"1px 1px 1px 1px red inset","border":"2px solid red"});
							return false; 
						}	
					};
				});
				$("#inp5").blur(function(){
					validatecn(this);
				});
				$("#inp6").blur(function(){
					validatecn(this);
				});
				$("#inp7").blur(function(){
					validatecn(this);
				});
				$("#inp8").blur(function(){
					validatecn(this);
				});
				$("#btn").click(function(){
					var a=validate("#inp1");
					var b=validate("#inp2");
					var c=validate("#inp3");
					var d=validate("#inp4");
					var e=validatecn("#inp5");
					var f=validatecn("#inp6");
					var g=validatecn("#inp7");
					var h=validatecn("#inp8");
					if(a==true && b==true && c==true && d==true && e==true && f==true && g==true && h==true)
					{
						return true;
					}
					else{
						return false;
					}
				});
});