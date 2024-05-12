
export const Drawer = () => {
    return <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow rounded-lg pt-5 pl-5 pr-5">
        {/* <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Loan File Details</h2> */}
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
                ...828269 <br />
                Custom steel traders <br />
                Kotak <br />
                Money Care <br />
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
                Disburse Date <br />
                Disburse Amount <br />
                Transaction Amount <br />
                Transaction Status <br />
                PDD date <br />
            </div>
            <div id="contact-details" className="space-y-2 text-gray-900 dark:text-white font-medium leading-loose">
                Home Loan <br />
                Construction <br />
                BT + Top-up <br />
                DISB71229 <br />
                Shaktiman <br />
                14th/Mar/24 <br />
                $750000 <br />
                $450000 <br />
                No PDD <br />
                27th/Mar/24 <br />
            </div>
        </address>
    </div>
}