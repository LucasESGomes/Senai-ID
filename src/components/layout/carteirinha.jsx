import senai from "../../assets/senai.png";
import redStamp from "../../assets/redStamp.svg";

const Carteirinha = ({ 
  photoPreview, 
  name = "Nome do Estudante", 
  dateOfBirth = "00/00/0000", 
  course = "Curso do Estudante", 
  matricula = "00000000", 
  cpf = "000.000.000-00" 
}) => {
  return (
    <div className="flex flex-col items-center w-[500px] gap-6 bg-white rounded-lg shadow-md py-8 px-16">
      {/* Logo SENAI */}
      <img className="w-32" src={senai} alt="Logo SENAI" />

      {/* Nome da escola */}
      <h2 className="font-bold text-xl text-center">Escola Senai Nami Jafet</h2>

      {/* Foto do estudante */}
      <div className="relative">
        <img
          src={photoPreview || "/placeholder-foto.png"}
          alt=""
          className="w-40 h-40 rounded-full object-cover border-2 border-red-500 bg-gray-800"
        />
      </div>
      
      {/* Nome do estudante */}
      <h1 className="font-medium text-center text-lg w-full border-b border-gray-300 pb-4">
        {name}
      </h1>

      {/* Seção de CPF e Matrícula */}
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

      {/* Seção de Data de Nascimento e Carimbo */}
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

      {/* Curso */}
      <div className="w-full text-center mt-5 flex flex-col">
        <span className="text-base">Curso</span>
        <span className="text-lg font-bold text-gray-800">{course}</span>
      </div>

      
    </div>
  );
};

export default Carteirinha;