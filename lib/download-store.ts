import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { DOWNLOAD_APPS, type DownloadLink } from "@/lib/download-apps";

const COLLECTION = "downloads";

export function emptyDownloads(): DownloadLink[] {
  return DOWNLOAD_APPS.map((app) => ({
    id: app.id,
    title: app.title,
    summary: app.summary,
    url: "",
  }));
}

export async function fetchDownloadLinks(): Promise<DownloadLink[]> {
  const db = getFirebaseDb();
  const base = emptyDownloads();
  if (!db) return base;

  const snap = await getDocs(collection(db, COLLECTION));
  const urls = new Map<string, string>();
  snap.forEach((item) => {
    const data = item.data() as { url?: string };
    urls.set(item.id, typeof data.url === "string" ? data.url.trim() : "");
  });

  return base.map((app) => ({
    ...app,
    url: urls.get(app.id) ?? "",
  }));
}

export async function saveDownloadLink(id: string, url: string) {
  const db = getFirebaseDb();
  if (!db) throw new Error("Firebase غير متصل.");
  const app = DOWNLOAD_APPS.find((item) => item.id === id);
  if (!app) throw new Error("تطبيق غير معروف.");

  await setDoc(doc(db, COLLECTION, id), {
    title: app.title,
    url: url.trim(),
    updatedAt: serverTimestamp(),
  });
}
