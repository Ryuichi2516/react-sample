import React, { Fragment, useState, useCallback } from "react";
import type { EditStockData } from "../types/TypeList";
import "../style/editStock.css";

const EditStock = <T extends { [key: string]: string }>(
  props: EditStockData
) => {
  const { OkModal, CloseModal } = props;
  return (
    <div id="editContent">
      <form>
        <h2>
          <span>2340</span>
          <br></br>
          <span>極楽湯ホールディングス</span>
        </h2>
        <label>
          購入株数<input type="text" name="stock" defaultValue="300"></input>
        </label>
        <label>
          購入金額（1株）
          <input type="text" name="amount" defaultValue="466"></input>
        </label>
        <label>
          配当金額<input type="text" name="dividend" defaultValue="0"></input>
        </label>
        <label>
          購入日
          <input type="text" name="date" defaultValue="2024/12/20"></input>
        </label>
        <label>
          株主優待
          <textarea
            name="stock"
            defaultValue="100株以上で無料入浴券4枚"
          ></textarea>
        </label>
        <button id="btnOk" onClick={OkModal}>
          OK
        </button>
        <button id="btnCancel" onClick={CloseModal}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditStock;
