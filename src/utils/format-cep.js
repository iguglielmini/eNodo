export default function formatCep(cep) {
  return cep.replace(/(\d{5})/, '$1-');
}
