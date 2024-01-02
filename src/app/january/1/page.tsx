import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Card from "./Card";

export default function Page() {
  return (
    <div className="bg-[#C9CBCD] w-full h-full">
      <main className="max-w-screen-lg mx-auto min-h-screen grid grid-cols-2 gap-8 items-center">
        <section>
          <div className="pt-4 bg-[#D3D6D7] rounded-2xl border border-gray-50 w-[380px] justify-center">
            <div className="bg-[#EBEBEB] text-black p-8 rounded-2xl w-[420px] -mx-5">
              <div className="flex gap-3 mb-4">
                <button className="bg-white p-2 rounded-md">
                  <ArrowLongLeftIcon className="h-4" />
                </button>
                <p className="font-semibold">Total storage</p>
              </div>
              <div className="font-medium flex justify-between">
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/30%25_pie_chart.svg/240px-30%25_pie_chart.svg.png"
                  }
                  alt={"graph"}
                  width={180}
                  height={180}
                />
                <div>
                  <div className="mb-3">
                    <h5 className="font-bold text-lg">30 GB</h5>
                    <p className="text-sm font-semibold">Total storage</p>
                  </div>
                  <div className="mb-3 text-indigo-500">
                    <h5 className="font-bold text-lg">9 GB</h5>
                    <p className="text-sm font-semibold">30% used</p>
                  </div>
                  <button className="mb-2 px-4 py-3 rounded-2xl bg-black text-white text-sm">
                    View details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="p-5 bg-[#D3D6D7] rounded-2xl border border-gray-50 text-black 
            justify-center max-w-[370px] overflow-visible">
              <p className="font-semibold">Plans</p>
              <Card
                isSigned
                perMouth={8}
                storage={30}
                storageType="GB"
                subtitle="Current plan"
              />
              <Card perMouth={17} storage={100} storageType="GB" />
              <Card perMouth={89} storage={1} storageType="TB" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
