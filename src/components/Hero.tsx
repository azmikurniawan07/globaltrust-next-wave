import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, CreditCard } from "lucide-react";
import heroImage from "@/assets/bank-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(33, 78, 165, 0.8) 0%, rgba(6, 95, 70, 0.8) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Masa Depan
            <br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Perbankan Digital
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Bergabunglah dengan jutaan nasabah yang mempercayai Global Trust Bank 
            untuk solusi perbankan modern, aman, dan inovatif.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="banking" size="lg" className="group">
              Buka Rekening Sekarang
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Shield className="h-8 w-8 text-blue-200" />
              <div className="text-left">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-80">Keamanan Terjamin</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-200" />
              <div className="text-left">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Negara Terlayani</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <CreditCard className="h-8 w-8 text-purple-200" />
              <div className="text-left">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Layanan Tersedia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;