import senai from "../../assets/senai.png";
import redStamp from "../../assets/redStamp.svg";
import blueStamp from "../../assets/blueStamp.svg";

const Carteirinha = ({ 
  photoPreview, 
  name = "Nome do Estudante", 
  dateOfBirth = "00/00/0000", 
  course = "", 
  matricula = "00000000", 
  cpf = "000.000.000-00",
  type = "aluno", // 'aluno' ou 'funcionario'
  role = "", // cargo do funcionário
  pis = "", // PIS do funcionário
  nif = "" // NIF do funcionário
}) => {
  const borderColor = type === "funcionario" ? "border-blue-600" : "border-red-600";
  
  return (
    <div className="flex flex-col items-center w-[500px] gap-6 bg-white rounded-lg shadow-md py-8 px-16">
      {/* Logo SENAI */}
      <img className="w-32" src={senai} alt="Logo SENAI" />

      {/* Nome da escola */}
      <h2 className="font-bold text-xl text-center">Escola Senai Nami Jafet</h2>

      {/* Foto do estudante/funcionário */}
      <div className="relative">
        <img
          src={photoPreview || "/placeholder-foto.png"}
          alt=""
          className={`w-40 h-40 rounded-full object-cover border-2 ${borderColor} bg-gray-800`}
        />
      </div>
      
      <div>
        {/* Cargo (apenas para funcionários) */}
        {type === "funcionario" && (
          <div className="text-md text-center">
            {role}
          </div>
        )}
        {/* Nome */}
        <h1 className="text-center text-2xl font-bold w-full border-b border-gray-300 pb-4">
          {name}
        </h1>
      </div>

      {/* Seção de informações específicas */}
      {type === "aluno" ? (
        <>
          {/* CPF e Matrícula (aluno) */}
          <div className="w-full flex justify-between text-gray-700 font-medium">
            <div className="flex flex-col">
              <span className="text-base">CPF</span>
              <span className="text-lg font-bold">{cpf}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base">Matrícula</span>
              <span className="text-lg font-bold">{matricula}</span>
            </div>
          </div>

          {/* Data de Nascimento (aluno) */}
          <div className="w-full flex justify-between items-end text-gray-700 font-medium">
            <div className="flex flex-col">
              <span className="text-base">Nascido em</span>
              <span className="text-lg font-bold">{dateOfBirth}</span>
            </div>
            <img 
              className="w-24 h-24 object-contain" 
              src={redStamp} 
              alt="Carimbo de validação" 
            />
          </div>

          {/* Curso (aluno) */}
          <div className="w-full text-center mt-5 flex flex-col">
            <span className="text-base">Curso</span>
            <span className="text-lg font-bold text-gray-800">{course}</span>
          </div>
        </>
      ) : (
        <>
          {/* CPF e PIS (funcionário) */}
          <div className="w-full flex justify-between text-gray-700 font-medium">
            <div className="flex flex-col">
              <span className="text-base">CPF</span>
              <span className="text-lg font-bold">{cpf}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base">PIS</span>
              <span className="text-lg font-bold">{pis}</span>
            </div>
          </div>

          {/* NIF (funcionário) */}
          <div className="w-full flex justify-between items-end text-gray-700 font-medium">
            <div className="flex flex-col">
              <span className="text-base">NIF</span>
              <span className="text-lg font-bold">{nif}</span>
            </div>
            <img 
              className="w-24 h-24 object-contain" 
              src={blueStamp} 
              alt="Carimbo de validação" 
            />
          </div>

          {/* Departamento/Função (funcionário) */}
          <div className="w-full text-center mt-5 flex flex-col">
            <span className="text-base">Departamento</span>
            <span className="text-lg font-bold text-gray-800">{course}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Carteirinha;