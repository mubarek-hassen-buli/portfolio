export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a SAAS Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Hospital management System",
    des: "Navigate the heartbeat of your hospital with clarity, control, and care.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://medi-lab-hospital.vercel.app/",
  },
  {
    id: 2,
    title: "PersonaDash - Your Personal Dashboard",
    des: " Built Around You — Secure Access, Smart Tools, Seamless Experience.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Biography of the 4 khalifa",
    des: "explore The Lives That Shaped Islam — The Four Rightly Guided Caliphs.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://khalifasofislam.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Mubarek was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. mubarek's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, mubarek is the ideal partner.",
    name: "Hamza Safi",
    image: "/hamza.jpg",
    // title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "If you’re looking to take your website and brand to new heights, Mubarek is hands-down the perfect partner. His talent, drive, and professionalism turned our project into something extraordinary, and I’d recommend him to anyone without hesitation.",
    name: "Hayatudin Jemal",
    image: "/hamza.jpg",
    // title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Mubarek’s dedication to delivering outstanding results shone through in every aspect of our project. When we hit a snag with a tricky interactive feature, he didn’t just fix it—he reimagined it, turning a potential headache into a highlight of the website that left us in awe. His meticulous attention to detail was evident in the polished design, lightning-fast load times, and flawless functionality across devices.",
    name: "Mubarek Amakel",
    image: "/hamza.jpg",
    // title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with Mubarek was nothing short of a delight. From start to finish, his professionalism set the tone—he was consistently punctual, communicative, and fully committed to bringing our vision to life. What impressed me most was his ability to blend efficiency with excellence; he met every deadline without ever compromising on quality.",
    name: "Awol Ibrahim",
    image: "/awol.jpg",
    // title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "But beyond his technical skill, it’s Mubarek’s passion for development that truly sets him apart. He tackled each challenge—whether crafting a sleek user interface, optimizing code, or integrating complex tools—with an enthusiasm that was downright inspiring. It made the collaboration not just productive, but genuinely enjoyable.",
    name: "Firagos Jemal",
    image: "/hamza.jpg",
    // title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - pre-Learning",
    desc: "Assisted in the development of mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web-App  Project",
    desc: "Led the dev of a Web app for a client, from initial concept to deployment .",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mubarek-hassen-buli",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "URL_ADDRESS.com/mubarek_hassen",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "URL_ADDRESS.com/mubarek_hassen",
  },
];
