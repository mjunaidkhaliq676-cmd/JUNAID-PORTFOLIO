import React from 'react'

import profile from '../public/profile.jpg'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="max-w-4xl mx-auto p-6 flex items-center gap-6">
        <img src={profile} alt="M. Junaid Khaliq" className="w-28 h-28 rounded-full object-cover shadow-lg"/>
        <div>
          <h1 className="text-3xl font-extrabold">M. Junaid Khaliq</h1>
          <p className="mt-1 text-blue-600 font-semibold">E-commerce Growth & Digital Marketing Expert</p>
          <p className="mt-3 text-sm">Helping brands scale on Amazon, Shopify and social ads with data-driven product launches and PPC strategies.</p>
          <div className="mt-4 flex gap-3">
            <a href="mailto:mjunaidkhaliq676@gmail.com" className="px-4 py-2 bg-blue-600 text-white rounded-md">Email Me</a>
            <a href="https://wa.me/923013110071" className="px-4 py-2 border rounded-md">WhatsApp</a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>I’m M. Junaid Khaliq — an eCommerce & digital marketing specialist with a Master’s in Mathematics. I combine 5+ years of eCommerce experience (Amazon FBA, Shopify) with hands-on PPC and paid social expertise. My 8 years of teaching background shaped a data-first approach to campaign optimization and testing.</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <li><strong>Location:</strong> Bahawalpur, Pakistan</li>
            <li><strong>Experience:</strong> Amazon & Shopify management, PPC (5+ years)</li>
            <li><strong>Education:</strong> M.Sc. Mathematics</li>
            <li><strong>Languages:</strong> English, Urdu</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Services I Offer</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">E-commerce Strategy & Store Setup</h3>
              <p className="text-sm mt-2">Shopify store creation, listings, payment & shipping setup, conversion-first design.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Amazon FBA & Marketplace Management</h3>
              <p className="text-sm mt-2">Product research, listing optimization, launch strategy and PPC management.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Paid Ads & Performance Marketing</h3>
              <p className="text-sm mt-2">Google Ads, Meta/Facebook Ads, YouTube & LinkedIn campaigns with ROAS focus.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">PPC & CRO Optimization</h3>
              <p className="text-sm mt-2">Amazon PPC, Google Shopping, landing page tests and conversion lifts.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">TikTok Shop Management</h3>
              <p className="text-sm mt-2">Short-form content strategy, influencer co-ordination and shop integrations.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Analytics & Reporting</h3>
              <p className="text-sm mt-2">Monthly dashboards, actionable recommendations and growth plans.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Selected Projects & Results</h2>
          <div className="space-y-4">
            <article className="p-4 border rounded-lg">
              <h3 className="font-semibold">Shopify Launch & Scale</h3>
              <p className="text-sm mt-2">Full Shopify setup and launch funnel — improved conversion through CRO and targeted ad funnels.</p>
            </article>
            <article className="p-4 border rounded-lg">
              <h3 className="font-semibold">Amazon Product Launch & PPC</h3>
              <p className="text-sm mt-2">Keyword-led listing optimization and strategic PPC launch — secured strong search visibility.</p>
            </article>
            <article className="p-4 border rounded-lg">
              <h3 className="font-semibold">Paid Social Campaign</h3>
              <p className="text-sm mt-2">Creative refresh and audience segmentation — improved engagement and lowered CPA.</p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <div className="space-y-3">
            <blockquote className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
              “Delivered a clear growth plan and executed it—responsive and results-driven.” — E-commerce Brand Owner
            </blockquote>
            <blockquote className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
              “Strong analytical approach; our launch performed better than expected.” — Marketplace Seller
            </blockquote>
            <blockquote className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
              “Professional communication and consistent reporting—highly recommended.” — Digital Agency Manager
            </blockquote>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="mb-2">I’m available for freelance and consultancy projects.</p>
          <p className="mb-4">Email: <a className="text-blue-600" href="mailto:mjunaidkhaliq676@gmail.com">mjunaidkhaliq676@gmail.com</a> · WhatsApp: <a className="text-blue-600" href="https://wa.me/923013110071">+92 301 3110071</a></p>
          <div className="flex gap-3">
            <a href="mailto:mjunaidkhaliq676@gmail.com" className="px-4 py-2 bg-blue-600 text-white rounded-md">Send Email</a>
            <a href="https://wa.me/923013110071" className="px-4 py-2 border rounded-md">Message on WhatsApp</a>
            <a href="https://www.linkedin.com/in/m-junaid-khaliq-b7706a249" className="px-4 py-2 border rounded-md">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="mt-12 py-6 border-t">
        <div className="max-w-4xl mx-auto text-sm text-center">© 2025 M. Junaid Khaliq — E-commerce Growth & Digital Marketing Expert</div>
      </footer>
    </div>
  )
}
