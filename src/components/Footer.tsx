import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Karir", href: "#" },
    { name: "Investor Relations", href: "#" },
    { name: "Berita & Artikel", href: "#" },
    { name: "Laporan Tahunan", href: "#" }
  ];

  const products = [
    { name: "Rekening Tabungan", href: "#" },
    { name: "Kartu Kredit", href: "#" },
    { name: "KPR", href: "#" },
    { name: "Kredit Kendaraan", href: "#" },
    { name: "Investasi", href: "#" },
    { name: "Asuransi", href: "#" }
  ];

  const support = [
    { name: "Customer Care", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Lokasi Cabang", href: "#" },
    { name: "Simulator Kredit", href: "#" },
    { name: "Tutorial", href: "#" },
    { name: "Kebijakan Privasi", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Dapatkan Update Terbaru
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Berlangganan newsletter kami untuk mendapatkan informasi produk terbaru, 
              tips finansial, dan penawaran eksklusif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Masukkan email Anda" 
                className="bg-white text-primary border-0"
              />
              <Button variant="secondary" className="shrink-0">
                <Mail className="h-4 w-4 mr-2" />
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-6">
              Global Trust Bank
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Bank digital terdepan yang menghadirkan solusi perbankan modern, 
              aman, dan inovatif untuk masa depan finansial yang lebih baik.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>1500-888 (24/7)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@globaltrustbank.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary-foreground/20 text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Perusahaan</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Produk</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Bantuan</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="opacity-20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © {currentYear} Global Trust Bank. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Keamanan
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;