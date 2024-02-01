"use client";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utills";
import { useState } from "react";

const FeeCalculator = ({ className }) => {
  const [sellerUsd, setSellerUsd] = useState();
  const [buyerUsd, setBuyerUsd] = useState();
  const [feeCalculateData, setFeeCalculateData] = useState({});

  // caluclate fee
  const calculateFee = (perchantage) => {
    let data = {};
    const unitRate = 2096.25;

    if (!perchantage) {
      data = {
        type: "seller",
        usd: sellerUsd,
        unitRate,
        fees: 0,
        receive: Number(sellerUsd) * Number(unitRate),
      };
    } else {
      const fees = Number(buyerUsd) * Number(unitRate) * 0.1;
      data = {
        type: "buyer",
        usd: buyerUsd,
        unitRate,
        fees: fees,
        transfer: Number(buyerUsd) * Number(unitRate) + fees,
      };
    }

    setFeeCalculateData(data);
  };
  return (
    <div className={cn(`bg-white`, className)}>
      <div className="p-4 border-b">
        <h4 className="text-lg">Fees Calculator</h4>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-4">
        <div className="w-full flex flex-col gap-4">
          <h4 className="text-base">For Seller</h4>
          <input
            type="number"
            placeholder="Enter USD Amount"
            className="outline-none border w-full block bg-transparent bg-[#F0F6FE] px-4 py-2 rounded-lg"
            value={sellerUsd}
            onChange={(e) => setSellerUsd(e.target.value)}
          />
          <div>
            <Button onClick={() => sellerUsd && calculateFee()} size="sm">
              Calculate
            </Button>
          </div>

          {feeCalculateData?.type === "seller" && (
            <ul className="w-[280px] flex flex-col gap-4">
              <li className="w-full flex items-center justify-between gap-5 pb-2 border-b">
                <span className="text-green-700 flex items-center gap-2">
                  <img src="/images/icons/us-flag.png" className="w-7" alt="" />
                  USD
                </span>
                <span className="text-primary">{feeCalculateData?.usd}</span>
              </li>
              <li className="w-full flex items-center justify-between gap-5 pb-2 border-b">
                <span className="text-green-700 flex items-center justify-between gap-2">
                  Unit Rate
                  <img
                    src="/images/icons/myanmer-flag.png"
                    className="w-7"
                    alt=""
                  />
                  MMK
                </span>
                <span className="text-primary">
                  {feeCalculateData?.unitRate}
                </span>
              </li>
              <li className="w-full flex items-center justify-between gap-5 pb-2 border-b">
                <span className="text-green-700 flex items-center justify-between gap-2">
                  0% Fees{" "}
                  <img
                    src="/images/icons/myanmer-flag.png"
                    className="w-7"
                    alt=""
                  />
                  MMK
                </span>
                <span className="text-primary">0</span>
              </li>
              <li className="w-full flex items-center justify-between gap-5">
                <span className="text-green-700 flex items-center justify-between gap-2">
                  Receive{" "}
                  <img
                    src="/images/icons/myanmer-flag.png"
                    className="w-7"
                    alt=""
                  />
                  MMK
                </span>
                <span className="text-primary">
                  {feeCalculateData?.receive}
                </span>
              </li>
            </ul>
          )}
        </div>

        <div className="w-full flex flex-col gap-4">
          <h4 className="text-base">For Buyer</h4>
          <input
            type="number"
            placeholder="Enter USD Amount"
            className="outline-none border w-full block bg-transparent bg-[#F0F6FE] px-4 py-2 rounded-lg"
            value={buyerUsd}
            onChange={(e) => setBuyerUsd(e.target.value)}
          />
          <div>
            <Button onClick={() => buyerUsd && calculateFee(1)} size="sm">
              Calculate
            </Button>
          </div>

          {feeCalculateData?.type === "buyer" && (
            <ul className="w-[280px] flex flex-col gap-4">
              <li className="w-full flex items-center justify-between gap-5 pb-2 border-b">
                <span className="text-green-700 flex items-center gap-2">
                  <img src="/images/icons/us-flag.png" className="w-7" alt="" />
                  USD
                </span>
                <span className="text-primary">{feeCalculateData?.usd}</span>
              </li>
              <li className="w-full flex items-center justify-between gap-5 pb-2 border-b">
                <span className="text-green-700 flex items-center gap-2">
                  Unit Rate{" "}
                  <img
                    src="/images/icons/myanmer-flag.png"
                    className="w-7"
                    alt=""
                  />{" "}
                  MMK
                </span>
                <span className="text-primary">
                  {feeCalculateData?.unitRate}
                </span>
              </li>
              <li className="w-full flex items-center justify-between gap-5 pb-2 border-b">
                <span className="text-green-700 flex items-center gap-2">
                  1% Fees{" "}
                  <img
                    src="/images/icons/myanmer-flag.png"
                    className="w-7"
                    alt=""
                  />{" "}
                  MMK
                </span>
                <span className="text-primary">{feeCalculateData?.fees}</span>
              </li>
              <li className="w-full flex items-center justify-between gap-5">
                <span className="text-green-700 flex items-center gap-2">
                  Transfer{" "}
                  <img
                    src="/images/icons/myanmer-flag.png"
                    className="w-7"
                    alt=""
                  />{" "}
                  MMK
                </span>
                <span className="text-primary">
                  {feeCalculateData?.transfer}
                </span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeeCalculator;
