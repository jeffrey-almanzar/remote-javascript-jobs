import slugify from "slugify";

export const jobs = [
  {
    id: 11234,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11235,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11236,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11237,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Internship",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11238,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Part-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    id: 11238,
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Contract",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
];

export const FILTER_EMPLOYMENT_TYPE = 'Employment type';
export const FILTER_DEVELOPMENT_TYPE = 'Development type';
export const FILTER_EXPERIENCE_LEVEL = 'Experience level';
export const FILTER_MAIN_TECHNOLOGY = 'Main technology';
export const FILTER_SALARY = 'Salary';

export const options = [
  {
    label: 'Employment type',
    filterKey: slugify(FILTER_EMPLOYMENT_TYPE),
    options: [
      'Full-time',
      'Contract',
      'Part-time',
      'Internship',
    ]
  },
  {
    label: 'Development type',
    filterKey: slugify(FILTER_DEVELOPMENT_TYPE),
    options: [
      'Front-end',
      'Back-end',
      'Full-stack',
    ]
  },
  {
    label: 'Experience level',
    filterKey: slugify(FILTER_EXPERIENCE_LEVEL),
    options: [
      'Junior',
      'Mid',
      'Senior',
    ]
  },
  {
    label: 'Main technology',
    filterKey: slugify(FILTER_MAIN_TECHNOLOGY),
    options: [
      'React',
      'Angular',
      'Vue',
      'jQuery',
    ]
  },
  {
    label: 'Salary',
    filterKey: slugify(FILTER_SALARY),
    options: [
      '50k-100k',
      '100k+',
    ]
  },
];
