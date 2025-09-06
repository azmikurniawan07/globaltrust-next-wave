import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Smartphone, 
  PiggyBank, 
  TrendingUp, 
  Shield, 
  Globe,
  ArrowRight
} from "lucide-react";
import servicesImage from "@/assets/banking-services.jpg";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Banking",
      description: "Akses rekening Anda kapan saja, di mana saja dengan aplikasi mobile yang aman dan mudah digunakan.",
      features: ["Transfer instan", "Pembayaran tagihan", "Top up e-wallet"]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Kartu Kredit Premium",
      description: "Nikmati berbagai keuntungan eksklusif dengan kartu kredit yang disesuaikan dengan gaya hidup Anda.",
      features: ["Cashback hingga 5%", "Miles rewards", "Asuransi perjalanan"]
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Tabungan & Deposito",
      description: "Kembangkan dana Anda dengan produk tabungan dan deposito yang memberikan bunga kompetitif.",
      features: ["Bunga hingga 6% p.a", "Tanpa biaya admin", "Flexible tenor"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Investasi Digital",
      description: "Mulai investasi dengan mudah melalui platform digital kami yang terintegrasi dan user-friendly.",
      features: ["Reksa dana", "Saham", "Obligasi pemerintah"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Asuransi Komprehensif",
      description: "Lindungi diri dan keluarga dengan berbagai produk asuransi yang sesuai kebutuhan Anda.",
      features: ["Asuransi jiwa", "Asuransi kesehatan", "Asuransi kendaraan"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Banking Internasional",
      description: "Layanan perbankan global untuk memenuhi kebutuhan transaksi internasional Anda.",
      features: ["Multi-currency", "Wire transfer", "Trade finance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-trust-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-banking-gradient bg-clip-text text-transparent">
            Layanan Perbankan Terlengkap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dari mobile banking hingga investasi digital, kami menyediakan solusi finansial 
            yang komprehensif untuk semua kebutuhan Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-banking transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-banking-gradient rounded-lg text-white">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-card-banking">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-banking-gradient bg-clip-text text-transparent">
              Siap Memulai Perjalanan Finansial Anda?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Buka rekening sekarang dan nikmati kemudahan banking digital terdepan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="banking" size="lg">
                Buka Rekening Online
              </Button>
              <Button variant="outline" size="lg">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;