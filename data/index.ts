import { url } from 'inspector';

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title:
      'I focus on collaborative relationships, maintaining clear and consistent communication.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title:
      'Currently building a next-gen web applications powered by Machine learning',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'myAnswer - A SaaS Application',
    des: "myAnswer represents a cutting-edge SaaS platform that revolutionizes PDF processing and document management. By leveraging advanced technologies such as Next.js 13, React, Prisma, tRPC, Tailwind CSS, and others, we've created a comprehensive solution that addresses the challenges faced by individuals and businesses in handling PDF documents.",
    img: '/myAnswer.png',
    iconLists: [
      '/next.svg',
      '/tail.svg',
      '/ts.svg',
      '/prisma.svg',
      '/shdcn.png',
    ],
    link: 'https://github.com/codeonoto/myAnswer',
  },
  {
    id: 2,
    title: 'Tanishk - Portfolio',
    des: 'Designed and built this portfolio with React.js, Three.js, and Framer Motion, focusing on creating a seamless and captivating user experience.',
    img: '/tanishkPort.png',
    iconLists: ['/re.svg', '/tail.svg', '/js.svg', '/three.svg', '/fm.svg'],
    link: 'https://tanishk.xyz',
  },
  {
    id: 3,
    title: 'WeMeet - A Video Conferencing App',
    des: 'WeMeet - A video conferencing app built with Next.js, TypeScript, Tailwind CSS, and Stream, offering a smooth and reliable virtual meeting experience.',
    img: '/weMeet.png',
    iconLists: [
      '/next.svg',
      '/tail.svg',
      '/ts.svg',
      '/stream.svg',
      '/shdcn.png',
    ],
    link: 'https://github.com/codeonoto/weMeet',
  },
  {
    id: 4,
    title: 'Realistic YouTube Clone',
    des: 'YT Clone - A YouTube-like platform built using React, Tailwind CSS, Shadcn UI, TypeScript, and Google API for seamless video streaming and discovery.',
    img: '/ytclone.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/gc.png', '/shdcn.png'],
    link: 'https://github.com/codeonoto/weTube',
  },
];

export const testimonials = [
  {
    quote:
      "Deepanshu has a unique ability to transform complex ideas into intuitive, user-friendly web experiences. His expertise in Next.js and the MERN stack made our project a huge success. I couldn't be happier with the results!",
    name: 'Kushagra Dubey',
    title: 'Student of Sage University',
    img: '/kushagra.jpg',
  },
  {
    quote:
      'Working with you was a game-changer for our business. His proficiency in integrating machine learning into our web app has given us a competitive edge. His commitment to quality and attention to detail are second to none.',
    name: 'Tanishk Saini',
    title: 'Senior Staff at GB Nodes',
    img: '/tan.jpg',
  },
  {
    quote:
      'From concept to completion, Deepanshu exceeded our expectations. His technical skills are top-notch, and he consistently delivered on time. Our collaboration was smooth, and the end product was exactly what we envisioned.',
    name: 'Rashmi Sharma',
    title: 'Senior Admin of Infirals',
    img: '/rashmi.jpg',
  },
  {
    quote:
      'Deepanshu is an outstanding developer who goes above and beyond to deliver exceptional work. His ability to understand our needs and translate them into a seamless user experience was impressive. I highly recommend him!',
    name: 'Anonymous',
    title: 'Faculty at Sage University',
    img: '/any.svg',
  },
  {
    quote:
      'Deepanshu brought our project to life with his expertise in web development and machine learning. His innovative approach and dedication to perfection resulted in a product that’s both functional and visually stunning.',
    name: 'Oli',
    title: 'Work at Pixels',
    img: '/oli.jpg',
  },
];

export const companies = [
  {
    id: 1,
    name: 'Infirals',
    img: '/infirals.png',
    nameImg: '/infiralsName.png',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'MERN Stack Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Collaborative Team Project',
    desc: 'Worked closely with a team of developers to design and implement a complex web application using the Next.js',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Mentor at CodingNinjas',
    desc: 'Guided and supported students in mastering web development and programming concepts.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Runner-Up in Web Development Competition',
    desc: 'Competed in a highly competitive web development event, showcasing skills in designing and developing a unique web application.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    url: 'https://github.com/codeonoto',
  },
  {
    id: 2,
    img: '/link.svg',
    url: 'https://www.linkedin.com/in/deepanshusahu0412/',
  },
  {
    id: 3,
    img: '/dc.svg',
    url: 'https://discord.gg/UPMrvqPD3P',
  },
];
