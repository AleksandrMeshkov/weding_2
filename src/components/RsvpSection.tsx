import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';

type AttendanceOption = 'yes' | 'no' | '';
type FormErrors = {
  fullName?: string;
  attendance?: string;
  companionFullName?: string;
  companionAttendance?: string;
};

const RSVP_API_URL = 'https://api.andreyulyana.site/api/rsvp';

const RsvpSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [attendance, setAttendance] = useState<AttendanceOption>('');
  const [includeCompanion, setIncludeCompanion] = useState(false);
  const [companionFullName, setCompanionFullName] = useState('');
  const [companionAttendance, setCompanionAttendance] = useState<AttendanceOption>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isAwaitingSubmitResponse, setIsAwaitingSubmitResponse] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = 'Пожалуйста, укажите имя и фамилию';
    }

    if (!attendance) {
      nextErrors.attendance = 'Пожалуйста, выберите вариант ответа';
    }

    if (includeCompanion && !companionFullName.trim()) {
      nextErrors.companionFullName = 'Пожалуйста, укажите имя и фамилию спутника';
    }

    if (includeCompanion && !companionAttendance) {
      nextErrors.companionAttendance = 'Пожалуйста, выберите вариант ответа для спутника';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsAwaitingSubmitResponse(false);
      setSubmitMessage('');
      return;
    }

    setSubmitError('');
    setSubmitMessage('');
    setIsAwaitingSubmitResponse(true);

    try {
      const formData = new FormData();
      formData.append('name', fullName);
      formData.append('will_attend', attendance);
      formData.append('attendance', attendance);
      if (includeCompanion) {
        formData.append('companion_name', companionFullName);
        formData.append('companion_will_attend', companionAttendance);
        formData.append('companion_attendance', companionAttendance);
      }

      const response = await fetch(RSVP_API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail?.[0]?.msg || 'Ошибка при отправке формы');
      }

      const data = await response.json();
      setSubmitMessage(data.message || 'Спасибо. Ваш ответ отправлен.');
      setSubmitError('');
      setFullName('');
      setAttendance('');
      setIncludeCompanion(false);
      setCompanionFullName('');
      setCompanionAttendance('');
      setErrors({});
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ошибка при отправке. Попробуйте позже.';
      setSubmitError(errorMessage);
      setSubmitMessage('');
    } finally {
      setIsAwaitingSubmitResponse(false);
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
          <p className="font-sans font-semibold text-sm md:text-base text-[#a8854e] tracking-[0.4em] uppercase mb-4">
            Анкета гостя
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3d2e1e] mb-5 uppercase tracking-wide">
            Подтверждение присутствия
          </h2>
          <p className="font-sans text-base md:text-lg text-[#6b5744] leading-relaxed max-w-xl mx-auto">
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
            <label htmlFor="guest-full-name" className="block font-serif text-2xl md:text-3xl text-[#3d2e1e] mb-3">
              Ваше имя и фамилия
            </label>
            <input
              id="guest-full-name"
              name="name"
              type="text"
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
                setErrors((current) => ({ ...current, fullName: undefined }));
                setSubmitError('');
                setSubmitMessage('');
              }}
              placeholder="ФИО"
              className="w-full rounded-2xl border border-[#c9a96e]/30 bg-[#f9f5ef] px-5 py-4 font-sans text-lg text-[#3d2e1e] placeholder:text-[#b7aa9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]"
            />
            {errors.fullName && (
              <p className="mt-2 font-sans text-base text-[#a05a4a]">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-10">
            <p className="font-serif text-2xl md:text-3xl text-[#3d2e1e] mb-4">Вы сможете присутствовать?</p>
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
                    value={option.label}
                    checked={attendance === option.value}
                    onChange={() => {
                      setAttendance(option.value as AttendanceOption);
                      setErrors((current) => ({ ...current, attendance: undefined }));
                      setSubmitError('');
                      setSubmitMessage('');
                    }}
                    className="sr-only"
                  />
                  <span className="font-sans text-lg text-[#6b5744]">{option.label}</span>
                </label>
              ))}
            </div>
            {errors.attendance && (
              <p className="mt-3 font-sans text-base text-[#a05a4a]">{errors.attendance}</p>
            )}
          </div>

          <div className="mb-8">
            <label className="inline-flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeCompanion}
                onChange={(event) => {
                  const nextValue = event.target.checked;
                  setIncludeCompanion(nextValue);
                  setSubmitError('');
                  setSubmitMessage('');
                  if (!nextValue) {
                    setCompanionFullName('');
                    setCompanionAttendance('');
                  }
                  setErrors((current) => ({
                    ...current,
                    companionFullName: undefined,
                    companionAttendance: undefined,
                  }));
                }}
                className="h-5 w-5 rounded border-[#c9a96e]/40 text-[#3d2e1e] focus:ring-[#c9a96e]"
              />
              <span className="font-sans text-lg text-[#6b5744]">
                Добавить спутника
              </span>
            </label>
          </div>

          {includeCompanion && (
            <div className="mb-10 rounded-3xl border border-[#c9a96e]/20 bg-[#f9f5ef]/60 p-6">

              <div className="mb-8">
                <label htmlFor="companion-full-name" className="block font-serif text-2xl md:text-3xl text-[#3d2e1e] mb-3">
                  Имя и фамилия 
                </label>
                <input
                  id="companion-full-name"
                  name="companion_name"
                  type="text"
                  value={companionFullName}
                  onChange={(event) => {
                    setCompanionFullName(event.target.value);
                    setErrors((current) => ({ ...current, companionFullName: undefined }));
                    setSubmitError('');
                    setSubmitMessage('');
                  }}
                  placeholder="ФИО"
                  className="w-full rounded-2xl border border-[#c9a96e]/30 bg-white px-5 py-4 font-sans text-lg text-[#3d2e1e] placeholder:text-[#b7aa9b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]"
                />
                {errors.companionFullName && (
                  <p className="mt-2 font-sans text-base text-[#a05a4a]">{errors.companionFullName}</p>
                )}
              </div>

              <div>
                <p className="font-serif text-2xl md:text-3xl text-[#3d2e1e] mb-4">Сможет присутствовать?</p>
                <div className="space-y-4">
                  {[
                    { value: 'yes', label: 'Да, сможет присутствовать' },
                    { value: 'no', label: 'К сожалению, не сможет присутствовать' },
                  ].map((option) => (
                    <label key={`companion-${option.value}`} className="flex items-center gap-4 cursor-pointer">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-200 ${
                          companionAttendance === option.value
                            ? 'border-[#c9a96e] bg-[#c9a96e]/15'
                            : 'border-[#8a7560]/60 bg-transparent'
                        }`}
                        aria-hidden="true"
                      >
                        <span
                          className={`h-3 w-3 rounded-full bg-[#c9a96e] transition-opacity duration-200 ${
                            companionAttendance === option.value ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </span>
                      <input
                        type="radio"
                        name="companion_attendance"
                        value={option.label}
                        checked={companionAttendance === option.value}
                        onChange={() => {
                          setCompanionAttendance(option.value as AttendanceOption);
                          setErrors((current) => ({ ...current, companionAttendance: undefined }));
                          setSubmitError('');
                          setSubmitMessage('');
                        }}
                        className="sr-only"
                      />
                      <span className="font-sans text-lg text-[#6b5744]">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.companionAttendance && (
                  <p className="mt-3 font-sans text-base text-[#a05a4a]">{errors.companionAttendance}</p>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              disabled={isAwaitingSubmitResponse}
              className="inline-flex min-w-48 items-center justify-center rounded-full bg-[#3d2e1e] px-8 py-4 font-sans text-base md:text-lg uppercase tracking-[0.25em] text-[#f9f5ef] transition-colors duration-200 hover:bg-[#533f29] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]"
            >
              {isAwaitingSubmitResponse ? 'Отправка...' : 'Отправить'}
            </button>

            {submitMessage && (
              <p className="font-sans text-base text-[#8a7560] leading-relaxed md:max-w-xs">
                {submitMessage}
              </p>
            )}
          </div>

          {submitError && (
            <p className="mt-4 font-sans text-base text-[#a05a4a]">{submitError}</p>
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