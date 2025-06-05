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
    
      { id: 3.19, label: 'Criminal / offense records (if applicable)', checked: false },
      { id: 3.21, label: 'Arrest report + official statement that no charges were filed (if arrested, no charges)', checked: false, nested: true },
      { id: 3.22, label: 'Court‑certified arrest record + disposition for each incident (if charges filed)', checked: false, nested: true },
      { id: 3.23, label: 'Evidence you completed jail / prison / probation or alternative sentence', checked: false, nested: true },
      { id: 3.24, label: 'Sentencing record + proof of completed alternative / rehab programs', checked: false, nested: true },
      { id: 3.25, label: 'Probation or parole record (if applicable)', checked: false, nested: true },
      { id: 3.26, label: 'Court order or pardon documents for vacated / expunged cases', checked: false, nested: true },
      { id: 3.27, label: 'Countervailing evidence in your favor (optional)', textOnly: true },
    
      { id: 3.28, label: 'Traffic‑incident docs (only if alcohol/drugs, arrest, or injury involved)', checked: false },
    
      { id: 3.29, label: 'Proof of payment for fines / restitution / wage‑garnishment orders', checked: false },
      { id: 3.31, label: 'IRS correspondence for any unfiled tax returns', checked: false },
      { id: 3.32, label: 'IRS or tax‑office agreement + status of repayment program (if taxes overdue)', checked: false },
      { id: 3.33, label: 'Evidence of child‑support payments (canceled checks, agency printouts, wage‑garnishment proof, or notarized caregiver letter)', checked: false },
    
      { id: 3.34, label: 'Proof you maintained US residence for trips 6‑12 months (rent/mortgage, bank statements, car registration, passport stamps, or IRS transcripts)', checked: false },
    
      { id: 3.35, label: 'Status information letter from Selective Service (male applicants 26‑31, or 29 if based on marriage)', checked: false },
      { id: 3.36, label: 'Statement explaining failure to register (if applicable)', checked: false },
    
      { id: 3.37, label: 'Court order for legal guardian / surrogate OR evidence of designated representative (school, hospital, IRS, SSA, affidavits)', checked: false },
      {id: 3.38, label: 'Documentation of family relationship (if rep. is not legal guardian)', checked: false, nested: true },
      { id: 3.39, label: 'Form N‑648 certifying inability to take Oath (if applicable)', checked: false },
  
      { id: 3.41, label: 'Evidence spouse has been a US citizen 3+ years (birth cert, naturalization or citizenship cert, passport, or Form FS-240)', checked: false },
      { id: 3.42, label: 'Current marriage certificate', checked: false },
      { id: 3.43, label: 'Evidence termination of all prior marriages for both spouses', checked: false },
      { id: 3.44, label: 'Joint documents (tax returns, bank accounts, leases, mortgages, children\'s birth certs) for last 3 years or IRS transcripts', checked: false },
      { id: 3.45, label: 'Proof of continuous residence for any 6-12 month trips in last 3 years', checked: false },
      { id: 3.46, label: 'Evidence of qualifying employment abroad if spouse is a US citizen working overseas', checked: false },
      { id: 3.47, label: 'Typed statement of intent to reside abroad with spouse and return to US afterward', checked: false, nested: true },
      { id: 3.48, label: 'Proof of authorization to accompany spouse on military orders + military service docs (if spouse in US armed forces)', checked: false },
    
      { id: 3.49, label: 'Evidence of US‑citizen spouse’s citizenship', checked: false },
      { id: 3.51, label: 'Evidence of marriage to US‑citizen spouse (current or former; marriage need not still exist)', checked: false },
      { id: 3.52, label: 'Note: Divorce / separation not required if LPR was obtained via VAWA', textOnly: true },

      { id: 3.53, label: <Link href="https://www.uscis.gov/n-426" target="_blank" rel="noopener">Form N‑426 (Certification of Military or Naval Service)</Link> + ' (if currently serving)', checked: false },
      { id: 3.54, label: 'DD 214, NGB 22, or discharge orders (if separated)', checked: false },
      {id: 3.55,  label: 'Official military orders (if applicable)', checked: false },
      { id: 3.56, label: 'Two passport‑style photos (if residing outside the US)', checked: false },
      { id: 3.57, label: 'Note: No continuous‑residence docs needed if serving during designated hostilities', textOnly: true },
    
      { id: 3.58, label: 'Reminder: Attorney or accredited rep must file Form G‑28 with N‑400 or bring it to the interview',textOnly: true },

    ],

