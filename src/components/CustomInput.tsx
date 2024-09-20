import { useState } from 'react';

export function CustomInput ({ handleSubmit, focus, borderColor } : {handleSubmit: (value: string) => void, focus: boolean, borderColor: string}) {
  const [value, setValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit(value);
      value && setValue('');
    }
  };

  return (
    <input
      className={`h-20 w-40 border border-gray-300 rounded px-2 text-center ${borderColor} dark:text-black`}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder=""
      autoFocus={focus}
    />
  );
}