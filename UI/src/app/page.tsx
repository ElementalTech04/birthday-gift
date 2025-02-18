'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { LanguageButton } from '@/components/LanguageButton';

export default function Home() {
  const router = useRouter();
  const { logout } = useAuth();

  const languages = [
    // National Language
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
    
    // Major Regional Languages
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'sd', name: 'Sindhi', nativeName: 'سنڌي' },
    { code: 'ps', name: 'Pashto', nativeName: 'پښتو' },
    { code: 'bal', name: 'Balochi', nativeName: 'بلوچی' },
    { code: 'skr', name: 'Saraiki', nativeName: 'سرائیکی' },
    { code: 'hno', name: 'Hindko', nativeName: 'ہندکو' },
    
    // Common Second Languages
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
  ];

  const handleLanguageSelect = (languageCode: string) => {
    router.push(`/birthday-message?language=${languageCode}`);
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <button
        onClick={logout}
        className="absolute top-4 right-4 px-4 py-2 text-sm border hover:bg-white duration-100 ease-in-out rounded-md text-white-900 hover:text-black"
      >
        Logout
      </button>
      <main className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Happy Birthday Bro!</h1>
        <p className="text-xl mb-8">I know I am a couple of days late, but I could not let your birthday pass without sending my best wishes your way.</p>
        <p className="text-lg mb-8">I have a special message for you in your preferred language:</p>

        <div className="grid grid-cols-2 gap-4 w-full max-w-xl mx-auto">
          {languages.map((lang) => (
            <LanguageButton
              key={lang.code}
              code={lang.code}
              name={lang.name}
              nativeName={lang.nativeName}
              onClick={handleLanguageSelect}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
