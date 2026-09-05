"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { isAdminEmail } from "@/lib/admin";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    return onAuthStateChanged(auth, (user) => {
      if (isAdminEmail(user?.email)) {
        router.replace("/admin");
      }
    });
  }, [router]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    const auth = getFirebaseAuth();
    if (!auth) {
      setError("Firebase غير مضبوط. أضف بيانات المشروع في متغيرات البيئة.");
      return;
    }

    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password,
      );
      if (!isAdminEmail(result.user.email)) {
        await auth.signOut();
        setError("هذا الحساب غير مسموح له بدخول لوحة الأدمن.");
        return;
      }
      router.replace("/admin");
    } catch {
      setError("البريد أو كلمة المرور غير صحيحة.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16" dir="rtl">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-2xl bg-gray-950 p-6 ring-1 ring-gray-800"
      >
        <p className="text-xs font-semibold text-indigo-300">لوحة الأدمن</p>
        <h1 className="mt-2 font-nacelle text-2xl font-semibold text-white">
          تسجيل الدخول
        </h1>

        {!isFirebaseConfigured() ? (
          <p className="mt-4 rounded-xl bg-red-500/10 px-3 py-2 text-sm text-red-300">
            أضف إعدادات Firebase في الملف البيئي قبل تسجيل الدخول.
          </p>
        ) : null}

        <label className="mt-6 block text-sm text-gray-300">
          البريد الإلكتروني
          <input
            className="form-input mt-2 w-full"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label className="mt-4 block text-sm text-gray-300">
          كلمة المرور
          <input
            className="form-input mt-2 w-full"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        {error ? (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="btn mt-6 w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white disabled:opacity-60"
        >
          {loading ? "جاري الدخول..." : "دخول"}
        </button>
      </form>
    </main>
  );
}
