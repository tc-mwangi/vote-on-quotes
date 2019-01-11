export class Quote {
  public showDetails:boolean;

  // the inputs required are:

  constructor(public id:number, public quote:string,public author:string, public contributor:string, public submitDate:Date){
      this.showDescription=false

  }
}

