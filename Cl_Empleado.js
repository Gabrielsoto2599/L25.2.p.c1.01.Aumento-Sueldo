export default class Cl_Empleado {
  constructor(nombre, rol, sueldoActual) {
    this.nombre = nombre;
    this.rol = rol;
    this.sueldoActual = sueldoActual;
  }

  porcentajeAumento() {
    switch (this.rol.toLowerCase()) {
      case 'junior': return 20;
      case 'mid': return 15;
      case 'devops': return 12;
      case 'senior': return 10;
      default: return 5;
    }
  }

  montoAumento() {
    return this.sueldoActual * (this.porcentajeAumento() / 100);
  }

  nuevoSueldo() {
    return this.sueldoActual + this.montoAumento();
  }
}
