import Image from "next/image";

function Banner() {
  return (
    <div className="w-full md:relative">
      <Image
        src="https://superlifebioindonesia.com/wp-content/uploads/2024/07/panel1.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
        alt="banner"
      />
      <div className="md:absolute md:top-20 md:left-20 flex flex-col gap-y-4 uppercase text-xl md:w-[300px] text-center md:text-left w-full items-center md:items-start">
        <h2 className="">Selamat Datang di superlife</h2>
        <h2 className="text-red-800 w-60 md:w-full">
          PENJUALAN LANGSUNG BERUPA PRODUK KESEHATAN DAN KECANTIKAN PREMIUM{" "}
        </h2>
        <button className="bg-red-800 text-white px-4 py-2 rounded-xl">
          Selanjutnya
        </button>
      </div>
    </div>
  );
}

export default Banner;
