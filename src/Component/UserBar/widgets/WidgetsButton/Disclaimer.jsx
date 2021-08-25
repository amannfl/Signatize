import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDisclaimer } from "../../../../redux/CounterSlice";

const disclaimers = {
  confidentiality:
    "IMPORTANT: The contents of this email and any attachments are confidential. They are intended for the named recipient(s) only. If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof",
  noViruses:
    "Warning: Although taking reasonable precautions to ensure no viruses or malicious softwares are present in this email, the sender cannot accept responsibility for any loss or damage arising from the use of this email or attachments.",
  nonBinding:
    "No employee or agent is authorized to conclude any binding agreement on behalf of the company with another party by email without specific confirmation",
  personalOpinions:
    "All views and opinions expressed in this email message are the personal opinions of the author and do not represent those of the company. No liability can be held for any damages, however caused, to any recipients of this message.",
  CorrectRecipient:
    "If you received this email in error, please notify us immediately by sending an e-mail or by calling.",
};

const Disclaimer = () => {
  const [openQuote, setOpenQuote] = useState(false);
  const dispatch = useDispatch();

  const handleDisclaimerChanges = e => {
    dispatch(getDisclaimer({ value: e.target.value }));
  };

  return (
    <>
      <article>
        <hr />
        <section
          className="grid gap-2 items-center justify-items-start mt-5  ml-4"
          onChange={handleDisclaimerChanges}
        >
          <h1 className="text-2xl font-semibold">Add a disclaimer</h1>

          <h1 className="text-lg font-semibold">
            Choose your disclaimer type:
          </h1>
          <ul class="list-none grid gap-2 text-gray-600 ">
            <li className="flex items-center gap-2">
              <input
                type="radio"
                id="contactChoice1"
                name="disclaimer"
                value={disclaimers.confidentiality}
              />
              Confidentiality
            </li>
            <li className="flex items-center gap-2">
              <input
                type="radio"
                id="contactChoice2"
                name="disclaimer"
                value="sami"
                value={disclaimers.noViruses}
              />
              No viruses
            </li>
            <li className="flex items-center gap-2">
              <input
                type="radio"
                id="contactChoice3"
                name="disclaimer"
                value={disclaimers.nonBinding}
              />
              Non-binding
            </li>
            <li className="flex items-center gap-2">
              <input
                type="radio"
                id="contactChoice4"
                name="disclaimer"
                value={disclaimers.personalOpinions}
              />
              Personal opinions
            </li>
            <li className="flex items-center gap-2">
              <input
                type="radio"
                id="contactChoice4"
                name="disclaimer"
                value={disclaimers.CorrectRecipient}
              />
              Correct recipient
            </li>
            <button onClick={() => setOpenQuote(!openQuote)}>
              <li className="flex items-center gap-2 text-semibold">
                <input
                  type="radio"
                  id="contactChoice4"
                  name="disclaimer"
                  value={""}
                />
                My Own Quotes
              </li>
            </button>
          </ul>
          <div className="justify-center mb-4 mt-1">
            {openQuote ? (
              <textarea
                class="resize-none border-2 rounded-md w-80 h-16 p-1"
                placeholder="type your disclaimer here"
                onChange={handleDisclaimerChanges}
              ></textarea>
            ) : (
              ""
            )}
          </div>
        </section>
      </article>
    </>
  );
};

export default Disclaimer;
