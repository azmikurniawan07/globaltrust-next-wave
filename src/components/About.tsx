import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Building, 
  Star,
  CheckCircle
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "10M+",
      label: "Nasabah Aktif",
      description: "Dipercaya jutaan nasabah"
    },
    {
      icon: <Building className="h-8 w-8" />,
      number: "2,500+",
      label: "Cabang & ATM",
      description: "Jaringan terluas di Indonesia"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "50+",
      label: "Penghargaan",
      description: "Pengakuan industri perbankan"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "4.9/5",
      label: "Rating Nasabah",
      description: "Kepuasan pelayanan terbaik"
    }
  ];

  const achievements = [
    "Bank Terbaik Indonesia 2023",
    "Digital Banking Innovation Award",
    "Best Customer Service Excellence",
    "Green Banking Initiative Leader",
    "Financial Inclusion Champion",
    "Cyber Security Excellence Award"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Tentang Global Trust Bank
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Membangun Kepercayaan,
            <br />
            <span className="bg-banking-gradient bg-clip-text text-transparent">
              Menciptakan Masa Depan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sejak 1995, Global Trust Bank telah menjadi mitra terpercaya dalam perjalanan finansial 
            jutaan nasabah. Kami terus berinovasi untuk memberikan layanan perbankan terdepan.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-card-banking transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-banking-gradient rounded-full text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-banking-gradient bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Misi Kami</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Memberikan solusi finansial yang inovatif, aman, dan mudah diakses untuk 
                memberdayakan individu dan bisnis dalam mencapai tujuan finansial mereka.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Visi Kami</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Menjadi bank digital terdepan di Asia Tenggara yang menghubungkan teknologi 
                dengan pelayanan personal untuk menciptakan pengalaman banking yang luar biasa.
              </p>
            </div>
          </div>

          <div className="bg-trust-gradient rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Penghargaan & Sertifikasi</h3>
            <div className="grid grid-cols-1 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Nilai-Nilai Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-bold mb-2">Kepercayaan</h4>
              <p className="text-muted-foreground">
                Membangun kepercayaan melalui transparansi, integritas, dan komitmen 
                terhadap keamanan data nasabah.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-2">Inovasi</h4>
              <p className="text-muted-foreground">
                Terus berinovasi dengan teknologi terdepan untuk memberikan solusi 
                perbankan yang lebih baik.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">❤️</div>
              <h4 className="text-xl font-bold mb-2">Pelayanan</h4>
              <p className="text-muted-foreground">
                Mengutamakan kepuasan nasabah dengan pelayanan yang ramah, cepat, 
                dan profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;