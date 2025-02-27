"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaChevronDown } from "react-icons/fa";

export default function Header(props) {
  const { style } = props;
  const [show, setShow] = useState(false);
  return (
    <div className="flex-1 bg-white py-3 fixed w-full ">
      <div className="flex items-center justify-between px-20">
        <img
          src="https://superlifebioindonesia.com/wp-content/uploads/2023/07/cropped-logo-sbi.png"
          width={80}
          height={80}
        />
        <div>
          <a>
            <h1>
              <p>
                <img />
              </p>
            </h1>
          </a>
        </div>
        <ul className="flex flex-1 mx-3 gap-6 text-black px-3 justify-end">
          <li className="flex items-center gap-2 overflow-auto hover:">
            <a href="/#" onClick={() => setShow(!show)}>
              Tentang Kami
            </a>
            <span onClick={() => setShow(!show)}>
              <FaChevronDown size={10} color="black" />
            </span>
            {show && (
              <ul className="absolute top-24 bg-white">
                <li className="">
                  <a href="/history">
                    Sejarah
                    {/* <span className="text-red-700 underline font-bold ">rah</span> */}
                    {/* <strong>coba</strong> */}
                  </a>
                </li>
                <li className="">
                  <a href="/visi-dan-misi">Visi dan Misi</a>
                </li>
                <li className="">
                  <a href="/struktur">Struktur Organisasi</a>
                </li>
                <li className="">
                  <a href="/penghargaan">Penghargaan</a>
                </li>
              </ul>
            )}
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
    </div>
  );
}
