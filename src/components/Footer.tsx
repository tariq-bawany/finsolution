import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-foreground">
    <div className="container py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">C</span>
            <span className="text-card">AZ<span className="text-primary">HIRA</span></span>
          </div>
          <p className="mt-3 text-sm text-card/60">
            Reliable Accounting & Financial Solutions Partner for Businesses.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-card">Services</h4>
          <ul className="mt-2 space-y-1 text-sm text-card/60">
            <li><Link to="/services" className="hover:text-primary transition-colors">Bookkeeping & Accounting</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Financial Reporting</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Payroll Services</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">ERP Implementation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-card">Company</h4>
          <ul className="mt-2 space-y-1 text-sm text-card/60">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/coming-soon" className="hover:text-primary transition-colors">Coming Soon</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-card">Contact</h4>
          <p className="mt-2 text-sm text-card/60">info@capexlify.com</p>
          <p className="text-sm text-card/60">+1 (555) 000-0000</p>
        </div>
      </div>
      <div className="mt-10 border-t border-card/10 pt-6 text-center text-xs text-card/50">
        © {new Date().getFullYear()} CAPEXLIFY. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
