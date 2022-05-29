import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  // change : text box에 입력한 내용에 대한 change 변환 내용을 적는다.
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  // reset: 항목이 만들어 진 후, text box의 내용을 reset 하기 위해 만들었다.
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;
