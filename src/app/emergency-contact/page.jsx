const page = () => {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <section className="fade-in">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Emergency Services</h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Churchill Institute of Higher Education Students can call the services below in the case of an emergency 24 Hours, 7 Days a week.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="service-card bg-gray-50 rounded-lg shadow-lg p-6">
                        <div class=" aspect-square rounded-full bg-primary-orange/25 grid place-items-center w-[70px] h-[70px] mb-5"><i class="fi fi-rr-light-emergency-on w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i></div>
                        <h3 className="text-xl font-semibold text-orange-600 mb-4">24 Hour Emergency Contacts</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li>NSW Emergency (Police/Medical/Fire) Dial: <a href="tel:000" className="text-orange-500 hover:underline font-semibold">000</a></li>
                            <li>Victims Access Line: <a href="tel:1800633063" className="text-orange-500 hover:underline font-semibold">1800 633 063</a></li>
                            <li>Rape and Crisis Centre: <a href="tel:1800424017" className="text-orange-500 hover:underline font-semibold">1800 424 017</a></li>
                            <li>Crime Stoppers: <a href="tel:1800333000" className="text-orange-500 hover:underline font-semibold">1800 333 000</a></li>
                        </ul>
                    </div>

                    <div className="service-card bg-gray-50 rounded-lg shadow-lg p-6">
                        <div class=" aspect-square rounded-full bg-primary-orange/25 grid place-items-center w-[70px] h-[70px] mb-5"><i class="fi fi-rr-brain w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i></div>

                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Mental Health Services (Free)</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li>NSW Mental Health Line: <a href="tel:1800011511" className="text-orange-500 hover:underline font-semibold">1800 011 511</a></li>
                            <li>Lifeline: <a href="tel:131114" className="text-orange-500 hover:underline font-semibold">131 114</a></li>
                        </ul>
                    </div>

                    <div className="service-card bg-gray-50 rounded-lg shadow-lg p-6">
                        <div class=" aspect-square rounded-full bg-primary-orange/25 grid place-items-center w-[70px] h-[70px] mb-5"><i class="fi fi-rr-syringe w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i></div>

                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Drug and Alcohol Counselling</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li>Alcoholics Anonymous NSW (24 hours): <a href="tel:0297991199" className="text-orange-500 hover:underline font-semibold">02 9799 1199</a></li>
                            <li>Family Drug Support: <a href="tel:0247829222" className="text-orange-500 hover:underline font-semibold">02 4782 9222</a> or <a href="tel:1300368186" className="text-orange-500 hover:underline font-semibold">1300 368 186</a></li>
                        </ul>
                    </div>

                    <div className="service-card bg-gray-50 rounded-lg shadow-lg p-6">
                        <div class=" aspect-square rounded-full bg-primary-orange/25 grid place-items-center w-[70px] h-[70px] mb-5"><i class="fi fi-rr-street-view w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i></div>

                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Victims of Crime Support</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li>24-hour information, support and referrals: <a href="tel:0293743000" className="text-orange-500 hover:underline font-semibold">02 9374 3000</a></li>
                            <li>Interpreting Services: <a href="tel:131450" className="text-orange-500 hover:underline font-semibold">131 450</a></li>
                        </ul>
                    </div>

                    <div className="service-card bg-gray-50 rounded-lg shadow-lg p-6">
                        <div class=" aspect-square rounded-full bg-primary-orange/25 grid place-items-center w-[70px] h-[70px] mb-5"><i class="fi fi-rr-sad-tear w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i></div>

                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Rape & Domestic Violence</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li>NSW Rape Crisis: <a href="tel:1800424017" className="text-orange-500 hover:underline font-semibold">1800 424 017</a></li>
                            <li>Sexual Assault Counselling Australia: <a href="tel:1800211028" className="text-orange-500 hover:underline font-semibold">1800 211 028</a></li>
                            <li>Domestic Violence Impact Line: <a href="tel:1800943539" className="text-orange-500 hover:underline font-semibold">1800 943 539</a></li>
                        </ul>
                    </div>

                    <div className="service-card bg-gray-50 rounded-lg shadow-lg p-6">
                        <div class=" aspect-square rounded-full bg-primary-orange/25 grid place-items-center w-[70px] h-[70px] mb-5"><i class="fi fi-rr-student w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i></div>

                        <h3 className="text-xl font-semibold text-orange-600 mb-4">NSW International Student Legal Service [Free]</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li><a href="https://rlc.org.au/do-you-need-legal-help" target="_blank" className="text-orange-500 hover:underline font-semibold">https://rlc.org.au/do-you-need-legal-help</a></li>
                        </ul>
                    </div>

                    <div className="service-card bg-gray-50 rounded-lg shadow-lg p-6">
                        <div class=" aspect-square rounded-full bg-primary-orange/25 grid place-items-center w-[70px] h-[70px] mb-5"><i class="fi fi-rr-legal w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i></div>

                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Legal Aid</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li>LawAccess NSW: <a href="tel:1300888529" className="text-orange-500 hover:underline font-semibold">1300 888 529</a></li>
                        </ul>
                    </div>

                    <div className="service-card bg-gray-50 rounded-lg shadow-lg p-6">
                        <div class=" aspect-square rounded-full bg-primary-orange/25 grid place-items-center w-[70px] h-[70px] mb-5"><i class="fi fi-rr-praying-hands w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i></div>

                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Cultural Support Services</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li>Anti-Discrimination NSW: <a href="tel:1800670812" className="text-orange-500 hover:underline font-semibold">1800 670 812</a></li>
                        </ul>
                    </div>

                    <div className="service-card bg-gray-50 rounded-lg shadow-lg p-6">
                        <div class=" aspect-square rounded-full bg-primary-orange/25 grid place-items-center w-[70px] h-[70px] mb-5"><i class="fi fi-rr-house-user w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i></div>

                        <h3 className="text-xl font-semibold text-orange-600 mb-4">Aboriginal Legal Service</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li>For police and court matters: <a href="tel:1800765767" className="text-orange-500 hover:underline font-semibold">1800 765 767</a></li>
                            <li>For care, protection and family matters: <a href="tel:1800733233" className="text-orange-500 hover:underline font-semibold">1800 733 233</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 bg-orange-50 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Immediate Help?</h3>
                    <p className="text-gray-600 mb-4">Don’t hesitate to reach out to these services for support, 24/7.</p>
                    <a href="tel:000" className="inline-block bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors">Call Emergency: 000</a>
                </div>
            </section>
        </main>
    );
};

export default page;
