'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function BirthdayMessage() {
  const searchParams = useSearchParams();
  const language = searchParams.get('language');
  const { token } = useAuth();
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      if (!language) {
        setError('Language parameter is missing');
        setLoading(false);
        return;
      }

      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          throw new Error('API URL is not configured');
        }
        const response = await fetch(`${apiUrl}/birthday-message?language=${language}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch birthday message');
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, [language]);

  if (!language) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-8">
        <div className="text-red-500 text-xl">No language selected. Please go back and select a language.</div>
        <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-8">
        <div className="text-2xl">Loading...</div>
        <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-8">
        <div className="text-red-500 text-xl">{error}</div>
        <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold mb-8">🎉 Happy Birthday Bro! 🎉</h1>
        <div className="text-2xl whitespace-pre-wrap">{message}</div>
      </div>
    </div>
  );
}
