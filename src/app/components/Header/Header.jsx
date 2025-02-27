"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Menu = (props) => {
  const { listSubMenu = [], name, linkMenu = "/" } = props;
  const [show, setShow] = useState(false);
  return (
    <li
      className="flex items-center relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="flex items-center gap-2">
        <Link
          href={linkMenu}
          onClick={() => listSubMenu.length && setShow(!show)}
        >
          {name}
        </Link>
        {listSubMenu.length > 0 && (
          <span>
            <FaChevronDown size={10} color="black" />
          </span>
        )}
      </div>
      {show && listSubMenu.length > 0 && (
        <ul className="absolute top-6 bg-white p-5">
          {listSubMenu.map((item, index) => (
            <li className="" key={index}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Header(props) {
  const { style } = props;

  const listMenu = [
    {
      name: "Tentang Kami",
      linkMenu: "/",
      listSubMenu: [
        {
          name: "Sejarah",
          path: "/history",
        },
        {
          name: "Visi dan Misi",
          path: "/visi-dan-misi",
        },
        {
          name: "Struktur Organisasi",
          path: "/struktur",
        },
        {
          name: "Penghargaan",
          path: "/penghargaan",
        },
      ],
    },
    {
      name: "Product",
      linkMenu: "/product",
      listSubMenu: [
        {
          name: "Product1",
          path: "/history",
        },
        {
          name: "Visi dan Misi",
          path: "/visi-dan-misi",
        },
        {
          name: "Struktur Organisasi",
          path: "/struktur",
        },
        {
          name: "Penghargaan",
          path: "/penghargaan",
        },
      ],
    },
    {
      name: "Penghargaan",
      linkMenu: "/penghargaan",
    },
    {
      name: "Prestasi",
      linkMenu: "/prestasi",
    },
  ];

  return (
    <div className="flex-1 bg-white py-3 fixed w-full">
      <div className="flex items-center justify-between px-20">
        <Image
          src="https://superlifebioindonesia.com/wp-content/uploads/2023/07/cropped-logo-sbi.png"
          width={80}
          height={80}
          alt="logo"
        />
        <ul className="flex flex-1 mx-3 gap-6 text-black px-3 justify-end">
          {listMenu.map((menu, index) => (
            <Menu
              linkMenu={menu.linkMenu}
              listSubMenu={menu.listSubMenu}
              name={menu.name}
              key={index}
            />
          ))}
          <li className="flex items-center gap-2">
            <Link href="https://office.superlifeworld.com.my/index.php/site/login">
              Member Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
