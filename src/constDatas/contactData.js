import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const contactData = [
  {
    title: "Visit us",
    description: "Level 1, 16-18 Wentworth Street Parramatta NSW 2150",
    iconUrl: "/assets/navigation.svg",
    redirect: "https://maps.app.goo.gl/8atQGN3b8tx2uPAz6",
  },
  {
    title: "Call us",
    description: "02 8856 2997",
    iconUrl: "/assets/mobile-phone.svg",
    redirect: "tel:02-8856-2997",
  },
  {
    title: "Email Us",
    description: "info@churchill.nsw.edu.au",
    iconUrl: "/assets/email.svg",
    redirect: "mailto:info@churchill.nsw.edu.au",
  },
  {
    title: "lodge a complain",
    description: "Fill a quick form",
    iconUrl: "/assets/complaint.svg",
    redirect:
      "https://forms.zohopublic.com.au/CIHE/form/Grievanceform/formperma/5jf5-XC5SXb47VhUMTlxv30fih-aqYAUbQh8V3lncvQ",
  },
  {
    title: "Connect with us",
    iconUrl: "/assets/connect.svg",
    socialLinks: [
      {
        title: "Facebook",
        icon: <FaFacebook />,
        url: "https://www.facebook.com/CIHEAustralia/",
      },
      {
        title: "LinkedIn",
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/company/churchill-institute-of-higher-education/",
      },
      {
        title: "Instagram",
        icon: <FaSquareInstagram />,
        url: "https://www.instagram.com/ciheaustralia/",
      },
    ],
  },
  {
    title: "Meet in Person",
    description: "Make an Appointment",
    iconUrl: "/assets/event.svg",
    redirect: "https://cihe.zohobookings.com.au/",
  },
  {
    title: "Emergency Contacts",
    description: "Get Help",
    iconUrl: "/assets/sos.svg",
    redirect: "/emergency-contact",
  },
];

// export const contactFaqs = [
//   {
//     title: "What programs and courses does Churchill offer?",
//     description: `<p>  Churchill offers a wide range of undergraduate and postgraduate programs across various fields, including:</p><ul>  <li>Major In Accounting</li>  <li>Major In Information Systems</li>  <li>Major In Hospitality</li>  <li>Major In Management</li></ul>`,
//   },
//   {
//     title: "How do I apply to Churchill?",
//     description: `
//       <p>
//         You can apply to Churchill through our online application portal. Ensure you have all necessary documents, such as transcripts, letters of recommendation, a personal statement, and proof of English proficiency if applicable. Deadlines for applications vary by program, so check the specific requirements for your chosen course.
//       </p>
//     `,
//   },
//   {
//     title: "What are the admission requirements?",
//     description: `
//       <p>
//         Admission requirements vary by program, but generally include:
//       </p>
//       <ul>
//         <li>Completed application form</li>
//         <li>Academic transcripts</li>
//         <li>Letters of recommendation</li>
//         <li>Personal statement or essay</li>
//         <li>English language proficiency test scores (e.g., IELTS, TOEFL) for non-native speakers</li>
//         <li>Standardized test scores (e.g., SAT, GRE) if applicable</li>
//       </ul>
//     `,
//   },
//   {
//     title: "What is the tuition fee structure?",
//     description: `
//       <p>
//         Tuition fees at Churchill vary depending on the program and level of study. Detailed information about tuition fees, as well as additional costs such as accommodation, textbooks, and other expenses, can be found on our website under the tuition fees section.
//       </p>
//     `,
//   },
//   {
//     title: "What student support services does Churchill offer?",
//     description: `
//       <p>
//         Churchill is committed to supporting our students through various services, including:
//       </p>
//       <ul>
//         <li>Academic advising and tutoring</li>
//         <li>Career counseling and job placement assistance</li>
//         <li>Mental health and wellness services</li>
//         <li>Disability support services</li>
//         <li>Student clubs and organizations</li>
//         <li>Orientation programs for new students</li>
//       </ul>
//     `,
//   },
//   {
//     title: "How can I get involved in student life at Churchill?",
//     description: `
//       <p>
//         There are numerous ways to get involved in student life at Churchill, including joining student clubs and organizations, participating in sports teams, attending campus events and workshops, and volunteering in community service projects. Our student affairs office can provide more information on current opportunities.
//       </p>
//     `,
//   },
//   {
//     title: "What are the campus facilities like?",
//     description: `
//       <p>
//         Churchill boasts state-of-the-art facilities, including modern classrooms, well-equipped laboratories, extensive libraries, sports and recreation centers, student lounges, and dining halls. We also have dedicated spaces for art, music, and other extracurricular activities.
//       </p>
//     `,
//   },
//   {
//     title: "How can I contact Churchill for more information?",
//     description: `
//       <p>
//         You can contact Churchill through our official website's contact page, where you'll find email addresses, phone numbers, and office locations for various departments. Additionally, you can visit our admissions office in person or attend one of our virtual information sessions to get your questions answered.
//       </p>
//     `,
//   },
// ];


