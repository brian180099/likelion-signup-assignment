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
    <main className="min-h-screen bg-primary-900 px-5 py-12 sm:py-20">
      <section className="mx-auto w-full max-w-[460px] rounded-3xl border border-primary-800 bg-white p-6 shadow-[0_24px_70px_rgba(3,51,42,0.12)] sm:p-10">
        <header className="mb-9">
          <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-primary-300">LIKELION</p>
          <h1 className="title-sm text-primary-100 sm:text-4xl">회원가입</h1>
          <p className="body-md mt-3 text-neutral-300">필요한 정보를 입력하고 계정을 만들어보세요.</p>
        </header>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <Input label="이름" name="name" placeholder="이름을 입력해주세요" value={form.name} onChange={handleChange} autoComplete="name" />
          <Input label="이메일" name="email" type="email" placeholder="이메일을 입력해주세요" value={form.email} onChange={handleChange} autoComplete="email" />
          <Input label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" value={form.password} onChange={handleChange} autoComplete="new-password" />
          <Input label="비밀번호 확인" name="passwordConfirm" type="password" placeholder="비밀번호를 다시 입력해주세요" value={form.passwordConfirm} onChange={handleChange} autoComplete="new-password" />

          <div className="mt-3">
            <Button
              text="회원가입"
              type="submit"
              disabled={!isComplete}
              active={submitted}
            />
          </div>

          {submitted && <p className="body-sm text-center font-semibold text-primary-200" role="status">입력이 완료되었습니다.</p>}
        </form>
      </section>
    </main>
  );
}
