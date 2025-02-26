
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LandingPage: React.FC = () => {
  const sections = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4e22978a36674bb287e63d1a787758be/2fb4b548b1a85fd5251f1f879b3b0f3cd89635065da0cb36b34e18f850fe18f8?placeholderIfAbsent=true",
      alt: "Landing section 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4e22978a36674bb287e63d1a787758be/0fe956fc6a869d3f431f45d338085070d438fb6882af866eaa96542bb48a8c03?placeholderIfAbsent=true",
      alt: "Landing section 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4e22978a36674bb287e63d1a787758be/dc68446893e47e9be53b920f07171f353371b098e966af377af6eaa45b06666c?placeholderIfAbsent=true",
      alt: "Landing section 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4e22978a36674bb287e63d1a787758be/e98c52cb19d312dfe5579d87a7e055b96355d9be0120be0622ef0ebc0ce7a211?placeholderIfAbsent=true",
      alt: "Landing section 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4e22978a36674bb287e63d1a787758be/71bda18864c4acfaf8295a46e23e418597bb9cf2d939e4d3294ab2c8a9e0a292?placeholderIfAbsent=true",
      alt: "Landing section 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4e22978a36674bb287e63d1a787758be/361dd7237872c77da3a2a6df7d76c829d636f1da7836eb8a557f9ce4560caec3?placeholderIfAbsent=true",
      alt: "Landing section 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4e22978a36674bb287e63d1a787758be/6d25fd21b7216f2cfcb3592deaec24b49e709f07f26cc0821adf9260f7cedbf3?placeholderIfAbsent=true",
      alt: "Landing section 7",
    },
  ];

  // Preload images
  React.useEffect(() => {
    sections.forEach(section => {
      const img = new Image();
      img.src = section.src;
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-black">
      <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <AnimatePresence>
          {sections.map((section, index) => (
            <motion.section
              key={index}
              className="h-screen w-full snap-start relative bg-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.45, 0, 0.55, 1]  // Custom easing for smoother transitions
              }}
              viewport={{ 
                once: false, 
                amount: 0.3,
                margin: "-20%" // Start animation slightly before section comes into view
              }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.45, 0, 0.55, 1]
                }}
              >
                <img
                  src={section.src}
                  alt={section.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </motion.div>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingPage;
