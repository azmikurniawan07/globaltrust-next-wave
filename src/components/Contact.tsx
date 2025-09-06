import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Headphones
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telepon",
      details: [
        "Customer Care: 1500-888",
        "Priority Banking: 1500-999",
        "24/7 Emergency: 0800-1-888-999"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: [
        "info@globaltrustbank.id",
        "support@globaltrustbank.id",
        "complaint@globaltrustbank.id"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Kantor Pusat",
      details: [
        "Jl. Jend. Sudirman Kav. 52-53",
        "Jakarta Selatan 12190",
        "Indonesia"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
        "Sabtu: 08:00 - 14:00",
        "Customer Care: 24/7"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Hubungi
            <span className="bg-banking-gradient bg-clip-text text-transparent"> Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tim customer service kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi 
            kami melalui berbagai channel yang tersedia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-card-banking">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nama Lengkap
                    </label>
                    <Input id="name" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Nomor Telepon
                    </label>
                    <Input id="phone" placeholder="Masukkan nomor telepon" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Masukkan alamat email" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subjek
                  </label>
                  <Input id="subject" placeholder="Pilih topik pertanyaan" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tuliskan pesan atau pertanyaan Anda..." 
                    rows={5}
                  />
                </div>
                
                <Button variant="banking" className="w-full">
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="bg-banking-gradient text-white">
              <CardContent className="p-8 text-center">
                <Headphones className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Butuh Bantuan Cepat?</h3>
                <p className="mb-6 opacity-90">
                  Hubungi customer care kami sekarang untuk bantuan instan
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Live Chat
                  </Button>
                  <Button variant="secondary">
                    Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-card-banking transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p className="text-lg font-semibold">Lokasi Kantor Pusat</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;