import React, { Fragment, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import UseModal from "./UseModal";
import EditStock from "./EditStock";
import type { TableValue, EditStockData } from "../types/TypeList";
import "../style/table.css";

export const Table = <T extends { [key: string]: string }>(
  props: TableValue<T>
) => {
  const { headers, footers, values, isDbclick } = props;
  const { Modal, OpenModal, OkModal, CloseModal } = UseModal();

  useEffect(() => {
    let i: number = 0;
    const arrayList: number[] = [];
    headers.forEach((e) => {
      if (e.isSum) {
        const element = document.getElementsByClassName(
          `${e.name}`
        ) as HTMLCollection;
        const values = Array.from(element).map((e) =>
          Number(e.textContent?.replace(/,/g, ""))
        );
        const total = values.reduce((a, b) => {
          return a + b;
        }, 0);
        arrayList.push(total);
      }
    });
    footers?.forEach((e, ii) => {
      i += e.colSpan;
      if (e.isSum) {
        const element = document.getElementById(`sum${i}`) as HTMLElement;
        element.textContent = String(arrayList[ii - 1].toLocaleString());
      }
    });
  });

  const onDoubleClick = (e: React.MouseEvent<HTMLTableRowElement>): void => {
    OpenModal();
  };

  const editStockData: EditStockData = { OkModal, CloseModal };
  let index: number = 0;
  return (
    // Fragmentタグは表示されない。または<>空タグにする。return以降は1つのタグで囲われている必要がある
    <Fragment>
      <Sidebar />
      <Modal>
        <EditStock {...editStockData} />
      </Modal>
      <div id="mainTable">
        <table id="table01">
          <thead>
            <tr>
              {headers.map((e) => {
                return (
                  <th scope="col" style={{ width: `${e.width}em` }}>
                    {e.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {values?.map((e, i) => {
              return (
                <tr onDoubleClick={onDoubleClick}>
                  <th scope="row">{i + 1}</th>
                  {Object.values(e).map((value, ii) => {
                    const position = headers[ii + 1].position;
                    const name = headers[ii + 1].name;
                    return (
                      <td className={name} style={{ textAlign: position }}>
                        {value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              {footers &&
                footers.map((e) => {
                  index += e.colSpan;
                  if (e.name) {
                    return (
                      <th
                        scope="row"
                        colSpan={e.colSpan}
                        style={{ textAlign: e.position }}
                      >
                        合計
                      </th>
                    );
                  } else {
                    return (
                      <td
                        id={`sum${index}`}
                        colSpan={e.colSpan}
                        style={{ textAlign: e.position }}
                      ></td>
                    );
                  }
                })}
            </tr>
          </tfoot>
        </table>
      </div>
    </Fragment>
  );
};
