/* eslint-disable react/prop-types */
const InputField = ({ id, placeholder, ...props }) => (
  <input
      type="search"
      id={id}
      className="block w-full h-11 p-4 ps-10 text-sm text-gray-900  bg-white border rounded-xl"
      placeholder={placeholder}
      required
      {...props}
  />
);

export default InputField;