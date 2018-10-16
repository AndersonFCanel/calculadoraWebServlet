$(document).ready(function() {
	console.log('Ready disparado');
	//$('#operando1').keyup(function() {
	$('#operando1').focusout(function() {
		var valor = document.getElementById("operando1").value;
		var re = new RegExp('^-\d*\.?\d+$');
		//if(isNaN(valor)){
		if ((re.exec(valor))||($.isNumeric(valor))){	
		} else {
			alert("Não permitida letras ou caracteres especiais, somente números!")
			$('#operando1').val("");
			//$(this).val(this.value.replace(/[^\d]+/g, ''));
		}
	});
	
	//$('#operando2').keyup(function() {
	$('#operando2').focusout(function() {	
	var valor = document.getElementById("operando2").value;
		var re = new RegExp('^-\d*\.?\d+$');
		//if(isNaN(valor)){
		if ((re.exec(valor))||($.isNumeric(valor))){	
		} else {
			alert("Não permitida letras ou caracteres especiais, somente números!")
			$('#operando').val("");
			//$(this).val(this.value.replace(/[^\d]+/g, ''));
		}
	});


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
	        if (value.options[value.selectedIndex].value == "" ){
	                alert("Selecione uma operação antes de enviar!");
	                return false;
	        }else {
			
				return true;
			}
	
		}
	});
});
