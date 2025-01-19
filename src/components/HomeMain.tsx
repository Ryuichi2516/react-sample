import React, { Fragment } from "react";
import { Sidebar } from "./Sidebar";
import { Table } from "./Table";
import type { TableValue, Data, Header, Footer } from "../types/TypeList";
import "../style/homeMain.css";

export const HomeMain = () => {
  const headers: Header[] = [
    {
      name: "No.",
      width: "2",
      isSum: false,
      position: "center",
    },
    {
      name: "コード",
      width: "4",
      isSum: false,
      position: "left",
    },
    {
      name: "銘柄名",
      width: "25",
      isSum: false,
      position: "left",
    },
    {
      name: "購入株数",
      width: "6",
      isSum: true,
      position: "right",
    },
    {
      name: "購入金額(1株)",
      width: "12",
      isSum: true,
      position: "right",
    },
    {
      name: "株数金額合計",
      width: "12",
      isSum: true,
      position: "right",
    },
    {
      name: "配当金額",
      width: "12",
      isSum: true,
      position: "right",
    },
    {
      name: "配当金額合計",
      width: "12",
      isSum: true,
      position: "right",
    },
    {
      name: "購入日",
      width: "8",
      isSum: false,
      position: "left",
    },
    {
      name: "株主優待",
      width: "30",
      isSum: false,
      position: "left",
    },
  ];

  const footers: Footer[] = [
    {
      colSpan: 3,
      name: "合計",
      isSum: false,
      position: "center",
    },
    {
      colSpan: 1,
      isSum: true,
      position: "right",
    },
    {
      colSpan: 1,
      isSum: true,
      position: "right",
    },
    {
      colSpan: 1,
      isSum: true,
      position: "right",
    },
    {
      colSpan: 1,
      isSum: true,
      position: "right",
    },
    {
      colSpan: 1,
      isSum: true,
      position: "right",
    },
    {
      colSpan: 3,
      isSum: false,
    },
  ];

  let value: Data = {
    code: "2340",
    name: "極楽湯ホールディングス",
    stock: "300",
    amount: "466",
    sumAmount: "139,800",
    dividend: "0",
    sumDividend: "0",
    date: "2024/12/20",
    benefits: "100株以上で無料入浴券4枚",
  };

  let values: Data[] = [];

  for (let i = 0; i <= 10; i++) {
    values.push(value);
  }

  const isDbclick = true;
  const tableValue: TableValue<Data> = {
    headers,
    footers,
    values,
    isDbclick,
  };

  return (
    // Fragmentタグは表示されない。または<>空タグにする。return以降は1つのタグで囲われている必要がある
    <Fragment>
      <div id="main">
        <Sidebar />
        <Table {...tableValue} />
      </div>
    </Fragment>
  );
};
