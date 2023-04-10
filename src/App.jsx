import { useState, useEffect } from "react";
import Base from "./components/shared/Base";
import Form from "./components/shared/Form";

function App() {
  const [initialValues, setInitialValues] = useState([
    {
      id: 1,
      name: "",
      price: "",
      quantity: "",
      total: "",
    },
  ]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [error, setError] = useState(false);
  const addNew = () => {
    const newVal = {
      id: initialValues.length + 1,
      name: "",
      price: "",
      quantity: "",
      total: "",
    };
    setInitialValues((prevState) => [...prevState, newVal]);
  };

  const deleteRow = (id) => {
    setInitialValues((prevState) => prevState.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const arrTotal = initialValues.map((item) => item?.total);
    const gt = arrTotal.reduce((a, b) => a + b);
    setGrandTotal(parseInt(gt) || 0);
  }, [initialValues]);

  const onChange = (e, id, item) => {
    if (e.target.name === "quantity" && e.target.value < 1) {
      setError(true);
    } else {
      setError(false);
      const price = e.target.name === "price" ? e.target.value : item.price;
      const quantity =
        e.target.name === "quantity" ? e.target.value : item.quantity;
      const total = price * quantity;

      setInitialValues((prevState) => [
        ...prevState.filter((el) => el.id !== id),
        {
          ...item,
          total: total,
          [e.target.name]: String(e.target.value),
        },
      ]);
    }
  };

  return (
    <Base>
      <div className="flex flex-row justify-start items-start gap-8">
        <button
          className="px-4 py-2 rounded-md bg-slate-500 text-white mb-4"
          onClick={() => addNew()}
        >
          New
        </button>
        {error && (
          <p className="text-red-500 font-bold text-xl">
            Quantity tidak boleh kurang dari 1
          </p>
        )}
      </div>
      {initialValues.map((item, index) => (
        <div key={index}>
          <Form
            index={index}
            item={item}
            deleteRow={deleteRow}
            onChange={onChange}
            error={error}
          />
        </div>
      ))}
      <div className="flex max-w-[843px] justify-end">
        <div className="flex flex-col space-y-2 max-w-[25%]">
          <label>Grand Total</label>
          <input
            className="border border-slate-400 rounded-md p-2"
            type="number"
            disabled
            readOnly
            value={grandTotal || 0}
          />
        </div>
      </div>
    </Base>
  );
}

export default App;
