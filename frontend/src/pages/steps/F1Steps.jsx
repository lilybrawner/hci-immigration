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
    { id: 9, label: 'Step 9: Employment Options' }, 
    { id: 10, label: 'Step 10: Graduation and Program Completion' }, 
]

export const F1checklists = {
    1: [
        { section: 'Step 1: Determine Eligibility'},
        { id: 1.1, label: 'I will be enrolled in an accredited college, university, seminary, conservatory, academic high school, elementary school, or other academic institution OR in a language training program', checked: false},
        { id: 1.2, label: 'My school is approved by the Student and Exchange Visitors Program, Immigration and Customs Enforcement, and is authorized by the US government to accept foreign students', checked: false, nested: false},
        { label: (
            <>
            Use this{' '}
            <Link
                href="https://studyinthestates.dhs.gov/school-search" 
                target="_blank" 
                rel="noopener"
            >link
            </Link>
            {' '}to check if your school is SEVP certified
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
        { label: <Link href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment" target="_blank" rel="noopener">Working in the United States</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true }
    ], 
    2: [
        { section: 'Step 2: School Acceptance' },
        { id: 2.1, label: 'Receive acceptance from a SEVP-certified institution', checked: false },
        { id: 2.2, label: 'Receive your I-20 Form from your SEVP-certified institution' , checked: false}, 
        { label: 'Note: This will include your SEVIS ID number, your program start and end dates, your funding sources, the cost of attendance at your institution, and your school official’s signature', textOnly: true , nested: true},
        { id: 2.8, label: 'Verify the personal information on your I-20 Form and, if correct, sign the bottom of the first page', checked: false },
        { id: 2.9, label: 'Keep your I-20', checked: false, nested: true },
        { id: 2.11, label: 'Pay your SEVIS fee (I-901)', checked: false }, 
        { label: (
          <>
          Submit $350 through the ICE{' '}
          <Link
              href="https://www.fmjfee.com/i901fee/index.html" 
              target="_blank" 
              rel="noopener"
          >payment portal
          </Link>
          </>
      ), checked: false, nested: true},
        { id: 2.13, label: 'Print the payment confirmation from the portal to bring to your visa interview', checked: false, nested: true },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true },
        { label: <Link href="https://www.ice.gov/sevis/i901" target="_blank" rel="noopener">Sevis Fee Information</Link>, textOnly: true }
    ], 
    3: [
        { section: 'Step 3: Complete the Online Visa Application' },
        { label: (
          <>
          You should apply early because{' '}
          <Link
              href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html" 
              target="_blank" 
              rel="noopener"
          >wait times to get an interview appointment
          </Link>{' '}
          vary.
          </>
      ), textOnly: true},
        { id: 3.1, label: 'Fill out Form DS-160 (Online Nonimmigrant Visa Application), which requires the following:', checked: false },
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
        { id: 3.67, label: 'Note: You will be asked to provide your social media handles for any and all accounts you have used in the last 5 years.', textOnly: true, nested: true}, 
        { id: 3.6, label: 'Pay the non-refundable visa application $185 fee', checked: false }, 
        { id: 3.7, label: 'Print the DS-160 confirmation barcode page to bring to your visa interview', checked: false },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true },
        { label: <Link href="https://www.boundless.com/blog/government-monitoring-of-immigrants-social-media/" target="_blank" rel="noopener">Immigrant Social Media</Link>, textOnly: true },
        { label: <Link href="https://international.northeastern.edu/ogs/new-students/f-1-visa-process/" target="_blank" rel="noopener">Northeastern University F-1 Visa Process Information</Link>, textOnly: true },
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visas-news-archive/20190604_collection-of-social-media-identifiers-from-U-S-visa-applicants.html" target="_blank" rel="noopener">Social Media Identifiers for Visa Applicants</Link>, textOnly: true },
    ],
    4: [
      { section: 'Step 4: Schedule an Interview' },  
      { label: 'Note: generally, an interview is required unless:', textOnly: true },
        { label: 'You are 13 years of age or younger OR', textOnly: true , nested: true},
        { label: 'You are 80 years of age or older', textOnly: true , nested: true},
        { label: 
            (
                <>
                Given {' '}
                <Link
                    href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html" 
                    target="_blank" 
                    rel="noopener"
                >wait times
                </Link>
                , set up your appointment as early as possible.
                </>
            ), textOnly: true
        },
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
        { section: 'Step 5: Gather Required Documentation and Prepare for the Interview' },
        {
          id: 5.01,
          label:
            'Gather required documents',
            checked: false,
        },
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
          checked: false,
        },
        { section: 'Required Documents Checklist'},
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
        { section: 'Additional Documents that May Be Requested'},
        {
          id: 5.7,
          label: 'Evidence of academic preparation', checked: false
        } ,
        { label: 'Transcripts, diplomas, degrees, or certificates from schools you attended', checked: false, nested: true },
        { label: 'Standardized test scores required by your US school', nested: true, checked: false },
        {
          id: 5.8,
          label: 'Evidence of your intent to depart the US upon completion of the course of study',
          checked: false,
        },
        {
          id: 5.9,
          label:
            'Evidence of how you will pay all educational, living, and travel costs', checked: false },
            {
label: 'Bank statements and other proof of finances', checked: false, nested: true},
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true }
      ],
      6: [
        { section: 'Step 6: Attend your Visa Interview' },
        { label: 'Note: Fingerprint scans are often taken at this step' , textOnly: true},
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

        {
          id: 6.5,
        label: 'Visa Outcomes',
        type: 'dropdown',
        options: [
          {
            label: 'My visa application was accepted',
          children: [
            {
              id: '2.25.1',
              label: 'Pay a visa insurance fee, if applicable to your nationality',
              checked: false, 
              nested: true
            },
            {
              id: '2.25.3',
              label: 'Note: Learn more through the U.S. Embassy or Consulate in your country',
              textOnly: true,
              nested: true,
            },
            {
              id: '2.25.8',
              label: 'Make arrangements for the return of the passport and visa to you',
              checked: false,
              nested: true,
            },
            {
              id: '2.25.4',
              label: 'If you have a spouse and unmarried, minor children that intend to reside in the US with you during your studies, they can apply for F-2 visas. Notify your school, receive an individual Form I-20 for your spouse and unmarried, minor children, and provide proof of relationship and a copy of your F-1 visa.',
              checked: false,
              nested: true,
            },
            {
              id: '2.25.5',
              label: 'Note: New student visas can be issued up to 365 days before the start date of a course of study, but you can only enter 30 days before the start date.',
              textOnly: true,
              nested: true,
            },
            {
              id: '2.25.7',
              label: 'Note: Continuing student visas can be issued at any time as long as enrollment continues to be qualified (SEVP-approved school or an institution SEVIS) and may enter the US at any time',
              textOnly: true,
              nested: true,
            }
          ],
          },
          {
            label: 'My visa application was refused under INA Section 221(g))',
          children: [
            {
              id: '2.22.7',
              label: 'Receive notice of why your application was refused',
              checked: false, 
              nested: true
            },
            {
              id: '2.22.6',
              label: 'Note: It is for 1 of 2 reasons: Additional documentation or information is required OR It requires additional administrative processing (processing times can vary based on individual circumstances)',
              textOnly: true,
              nested: true,
            },
            {
              id: '2.22.5',
              label: 'Provide any further documentation or information that is required within one year from the visa refusal date, if applicable',
              checked: false,
              nested: true,
            },
            {
              id: '2.22.4',
              label: 'Note: If you do not provide the required information within one year, you will have to reapply for the visa and pay the application fee again.',
              textOnly: true,
              nested: true,
            },
            {
              id: '2.22.3',
              label: 'Wait to hear back on whether your application was approved',
              checked: false,
              nested: true,
            }
          ]
          },
          {
            label: 'My visa application was denied',
          children: [
            {
              id: '2.21.3',
              label: 'Receive notice of which section of the law you were denied under, if applicable',
              checked: false, 
              nested: true
            },
            {
              id: '2.21.4',
              label: 'Apply for a waiver of ineligibility, if applicable',
              checked: false,
              nested: true,
            },
            {
              id: '2.21.5',label: 'Note: F-1 visa denials are rare, but the most common is under INA Section 214(b). This means the applicant did not properly show that they will return to their home country after they complete their program in the US. Make sure you receive documentation of the denial, so if you can apply again for an F-1 visa, you can present new information to be approved.',
              textOnly: true,
              nested: true,
            }
          ]
        }
          ],
          selected: null,
        checked: false
        },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true },
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/administrative-processing-information.html" target="_blank" rel="noopener">Administrative Processing Information</Link>, textOnly: true },
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html" target="_blank" rel="noopener">Visa Denials</Link>, textOnly: true },
        { label: <Link href="https://international.northeastern.edu/ogs/new-students/f-1-visa-process/" target="_blank" rel="noopener">F-1 Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://studyinthestates.dhs.gov/students/prepare/students-and-the-form-i-20" target="_blank" rel="noopener">Students and the Form I-20</Link>, textOnly: true }
      ],
      7: [
        { section: 'Step 7: Enter the United States' },
        { label: 'A visa does not guarantee entry into the US. Customs and Border Protection (CBP) officials at the US port of entry have the authority to permit or deny admission to the US.', textOnly: true},
        { label: 'Once admitted, the CBP official will provide an admission stamp or a paper Form I-94.', textOnly: true},
        { label: (
            <>
              Learn more about US entry information from {' '}
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
          { label: 'Note: These steps MUST be followed to maintain F-1 status upon your arrival to the US.', textOnly: true},
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
        { section: 'Step 8: Maintain F-1 Visa Status' },
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
            textOnly: true
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
              Note: Your DSO is a great resource that you should regularly consult, especially if things change over time. Check out the section “Talk with your DSO First” on the{' '}
              <Link
                href="https://studyinthestates.dhs.gov/students/maintaining-status"
                target="_blank"
                rel="noopener"
              >
                Maintaining Status
              </Link>{' '}
              page.
            </>
          ),
          textOnly: true,
        },

        {
          id: 8.7,
          label: 'Types of Work Authorization (CPT & OPT)',
          type: 'dropdown',
          options: [
            {
              label: 'Curricular Practical Training (CPT) Eligibility and Process',
              children: [
                { label: 'Note: Occurs before the end date listed on Form I-20. The training directly relates to the student’s major area of study and is an integral part of the school’s established curriculum.', textOnly: true, nested: true },
                { label: 'Note: Authorization is for one specific employer for a specific period of time. Students can have more than one CPT authorization at the same time.', textOnly: true, nested: true },
                { label: 'Note: CPT authorization is only required if the training is in the US', textOnly: true, nested: true },
                { label: 'I have been lawfully enrolled as a full-time student for at least one full academic year OR I am a student in graduate studies and my program requires earlier training', checked: false, nested: true },
                { label: 'OR I am a student in graduate studies and my program requires earlier training', checked: false, nested: true },
                { label: 'I am not studying English as a second language', checked: false, nested: true },
                { label: 'I have secured a training position', checked: false, nested: true },
                { label: 'Request CPT using your school’s process', checked: false, nested: true },
                { label: 'Wait for your DSO to authorize your CPT in SEVIS, if you are eligible. Your DSO will print and sign your Form I-20 with CPT authorization', checked: false, nested: true },
                { label: 'Begin work on or after your CPT start date', checked: false, nested: true },
                { label: 'End all work before or on your CPT end date', checked: false, nested: true }
              ]
            },
            {
              label: 'Optional Practical Training (OPT): Pre-completion Eligibility and Requirements',
              children: [
                { label: 'Note: According to ICE, F-1 students can apply to receive up to 12 months of OPT employment authorization before completing their academic studies (pre-completion) and/or after completing their academic studies (post-completion)', textOnly: true, nested: true },
                { label: 'All periods of pre-completion OPT will be deducted from the available period of post-completion OPT', textOnly: true, nested: true },
                { label: 'You can work up to 20 hours per week while school is in session, and can work full time while school is not in session.', textOnly: true, nested: true },
                { label: 'My temporary employment is directly related to my major area of study', checked: false, nested: true },
                { label: 'I have been lawfully enrolled for one full academic year as a full-time student at my SEVP-certified institution', checked: false, nested: true },
                { label: 'Note: This can still be satisfied if you had another nonimmigrant status during the year.', textOnly: true, nested: true },
                { label: 'Request that your DSO recommend the OPT', checked: false, nested: true },
                { label: 'Note: Your DSO will endorse your Form I-20 and note it in your SEVIS record', textOnly: true, nested: true },
                { label: 'File Form I-765 with USCIS', checked: false, nested: true },
                { label: 'Pay the required fee', checked: false, nested: true },
                { label: 'Attach the required supporting documentation', checked: false, nested: true },
                { label: 'Note: You must apply after your DSO enters the recommendation for OPT into your SEVIS record', textOnly: true, nested: true },
                { label: 'You may apply up to 90 days before you complete a full academic year, as long as you don’t start your OPT employment until after you complete the one year', textOnly: true, nested: true }
              ]
            },
            {
              label: 'Optional Practical Training (OPT): Post-completion Eligibility and Requirements',
              children: [
                { label: 'Note: Once authorized for post-completion OPT, you must work at least 20 hours per week (part time status) or full time.', textOnly: true, nested: true },
                { label: 'My temporary employment is directly related to my major area of study', checked: false, nested: true },
                { label: 'Request that your DSO recommend the OPT', checked: false, nested: true },
                { label: 'Note: Your DSO will endorse your Form I-20 and note it in your SEVIS record', textOnly: true, nested: true },
                { label: 'File Form I-765 with USCIS', checked: false, nested: true },
                { label: 'Pay the required fee', checked: false, nested: true },
                { label: 'Attach the required supporting documentation', checked: false, nested: true },
                { label: 'Note: You must apply within 30 days after your DSO enters the recommendation for OPT into your SEVIS record and not later than 60 days after you complete your degree. You may apply up to 90 days before you complete your degree.', textOnly: true, nested: true },
                { label: 'You can not begin your OPT until after USCIS approves your Form I-765 and you receive your EAD', textOnly: true, nested: true }
              ]
            },
            {
              label: 'STEM OPT Extension Eligibility and Requirements',
              children: [
                { label: 'Note: For certain STEM degrees, you can apply for a 2 year extension of your post-completion OPT authorization', textOnly: true, nested: true },
                { label: 'I am an F-1 student who received a degree included in ICE’s STEM Designated Degree Program List', checked: false, nested: true },
                { label: 'I am employed by an employer who:', textOnly: true, nested: true },
                { label: 'Is enrolled in and is using E-Verify', checked: false, nested: true },
                { label: 'Remains in good standing with E-Verify', checked: false, nested: true },
                { label: 'Has a valid EIN issued by the IRS for tax purposes', checked: false, nested: true },
                { label: 'Will report material changes of my employment by submitting a modified Form I-983 to the DSO at the earliest available opportunity', checked: false, nested: true },
                { label: 'Will report my termination of employment or departure to the DSO within 5 business days', checked: false, nested: true },
                { label: 'Will implement a formal training program to build on my academic learning through practical experience', checked: false, nested: true },
                { label: 'Will provide an OPT opportunity that is commensurate with those similarly situated US workers in duties, hours, and compensation', checked: false, nested: true },
                { label: 'Note: See USCIS for further notes on Employer Requirements and Responsibilities.', textOnly: true, nested: true },
                { label: 'I received an initial grant of post-completion OPT employment authorization based on my STEM degree and am currently in a valid period of it', checked: false, nested: true },
                { label: 'Note: See USCIS’ Eligibility for the STEM OPT Extension for notes on previously attained STEM degrees and future STEM degrees', textOnly: true, nested: true },
                { label: 'Submit Form I-765', checked: false, nested: true },
                { label: 'The correct application fee', checked: false, nested: true },
                { label: 'Your employer’s name as listed in E-Verify', checked: false, nested: true },
                { label: 'Your employer’s E-Verify Company Identification Number or valid E-Verify Client Company Identification Number', checked: false, nested: true },
                { label: 'Note: You must submit this within 60 days of the date your DSO enters the recommendation for OPT into your SEVIS record AND up to 90 days before your OPT employment authorization expires', textOnly: true, nested: true },
                { label: 'Form I-20 endorsed by your DSO within the last 60 days', checked: false, nested: true },
                { label: 'A copy of your STEM degree', checked: false, nested: true },
                { label: 'Note: if your application is filed on time and your OPT expires while your extension is pending, USCIS will automatically extend your employment authorization for 180 days or until a decision is made on your application.', textOnly: true, nested: true },
                { label: 'Note: For information on how transferring to another school or starting a different education level affects your OPT, go to the bottom of this USCIS page.', textOnly: true, nested: true }
              ]
            }
          ],
          selected: null,
          checked: false
        },
        

        { section: 'Sources' }, 
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true },
        { label: <Link href="https://studyinthestates.dhs.gov/students/maintaining-status" target="_blank" rel="noopener">Maintaining Status</Link>, textOnly: true },
        { label: <Link href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment" target="_blank" rel="noopener">Students and Employment</Link>, textOnly: true },
        { label: <Link href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students" target="_blank" rel="noopener">Optional Practical Training (OPT) for F-1 Students</Link>, textOnly: true },
        { label: <Link href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt" target="_blank" rel="noopener">Optional Practical Training Extension for STEM Students (STEM OPT)</Link>, textOnly: true },
        { label: <Link href="https://studyinthestates.dhs.gov/sevis-help-hub/student-records/fm-student-employment/f-1-curricular-practical-training-cpt" target="_blank" rel="noopener">Curricular Practical Training (CPT)</Link>, textOnly: true }
      ],
      9: [
        { section: 'Step 9: Graduation and Program Completion' },
        {
          id: 10.1,
          label:
            'Depart the US within 60 days after the program end date listed on Form I-20',
          checked: false,
        },
        { label: 'Note: If you overstay the 60 days, you will be out of status and your visa will be automatically voided. In certain cases, you may be ineligible for visas in the future.', textOnly: true, nested: true },
        {
          section: 'Options to Extend your Stay',
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
          nested: false,
        },
        { id: 10.4, label: 'Transfer to another school', nested: false, checked: false },
        { id: 10.5, label: 'Change your education level (ex. from Bachelor’s to Master’s)', nested: false, checked: false },
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
          { id: 10.44, label: 'Receive your change of status', nested: true, checked: false },
          { id: 10.45, label: 'Once you depart from the US, apply for a new visa at a US Embassy or Consulate', nested: true, checked: false },
        { section: 'Sources' }, 
        { label: <Link href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener">Student Visa Process</Link>, textOnly: true },
        { label: <Link href="https://shorelight.com/student-stories/student-visa-usa-f1/" target="_blank" rel="noopener">F-1 Visa for International Students: Requirements, Rules, Status</Link>, textOnly: true },
        { label: <Link href="https://studyinthestates.dhs.gov/students/maintaining-status" target="_blank" rel="noopener">Maintaining Status</Link>, textOnly: true }
      ],
}

