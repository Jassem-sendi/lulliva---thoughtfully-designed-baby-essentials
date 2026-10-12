import { Subscriber } from '../types';

const STORAGE_KEY = 'lulliva_subscribers_v1';

export function getSubscribers(): Subscriber[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveSubscriber(email: string, source: string = 'website_prelaunch'): { success: boolean; message: string; duplicate?: boolean } {
  const normalizedEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(normalizedEmail)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  const existing = getSubscribers();
  const isDuplicate = existing.some((sub) => sub.email === normalizedEmail);

  if (isDuplicate) {
    return {
      success: true,
      duplicate: true,
      message: "You are already on the Lulliva launch list. We'll be in touch as soon as we launch!",
    };
  }

  const newSub: Subscriber = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    email: normalizedEmail,
    subscribedAt: new Date().toISOString(),
    source,
  };

  try {
    const updated = [newSub, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return {
      success: true,
      duplicate: false,
      message: "Thank you for joining. You're officially on the Lulliva pre-launch list.",
    };
  } catch (err) {
    return {
      success: false,
      message: 'Unable to save subscription at this time. Please try again.',
    };
  }
}

export function exportSubscribersCSV(): void {
  const subscribers = getSubscribers();
  if (!subscribers.length) {
    alert('No subscribers recorded yet.');
    return;
  }
  const headers = ['ID', 'Email', 'Subscribed At', 'Source'];
  const rows = subscribers.map((s) => [s.id, s.email, s.subscribedAt, s.source]);
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    [headers.join(','), ...rows.map((e) => e.map((val) => `"${val}"`).join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `lulliva_subscribers_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
