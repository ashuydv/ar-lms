const infoContainer = document.getElementById('info-container');
const modulesContainer = document.getElementById('modules-container');
const videoContainer = document.getElementById('video-container');
const backBtn = document.querySelector('#backBtn');
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
    title: 'Speak Spanish Fluently',
    image: 'https://dummyimage.com/720x400',
    duration: '18 Hours +',
    modules: '15 Modules',
    language: 'Spanish',
    link: 'speak-english-2.html'
  },

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


const courseData = {
  modules: [
    {
      title: "Module 01",
      description: "Introduction to English",
      lessonCount: 15,
      lessons: [
        {
          title: "1. Wh-questions",
          type: "Video",
          data: "2 MB",
          href: "1-1.html",
          videoUrl: "path/to/wh-questions-video.mp4",
          lessonInfo: "Wh-questions are questions that typically start with 'what', 'where', 'when', 'why', or 'how'. They are used to gather specific information.",
          resources: "Additional resources for Wh-questions..."
        },
        {
          title: "2. Yes/No questions",
          type: "Video",
          data: "1.5 MB",
          href: "1-2.html",
          videoUrl: "path/to/yes-no-questions-video.mp4",
          lessonInfo: "Yes/No questions are questions that can be answered with a simple 'yes' or 'no'.",
          resources: "Additional resources for Yes/No questions..."
        },
        // ... more lessons
      ]
    },
    {
      title: "Module 02",
      description: "Introduction to English",
      lessonCount: 15,
      lessons: [
        {
          title: "1. Wh-questions",
          type: "Video",
          data: "2 MB",
          href: "2-1.html",
          videoUrl: "path/to/wh-questions-video.mp4",
          lessonInfo: "Wh-questions are questions that typically start with 'what', 'where', 'when', 'why', or 'how'. They are used to gather specific information.",
          resources: "Additional resources for Wh-questions..."
        },
        {
          title: "2. Yes/No questions",
          type: "Video",
          data: "1.5 MB",
          href: "2-2.html",
          videoUrl: "path/to/yes-no-questions-video.mp4",
          lessonInfo: "Yes/No questions are questions that can be answered with a simple 'yes' or 'no'.",
          resources: "Additional resources for Yes/No questions..."
        },
        // ... more lessons
      ]
    },
    {
      title: "Module 03",
      description: "Introduction to English",
      lessonCount: 15,
      lessons: [
        {
          title: "1. Wh-questions",
          type: "Video",
          data: "2 MB",
          href: "3-1.html",
          videoUrl: "path/to/wh-questions-video.mp4",
          lessonInfo: "Wh-questions are questions that typically start with 'what', 'where', 'when', 'why', or 'how'. They are used to gather specific information.",
          resources: "Additional resources for Wh-questions..."
        },
        {
          title: "2. Yes/No questions",
          type: "Video",
          data: "1.5 MB",
          href: "3-2.html",
          videoUrl: "path/to/yes-no-questions-video.mp4",
          lessonInfo: "Yes/No questions are questions that can be answered with a simple 'yes' or 'no'.",
          resources: "Additional resources for Yes/No questions..."
        },
        // ... more lessons
      ]
    },
    {
      title: "Module 04",
      description: "Introduction to English",
      lessonCount: 15,
      lessons: [
        {
          title: "1. Wh-questions",
          type: "Video",
          data: "2 MB",
          href: "4-1.html",
          videoUrl: "path/to/wh-questions-video.mp4",
          lessonInfo: "Wh-questions are questions that typically start with 'what', 'where', 'when', 'why', or 'how'. They are used to gather specific information.",
          resources: "Additional resources for Wh-questions..."
        },
        {
          title: "2. Yes/No questions",
          type: "Video",
          data: "1.5 MB",
          href: "4-2.html",
          videoUrl: "path/to/yes-no-questions-video.mp4",
          lessonInfo: "Yes/No questions are questions that can be answered with a simple 'yes' or 'no'.",
          resources: "Additional resources for Yes/No questions..."
        },
        // ... more lessons
      ]
    },
    {
      title: "Module 05",
      description: "Introduction to English",
      lessonCount: 15,
      lessons: [
        {
          title: "1. Wh-questions",
          type: "Video",
          data: "2 MB",
          href: "5-1.html",
          videoUrl: "path/to/wh-questions-video.mp4",
          lessonInfo: "Wh-questions are questions that typically start with 'what', 'where', 'when', 'why', or 'how'. They are used to gather specific information.",
          resources: "Additional resources for Wh-questions..."
        },
        {
          title: "2. Yes/No questions",
          type: "Video",
          data: "1.5 MB",
          href: "5-2.html",
          videoUrl: "path/to/yes-no-questions-video.mp4",
          lessonInfo: "Yes/No questions are questions that can be answered with a simple 'yes' or 'no'.",
          resources: "Additional resources for Yes/No questions..."
        },
        // ... more lessons
      ]
    },
    {
      title: "Module 06",
      description: "Introduction to English",
      lessonCount: 15,
      lessons: [
        {
          title: "1. Wh-questions",
          type: "Video",
          data: "2 MB",
          href: "6-1.html",
          videoUrl: "path/to/wh-questions-video.mp4",
          lessonInfo: "Wh-questions are questions that typically start with 'what', 'where', 'when', 'why', or 'how'. They are used to gather specific information.",
          resources: "Additional resources for Wh-questions..."
        },
        {
          title: "2. Yes/No questions",
          type: "Video",
          data: "1.5 MB",
          href: "6-2.html",
          videoUrl: "path/to/yes-no-questions-video.mp4",
          lessonInfo: "Yes/No questions are questions that can be answered with a simple 'yes' or 'no'.",
          resources: "Additional resources for Yes/No questions..."
        },
        // ... more lessons
      ]
    },
    // ... more modules
  ]
};


