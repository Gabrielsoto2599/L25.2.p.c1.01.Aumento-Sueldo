export default class Cl_Empleado{
   private _cedula: string = ""; 
   private _sueldoActual: number = 0;
   private _tipoEmpleado: string ="";
   constructor ( cedula: string, sueldoActual: number, tipoEmpleado: string){
           this.cedula = cedula;
           this.sueldoActual= sueldoActual;
           this.tipoEmpleado = tipoEmpleado;
   }

   set cedula( cedula: string){
      this._cedula = cedula;
   }
   get cedula(): string{
     return this._cedula;
}
   set sueldoActual( sueldoActual: number){
      this._sueldoActual = +sueldoActual;
   }
   get sueldoActual(): number{
      return this._sueldoActual;
   }

   set tipoEmpleado( tipoEmpleado: string){
      this._tipoEmpleado = tipoEmpleado;
   }
   get tipoEmpleado():string {
      return this._tipoEmpleado;
   }


    incremento(): number {
       if (this.tipoEmpleado == "Obrero" || this.tipoEmpleado =="obrero")
           return this.sueldoActual * 0.20;
         else return this.sueldoActual * 0.10;
   }

   nuevoSueldo(): number{
     return this.sueldoActual + this.incremento();
}
 }