import React from "react";

const page = () => {
  return <>
    <div className="font-sans leading-relaxed max-w-3xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookie Policy</h2>
      <p className="mb-4"><strong>Effective Date:</strong> 05/05/2025</p>
      <p className="mb-4">
        This Cookie Policy explains how Churchill Institute of Higher Education ("we," "us," or "our") uses cookies and similar technologies on our website{' '}
        <a href="https://churchill.nsw.edu.au" className="text-blue-600 hover:underline">https://churchill.nsw.edu.au</a> ("Website"). By using our Website, you consent to the use of cookies as described in this policy.
      </p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">1. What Are Cookies?</h3>
      <p className="mb-4">Cookies are small data files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences, login details, and enhance overall user experience.</p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">2. How We Use Cookies</h3>
      <p className="mb-2">We use cookies to:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Improve the functionality and performance of our Website</li>
        <li>Remember your preferences and login sessions</li>
        <li>Analyse traffic and user behaviour to improve our services</li>
        <li>Enable certain third-party features such as videos, maps, and social media sharing</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">3. Types of Cookies We Use</h3>
      <table className="w-full border-collapse mb-4">
        <tbody>
          <tr>
            <th className="border border-gray-300 p-2 text-left bg-gray-100">Type of Cookie</th>
            <th className="border border-gray-300 p-2 text-left bg-gray-100">Purpose</th>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Essential Cookies</td>
            <td className="border border-gray-300 p-2">Required for the Website to function properly (e.g., session management, login authentication).</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Performance & Analytics Cookies</td>
            <td className="border border-gray-300 p-2">Help us understand how users interact with our Website (e.g., Google Analytics).</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Functionality Cookies</td>
            <td className="border border-gray-300 p-2">Enable the Website to remember user choices such as language or region.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Third-Party Cookies</td>
            <td className="border border-gray-300 p-2">Set by services such as embedded videos, social media platforms, and external tools.</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">4. Managing Cookies</h3>
      <p className="mb-2">You can control or delete cookies through your browser settings. Most browsers allow you to:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>View what cookies are stored</li>
        <li>Block cookies from certain sites</li>
        <li>Delete all cookies when you close your browser</li>
      </ul>
      <p className="mb-4">Please note that disabling cookies may affect the functionality and experience of our Website.</p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">5. Third-Party Services</h3>
      <p className="mb-4">We may use third-party services (e.g., Google, Facebook, YouTube) that place cookies on your device when you access our content through their platforms. We encourage you to review their respective privacy and cookie policies.</p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">6. Changes to This Policy</h3>
      <p className="mb-4">We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our operations. Any updates will be posted on this page with a revised effective date.</p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">7. Contact Us</h3>
      <p className="mb-2">If you have any questions about our Cookie Policy, please contact us at:</p>
      <p className="mb-4">
        <strong>Churchill Institute of Higher Education</strong><br />
        <strong>Email:</strong> <a href="mailto:info@churchill.nsw.edu.au" className="text-blue-600 hover:underline">info@churchill.nsw.edu.au</a><br />
        <strong>Website:</strong> <a href="https://churchill.nsw.edu.au" className="text-blue-600 hover:underline">https://churchill.nsw.edu.au</a>
      </p>
    </div>
  </>;
};

export default page;
