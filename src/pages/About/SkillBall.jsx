import { useFrame, extend } from "@react-three/fiber";
import SpriteText from "three-spritetext";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useIsMobile } from "../../hooks";
extend({ SpriteText });

const Skills = () => {
  const { isMobile } = useIsMobile();
  const getPos = (k) => {
    let a = Math.random();
    let b = Math.random();
    return b > 0.5 ? a * k : a * -1 * k;
  };
const skills = [
  // Languages
  "Python",
  "Java",
  "JavaScript",
  "C/C++",
  "Elm",
  "SQL",
  "R",
  "HTML/CSS",
  "Matlab",
  "SPSS",

  // Frameworks/Tools
  "Node.js",
  "React",
  "Django",
  "TensorFlow",
  "Keras",
  "Oracle",

  // Tools/Skills
  "Git",
  "Docker",
  "Google Cloud Platform",
  "VS Code",
  "Visual Studio",
  "Github",
  "Figma",
  "MS Office",

  // Libraries
  "pandas",
  "NumPy",
  "Matplotlib",
  "OpenCV",
  "Pillow",
  "scikit-learn",
  "PyTorch",
  "D3.js"
];

  const g = useRef();
  useFrame(() => {
    g.current.rotation.x += 0.00053;
    g.current.rotation.y += 0.00053;
    // g.current.rotation.z += 0.001;
  });
  return (
    <>
      {isMobile ? null : <OrbitControls enablePan={false} enableZoom={false} />}
      <pointLight position={[-2, 2, 2]} args={["#fff", 0.3]} />
      <group ref={g} position={[0, 2, 0]} scale={0.1}>
        {skills.map((a, i) => {
          return (
            <spriteText
              text={a}
              key={i}
              fontSize={90}
              position={[getPos(80), getPos(80), getPos(80)]}
              fontFace={"'Fira Code','Roboto Mono', monospace"}
              color={i % 2 === 0 ? "#FAFF81" : "#E06D06"}
            />
          );
        })}
      </group>
    </>
  );
};

export default Skills;
