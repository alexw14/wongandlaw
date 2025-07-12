import Link from 'next/link';

const Footer = () => (
  <footer className="bg-[#222] text-gray-200 pt-12 pb-6 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 items-center md:items-start">
      {/* Brand/Logo and Description */}
      <div className="flex-1 text-center md:text-left">
        <Link href="/" className="text-2xl font-bold text-[#FF8426]">
          Wong & Partners, Lawyers, P.C.
        </Link>
        <p className="mt-2 text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
          Dedicated to providing expert legal services in immigration, business, and estate planning.
        </p>
      </div>
      {/* Office Locations */}
      <div className="flex-1 mt-8 md:mt-0 text-center md:text-left">
        <h4 className="font-semibold mb-2 text-white">Los Angeles Office</h4>
        <ul className="space-y-1 text-sm">
          <li>1360 Valley Vista Drive, Suite 136<br />Diamond Bar, CA 91765</li>
          <li>Phone: <a href="tel:6264477788" className="hover:text-[#FF8426]">626-447-7788</a></li>
          <li>Fax: <a href="fax:6264477783" className="hover:text-[#FF8426]">626-447-7783</a></li>
          <li>Email: <a href="mailto:info@wongandlaw.com" className="hover:text-[#FF8426]">info@wongandlaw.com</a></li>
          <li>WeChat: <span className="text-gray-300">Santony168</span></li>
        </ul>
      </div>
      {/* Blog & Legal Buttons */}
      <div className="flex-1 flex flex-col items-center md:items-end mt-8 md:mt-0 space-y-3">
        <Link
          href="/news-blogs"
          className="bg-[#FF8426] hover:bg-[#e6731f] text-white font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200"
        >
          Visit Our Blog
        </Link>
        <div className="flex flex-col items-center md:items-end space-y-2">
          <Link
            href="/terms"
            className="text-xs text-gray-300 hover:text-[#FF8426] underline underline-offset-2"
          >
            Website Terms & Privacy
          </Link>
          <Link
            href="/legal-disclaimer"
            className="text-xs text-gray-300 hover:text-[#FF8426] underline underline-offset-2"
          >
            Legal Disclaimer
          </Link>
        </div>
      </div>
    </div>
    <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Wong & Partners. All rights reserved.
    </div>
  </footer>
);

export default Footer;