export const FormContainer = ({ title, buttonText, onSubmit, children }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // evita recarregar a página
        onSubmit?.();
      }}
      className="border border-gray-300 rounded-xl shadow-lg max-w-md w-full overflow-hidden bg-white"
    >
      {/* Cabeçalho vermelho */}
      <div className="bg-red-600 text-white text-2xl text-center py-3 font-semibold">
        {title}
      </div>

      {/* Conteúdo do formulário */}
      <div className="p-4 flex flex-col gap-4">
        {children}
      </div>

      {/* Botão de envio */}
      <div className="font-bold text-center p-5 rounded-md mt-16 w-full flex justify-center">
        <button
          type="submit"
          className="bg-red-600 text-white px-16 py-3 rounded  transition w-"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};
