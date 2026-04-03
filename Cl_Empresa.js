export default class Cl_Empresa {
  constructor() {
    this.acumSueldosNuevos = 0;
    this.contEmpleados = 0;
  }

  procesarEmpleado(e) {
    this.contEmpleados++;
    this.acumSueldosNuevos += e.nuevoSueldo();
  }

  totalNominaMensual() {
    return this.acumSueldosNuevos;
  }
}
