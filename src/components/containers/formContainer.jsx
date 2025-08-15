export const FormContainer = ({ title, buttonText, onSubmit, children }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // evita recarregar a página
        onSubmit?.();
      }}
      className="border border-gray-300 rounded-xl shadow-lg min-w-md overflow-hidden bg-white "
    >
      {/* Cabeçalho vermelho */}
      <div className="bg-red-600 text-white text-2xl text-center py-3 font-semibold">
        {title}
      </div>

      {/* Conteúdo do formulário */}
      <div className="p-8 flex flex-col gap-4">
        {children}
      </div>

      {/* Botão de envio */}
      <div className="font-bold text-center p-8 rounded-md w-full flex justify-center">
        <button
          type="submit"
          className="bg-red-600 text-white px-16 py-3 rounded w-full hover:scale-101 transition-transform duration-200  active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};