export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 text-purple-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Contact Us</h1>
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl shadow-lg p-12 border border-purple-500/30 backdrop-blur-sm">
          <p className="text-xl text-purple-200 mb-8">We'd love to hear from you!</p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-purple-100 mb-1">Email</h3>
              <p className="text-purple-300">support@altfit.vercel.app</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-100 mb-1">Customer Support</h3>
              <p className="text-purple-300">Available 24/7 for our premium members.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-100 mb-1">Social Media</h3>
              <p className="text-purple-300">Follow us on Instagram @alt_fit_ai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
