$(document).ready(function() {
	console.log('Ready disparado');
	//$('#operando1').keyup(function() {}//Quando digita
	//if(isNaN(valor)){}//se não for número
	//document.getElementById("operando1").focus();// trazer o foco para o componente
	//$(this).val(this.value.replace(/[^\d]+/g, ''));//executar replace no this da função
	
	/*$('#operando1').focusout(function() {
		var valor = document.getElementById("operando1").value;
		var re = new RegExp('^-\d*\.?\d+$');
		if ((re.exec(valor))||($.isNumeric(valor))||valor!=""){	
		} else {
			alert("Não permitida letras ou caracteres especiais, somente números!")
			$('#operando1').val("");
		}
	});*/

	$("#form").validate({
		rules : {
			"operando1" : {
				required : true
			},
			"operando2" : {
				required : true
			}
		},
		messages : {
			"operando1" : {
				required : "Por favor, entre com o primero operando!"
			},
			"operando2" : {
				required : "Por favor, entre com o segundo operando!"
			}
		},
		submitHandler : function(form) {
			
			var value = document.getElementById("operacao");
			var op1 = document.getElementById("operando1").value;
			var op2 = document.getElementById("operando2").value;
			var re = new RegExp('^-\d*\.?\d+$');
			
	        if (value.options[value.selectedIndex].value == "" ){
	                alert("Selecione uma operação antes de enviar!");
	              return false;            
	        }else if (!((re.exec(op1))||($.isNumeric(op1)))) {
	        	alert("Não permitido letras ou caracteres especiais, somente números!")
				$('#operando1').val("");
	        	
	        	if (!((re.exec(op2))||($.isNumeric(op2)))) {
					$('#operando2').val("");
	        	}
	        	
				return false;
			
	        }else if (!((re.exec(op2))||($.isNumeric(op2)))) {
				alert("Não permitido letras ou caracteres especiais, somente números!")
				$('#operando2').val("");
				
				if (!((re.exec(op1))||($.isNumeric(op1)))) {
					$('#operando1').val("");
					}
				
				return false;
				
			}else{
				return true;
			}

		}
	});
});
