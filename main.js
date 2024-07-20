// Data objects
const yourCourses = [
  {
    title: 'Speak English Fluently',
    image: 'https://dummyimage.com/720x400',
    duration: '17 Hours +',
    modules: '15 Modules',
    language: 'English',
    link: 'speak-english.html'
  },
  {
    title: 'Speak English Fluently',
    image: 'https://dummyimage.com/720x400',
    duration: '18 Hours +',
    modules: '15 Modules',
    language: 'English',
    link: 'speak-english-2.html'
  }
  // Add more courses as needed
];

const features = [
  { title: 'English Speaking Partners' },
  { title: 'Talk with AI' },
  { title: '300+ Practice Questions' },
  { title: 'Complete Lesson Notes' },
  { title: 'Generate Certificate' }
];

const upcomingCourses = [
  { title: 'Speak English with Aleena', subtitle: '(Hindi)' },
  { title: 'Instagram Masterclass', subtitle: '' }
];

function createHeader() {
  const header = document.createElement('header');
  header.className = 'figtree-400 text-gray-400 bg-[#13181d] body-font';

  const navItems = [
    { name: 'Home', icon: 'fa-house' },
    { name: 'Purchases', icon: 'fa-briefcase' },
    // Add more items as needed
  ];

  const navHTML = navItems.map(item => `
      <a class="flex items-center justify-center flex-col gap-1 border-b-4 border-transparent hover:border-white w-[160px] p-4 hover:text-white figtree-400 transition-colors duration-300">
        <i class="fa-solid ${item.icon} text-2xl"></i>
        <span class="my-1">${item.name}</span>
      </a>
    `).join('');

  header.innerHTML = `
      <div class="container mx-auto flex flex-wrap p-5 py-0 flex-col md:flex-row items-center">
        <nav id="main-nav" class="flex text-center flex-wrap items-center justify-center w-full pt-3 text-base gap-3">
          ${navHTML}
        </nav>
      </div>
    `;

  return header;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'text-white body-font';
  footer.innerHTML = `
    <div class="bg-[#2b303d]">
      <div class="container mx-auto py-4 px-5 flex items-center justify-center flex-wrap flex-col sm:flex-row">
        <p class="text-lg text-center sm:text-left">© 2024 Aleena Rais</p>
      </div>
    </div>
    `;
  return footer;
}

function createYourCoursesSection() {
  const section = document.createElement('section');
  section.className = 'text-gray-600 body-font';
  section.id = 'your_course';

  const coursesHTML = yourCourses.map(course => `
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <a href="${course.link}">
          <div class="bg-[#d9b25d] rounded-[20px] overflow-hidden">
            <img
              class="sm:h-72 h-52 rounded-[20px] w-full object-cover object-center"
              src="${course.image}"
              alt="${course.title}"
            />
            <div class="flex items-center justify-between p-4 px-8">
              <h2 class="text-lg text-gray-900 font-semibold mb-0">${course.duration}</h2>
              <h2 class="text-lg text-gray-900 font-semibold mb-0">${course.modules}</h2>
              <h2 class="text-lg text-gray-900 font-semibold mb-0">${course.language}</h2>
            </div>
          </div>
        </a>
      </div>
    `).join('');

  section.innerHTML = `
      <div class="container px-5 sm:py-24 py-12 mx-auto">
        <div class="flex flex-wrap w-full mb-10">
          <div class="lg:w-1/2 w-full sm:mb-6 mb-2 lg:mb-0">
            <h1 class="sm:text-5xl text-4xl font-bold title-font mb-2 text-gray-900">Your Courses</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          ${coursesHTML}
        </div>
      </div>
    `;

  return section;
}

function createFeaturesSection() {
  const section = document.createElement('section');
  section.className = 'text-gray-600 body-font';
  section.id = 'features';

  const featuresHTML = features.map(feature => `
      <div class="p-4 sm:w-1/5 md:w-1/5 w-full">
        <div class="flex sm:items-start items-center justify-between rounded-lg h-full bg-[#13181d] p-5 sm:flex-col">
          <h2 class="text-white sm:text-2xl sm:w-full w-full max-w-[150px] text-base title-font font-medium mb-auto">
            ${feature.title}
          </h2>
          <div class="sm:mt-6 mt-0">
            <a class="text-[#13181d] sm:px-5 px-3 sm:py-2 py-2 sm:text-lg text-sm font-medium rounded-lg inline-flex bg-[#f4f5ed] items-center">
              Get Access
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');

  section.innerHTML = `
      <div class="container px-5 sm:py-24 py-12 pb-0 mx-auto">
        <div class="flex flex-wrap w-full mb-10">
          <div class="lg:w-1/2 w-full sm:mb-6 mb-2 lg:mb-0">
            <h1 class="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Additional Features</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          ${featuresHTML}
        </div>
      </div>
    `;

  return section;
}

function createUpcomingCoursesSection() {
  const section = document.createElement('section');
  section.className = 'text-gray-600 body-font';
  section.id = 'courses';

  const coursesHTML = upcomingCourses.map(course => `
      <div class="p-4 md:w-1/5">
        <div class="flex items-start justify-between rounded-lg h-full bg-[#13181d] p-5 flex-col min-h-[240px]">
          <div class="mb-4">
            <a class="text-[#13181d] px-3 p-1 text-sm font-medium rounded-lg inline-flex bg-[#f4f5ed] items-center">
              Coming Soon
            </a>
          </div>
          <h2 class="text-white text-3xl title-font font-semibold mb-auto">
            ${course.title} <br class="mb-0" />
            ${course.subtitle ? `<span class="text-white text-sm font-normal">${course.subtitle}</span>` : ''}
          </h2>
        </div>
      </div>
    `).join('');

  section.innerHTML = `
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-10">
          <div class="lg:w-1/2 w-full sm:mb-6 mb-2 lg:mb-0">
            <h1 class="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Upcoming Courses</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          ${coursesHTML}
        </div>
      </div>
    `;

  return section;
}

function createMainContent() {
  const main = document.createElement('main');
  main.id = 'content';

  main.appendChild(createYourCoursesSection());
  main.appendChild(createFeaturesSection());
  main.appendChild(createUpcomingCoursesSection());

  return main;
}

function initializePage() {
  const header = createHeader();
  const content = createMainContent();
  const footer = createFooter();

  document.body.appendChild(header);
  document.body.appendChild(content);
  document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', initializePage);