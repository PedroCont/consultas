const cardiologia = {
    id: 1,
    nome: "Cardiologia",
};
const medico1 = {
    id: 1,
    nome: "Dr. Paulo Roberto",
    crm: "CRM30226",
    especialidade: cardiologia,
    ativo: true,
};
const paciente1 = {
    id: 1,
    nome: "Rebeca Santos",
    cpf: "313.234.476-19",
    email: "beca.sant@email.com",
};
const Ofitalmo = {
    id: 2,
    nome: "Ofitalmo",
};
const medico2 = {
    id: 2,
    nome: "Dr. Pedro dos Anjos",
    crm: "CRM40336",
    especialidade: Ofitalmo,
    ativo: true,
};
const paciente2 = {
    id: 2,
    nome: "Ana Julia",
    cpf: "414.234.476-20",
    email: "anah.juju@email.com",
};
const pedriatra = {
    id: 3,
    nome: "pedriatra",
};
const medico3 = {
    id: 3,
    nome: "Dr. Marco Roberto",
    crm: "CRM50446",
    especialidade: pedriatra,
    ativo: true,
};
const paciente3 = {
    id: 3,
    nome: "Maria Santos",
    cpf: "353.234.870-30",
    email: "Mari.sant@email.com",
};
function criarConsulta(id, medico, paciente, data, valor) {
    return {
        id,
        medico,
        paciente,
        data,
        valor,
        status: "agendada",
    };
}
function confirmarConsulta(consulta) {
    return Object.assign(Object.assign({}, consulta), { status: "confirmada" });
}
function cancelarConsulta(consulta) {
    if (consulta.status === "realizada") {
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: "cancelada" });
}
function exibirConsulta(consulta) {
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
function listarConsultasPorStatus(consultas, status) {
    return consultas.filter((consulta) => consulta.status === status);
}
function listarConsultasFuturas(consultas) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return consultas.filter((consulta) => consulta.data >= hoje);
}
function calcularFaturamento(consultas) {
    return consultas
        .filter((consulta) => consulta.status === "realizada")
        .reduce((total, consulta) => total + consulta.valor, 0);
}
// Consulta 1 - Agendada
const consulta1 = criarConsulta(1, medico1, paciente1, new Date('2026-01-28'), 300);
const consultaConfirmada = confirmarConsulta(consulta1);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));
const consulta2 = criarConsulta(2, medico2, paciente2, new Date('2026-03-31'), 500);
const consultaCancelada = cancelarConsulta(consulta2);
console.log("=== CONSULTA CANCELADA ===");
if (consultaCancelada) {
    console.log(exibirConsulta(consultaCancelada));
}
const consulta3 = criarConsulta(3, medico3, paciente3, new Date('2026-03-21'), 350);
const consultaRealizada = Object.assign(Object.assign({}, consulta3), { status: "realizada" });
console.log("=== CONSULTA REALIZADA ===");
console.log(exibirConsulta(consultaRealizada));
const consulta4 = criarConsulta(4, medico1, paciente2, new Date('2026-04-01'), 450);
const consultaConfirmada2 = confirmarConsulta(consulta4);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada2));
const consultas = [
    consultaConfirmada,
    consultaCancelada,
    consultaRealizada,
    consultaConfirmada2
];
const faturamentoTotal = calcularFaturamento(consultas);
console.log("=== FATURAMENTO TOTAL ===");
console.log(faturamentoTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
}));
export {};
