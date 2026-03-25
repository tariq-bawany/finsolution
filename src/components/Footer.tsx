import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">FinEdge<span className="text-accent">.</span></h3>
          <p className="mt-2 text-sm opacity-80">
            Reliable Accounting & Financial Solutions Partner for Businesses.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-2 space-y-1 text-sm opacity-80">
            <li><Link to="/services" className="hover:opacity-100">Bookkeeping & Accounting</Link></li>
            <li><Link to="/services" className="hover:opacity-100">Financial Reporting</Link></li>
            <li><Link to="/services" className="hover:opacity-100">ERP Implementation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-2 space-y-1 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100">About Us</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm opacity-80">info@finedge.com</p>
          <p className="text-sm opacity-80">+1 (555) 000-0000</p>
        </div>
      </div>
      <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} FinEdge. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
