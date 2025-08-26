const FormRow = ({ children }) => {
  return (
    <div className="flex justify-between items-center gap-4 w-full flex-wrap">
      {children}
    </div>
  );
};

export default FormRow;