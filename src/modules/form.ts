import Banco from "./Banco"

export function form(banco: Banco) {
  if (!(banco instanceof Banco)) return;
  const form: HTMLFormElement = document.querySelector('form#bank') as HTMLFormElement

  const submitBtn: HTMLButtonElement = form.querySelector('button#sub') as HTMLButtonElement
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const cliente: HTMLInputElement = form.querySelector('input#cliente') as HTMLInputElement
    const clienteCpf: HTMLInputElement = form.querySelector('input#clienteCpf') as HTMLInputElement

    if (cliente.value && clienteCpf.value) {
      const novoCliente = banco.registrarCliente(cliente.value, clienteCpf.value)
      console.table(novoCliente)
    }
  })
}
