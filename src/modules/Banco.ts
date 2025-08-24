export default class Banco {
  private readonly _cnpj: string = '';
  public readonly name: string

  private clients: Cliente[] | [] = []
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

  registrarCliente(name: string, cpf: string): Cliente {
    if (typeof name !== "string" || typeof cpf !== "string")
      throw new TypeError("Dados invalidos.")
    if (name.length === 0 || cpf.length === 0)
      throw new Error("Dados vazios nao permitidos.")

    let cliente: Cliente = new Cliente(name, cpf)
    this.clients.push(cliente as never)
    return cliente
  }

  registrarContaCorrente(cliente: Cliente): ContaCorrente {
    if (cliente instanceof Cliente) {
      return new ContaCorrente(cliente.name, cliente.cpf)
    } else {
      throw new TypeError("Cliente invalido.")
    }
  }

  /**
   *
   * @param tipoConta
   */
  sacar(tipoConta: 0 | 1) {
    if (tipoConta === 0) {
      // Corrente
    }
    if (tipoConta === 1) {
      // Poupanca
    }
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
    return `Ola, eu sou ${this.name}, sou cliente do banco`
  }

  get cpf() {
    return this._cpf
  }
}

/**
 * Conta Corrente do cliente
 */
class ContaCorrente extends Cliente {

  protected _saldo: number = 0
  public name: string;

  constructor(name: string, cpf: string) {
    super(name, cpf)
    this.name = name
  }

}
