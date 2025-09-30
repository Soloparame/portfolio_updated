import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rebika
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Yihenew
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
            I create impactful digital solutions through web and mobile development.
             Specializing in full-stack, Flutter apps, and UI/UX design, 
            I build experiences that are seamless, user-friendly, and meaningful.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center mt-10 lg:mt-0 lg:ml-4">
          <div className="relative w-100 h-90 flex items-center justify-center">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0   pointer-events-none animate-gradient-move bg-gradient-to-tr from-primary  blur-2xl opacity-80 scale-110"></div>
            <img
              src="/public/images/photo_2025-09-29_09-17-21-removebg-preview.png"
              alt="Rebika Yihenew"
              className="relative z-10  transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-[0_16px_48px_rgba(80,120,255,0.35)] animate-fade-in-up"
              style={{
                transform: "translateY(-18px)",
                boxShadow:
                  "0  0 rgba(255, 255, 255, 0.18), 0  0 rgba(0,0,0,0.10)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