export const checklist = [
  {
    title: "Essentials: Do not leave home without them",
    description: `<p class="text-lg font-semibold">Make sure you have these essentials before you leave home:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">Your passport</li>
      <li class="text-base">Your student visa and login details to <a class="text-blue-500 hover:underline"  href="https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online/visa-holders" target="_blank">VEVO</a> to retrieve it online</li>
      <li class="text-base">Refer to the <a class="text-blue-500 hover:underline" href="https://www.health.gov.au/sites/default/files/2025-11/overseas-student-health-cover-oshc-fact-sheet.pdf"> OSHC Factsheet (November 2025)</a> for information about health insurers for international students in Australia and purchase your OSHC prior to your arrival in Australia. You must have OSHC for the duration of your studies in Australia and you will be requested to show evidence, whenever you need to see a doctor or seek medical treatment in Australia.</li>
      <li class="text-base">A return plane ticket</li>
      <li class="text-base">Money – ensure you have access to funds until you organise a bank account in Australia</li>
      <li class="text-base">Any prescription medication you need</li>
      <li class="text-base">Booking accommodation: make sure you have somewhere to stay after you arrive in Sydney (refer to our accommodation in Sydney Section)</li>
    </ul>`,
  },
  {
    title: "What to Pack",
    description: `<p class="text-lg font-semibold">Pack smartly for your journey:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">Essential items related to your study and personal life</li>
      <li class="text-base">Ensure that your check-in and cabin baggage does not exceed your airline’s maximum kilogram limit</li>
      <li class="text-base">Keep your passport and valuables with you in your cabin baggage at all times</li>
    </ul>`,
  },
  {
    title: "Electronics",
    description: `<p class="text-lg font-semibold">Bring your essential electronics:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">Mobile (cell) phone</li>
      <li class="text-base">Headphones</li>
      <li class="text-base">Laptop</li>
      <li class="text-base">Tablet</li>
      <li class="text-base">Power adaptor (refer to electricity and adaptors below)</li>
    </ul>`,
  },
  {
    title: "Personal Items",
    description: `<p class="text-lg font-semibold">Personal items to make you feel at home:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">Clothes applicable to Sydney’s climate for attending campus and casual wear</li>
      <li class="text-base">Clothes applicable for a job interview if you are seeking work</li>
      <li class="text-base">Swimwear / sportswear (optional)</li>
      <li class="text-base">Shoes (dress and casual)</li>
      <li class="text-base">Bedlinen and bath towels</li>
      <li class="text-base">Blanket (for bedlinen)</li>
      <li class="text-base">Toiletries / other personal grooming</li>
      <li class="text-base">Backpack (to take to class and for personal use)</li>
    </ul>`,
  },
  {
    title: "Kitchen Items",
    description: `<p class="text-lg font-semibold">Consider bringing these kitchen items:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">You may wish to bring crockery (a plate, bowl and cup) and cutlery with you if this is not provided at your accommodation</li>
    </ul>`,
  },
  {
    title: "Australian and Sydney Time Zones and Daylight Saving",
    description: `<p class="text-lg font-semibold">Understand the time zones and daylight saving in Australia:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">Australia has different time zones due to its size</li>
      <li class="text-base">The New South Wales (NSW) time zone is AEDT from October to end of March (Daylight saving) and AEST from April to September</li>
      <li class="text-base">The time difference in NSW can be anywhere between two (2) to 17 hours, depending on your location origin and if Daylight Saving is observed in either location</li>
      <li class="text-base">An <a href="https://time.is/compare" target="_blank"> online time converter</a> can easily calculate the time difference for you</li>
    </ul>`,
  },
  {
    title: "The Australian Academic Year",
    description: `<p class="text-lg font-semibold">The academic year in Australia:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">The academic year for all levels of education in Australia commences in February or March and ends in November</li>
      <li class="text-base">CIHE’s academic dates are available in the Academic Calendar</li>
    </ul>`,
  },
  {
    title: "Calling Australia (Telephone)",
    description: `<p class="text-lg font-semibold">How to call Australia:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">Dial 0011 (International Dialling Code) and 61 (Australia) and then 2 (state of NSW) and then the eight-digit phone number</li>
    </ul>`,
  },
  {
    title: "Accommodation in Sydney",
    description: `<p class="text-lg font-semibold">Explore various accommodation options in Sydney:</p>
    <ul class="list-disc ml-5">
      <li class="text-base"><span class="font-bold">Managed Student Accommodation </span>- <a class="text-blue-500 hover:underline" href="https://npas.org.au/accredited-properties/" target="_blank">NPAS Accredited Properties</a></li>
      <li class="text-base"> <span class="font-bold">Homestay (live with an Australian family)</span>
        <ul class="list-disc ml-7">
          <li class="text-base"><a href="https://www.globalexperience.com.au/" target="_blank">Global Experience</a></li>
          <li class="text-base"><a href="https://www.homestay-australia.com/" target="_blank">Homestay Australia</a></li>
          <li class="text-base"><a href="https://www.homestaynetwork.com.au/" target="_blank">Homestay Network</a></li>
          <li class="text-base"><a href="https://www.melbournehomestay.org/" target="_blank">International Homestay Agency (Melbourne only)</a></li>
          <li class="text-base"><a href="http://www.student-accommodation.com.au/" target="_blank">Student Accommodation Services</a></li>
          <li class="text-base"><a href="https://www.studyvision.com.au/" target="_blank">Study Vision</a></li>
        </ul>
      </li>
      <li class="text-base"> <span class="font-bold">Share accommodation </span>
        <ul class="list-disc ml-7">
          <li class="text-base"><a href="https://www.flatmatefinders.com.au/" target="_blank">Flatmate Finders or Flatmates.com.au</a></li>
        </ul>
      </li>
      <li class="text-base">Whatever type of accommodation you choose, your residence must be close to public transport so that you can commute to CIHE’s campus and other places you need to go</li>
      <li class="text-base">Like all cities, rents vary by area and rentals in Sydney’s inner city and beachside suburbs are more expensive than suburbs located further out from the city centre</li>
    </ul>
    <p class="text-base">Note that Churchill Institute of Higher Education does not have a formal agreement with any of the above-listed managed accommodation or homestay providers, which are also listed on the Australian government’s <a href="https://www.studyaustralia.gov.au/en/life-in-australia/accommodation.html#ref0" target="_blank">Study Australia</a> website. Churchill Institute of Higher Education does not accept any liability or responsibility, in the unlikely event a student has a poor experience or dispute with any of these accommodation providers.</p>`,
  },
  {
    title: "Airport Arrival in Australia – What to Expect",
    description: `<p class="text-lg font-semibold">What to expect when you arrive at Sydney Airport:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">All international flights to Sydney arrive at <a href="https://www.sydneyairport.com.au/" target="_blank">Sydney Kingsford Smith International (Sydney) Airport</a>, which is approximately 8 kilometres from the city centre</li>
      <li class="text-base">Upon arrival at the airport, you will be required to:
        <ul class="list-disc ml-7">
          <li class="text-base">Clear the Australian Customs and Border Protection Service checkpoint</li>
          <li class="text-base">Clear quarantine and biosecurity</li>
          <li class="text-base">Collect your luggage from the luggage collection area (down the stairs behind the customs area)</li>
        </ul>
      </li>
      <li class="text-base">Note Australia has extremely strict quarantine regulations and you must declare if you have certain items with you by completing an <a href="https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" target="_blank"> Incoming Passenger Declaration Card</a> that will be issued to you on your flight prior to landing in Australia. Refer to the <a class="text-blue-500 hover:underline" href="https://www.abf.gov.au/entering-and-leaving-australia/can-you-bring-it-in" target="_blank">Australian Border Force website</a> for more details.</li>
    </ul>
    <p class="text-base">Once you have cleared customs and quarantine, the fastest and cheapest way to exit the airport is by train from the “International Airport” station, which is underneath the airport terminal. This station has a staffed ticket booth and machines from which you can purchase an adult <a href="https://transportnsw.info/tickets-opal/opal/opal-card-types" target="_blank"> Opal Card </a> that is required to travel on trains, buses, ferries and the light rail in Sydney.</p>
    <p class="text-base">Trains from the International Airport station go to:
      <ul class="list-disc ml-7">
        <li class="text-base">Central Station (duration is 15 mins) where you can change to other train lines (fare is approx. $18)</li>
        <li class="text-base">CIHE’s campus in Ultimo is approximately five minutes’ walk from Central station!</li>
      </ul>
    </p>
    <p>Timetables any more information about the airport train service is available from the <a href="https://transportnsw.info/trip#/trip" target="_blank"> NSW Government Transport: Trip Planner</a> website.</p>
    <p class="text-base">There is also a large taxi rank at the International Airport and various bus services. Please check the <a class="text-blue-500 hover:underline" href="https://www.sydneyairport.com.au/parking-and-transport/arriving/international" target="_blank">Sydney Airport website</a> for more information about transport options to and from the airport. Note taxi drivers do not take cash, and you will need to pay the fare on the taxi meter by credit or debit card.</p>`,
  },
  {
    title: "Cost of Living",
    description: `<p class="text-lg font-semibold">The cost of living in Australia is typical of a highly developed country.</p>
    <ul class="list-disc ml-5">
      <li class="text-base">Study Australia has provided a <a class="text-blue-500 hover:underline" href="https://costofliving.studyaustralia.gov.au/" target="_blank">cost-of-living calculator</a>, which provides an estimate of weekly costs to live in Australia (Sydney)</li>
      <li class="text-base">The above cost of living estimate does not include study-related expenses</li>
      <li class="text-base">Refer to CIHE’s Fees schedule for study-related tuition and other fees</li>
      <li class="text-base"><a class="text-blue-500 hover:underline" href="https://www.numbeo.com/cost-of-living/compare_countries.jsp" target="_blank">Numbeo</a> provides a comparison of the indicative costs of common everyday items in Australia and other countries</li>
    </ul>`,
  },
  {
    title: "Australian Culture and Customs",
    description: `<p class="text-lg font-semibold"><a href="https://culturalatlas.sbs.com.au/australian-culture/australian-culture-core-concepts" target="_blank">Australian culture</a> is defined by the principles of:</p>
    <ul class="list-disc ml-5">
      <li class="text-base">Mateship</li>
      <li class="text-base">Egalitarianism</li>
      <li class="text-base">Authenticity</li>
      <li class="text-base">Optimism</li>
      <li class="text-base">Humility</li>
      <li class="text-base">Informality</li>
      <li class="text-base">Easy-going</li>
      <li class="text-base">Common sense</li>
      <li class="text-base">Humour</li>
      <li class="text-base">Good manners (always say please and thank you)</li>
    </ul>

    <ul class="list-disc ml-5">
      <li class="text-base">Many international students desire to make friends with Australians to enrich their experience of studying here.</li>
      <li class="text-base">Having some knowledge and appreciation of Australian culture and values will significantly help you make friends  with Australians, who will a generally  be very appreciative of your knowledge and interest in their country; and in return, will likely be curious about your culture and country. </li>
      <li class="text-base">Having Australian friends improves your English  very quickly.</li>
      <li class="text-base">Australian also have local knowledge which is very useful for a new arrival who may  be confused or have questions about living in Australia.</li>
    </ul>`,
  },
  {
    title: "Australian Money and Paying in Australia",
    description: `<p class="text-lg font-semibold">Understand the Australian currency and payment methods:</p>
  <ul class="list-disc ml-5">
    <li class="text-base">The Australian dollar (AUD) is Australia’s currency and payment in other currencies is not accepted anywhere</li>
    <li class="text-base">The AUD is issued in denominations of $5, $10, $20, $50 and $100 as polymer (plastic) notes</li>
    <li class="text-base">Coins are issued in denominations of $2, $1, 50c, 20c, 10c and 5c</li>
    <li class="text-base">Advertised prices are rounded to the nearest five cents at payment</li>
    <li class="text-base">If you arrive with foreign currency you will need to exchange it for AUD at a Currency Exchange</li>
    <p>Australia has become a mostly cashless society. Cash is never used to pay for large purchases (such as education fees, rent deposits, utility bills etc). An online funds transfer using BPay or deposit into another bank account is standard to pay merchants</p>
    <p>Australians rarely use cash to pay for purchases in shops, hospitality venues or to ride taxis. Payment is typically made by either EFTPOS by swiping your bank card and entering your PIN number; or using “Tap and Go” by tapping your credit or debit card’s microchip on the EFTPOS machine, which instantly deducts the price from your account</p>
    <p>Automatic Teller Machines (ATMs) are available in airports, shopping centres and other public places, although ATMs are reducing in number as most people do not pay with cash</p>
  </ul>`,
  },
  {
    title: "Public Transport in Sydney",
    description: `
  <ul class="list-disc ml-5">
    <li class="text-base">Sydney’s public transport system comprises:
      <ul class="list-disc ml-7">
        <li class="text-base">Sydney Trains</li>
        <li class="text-base">Sydney Buses</li>
        <li class="text-base">Sydney Ferries</li>
        <li class="text-base">Sydney Light rail (Trams)</li>
      </ul>
    </li>
    <li class="text-base">The network is easy to use. All you need to do is:
      <ul class="list-disc ml-7">
        <li class="text-base">Buy an adult <a href="https://transportnsw.info/tickets-opal/opal#/login" target="_blank">Opal Card</a> and put credit on it (minimum $20) that can be used on all the above modes of transport</li>
        <li class="text-base">You tap on and then tap off – the fare is deducted from your card and the balance is shown at the turnstile or “Tap On or Off” Point</li>
        <li class="text-base">Plan your trip using the <a class="text-blue-500 hover:underline" href="https://www.transport.nsw.gov.au/" target="_blank">NSW Government Trip Planner website</a> that displays the fare and route, with stops and stations on an interactive map</li>
      </ul>
    </li>
  </ul>
<div class="mb-4">
          <img class="relative left-0 ml-0 w-64 h-auto rounded-lg shadow-md" src="/assets/opal-card.png" alt="Opal Card for Sydney Public Transport" />
          <p class="text-sm text-gray-600 italic mt-2">Image credit: <a href="https://www.experiencesydneyaustralia.com/visitor-information/transport/opal-electronic-ticketing/" class="text-blue-600 hover:underline">Experience Sydney Australia</a></p>
        </div>
  `,
  },
  {
    title: "Mobile (Cell) Phone Options",
    description: `<p class = "text-lg font-semibold"> If you are looking to get a SIM card in Australia, there are several options available. </p>
  <ul class="list-disc ml-5">
    <li class="text-base">You can purchase a prepaid SIM card from major providers like Optus, Vodafone, and Telstra or from smaller providers</li>
    <li class="text-base">You can find these SIM cards at convenience stores, petrol stations, or at the airport upon arrival</li>
    <li class="text-base">Prepaid SIM cards for travellers visiting Australia typically cost between $10 and $20 AUD, depending on the amount of data, calls, and validity included</li>
    <li class="text-base">These SIM cards can be topped up and expect to spend up $10 - $30 per month on prepaid plans for more data/calls, or for staying longer in Australia</li>
    <li class="text-base">If you are looking for a long-term connectivity option, you can sign up for Australia Post Mobile which offers no lock-in contracts and is powered by the Optus 4G Plus Network</li>
    <li class="text-base">They offer a range of SIM-only plans or an International Roaming plan to keep you connected wherever you are</li>
  </ul>`,
  },
  {
    title: "Internet Connections",
    description: `<p class = "text-lg font-semibold" > You will need ongoing access to the Internet whilst studying at SITU as your administration will be completed online and you all learning materials for each subject and other documentation will only be provided electronically in the Moodle learning management system.</p>
  <ul class="list-disc ml-5">
    <li class="text-base">Churchill Institute of Higher Education provides free Wi-Fi and internet connectivity on the Churchill Institute of Higher Education campus to all enrolled students</li>
    <li class="text-base">You are expected to have access to the internet when you are not attending the Churchill Institute of Higher Education campus</li>
    <li class="text-base">Internet access can be obtained by buying or leasing a modem and an internet package from a service provider</li>
    <li class="text-base">You can choose from different technologies such as cable, DSL, ISDN or satellite internet</li>
    <li class="text-base">If you live in managed student accommodation or a Homestay, your accommodation provider may include Wi-Fi access in your weekly rent (this differs amongst providers so please check)</li>
    <li class="text-base"><a class="text-blue-500 hover:underline" href="https://www.finder.com.au/broadband-plans/providers" target="_blank">Finder.com</a> provides a comparison of the top 10 internet providers in Australia</li>
  </ul>`,
  },
  {
    title: "Australian Power and Adaptor Requirements",
    description: `<p class = "text-lg font-semibold">In Australia </p>
  <ul class="list-disc ml-5">
    <li class="text-base">The power plug sockets are of Type I</li>
    <li class="text-base">The standard voltage is 230 Volts</li>
    <li class="text-base">Frequency is 50 Hz</li>
    <li class="text-base">It is recommended you bring:
      <ul class="list-disc ml-7">
        <li class="text-base">Two adaptor plugs to recharge and plug in your appliances not bought in Australia. Two adaptors are recommended to charge 2 appliances (i.e., mobile phone and laptop) simultaneously</li>
        <li class="text-base">The adaptor plug must be for Australia (Type I) and the plug type used in your home country</li>
    <li class="text-base">More information is available at <a class="text-blue-500 hover:underline" href="https://www.power-plugs-sockets.com/australia/" target="_blank">Power, Plugs and Sockets</a></li>
        </ul>
    </li>
  </ul>`,
  },
  {
    title: "Banking in Australia",
    description: `
    <p>You will need to open an Australian bank account shortly after arriving in Australia as foreign bankcards may not always be accepted and may be problematic for electronically depositing payment earned from any paid employment you may secure</p>
    <p>Australia’s banks include The Commonwealth Bank of Australia (CBA), Westpac, the National Australia Bank (NAB) and the Australia and New Zealand Banking Group (ANZ). There are also various other smaller banks. Refer to <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Banking_in_Australia" target="_blank">Banking in Australia</a> for further details</p>
  `,
  },
  {
    title: "Working in Australia",
    description: `
  <ul class="list-disc ml-5">
    <li class="text-base">A Student Visa (500) permits an international student to work up to <span class="font-bold">48 hours per fortnight</span> and unlimited hours in recess periods</li>
    <li class="text-base font-bold">As your Student Visa was issued for you to complete a course study, your priority is study so that you can complete your course within the minimum timeframe</li>
    <li class="text-base"><a href="https://www.fairwork.gov.au/" target="_blank">The Fair Work Ombudsman</a> is an independent authority that promotes and monitors compliance with workplace laws; enquires into and investigates breaches of the Fair Work Act; and takes appropriate enforcement action</li>
    <li class="text-base">You have the right to contact the Fair Work Ombudsman if you believe your employer is breaching workplace laws</li>
    <p>Most students are employed in casual jobs (you are paid hourly for an agreed number of hours that comply with your visa conditions). You will need:</p>
      <ul class="list-disc ml-7">
        <li class="text-base">An up-to-date Resume</li>
        <li class="text-base">To search for jobs online –
          <ul class="list-disc ml-9">
            <li class="text-base"><a class="text-blue-500 hover:underline" href="https://seek.com.au/" target="_blank">https://seek.com.au</a></li>
            <li class="text-base"><a class="text-blue-500 hover:underline" href="https://www.studentjobboard.com.au/" target="_blank">https://www.studentjobboard.com.au/</a></li>
          </ul>
        </li>
        <li class="text-base">To apply online for an <a href="https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application" target="_blank"> Australian TFN (Tax File Number) for foreign passport holders from the Australian Taxation Office</a></li>
      </ul>
    </li>
    <p>If you get a casual job, the employer must:</p>
      <ul class="list-disc ml-7">
        <li class="text-base">Issue you an Offer of Employment that outlines the pay rate, the terms and conditions of employment, the hours you are required to work (that must comply with your visa conditions) which must, as a minimum, comply with the National Employment Standards (NES)</li>
        <li class="text-base">Note the minimum hourly pay rate is $23.33 per hour</li>
      </ul>
    <p>You will be required to:</p>
      <ul class="list-disc ml-7">
        <li class="text-base">Sign the Offer of Employment</li>
        <li class="text-base">Provide your TFN and complete a Taxation Declaration Form (provided by the employer)</li>
        <li class="text-base">Provide proof of your identification (ID) – a copy of the data page of your passport</li>
        <li class="text-base">Provide evidence of your student visa start and end dates (from <a href="https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online/visa-holders" target="_blank">VEVO</a>)</li>
        <li class="text-base">Provide your bank account details (your pay will be electronically deposited into your account)</li>
        <li class="text-base">Other information that may be requested from the employer relevant to the job</li>
      </ul>
  </ul>`,
  },
  {
    title: "Emergencies, Health Care and Student Support",
    description: `
  <ul class="list-disc ml-5">
    <li class="text-base"><span class="font-bold">Emergency Contacts:</span>
      <ul class="list-disc ml-7">
        <li class="text-base"><span class="font-bold">Dial 000 (free call) in an emergency</span> (police, ambulance or fire brigade)</li>
      </ul>
    </li>
    <li class="text-base"><span class="font-bold">Health Care:</span>
      <ul class="list-disc ml-7">
        <li class="text-base">All international students must have <span class="font-bold">Overseas Student Health Cover (OSHC)</span> for the entire duration of their studies in Australia</li>
        <li class="text-base">The <a class="text-blue-500 hover:underline" href="https://oshaustralia.com.au/" target="_blank">Osh Australia website</a> provides more information and compares various health insurance providers</li>
        <li class="text-base">Emergency medical care is available from the Emergency Department at all <a href="https://www.healthdirect.gov.au/australian-health-services/search/sydney-2000-nsw/hospitals/1223151000168101" tagret="_blank">Sydney hospitals</a></li>
        <li class="text-base">Medical Centres are located in almost every suburb in Sydney if you need to see a doctor</li>
        <li class="text-base">Doctors working in medical centres are usually called GPs (General Practitioners)</li>
        <li class="text-base"><a href="https://doctors.com.au/find/general-practitioner/nsw/sydney-nsw-2000/" target="_blank">A list of GPs / Medical Centres </a>in Sydney is available online</li>
      </ul>
    </li>
    <li class="text-base"></span>Student Support and Safety:</span>
      <ul class="list-disc ml-7">
        <li class="text-base">Refer to the <a class="text-blue-500 hover:underline" href="https://churchill.nsw.edu.au/emergency-contact" target="_blank">Student Support and Safety page</a> for further contacts</li>
      </ul>
    </li>
  </ul>`,
  },
  {
    title: "No Smoking Rules",
    description: `
    <p>Smoking is considered an anti-social habit in Australia due to the risk it poses to others through passive smoking</p>
    <p>Smoking is banned in all enclosed spaces (including CIHE’s campus), common areas of residential buildings, sporting venues, public transport (including bus stops, ferry terminals, and railway platforms) in the state of New South Wales. Smoking is also banned in some other open-air spaces. Violations incur the payment of a fine. Refer to the <a class="text-blue-500 hover:underline" href="https://www.health.nsw.gov.au/tobacco/Pages/smoke-free-laws.aspx" target="_blank">NSW government no smoke rules</a> for details</p>
  <ul class="list-disc ml-5">
  
    <li class="text-base">Cigarettes cost approx. $35-$60 per packet in Australia and prices increase annually</li>
    <li class="text-base">If you smoke now, you should seriously consider quitting after arriving in Australia. You’ll see and feel a significant improvement to your health; and you’ll be pleasantly surprised how much money you can save each week</li>
    <li class="text-base">The <a class="text-blue-500 hover:underline" href="https://www.cancer.nsw.gov.au/prevention-and-screening/preventing-cancer/quit-smoking/nsw-quitline" target="_blank">NSW Government Quit Line</a> offers free counselling and support to people who wish to quit smoking</li>
  </ul>`,
  },
  {
    title: "Metrics Used in Australia",
    description: `<p class="text-lg">Australia uses the Metric System for measurements, which may differ from your home county. Basic metrics are:</p>
  <ul class="list-disc ml-5">
    <li class="text-base">Distance: kilometres and metres</li>
    <li class="text-base">Measurements: centimetres and millimetres</li>
    <li class="text-base">Fluids: Litres or millilitres</li>
    <li class="text-base">Temperature: Celsius</li>
  </ul>
    <p>Refer to the metric conversion tables for further information</p>
  
  `,
  },
  {
    title: "Traffic and People Direction",
    description: `
  <ul class="list-disc ml-5">
    <li class="text-base">All vehicles drive on <span class="font-bold">the left side</span> of the road</li>
    <li class="text-base">If you are sharing a path, staircase, escalator etc, always walk or stand to your <span class="font-bold">left</span></li>
  </ul>`,
  },
  {
    title: "Retail and Hospitality Trading Hours in Sydney",
    description: `
  <ul class="list-disc ml-5">
    <li class="text-base">Shops are generally open 7 days a week in Sydney between 8.30am to 6.30pm</li>
    <li class="text-base">Larger supermarkets open from 8.30-12 midnight in some areas</li>
    <li class="text-base">Some smaller businesses may not open on weekends or Sundays</li>
    <li class="text-base">Thursday night is late night shopping, with most shops open until 9pm</li>
    <li class="text-base">Shops are closed on some public holidays, such as Good Friday, Christmas Day and may trade for half a day or normal hours on other public holidays</li>
    <li class="text-base">Some fast-food outlets operate 24 hours every day</li>
    <li class="text-base">Food outlets open at variable hours, some only during the day, some only at night</li>
    <li class="text-base">Pubs (bars) are open every day from 10am to 10pm and until later on the weekends. Trading hours vary on public holidays</li>
  </ul>`,
  },
  {
    title: "Public Holidays in Australia and New South Wales",
    description: `<p class="text-lg font-semibold">Public Holidays</p >
  <ul class="list-disc ml-5">
    <li class="text-base">Australia’s National Public Holidays are observed across all states and territories</li>
    <li class="text-base">NSW has public holidays in addition to Australia’s national public holidays</li>
    <li class="text-base">CIHE’s campus will not open on public holidays, although all online facilities will be available 24/7</li>
    <li class="text-base">The <a class="text-blue-500 hover:underline" href="https://www.nsw.gov.au/about-nsw/public-holidays#nsw-public-holidays-2022-2024" target="_blank">NSW government website</a> maintains public holiday dates and information (national and state dates)</li>
  </ul>`,
  },
  {
    title: "Places of Worship in Sydney",
    description: `
  <ul class="list-disc ml-5">
    <li class="text-base">Freedom of religion is guaranteed by Australia’s Constitution (1901)</li>
    <li class="text-base">Due to the multicultural population of Sydney, there are many places of worship for various faiths that include, but are not limited to:
      <ul class="list-disc ml-7">
        <li class="text-base">Christianity</li>
        <li class="text-base">Judaism</li>
        <li class="text-base">Islam</li>
        <li class="text-base">Buddhism</li>
        <li class="text-base">Hinduism</li>
        <li class="text-base">Taoism</li>
      </ul>
    </li>
  </ul>
    <p>The <a class="text-blue-500 hover:underline" href="https://dictionaryofsydney.org/role/place_of_worship" target="_blank">State Library of NSW</a> provides a comprehensive listing of religious organisations and places of worship across metropolitan Sydney</p>
  `,
  },
];
