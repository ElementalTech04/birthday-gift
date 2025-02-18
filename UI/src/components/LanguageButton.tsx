'use client';

interface LanguageButtonProps {
  code: string;
  name: string;
  nativeName: string;
  onClick: (code: string) => void;
}

export function LanguageButton({ code, name, nativeName, onClick }: LanguageButtonProps) {
  return (
    <button
      key={code}
      onClick={() => onClick(code)}
      className="rounded-lg bg-blue-500 text-white py-4 px-6 text-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
    >
      <span className="flex flex-col items-center gap-1">
        <span className="text-lg">{nativeName}</span>
        <span className="text-sm opacity-75">{name}</span>
      </span>
    </button>
  );
}
