import { useState } from "react"
import { BasicInputField, ButtonType, CheckBoxField, DisabledInputField, RadioGroup, ToggleField } from "./component-sets/InputField"

export const CalculationComponent = () => {

  const [payoutRadioButton, setPayoutRadioButton] = useState<string | null>(null)
  const [payoutPercOnTxn, setPayoutPercOnTxn] =useState<number>(0)
  const [payoutPercOnPF, setPayoutPercOnPF] =useState<number>(0)
  const [pfType, setPfType] = useState<string | null>(null)
  const [pfValue, setPfValue] = useState<number>(0)
  const [extraGainToggle, setExtraGainToggle] = useState(false)
  const [insuranceType, setInsuranceType] = useState<string | null>(null)
  const [extraEarningPFPerc, setExtraEarningPFPerc] = useState<number>(0)
  const [saarathiShare, setSaarathiShare] = useState<number>(0)
  const [adjustmentGain, setAdjustmentGain] = useState<number>(0)
  const [payoutOnExtraEarningPF, setPayoutOnExtraEarningPF] = useState<number>(0)
  const [flatInsuranceAmount, setFlatInsuranceAmount] = useState<number>(0)
  const [percInsuranceAmount, setPercInsuranceAmount] = useState<number>(0)
  const [percInsuracePercentage, setPercInsurancePercentage] = useState<number>(0)
  const [finalInsuranceAmount, setFinalInsuranceAmount] = useState<number>(0)
  const [deductionToggle, setDeductionToggle] = useState(false)
  const [autoCalculate, setAutoCalculate] = useState(false)
  const [cpPayoutPerc, setCpPayoutPerc] = useState<number>(90)
  const [cpNetPayoutAmount, setCpNetPayoutAmount] = useState<number>(0)
  const [openTab, setOpenTab] = useState(1);
  const [payoutAmount, setPayoutAmount] = useState<number>(0)
  const [totalOtherGain, setTotalOtherGain] = useState<number>(0)
  const [totalDeduction, setTotalDeduction] = useState<number>(0)
  const [finalLenderPayout, setFinalLenderPayout] = useState<number>(0)
  const transactionAmount = 1000000

  const items: { value: string, label: string }[]= [
    { value: "PF", label: "PF" },
    { value: "Transaction", label: "Transaction" }
    ]

  const pfTypes: { value: string, label: string }[]= [
    { value: "Flat", label: "Flat" },
    { value: "Percent", label: "Percent" }
  ]

  const insuranceTypes: { value: string, label: string }[] = [
    { value: "Flat", label: "Flat" },
    { value: "Percent", label: "Percent" }
  ]

return <div className="flex grid grid-cols-12">
    <div className="flex-1 col-span-7 max-h-screen sticky top-0 overflow-y-auto">
    <div>
  <div className="m-5 mt-12">
    <div id="accordion-flush" data-accordion="open" data-active-className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classNamees="text-gray-500 dark:text-gray-400">
      <h2 id="accordion-flush-heading-1">
        <button type="button" className="flex items-center justify-between w-full py-1 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
          <span>Payout From Lender</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-1" className="open" aria-labelledby="accordion-flush-heading-1">
        {/* Accordian Open */}
        <div className="flex mt-4 ml-4 p-4 border border-gray-200 rounded dark:border-gray-700 w-full">
        <div>
          <div className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
            Payout based on
          </div>
        <div className="flex pt-2.5">
        <RadioGroup
          name="payoutType"
          items={items}
          value={payoutRadioButton}
          onChange={setPayoutRadioButton}
        />
        </div>
        </div>
        <div className="ml-12 w-5/12">
      {payoutRadioButton === "Transaction" ? (
        <div>
        <BasicInputField
              header="Payout % on Transaction"
              placeholder="% on Transaction amount"
              type="number"
              key="random1"
              value={payoutPercOnTxn}
              onChange={(e) => {
                setPayoutPercOnTxn(parseFloat(e.target.value));
                setPayoutAmount(parseFloat(e.target.value) * transactionAmount/100)
                setFinalLenderPayout((parseFloat(e.target.value) * transactionAmount/100) + totalOtherGain - totalDeduction)
                setCpNetPayoutAmount(autoCalculate ? ((parseFloat(e.target.value) * transactionAmount/100) + totalOtherGain - totalDeduction) * cpPayoutPerc/100 : 0)
              }}
            />
      </div>
      ) : payoutRadioButton === "PF" ? (
        <div>
      <div className="flex mt-4">
      <div className="block text-sm font-medium text-gray-900 dark:text-white">
        PF Type
        </div>
      <div className="ml-14 pt-0.5">
        <RadioGroup 
        name="PFType"
        items={pfTypes}
        value={pfType}
        onChange={setPfType}/>
      </div>
      </div>
      <div className="mt-4">
        {pfType === "Percent" ? (
          <div>
            <div>
      <BasicInputField
          header="PF Percent %"
          placeholder="... pf percent"
          type="number"
          onChange={(e) => {
            setPfValue(parseFloat(e.target.value))
            setPayoutAmount((parseFloat(e.target.value)*transactionAmount/100)/100 * payoutPercOnPF)
            setFinalLenderPayout(((parseFloat(e.target.value)*transactionAmount/100)/100 * payoutPercOnPF) + totalOtherGain - totalDeduction)
            setCpNetPayoutAmount(autoCalculate ? (((parseFloat(e.target.value)*transactionAmount/100)/100 * payoutPercOnPF) + totalOtherGain - totalDeduction) * cpPayoutPerc/100 : 0)
          }}
        />
        </div>
        <div className="mt-4">
        <BasicInputField
          header="Payout % on PF"
          placeholder="% on PF amount"
          type="number"
          value={payoutPercOnPF}
          onChange={(e) => {
            setPayoutPercOnPF(parseFloat(e.target.value))
            setPayoutAmount(parseFloat(e.target.value)*(pfValue*transactionAmount/100)/100)
            setFinalLenderPayout((parseFloat(e.target.value)*(pfValue*transactionAmount/100)/100) + totalOtherGain - totalDeduction)
            setCpNetPayoutAmount(autoCalculate ? ((parseFloat(e.target.value)*(pfValue*transactionAmount/100)/100) + totalOtherGain - totalDeduction) * cpPayoutPerc/100 : 0)
          }}
        />
          </div>
        </div>
        ) : pfType === "Flat" ? (
          <div>
            <div>
          <BasicInputField
          header="PF Amount (in Rs.)"
          placeholder="... pf amount"
          type="number"
          onChange={(e) => {
            setPfValue(parseFloat(e.target.value))
            setPayoutAmount(parseFloat(e.target.value)/100 * payoutPercOnPF)
            setFinalLenderPayout((parseFloat(e.target.value)/100 * payoutPercOnPF) + totalOtherGain - totalDeduction)
            setCpNetPayoutAmount(autoCalculate ? ((parseFloat(e.target.value)/100 * payoutPercOnPF) + totalOtherGain - totalDeduction) * cpPayoutPerc/100 : 0)
          }}
        />
        </div>
        <div className="mt-4">
        <BasicInputField
          header="Payout % on PF"
          placeholder="% on PF amount"
          type="number"
          value={payoutPercOnPF}
          onChange={(e) => {
            setPayoutPercOnPF(parseFloat(e.target.value))
            setPayoutAmount(parseFloat(e.target.value)*pfValue/100)
            setFinalLenderPayout((parseFloat(e.target.value)*pfValue/100) + totalOtherGain - totalDeduction)
            setCpNetPayoutAmount(autoCalculate ? ((parseFloat(e.target.value)*pfValue/100) + totalOtherGain - totalDeduction) * cpPayoutPerc/100 : 0)
          }}
        />
          </div>
          </div>
        ) : null
}
      </div>
  </div>
      ) : null}
    </div>
    </div>
    {/* Extra Gain Toggle */}
    <div className="mt-10 ml-4 p-4 border border-gray-200 rounded dark:border-gray-700 w-full">
      <ToggleField 
        header="Extra Gains from Lender?" 
        checked={extraGainToggle} 
        onChange={() => {
          setExtraGainToggle(!extraGainToggle)
          setTotalOtherGain(extraGainToggle ? 0 : (insuranceType === "Percent" ? finalInsuranceAmount : flatInsuranceAmount) + payoutOnExtraEarningPF + adjustmentGain)
          setFinalLenderPayout(extraGainToggle ? payoutAmount - totalDeduction : payoutAmount + ((insuranceType === "Percent" ? finalInsuranceAmount : flatInsuranceAmount) + payoutOnExtraEarningPF + adjustmentGain) - totalDeduction)
          setCpNetPayoutAmount(autoCalculate ? (extraGainToggle ? payoutAmount - totalDeduction : payoutAmount + ((insuranceType === "Percent" ? finalInsuranceAmount : flatInsuranceAmount) + payoutOnExtraEarningPF + adjustmentGain) - totalDeduction) * cpPayoutPerc/100 : 0)
        }
          }/>
      {/* <CheckBoxField header="Extra Gains from Lender?" onChange={() => setExtraGainToggle(!extraGainToggle)}/> */}
    <div>
      {extraGainToggle === true ? (
        <div className="pl-4 mt-4">
        <div className="block text-sm font-medium text-gray-900 dark:text-white">
          Insurance Type
        </div>
      <div className="flex pt-2">
        <RadioGroup 
            name="InsuranceType"
            items={insuranceTypes}
            value={insuranceType}
            onChange={setInsuranceType}/>
      </div>
      <div>
        {insuranceType === "Flat" ? (
          <div className="mt-4 w-5/12">
          <BasicInputField
              header="Insurance Amount"
              placeholder="Insurance amount provided"
              type="number"
              onChange={(e) => {
                setFlatInsuranceAmount(parseFloat(e.target.value));
                setTotalOtherGain(parseFloat(e.target.value) + adjustmentGain + extraEarningPFPerc)
                setFinalLenderPayout(parseFloat(e.target.value) + adjustmentGain + extraEarningPFPerc + payoutAmount - totalDeduction)
                setCpNetPayoutAmount(autoCalculate ? (parseFloat(e.target.value) + adjustmentGain + extraEarningPFPerc + payoutAmount - totalDeduction) * cpPayoutPerc/100 : 0)
              }}
            />
        </div>
        ) : insuranceType === "Percent" ? (
          <div className="mt-4">
        <div className="flex">
        <div className="w-5/12">
          <BasicInputField
              header="Insurance Amount"
              placeholder="Insurance amount provided"
              type="number"
              onChange={(e) => {
                setPercInsuranceAmount(parseFloat(e.target.value));
                setFinalInsuranceAmount(parseFloat(e.target.value)/100 * percInsuracePercentage)
                setTotalOtherGain((parseFloat(e.target.value)/100 * percInsuracePercentage) + adjustmentGain + payoutOnExtraEarningPF)
                setFinalLenderPayout(parseFloat(e.target.value)/100 * percInsuracePercentage + payoutAmount - totalDeduction)
                setCpNetPayoutAmount(autoCalculate ? (parseFloat(e.target.value)/100 * percInsuracePercentage + payoutAmount - totalDeduction) * cpPayoutPerc/100 : 0)
              }}
            />
        </div>
        <div className="ml-6 w-5/12">
          <BasicInputField
              header="Insurance Payout %"
              placeholder="Insurance % of the amount"
              type="number"
              onChange={(e) => {
                setPercInsurancePercentage(parseFloat(e.target.value));
                setFinalInsuranceAmount(parseFloat(e.target.value) * percInsuranceAmount/100)
                setTotalOtherGain((parseFloat(e.target.value) * percInsuranceAmount/100) + adjustmentGain + payoutOnExtraEarningPF)
                setFinalLenderPayout(parseFloat(e.target.value) * percInsuranceAmount/100 + payoutAmount - totalDeduction)
                setCpNetPayoutAmount(autoCalculate ? (parseFloat(e.target.value) * percInsuranceAmount/100 + payoutAmount - totalDeduction) * cpPayoutPerc/100 : 0)
              }}
            />
        </div>
        </div>
        <div className="mt-4 w-5/12">
        <DisabledInputField
            header="Final Insurance Amount"
            placeholder="Total insurance gained"
            type="number"
            value={finalInsuranceAmount}
          />
        </div>
      </div>
        ) : null}
      </div>
      <div className="flex mt-6">
      <div className="w-5/12">
        <BasicInputField
            header="Extra Earning PF %"
            placeholder="% of extra earned PF"
            type="number"
            onChange={(e) => {
              setExtraEarningPFPerc(parseFloat(e.target.value));
              setPayoutOnExtraEarningPF((parseFloat(e.target.value)/100 * transactionAmount) * saarathiShare/100)
              setTotalOtherGain(insuranceType === "Percent" ? ((parseFloat(e.target.value)/100 * transactionAmount) * saarathiShare/100) + adjustmentGain + finalInsuranceAmount : ((parseFloat(e.target.value)/100 * transactionAmount) * saarathiShare/100) + adjustmentGain + flatInsuranceAmount)
              setFinalLenderPayout((insuranceType === "Percent" ? ((parseFloat(e.target.value)/100 * transactionAmount) * saarathiShare/100) + adjustmentGain + finalInsuranceAmount + payoutAmount - totalDeduction : ((parseFloat(e.target.value)/100 * transactionAmount) * saarathiShare/100) + adjustmentGain + flatInsuranceAmount) + payoutAmount - totalDeduction)
              setCpNetPayoutAmount(autoCalculate ? ((insuranceType === "Percent" ? ((parseFloat(e.target.value)/100 * transactionAmount) * saarathiShare/100) + adjustmentGain + finalInsuranceAmount + payoutAmount - totalDeduction : ((parseFloat(e.target.value)/100 * transactionAmount) * saarathiShare/100) + adjustmentGain + flatInsuranceAmount) + payoutAmount - totalDeduction) * cpPayoutPerc/100 : 0)
            }}
          />
      </div>
      <div className="ml-6 w-5/12">
        <BasicInputField
            header="Saarathi Share(Ext Earning PF)"
            placeholder="saarathi's share percentage"
            type="number"
            onChange={(e) => {
              setSaarathiShare(parseFloat(e.target.value));
              setPayoutOnExtraEarningPF(parseFloat(e.target.value)/100 * (extraEarningPFPerc/100*transactionAmount))
              setTotalOtherGain(insuranceType === "Percent" ? (parseFloat(e.target.value)/100 * (extraEarningPFPerc/100*transactionAmount)) + adjustmentGain + finalInsuranceAmount : (parseFloat(e.target.value)/100 * (extraEarningPFPerc/100*transactionAmount)) + adjustmentGain + flatInsuranceAmount)
              setFinalLenderPayout(insuranceType === "Percent" ? (parseFloat(e.target.value)/100 * (extraEarningPFPerc/100*transactionAmount)) + adjustmentGain + finalInsuranceAmount + payoutAmount - totalDeduction : (parseFloat(e.target.value)/100 * (extraEarningPFPerc/100*transactionAmount)) + adjustmentGain + flatInsuranceAmount + payoutAmount - totalDeduction)
              setCpNetPayoutAmount(autoCalculate ? (insuranceType === "Percent" ? (parseFloat(e.target.value)/100 * (extraEarningPFPerc/100*transactionAmount)) + adjustmentGain + finalInsuranceAmount + payoutAmount - totalDeduction : (parseFloat(e.target.value)/100 * (extraEarningPFPerc/100*transactionAmount)) + adjustmentGain + flatInsuranceAmount + payoutAmount - totalDeduction) * cpPayoutPerc/100 : 0)
            }}
          />
      </div>
      </div>
      <div className="flex mt-4">
      <div className="w-5/12">
        <BasicInputField
            header="Adjustment(gain)"
            placeholder="any extra amount from lender?"
            type="number"
            onChange={(e) => {
              setAdjustmentGain(parseFloat(e.target.value));
              setTotalOtherGain(insuranceType === "Percent" ? parseFloat(e.target.value) + payoutOnExtraEarningPF + finalInsuranceAmount : parseFloat(e.target.value) + payoutOnExtraEarningPF + flatInsuranceAmount)
              setFinalLenderPayout(insuranceType === "Percent" ? parseFloat(e.target.value) + payoutOnExtraEarningPF + finalInsuranceAmount + payoutAmount - totalDeduction : parseFloat(e.target.value) + payoutOnExtraEarningPF + flatInsuranceAmount + payoutAmount - totalDeduction)
              setCpNetPayoutAmount(autoCalculate ? (insuranceType === "Percent" ? parseFloat(e.target.value) + payoutOnExtraEarningPF + finalInsuranceAmount + payoutAmount - totalDeduction : parseFloat(e.target.value) + payoutOnExtraEarningPF + flatInsuranceAmount + payoutAmount - totalDeduction) * cpPayoutPerc/100 : 0)
            }}
          />
      </div>
      <div className="ml-6 w-5/12">
        <DisabledInputField
            header="Payout on Extra Earning PF %"
            placeholder="any extra amount from lender?"
            type="number"
            value={payoutOnExtraEarningPF}
          />
      </div>
      </div>
      </div>
      ) : null}
    </div>
    </div>
    <div className="mt-10 ml-4 p-4 border border-gray-200 rounded dark:border-gray-700 w-full">
      <ToggleField header="Deductions from Lender?" checked={deductionToggle} onChange={() => setDeductionToggle(!deductionToggle)}/>
    </div>
    <div className="ml-4 mt-8 p-4 border border-gray-200 rounded dark:border-gray-700 w-full">
      <div className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
        {/* FINAL BLOCK */}
        Final Lender Payout
      </div>
      <div className="flex mt-6">
    <div className="w-5/12">
      <DisabledInputField
        header="Payout Amount"
        placeholder=""
        type="number"
        value={payoutAmount}
      />
    </div>
    <div className="ml-6 w-5/12">
      <DisabledInputField
        header="Total Other Gain"
        placeholder=""
        type="number"
        value={totalOtherGain}
      />
    </div>
    </div>
    <div className="flex mt-4">
    <div className="w-5/12">
      <DisabledInputField
        header="Total Deduction"
        placeholder=""
        type="number"
        value={totalDeduction}
      />
    </div>
    <div className="ml-6 w-5/12">
      <DisabledInputField
        header="Final Lender Payout"
        placeholder=""
        type="number"
        value={finalLenderPayout}
      />
    </div>
    </div>
    </div>
        {/* Accordian Close */}
      </div>
    </div>
    </div>
    <div className="m-5">
    <div id="accordion-flush" data-accordion="open" data-active-className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classNamees="text-gray-500 dark:text-gray-400">
      <h2 id="accordion-flush-heading-1">
        <button type="button" className="flex items-center justify-between w-full py-1 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
          <span>CP Payout</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-1" className="open" aria-labelledby="accordion-flush-heading-1">
        {/* {Accordian Open} */}
        <div className="mt-8 ml-4">
          <div className="w-5/12">
            <CheckBoxField header="Auto Calculate Payout?" onChange={() => {
              setAutoCalculate(!autoCalculate)
              setCpNetPayoutAmount(!autoCalculate ? finalLenderPayout * cpPayoutPerc/100 : 0)
              }}/>
          </div>
          <div className="flex mt-6">
          <div className="w-5/12">
            <DisabledInputField
            header="CP Payout %"
            placeholder="channel's contract %"
            type="number"
            value={cpPayoutPerc}
            />
          </div>
          <div className="ml-6 w-5/12">
            <BasicInputField
              header="Net Payout Amount"
              placeholder="final cp payout"
              type="number"
              value={cpNetPayoutAmount}
              onChange={(e) => {
                setCpNetPayoutAmount(parseFloat(e.target.value));
              }}
            />
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="m-12">
      <ButtonType header="Save Calculation" onClick={() => ("")}/>
    </div>
    </div>
  </div>
  <div className="flex-1 col-span-5 max-h-screen sticky top-0 overflow-y-auto">
  <div className="flex flex-wrap mt-8">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Details
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Information
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Lender Corner
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <address className="relative bg-gray-100 dark:bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-2">
            <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                Loan File <br />
                Applicant <br />
                Lender <br />
                Channel <br />
                Sales Manager <br />
                Updated by <br />

            </div>
            <div id="contact-details" className="space-y-2 text-gray-900 dark:text-white font-medium leading-loose">
                LAF837502595882128269 <br />
                Custom steel traders <br />
                Kotak Mahindra LTD.<br />
                Money Care PVT.<br />
                Rishi Gulathi <br />
                Ravi Chaudhary <br />
            </div>
        </address>
                <address className="mt-2 relative bg-gray-100 dark:bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-2">
            <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                Product Type <br />
                Sub Product <br />
                Loan Type <br />
                LAN/Apac <br />
                Client Name(other) <br />
                Disburse Amount <br />
                Disburse Date <br />
                Transaction Amount <br />
                Transaction Status <br />
                PDD date <br />
            </div>
            <div id="contact-details" className="space-y-2 text-gray-900 dark:text-white font-medium leading-loose">
                Home Loan <br />
                Construction <br />
                BT + Top-up <br />
                DISB7122945112 <br />
                Shaktiman <br />
                $750000 <br />
                14/Mar/24 <br />
                $450000 <br />
                PDD Cleared <br />
                27/Mar/24 <br />
            </div>
        </address>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex justify-center">
                    No Information Available Yet
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex justify-center">
                    Feature Unavailable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
}