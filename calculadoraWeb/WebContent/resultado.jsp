<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<!-- Inclusão do bootstrap via link local -->
<link rel="stylesheet" href="css/bootstrap-4.1.3/css/bootstrap.min.css">
<script
	"src/com/suam/trabalho"src="css/bootstrap-4.1.3/js/bootstrap.min.js">
	
</script>



<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Resultado</title>
</head>
<body>
	<div class="row content" id="conteudo">
		<div class="col-md-3 "></div>
		<div class="col-md-5 ">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h1 id="resultado">Calculadora Web - Resultado</h1>
				</div>
			</div>
		</div>
		<div class="col-md-3 "></div>
	</div>


	<div class="row content" id="conteudo">
		<div class="col-md-3 "></div>
		<div class="col-md-5 ">
			<div class="container">
				<div class="jumbotron"> 
					<h1 id="resultado"><%=request.getAttribute("resultado")%></h1>
				</div>

			</div>
		</div>
		<div class="col-md-4 "></div>
	</div>

	<a href="/calculadoraWeb/calculadora.html" class="brand-logo center">Calculadora
		Web</a>


</body>
</html>