export default function HeroPreview() {
  return (
    <div className="aspect-video w-full bg-gray-950">
      <div className="flex h-full flex-col p-4 sm:p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between rounded-xl bg-gray-900/80 px-4 py-3 ring-1 ring-gray-800">
          <span className="text-sm font-semibold text-gray-200">Cashy Link</span>
          <span className="text-xs text-indigo-200/65">إدارة المحل</span>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "المبيعات", value: "عمليات اليوم" },
            { label: "المحافظ", value: "حركة الأموال" },
            { label: "الأقساط", value: "مواعيد السداد" },
            { label: "الصيانة", value: "أجهزة العملاء" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-between rounded-2xl bg-linear-to-br from-gray-900/80 via-gray-800/40 to-gray-900/80 p-3 ring-1 ring-gray-800 sm:p-4"
            >
              <span className="text-xs text-indigo-200/65 sm:text-sm">
                {item.value}
              </span>
              <span className="mt-3 font-nacelle text-sm font-semibold text-gray-200 sm:text-base">
                {item.label}
              </span>
              <span className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-gray-800">
                <span className="w-2/3 rounded-full bg-indigo-500" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
