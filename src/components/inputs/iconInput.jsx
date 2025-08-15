export const IconInput = ({ icon, maxLength, type, ...props }) => {
    return (
        <div className="flex gap-3 border-3 border-gray-300 rounded-lg p-2 items-center font-medium">
            <span className="icon text-gray-600">{icon}</span>
            <input className="input text-gray-600 placeholder:text-gray-400 outline-none" maxLength={maxLength || "99"} type={type || "text"} {...props} />
        </div>
    );
};