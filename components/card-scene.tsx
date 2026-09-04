export type SceneKind =
  | "phones"
  | "accessories"
  | "wallet"
  | "installments"
  | "debts"
  | "repair"
  | "shop"
  | "reports"
  | "merchant"
  | "sale"
  | "track"
  | "dues";

export default function CardScene({
  kind,
  size = "card",
}: {
  kind: SceneKind;
  size?: "card" | "hero";
}) {
  const tall = size === "hero";

  return (
    <div
      className={`relative z-10 flex items-center justify-center overflow-hidden ${tall ? "h-72 w-full" : "h-28 w-full"}`}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,107,255,0.32),transparent_70%)]" />
      <svg
        viewBox="0 0 160 120"
        className={tall ? "h-44 w-auto" : "h-24 w-auto"}
        fill="none"
      >
        {kind === "phones" && <PhonesScene />}
        {kind === "accessories" && <AccessoriesScene />}
        {kind === "wallet" && <WalletScene />}
        {kind === "installments" && <InstallmentsScene />}
        {kind === "debts" && <DebtsScene />}
        {kind === "repair" && <RepairScene />}
        {kind === "shop" && <ShopScene />}
        {kind === "reports" && <ReportsScene />}
        {kind === "merchant" && <MerchantScene />}
        {kind === "sale" && <SaleScene />}
        {kind === "track" && <TrackScene />}
        {kind === "dues" && <DuesScene />}
      </svg>
    </div>
  );
}

