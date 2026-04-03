import Cl_Empleado from "./Cl_Empleado";
import Cl_Empresa from "./Cl_Empresa";

// Instanciamos el motor de la empresa
const sotoSystem = new Cl_Empresa();

// Definimos la nómina real de Soto System Digital Solution
const nomina = [
    new Cl_Empleado("Gabriel Soto", "Senior", 1200),
    new Cl_Empleado("Simón", "Senior", 1100),
    new Cl_Empleado("David", "Mid", 800),
    new Cl_Empleado("Analista DevOps", "DevOps", 950),
    new Cl_Empleado("Programador Nuevo", "Junior", 550)
];

// Procesamos a cada colega
const app = document.getElementById("app");

if (app) {
    app.innerHTML = `<h1>Payroll System - Soto System Digital Solution</h1>`;
    app.innerHTML += `<p><em>Refactorización: 3 de abril - Modo Enfoque</em></p><hr>`;

    nomina.forEach(empleado => {
        sotoSystem.procesarEmpleado(empleado);
        
        app.innerHTML += `
            <div style="margin-bottom: 15px;">
                <strong>Empleado:</strong> ${empleado.nombre} <br>
                <strong>Cargo:</strong> ${empleado.rol} <br>
                <strong>Sueldo Anterior:</strong> $${empleado.sueldoActual} <br>
                <strong>Aumento:</strong> $${empleado.montoAumento().toFixed(2)} <br>
                <strong>Nuevo Ingreso:</strong> <span style="color: green;">$${empleado.nuevoSueldo().toFixed(2)}</span>
            </div>
        `;
    });

    app.innerHTML += "<hr>";
    app.innerHTML += `<h2>Inversión Total en Nómina: $${sotoSystem.totalNominaMensual().toFixed(2)}</h2>`;
}
