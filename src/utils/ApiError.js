class ApiError extends Error {
    constructor(
         statusCOde,
         message="Something went wrong",
         errors =[],
         stack= ""


    ){
         super(message)
         this.statusCode =statusCode
         this.data= null
         this.message=message
         this.success= false
         this.errors = errors


         if(stack)  {
            this.stack =stack
         }else{
            Error.captureStcakTrace(this, this.constructor)

         }

    }
}