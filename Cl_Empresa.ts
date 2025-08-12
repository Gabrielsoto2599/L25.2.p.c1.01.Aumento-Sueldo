import Cl_Empleado from "./Cl_Empleado.js";

export default class Cl_Empresa{
    private _acumTotIncr: number = 0;
    private _cntObreros: number = 0;
    private _contEmpleados: number = 0;

    constructor(){}

        procesarEmpleado(empleado: Cl_Empleado):void {

            // acumulador de incremento 
            this._acumTotIncr += empleado.incremento();

        //  contador de obreros
        if (empleado.tipoEmpleado == "Obrero" || empleado.tipoEmpleado == "obrero") 
            this._cntObreros++;

      //contador de empleados
       this._contEmpleados++
        } // cierre del procesar


    
        monTotIncr():number{
            return this._acumTotIncr;
        }
           
        porcObrero():number{
            if(this._contEmpleados>0) 
            return (this._cntObreros/this._contEmpleados)*100
        else return 0;
        }
        
}

         

