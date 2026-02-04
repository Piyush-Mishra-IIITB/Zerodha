import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {

  const [activeWindow, setActiveWindow] = useState(null); // "BUY" | "SELL" | null
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // ---------- BUY ----------
  const openBuyWindow = (uid) => {
    setActiveWindow("BUY");
    setSelectedStockUID(uid);
  };

  const closeBuyWindow = () => {
    setActiveWindow(null);
    setSelectedStockUID("");
  };

  // ---------- SELL ----------
  const openSellWindow = (uid) => {
    setActiveWindow("SELL");
    setSelectedStockUID(uid);
  };

  const closeSellWindow = () => {
    setActiveWindow(null);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
      }}
    >
      {children}

      {/* Render Active Window */}
      {activeWindow === "BUY" && (
        <BuyActionWindow uid={selectedStockUID} />
      )}

      {activeWindow === "SELL" && (
        <SellActionWindow uid={selectedStockUID} />
      )}

    </GeneralContext.Provider>
  );
};

export default GeneralContext;
