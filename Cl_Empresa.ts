import Cl_Empleado from "./Cl_Empleado";

export default class Cl_Empresa {
  private acumSueldosNuevos: number;
  private contEmpleados: number;

  constructor() {
    this.acumSueldosNuevos = 0;
    this.contEmpleados = 0;
  }

  procesarEmpleado(e: Cl_Empleado): void {
    this.contEmpleados++;
    this.acumSueldosNuevos += e.nuevoSueldo();
  }

  totalNominaMensual(): number {
    return this.acumSueldosNuevos;
  }
}


        
}

         

