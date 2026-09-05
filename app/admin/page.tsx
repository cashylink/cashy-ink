"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { isAdminEmail } from "@/lib/admin";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";
import AdminPromo from "@/components/admin-promo";
import AdminPlans from "@/components/admin-plans";
import AdminDownloads from "@/components/admin-downloads";

export default function AdminPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      router.replace("/admin/login");
      return;
    }
    return onAuthStateChanged(auth, (user) => {
      if (!user || !isAdminEmail(user.email)) {
        router.replace("/admin/login");
        return;
      }
      setReady(true);
    });
  }, [router]);

  const logout = async () => {
    const auth = getFirebaseAuth();
    if (auth) await signOut(auth);
    router.replace("/admin/login");
  };

  if (!ready) {
    return (
      <main className="px-4 py-20 text-center text-gray-400" dir="rtl">
        جاري التحقق من الجلسة...
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl space-y-12 px-4 py-10" dir="rtl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-indigo-300">لوحة الأدمن</p>
          <h1 className="mt-1 font-nacelle text-2xl font-semibold text-white">
            إدارة الموقع
          </h1>
        </div>
        <div className="flex gap-2">
          <Link href="/#pricing" className="btn-sm bg-gray-800 text-gray-200">
            عرض الموقع
          </Link>
          <button
            type="button"
            onClick={logout}
            className="btn-sm bg-gray-800 text-gray-200"
          >
            خروج
          </button>
        </div>
      </div>

      {!isFirebaseConfigured() ? (
        <p className="rounded-xl bg-red-500/10 px-3 py-2 text-sm text-red-300">
          Firebase غير مضبوط.
        </p>
      ) : null}

      <AdminPromo />
      <AdminPlans />
      <AdminDownloads />
    </main>
  );
}
