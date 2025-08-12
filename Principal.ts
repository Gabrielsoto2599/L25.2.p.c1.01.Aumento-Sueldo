import Cl_Empleado from "./Cl_Empleado.js";
import Cl_Empresa from "./Cl_Empresa.js";

const empleado1: Cl_Empleado = new Cl_Empleado("555 ", 200, "Administrativo",);
const empleado2: Cl_Empleado = new Cl_Empleado("888", 500, "Obrero");
const empleado3: Cl_Empleado = new Cl_Empleado("777 ", 400,  "Administrativo");
const empleado4: Cl_Empleado = new Cl_Empleado("666", 600, "Obrero",);
const empleado5: Cl_Empleado = new Cl_Empleado("444", 800, "Obrero");

const empresa: Cl_Empresa = new Cl_Empresa();

empresa.procesarEmpleado(empleado1); 
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);
empresa.procesarEmpleado(empleado5);    

let salida: HTMLElement | null = document.getElementById("salida");
if(salida !==null){
    salida.innerHTML = ` ------* Reporte Empresa *-------
     <br> La cédula ${empleado1.cedula} tiene nuevo sueldo de $ ${empleado1.nuevoSueldo()}
     <br> La cédula ${empleado2.cedula} tiene nuevo sueldo de $ ${empleado2.nuevoSueldo()}
     <br> La cédula ${empleado3.cedula} tiene nuevo sueldo de $ ${empleado3.nuevoSueldo()}
     <br> La cédula ${empleado4.cedula} tiene nuevo sueldo de $ ${empleado4.nuevoSueldo()}
     <br> La cédula ${empleado5.cedula} tiene nuevo sueldo de $ ${empleado5.nuevoSueldo()}
     <br>
     <br> Total a pagar solo por aumento de sueldo $ ${empresa.monTotIncr()}
     <br> Porcentaje de personal obrero: ${empresa.porcObrero()}%`
}
else {
    console.error("error")
}