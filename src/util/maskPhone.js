const maskPhone = (value) => {
  return value
    .replace(/\D/g, "") // remove tudo que não é número
    .replace(/(\d{2})(\d)/, "($1) $2") // adiciona parênteses nos 2 primeiros dígitos
    .replace(/(\d{5})(\d)/, "$1-$2") // adiciona o hífen depois do quinto dígito
    .replace(/(-\d{4})\d+?$/, "$1"); // evita digitar mais do que 4 números após o hífen
};

export default maskPhone;
