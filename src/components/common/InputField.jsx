import React from 'react';

function InputField({ label, type, id, value, onChange, placeholder, required, autoComplete = "off", containerClassName = '' }) {
  return (
    <div className={containerClassName}>
      <label htmlFor={id} className="block text-sm font-medium text-pgx-light-gray mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="mt-1 block w-full px-3 py-2 bg-pgx-dark border border-gray-600 rounded-md shadow-sm text-pgx-white placeholder-pgx-light-gray focus:outline-none focus:ring-1 focus:ring-pgx-blue focus:border-pgx-blue sm:text-sm"
      />
    </div>
  );
}

export default InputField;