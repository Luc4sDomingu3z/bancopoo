export default class Banco {
  private readonly _cnpj: string;
  public readonly name: string

  private _clients: Cliente[] | [] = []
  constructor(name: string, cnpj: string) {
    this.name = name
    this._cnpj = cnpj
  }

  get cnpj() {
    return this._cnpj;
  }

  greetings() {
    return `Bem-vindo ao ${this.name}!`
  }

  get clients() {
    return this._clients.map((v) => v.name)
  }

  public registrarCliente(name: string, cpf: string): { cliente: Cliente, corrente: ContaCorrente, poupanca: ContaPoupanca } {
    if (typeof name !== "string" || typeof cpf !== "string")
      throw new TypeError("Dados invalidos.")
    if (name.length === 0 || cpf.length === 0)
      throw new Error("Dados vazios nao permitidos.")

    let cliente: Cliente = new Cliente(name, cpf)
    this._clients.push(cliente as never)
    return { cliente, corrente: this.registrarContaCorrente(cliente), poupanca: this.registrarContaPoupanca(cliente) }
  }

  private registrarContaCorrente(cliente: Cliente): ContaCorrente {
    if (cliente instanceof Cliente) {
      return new ContaCorrente(cliente.name, cliente.cpf)
    } else {
      throw new TypeError("Cliente invalido.")
    }
  }

  private registrarContaPoupanca(cliente: Cliente): ContaPoupanca {
    if (cliente instanceof Cliente)
      return new ContaPoupanca(cliente.name, cliente.cpf)
    else
      throw new TypeError("Cliente invalido.")
  }

}

/**
 * Classe Molde de Clientes de seus respectivos bancos
 */
class Cliente extends Banco {
  public name: string;
  protected _cpf: string;

  constructor(name: string, cpf: string) {
    super(name, cpf);
    this.name = name
    this._cpf = cpf
  }

  greetings(): string {
    this.cnpj
    return `Ola, eu sou ${this.name} (Cliente).`
  }

  get cpf() {
    return this._cpf
  }

  protected sacar(value: number) {
    console.log("Sacar: " + value)
  }
}

/**
 * Conta Corrente do cliente
 */
class ContaCorrente extends Cliente {

  protected _saldo: number = 0
  public name: string;
  public tipoConta: string = 'Corrente'

  constructor(name: string, cpf: string) {
    super(name, cpf)
    this.name = name
  }

  get saldo(): number {
    return this._saldo
  }

  public sacar(value: number): void {
    if (this.saldo <= 0) throw new Error("Saldo insuficiente.")

    if (value <= 0) throw new Error("Digite um valor valido para sacars")

    const diff: number = this.saldo - value
    this._saldo = diff
  }

  public depositar(value: number) {
    if (value <= 0) throw new Error("Digite um valor valido para sacar.")
    const soma: number = this.saldo + value
    this._saldo = soma
  }
}

/**
 * Conta poupanca
 */
class ContaPoupanca extends Cliente {

  protected _saldo: number = 0
  public name: string;
  public tipoConta: string = 'Poupanca'

  constructor(name: string, cpf: string) {
    super(name, cpf)
    this.name = name
  }

  get saldo(): number {
    return this._saldo
  }

  public sacar(value: number): void {
    if (this.saldo <= 0) throw new Error("Saldo insuficiente.")
    if (value <= 0) throw new Error("Digite um valor valido para sacar.")
    const diff: number = this.saldo - value
    this._saldo = diff
  }
}
