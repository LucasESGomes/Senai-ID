import { UploadCloud } from "lucide-react";
import { useId } from "react";

export const FileInput = ({ onChange, accept = "image/*", label = "Selecionar imagem" }) => {
  const inputId = useId(); // Gera um ID único por instância

  return (
    <div>
      <label
        htmlFor={inputId}
        className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium hover:text-red-600 transition"
      >
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded border border-gray-300 hover:bg-gray-200 transition">
          <UploadCloud size={18} className="text-gray-600" />
          <span className="text-sm">{label}</span>
        </div>
      </label>
      <input
        id={inputId}
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
};