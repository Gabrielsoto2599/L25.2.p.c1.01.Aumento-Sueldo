export default class Cl_Empleado {
    constructor(cedula, sueldoActual, tipoEmpleado) {
        this._cedula = "";
        this._sueldoActual = 0;
        this._tipoEmpleado = "";
        this.cedula = cedula;
        this.sueldoActual = sueldoActual;
        this.tipoEmpleado = tipoEmpleado;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set sueldoActual(sueldoActual) {
        this._sueldoActual = +sueldoActual;
    }
    get sueldoActual() {
        return this._sueldoActual;
    }
    set tipoEmpleado(tipoEmpleado) {
        this._tipoEmpleado = tipoEmpleado;
    }
    get tipoEmpleado() {
        return this._tipoEmpleado;
    }
    incremento() {
        if (this.tipoEmpleado == "Obrero" || this.tipoEmpleado == "obrero")
            return this.sueldoActual * 0.20;
        else
            return this.sueldoActual * 0.10;
    }
    nuevoSueldo() {
        return this.sueldoActual + this.incremento();
    }
}
