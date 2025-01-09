import React from "react";
import styles from "./Header.module.css";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex-1 bg-white py-3">
      <div className="flex items-center justify-between px-20">
        <img
          src="https://superlifebioindonesia.com/wp-content/uploads/2023/07/cropped-logo-sbi.png"
          width={80}
          height={80}
        />
        <ul className="flex flex-1 mx-3 gap-6 text-black px-3 justify-end">
          <li className="flex items-center gap-2 overflow-auto hover:">
            <a href="/#">Tentang Kami</a>
            <span>
              <FaChevronDown size={10} color="black" />
            </span>
            <ul className="absolute top-16  bg-white">
              <li className="flex items-center gap-2 underline">
                <a href="/about">Sejarah</a>
              </li>
              <li className="flex items-center gap-2">
                <a href="/about">Visi dan Misi</a>
              </li>
              <li className="flex items-center gap-2">
                <a href="/about">Struktur Organisasi</a>
              </li>
              <li className="flex items-center gap-2">
                <a href="/about">Penghargaan</a>
              </li>
            </ul>
          </li>
          <li className="flex items-center gap-2">
            <a href="/product">Produk</a>
            <span>
              <FaChevronDown size={10} color="black" />
            </span>
          </li>
          <li className="flex items-center gap-2">
            <a href="/penghargaan">Penghargaan</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="/product">Prestasi</a>
            <span>
              <FaChevronDown size={10} color="black" />
            </span>
          </li>
          <li className="flex items-center gap-2">
            <a href="/product">Acara</a>
            <span>
              <FaChevronDown size={10} color="black" />
            </span>
          </li>
          <li className="flex items-center gap-2">
            <a href="/kantor-global">Kantor Global</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="https://office.superlifeworld.com.my/index.php/site/login">
              Member Login
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
