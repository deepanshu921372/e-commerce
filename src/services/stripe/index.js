import Cookies from "js-cookie";

export const createPayPalOrder = async (orderData) => {
  try {
    const res = await fetch("/api/paypal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(orderData),
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};