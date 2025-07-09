// Event data extracted from Meetup with actual images
const events = [
    {
        id: 1,
        title: "Introduction to Containers with Node.js and Kubernetes on Red Hat OpenShift 4.x",
        date: "Thursday, June 10, 2021",
        attendees: 10,
        image: "images/event1.webp",
        description: `Join our Build Smart on Kubernetes World Tour series. Explore the Red Hat OpenShift development environment and learn how to use many of the best parts of OpenShift. You use OpenShift to deploy a sample Node.js application on IBM Cloud. If you are new to OpenShift and Kubernetes, this webinar can help you understand core skills.

<strong>What you will learn:</strong>
• Introduction to Containers, Docker, Kubernetes, and OKD/OpenShift
• How to use OpenShift web client to visualize, browse, and manage the contents of projects
• How to use Command-line Interface (CLI) to manage your applications
• How to use OpenShift REST APIs to manage end-user applications, the cluster, and the users of the cluster
• The basics of OpenShift management
• How to create projects and assign their users (developers)
• Managing the Containers with builds and deployments
• The basics of the Networking - load balancing
• The basics of OpenShift based hosting with exposed services, the routes to the services, and scaling aspects of the container orchestration
• The toolchain with continuous integration (CI) and continuous delivery (CD)

<strong>Who should attend:</strong>
Developers, cloud developers, DevOps Engineers, full-stack developers

<strong>Speaker:</strong> Mofaq Althiyabi`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/278446742/?eventOrigin=your_events"
    },
    {
        id: 2,
        title: "Get started with Node-Red on Red Hat OpenShift",
        date: "Thursday, June 3, 2021",
        attendees: 7,
        image: "images/event2.webp",
        description: `In this session, we will introduce to you the Red Hat OpenShift Container Platform. What is it exactly? What are the benefits of using it, and how can it add to an organization? We will go through some of the platform's specifications and capabilities, features, and benefits that mostly encourage developers to learn all about it and organizations to adapt to it.

In the hands-on session, we will deploy Node-RED on Red Hat® OpenShift® on IBM Cloud™.

<strong>What will you learn:</strong>
• Get introduced to OpenShift Container Platform
• Learn how to deploy your applications on OpenShift
• Connect other IBM Cloud services to your application on OpenShift

<strong>Who should attend:</strong>
All Developers interested in Cloud-Native development are welcome to attend the webinar!

<strong>Speakers:</strong>
• Mohamed Sherif: Developer Advocate
• Mofaq Althiyabi: Developer Advocate`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/278446631/?eventOrigin=your_events"
    },
    {
        id: 3,
        title: "News Mining Using Watson Discovery and Red Hat OpenShift",
        date: "Thursday, May 20, 2021",
        attendees: 4,
        image: "images/event3.webp",
        description: `In this session, we will introduce to you the Red Hat OpenShift Container Platform. What is it exactly? What are the benefits of using it, and how can it add to an organization? We will go through some of the platform's specifications and capabilities, features, and benefits that mostly encourage developers to learn all about it and organizations to adapt to it.

In the hands-on session, we will deploy Watson Discovery's news mining application on OpenShift on IBM Cloud.

<strong>What will you learn:</strong>
• Get introduced to OpenShift Container Platform
• Learn how to deploy your applications on OpenShift
• Connect other IBM Cloud services to your application on OpenShift

<strong>Who should attend:</strong>
All Developers interested in Cloud-Native development are welcome to attend the webinar!

<strong>Speakers:</strong>
• Mohamed Sherif: Developer Advocate
• Mofaq Althiyabi: Developer Advocate`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/278216583/?eventOrigin=your_events"
    },
    {
        id: 4,
        title: "Explore Industries AI Use Cases",
        date: "Wednesday, April 7, 2021",
        attendees: 12,
        image: "images/event4.webp",
        description: `In attending this workshop, you learn and explore different use cases in AI applications. You will also learn about fundamental concepts; such as, Containers and Kubernetes projects. You will be able to learn how to deploy and consume ready-to-use deep learning microservices on Red Hat® OpenShift® to follow along with the speaker on the approach to deploy an object Detector microservice using the OpenShift web console and how to deploy an Image Caption Generator microservice using the OpenShift command-line interface (CLI).

<strong>Agenda:</strong>
• Human vision vs AI Vision
• Eye vision vs. Camera vision
• Into Machine Learning? Supervised Learning vs. Unsupervised Learning
• Into Deep Learning? Classification vs. Object Detection
• Examples of AI Vision Object Detection uses cases: Transportation vs. Healthcare vs. Security
• Explore AI use cases with NLP
• Intro to OpenShift, Kubernetes, and Docker

<strong>Hands-on:</strong>
AI integration with OpenShift: Deploy and consume ready-to-use deep learning microservices on OpenShift

<strong>Speaker:</strong> Mofaq Althiyabi, Developer Advocate IBM`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/277278416/?eventOrigin=your_events"
    },
    {
        id: 5,
        title: "A quick lab to explore the OpenShift development environment",
        date: "Thursday, March 11, 2021",
        attendees: 10,
        image: "images/event5.webp",
        description: `This session is for all the developers and technology enthusiasts out there who are interested in learning more about the Red Hat OpenShift World Tour series and learning some resources that would help them continue their learning journey afterward.

In this session, we will introduce to you the Red Hat OpenShift Container Platform. What is it exactly? What are the benefits of using it, and how can it add to an organization? We will go through some of the platform's specifications and capabilities, features, and benefits that mostly encourage developers to learn all about it and organizations to adapt to it.

In this first tutorial in the Build Smart on Kubernetes World Tour series, you explore the Red Hat® OpenShift® development environment and learn how to use many of the best parts of OpenShift. You'll use Red Hat OpenShift to deploy a sample Node.js application on IBM Cloud.

<strong>Skills you'll learn:</strong>
• The Red Hat OpenShift web client, command-line interface (CLI), and REST APIs
• OS management
• Projects and users
• Builds and deployments
• Networking
• Services, routes, and scaling
• Continuous integration (CI) and continuous delivery (CD)
• Source-to-Image

<strong>Who should attend:</strong>
A fresh developer into the World of RedHat OpenShift

<strong>Speakers:</strong>
• Mofaq Althiyabi: Developer Advocate
• Ahsan Khan: Developer Advocate`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/276560041/?eventOrigin=your_events"
    },
    {
        id: 6,
        title: "[Arabic]: Automate model building with AutoAI Cloud Pak for Data",
        date: "Tuesday, February 23, 2021",
        attendees: 6,
        image: "images/event6.webp",
        description: `In attending this webinar, you will be going over the fundamentals and theory of AutoAI, which will pave the road to the next steps in the session, where the speaker will dig deeper into the benefits of the services that are offered with AutoAI, which is a service on IBM Watson Studio. The use case along the tutorial presented in this session will clarify the objectives of using this service, as you will be able to follow along and see how this service could be applied easily, with few steps using IBM Cloud.

<strong>Agenda:</strong>
• The many benefits of AutoAI services
• Ways to handle regression and classification problems without code
• Ways tasks; such as, feature engineering, model selection, hyperparameter tuning, are done with AutoAI services
• Learn to choose the best model among the pipelines and ways to deploy and use these models via IBM Cloud Pak for Data platform

<strong>Who should attend:</strong>
A fresh developer into the world of Automation AI

<strong>Speaker:</strong> Mofaq Althiyabi`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/276361974/?eventOrigin=your_events"
    },
    {
        id: 7,
        title: "(Arabic) Part.1: Deep dive into Artificial Intelligence",
        date: "Monday, January 25, 2021",
        attendees: 11,
        image: "images/event7.webp",
        description: `In attending this workshop, you will learn and explore different use cases in AI applications. You will also learn about fundamental concepts; such as, Containers and Kubernetes projects. You will be able to learn how to deploy and consume ready-to-use deep learning microservices on Red Hat® OpenShift® to follow along with the speaker on the approach to deploy an object Detector microservice using the OpenShift web console and how to deploy an Image Caption Generator microservice using the OpenShift command-line interface (CLI).

<strong>Agenda:</strong>
• Human vision vs AI Vision
• Eye vision vs. Camera vision
• Into Machine Learning? Supervised Learning vs. Unsupervised Learning
• Into Deep Learning? Classification vs. Object Detection
• Examples of AI Vision Object Detection uses cases: Transportation vs. Healthcare vs. Security
• Explore AI use cases with NLP
• Introduction to OpenShift, Kubernetes, and Docker

<strong>Hands-on:</strong>
AI integration with OpenShift: Deploy and consume ready-to-use deep learning microservices on OpenShift

<strong>Speaker:</strong> Mofaq Althiyabi`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/275929159/?eventOrigin=your_events"
    }
];

// DOM elements
const eventsGrid = document.getElementById('eventsGrid');
const modal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalSource = document.getElementById('modalSource');
const closeBtn = document.querySelector('.close');

// Function to create event card HTML
function createEventCard(event) {
    return `
        <div class="event-card" onclick="openModal(${event.id})">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display: flex; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #6b7280 0%, #9ca3af 100%); color: white; font-weight: 500;\\'>Technical Presentation</div>'">
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <span class="event-date">${event.date}</span>
                    <span class="event-attendees">${event.attendees} attendees</span>
                </div>
            </div>
        </div>
    `;
}

// Function to populate events grid
function populateEvents() {
    eventsGrid.innerHTML = events.map(event => createEventCard(event)).join('');
}

// Function to open modal
function openModal(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        modalTitle.textContent = event.title;
        modalBody.innerHTML = `
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Attendees:</strong> ${event.attendees}</p>
            <div style="margin-top: 20px;">${event.description}</div>
        `;
        modalSource.href = event.url;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateEvents();
});

// Make openModal function global so it can be called from onclick
window.openModal = openModal;

