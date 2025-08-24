import Banco from "./modules/Banco";

const bradesco: Banco = new Banco("Bradesco", "228239/0111")
console.log(bradesco.greetings())

const lucas = bradesco.registrarCliente("Lucas", "8283019232")
console.log(lucas)
