import Banco from "./modules/Banco";

const branhesco: Banco = new Banco("Branhesco", "228239/0111")
console.log(branhesco.greetings())

const lucas = branhesco.registrarCliente("Lucas", "8283019232")
console.log(lucas)
