import { useEffect, useState } from 'react';

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //Syncs local storage to watched state
  useEffect(
    function () {
      localStorage.setItem('value', JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
