/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { ListDataDesa } from "views";
import { TambahDataAdminDesa } from "views";
import { TambahDataDesa } from "views";
import { EditDataDesa } from "views";
import { ListDataAdminDesa } from "views";
import { ListDataAkunPenduduk } from "views/AdminDesa";
import { ListJenisDokumen } from "views/AdminDesa";
import { EditJenisDokumen } from "views/AdminDesa";
import { TambahArsipDokumen } from "views/AdminDesa";
import { ListArsipDokumen } from "views/AdminDesa";
import { TambahJenisDokumen } from "views/AdminDesa";
import { TambahAkunPenduduk } from "views/AdminDesa";
import { EditDataPenduduk } from "views/AdminDesa";
import { TambahDataPenduduk } from "views/AdminDesa";
import { ListDataPenduduk } from "views/AdminDesa";
import { Beranda } from "views/AdminDesa";
import Dashboard from "views/AdminUtama/Dashboard/index.js";
import ListLaporan from "views/AdminUtama/Laporan/ListLaporan";
import ListRekapitulasi from "views/AdminUtama/Rekapitulasi/ListRekapitulasi";
import Icons from "views/Icons.js";
import UserPage from "views/User.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-bar-32",
    component: Dashboard,
    layout: "/admin",
    sidebar: true
  },
  {
    path: "/dataadmindesa",
    name: "Data Admin Desa",
    icon: "nc-icon nc-circle-10",
    component: ListDataAdminDesa,
    layout: "/admin",
    sidebar: true
  },
  {
    path: "/dataadmindesa/tambah",
    name: "Tambah Admin Desa",
    component: TambahDataAdminDesa,
    layout: "/admin",
    sidebar: false
  },
  {
    path: "/datadesa",
    name: "Data Desa",
    icon: "nc-icon nc-bank",
    component: ListDataDesa,
    layout: "/admin",
    sidebar: true
  },
  {
    path: "/datadesa/tambah",
    name: "Tambah Data Desa",
    component: TambahDataDesa,
    layout: "/admin",
    sidebar: false
  },
  {
    path: "/datadesa/edit",
    name: "Edit Data Desa",
    component: EditDataDesa,
    layout: "/admin",
    sidebar: false
  },
  {
    path: "/rekapitulasi",
    name: "Rekapitulasi",
    icon: "nc-icon nc-vector",
    component: ListRekapitulasi,
    layout: "/admin",
    sidebar: true
  },
  {
    path: "/laporan",
    name: "Laporan",
    icon: "nc-icon nc-chart-pie-36",
    component: ListLaporan,
    layout: "/admin",
    sidebar: true
  },
  {
    path: "/beranda",
    name: "Beranda",
    icon: "nc-icon nc-globe",
    component: Beranda,
    layout: "/admindesa",
    sidebar: true
  },
  {
    path: "/datapenduduk",
    name: "Data Penduduk",
    icon: "nc-icon nc-single-02",
    component: ListDataPenduduk,
    layout: "/admindesa",
    sidebar: true
  },
  {
    path: "/datapenduduk/tambah",
    name: "Tambah Data Penduduk",
    icon: "nc-icon nc-circle-10",
    component: TambahDataPenduduk,
    layout: "/admindesa",
    sidebar: false
  },
  {
    path: "/datapenduduk/edit",
    name: "Tambah Data Penduduk",
    icon: "nc-icon nc-circle-10",
    component: EditDataPenduduk,
    layout: "/admindesa",
    sidebar: false
  },
  {
    path: "/dataakunpenduduk",
    name: "Data Akun Penduduk",
    icon: "nc-icon nc-key-25",
    component: ListDataAkunPenduduk,
    layout: "/admindesa",
    sidebar: true
  },
  {
    path: "/dataakunpenduduk/tambah",
    name: "Tambah Akun Penduduk",
    icon: "nc-icon nc-circle-10",
    component: TambahAkunPenduduk,
    layout: "/admindesa",
    sidebar: false
  },
  {
    path: "/jenisdokumen",
    name: "Jenis Dokumen",
    icon: "nc-icon nc-tile-56",
    component: ListJenisDokumen,
    layout: "/admindesa",
    sidebar: true
  },
  {
    path: "/jenisdokumen/tambah",
    name: "Tambah Jenis Dokumen",
    icon: "nc-icon nc-circle-10",
    component: TambahJenisDokumen,
    layout: "/admindesa",
    sidebar: false
  },
  {
    path: "/jenisdokumen/edit",
    name: "Edit Jenis Dokumen",
    icon: "nc-icon nc-circle-10",
    component: EditJenisDokumen,
    layout: "/admindesa",
    sidebar: false
  },
  {
    path: "/arsipdokumen",
    name: "Arsip Dokumen",
    icon: "nc-icon nc-single-copy-04",
    component: ListArsipDokumen,
    layout: "/admindesa",
    sidebar: true
  },
  {
    path: "/arsipdokumen/tambah",
    name: "Tambah Arsip Dokumen",
    icon: "nc-icon nc-single-copy-04",
    component: TambahArsipDokumen,
    layout: "/admindesa",
    sidebar: false
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
];
export default routes;
