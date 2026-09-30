import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const initialForm = { name: '', email: '', password: '', passwordConfirm: '' };

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
    setSubmitted(false);
  };

  const isComplete = Object.values(form).every((value) => value.trim() !== '');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-5 py-10">
      <section className="w-full max-w-[274px] bg-primary-100 p-4">
        <div className="bg-white px-4 py-7">
          <header className="mx-auto mb-5 w-[176px]">
          <p className="mb-2 text-[9px] font-semibold leading-none tracking-[0.18em] text-primary-700">LIKELION</p>
          <h1 className="text-2xl font-semibold leading-[1.2] text-primary-900">회원가입</h1>
          <p className="mt-1.5 text-[10px] font-normal leading-[1.4] text-neutral-300">필요한 정보를 입력하세요</p>
        </header>

        <form className="mx-auto flex w-[176px] flex-col gap-3" onSubmit={handleSubmit}>
          <Input label="이름" name="name" placeholder="이름을 입력해주세요" value={form.name} onChange={handleChange} autoComplete="name" />
          <Input label="이메일" name="email" type="email" placeholder="이메일을 입력해주세요" value={form.email} onChange={handleChange} autoComplete="email" />
          <Input label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" value={form.password} onChange={handleChange} autoComplete="new-password" />
          <Input label="비밀번호 확인" name="passwordConfirm" type="password" placeholder="비밀번호를 다시 입력해주세요" value={form.passwordConfirm} onChange={handleChange} autoComplete="new-password" />

          <div className="mt-6">
            <Button
              text="회원가입"
              type="submit"
              disabled={!isComplete}
              active={submitted}
            />
          </div>

          {submitted && <p className="text-center text-[10px] font-semibold text-primary-800" role="status">입력이 완료되었습니다.</p>}
        </form>
        </div>
      </section>
    </main>
  );
}