function PhonesScene() {
  return (
    <g>
      <rect
        x="58"
        y="18"
        width="44"
        height="84"
        rx="8"
        className="animate-[scene-float_3s_ease-in-out_infinite]"
        stroke="#34C36F"
        strokeWidth="2.5"
      />
      <rect x="66" y="28" width="28" height="48" rx="3" fill="#312E81" />
      <circle cx="80" cy="88" r="3" fill="#2F6BFF">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

function AccessoriesScene() {
  return (
    <g className="animate-[scene-float_3.2s_ease-in-out_infinite]">
      <path
        d="M48 58c0-18 14-32 32-32s32 14 32 32"
        stroke="#34C36F"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="42" y="54" width="14" height="22" rx="7" fill="#2F6BFF" />
      <rect x="104" y="54" width="14" height="22" rx="7" fill="#2F6BFF" />
    </g>
  );
}

function WalletScene() {
  return (
    <g>
      <rect
        x="36"
        y="38"
        width="88"
        height="52"
        rx="8"
        stroke="#34C36F"
        strokeWidth="2.5"
      />
      <rect x="36" y="38" width="88" height="16" fill="#4338CA" />
      <circle
        cx="108"
        cy="70"
        r="8"
        fill="#A5B4FC"
        className="origin-center animate-[scene-pulse_1.8s_ease-in-out_infinite]"
      />
    </g>
  );
}

function InstallmentsScene() {
  return (
    <g>
      <rect
        x="40"
        y="22"
        width="80"
        height="78"
        rx="8"
        stroke="#34C36F"
        strokeWidth="2.5"
      />
      <path d="M40 42h80" stroke="#4F46E5" />
      <g fill="#34C36F">
        <circle cx="58" cy="58" r="4">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="58" r="4">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="102" cy="58" r="4">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="58" cy="78" r="4">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="78" r="4" fill="#C7D2FE" />
      </g>
    </g>
  );
}

function DebtsScene() {
  return (
    <g className="animate-[scene-float_2.8s_ease-in-out_infinite]">
      <ellipse cx="80" cy="82" rx="28" ry="10" fill="#312E81" />
      <ellipse cx="80" cy="64" rx="28" ry="10" fill="#4338CA" />
      <ellipse cx="80" cy="46" rx="28" ry="10" fill="#2F6BFF" />
      <ellipse cx="80" cy="38" rx="28" ry="10" stroke="#C7D2FE" strokeWidth="2" />
    </g>
  );
}

function RepairScene() {
  return (
    <g>
      <rect
        x="42"
        y="34"
        width="40"
        height="62"
        rx="6"
        stroke="#34C36F"
        strokeWidth="2.5"
      />
      <g className="origin-[110px_52px] animate-[scene-spin_3s_linear_infinite]">
        <path
          d="M98 40h24l-8 8 12 12-10 10-12-12-8 8V40Z"
          fill="#2F6BFF"
        />
      </g>
    </g>
  );
}

function ShopScene() {
  return (
    <g>
      <path
        d="M32 52h96l-8 48H40L32 52Z"
        stroke="#34C36F"
        strokeWidth="2.5"
      />
      <path d="M40 52V36h80v16" stroke="#2F6BFF" strokeWidth="2.5" />
      <rect x="70" y="70" width="20" height="30" fill="#4338CA">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
    </g>
  );
}

function ReportsScene() {
  return (
    <g>
      <rect x="28" y="20" width="104" height="80" rx="8" stroke="#34C36F" strokeWidth="2.5" />
      <rect x="44" y="70" width="12" height="18" fill="#2F6BFF">
        <animate attributeName="height" values="12;28;12" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="y" values="76;60;76" dur="1.8s" repeatCount="indefinite" />
      </rect>
      <rect x="64" y="54" width="12" height="34" fill="#34C36F">
        <animate attributeName="height" values="20;40;20" dur="1.8s" begin="0.2s" repeatCount="indefinite" />
        <animate attributeName="y" values="68;48;68" dur="1.8s" begin="0.2s" repeatCount="indefinite" />
      </rect>
      <rect x="84" y="46" width="12" height="42" fill="#A5B4FC">
        <animate attributeName="height" values="24;46;24" dur="1.8s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="y" values="64;42;64" dur="1.8s" begin="0.4s" repeatCount="indefinite" />
      </rect>
      <rect x="104" y="58" width="12" height="30" fill="#2F6BFF">
        <animate attributeName="height" values="16;34;16" dur="1.8s" begin="0.1s" repeatCount="indefinite" />
        <animate attributeName="y" values="72;54;72" dur="1.8s" begin="0.1s" repeatCount="indefinite" />
      </rect>
    </g>
  );
}

function MerchantScene() {
  return (
    <g className="animate-[scene-float_3s_ease-in-out_infinite]">
      <circle cx="80" cy="40" r="16" stroke="#34C36F" strokeWidth="2.5" />
      <path
        d="M52 96c4-22 16-32 28-32s24 10 28 32"
        stroke="#2F6BFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  );
}

function SaleScene() {
  return (
    <g>
      <rect x="44" y="22" width="72" height="84" rx="6" stroke="#34C36F" strokeWidth="2.5" />
      <path d="M56 42h48M56 54h40M56 66h32" stroke="#A5B4FC" strokeWidth="3" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0 80;80 0" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="108" cy="86" r="10" fill="#22C55E">
        <animate attributeName="r" values="8;11;8" dur="1.4s" repeatCount="indefinite" />
      </circle>
    </g>
  );
}

function TrackScene() {
  return (
    <g>
      <path
        d="M28 84c16-28 28-44 52-44s36 16 52 44"
        stroke="#4F46E5"
        strokeWidth="2.5"
        strokeDasharray="6 6"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="24;0"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </path>
      <circle
        cx="80"
        cy="40"
        r="8"
        fill="#2F6BFF"
        className="animate-[scene-pulse_1.6s_ease-in-out_infinite]"
      />
    </g>
  );
}

function DuesScene() {
  return (
    <g>
      <rect
        x="28"
        y="24"
        width="56"
        height="72"
        rx="8"
        stroke="#34C36F"
        strokeWidth="2.5"
      />
      <path d="M28 42h56" stroke="#4F46E5" />
      <g fill="#34C36F">
        <circle cx="42" cy="56" r="3.5">
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="56" cy="56" r="3.5">
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="56" r="3.5">
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="42" cy="74" r="3.5" fill="#C7D2FE" />
        <circle cx="56" cy="74" r="3.5">
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.4s" begin="0.6s" repeatCount="indefinite" />
        </circle>
      </g>
      <g className="animate-[scene-float_2.6s_ease-in-out_infinite]">
        <ellipse cx="118" cy="78" rx="18" ry="7" fill="#312E81" />
        <ellipse cx="118" cy="64" rx="18" ry="7" fill="#4338CA" />
        <ellipse cx="118" cy="50" rx="18" ry="7" fill="#2F6BFF" />
      </g>
    </g>
  );
}
