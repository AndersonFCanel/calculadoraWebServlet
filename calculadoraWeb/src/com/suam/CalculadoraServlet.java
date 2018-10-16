 package com.suam;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/CalculadoraServlet")
public class CalculadoraServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	public CalculadoraServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String ope1 = request.getParameter("operando1");
		String ope2 = request.getParameter("operando2");
		String opnd = request.getParameter("operacao");
		
		float op1 = Float.parseFloat(ope1);
		float op2 = Float.parseFloat(ope2);
		float resultado = 0;

		Calculadora calc = new Calculadora();

		switch (opnd) {
		case "+":
			resultado = calc.soma(op1, op2);
			break;

		case "-":
			resultado = calc.sub(op1, op2);
			break;

		case "*":
			resultado = calc.mult(op1, op2);
			break;

		case "/":
			resultado = calc.div(op1, op2);
			break;
		}
		
		request.setAttribute("resultado", resultado);
		request.getRequestDispatcher("resultado.jsp").forward(request, response);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
