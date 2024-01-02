type CardProps = {
  storage: number;
  storageType: "GB" | "TB";
  perMouth: number;
  subtitle?: string;
  isSigned?: boolean;
};

export default function Card({
  storage,
  storageType,
  perMouth,
  subtitle,
  isSigned = false,
}: CardProps) {
  return (
    <section
      className={`${
        isSigned ? "bg-black text-white" : "bg-gray-50 text-black"
      } rounded-2xl flex justify-between p-8 max-w-[440px] -mx-[40px] my-3`}
    >
      <div>
        <div
          className={`${
            isSigned ? "bg-orange-400" : "bg-blue-400"
          } h-1 w-5 rounded-full mb-1`}
        />
        <h3 className="font-bold text-2xl mb-2">
          {storage + " " + storageType}
        </h3>
        {subtitle && <p className="font-bold">{subtitle}</p>}
      </div>
      {!isSigned && perMouth && (
        <div className="text-end">
          <button className="mb-2 px-4 py-3 rounded-2xl bg-black text-white text-sm">
            NOK {perMouth.toFixed(2)}/mouth
          </button>
          <p className="text-indigo-600 font-semibold text-xs">
            Or prepay anually NOK{(perMouth * 10).toFixed(2)}/year
          </p>
        </div>
      )}
    </section>
  );
}
