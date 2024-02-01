import Heading from "../shared/Heading";

const HowItWorks = () => {
  return (
    <section className="section-container bg-[#F0F6FE]">
      <div className="container-custom">
        <div>
          <Heading title='What Does "escrow" mean?' center={false} />
          <p className="mt-4 text-lg">
            An escrow is a financial and legal agreement designed to protect
            Buyers and Sellers in a transaction. For a fee, an independent third
            party holds payment until everyone fulfills theis responsibilities
            in the transaction.
          </p>
          <p className="text-lg mt-10">
            With an escrow payment, the Seller will only receive the funds when
            the Buyer has received and accepted the transfer. However, the
            Seller knows they will receive payment because Escrow Myanmar is
            holding the funds on their behalf.
          </p>
        </div>

        <div className="mt-12">
          <Heading title="How Does Escrow Myanmar works?" center={false} />
          <p className="mt-4 text-lg">
            Escrow Myanmar reduces the risk of fraud by acting as a trusted
            third-party that collects, holds, and only disburses Myanmar Kyat
            when both the Buyer and Seller are setisfied.
          </p>
          <p className="text-lg mt-10">
            Either the Buyer or Seller initiates a transaction. After
            registering as Escrow.com, all parties agree to the terms of the
            transaction.
            <br />
            Buyer pays Escrow Myanmar. The Buyer submits a payment by approved
            payment method to our secure Account, Escrow Myanmar verifies the
            payment, then the Seller is notified that funds have been secured{" "}
            {"In Escrow"}.
            <br />
            Seller transfer to Buyer. Escrow Myanmar verifies that the Buyer
            receives the transfer.
            <br />
            Buyer send confirmation. If not approved, the Buyer will raise a
            dispute and enter the dispute resolution process.
            <br />
            Escrow Myanmar pays the Seller. If the merchandies is accepted,
            Escrow Myanmar releases funds to the Seller from Escrow Myanmar
            Account.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
