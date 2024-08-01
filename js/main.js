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