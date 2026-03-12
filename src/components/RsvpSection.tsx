import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';

type AttendanceOption = 'yes' | 'no' | '';
type FormErrors = { fullName?: string; attendance?: string };

const RSVP_EMAIL = import.meta.env.VITE_RSVP_EMAIL;
const attendanceLabels: Record<Exclude<AttendanceOption, ''>, string> = {
  yes: 'Да, с радостью приду',
  no: 'К сожалению, не смогу присутствовать',
};

const RsvpSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [attendance, setAttendance] = useState<AttendanceOption>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = 'Пожалуйста, укажите имя и фамилию';
    }

    if (!attendance) {
      nextErrors.attendance = 'Пожалуйста, выберите вариант ответа';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitMessage('');
      return;
    }

    if (!RSVP_EMAIL) {
      setSubmitError('Не указан адрес для получения ответов. Добавьте VITE_RSVP_EMAIL в .env.local.');
      setSubmitMessage('');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(RSVP_EMAIL)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: fullName.trim(),
          attendance: attendanceLabels[attendance as Exclude<AttendanceOption, ''>],
          _subject: 'Новый ответ из анкеты гостя',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('request_failed');
      }

      setSubmitMessage('Спасибо. Ваш ответ отправлен.');
      setFullName('');
      setAttendance('');
      setErrors({});
    } catch {
      setSubmitError('Не удалось отправить ответ. Попробуйте ещё раз чуть позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f9f5ef] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs text-[#c9a96e] tracking-[0.4em] uppercase mb-4">
            Анкета гостя
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#3d2e1e] mb-5 uppercase tracking-wide">
            Подтверждение присутствия
          </h2>
          <p className="font-sans text-sm md:text-base text-[#6b5744] leading-relaxed max-w-xl mx-auto">
            Пожалуйста, подтвердите своё присутствие, чтобы мы могли с заботой подготовить этот день для каждого гостя.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-white/60 border border-[#c9a96e]/20 rounded-[2rem] shadow-sm p-8 md:p-10 max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <label htmlFor="guest-full-name" className="block font-serif text-xl text-[#3d2e1e] mb-3">
              Ваше имя и фамилия
            </label>
            <input
              id="guest-full-name"
              type="text"
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
                setErrors((current) => ({ ...current, fullName: undefined }));
                setSubmitError('');
              }}
              placeholder="ФИО"
              className="w-full rounded-2xl border border-[#c9a96e]/30 bg-[#f9f5ef] px-5 py-4 font-sans text-base text-[#3d2e1e] placeholder:text-[#b7aa9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]"
            />
            {errors.fullName && (
              <p className="mt-2 font-sans text-sm text-[#a05a4a]">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-10">
            <p className="font-serif text-xl text-[#3d2e1e] mb-4">Вы сможете присутствовать?</p>
            <div className="space-y-4">
              {[
                { value: 'yes', label: 'Да, с радостью приду' },
                { value: 'no', label: 'К сожалению, не смогу присутствовать' },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-4 cursor-pointer">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-200 ${
                      attendance === option.value
                        ? 'border-[#c9a96e] bg-[#c9a96e]/15'
                        : 'border-[#8a7560]/60 bg-transparent'
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className={`h-3 w-3 rounded-full bg-[#c9a96e] transition-opacity duration-200 ${
                        attendance === option.value ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </span>
                  <input
                    type="radio"
                    name="attendance"
                    value={option.value}
                    checked={attendance === option.value}
                    onChange={(event) => {
                      setAttendance(event.target.value as AttendanceOption);
                      setErrors((current) => ({ ...current, attendance: undefined }));
                      setSubmitError('');
                    }}
                    className="sr-only"
                  />
                  <span className="font-sans text-base text-[#6b5744]">{option.label}</span>
                </label>
              ))}
            </div>
            {errors.attendance && (
              <p className="mt-3 font-sans text-sm text-[#a05a4a]">{errors.attendance}</p>
            )}
          </div>

          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-w-48 items-center justify-center rounded-full bg-[#3d2e1e] px-8 py-4 font-sans text-sm uppercase tracking-[0.25em] text-[#f9f5ef] transition-colors duration-200 hover:bg-[#533f29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </button>

            {submitMessage && (
              <p className="font-sans text-sm text-[#8a7560] leading-relaxed md:max-w-xs">
                {submitMessage}
              </p>
            )}
          </div>

          {submitError && (
            <p className="mt-4 font-sans text-sm text-[#a05a4a]">{submitError}</p>
          )}
        </motion.form>

        <div className="flex items-center justify-center mt-12" aria-hidden="true">
          <div className="h-px w-28 bg-[#3d2e1e]/70" />
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;