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

	<div class="panel panel-default">
		<div class="panel-heading">
			<h1>Calculadora Web</h1>
		</div>
	</div>
	<div class="container">
		<div class="jumbotron">
			<div class="resultado">
				<h1>Resultado</h1>
				<h2><%=request.getAttribute("resultado")%></h2>
			</div>
		</div>
	</div>

	<a href="/calculadoraWeb/calculadora.html" class="brand-logo center">Calculadora
		Web</a>


</body>
</html>