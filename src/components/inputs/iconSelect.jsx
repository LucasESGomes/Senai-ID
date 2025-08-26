export const IconSelect = ({ icon, width, label, options, ...props }) => {
    return (
        <div className="text-gray-200">
            {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}

            <div className={"flex gap-3 border-3 border-gray-300 rounded-lg p-2 items-center font-medium" + (width ? ` w-${width}` : " w-full")}>
                <span className="icon text-gray-600">{icon}</span>
                <select className="input w-full text-gray-600 placeholder:text-gray-400 outline-none" {...props} >
                    {options && options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};