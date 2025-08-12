import { Eye, EyeClosed, Lock } from "lucide-react";
import { useState } from "react";

export const PasswordInput = ({...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex gap-3 border-3 border-gray-300 rounded-lg p-2 items-center">
      <Lock size={20} className="text-gray-600"/>

      {/* Campo de senha */}
      <input
        type={showPassword ? "text" : "password"}
        className="input flex-1 outline-none bg-transparent"
        {...props}
      />

      {/* Botão para mostrar/ocultar */}
      <button
        type="button"
        className="ml-2 text-gray-500 hover:text-gray-700"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <Eye className="text-gray-600" size={20} />: <EyeClosed className="text-gray-600" size={20} />}
      </button>
    </div>
  );
};
