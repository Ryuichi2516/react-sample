import React, { Fragment, useState, useCallback, useDebugValue } from "react";
import { ColoredMessage } from "./ColoredMessage";
import { InputControl } from "../components/InputControl";
import { Sidebar } from "../components/Sidebar";
import "../style/styleModule.css";

export const Practice = () => {
  // const onClickButton: () => void = (): void => {
  //   alert();
  // };

  return (
    // Fragmentタグは表示されない。または<>空タグにする。return以降は1つのタグで囲われている必要がある
    <Fragment>
      <ColoredMessage color="blue">
        <div className="main">
          <Sidebar />
          <table>
            {/* <caption style={{ color: "red" }}>2024年</caption> */}
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">SUBJECT</th>
                <th scope="col">SCORE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">１</th>
                <td>national language</td>
                <td>
                  <InputControl type="number" min="0" max="3"></InputControl>
                </td>
              </tr>
              <tr>
                <th scope="row">２</th>
                <td>mathematics</td>
                <td>
                  <InputControl type="number" min="0" max="3"></InputControl>
                </td>
              </tr>
              <tr>
                <th scope="row">３</th>
                <td>science</td>
                <td>
                  <InputControl type="number" min="0" max="3"></InputControl>
                </td>
              </tr>
              <tr>
                <th scope="row">４</th>
                <td>society</td>
                <td>
                  <InputControl type="number" min="0" max="3"></InputControl>
                </td>
              </tr>
              <tr>
                <th scope="row">５</th>
                <td>english </td>
                <td>
                  <InputControl type="number" min="0" max="3"></InputControl>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" colSpan={2}>
                  Average age
                </th>
                <td>33</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </ColoredMessage>
      {/* <button onClick={onClickButton}>ボタン</button> */}
    </Fragment>
  );
};
