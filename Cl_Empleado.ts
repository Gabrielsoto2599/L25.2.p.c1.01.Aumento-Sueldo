export default class Cl_Empleado {
  public nombre: string;
  public rol: string;
  public sueldoActual: number;

  constructor(nombre: string, rol: string, sueldoActual: number) {
    this.nombre = nombre;
    this.rol = rol;
    this.sueldoActual = sueldoActual;
  }

  porcentajeAumento(): number {
    const roles: { [key: string]: number } = {
      'junior': 20,
      'mid': 15,
      'devops': 12,
      'senior': 10
    };
    return roles[this.rol.toLowerCase()] || 5;
  }

  montoAumento(): number {
    return this.sueldoActual * (this.porcentajeAumento() / 100);
  }

  nuevoSueldo(): number {
    return this.sueldoActual + this.montoAumento();
  }
}
