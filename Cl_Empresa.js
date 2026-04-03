export default class Cl_Empleado {
  constructor(nombre, rol, sueldoActual) {
    this.nombre = nombre;
    this.rol = rol; // 'Senior', 'Mid', 'Junior', 'DevOps'
    this.sueldoActual = sueldoActual;
  }

  // Lógica de aumento según el rol
  porcentajeAumento() {
    switch (this.rol.toLowerCase()) {
      case 'junior': return 20; // 20% de aumento
      case 'mid': return 15; // 15% de aumento
      case 'devops': return 12; // 12% de aumento
      case 'senior': return 10; // 10% de aumento
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
