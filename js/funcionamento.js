export function horarioFuncionamento() {
  const dataHorarioFunctionamento = document.querySelector(
    "[data-horario-functionamento]",
  );
  const diasSemana = [1, 2, 3, 4, 5];
  const diaHoje = new Date().getDay();
  const horarioHoje = new Date().getHours();
  if (diasSemana.indexOf(diaHoje) && horarioHoje >= 8 && horarioHoje <= 18) {
    dataHorarioFunctionamento.classList.add("on");
  } else {
    dataHorarioFunctionamento.classList.remove("on");
  }
}
