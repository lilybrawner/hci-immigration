import Link from '@mui/material/Link';

export const F1steps = [
    { id: 1, label: 'Step 1: Determine Eligibility' },
    { id: 2, label: 'Step 2: School Acceptance' }, 
    { id: 3, label: 'Step 3: Complete the Online Visa Application' },
    { id: 4, label: 'Step 4: Schedule an Interview' },
    { id: 5, label: 'Step 5: Gather Required Documentation and Prepare for the Interview' }, 
    { id: 6, label: 'Step 6: Attend your Visa Interview' }, 
    { id: 7, label: 'Step 7: Enter the United States' }, 
    { id: 8, label: 'Step 8: Maintain F-1 Visa Status' },
    { id: 9, label: 'Step 9: CPT, if desired' }, 
    { id: 10, label: 'Step 10: Graduation and Program Completion' }, 
    { id: 11, label: 'Step 11: Change of Status' }
]

export const F1checklists = {
    1: [
        { section: 'Checklist'},
        { id: 1.1, label: 'I will be enrolled in an accredited college, university, seminary, conservatory, academic high school, elementary school, or other academic institution OR in a language training program', checked: false},
        { id: 1.2, label: 'My school is approved by the Student and Exchange Visitors Program, Immigration and Customs Enforcement, and is authorized by the US government to accept foreign students', checked: false, nested: true},
        { label: (
            <>
            Use this{' '}
            <Link
                href="https://studyinthestates.dhs.gov/school-search" 
                target="_blank" 
                rel="noopener"
            >link
            </Link>{' '}
            to check if your school is SEVP certified
            </>
        ), textOnly: true, nested: true},
        { id: 1.3, label: 'My program or course of study will culminate in a degree, diploma, or certificate', checked: false },
        { id: 1.4, label: 'I will be enrolled as a full-time student at the institution during each academic term', checked: false },
        { id: 1.5, label: 'I am proficient in English or will be enrolled in courses leading to English proficiency', checked: false },
        { id: 1.6, label: 'I have sufficient funds available for self-support during the entire proposed course of study', checked: false },
        { id: 1.7, label: 'I will maintain a residence abroad (in my home country) which I have no intention of giving up (and will return to after I complete my degree)', checked: false },
        { id: 1.8, label: 'I have a passport valid for US travel that will stay valid for at least six months beyond my stay in the US', checked: false },
        { label: (
            <>
            Note: If your passport is in the following{' '}
            <Link
                href="https://www.cbp.gov/sites/default/files/2025-04/Six-Month%20Passport%20Exemption%20Update%2020250410.pdf" 
                target="_blank" 
                rel="noopener"
            >list
            </Link>{' '}
            (effective January 2024) then it only needs to be valid for the duration of your stay
            </>
        ), textOnly: true, nested: true},
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true }
    ], 
    2: [
        { section: 'Checklist' },
        { id: 2.1, label: 'Receive acceptance from a SEVP-certified institution', checked: false },
        { id: 2.2, label: 'Receive your I-20 Form from your SEVP-certified institution' }, 
        { label: 'Note: This will include your', textOnly: true },
        { id: 2.3, label: 'Your SEVIS ID number', checked: false, nested: true },
        { id: 2.4, label: 'Your program start and end dates', checked: false, nested: true },
        { id: 2.5, label: 'Your funding sources', checked: false, nested: true },
        { id: 2.6, label: 'The cost of attendance at your institution', checked: false, nested: true },
        { id: 2.7, label: 'Your school official’s signature', checked: false, nested: true },
        { id: 2.8, label: 'Verify the personal information on your I-20 Form and, if correct, sign the bottom of the first page', checked: false },
        { id: 2.9, label: 'Keep your I-20', checked: false, nested: true },
        { id: 2.11, label: 'Pay your SEVIS fee (I-901)', checked: false }, 
        { id: 2.12, label: 'Submit $350 through the payment portal', checked: false, nested: true }, 
        { id: 2.13, label: 'Save the receipt to bring to your visa interview', checked: false, nested: true },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true }
    ], 
    3: [
        { section: 'Checklist' },
        { id: 3.1, label: 'Fill out Form DS-160 (Online Nonimmigrant Visa Application)', checked: false },
        { label: 'Requirements', textOnly: true },
        { id: 3.2, label: 
            (
                <>
                A photo for your visa that meets these{' '}
                <Link
                    href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html" 
                    target="_blank" 
                    rel="noopener"
                >photograph requirements
                </Link>.
                </>
            ), checked: false, nested: true },
        { id: 3.3, label: 'Your passport', checked: false, nested: true },
        { id: 3.4, label: 'Your I-20', checked: false, nested: true },
        { id: 3.5, label: 'Your travel itinerary', checked: false, nested: true },
        { id: 3.6, label: 'Pay the non-refundable visa application $185 fee', checked: false }, 
        { id: 3.7, label: 'Print the DS-160 confirmation barcode page to bring to your visa interview', checked: false },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true }
    ],
    4: [
        { label: 'Note: generally, an interview is required unless you are 13 years of age or younger OR you are 80 years of age or older.', textOnly: true },
        { label: 
            (
                <>
                Note: Apply early because{' '}
                <Link
                    href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html" 
                    target="_blank" 
                    rel="noopener"
                >wait times
                </Link>{' '}
                vary.
                </>
            ), textOnly: true
        },
        { section: 'Checklist' },
        {
          id: 4.1,
          label:
            'Schedule an appointment for your visa interview at the US Embassy or Consulate in the country where you live',
          checked: false,
        },
        {
          label:
            'You can schedule your interview at another country’s US Embassy or Consulate, but it may be more difficult to demonstrate eligibility outside your country of residence.',
          textOnly: true,
          nested: true,
        },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true }
      ],
      5: [
        { section: 'Required Documents' },
        {
          id: 5.1,
          label:
            'Passport valid for travel to the US',
            checked: false,
        },
        {
            label: 
            (
                <>
                NOTE: It must be valid for at least six months beyond your stay in the US. If is in the following {' '}
                <Link
                    href="https://www.cbp.gov/sites/default/files/2025-04/Six-Month%20Passport%20Exemption%20Update%2020250410.pdf" 
                    target="_blank" 
                    rel="noopener"
                >list 
                </Link>{' '}
                (effective January 2024) then it only needs to be valid for the duration of your stay 
                </>
            ), textOnly: true, nested: true
        },
        {
          id: 5.2,
          label: 'Signed Form I-20',
          checked: false,
        },
        {
          id: 5.3,
          label: 'I-901 SEVIS payment confirmation',
          checked: false,
        },
        {
          id: 5.4,
          label: 'Form DS-160 Confirmation Page',
          checked: false,
        },
        {
          id: 5.5,
          label: 'DS-160 application fee payment confirmation',
          checked: false,
        },
        {
          id: 5.6,
          label:
            'Printed copy of the photo for your visa',
          checked: false,
        },
        { label: 
            (
                <>
                Note: Bring this in case it did not successfully upload during the Form DS-160. It must meet these{' '}
                <Link
                    href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html" 
                    target="_blank" 
                    rel="noopener"
                >list 
                </Link>. 
                </>
            ), textOnly: true, nested: true
        },
        {
          id: 5.7,
          label: 'Academic preparation documents (transcripts, diplomas, degrees, or certificates from school you attended, and standardized test scores required by your US school.)',
          checked: false,
        },
        {
          id: 5.8,
          label: 'Your intent to depart the US upon completion of the course of study',
          checked: false,
        },
        {
          id: 5.9,
          label:
            'How you will pay all educational, living, and travel costs (e.g., bank statements and other proof of finances)',
          checked: false,
        },
        { section: 'Checklist' },
        {
          id: 5.11,
          label:
            'Be prepared to pay a visa issuance fee at the end of your interview (if applicable to your nationality)',
          checked: false,
        },
        { id: 5.12,
          label: (
            <>
              Review these{' '}
              <Link
                href="https://ois.usc.edu/new-students/visa/interview-tips/"
                target="_blank"
                rel="noopener"
              >
                Interview Tips
              </Link>{' '}
              from USC’s Office of International Services
            </>
          ),
          textOnly: true,
        },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true }
      ],
      6: [
        { label: 'Note: Fingerprint scans are often taken at this step' },
        { section: 'Required Documents' },
        {
          id: 6.1,
          label: 'Bring all required documents prepared in Step 5',
          checked: false,
        },
        {
          id: 6.2,
          label: 'Attend your visa interview',
          checked: false,
        },
        {
          id: 6.3,
          label: 'Prove you have the funds to cover your time studying in the US',
          checked: false,
          nested: true
        },
        {
          id: 6.4,
          label: 'Confirm that you plan on returning home after you finish your studies',
          checked: false,
          nested: true
        },
        { section: 'Visa Outcomes' },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true },
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/administrative-processing-information.html" target="_blank" rel="noopener">Administrative Processing Information</Link>, textOnly: true },
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html" target="_blank" rel="noopener">Visa Denials</Link>, textOnly: true },
        { label: <Link href="https://international.northeastern.edu/ogs/new-students/f-1-visa-process/" target="_blank" rel="noopener">F-1 Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://studyinthestates.dhs.gov/students/prepare/students-and-the-form-i-20" target="_blank" rel="noopener">Students and the Form I-20</Link>, textOnly: true }
      ],
      7: [
        { label: (
            <>
              A visa does not guarantee entry into the US. Customs and Border Protection (CBP) officials at the US port of henry have the authority to permit or deny admission to the US. Once admitted, the CBP official will provide an admission stamp or a paper Form I-94. Learn more about US entry information from {' '}
              <Link
                href="https://ois.usc.edu/new-students/visa/interview-tips/"
                target="_blank"
                rel="noopener"
              >
                US Customs and Border Patrol
              </Link>
              .
            </>
          ),
          textOnly: true, },
        { section: 'Checklist' },
        {
          id: 7.1,
          label: 'Have your I-20 on hand to show at the US port of entry',
          checked: false,
        },
        {
          id: 7.2,
          label: 'Do not enter the US more than 30 days before the start of your program',
          checked: false,
        },
        {
          id: 7.3,
          label: 'Contact your DSO when you arrive in the country',
          checked: false,
        },
        {
          id: 7.4,
          label: 'Contact your DSO when you arrive at the university, and before your program start date',
          checked: false,
        },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true },
        { label: <Link href="https://studyinthestates.dhs.gov/students/maintaining-status" target="_blank" rel="noopener">Maintaining Status</Link>, textOnly: true }
      ],
      8: [
        { section: 'Checklist' },
        {
          id: 8.1,
          label: 'Attend all your classes',
          checked: false,
        },
        {
          id: 8.2,
          label: 'Maintain normal academic progress',
          checked: false,
        },
        {
            id: 8.3,
            label: 'Maintain good academic standing',
            checked: false,
        },
        {
            id: 8.4,
            label: 'Maintain a full course of study each term',
            checked: false,
          },
        {
          id: 8.5,
          label: 'When dropping or changing classes, speak to your DSO',
          checked: false,
          nested: true
        },
        { label: 'Note: Reduced course loads are only approved in limited circumstances',
            nested: true,
            wordOnly: true
        },
        {
          id: 8.6,
          label:
            'If you need more time to complete your program and it will exceed your I-20 end date, speak to your DSO to discuss your options',
          checked: false,
        },
        {
          label:
            'Note: You must complete one full academic year before you can take an annual vacation. You must register for classes for the academic term following your vacation.',
          textOnly: true,
        },
        {
          label:
          (
            <>
              Note: Your DSO is a great resource that you should regularly consult, especially if things change over time. Check out{' '}
              <Link
                href="https://studyinthestates.dhs.gov/students/maintaining-status"
                target="_blank"
                rel="noopener"
              >
                “Talk with your DSO First”
              </Link>
              .
            </>
          ),
          textOnly: true,
        },
        { section: 'Sources' }, 
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true },
        { label: <Link href="https://studyinthestates.dhs.gov/students/maintaining-status" target="_blank" rel="noopener">Maintaining Status</Link>, textOnly: true }
      ],
      9: [
        { section: 'Checklist' },
        { id: 9.1, label: '' }, 
        { section: 'Sources' }, 
        { label: <Link href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment" target="_blank" rel="noopener">Students and Employment</Link>, textOnly: true },
        { label: <Link href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students" target="_blank" rel="noopener">Optional Practical Training (OPT) for F-1 Students</Link>, textOnly: true },
        { label: <Link href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt" target="_blank" rel="noopener">Optional Practical Training Extension for STEM Students (STEM OPT)</Link>, textOnly: true }
      ],
      10: [
        { section: 'Checklist' },
        {
          id: 10.1,
          label:
            'Depart the US within 60 days after the program end date listed on Form I-20',
          checked: false,
        },
        { label: 'Note: If you overstay the 60 days, you will be out of status and your visa will be automatically voided. In certain cases, you may be ineligible for visas in the future.', textOnly: true, nested: true },
        {
          id: 10.2,
          label:
            'Options to extend your stay',
          checked: false,
        },
        {
          id: 10.3,
          label: (
            <>
              Request an extension through{' '}
              <Link
                href="https://www.uscis.gov/visit-the-united-states/extend-your-stay"
                target="_blank"
                rel="noopener"
              >
                USCIS
              </Link>{' '}
              
            </>
          ),
          checked: false,
          nested: true
        },
        { id: 10.4, label: 'Transfer to another school', nested: true, checked: false },
        { id: 10.5, label: 'Change your education level (ex. from Bachelor’s to Master’s)', nested: true, checked: false },
        { id: 10.6, 
            label: (
            <>
              <Link
                href="https://www.uscis.gov/visit-the-united-states/change-my-nonimmigrant-status"
                target="_blank"
                rel="noopener"
              >
                Change your nonimmigrant status
              </Link>
            </>
          ), },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true },
        { label: <Link href="https://studyinthestates.dhs.gov/students/maintaining-status" target="_blank" rel="noopener">Maintaining Status</Link>, textOnly: true }
      ],
      11: [
        { section: 'Checklist' },
        {
          id: 11.1,
          label:
            'Receive your change of status',
          checked: false,
        },
        {
          id: 11.2,
          label:
            'Once you depart from the US, apply for a new visa at a US Embassy or Consulate',
          checked: false,
        },
      ],
}

