import React, { useState } from 'react';
import BasicTimeline from '../components/Timeline';
import Panel from '../components/Panel';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Progress from '../components/ProgressBar';


const steps = [
    { id: 1, label: "Step 1: Are you a US citizen?", time: "Estimated time: suspendisse eget "}, 
    { id: 2, label: "Step 2: Determine your eligibility to become a US citizen", time: "Estimated time: suspendisse eget "}, 
    { id: 3, label: "Step 3: Prepare Form N-400 (Application for Naturalization)", time: "Estimated time: suspendisse eget "}, 
    { id: 4, label: "Step 4: Submit Form N-400 and Pay Fees", time: "Estimated time: suspendisse eget "}, 
    { id: 5, label: "Step 5: Biometrics Appointment, if applicable", time: "Estimated time: suspendisse eget "}, 
    { id: 6, label: "Step 6: Prepare for and Complete the Interview", time: "Estimated time: suspendisse eget "}, 
    { id: 7, label: "Step 7: Receive a Decision (from USCIS on your Form N-400)", time: "Estimated time: suspendisse eget "}, 
    { id: 8, label: "Step 8: Receive a Notice to Take the Oath of Allegiance", time: "Estimated time: suspendisse eget "}, 
    { id: 9, label: "Step 9: Take the Oath of Allegiance to the United States", time: "Estimated time: suspendisse eget "}, 
    { id: 10, label: "Step 10: Understanding US citizenship", time: "Estimated time: suspendisse eget "}
]

  export default function Results() {
    const [selectedStep, setSelectedStep] = useState(null);
    const [checklists, setChecklists] = useState({
      1: [
        { label: 'I am not a US citizen by birth AND', checked: false },
        { label: 'I did not acquire or derive US citizenship from my parents automatically after birth', checked: false },
      ],
      2: [
        { label: 'The following checklist is taken straight from the Naturalization Eligibility Worksheet (M-480). Check the box to indicate that it’s true. All must be TRUE unless noted.', textOnly: true },
        { label: 'I am at least 18 years old', checked: false },
        { label: 'Exception: Military naturalization under INA §329', textOnly: true },
        { label: '2. I am a Permanent Resident of the United States and have been issued a Permanent Resident Card', checked: false },
    
        { label: ' I have been a Permanent Resident for 5 or more years', checked: false },
        { label: 'Attachment A: I have been a Permanent Resident for 3-5 years', textOnly: true },
        { label: 'I am married to, and living with, a US citizen', checked: false, nested: true },
        { label: 'I have been married to that US citizen for at least the past 3 years', checked: false, nested: true },
        { label: 'My spouse has been a US citizen for at least the past 3 years', checked: false, nested: true },
        { label: 'During the past 3 years, I have not been out of the country for 18 months or more', checked: false, nested: true },
        { label: '(All of the above must be TRUE to be eligible → go to #5)',  textOnly: true },
        { label: '(You can file 90 days early once continuous-residence is satisfied.)',  textOnly: true },
    
        { label: 'In the last 5 years, I have **not** been outside the US for 30 months or more', checked: false },
        { label: 'Attachment B: I have been outside the US for 30 months or more', textOnly: true },
        { label: 'Served on a US‑operated or US‑registered vessel', checked: false, nested: true },
        { label: 'Employee / contractor of the US Government', checked: false, nested: true },
        { label: 'Perform ministerial / priestly functions for a US‑based denomination', checked: false, nested: true },
        { label: '(All of the above must be TRUE → go to #5)', textOnly: true },
        { label: 'Note: see pages 20‑21 of Guide M‑476', textOnly: true },
    
        { label: 'In the last 5 years (or 3 if under Attachment A) I have **not** taken a trip that lasted 1 year or more', checked: false },
        { label: 'Attachment C: I have taken a trip of 1 year or more', textOnly: true },
        { label: 'Since becoming a Permanent Resident, no trip ≥1 year without an approved Form N‑470', checked: false, nested: true },
        { label: '(Above must be TRUE → go to #6)', textOnly: true },
        { label: 'Note: see pages 18‑21 of Guide M‑476', textOnly: true },
    
        { label: 'I have resided in the district/state where I am applying for the last 3 months', checked: false },
        { label: 'I can read, write, and speak basic English', checked: false },
        { label: 'Attachment D criteria (if not): age/disability exceptions', textOnly: true },
        { label: 'I know US history and government fundamentals', checked: false },
        { label: 'Attachment E criteria (if not): disability exception', textOnly: true },
        { label: 'I am a person of good moral character', checked: false },
        { label: 'I am female', checked: false },
        { label: '—or— I am a male registered with Selective Service', checked: false },
        { label: '—or— I first entered the US after my 26th birthday', checked: false },
        { label: 'or— I was in the US 18‑26 but did not register and will submit Status Info Letter', checked: false },
        { label: '—or— I was a lawful non‑immigrant 18‑26', checked: false },
        { label: 'I have never deserted from the US Armed Forces', checked: false },
        { label: 'I have never been exempted/discharged from the US Armed Forces as an alien', checked: false },
        { label: 'I am willing to perform military or civilian service if required', checked: false },
        { label: '(If your religion forbids military service, you must accept non‑military service)',  textOnly: true },
        { label: 'I will support the US Constitution', checked: false },
        { label: 'I am willing to take the Oath of Allegiance', checked: false },
      ],
    
      3: [
        { label: 'General Checklist', textOnly: true },
        { label: 'Complete and sign your Form N‑400', checked: false },
        { label: 'If you reside outside the US, get two passport‑style photos', checked: false },
        { label: 'Collect documents to demonstrate eligibility', checked: false },
        { label: 'Review your Form N‑400 and supporting docs', checked: false },
    
        { label: 'Required Initial Evidence (send **copies** unless originals requested)', textOnly: true },
        { label: 'Permanent Resident Card', checked: false },
        { label: 'Photocopy of both sides of Permanent Resident Card', checked: false },
        { label: 'Receipt for Form I‑90 if card is lost', checked: false },
        { label: 'Check or money order for application + biometrics fees (A‑Number on back)', checked: false },
        { label: <Link href="https://www.uscis.gov/g-1450" target="_blank" rel="noopener">Form G‑1450 (credit‑card payment authorization)</Link>, checked: false },
        { label: 'Two identical color photographs (if residing outside the US)', checked: false },
        { label: 'Photo requirements — see page 33 of Guide M‑476', textOnly: true },
        { label: 'Head‑covering photos must still show facial features', textOnly: true },
        { label: 'Original Form G‑28 if represented by attorney / accredited rep', checked: false },
        { label: 'Legal name change evidence (marriage certificate, divorce decree, or court order)', checked: false },
      
        { label: 'Court or government order to provide financial support (if spouse / children live apart)', checked: false, nested: true },
        { label: 'Proof you have complied with support order (cancelled checks, receipts, wage‑garnishment proof, or letter from caregiver)', checked: false, nested: true },
      
        { label: <Link href="https://www.uscis.gov/n-648" target="_blank" rel="noopener">Form N‑648 (Medical Certification for Disability Exceptions)</Link>, checked: false },
      
        { label: 'Current marriage certificate', checked: false },
        { label: 'Divorce / annulment decree or death certificate for all prior marriages (if any)', checked: false },
      
        { label: 'Criminal / offense records (if applicable)', checked: false },
        { label: 'Arrest report + official statement that no charges were filed (if arrested, no charges)', checked: false, nested: true },
        { label: 'Court‑certified arrest record + disposition for each incident (if charges filed)', checked: false, nested: true },
        { label: 'Evidence you completed jail / prison / probation or alternative sentence', checked: false, nested: true },
        { label: 'Sentencing record + proof of completed alternative / rehab programs', checked: false, nested: true },
        { label: 'Probation or parole record (if applicable)', checked: false, nested: true },
        { label: 'Court order or pardon documents for vacated / expunged cases', checked: false, nested: true },
        { label: 'Countervailing evidence in your favor (optional)', textOnly: true },
      
        { label: 'Traffic‑incident docs (only if alcohol/drugs, arrest, or injury involved)', checked: false },
      
        { label: 'Proof of payment for fines / restitution / wage‑garnishment orders', checked: false },
        { label: 'IRS correspondence for any unfiled tax returns', checked: false },
        { label: 'IRS or tax‑office agreement + status of repayment program (if taxes overdue)', checked: false },
        { label: 'Evidence of child‑support payments (canceled checks, agency printouts, wage‑garnishment proof, or notarized caregiver letter)', checked: false },
      
        { label: 'Proof you maintained US residence for trips 6‑12 months (rent/mortgage, bank statements, car registration, passport stamps, or IRS transcripts)', checked: false },
      
        { label: 'Status information letter from Selective Service (male applicants 26‑31, or 29 if based on marriage)', checked: false },
        { label: 'Statement explaining failure to register (if applicable)', checked: false },
      
        { label: 'Court order for legal guardian / surrogate OR evidence of designated representative (school, hospital, IRS, SSA, affidavits)', checked: false },
        { label: 'Documentation of family relationship (if rep. is not legal guardian)', checked: false, nested: true },
        { label: 'Form N‑648 certifying inability to take Oath (if applicable)', checked: false },
    
        { label: 'Evidence spouse has been a US citizen 3+ years (birth cert, naturalization or citizenship cert, passport, or Form FS‑240)', checked: false },
        { label: 'Current marriage certificate', checked: false },
        { label: 'Evidence termination of all prior marriages for both spouses', checked: false },
        { label: 'Joint documents (tax returns, bank accounts, leases, mortgages, children’s birth certs) for last 3 years or IRS transcripts', checked: false },
        { label: 'Proof of continuous residence for any 6‑12 month trips in last 3 years', checked: false },
        { label: 'Evidence of qualifying employment abroad if spouse is a US citizen working overseas', checked: false },
        { label: 'Typed statement of intent to reside abroad with spouse and return to US afterward', checked: false, nested: true },
        { label: 'Proof of authorization to accompany spouse on military orders + military service docs (if spouse in US armed forces)', checked: false },
      
        { label: 'Evidence of US‑citizen spouse’s citizenship', checked: false },
        { label: 'Evidence of marriage to US‑citizen spouse (current or former; marriage need not still exist)', checked: false },
        { label: 'Note: Divorce / separation not required if LPR was obtained via VAWA', textOnly: true },

        { label: <Link href="https://www.uscis.gov/n-426" target="_blank" rel="noopener">Form N‑426 (Certification of Military or Naval Service)</Link> + ' (if currently serving)', checked: false },
        { label: 'DD 214, NGB 22, or discharge orders (if separated)', checked: false },
        { label: 'Official military orders (if applicable)', checked: false },
        { label: 'Two passport‑style photos (if residing outside the US)', checked: false },
        { label: 'Note: No continuous‑residence docs needed if serving during designated hostilities', textOnly: true },
      
        { label: 'Reminder: Attorney or accredited rep must file Form G‑28 with N‑400 or bring it to the interview',textOnly: true },

      ],

4: [
  { label: 'Submit Form N‑400 and pay filing fees', textOnly: true },

  { label: <Link href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization" target="_blank" rel="noopener">10‑Step Naturalization Process</Link>, checked: false },
  { label: <Link href="https://www.uscis.gov/n-400" target="_blank" rel="noopener">Form N‑400, Application for Naturalization</Link>, checked: false },
  { label: 'Decide whether to file online or by mail (do not do both)', checked: false },
  { label: 'If requesting a full or partial fee waiver, you must file by mail', checked: false },

  { label: 'Pay the correct fee (final and non‑refundable)', checked: false },
  { label: 'If paying full fee: $760 by mail  |  $710 online', checked: false, nested: true },
  { label: 'If requesting reduced fee: $380 + supporting documents (must file by mail)', checked: false, nested: true },
  { label: 'If requesting fee waiver: file Form I‑912 (or written request) + supporting docs (mail only)', checked: false, nested: true },
  { label: 'Save a copy of your payment', checked: false },

  { label: 'Mail payment options: money order, personal check, cashier’s check, credit/debit card via Form G‑1450', checked: false, nested: true },
  { label: 'Make checks payable to U.S. Department of Homeland Security', checked: false, nested: true },

  { label: 'File no earlier than 90 days before meeting the continuous‑residence requirement', checked: false },
  { label: <Link href="https://www.uscis.gov/forms/uscis-early-filing-calculator" target="_blank" rel="noopener">Use USCIS early‑filing calculator to confirm earliest date</Link>, checked: false, nested: true },

  { label: 'Create a USCIS online account (recommended even if mailing)', checked: false },
  { label: 'Track case status, get updates, respond to RFEs, and manage contact info online', checked: false, nested: true },


  { label: <Link href="https://www.uscis.gov/forms/filing-guidance/tips-for-filing-forms-by-mail" target="_blank" rel="noopener">Follow USCIS tips for filing forms by mail</Link>, checked: false },
  { label: 'Download current form edition, complete electronically, then print & sign', checked: false, nested: true },
  { label: 'If handwriting, use black ink; no highlighters or correction fluid/tape', checked: false, nested: true },
  { label: 'Sign every form; assemble in recommended order; separate payments preferred', checked: false, nested: true },
  { label: 'Address package exactly as shown on form webpage; keep tracking number', checked: false, nested: true },

  { label: 'Wait for Form N‑400 receipt notice (extends Green Card up to 24 months)', checked: false },
  { label: 'Keep a copy of your entire N‑400 package and supporting evidence', checked: false },
],

5: [
  { label: 'Attend biometrics appointment (if required)',  textOnly: true },
  { label: 'Receive Form I‑797C appointment notice from USCIS', checked: false },
  { label: 'Bring appointment notice plus valid photo ID (Green Card, passport, or driver’s license)', checked: false },
  { label: 'If you need to reschedule, do so BEFORE the appointment date via your USCIS account or call 800‑375‑5283 with good cause', checked: false },
  { label: 'Wear appropriate attire (photo may appear on Certificate of Naturalization)', checked: false, nested: true },
  { label: 'Bring a copy of your completed N‑400 to the appointment (recommended)', checked: false },
],

6: [
  { label: 'Prepare for naturalization interview', textOnly: true },
  { label: 'USCIS will schedule interview; bring the appointment notice', checked: false },
  { label: 'Arrive at USCIS office on time; reschedule promptly if you must miss', checked: false },
  { label: 'Review your N‑400 responses—officer will ask about them', checked: false },
  { label: 'Take English and civics tests (unless exempt)', checked: false },
  { label: <Link href="https://www.uscis.gov/citizenship/find-study-materials-and-resources" target="_blank" rel="noopener">USCIS study materials</Link>, checked: false, nested: true },
  { label: <Link href="https://www.uscis.gov/citizenship-exam" target="_blank" rel="noopener">100 civics questions & MP3 audio (2008 test)</Link>, checked: false, nested: true },
  { label: <Link href="https://my.uscis.gov/en/prep/test/civics/view" target="_blank" rel="noopener">Civics practice test</Link>, checked: false, nested: true },
  { label: <Link href="https://www.usa.gov/learn-english" target="_blank" rel="noopener">Resources to learn English</Link>, checked: false, nested: true },
],

7: [
  { label: 'Receive USCIS decision (granted, continued, or denied)', textOnly: true },
  { label: 'Check notice in mail or online account', checked: false },
  { label: 'If continued: respond to Form N‑14 or retake failed test section within 60‑90 days', checked: false },
  { label: 'If denied: you may appeal by filing Form N‑336 within 30 days', checked: false },
  { label: 'If granted: proceed to oath‑ceremony steps', checked: false },
],

8: [
  { label: 'Receive Form N‑445 with date, time, and location of oath ceremony', checked: false },
  { label: 'If eligible, same‑day oath may be offered after interview', checked: false },
  { label: 'If you cannot attend, follow rescheduling instructions on Form N‑445', checked: false },
],

9: [
  { label: 'Complete questionnaire on Form N‑445 before ceremony', checked: false },
  { label: 'Report to ceremony location; check in with USCIS', checked: false },
  { label: 'USCIS officer reviews your Form N‑445 answers', checked: false },
  { label: 'Turn in Permanent Resident Card', checked: false },
  { label: 'Take the Oath of Allegiance', checked: false },
  { label: 'Receive Certificate of Naturalization; review for errors before leaving', checked: false },
],
10: [
  { label: ''}
]
    });
    
  
    const handleChecklistChange = (stepId, updatedChecklist) => {
      setChecklists(prev => ({ ...prev, [stepId]: updatedChecklist }));
    };
  
    const completedSteps = Object.entries(checklists)
      .filter(([_, items]) => items
      .filter(i => !i.textOnly)
        .every(item => item.checked))
      .map(([stepId]) => Number(stepId));
    const completedCount = completedSteps.length;

    let changeWidth = selectedStep ? "50%" : "100%";
  
    return (
      <Box sx={{ display: 'flex', height: '100vh'}}>
        <Box sx={{ width: changeWidth, overflowY: 'auto', ml: -20}}>
          <Progress 
            totalSteps={steps.length}
            completedSteps={completedCount}
          />
          
          <BasicTimeline
            steps={steps}
            onStepClick={setSelectedStep}
            completedSteps={completedSteps}
          />
        </Box>
        
         {selectedStep && (
            <Box sx={{ width: '50%', overflowY: 'auto' }}>
            <Panel
              step={selectedStep}
              checklist={checklists[selectedStep.id] || []}
              onChecklistChange={handleChecklistChange}
            />
            </Box>
          )}
        
      </Box>
    );
  }
