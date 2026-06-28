interface ScoreInputProps {
  label: string;
  description: string;
  value: number;
  onChange: (score: number) => void;
}

export default function ScoreInput({ label, description, value, onChange }: ScoreInputProps) {
  return (
    <fieldset className="rounded-xl border border-slate-200 bg-white p-4">
      <legend className="sr-only">Score {label}</legend>
      <div className="mb-3 sm:flex sm:items-start sm:justify-between sm:gap-4">
        <div>
          <p className="text-sm font-semibold text-ink">{label}</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
        </div>
        <span className="mt-2 inline-flex rounded-md bg-navy px-2.5 py-1 text-sm font-bold text-white sm:mt-0">{value}/5</span>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map((score) => (
          <label key={score} className="cursor-pointer">
            <input
              type="radio"
              name={label}
              value={score}
              checked={value === score}
              onChange={() => onChange(score)}
              className="peer sr-only"
            />
            <span className="grid h-9 place-items-center rounded-md border border-slate-200 text-sm font-semibold text-slate-500 transition hover:border-teal-500 peer-checked:border-teal-600 peer-checked:bg-teal-50 peer-checked:text-teal-700 peer-focus-visible:ring-2 peer-focus-visible:ring-teal-500 peer-focus-visible:ring-offset-2">
              {score}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
