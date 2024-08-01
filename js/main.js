import { yourCourses, features, upcomingCourses, courseData } from './data.js';
import { openDrawer, closeDrawer, switchTab, toggleAccordion } from './utils.js';
import {
    createHeader,
    createFooter,
    createMainContent,
    renderModules,
    updateVideoContent,
    updateInfoContent,
    createDrawer,
    createDrawerContent
} from './dom.js';

function initializePage(route) {
    if (window.location.pathname === route) {
        const header = createHeader();
        const content = createMainContent();
        const footer = createFooter();
        const drawer = createDrawer();

        document.body.appendChild(header);
        document.body.appendChild(content);
        document.body.appendChild(footer);
        document.body.appendChild(drawer);
    }
}

function loadFirstVideo() {
    if (courseData.modules.length > 0 && courseData.modules[0].lessons.length > 0) {
        const firstLesson = courseData.modules[0].lessons[0];
        updateVideoContent(firstLesson);
        updateInfoContent(firstLesson);
    }
}

function handleVideoClick(event) {
    document.querySelectorAll('.video-item').forEach(item => {
        item.classList.remove('bg-gray-200');
    });

    event.currentTarget.classList.add('bg-gray-200');

    const moduleIndex = event.currentTarget.dataset.module;
    const lessonIndex = event.currentTarget.dataset.lesson;
    const lesson = courseData.modules[moduleIndex].lessons[lessonIndex];

    updateVideoContent(lesson);
    updateInfoContent(lesson);
}

function openDrawerWithCourseDetails(course) {
    const drawerContent = document.querySelector('.drawer-content');

    if (!drawerContent) {
        console.error('Drawer content element not found');
        return;
    }

    //     drawerContent.innerHTML = `
    //     <div class="p-5">
    //       <div class="flex justify-between items-center mb-6">
    //         <h3 class="text-2xl font-bold text-gray-900">${course.title}</h3>
    //         <button id="closeDrawer"
    //           class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center">
    //           <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //             <path fill-rule="evenodd"
    //               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //               clip-rule="evenodd"></path>
    //           </svg>
    //         </button>
    //       </div>
    //       <div class="mb-4">
    //         <img src="${course.image || 'https://dummyimage.com/600x300'}" alt="Course Image" class="w-full rounded-lg">
    //       </div>
    //       <div class="flex justify-between items-center mb-4">
    //         <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">${course.category || 'COURSE'}</span>
    //         <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">${course.duration || 'N/A'}</span>
    //       </div>
    //       <p class="text-sm text-gray-500 mb-4">${course.subtitle || ''}</p>
    //     </div>
    //   `;

    drawerContent.innerHTML = createDrawerContent(course);

    const closeDrawerBtn = document.getElementById('closeDrawer');
    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener('click', closeDrawer);
    }

    openDrawer();
}

document.addEventListener('DOMContentLoaded', () => {
    initializePage('/');
    renderModules();
    loadFirstVideo();

    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
        coursesSection.addEventListener('click', (event) => {
            const courseCard = event.target.closest('.course-card');
            if (courseCard) {
                const courseIndex = parseInt(courseCard.dataset.courseIndex);
                if (!isNaN(courseIndex) && upcomingCourses[courseIndex]) {
                    openDrawerWithCourseDetails(upcomingCourses[courseIndex]);
                } else {
                    console.error('Invalid course index or course not found');
                }
            }
        });
    } else {
        console.error('Courses section not found');
    }
});

export { handleVideoClick };