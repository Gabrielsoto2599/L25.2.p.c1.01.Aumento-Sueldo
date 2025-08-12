export default class Cl_Empresa {
    constructor() {
        this._acumTotIncr = 0;
        this._cntObreros = 0;
        this._contEmpleados = 0;
    }
    procesarEmpleado(empleado) {
        // acumulador de incremento 
        this._acumTotIncr += empleado.incremento();
        //  contador de obreros
        if (empleado.tipoEmpleado == "Obrero" || empleado.tipoEmpleado == "obrero")
            this._cntObreros++;
        //contador de empleados
        this._contEmpleados++;
    } // cierre del procesar
    monTotIncr() {
        return this._acumTotIncr;
    }
    porcObrero() {
        if (this._contEmpleados > 0)
            return (this._cntObreros / this._contEmpleados) * 100;
        else
            return 0;
    }
}
