export class Animal {
  private _nome: string;
  private _tipo: string;
  private _idade: number;
  private _som: string;

  constructor(nome: string, tipo: string, idade: number, som: string) {
    this._nome = nome;
    this._tipo = tipo;
    this._idade = idade;
    this._som = som;
  }

  public getNome(): string {
    return this._nome;
  }
  public setNome(value: string) {
    this._nome = value;
  }
  public getTipo(): string {
    return this._tipo;
  }
  public setTipo(value: string) {
    this._tipo = value;
  }
  public getIdade(): number {
    return this._idade;
  }
  public setIdade(value: number) {
    this._idade = value;
  }
  public getSom(): string {
    return this._som;
  }
  public setSom(value: string) {
    this._som = value;
  }

  public imprimir(): void{
    console.log("Nome: " + this._nome);
    console.log("Tipo: " + this._tipo);
    console.log("Idade: " + this._idade);
    console.log("som: " + this._som);
  }
}
