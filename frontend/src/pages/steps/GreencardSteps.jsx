import Link from '@mui/material/Link';
import React from 'react';

export const gcsteps = [
    { id: 1, label: "Step 1: Are you already a US citizen?"}, 
    { id: 2, label: "Step 2: Determine your Eligibility"}, 
    { id: 3, label: "Step 3: Prepare Form N-400 (Application for Naturalization)"}, 
    { id: 4, label: "Step 4: Submit Form N-400 and Pay Fees"}, 
    { id: 5, label: "Step 5: Biometrics Appointment, if applicable"}, 
    { id: 6, label: "Step 6: Prepare for and Complete the Interview"}, 
    { id: 7, label: "Step 7: Receive a Decision (from USCIS on your Form N-400)"}, 
    { id: 8, label: "Step 8: Receive a Notice to Take the Oath of Allegiance"}, 
    { id: 9, label: "Step 9: Take the Oath of Allegiance to the United States"}, 
    { id: 10, label: "Step 10: Understanding US Citizenship"}
]

export const gcchecklists = {
    1: [ 
      { section: 'Step 1: Determine if you are a US citizen' },
      { label: 'Continue to Step 2 if the following is correct and you are not a US citizen:', textOnly: true },
      { id: 1.1, label: 'I am not a US citizen by birth AND', checked: false },
      { id: 1.2,label: 'I did not acquire or derive US citizenship from my parents automatically after birth', checked: false },
      { section: 'Sources' },
      { label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10-Step Naturalization Process</Link>, textOnly: true },
    ],
    2: [
      { section: 'Step 2: Determine your Eligibility' },
      {
          label: (
            <>
              The following checklist is taken straight from the Naturalization Eligibility Worksheet (M-480). Click here if you would rather complete it using the{' '}
              <Link
                href="https://www.uscis.gov/sites/default/files/document/guides/M-480.pdf"
                target="_blank"
                rel="noopener"
              >
                PDF Version
              </Link>
              .
            </>
          ),
          textOnly: true,
        },
        {
          label: (
            <>
             For a more streamlined process, use{' '}
              <Link
                href="https://www.uscis.gov/naturalization-eligibility"
                target="_blank"
                rel="noopener"
              >
                USCIS’s Naturalization Eligibility Tool
              </Link>
              {' '}by following the link and clicking “Determine my eligibility.”
            </>
          ),
          textOnly: true,
        },
        {
          label: 'Check the box to indicate that it’s true. To be eligible, all these answers must be TRUE, unless specified otherwise. According to the worksheet, if you answer these questions as true, “you are probably eligible to apply for naturalization.”',
          textOnly: true,
        } ,     
      {
        id: 2.47,
        label: '1. One of the following must be true',
        type: 'dropdown',
        options: [
          'I am at least 18 years old',
          'I am under 18 years old but I am a member of the US armed forces who served honorably during a designated period of hostilities',
        ],
        selected: null,
        checked: false,
      },
      {
          label: (
            <>
             If applicable, read{' '}
              <Link
                href="https://www.uscis.gov/policy-manual/volume-12-part-i-chapter-3"
                target="_blank"
                rel="noopener"
              >
                Immigration and Nationality Act (INA) Section 329 
              </Link>
              {' '}to determine your eligibility through military service.
            </>
          ),
          textOnly: true,
          nested: true,
        },
      { id: 2.2 , label: '2. I am a Permanent Resident of the United States and have been issued a Permanent Resident Card', checked: false },
      {
        id: 2.25,
        label: '3. One of the following must be true',
        type: 'dropdown',
        options: [
          {
            label: 'I have been a permanent resident for 5 or more years',
            autoCheck: true
          },
          {
            label: 'I have been a permanent resident for 3-5 years',
            children: [
              {
                id: '2.25.1',
                label: 'I am married to, and living with, a US citizen',
                checked: false, 
                nested: true
              },
              {
                id: '2.25.2',
                label: 'I have been married to that US citizen for at least the past 3 years',
                checked: false,
                nested: true,
              },
              {
                id: '2.25.3',
                label: 'My spouse has been a US citizen for at least the past 3 years',
                checked: false,
                nested: true,
              },
              {
                id: '2.25.4',
                label: 'During the past 3 years, I have not been out of the country for 18 months or more',
                checked: false,
                nested: true,
              },
              {
                id: '2.25.5',
                label: 'Note: You can file your application 90 days before you have satisfied the continuous residence requirement.',
                textOnly: true,
                nested: true,
              }
            ]
          }
        ],
        selected: null,
        checked: false
      },
      {
        id: 2.26,
        label: '4. One of the following must be true',
        type: 'dropdown',
        options: [
          'In the last 5 years, I have not been outside the US for 30 months or more',
          'I have been outside the US for 30 months or more, but I am a person who has served on board a vessel operated by or registered in the United States',
          'I have been outside the US for 30 months or more, but I am an employee or an individual under contract to the US Government',
          'I have been outside the US for 30 months or more, but I am a person who performs ministerial or priestly functions for a religious denomination or an interdenominational organization with a valid presence in the United States',
        ],
        selected: null,
        checked: false,
      },
      { label: (
        <>
          Read pages 20-21 in{' '}
          <Link
            href="https://id.uscourts.gov/Content_Fetcher/index.cfml/A_Guide_to_Naturalization_3814.pdf?Content_ID=3814"
            target="_blank"
            rel="noopener"
          >
            A Guide to Naturalization (M-476)
          </Link>
          {' '}for more information.
        </>
      ),
      textOnly: true,
      nested: true,
    },
    {
      id: 2.27,
      label: '5. One of the following must be true',
      type: 'dropdown',
      options: [
        'During the last 5 years (or last 3 if I qualified), I have not taken a trip out of the United States that lasted one year or more',
        'Since becoming a Permanent Resident, I have not taken a trip out of the United States that lasted for one year or more without an approved “Application to Preserve Residence for Naturalization Purposes” (Form N-470)',
      ],
      selected: null,
      checked: false,
    },
    { label: (
      <>
        Read pages 18-21 in{' '}
        <Link
          href="https://id.uscourts.gov/Content_Fetcher/index.cfml/A_Guide_to_Naturalization_3814.pdf?Content_ID=3814"
          target="_blank"
          rel="noopener"
        >
          A Guide to Naturalization (M-476)
        </Link>
        {' '}for more information.
      </>
    ),
    textOnly: true,
    nested: true,
  },
      {  id: 2.12, label: '6. I have resided in the district/state where I am applying for the last 3 months', checked: false },
      {
        id: 2.28,
        label: '7. One of the following must be true',
        type: 'dropdown',
        options: [
          'I can read, write, and speak basic English',
          'I cannot read, write, and speak basic English, but I am over 50 years old and have lived in the United States for at least 20 years since I became a Permanent Resident',
          'I cannot read, write, and speak basic English, but I am over 55 years old and have lived in the United States for at least 15 years since I became a Permanent Resident',
          'I cannot read, write, and speak basic English, but I have a disability that prevents me from fulfilling this requirement and will be filing a “Medical Certification for Disability Exceptions” (Form N-648) with my application which will be completed and signed by a doctor'
        ],
        selected: null,
        checked: false,
      },
      { label: (
        <>
          Read pages 26-27 in{' '}
          <Link
            href="https://id.uscourts.gov/Content_Fetcher/index.cfml/A_Guide_to_Naturalization_3814.pdf?Content_ID=3814"
            target="_blank"
            rel="noopener"
          >
            A Guide to Naturalization (M-476)
          </Link>
          {' '}for more information.
        </>
      ),
      textOnly: true,
      nested: true,
    },
    {
      id: 2.29,
      label: '8. One of the following must be true',
      type: 'dropdown',
      options: [
        'I know the fundamentals of US history and the form and principles of the US government',
        'I have a disability that prevents me from fulfilling this requirement and will be filing a “Medical Certification for Disability Exceptions” (Form N-648) with my application which will be completed and signed by a doctor'
      ],
      selected: null,
      checked: false,
    },
    { label: (
      <>
        Read pages 26-27 in{' '}
        <Link
          href="https://id.uscourts.gov/Content_Fetcher/index.cfml/A_Guide_to_Naturalization_3814.pdf?Content_ID=3814"
          target="_blank"
          rel="noopener"
        >
          A Guide to Naturalization (M-476)
        </Link>
        {' '}for more information.
      </>
    ),
    textOnly: true,
    nested: true,
  },
      {  id: 2.17, label: '9. I am a person of good moral character', checked: false },
      {
        id: 2.18,
        label: '10. One of the following must be true',
        type: 'dropdown',
        options: [
          'I am female',
          'I am a male registered with the Selective Service',
          'I am a male who did not enter the United States under any status until after my 26th birthday',
          'I am a male who was in the United States between the ages of 18 and 26 but did not register with the Selective Service, and I will send a “Status Information Letter” from the Selective Service explaining why I did not register with my application',
          'I am a male who was in the United States between the ages of 18 and 26 as a lawful nonimmigrant'
        ],
        selected: null,
        checked: false,
      },      
      {  id: 2.19, label: '11. I have never deserted from the US Armed Forces', checked: false },
      {  id: 2.21, label: '12. I have never received an exemption or discharge from the US Armed Forces on the grounds that I am an alien', checked: false },
      { id: 2.22, label: '13. I am willing to perform military or civilian service if required by law', checked: false },
      { label: '(If your religion forbids military service, you must accept non-military service)',  nested: true, textOnly: true },
      {  id: 2.23,label: '14. I will support the US Constitution', checked: false },
      { id: 2.24, label: '15. I understand and am willing to take an oath of allegiance to the United States', checked: false },
      { section: 'Sources' },
      { label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10-Step Naturalization Process</Link>, textOnly: true },
      { label: <Link href="https://id.uscourts.gov/Content_Fetcher/index.cfml/A_Guide_to_Naturalization_3814.pdf?Content_ID=3814" target="_blank" rel="noopener">A Guide To Naturalization (M-476)</Link>, textOnly: true },
    ],
  
    3: [
      { section: 'Step 3: Prepare Form N-400 (Application for Naturalization)'},
      { id: 3.1, label: 'Complete and sign your Form N‑400', checked: false },
      { id: 3.2, label: 'If you reside outside the US, get two passport‑style photos taken', checked: false },
      { id: 3.3, label: 'Collect necessary documents to demonstrate eligibility for naturalization', checked: false },
      {id: 3.4, label: 'Review your Form N‑400 and supporting documents', checked: false },
  
      { section: 'Required Document Checklist'},
      {
        label: (
          <>
            The following checklist is a tool provided by USCIS to help you prepare the{' '}
            <Link
              href="https://www.uscis.gov/n-400"
              target="_blank"
              rel="noopener"
            >
              N-400 (under “Checklist of Required Initial Evidence”)
            </Link>
            . It does not replace the instruction requirements on the form itself. Do not send original documents unless specifically requested in the form instructions or applicable regulations.

          </>
        ),
        textOnly: true,
      },
      { label: 'Note: If you submit any documents in a foreign language, you must include a full English translation along with a certification from the translator that verifies that the translation is complete and accurate, and that the translator is competent to translate from the language to English.', textOnly: true },
      { label: 'Send copies of the following documents unless you are asked to provide an original.', textOnly: true },
      { id: 3.5, label: 'Permanent Resident Card', checked: false },
      { id: 3.6, label: 'Photocopy of both sides of Permanent Resident Card', checked: false , nested: true},
      { id: 3.7, label: 'If you have lost the card, submit a photocopy of the receipt for your Form I-90 (Application to Replace Permanent Resident Card)', checked: false, nested: false},
      { id: 3.8, label: 'A check or money order for the application fee (and biometric services fee, if applicable) with your A‑Number on back', checked: false },
      {
        label: (
          <>
            If you want to pay by credit card instead (there is not additional fee), complete and submit {' '}
            <Link
              href="https://www.uscis.gov/g-1450"
              target="_blank"
              rel="noopener"
            >
              Form G-1450 (Authorization for Credit Card Transaction)
            </Link>
            .

          </>
        ),
        textOnly: true,
        nested: true,
      },
      { id: 3.11, label: 'If you reside outside the US, submit two identical color photographs with your name and A-Number (if any) written lightly on the back of each photo using a pencil or a felt pen', checked: false },
      { label: (
        <>
          Read page 33 in{' '}
          <Link
            href="https://id.uscourts.gov/Content_Fetcher/index.cfml/A_Guide_to_Naturalization_3814.pdf?Content_ID=3814"
            target="_blank"
            rel="noopener"
          >
            A Guide to Naturalization (M-476)
          </Link>
          {' '}for photo requirements.
        </>
      ), nested: true, textOnly: true
    },
      { label: 'Note: If your religion requires you to wear a head covering, your facial features must still be exposed in the photo for purposes of identification', textOnly: true , nested: true},
      { id: 3.12, label: 'If an attorney or accredited representative is acting on your behalf, provide a completed ORIGINAL Form G-28 (Notice of Entry of Appearance as Attorney or Representative)', checked: false },
      {id: 3.13,  label: 'If your current legal name is different from the name on your Permanent Resident Card, provide the document(s) that legally changed your name (marriage certificate, divorce decree, or court order)', checked: false },
    
      { id: 3.14, label: 'If you have a dependent spouse or child(ren) who do not live with you, provide any court or government order to provide financial support', checked: false},
      { id: 3.15, label: 'Provide evidence of your financial support (including evidence that you have complied with any court or government order) such as cancelled checks, money and receipts, a court or agency printout of child support payments, evidence of wage garnishments OR a letter from the parent or guardian who cares for your child(ren)', checked: false, nested: true },
      { label: (
        <>
          If you have a disability that prevents you from complying with the English language or civics requirements, submit{' '}
          <Link href="https://www.uscis.gov/n-648" target="_blank" rel="noopener">Form N‑648 (Medical Certification for Disability Exceptions)</Link>,
        </>
      ), nested: false, checked: false
    },
    { id: 3.88, label: 'It must be completed less than 6 months ago by a licensed medical or osteopathic doctor or licensed clinical psychologist', nested: true, textOnly: true },
    
      { id: 3.17, label: 'Current marriage certificate', checked: false },
      { id: 3.18, label: 'Divorce / annulment decree or death certificate for all prior marriages (if any)', checked: false },
    
      { id: 3.19, label: 'Documentation of crimes and offenses, if applicable', checked: false },
      { id: 3.21, label: 'If you have ever been in a traffic incident, provide Documentation of traffic incidents only if the incident involved alcohol or drugs OR led to an arrest OR seriously injured another person', checked: false, nested: true },
      { id: 3.22, label: 'If you have ever been ordered to pay a fine, make restitution, or have your wages garnished, provide documentation of the order to pay a fine, restitution, or garnish wages AND Documentation that you have paid the required sum or evidence of current payment', checked: false, nested: true },
      { id: 3.23, label: 'If you have ever been arrested or detained for any reason, anywhere in the world, and NO CHARGES WERE FILED, provide an arrest report AND An official statement from the arresting agency or applicable court, confirming that no charges were filed', checked: false, nested: true },
      { id: 3.24, label: 'If you have ever been convicted and sentenced in any capacity or placed in any rehabilitation program in lieu of serving time, provide your sentencing record and evidence to show you completed your period of jail, prison, alternative sentence, or probation', checked: false, nested: true },
      { id: 3.25, label: 'If you have ever failed to file an income tax return since you became a Lawful Permanent Resident, provide all correspondence with the IRS regarding your failure to file', checked: false, nested: true },
      { id: 3.26, label: 'If you have any taxes that are overdue, provide a signed agreement from the IRS or state or local tax office showing you have filed a tax return and have arranged to pay the taxes you owe AND documentation from the IRS or state or local tax office showing the current status of your repayment program (Note: you can obtain copies of tax documents and tax information by contacting your local IRS offices)', checked: false, nested: true },
      { id: 3.27, label: 'If you have ever had any arrest or conviction vacated, set aside, sealed, expunged, or otherwise removed from your record, or received a pardon, provide A motion to vacate and court order vacating, setting aside, sealing, expunging, or otherwise removing the arrest or conviction from your record OR A statement from the court that no record exists of your arrest or conviction OR An application or petition for a pardon and final decision granting your application or petition for a pardon', nested: true, checked: false },
    
      { id: 3.34, label: 'Proof you maintained US residence for trips 6‑12 months (rent/mortgage, bank statements, car registration, passport stamps, or IRS transcripts)', checked: false },
    
      { id: 3.35, label: 'If you are male, have lived in the US in a status other than “lawful nonimmigrant” between the ages of 18 and 26, and are currently older than 26 years of age but younger than 31 years of age (or younger than 29 years old if filing based on marriage to a US citizen), applicants 26‑31, or 29 if based on marriage), provide the following information:', textOnly: true },
      { id: 3.36, label: 'Status information letter from the Selective Service AND A statement regarding your reasons for failing to register', checked: false, nested: true },
      { label: 'Note: Call 1-847-688-6888 for more information', textOnly: true, nested: true },
    
      {
        id: 3.37,
        label: 'Special Applicant Situations',
        type: 'dropdown',
        options: [
          {
            label: 'Applicants needing assistance from legal guardian, surrogate, or designated representative',
            children: [
              { label: 'Provide a court order authorizing the legal guardian or surrogate to exercise authority over the applicant’s affairs', checked: false, nested: true },
              { label: 'Evidence of an authorized designated representative who is the primary custodial caregiver and who takes responsibility for the applicant, such as:', textOnly: true, nested: true },
              { label: 'School records', checked: false, nested: true },
              { label: 'Hospital records', checked: false, nested: true },
              { label: 'Income tax returns (records showing that a person is an authorized representative before the IRS in connection with the applicant’s federal tax matters)', checked: false, nested: true },
              { label: 'Social Security documents (like enrollment in the US SSA Representative’s Payment Program)', checked: false, nested: true },
              { label: 'Affidavits (written sworn statements from other family members or persons who have personal knowledge of the familial relationship)', checked: false, nested: true },
              { label: 'Documentation of family relationship if the designated representative is not the legal guardian or surrogate', checked: false, nested: true },
              { label: 'Form N-648 certified by a medical professional of your inability to take the Oath', checked: false, nested: true },
              { label: 'Note: You could also provide a separate attestation from the medical profession, but it is not necessary if you’re providing the Form N-648', textOnly: true, nested: true }
            ]
          },
          {
            label: 'Spouses of US citizens',
            children: [
              { label: 'Evidence that your spouse has been a US citizen for the last 3 years (US birth certificate, certificate of naturalization, or certificate of citizenship', checked: false, nested: true },
              { label: 'Biographical and signature page of spouse’s US passport', checked: false, nested: true },
              { label: 'Form FS-240 (Report of Birth Abroad)', checked: false, nested: true },
              { label: 'A copy of your current marriage certificate', checked: false, nested: true },
              { label: 'Evidence of termination of prior marriages (divorce decree, annulment, death cert)', checked: false,nested: true },
              { label: 'Joint documents (tax returns, bank accounts, leases, birth certs of children)', checked: false, nested: true },
              { label: 'IRS-certified copies or transcripts for the past 3 years', checked: false, nested: true },
              { label: 'Proof of continuous residence if any trip outside US lasted 6–12 months', checked: false, nested: true },
              { label: 'If spouse works abroad, provide proof of employment and intention to return', checked: false, nested: true },
              { label: 'If spouse is in the military, provide military documentation and photos', checked: false, nested: true }
            ]
          },
          {
            label: 'VAWA (Violence Against Women Act) Applicants',
            children: [
              { label: 'Evidence of US citizenship', checked: false, nested: true },
              { label: 'Evidence of marriage to the US citizen', checked: false, nested: true },
              { label: 'Note: Divorce, separation, or union is NOT required for VAWA eligibility', textOnly: true, nested: true }
            ]
          },
          {
            label: 'Military Service',
            children: [
              { label: 'If currently serving: Form N-426', checked: false, nested: true },
              { label: 'If separated: DD Form 214, NGB Form 22, or discharge orders', checked: false, nested: true },
              { label: 'Copy of military orders if applicable', checked: false, nested: true },
              { label: 'Two passport-style photos if you reside outside the US', checked: false, nested: true },
              { label: 'Note: No continuous residence or physical presence required if serving during hostilities', textOnly: true, nested: true }
            ]
          }
        ],
        selected: null,
        checked: false
      },
    ],

4: [
{ section: 'Step 4: Submit Form N-400 and Pay Fees'},

{ id: 4.1, label: 'File the documents and pay the fees', checked: false },
{ id: 4.2, label: 'Note: The filing fee is final and nonrefundable', textOnly: true, nested: true },

{
  id: 4.3,
  label: 'Filing Fee Selection',
  type: 'dropdown',
  options: [
    {
      label: 'I am paying the full filing fee',
      children: [
        {
          label: 'Select “No” in Part 10, Item Number 1',
          checked: false,
          nested: true,
        },
        {
          label: 'Skip to Part 11',
          checked: false,
          nested: true,
        },
        {
          label: 'Choose whether you will file online OR by mail and submit $760 if filing by mail or $710 if filing online',
          checked: false,
          nested: true,
        },
      ]
    },
    {
      label: 'I am applying for a reduced fee',
      children: [
        {
          label: 'Select “Yes” in Part 10, Item Number 1',
          checked: false,
          nested: true,
        },
        {
          label: 'Complete the rest of Part 10',
          checked: false,
          nested: true,
        },
        {
          label: 'File the paper forms by mail',
          checked: false,
          nested: true,
        },
        {
          label: 'Submit $380 and documentation to support the reduced fee',
          checked: false,
          nested: true,
        },
        {
          label: 'Note: By applying for a reduced fee you can not apply online.',
          textOnly: true,
          nested: true,
        }
      ]
    },
    {
      label: 'I am applying for a fee waiver',
      children: [
        {
          label: 'Select “Yes” in Part 10, Item Number 1',
          checked: false,
          nested: true,
        },
        {
          label: 'Complete Form I-912 (Request for Fee Waiver)',
          checked: false,
          nested: true,
        },
        {
          label: 'File the paper forms by mail',
          checked: false,
          nested: true,
        },
        {
          label: 'Submit Form I-912 and documentation to support your request for a fee waiver',
          checked: false,
          nested: true,
        },
        {
          label: 'Note: You can submit a written request instead of Form I-912',
          textOnly: true,
          nested: true,
        }
      ]
    }
  ],
  selected: null,
  checked: false
},

{
  id: 4.4,
  label: 'Filing Method',
  type: 'dropdown',
  options: [
    {
      label: 'I am filing online',
      children: [
        {
          label: 'Create a USCIS online account',
          checked: false,
          nested: true
        },
        {
          label: 'Choose the guided filing method OR PDF filing option through the USCIS account',
          nested: true,
          checked: false,
        },
        {
          label: 'NOTE: You can create an online representative account for attorneys and accredited representatives',
          textOnly: true,
          nested: true
        },
        {
          label: 'Note: They can file the N-400 on your behalf ONLY through the guided filing method',
          textOnly: true,
          nested: true
        }
      ]
    },
    {
      label: 'I am filing by mail',
      children: [
        {
          label: 'NOTE: Payment options: Money order, personal check, cashier’s check, credit card using Form G-1450, or debit card using Form G-1450. Checks must be payable to the U.S. Department of Homeland Security',
          textOnly: true,
          nested: true
        },
        {
          label: 'Receive the USCIS Account Acceptance Notice',
          nested: true,
          checked: false,
        },
        {
          label: 'Create an online account to track and manage your case (recommended)',
          nested: true,
          checked: false,
        },
        {
          label: 'Note: Advantages of creating a USCIS account: Pay your filing fee online, check your case status, receive notifications and case updates, view personalized case completion date estimates, respond to requests for evidence, and manage your contact information, including updating your address',
          textOnly: true,
          nested: true
        },
        {
          label: 'Read the “Filing by Mail” tips section below',
          nested: true,
          checked: false,
        }
      ]
    }
  ],
  selected: null,
  checked: false
},

{ id: 4.5,label: 'Save a receipt of your payment', checked: false },

{ id: 4.6,label: 'Keep a copy of your completed Form N-400 and any supporting documentation you submitted', checked: false },
{ id: 4.7, label: 'NOTE: This Form N-400 receipt notice automatically extends the validity of your Permanent Resident Card for up to 24 months from its expiration date. This means you may not need to file Form I-90 (Application to Replace Permanent Resident Card) to maintain proper documentation. If you lose your Permanent Resident Card, you will still need to file Form I-90, even if you applied for naturalization. You must also file Form I-90 if you lose the Form N-400 receipt notice.', textOnly: true, nested: true},

{ section: 'When to File'},

{ id: 4.13, label: 'File no earlier than 90 days before meeting the continuous‑residence requirement', checked: false },
{ id: 4.14, label: <Link href="https://www.uscis.gov/forms/uscis-early-filing-calculator" target="_blank" rel="noopener">Use USCIS early‑filing calculator to confirm earliest date</Link>, checked: false, nested: true },

{ section: 'Tips for Filing By Mail'},

{ label: 'Complete Your Paper Properly', textOnly: true },
{ label: 'Only use the current form edition', textOnly: true, nested: true },
{ label: 'Make sure the form edition date and page numbers are visible on each printed page', textOnly: true, nested: true },
{ label: 'Make sure the edition dates are all the same', textOnly: true, nested: true },
{ label: 'Recommended: Download forms from the USCIS website and complete them electronically before printing them out and signing them', textOnly: true },
{ label: 'If handwriting your answers', textOnly: true},
{ label: 'Use BLACK INK', textOnly: true, nested: true },
{ label: 'Write clearly and legibly', textOnly: true, nested: true },
{ label: 'Do NOT use highlighters, correction fluid, or correction tape', textOnly: true, nested: true },
{ label: 'If you make an error, start over with a clean form', textOnly: true, nested: true },
{ label: 'Complete the entire form, unless the form instructs you to skip items', textOnly: true },
{ label: 'Sign your name in the provided signature space', textOnly: true},
{ label: 'Pay the correct fee', textOnly: true },
{ label: 'Recommended: If you are filing multiple applications, petitions, or requests, send separate payments for each application', textOnly: true,  },
{ label: 'Assemble Your Application, Petition, or Request', textOnly: true},
{ label: (
  <>
    The UCSIS recommends {' '}
    <Link
      href="https://www.uscis.gov/forms/filing-guidance/tips-for-filing-forms-by-mail"
      target="_blank"
      rel="noopener"
    >
      this
    </Link>
    {' '}assembly order.
  </>
),
textOnly: true,
nested: true,
},
{ label: 'Filing Multiple Applications, Petitions, or Requests in the Same Envelope', textOnly: true, nested: true },
{ label: 'Forms N-400 for family members who are applying for adjustment or naturalization at the same time are okay to be included in the same envelope because they are related and eligible to be filed together', textOnly: true, nested: true },
{ label: 'If you are filing multiple forms in the same envelope, do the following', textOnly: true, nested: true },
{ label: 'Write you name, date of birth, and A-Number (if any)', textOnly: true, nested: true },
{ label: 'Mail Your Application, Petition, or Request', textOnly: true },
{ label: 'Address the package to the complete address provided on the USCIS website on that form’s webpage, including the Attn: line', textOnly: true, nested: true },
{ label: 'You can send your forms through USPS, FedEx, DHL, or UPS', textOnly: true, nested: true },
{ label: 'Save a copy of your payment and write down your tracking number to verify it’s delivery', textOnly: true, nested: true },


{section: 'Sources'},
{ id: 4.1, label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10‑Step Naturalization Process</Link>, textOnly: true },
{ id: 4.2, label: <Link href="https://www.uscis.gov/n-400" target="_blank" rel="noopener">Form N‑400, Application for Naturalization</Link>, textOnly: true},
{ id: 4.17, label: <Link href="https://www.uscis.gov/forms/filing-guidance/tips-for-filing-forms-by-mail" target="_blank" rel="noopener">USCIS Tips for Filing Forms by Mail</Link>, textOnly: true },

],

5: [
{ section: 'Step 5: Attend Biometrics Appointment (if required)' },
{ id: 5.1, label: 'If you need a biometrics appointment, USCIS will send you an appointment notice (Form I-797C)', textOnly: true },
{ id: 5.2, label: 'Receive Form I-797C from USCIS', checked: false },
{ id: 5.2, label: 'Arrive at the appointment mentioned on the notice', checked: false },
{ id: 5.3, label: 'Bring your appointment notice and valid photo identification (your Green Card, passport, or driver’s license)', checked: false, nested: true},
{ id: 5.4, label: 'Note: You may be photographed at this appointment, so wear some acceptable to display on your Certificate of Naturalization', textOnly: true, nested: true },
{ id: 5.5, label: 'Note: USCIS recommends that you save a copy of the completed application and bring it to your appointment.', textOnly: true, nested: true },
{ label: 'If you need to reschedule, you MUST do it before the date and time of your scheduled biometrics appointment and establish good cause for rescheduling. You can reschedule your appointment online through your USCIS account or call the USCIS Contact Center +1(800-375-5283). ', textOnly: true },
{ section: 'Sources'},
{ label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10-Step Naturalization Process</Link>, textOnly: true },
{ label: <Link href="https://www.uscis.gov/forms/filing-guidance/preparing-for-your-biometric-services-appointment" target="_blank" rel="noopener">Preparing for your Biometric Services Appointment</Link>, textOnly: true },
],

6: [
  { section: 'Step 6: Prepare for and Complete the Interview' },
{ label: 'Note: USCIS will schedule an interview with you to complete the process.', textOnly: true },
{ id: 6.1, label: 'Report to the USCIS office at the scheduled time on your appointment notice', checked: false },
{ id: 6.2, label: 'BRING THE APPOINTMENT NOTICE TO YOUR INTERVIEW', checked: false , nested: true},
{ id: 6.8, label: 'Note: If you miss your interview, follow the instructions on the appointment notice as soon as possible to reschedule your interview. Missing the interview could delay your process for multiple months.', textOnly: true , nested: true},

{ section: 'What to Expect' },
{ id: 6.4, label: 'A USCIS officer will ask you questions about your Form N-400', textOnly: true},
{ id: 6.5, label: 'You will take the English and civics test, unless you are exempt', textOnly: true},

{ section: 'Study Resources and Sources' },
{ label: <Link href="https://www.uscis.gov/citizenship/find-study-materials-and-resources" target="_blank" rel="noopener">USCIS Test Information and Study Materials</Link>, textOnly: true, nested: false },
{ label: <Link href="https://www.uscis.gov/citizenship-exam" target="_blank" rel="noopener">100 civics questions & MP3 audio (2008 test)</Link>, textOnly: true, nested: false},
{ label: <Link href="https://my.uscis.gov/en/prep/test/civics/view" target="_blank" rel="noopener">2008 Civics Practice Test</Link>, textOnly: true, nested: false },
{ label: <Link href="https://www.usa.gov/learn-english" target="_blank" rel="noopener">Resources to learn English</Link>, textOnly: true, nested: false },
{ label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10-Step Naturalization Process</Link>, textOnly: true },
],

7: [
  { section: 'Step 7: Receive a Decision (from USCIS on your Form N-400)' },
{ id: 7.1, label: 'Note: The USCIS officer will provide you with a verbal notice of results at the end of your interview. You may be able to participate in a naturalization ceremony (Step 9) on the same day as your interview. If this is the case, go to Step 9.', textOnly: true },
{ id: 7.2, label: 'USCIS will mail the written notice of decision to you. If you filed the N-400 online, you can also access the notice in your account.', textOnly: true, nested: true },
{ id: 7.3, label: 'If there is not a naturalization ceremony on the same day as your interview, continue to Step 8.', textOnly: true, nested: true},
{
  id: 7.6,
  label: 'Naturalization Notice Outcome',
  type: 'dropdown',
  options: [
    {
      label: 'Granted',
      children: [
        {
          label: 'Note: The evidence establishes that you are eligible for naturalization',
          textOnly: true,
          nested: true,
        },
        {
          id: '7.30.1',
          label: 'Continue to the next steps',
          checked: false,
          nested: true,
        }
      ]
    },
    {
      label: 'Continued',
      children: [
        {
          label: 'If additional evidence/documentation is needed:',
          textOnly: true,
          nested: true,
        },
        {
          id: '7.30.2',
          label: 'File Form N-14 (Request for Additional Information, Documents, or Forms)',
          checked: false,
          nested: true,
        },
        {
          label: 'If you failed the English and/or civics test:',
          textOnly: true,
          nested: true,
        },
        {
          label: 'USCIS will schedule another interview for you within 60 to 90 days',
          textOnly: true,
          nested: true,
        },
        {
          label: 'Attend the interview. You will only be retested on the part that you failed.',
          textOnly: true,
          nested: true,
        },
        {
          label: 'Your Form N-400 will be denied if you fail the tests a second time',
          textOnly: true,
          nested: true,
        }
      ]
    },
    {
      label: 'Denied',
      children: [
        {
          label: 'If the evidence in your record establishes that you are not eligible for naturalization',
          textOnly: true,
          nested: true,
        },
        {
          label: 'If you believe your Form N-400 has been incorrectly denied, you can request a hearing to appeal the decision',
          textOnly: true,
          nested: true,
        },
        {
          id: '7.30.3',
          label: 'File Form N-336 (Request for a Hearing on a Decision in Naturalization Proceedings) within 30 days of the Form N-400 decision date',
          checked: false,
          nested: true,
        },
        {
          label: 'If it is not filed within the 30 day window, the denial decision is final',
          textOnly: true,
          nested: true,
        }
      ]
    }
  ],
  selected: null,
  checked: false
},


{section: 'Sources'},
{ label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10-Step Naturalization Process</Link>, textOnly: true },
{ label: <Link href="https://www.uscis.gov/policy-manual/volume-12-part-b-chapter-4?" target="_blank" rel="noopener">Results of the Naturalization Exam</Link>, textOnly: true },

],

8: [
  { section: 'Step 8: Receive a Notice to Take the Oath of Allegiance'},
{ id: 8.1, label: 'Note: USCIS will mail you a notification with the date, time, and location of your scheduled naturalization ceremony', textOnly: true },
{ id: 8.11, label: 'If you filed online, you can access this notice online as well', textOnly: true , nested: true},
{ id: 8.2, label: 'In some cases, you may be able to participate in the oath ceremony on the same day as your interview', textOnly: true},
{ id: 8.3, label: 'If you can’t attend the oath ceremony on the day scheduled for you, follow the instruction on the notice (N-445) to ask for a reschedule', checked: false },
{ section: 'Sources'},
{ label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10-Step Naturalization Process</Link>, textOnly: true },
{ label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/naturalization-ceremonies?" target="_blank" rel="noopener">Naturalization Ceremonies</Link>, textOnly: true },

],

9: [
  { section: 'Step 9: Take the Oath of Allegiance to the United States'},
{ id: 9.1, label: 'Complete the questionnaire on Form N-445 (Notice of Naturalization Oath Ceremony)', checked: false },
{ id: 9.2, label: 'Report for your naturalization ceremony', checked: false },
{ id: 9.99, label: 'Check in with USCIS', checked: false },
{ id: 9.3, label: 'Note: A USCIS officer will review your Form N-445 responses', textOnly: true, nested: true},
{ id: 9.4, label: 'Turn in Permanent Resident Card', checked: false },
{ id: 9.5, label: 'Take the Oath of Allegiance', checked: false },
{ id: 9.8, label: 'Receive and review your Certificate of Naturalization', checked: false },
{ id: 9.6, label: 'Notify USCIS of any error you see before leaving the ceremony site', checked: false , nested: true},
{ section: 'Sources'},
{ label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10-Step Naturalization Process</Link>, textOnly: true },
{ label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/naturalization-ceremonies?" target="_blank" rel="noopener">Naturalization Ceremonies</Link>, textOnly: true },
],
10: [
  { section: 'Step 10: Understanding US Citizenship'},
{ id: 10.1, label: 'For your information, review this list of some of the most important rights and responsibilities of all US citizens: ', checked: false},
{ id: 10.2, label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/should-i-consider-us-citizenship" target="_blank" rel="noopener">USCIS Should I Consider U.S. Citizenship?</Link>, textOnly: true, nested: true },

{ section: 'Sources'},
{ label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10-Step Naturalization Process</Link>, textOnly: true },
]}