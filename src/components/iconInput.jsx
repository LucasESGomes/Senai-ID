export const IconInput = ({ icon, ...props }) => {
    return (
        <div className="flex gap-3 border-3 border-gray-300 rounded-lg p-2 items-center font-medium">
            <span className="icon text-gray-600">{icon}</span>
            <input className="input text-gray-600 placeholder:text-gray-600 outline-none" {...props} />
        </div>
    );
};