function createHeader() {
  const header = document.createElement('header');
  header.className = 'figtree-400 text-gray-400 bg-[#13181d] body-font';

  const navItems = [
    { name: 'Home', icon: 'fa-house' },
    { name: 'Purchases', icon: 'fa-briefcase' },
    // Add more items as needed
  ];

  const navHTML = navItems.map(item => `
      <a class="flex items-center justify-center flex-col gap-1 border-b-4 border-transparent hover:border-white w-[120px] p-2 hover:text-white figtree-400 transition-colors duration-300">
        <i class="fa-solid ${item.icon} sm:text-2xl text-xs"></i>
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

function initializePage(route) {
  if (window.location.pathname === route) {
    const header = createHeader();
    const content = createMainContent();
    const footer = createFooter();

    document.body.appendChild(header);
    document.body.appendChild(content);
    document.body.appendChild(footer);
  }
}

document.addEventListener('DOMContentLoaded', initializePage('/'));

const tabs = document.querySelectorAll('[role="tab"]');
const tabContents = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update ARIA attributes and styles for tabs
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.classList.remove('text-blue-600', 'border-blue-600');
      t.classList.add('text-gray-500', 'border-transparent', 'hover:text-gray-600', 'hover:border-gray-300');
    });
    tab.setAttribute('aria-selected', 'true');
    tab.classList.remove('text-gray-500', 'border-transparent', 'hover:text-gray-600', 'hover:border-gray-300');
    tab.classList.add('text-black', 'border-black');

    // Hide all tab contents
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });

    // Show the selected tab content
    const panelId = tab.getAttribute('aria-controls');
    const activePanel = document.getElementById(panelId);
    activePanel.classList.remove('hidden');
  });
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('svg');

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  });
});

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const content = button.nextElementSibling;
    const icon = button.querySelector('svg');

    accordionItem.classList.toggle('active');
    icon.classList.toggle('rotate-180');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.add('hidden');
    } else {
      content.classList.remove('hidden');
      content.style.maxHeight = content.scrollHeight + "px";
    }

    // Close other accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
        item.querySelector('.accordion-content').classList.add('hidden');
        item.querySelector('svg').classList.remove('rotate-180');
      }
    });
  });
});

function renderModules() {

  // Highlight the first video item
  const firstVideoItem = document.querySelector('.video-item');
  if (firstVideoItem) {
    firstVideoItem.classList.add('bg-gray-200');
  }

  if (courseData && modulesContainer && window.innerWidth > 1000) {
    modulesContainer.innerHTML = courseData.modules.map((module, moduleIndex) => `
      <div class="accordion-item bg-white border-2 border-black rounded-lg shadow w-full">
        <button class="accordion-header w-full text-left px-4 py-3 flex justify-between items-start">
          <div>
            <h3 class="font-medium">${module.title}</h3>
            <p class="text-xl text-gray-900 font-medium">${module.description}</p>
            <span class="text-xs text-gray-900">${module.lessonCount} Lessons</span>
          </div>
          <svg class="w-5 h-5 transition-transform transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div class="accordion-content hidden px-4 pb-3">
          <ul class="space-y-2">
            ${module.lessons.map((lesson, lessonIndex) => `
              <li class="video-item" data-module="${moduleIndex}" data-lesson="${lessonIndex}">
                <div class="flex-shrink-0 mr-3">
                  <svg class="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <p class="font-medium w-full">${lesson.title}</p>
                  <p class="text-xs text-gray-500">${lesson.type} • Data: ${lesson.data}</p>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  if(window.innerWidth <= 1000) {
    modulesContainer.innerHTML = courseData.modules.map((module, moduleIndex) => `
    <div class="accordion-item bg-white border-2 border-black rounded-lg shadow w-full">
      <button class="accordion-header w-full text-left px-4 py-3 flex justify-between items-start">
        <div>
          <h3 class="font-medium">${module.title}</h3>
          <p class="text-xl text-gray-900 font-medium">${module.description}</p>
          <span class="text-xs text-gray-900">${module.lessonCount} Lessons</span>
        </div>
        <svg class="w-5 h-5 transition-transform transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div class="accordion-content hidden px-4 pb-3">
        <ul class="space-y-2">
          ${module.lessons.map((lesson, lessonIndex) => `
            <a href="speak-english/${lesson.href}" class="video-item" data-module="${moduleIndex}" data-lesson="${lessonIndex}">
              <div class="flex-shrink-0 mr-3">
                <svg class="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <p class="font-medium w-full">${lesson.title}</p>
                <p class="text-xs text-gray-500">${lesson.type} • Data: ${lesson.data}</p>
              </div>
            </a>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
  }

  // Add click event listeners to video items
  document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', handleVideoClick);
  });

  // Add click event listeners to accordion headers
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', toggleAccordion);
  });
}

function loadFirstVideo() {
  if (courseData.modules.length > 0 && courseData.modules[0].lessons.length > 0) {
    const firstLesson = courseData.modules[0].lessons[0];
    updateVideoContent(firstLesson);
    updateInfoContent(firstLesson);
  }
}

function handleVideoClick(event) {
  // Remove highlight from all video items
  document.querySelectorAll('.video-item').forEach(item => {
    item.classList.remove('bg-gray-200');
  });

  // document.getElementById("mobile-c").style.display = "block"
  // document.getElementById("modules-container").style.display = "none";

  // Add highlight to the clicked item
  event.currentTarget.classList.add('bg-gray-200');

  const moduleIndex = event.currentTarget.dataset.module;
  const lessonIndex = event.currentTarget.dataset.lesson;
  const lesson = courseData.modules[moduleIndex].lessons[lessonIndex];

  // document.getElementById("moduleName").textContent = courseData.modules[moduleIndex].title;

  updateVideoContent(lesson);
  updateInfoContent(lesson);
}

function updateVideoContent(lesson) {
  if (videoContainer) {
    videoContainer.innerHTML = `
      <h2 class="sm:text-3xl text-2xl title-font w-full font-semibold text-gray-900 mt-2 mb-4">${lesson.title}</h2>
      <video id="video-player" class="w-full h-full border-2 border-black rounded-2xl" autoplay loop muted>
        <source src="${lesson.videoUrl}" type="video/mp4">
      </video>
    `;
  }
}

function updateInfoContent(lesson) {
  if (infoContainer) {
    infoContainer.innerHTML = `
      <div class="flex border-b">
        <button class="py-2 px-4 sm:text-xl text-xl font-medium text-center text-black border-b-2 border-black rounded-t-lg active" id="lesson-tab" data-tabs-target="#lesson" type="button" role="tab" aria-controls="lesson" aria-selected="true">
          Lesson Info
        </button>
        <button class="py-2 px-4 sm:text-x  l text-xl font-medium text-center text-gray-500 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="resources-tab" data-tabs-target="#resources" type="button" role="tab" aria-controls="resources" aria-selected="false">
          Resources
        </button>
      </div>
      <div id="tab-content" class="w-full">
        <div class="rounded-lg py-8" id="lesson" role="tabpanel" aria-labelledby="lesson-tab">
          <p class="sm:text-xl text-md text-black w-full">${lesson.lessonInfo}</p>
        </div>
        <div class="hidden rounded-lg py-8" id="resources" role="tabpanel" aria-labelledby="resources-tab">
          <p class="sm:text-xl text-md text-black w-full">${lesson.resources}</p>
        </div>
      </div>
    `;
  }

  // Add click event listeners to tabs
  document.querySelectorAll('[data-tabs-target]').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab));
  });
}

function toggleAccordion(event) {
  const content = event.currentTarget.nextElementSibling;
  content.classList.toggle('hidden');
  event.currentTarget.querySelector('svg').classList.toggle('rotate-180');
}

function switchTab(selectedTab) {
  const tabs = document.querySelectorAll('[data-tabs-target]');
  const tabContents = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach(tab => {
    tab.classList.remove('active', 'border-black', 'text-black');
    tab.classList.add('text-gray-500', 'border-transparent');
  });

  tabContents.forEach(content => content.classList.add('hidden'));

  selectedTab.classList.add('active', 'border-black', 'text-black');
  selectedTab.classList.remove('text-gray-500', 'border-transparent');

  const target = document.querySelector(selectedTab.dataset.tabsTarget);
  target.classList.remove('hidden');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderModules();
  loadFirstVideo();
});