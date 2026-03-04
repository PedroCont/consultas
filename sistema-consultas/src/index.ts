import { Especialidade } from "./types/especialidade";
import { Paciente } from "./types/paciente";
import { StatusConsulta } from "./types/statusConsulta";
import { Medico } from "./interfaces/medico";
import { Consulta } from "./interfaces/consulta";

const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologia",
};
const medico1: Medico = {
  id: 1,
  nome: "Dr. Paulo Roberto",
  crm: "CRM30226",
  especialidade: cardiologia,
  ativo: true,
};
const paciente1: Paciente = {
  id: 1,
  nome: "Rebeca Santos",
  cpf: "313.234.476-19",
  email: "beca.sant@email.com",
};

const Ofitalmo: Especialidade = {
  id: 2,
  nome: "Ofitalmo",
};
const medico2: Medico = {
  id: 2,
  nome: "Dr. Pedro dos Anjos",
  crm: "CRM40336",
  especialidade: Ofitalmo,
  ativo: true,
};
const paciente2: Paciente = {
  id: 2,
  nome: "Ana Julia",
  cpf: "414.234.476-20",
  email: "anah.juju@email.com",
};

const pedriatra: Especialidade = {
  id: 3,
  nome: "pedriatra",
};
const medico3: Medico = {
  id: 3,
  nome: "Dr. Marco Roberto",
  crm: "CRM50446",
  especialidade: pedriatra,
  ativo: true,
};
const paciente3: Paciente = {
  id: 3,
  nome: "Maria Santos",
  cpf: "353.234.870-30",
  email: "Mari.sant@email.com",
};

function criarConsulta(
  id: number,
  medico: Medico,
  paciente: Paciente,
  data: Date,
  valor: number
): Consulta {
  return {
    id,
    medico,
    paciente,
    data,
    valor,
    status: "agendada",
  };
}

function confirmarConsulta(consulta: Consulta): Consulta {
  return {
    ...consulta,
    status: "confirmada",
  };
}

function cancelarConsulta(consulta: Consulta): Consulta | null {
  if (consulta.status === "realizada") {
    return null;
  }
  return {
    ...consulta,
    status: "cancelada",
  };
}

function exibirConsulta(consulta: Consulta): string {
  const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return `
Consulta #${consulta.id}
Médico: ${consulta.medico.nome}
Paciente: ${consulta.paciente.nome}
Especialidade: ${consulta.medico.especialidade.nome}
Data: ${consulta.data.toLocaleDateString("pt-BR")}
Valor: ${valorFormatado}
Status: ${consulta.status}
`;
}

function listarConsultasPorStatus(
  consultas: Consulta[],
  status: StatusConsulta
): Consulta[] {
  return consultas.filter((consulta) => consulta.status === status);
}

function listarConsultasFuturas(consultas: Consulta[]): Consulta[] {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // Zera horas para comparar apenas a data
  return consultas.filter((consulta) => consulta.data >= hoje);
}

// Consulta 1 - Agendada
const consulta1 = criarConsulta(
  1,
  medico1,
  paciente1,
  new Date(),
  350
);
const consultaConfirmada = confirmarConsulta(consulta1);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));

const consulta2 = criarConsulta(
  1,
  medico1,
  paciente1,
  new Date(),
  350
);
const consultaConfirmada = confirmarConsulta(consulta2);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));

const consulta3 = criarConsulta(
  1,
  medico1,
  paciente1,
  new Date(),
  350
);
const consultaConfirmada = confirmarConsulta(consulta3);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));

const consultas: Consulta[] = [
  criarConsulta(1, medico1, paciente1, new Date(), 350),
  criarConsulta(2, medico2, paciente2, new Date(), 400),
  criarConsulta(3, medico3, paciente3, new Date(), 300),
];