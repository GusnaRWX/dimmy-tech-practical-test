import React from "react";

function Form({ deleteRow, item, index, onChange }) {
  return (
    <div className="flex flex-row items-end justify-start gap-4 mb-4">
      <div className="flex flex-col space-y-2">
        <label>Product Name</label>
        <input
          className="border border-slate-400 rounded-md p-2"
          type="text"
          name="name"
          onChange={(e) => onChange(e, item.id, item)}
          value={item.name}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label>Product Price</label>
        <input
          className="border border-slate-400 rounded-md p-2"
          type="text"
          name="price"
          onChange={(e) => onChange(e, item.id, item)}
          value={item.price}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label>Qty</label>
        <input
          className="border border-slate-400 rounded-md p-2"
          type="text"
          name="quantity"
          onChange={(e) => onChange(e, item.id, item)}
          value={item.quantity}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label>Total</label>
        <input
          disabled
          className="border border-slate-400 rounded-md p-2"
          type="text"
          name="total"
          onChange={(e) => onChange(e, item.id, item)}
          value={item.total}
        />
      </div>
      {index !== 0 && (
        <div className="flex flex-col space-y-1">
          <label></label>
          <button
            className="px-4 py-3 rounded-md bg-red-500 text-white mb-4"
            onClick={() => deleteRow(item?.id)}
          >
            DELETE
          </button>
        </div>
      )}
    </div>
  );
}

export default Form;
