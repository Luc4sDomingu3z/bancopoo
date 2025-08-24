import Banco from "./modules/Banco";
import { form } from "modules/form";

const bancoSalvador: Banco = new Banco("Banco Internacional", "98.391.361/0001-00")

form(bancoSalvador)
