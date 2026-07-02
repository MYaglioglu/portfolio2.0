import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { AnimatedTooltip } from "../components/animated-tooltip";

const lucideFilter =
  "brightness(0.85) saturate(0.6) sepia(0.3) hue-rotate(200deg)";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6">
      {technologies.map((technology) => {
        const IconComponent = technology.iconComponent;
        const hasImageIcon = !!technology.icon;
        const isDevicon = technology.isDevicon;

        return (
          <AnimatedTooltip
            key={technology.name}
            content={
              <span className="text-white text-xs font-medium tracking-wide">
                {technology.name}
              </span>
            }
          >
            <div
              className="
                w-[120px] h-[120px] rounded-2xl
                bg-tertiary border border-white/10
                flex items-center justify-center
                shadow-card cursor-pointer
                transition-all duration-300
                hover:scale-110 hover:border-white/25 hover:bg-[#1c1550]
                active:scale-95
              "
            >
              {IconComponent ? (
                isDevicon ? (
                  // Devicons: size-Prop für korrekte Größe, keine Farbveränderung
                  <IconComponent size={56} />
                ) : (
                  // Lucide Icons: violett getönt
                  <div
                    className="flex items-center justify-center"
                    style={{ filter: lucideFilter }}
                  >
                    <IconComponent
                      style={{ width: 52, height: 52 }}
                      className="text-[#c4b5fd]"
                    />
                  </div>
                )
              ) : hasImageIcon ? (
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-12 h-12 object-contain"
                />
              ) : null}
            </div>
          </AnimatedTooltip>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
