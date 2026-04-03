import Cl_Empleado from "./Cl_Empleado.js";
import Cl_Empresa from "./Cl_Empresa.js";

const empresa = new Cl_Empresa();

// Definimos el equipo de Soto System Digital Solution
const staff = [
  new Cl_Empleado("Gabriel Soto", "Senior", 1200),
  new Cl_Empleado("Simón", "Senior", 1100),
  new Cl_Empleado("David", "Mid", 800),
  new Cl_Empleado("Dev Principal", "DevOps", 950),
  new Cl_Empleado("Nuevo Talento", "Junior", 500)
];

const salida = document.getElementById("app");
salida.innerHTML = "<h1>Soto System Payroll - Planificación 2026</h1>";

staff.forEach(emp => {
  empresa.procesarEmpleado(emp);
  salida.innerHTML += `
    <p>
      <strong>${emp.nombre} (${emp.rol}):</strong> <br>
      Sueldo Base: $${emp.sueldoActual} | 
      Aumento (${emp.porcentajeAumento}%): +$${emp.montoAumento()} | 
      <strong>Nuevo Sueldo: $${emp.nuevoSueldo()}</strong>
    </p>
  `;
});

salida.innerHTML += "<hr>";
salida.innerHTML += `<h3>Costo Total de Nómina Post-Aumento: $${empresa.totalNominaMensual()}</h3>`;