4: [
{ label: 'Submit Form N‑400 and pay filing fees', textOnly: true },

{ id: 4.1, label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10‑Step Naturalization Process</Link>, checked: false },
{ id: 4.2, label: <Link href="https://www.uscis.gov/n-400" target="_blank" rel="noopener">Form N‑400, Application for Naturalization</Link>, checked: false },
{ id: 4.3, label: 'Decide whether to file online or by mail (do not do both)', checked: false },
{ id: 4.4, label: 'If requesting a full or partial fee waiver, you must file by mail', checked: false },

{ id: 4.5, label: 'Pay the correct fee (final and non‑refundable)', checked: false },
{ id: 4.6, label: 'If paying full fee: $760 by mail  |  $710 online', checked: false, nested: true },
{  id: 4.7, label: 'If requesting reduced fee: $380 + supporting documents (must file by mail)', checked: false, nested: true },
{ id: 4.8, label: 'If requesting fee waiver: file Form I‑912 (or written request) + supporting docs (mail only)', checked: false, nested: true },
{ id: 4.9,label: 'Save a copy of your payment', checked: false },

{ id: 4.11, label: 'Mail payment options: money order, personal check, cashier’s check, credit/debit card via Form G‑1450', checked: false, nested: true },
{ id: 4.12, label: 'Make checks payable to U.S. Department of Homeland Security', checked: false, nested: true },

{ id: 4.13, label: 'File no earlier than 90 days before meeting the continuous‑residence requirement', checked: false },
{ id: 4.14, label: <Link href="https://www.uscis.gov/forms/uscis-early-filing-calculator" target="_blank" rel="noopener">Use USCIS early‑filing calculator to confirm earliest date</Link>, checked: false, nested: true },

{ id: 4.15, label: 'Create a USCIS online account (recommended even if mailing)', checked: false },
{ id: 4.16, label: 'Track case status, get updates, respond to RFEs, and manage contact info online', checked: false, nested: true },


{ id: 4.17, label: <Link href="https://www.uscis.gov/forms/filing-guidance/tips-for-filing-forms-by-mail" target="_blank" rel="noopener">Follow USCIS tips for filing forms by mail</Link>, checked: false },
{ id: 4.18, label: 'Download current form edition, complete electronically, then print & sign', checked: false, nested: true },
{ id: 4.19, label: 'If handwriting, use black ink; no highlighters or correction fluid/tape', checked: false, nested: true },
{ id: 4.21, label: 'Sign every form; assemble in recommended order; separate payments preferred', checked: false, nested: true },
{ id: 4.22, label: 'Address package exactly as shown on form webpage; keep tracking number', checked: false, nested: true },

{ id: 4.23, label: 'Wait for Form N‑400 receipt notice (extends Green Card up to 24 months)', checked: false },
{ id: 4.24, label: 'Keep a copy of your entire N‑400 package and supporting evidence', checked: false },
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
{ label: 'Prepare for naturalization interview', textOnly: true },
{ id: 6.1, label: 'USCIS will schedule interview; bring the appointment notice', checked: false },
{ id: 6.2, label: 'Arrive at USCIS office on time; reschedule promptly if you must miss', checked: false },
{ id: 6.3, label: 'Review your N‑400 responses—officer will ask about them', checked: false },
{ id: 6.4, label: 'Take English and civics tests (unless exempt)', checked: false },
{ label: <Link href="https://www.uscis.gov/citizenship/find-study-materials-and-resources" target="_blank" rel="noopener">USCIS study materials</Link>, textOnly: true, nested: true },
{ label: <Link href="https://www.uscis.gov/citizenship-exam" target="_blank" rel="noopener">100 civics questions & MP3 audio (2008 test)</Link>, textOnly: true, nested: true },
{ label: <Link href="https://my.uscis.gov/en/prep/test/civics/view" target="_blank" rel="noopener">Civics practice test</Link>, textOnly: true, nested: true },
{ label: <Link href="https://www.usa.gov/learn-english" target="_blank" rel="noopener">Resources to learn English</Link>, textOnly: true, nested: true },
],

7: [
{ id: 7.1, label: 'Receive USCIS decision (granted, continued, or denied)', textOnly: true },
{ id: 7.2, label: 'Check notice in mail or online account', checked: false },
{ id: 7.3, label: 'If continued: respond to Form N‑14 or retake failed test section within 60‑90 days', checked: false },
{ id: 7.4, label: 'If denied: you may appeal by filing Form N‑336 within 30 days', checked: false },
{ id: 7.5, label: 'If granted: proceed to oath‑ceremony steps', checked: false },
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