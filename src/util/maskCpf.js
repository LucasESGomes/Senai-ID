const maskCPF = (value) => {
  return value
    .replace(/\D/g, "") // remove não números
    .replace(/(\d{3})(\d)/, "$1.$2") // coloca o primeiro ponto
    .replace(/(\d{3})(\d)/, "$1.$2") // coloca o segundo ponto
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // coloca o traço
};

export default maskCPF;