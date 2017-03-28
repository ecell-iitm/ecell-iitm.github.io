(function($){
	"use strict";
	// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('button.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top -170)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 191
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    $(window).load(function () {
	
	'use strict';
        // will first fade out the loading animation
	$(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	$(".preloader").delay(1000).fadeOut("slow");
});

    

	var webInHtml=""
	var webNewCompanyModal=""
	var webNewCompanyModalBtn=""
	var webNewCompany=""

	var appInHtml=""
	var appNewCompanyModal=""
	var appNewCompanyModalBtn=""
	var appNewCompany=""

	var mlInHtml=""
	var mlNewCompanyModal=""
	var mlNewCompanyModalBtn=""
	var mlNewCompany=""

	var marInHtml=""
	var marNewCompanyModal=""
	var marNewCompanyModalBtn=""
	var marNewCompany=""

	var bdInHtml=""
	var bdNewCompanyModal=""
	var bdNewCompanyModalBtn=""
	var bdNewCompany=""

	var daInHtml=""
	var daNewCompanyModal=""
	var daNewCompanyModalBtn=""
	var daNewCompany=""

	var gdInHtml=""
	var gdNewCompanyModal=""
	var gdNewCompanyModalBtn=""
	var gdNewCompany=""


	var contentInHtml=""
	var contentNewCompanyModal=""
	var contentNewCompanyModalBtn=""
	var contentNewCompany=""
	
	var softInHtml=""
	var softNewCompanyModal=""
	var softNewCompanyModalBtn=""
	var softNewCompany=""
	
	var qaInHtml=""
	var qaNewCompanyModal=""
	var qaNewCompanyModalBtn=""
	var qaNewCompany=""

	var opInHtml=""
	var opNewCompanyModal=""
	var opNewCompanyModalBtn=""
	var opNewCompany=""

	var imgURL="assets/CompanyLogos/"
	
	$(document).ready(function(){
		$('.loader').removeClass('loader')
	})


	var webDevcompanies=[
	{
		"name":"Detect Technologies",
		"place":"Chennai",
		"image":imgURL+"detect.jpg",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":' Rs 20,000 per month with performance based bonuses',
		"applylink":"https://docs.google.com/forms/d/e/1FAIpQLScp-d2wFUdfnrIHjjsTcgacUNB0LvKtJMD9nozq9YNGwrESPg/viewform",
		"number":"2",
		"addr":"Detect Technologies, Incubation Cell, Research Park, IIT Madras, Chennai 600113 , Tamil Nadu , India  ",
		"about":"Detect Technologies is a company with technological innovation as its core principle to create solutions for asset monitoring in large process industries. Its flagship product GUMPS is the first of its kind Industrial IoT based Pipeline monitoring sensor that can detect leaks months before they happen thereby preventing catastrophes. Its sister product, Noctua is a smart autonomous drone designed for intelligent monitoring of large assets using computer vision, thermography and data processing techniques.",
		"jobDescPreq":'<strong>Title</strong> : Web Development Lead. Selected intern shall be responsible for the complete development of the company portal anddatabase for storage of visual models of large inspected structures, as well as the cloud platform for continuous acquisition and updated displaying/ comparison of data from the company'+"'"+'s IoT based sensor, GUMPS. The portal will have secure login for use and access by Fortune 500 companies like Reliance, Tata , Adani group etc.<br><label>Prerequisites : </label><br>Knowledge of atleast two of the following : <strong>PHP, Ruby, Python, Java.</strong> Prior experience in backend web development.Basic knowledge of frontend web development <strong>(HTML, CSS, Javascript), WebGL and Node JS</strong> is also expected. ',
		"shortlistProc":"Resume Shortlist followed by HR Interview and Technical test."

	},
	{
		"name":"NoteShare.in",
		"place":"Chennai",
		"image":imgURL+"noteshare.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":' Rs 10,000',
		"applylink":"https://docs.google.com/forms/d/1Xr_xUapaAAQY6cCrCH503GaF9Vsm4QEItG5lQPSpZ4U/viewform",
		"number":"1",
		"addr":"3rd floor, IIT Madras Research park, Chennai 600113 , Tamil Nadu , India  ",
		"about":"NoteShare is a social platform for sharing classroom related documents. We aim to interconnect learners and educators to provide easy access to quality content.",
		"jobDescPreq":'Full stack : MEAN stack',
		"shortlistProc":"Assignment, Interview"

	},
	{
		"name":"Caval",
		"place":"Chennai",
		"image":imgURL+"caval.png",
		"startDate":"May 2017",
		"duration":"4 weeks",
		"stipend":'Rs 2,000 lump sum depending on work',
		"applylink":"https://docs.google.com/forms/d/17eKbE3Nn69xyR7ZG2-FysGUrA26HS0_6XO3LYmhyd-g/viewform",
		"number":"2",
		"addr":"Room 119, Narmada Hostel , IIT Madras ,Chennai 600036 , Tamil Nadu , India",
		"about":"A technological based startup providing one stop solution for all types of Vehicle repairs. We are already operational in IIT Madras, now in the phase of expansion in Chennai.",
		"jobDescPreq":'<label>Prerequisites : </label> &nbsp; CSS, HTML, PHP, Bootstraps',
		"shortlistProc":"If you want to be a part of the history in making, mail your CV's to spatra00@gmail.com, Shortlisted candidates will be called for interview. Physical presence during the internship period is must"

	},
	{
		"name":"Climber Knowledge and Careers private ltd.",
		"place":"Virtual",
		"image":imgURL+"Climberlogo.png",
		"startDate":"15th April 2017",
		"duration":"8 weeks",
		"stipend":' Rs 5,000',
		"applylink":"https://docs.google.com/forms/d/1RRco5-Wb30LtyorSE21Lm9gaVuJaqc_87wibCYVKQQc/viewform",
		"number":"2",
		"addr":"NSRCEL, IIM Bangalore, Bannerghatta Road , Bengaluru 560076 , Karnataka , India",
		"about":"The Climber is an NSRCEL, IIM Bangalore incubated Edu-Tech startup that helps students Discover and pursue their passions. Our main product, MyCaptain, is an Online Youth mentoring Youth Program where young achievers guide and mentor school and College students who share the same Career Aspirations.",
		"jobDescPreq":'Will Work on WebApp of new product, and an internal Sales Management Application.Handle Dev-Ops, Work on MyCaptain WebApp.<br><label>Prerequisites : </label><br> React JS, HTML, CSS, Javascript, WebSocket, WebRTC (optional), Ruby on Rails, AWS. ',
		"shortlistProc":"Initial Selection based on CV and Work Experience; thereafter, an Interview by the respective Heads / Managers."

	},
	{
		"name":"Shipsy",
		"place":"Gurgaon",
		"image":imgURL+"shipsy.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":'Rs 15,000 - 25,000 lump sum based on performance',
		"applylink":"https://docs.google.com/forms/d/1wB6x4GHUcWyjnXWuvFy1pcJNHthvtstVaTmpx2O-V6g/viewform",
		"number":"1 - 2",
		"addr":"B23, Sushant Lok 1 , Gurgaon 122002 , Haryana 122002 ,India",
		"about":"<p>Shipsy has built a platform for operations teams, where managers can define their own alerts criteria for events that could affect service levels or operational efficiency and get notified in real-time. They have built a platform on top of Apache Spark to achieve this real-time analysis. Machine learning is used so that alerts get more predictive with time.</p><p>Uber is able to uphold high service levels from drivers by keeping a constant eye on them. They are bringing the same to the supply chain industry. Shipsy has a core team with 8 alumni from Computer Science/Electrical engineering background from IIT Madras and IIT Delhi. The total team strength is 25 working to ensure that users get a seamless interface to create and receive these alerts.</p><p>The system aims to alert operations managers when something is going wrong, rather than them having to keep calling and following up with the workforce. Users can define IFTTT (If This Then That) type alerts using the platform. Some examples of these are:<ol><li>Truck Idle time greater than particular value</li><li>Expected time of arrival delayed by more than X hours</li><li>Pickup time exceeded by certain number</li><li>More than n updates from same location</li><li>Truck deviates more than X km from ideal path</li></ol>These and more can be defined in real time by users and they can decide how they want to be notified - through the dashboard, mobile, email and more. Shipsy is currently processing more over 10 million shipments a month through our system with customers such as Holisol, DotZot, DTDC Express and DTDC Supply Chain.",
		"jobDescPreq":'<label>Backend development:</label><p>We are looking for backend developers to join our friendly and enthusiastic team. You’ll be working with a large amount of autonomy developing features that are critical to the success of Shipsy. You’ll be working alongside the team backend micro-services with a strong focus on quality, scalability, availability, simplicity, performance, operability, security. You’ll be assisting with planning and defining requirements specification as well laying down the product architecture.</p>Desired skills (not mandatory)<ul><li>Experience in working with RESTful APIs</li> <li>Experience of developing applications in node.js </li><li>Knowledge of distributed source control – e.g. Git.</li> <li> Experience and interest in scaling high-performance systems</li></ul>',
		"shortlistProc":"On call interview + solving a real life problem in the domain of interest of applicant"

	},
	{
		"name":"Verloop",
		"place":"Bengaluru",
		"image":imgURL+"verloop.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":'Rs 20,000',
		"applylink":"https://docs.google.com/forms/d/15TQuw59EJ0ZY_TMfHwqcUYMqGIveio0yfO5EQNB8z9k/viewform",
		"number":"2",
		"addr":"2nd Floor, 212/A, 1st Main Road, Domlur 2nd Stage , Bengaluru 560071, Karnataka ,India",
		"about":"<p>Verloop is a Customer Support and Engagement Automation platform. We use Machine Learning to automate responses and reduce human involvement in answering queries.</p><p>Verloop is a Open Source driven company. We heavily contribute back to products we use and all internal tools are open sourced too.</p><p>Verloop is deployed in Fortune 500 companies in US, Banks, Insurance and major retail companies in India.</p>",
		"jobDescPreq": 'Work on live product in feature updates and new development.<br><label>Prerequisites : </label>Javascript, HTML5, CSS3, Meteor.js(good to have)',
		"shortlistProc":"Github profile, Open Source contributions, Solving Challenge, Discussion"

	},
	{
		"name":"Spoyl Tech Solutions Private Limited",
		"place":"Bengaluru",
		"image":imgURL+"spoyl.png",
		"startDate":"May 2017",
		"duration":"Minimum 8 weeks",
		"stipend":' Rs 8000-15,000',
		"applylink":"",
		"number":"1",
		"addr":"H.NO-572, 2nd Floor, 20th Main, 1st Cross, 8th Block, Above Biba Showroom, KHB Block, Koramangala 560095, Karnataka",
		"about":"Spoyl is a mobile-only platform to buy/sell new and pre-loved fashion! Users can start selling/sharing their fashion/style within 60 seconds or less. Fashionmongers can shop for new/like-new items at prices up to 70% off retail. Chat with sellers before making a purchase and save big while shopping your favourite closets on the go!",
		"jobDescPreq":' We are looking for an AngularJS Developer responsible for the client side of our service. The primary focus will be to implement a complete user interface in the form of a desktop web app. Main duties will include creating modules and components and coupling them together into a functional app. The overview of the design will be delivered to you, together with a few HTML templates. Intern will work in a team with the back-end developer, and communicate with the API using standard methods. A thorough understanding of all of the components of our platform and infrastructure is required.<br><br>Responsibilities:<ul><li>Delivering a complete front end application</li><li>Ensuring high performance on desktop web app</li><li>Cooperating with the back-end developer in the process of building the RESTful API</li><li>Communicating with external web services.</li></ul>Skills and Qualifications :<ul><li>Proficiency with JavaScript and HTML5</li><li>Professional, precise communication skills</li><li>Deep knowledge of AngularJS practices and commonly used modules based on extensive work experience</li></ul>',
		"shortlistProc":"Skype Interview/Hangouts"

	},
	{
		"name":"Real Tycoon",
		"place":"Chennai",
		"image":imgURL+"real-tycoon.jpg",
		"startDate":"April 2017",
		"duration":"5 weeks",
		"stipend":' Based on performance-upto  5k.',
		"applylink":"",
		"number":"2",
		"addr":"4th floor, Gokul Arcade , Chennai 600042 , Tamil Nadu , India  ",
		"about":"Real Tycoon is a B2B Real Estate firm and a media agency put together. We are focused on helping businesses and investment firms to find them properties for them to move in and invest in,  respectively by reaching direct owners or through a dedicated team of brokers, who partner with Real Tycoon and on the other side in addition to the above role, we also add value to the community interested in real estate, as a media agency.",
		"jobDescPreq":' Web Development - Php / python, html / Css & mysql or mssql server',
		"shortlistProc":"Interview and a task"

	},
	{
		"name":"Nadhi Information Technologies",
		"place":"Chennai",
		"image":imgURL+"nadhi.jpg",
		"startDate":"Flexible",
		"duration":"Flexible",
		"stipend":' Rs 8,000',
		"applylink":"https://docs.google.com/forms/d/11Oj-U0SPpCKSQTUTyZmoqYLkqH3BgkapCEkBEhuTngE/viewform",
		"number":"1",
		"addr":"22 Venkatraman Street, T. Nagar , Chennai 600017 , Tamil Nadu, India  ",
		"about":"Nadhi makes infrastructure and construction projects (power, bridges, roads etc.) run smarter, faster and cheaper by using our proprietary alogrithms to provide management with real time analytics and data driven decision support on their handhelds.<br><br>In other words, we're cool as hell, and a great bunch of people to work with ;)",
		"jobDescPreq":'Build the next generation of our web application using the latest tools, libraries and frameworks out there.<br><br>RESTful web application development with good knowledge of Javascript and latest frameworks.',
		"shortlistProc":"Personal interviews of shortlisted candidates. Will include programming, problem solving and check for culture fit."

	},
	{
		"name":"Furlenco",
		"place":"Bangalore",
		"image":imgURL+"furlenco.jpg",
		"startDate":"May 2017",
		"duration":"8 - 10 weeks",
		"stipend":' Rs 20,000 per month',
		"applylink":"https://docs.google.com/forms/d/1Rx76sP-UReNOg4dsA11jPFTfRSPqqHSZDHKRnrDUG8U/viewform",
		"number":"5",
		"addr":"Krishna Annex, Near Silk Board Junction, Sector 6, HSR Layout, Bengaluru 560102 , Karnataka , India",
		"about":"Furlenco is India’s first and only Home Furniture Subscription Program based out of Bangalore.<br> Furlenco offers a range of curated home furniture experiences, designed to suit the lifestyle needs of varied audiences spanning students to families and expatriates. Our solutions are convenient, cost-effective and offer access to quality furniture with the added advantage of being able to exchange it at will.<br>To deliver the best possible home experience, our furniture is designed and developed in-house by a team of experienced designers who follow a strict development process, resulting in an enhanced product experience. We aim to simplify the home decorating process by providing  seamless assistance and support that is designed to delight!",
		"jobDescPreq":'Please visit Link  <a href="https://jobs.furlenco.com/jobs/backend-engineer-platform-engineer" target="_blank">https://jobs.furlenco.com/jobs/backend-engineer-platform-engineer</a>',
		"shortlistProc":"<ul><li>Students express interest</li><li>Assignment shared</li><li>Assignment to be submitted</li> <li>Telephonic/ Skype calls for technical discussion</li><li>Offer roll-out</li>"

	},
	{
		"name":"Grow Fit",
		"place":"Bangalore",
		"image":imgURL+"grow-fit.png",
		"startDate":"May 2017",
		"duration":"8 - 10 weeks",
		"stipend":' Rs 10,000 - Rs 15,000 per month',
		"applylink":"",
		"number":"1",
		"addr":"212/A, Double Road, Bengaluru 560071 , Karnataka ,India",
		"about":"Over 300 million Indians are at risk of lifestyle diseases like diabetes and have nowhere to turn to for support. Grow Fit prevents lifestyle diseases through a combination of data science, medical science and behavioral insights. We believe in empowering Indians to prevent and even reverse lifestyle disease by addressing its root causes - nutrition, mental wellness, stress, sleep and activity through a combination of expert advice and nutrition delivered to your doorstep.",
		"jobDescPreq":'Web Front-End Engineering Intern (AngularJS)We are looking for an AngularJS Developer responsible for our progressive webapp. <br>The primary focus will be to<ol><li>work on our existing progressive web app</li><li>ensure the performance, quality, and responsiveness of applications</li><li>collaborate with a team to define, design, and ship new features</li><li>identify and solve bottlenecks and fix bugs</li></ol><br>Skills and Qualifications:<ol><li>Deep knowledge of AngularJS practices and commonly used modules based on extensive work experience</li><li>Creating self-contained, reusable, and testable modules and components</li><li> Extensive knowledge of CSS and JS methods for providing performant visual effects</li><li>Experience working with Github or any versioning system</li><li>Having worked on Firebase APIs is a big plus</li><li>Ability to design beautiful (not only working) interfaces is a big plus</li><li> Should provide with portfolio of previous projects</li><li>Professional, precise communication skills</li></ol>',
		"shortlistProc":"We will be having <ol><li>Resume shortlisting</li><li>Technical Phone Interview</li> <li>Small Project Assignment (Optional)</li><li>Physical Interview</li></ol>"

	},
	{
        "name":"BoxMySpace",
        "place":"Mumbai",
        "image":imgURL+"box.png",
        "startDate":"May 2017",
        "duration":"Flexible",
        "stipend":'Rs 10,000',
        "applylink":"https://docs.google.com/forms/d/1GO5B-DRLEJOSM0aqzoUwAHDLGEr6yHg_W8nk-gvTtXI/viewform",
        "number":"1",
        "addr":"1a, Krishna Kunj, Tagore Road,, Mumbai 400054 , Maharashtra , India  ",
        "about":"<p>BoxMySpace is an On-Demand storage platform for consumers and businesses.</p><p>BoxMySpace provides safe and secure storage options for consumers looking to rent space to keep their stuff while they are away or if they just want to create more living space for themselves.</p><p>We also provides warehouse storage for businesses on a pay per use flexible storage model. For more information on our warehouse storage please visit our warehousing section</p>",
        "jobDescPreq":'Monitor technicalities involved in the web development part and also different departments and processes',
        "shortlistProc":"Interview - Round 1- Phone Call<br> Round 2 - In Person or video call."

    },
	    {
        "name":"FASTNEXT EDUCATION PVT LTD",
        "place":"Chennai,Bengaluru",
        "image":imgURL+"xwn1.png",
        "startDate":"Whenever",
        "duration":"Flexible",
        "stipend":'Unpaid',
        "applylink":"https://docs.google.com/forms/d/1jU05stQy4yLr-5vCSQ3B7XXE5cnY_SQNPF0ihTKhMOE/viewform",
        "number":"1 in each of the two cities",
        "addr":"NASSCOM 10k Warehouse, Chennai 600036 , Tamilnadu , India  ",
        "about":"We're building AI algorithms to match candidates and companies.",
        "jobDescPreq":'Prerequisites: Django, jQuery',
        "shortlistProc":"Telephonic - Problem statement - PI"

    }, 
	{
		"name":"DrivoJoy",
		"place":"Bengaluru",
		"image":imgURL+"drivojoy.gif",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":' Rs 10,000',
		"applylink":"https://docs.google.com/forms/d/1RTlXsqtlaBk2iqYMA67Be3bdTyN085ASVykGoV3LfnI/viewform",
		"number":"1",
		"addr":"L6 First Floor, 2nd Main Sec 6 HSR Layout , Bengaluru 560102, Karnataka , India  ",
		"about":"We are a Bangalore based startup with demonstrated ability and an unparalleled experience in on-demand economy and technology. We call ourselves a disruptive force trying to revive the 2-wheeler servicing industry, that has not changed much in decades. Our team dwells some hungry, passionate professionals from a multitude of backgrounds including alumni from IIT Bombay, IIT Delhi and ex-employees of Olacabs and PayPal. We are on a quest to challenge the status quo and push the boundaries of innovation by transforming the servicing and repair of 2-wheelers into a technology-driven and hassle-free experience.",
		"jobDescPreq":' Frontend(UI/UX)-Desired skills and Experience: HTML5, CSS3, JavaScript, AngularJS',
		"shortlistProc":"Telephonic / Skype"
	}
	]
	

	var appDevcompanies=[
	{
		"name":"Detect Technologies",
		"place":"Chennai",
		"image":imgURL+"detect.jpg",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":' Rs 20,000 per month with performance based bonuses',
		"applylink":"https://docs.google.com/forms/d/e/1FAIpQLScp-d2wFUdfnrIHjjsTcgacUNB0LvKtJMD9nozq9YNGwrESPg/viewform",
		"number":"2",
		"addr":"Detect Technologies, Incubation Cell, Research Park, IIT Madras, Chennai 600113 , Tamil Nadu , India  ",
		"about":"Detect Technologies is a company with technological innovation as its core principle to create solutions for asset monitoring in large process industries. Its flagship product GUMPS is the first of its kind Industrial IoT based Pipeline monitoring sensor that can detect leaks months before they happen thereby preventing catastrophes. Its sister product, Noctua is a smart autonomous drone designed for intelligent monitoring of large assets using computer vision, thermography and data processing techniques.",
		"jobDescPreq":' Software Development /Application Development /UI/UX',
		"shortlistProc":"Resume Shortlist followed by HR Interview and Technical test."

	},
	{
		"name":"NoteShare.in",
		"place":"Chennai",
		"image":imgURL+"noteshare.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":' Rs 10,000',
		"applylink":"https://docs.google.com/forms/d/1WU7DZGFlzAqCSTHxQ8ysoTF_UkMnukHPpYEojvB83ek/viewform",
		"number":"1",
		"addr":"3rd floor, IIT Madras Research park, Chennai 600113 , Tamil Nadu , India  ",
		"about":"NoteShare is a social platform for sharing classroom related documents. We aim to interconnect learners and educators to provide easy access to quality content.",
		"jobDescPreq":'IOS/Android developer',
		"shortlistProc":"Assignment, Interview"

	},
	{
		"name":"Caval",
		"place":"Chennai",
		"image":imgURL+"caval.png",
		"startDate":"May 2017",
		"duration":"4 weeks",
		"stipend":'Rs 2,000 lump sum depending on work',
		"applylink":"https://docs.google.com/forms/d/e/1FAIpQLSeHCXMF86mxdVAtCLdS_0gDJNdH5tqG7RPwtIwELsaCG8z18g/viewform",
		"number":"1",
		"addr":"Room 119, Narmada Hostel , IIT Madras ,Chennai 600036 , Tamil Nadu , India",
		"about":"A technological based startup providing one stop solution for all types of Vehicle repairs. We are already operational in IIT Madras, now in the phase of expansion in Chennai.",
		"jobDescPreq":'<label>Prerequisites : </label> &nbsp;Android Studio, XML, Java,',
		"shortlistProc":"If you want to be a part of the history in making, mail your CV's to spatra00@gmail.com, Shortlisted candidates will be called for interview. Physical presence during the internship period is must"

	},
	{
        "name":"Involve",
        "place":"Chennai",
        "image":imgURL+"involve.jpg",
        "startDate":"May 2017",
        "duration":"8 weeks",
        "stipend":' Rs 4,000 (Can be increased based on the quality of work)',
        "applylink":"",
        "number":"2",
        "addr":"IIT Madras, Chennai 600036 , Tamilnadu , India  ",
        "about":"Involve is a social enterprise which creates a platform where senior school students are trained and mentored to teach their juniors. This state of the art peer teaching initiative promises to be an affordable solution for the education problems of the country.",
        "jobDescPreq":'Should have prior experience in back-end and front-end app development',
        "shortlistProc":"Resume and interview"

    }, 
	{
        "name":"Grow Fit",
        "place":"Bangalore",
        "image":imgURL+"grow-fit.png",
        "startDate":"May 2017",
        "duration":"8 weeks",
        "stipend":' Rs 10,000 - Rs 15,000 per month',
        "applylink":"",
        "number":"2",
        "addr":"212/A, Double Road, Bengaluru 560071 , Karnataka ,India",
        "about":"Over 300 million Indians are at risk of lifestyle diseases like diabetes and have nowhere to turn to for support. Grow Fit prevents lifestyle diseases through a combination of data science, medical science and behavioral insights. We believe in empowering Indians to prevent and even reverse lifestyle disease by addressing its root causes - nutrition, mental wellness, stress, sleep and activity through a combination of expert advice and nutrition delivered to your doorstep.",
        "jobDescPreq":'Android Engineering intern<p>We need android engineering intern to work on our portfolio of apps including our chat app with health tracking, and to ship new features.</p>Skills and Qualifications:<ol><li>High proficiency with development tools and workflows (modern source control systems, unit testing, continuous workflow, and so on)</li><li>Knowledge of Android Material Design</li><li>Strong with Java, Eclipse, OOP Design, JSON, Javascript, Android Studio</li><li>Ability to architecture a complete mobile application </li><li>Expert level understanding and knowledge of Android application architecture, at least 1 Android applications available for demo.</li><li>Who can take ownership of the product</li><li>Knowledge of RxJava is a big plus</li></ol>iOS Developer<br>Knowledge and Skills Required: <ol><li>Strong with objective c and xcode, OOP Design, JSON, REST API, Apple SDK</li><li>Strong hands-on coding and software design experience in PHP or Python APIs.</li></li>Expert level understanding and knowledge of Android application architecture, at least 1 iOS applications available for demo</li><li>Solid OOP and software design knowledge – you should know how to create software that’s extensible, reusable and meets desired architectural object</li></ol>',
        "shortlistProc":"We will be having <ol><li>Resume shortlisting</li><li>Technical Phone Interview</li> <li>Small Project Assignment (Optional)</li><li>Physical Interview</li></ol>"

    },
	{
		"name":"Perpule (Delvit Solutions Private Limited)",
		"place":"Bengaluru",
		"image":imgURL+"perpule.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":'Rs 10,000 - Rs 15,000 per month',
		"applylink":"https://docs.google.com/forms/d/1nmkmiV4OsUiTIi2Jn6JzbFsWNgdv5l-ybGpoZo9nl9U/viewform",
		"number":"1",
		"addr":"Thought Factory, Diamond District, Domlur , Bengaluru 560040, Karnataka ,India",
		"about":"Perpule aims to provide a unique and queue-less checkout experience for shoppers at retail stores. Their vision is to enhance the shopping experience of customers in-store, by making it more engaging and personal. The smartphone-based software solution can be scaled across various retail outlets and provides retailers deep insights about their customers allowing them to create personalized campaigns.",
		"jobDescPreq":' Android/iOS developers with live apps in the app stores',
		"shortlistProc":"</ol><li>Resume shortlist</li><li>Phone Screen</li><li>Skype interview/In-person</li></ol>"

	},
	{
		"name":"Nadhi Information Technologies",
		"place":"Chennai",
		"image":imgURL+"nadhi.jpg",
		"startDate":"Flexible",
		"duration":"Flexible",
		"stipend":' Rs 8,000',
		"applylink":"https://docs.google.com/forms/d/1EBVPgenLiT8DiXDClw-UJnoaHDcEhlfhh1QZWhgdDz4/viewform",
		"number":"1",
		"addr":"22 Venkatraman Street, T. Nagar , Chennai 600017 , Tamil Nadu, India  ",
		"about":"Nadhi makes infrastructure and construction projects (power, bridges, roads etc.) run smarter, faster and cheaper by using our proprietary alogrithms to provide management with real time analytics and data driven decision support on their handhelds.<br><br>In other words, we're cool as hell, and a great bunch of people to work with ;)",
		"jobDescPreq":'Build fast, intuitive apps on Android, iOS and Windows phone to take our solutions to the "last mile".<br><br>Mobile app development experience needed.',
		"shortlistProc":"Personal interviews of shortlisted candidates. Will include programming, problem solving and check for culture fit."

	},
	{
		"name":"Furlenco",
		"place":"Bangalore",
		"image":imgURL+"furlenco.jpg",
		"startDate":"May 2017",
		"duration":"8 - 10 weeks",
		"stipend":' Rs 20,000 per month',
		"applylink":"https://docs.google.com/forms/d/1Ofwjf8-McrC8NmLp_W3VLCMBZIdn1vryase4Ufubj1s/viewform",
		"number":"2",
		"addr":"Krishna Annex, Near Silk Board Junction, Sector 6, HSR Layout, Bengaluru 560102 , Karnataka",
		"about":"Furlenco is India’s first and only Home Furniture Subscription Program based out of Bangalore.<br> Furlenco offers a range of curated home furniture experiences, designed to suit the lifestyle needs of varied audiences spanning students to families and expatriates. Our solutions are convenient, cost-effective and offer access to quality furniture with the added advantage of being able to exchange it at will.<br>To deliver the best possible home experience, our furniture is designed and developed in-house by a team of experienced designers who follow a strict development process, resulting in an enhanced product experience. We aim to simplify the home decorating process by providing  seamless assistance and support that is designed to delight!",
		"jobDescPreq":'CS/IT  Good grasp of RoR',
		"shortlistProc":"<ul><li>Students express interest</li><li>Assignment shared</li><li>Assignment to be submitted</li> <li>Telephonic/ Skype calls for technical discussion</li><li>Offer roll-out</li>"

	},
	
	]
	var bdDevcompanies=[
	{
		"name":"Perpule (Delvit Solutions Private Limited)",
		"place":"Bengaluru",
		"image":imgURL+"perpule.png",
		"startDate":"May 2017",
		"duration":"8 - 12 weeks",
		"stipend":'Rs 10,000 per month',
		"applylink":"https://docs.google.com/forms/d/1v5qjcrU_Pm8pJOaSyeHxGzyhjQ9yiESvinYE4LbFgGM/viewform",
		"number":"1",
		"addr":"Thought Factory, Diamond District, Domlur , Bengaluru 560040, Karnataka ,India",
		"about":"Perpule aims to provide a unique and queue-less checkout experience for shoppers at retail stores. Their vision is to enhance the shopping experience of customers in-store, by making it more engaging and personal. The smartphone-based software solution can be scaled across various retail outlets and provides retailers deep insights about their customers allowing them to create personalized campaigns.",
		"jobDescPreq":'Should have experience in a client facing role earlier. (e.g. Spons in Saarang/Shaastra) .Ability to generate leads and reach out to network',
		"shortlistProc":"</ol><li>Resume shortlist</li><li>Phone Screen</li><li>Skype interview/In-person</li></ol>"

	},
	{
        "name":"BoxMySpace",
        "place":"Mumbai",
        "image":imgURL+"box.png",
        "startDate":"May 2017",
        "duration":"Flexible",
        "stipend":'Rs 10,000',
        "applylink":"https://docs.google.com/forms/d/1T9WGJZcMcYJdTh1LJf1inEsODnFqq4TMZpx8fJlzWXk/viewform",
        "number":"1",
        "addr":"1a, Krishna Kunj, Tagore Road,, Mumbai 400054 , Maharashtra , India  ",
        "about":"<p>BoxMySpace is an On-Demand storage platform for consumers and businesses.</p><p>BoxMySpace provides safe and secure storage options for consumers looking to rent space to keep their stuff while they are away or if they just want to create more living space for themselves.</p><p>We also provides warehouse storage for businesses on a pay per use flexible storage model. For more information on our warehouse storage please visit our warehousing section</p>",
        "jobDescPreq":'<p>Take Care of the inbound and outbound leads.</p><p>Make Analysis of different segments</p> ',
        "shortlistProc":"Interview - Round 1- Phone Call<br> Round 2 - In Person or video call."

    }, 
	{
		"name":"Real Tycoon",
		"place":"Chennai",
		"image":imgURL+"real-tycoon.jpg",
		"startDate":"April 2017",
		"duration":"8 weeks",
		"stipend":' Deal on deal basis - entirely depends on the value he/ she adds to company',
		"applylink":"",
		"number":"2",
		"addr":"4th floor, Gokul Arcade , Chennai 600042 , Tamil Nadu , India  ",
		"about":"Real Tycoon is a B2B Real Estate firm and a media agency put together. We are focused on helping businesses and investment firms to find them properties for them to move in and invest in,  respectively by reaching direct owners or through a dedicated team of brokers, who partner with Real Tycoon and on the other side in addition to the above role, we also add value to the community interested in real estate, as a media agency.",
		"jobDescPreq":'Excellent communication skill in both Tamil[optional-but knowing tamil shall add value] and English, should be good at understanding people and behavioural patterns.',
		"shortlistProc":"Interview and a task"

	},
	{
		"name":"Quick Quotes",
		"place":"Chennai",
		"image":imgURL+"quick-quotes.png",
		"startDate":"Immediate",
		"duration":"8 weeks",
		"stipend":'Rs 3,500 per month',
		"applylink":"",
		"number":"3",
		"addr":"Micromen - #7 4th floor Gokul Arcade west wing Adyar Chennai 600020 , Tamil Nadu , India  ",
		"about":"What is QuickQuotes ? Who owns it ?<p>QuickQuotes is an online portal where Vendors can receive genuine Request for Quotations(RFQ) from several top builders across Chennai. It is owned by AKI E-Commerce Ventures Pvt.Ltd. with the founding team having more than 25 years of experience handling the construction & realestate domain. Micromen software solutions pvt. Ltd. its sister concern has more than 100+ top builders signed up in its ERP solutions providing direct access to premium builders across Chennai.</p>How does it work ?<p>Suppliers will receive curated RFQ’s from builders across Chennai with clear material requirements, specification, qty, brand & terms. Supplier can quote the best rate against the RFQ received along with terms acceptance. But the suppliers will not know who the builder is until the order is placed by the builder.</p>",
		"jobDescPreq":'Business development, involves traveling & product presentation / registration',
		"shortlistProc":"Direct interview"

	},

	{
		"name":"Shipsy",
		"place":"Gurgaon",
		"image":imgURL+"shipsy.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":'Rs 10,000 - 20,000 lump sum based on performance',
		"applylink":"https://docs.google.com/forms/d/16WNcH-kT-856dCpPJCxiBK5gdvvCdoUqSECrfxpcjb4/viewform",
		"number":"1 - 2",
		"addr":"B23, Sushant Lok 1 , Gurgaon 122002 , Haryana 122002 ,India",
		"about":"<p>Shipsy has built a platform for operations teams, where managers can define their own alerts criteria for events that could affect service levels or operational efficiency and get notified in real-time. They have built a platform on top of Apache Spark to achieve this real-time analysis. Machine learning is used so that alerts get more predictive with time.</p><p>Uber is able to uphold high service levels from drivers by keeping a constant eye on them. They are bringing the same to the supply chain industry. Shipsy has a core team with 8 alumni from Computer Science/Electrical engineering background from IIT Madras and IIT Delhi. The total team strength is 25 working to ensure that users get a seamless interface to create and receive these alerts.</p><p>The system aims to alert operations managers when something is going wrong, rather than them having to keep calling and following up with the workforce. Users can define IFTTT (If This Then That) type alerts using the platform. Some examples of these are:<ol><li>Truck Idle time greater than particular value</li><li>Expected time of arrival delayed by more than X hours</li><li>Pickup time exceeded by certain number</li><li>More than n updates from same location</li><li>Truck deviates more than X km from ideal path</li></ol>These and more can be defined in real time by users and they can decide how they want to be notified - through the dashboard, mobile, email and more. Shipsy is currently processing more over 10 million shipments a month through our system with customers such as Holisol, DotZot, DTDC Express and DTDC Supply Chain.",
		"jobDescPreq":'There are mainly two aspects of Business Expansion:<ol><li>Business Development:<ol type="a"><li>Sales: Structuring our approach towards sales of existing product line</li> <li> Business Intelligence: Deploying on field executives to gather intelligence about problems existing in different aspects of logistics industry and feeding this back to product development </li> </ol><li>Branding catering to Sustainable Business presence:<ol type="a"><li> Supply Chain industry: Formulating and executing a plan to establish Shipsy as a “Thought Leader” in this industry</li>  <li>Talent: Building a brand to attract the best talent</li> <li>Investors: Establishing Shipsy as a company that has evolved to become a product suite for predictive analytics in the supply chain</li><li>Startup circle: Engaging other startups and sharing expertise/knowledge</li></ol> </ol>The role would also involve very deep understanding of the product and the technology that has gone into building it.',
		"shortlistProc":"On call interview + solving a real life problem in the domain of interest of applicant"

	},
	{
		"name":"Furlenco",
		"place":"Chennai",
		"image":imgURL+"furlenco.jpg",
		"startDate":"April 2017",
		"duration":"8 weeks",
		"stipend":'Rs 5,000 per month',
		"applylink":"https://docs.google.com/forms/d/1N2eu3EaeLLnxS6TFbc01NiykVwV1wOlPItiryjS2fBc/viewform",
		"number":"4",
		"addr":"Krishna Annex, Near Silk Board Junction, Sector 6, HSR Layout, Bengaluru 560102 , Karnataka, India  ",
		"about":"Furlenco is changing the way people access furniture. We offer furniture on rent and are setting new industry standards in the process. Our products feature award-winning design, and we deliver in as quickly as 72 hours. Also, our design process is user-inspired, allowing us to offer furniture that truly enhances their lives. Apart from quick deliveries and free set-up, Furlenco also pairs every unit of furniture with matching home décor and soft furnishing, allowing you to furnish your entire home in one click.",
		"jobDescPreq":'Please visit Link <a href="https://jobs.furlenco.com/jobs/inside-sales-executive" target="_blank">https://jobs.furlenco.com/jobs/inside-sales-executive</a>',
		"shortlistProc":"<ul><li>Shortlist on basis of profiles</li><li>Assignment</li><li>Telephonic Screening</li></ul>"

	},
	]
	var gdDevcompanies=[
	{
		"name":"Perpule (Delvit Solutions Private Limited)",
		"place":"Bengaluru",
		"image":imgURL+"perpule.png",
		"startDate":"May 2017",
		"duration":"8 - 12 weeks",
		"stipend":'Rs 10,000 per month',
		"applylink":"https://docs.google.com/forms/d/11NGUvrzxOnRJwkZT-AUvQ6OlBIETXa2z73O7KZ5RF-M/viewform",
		"number":"1",
		"addr":"Thought Factory, Diamond District, Domlur , Bengaluru 560040, Karnataka ,India",
		"about":"Perpule aims to provide a unique and queue-less checkout experience for shoppers at retail stores. Their vision is to enhance the shopping experience of customers in-store, by making it more engaging and personal. The smartphone-based software solution can be scaled across various retail outlets and provides retailers deep insights about their customers allowing them to create personalized campaigns.",
		"jobDescPreq": 'Shaastra/Saarage designers with good skill.',
		"shortlistProc":"</ol><li>Resume shortlist</li><li>Phone Screen</li><li>Skype interview/In-person</li></ol>"

	},
	{
		"name":"Verloop",
		"place":"Bengaluru",
		"image":imgURL+"verloop.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":'Rs 20,000',
		"applylink":"https://docs.google.com/forms/d/1f6X8OkJ_5eDzO3X1cb14X3kJKqstcU4uVMjngwtILF0/viewform",
		"number":"1",
		"addr":"2nd Floor, 212/A, 1st Main Road, Domlur 2nd Stage , Bengaluru 560071, Karnataka ,India",
		"about":"<p>Verloop is a Customer Support and Engagement Automation platform. We use Machine Learning to automate responses and reduce human involvement in answering queries.</p><p>Verloop is a Open Source driven company. We heavily contribute back to products we use and all internal tools are open sourced too.</p><p>Verloop is deployed in Fortune 500 companies in US, Banks, Insurance and major retail companies in India.</p>",
		"jobDescPreq": 'Work on improving our current design and design interaction for upcoming features.<br><label>Prerequisites : </label>Previous work in interface design, PSD mocks',
		"shortlistProc":"Github profile, Open Source contributions, Solving Challenge, Discussion"

	},
	{
        "name":"Grow Fit",
        "place":"Bangalore",
        "image":imgURL+"grow-fit.png",
        "startDate":"May 2017",
        "duration":"8 weeks",
        "stipend":' Rs 10,000 - Rs 15,000 per month',
        "applylink":"",
        "number":"1",
        "addr":"212/A, Double Road, Bengaluru 560071 , Karnataka ,India",
        "about":"Over 300 million Indians are at risk of lifestyle diseases like diabetes and have nowhere to turn to for support. Grow Fit prevents lifestyle diseases through a combination of data science, medical science and behavioral insights. We believe in empowering Indians to prevent and even reverse lifestyle disease by addressing its root causes - nutrition, mental wellness, stress, sleep and activity through a combination of expert advice and nutrition delivered to your doorstep.",
        "jobDescPreq":'We are looking for a creative Graphic designer with up-to-date knowledge to interpret our needs and to design solutions with high visual impact. You will work on a variety of products, including websites, apps, brochures, etc. and you will cooperate with our designers and marketing team.<br>Skills and Qualifications: <ol><li>Proven graphic designing experience</li><li>Possession of creative flair, versatility, conceptual/visual ability and originality</li><li>Demonstrable graphic design skills with a strong portfolio</li><li>Ability to interact, communicate and present ideas</li><li>Up to date with industry leading software and technologies (In Design, Illustrator, Dreamweaver, Photoshop etc)</li><li>Highly proficient in all design aspects </li></ol>',
        "shortlistProc":"We will be having <ol><li>Resume shortlisting</li><li>Technical Phone Interview</li> <li>Small Project Assignment (Optional)</li><li>Physical Interview</li></ol>"

    },
	{
		"name":"HashLearn",
		"place":"Bengaluru",
		"image":imgURL+"hashlearn.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":' Rs 5,000 to Rs 10,000',
		"applylink":"https://docs.google.com/forms/d/1Oszq4XsLFePbcYa-5ZLO3QMZabApLbXtr-0fMwhmhE0/viewform",
		"number":"5",
		"addr":"205, Brigade Business Suites, Near Ashoka Pillar, Jayanagar 2nd Block, Bengaluru 560011 , Karnataka , India  ",
		"about":"HashLearn is a mobile app that instantly connects students with tutors and provides them with highly curated questions relevant for their preparation.<br> Today, students (Grade 8-12) from all over India use HashLearn to prepare for various exams like the JEE, BITSAT and other Entrance/Board Exams.",
		"jobDescPreq":'<ol><li>Creating illustrations for various concepts involved in the curriculum for Grade 8-12.</li><li> Working with a team of 5+ Content Associates to translate academic concepts into graphic designs</li></ol>',
		"shortlistProc":"<ul><li>Online Screening and Shortlisting</li><li>Virtual / Telephonic Interview</li><li>Physical Interview</li></ul>"

	},
	{
		"name":"Climber Knowledge and Careers private ltd.",
		"place":"Virtual",
		"image":imgURL+"Climberlogo.png",
		"startDate":"15th April 2017",
		"duration":"8 weeks",
		"stipend":' Rs 5000',
		"applylink":"https://docs.google.com/forms/d/e/1FAIpQLSfnRsdm0mz5jNZQp_5By4E8UgI61fKcot-eWh4UFZntvI-O5g/viewform",
		"number":"2",
		"addr":"NSRCEL, IIM Bangalore, Bannerghatta Road , Bengaluru 560076 , Karnataka , India",
		"about":"The Climber is an NSRCEL, IIM Bangalore incubated Edu-Tech startup that helps students Discover and pursue their passions. Our main product, MyCaptain, is an Online Youth mentoring Youth Program where young achievers guide and mentor school and College students who share the same Career Aspirations.",
		"jobDescPreq":'User Research, User Testing,  Basic Wire-Framing Skills, Understanding of On-boarding, Information Visualisation (Optional),Photoshop, Illustrator, Basic Knowledge of Branding / Marketing.<br><br>ser Testing, User Research, Work on Micro-Interactions, On-Boarding of Mentors and mentees. (UX designer)<br>Marketing Campaigns, MyCaptain WebApp, MyCaptain.in Landing page.  (Graphic Designer)',
		"shortlistProc":"Initial Selection based on CV and Work Experience; thereafter, an Interview by the respective Heads / Managers."

	},
	// {
	// 	"name":"GetGrub.in",
	// 	"place":"Chennai",
	// 	"image":imgURL+"getgrub.png",
	// 	"startDate":"As soon as possible",
	// 	"duration":"6 - 8 weeks",
	// 	"stipend":'Rs 7,000 + Food + Accomodation',
	// 	"applylink":"https://docs.google.com/forms/d/1aiDV_-srBsFoQHsyomLp2DyrOctsHP0YOuS8bEjkXf4/viewform",
	// 	"number":"1",
	// 	"addr":"GetGrub.in , Janakpuri 2nd street, Velachery , Chennai 600042 , Tamil Nadu , India",
	// 	"about":"A Food tech startup implementing a unique model of cloud kitchens and serving healthy & customized food according to the community. Where AI plays a major role in easing the innovation & operations.",
	// 	"jobDescPreq":' We believe a design speaks a lot than content. If someone is creative enough to share the message through design then he/she is in. Experience in Photoshop and Illustrator (GIMP & Inkscape) is mandatory. Basic knowledge of Animation is preferable. ',
	// 	"shortlistProc":"We will be giving the problems statements to analyze the candidate skills. Based on the performance a final round of telephonic interview will be taken to shortlist the candidates and offers will be rolled out."

	// },

	]

	var mlcompanies=[
	{
		"name":"The Data Team",
		"place":"Chennai",
		"image":imgURL+"data-team.png",
		"startDate":"Immediate",
		"duration":"8 weeks",
		"stipend":' Rs 15,000 per month',
		"applylink":"https://docs.google.com/forms/d/1F1ALbynnWRbMk_6G0qQUg5vOkNWciLHF6G-vHKQcH54/viewform",
		"number":"1",
		"addr":"VSI Estate, Chennai 600041 , Tamil Nadu , India  ",
		"about":"Set up as a boutique consulting company, The Data Team offers high-impact work in the areas of distributed systems, big data, software engineering and data science that is challenging and at the same time richly rewarding. Find out more about us at our website and the company blog. Candidates who are self-motivated, can learn and adapt quickly, and proactively take ownership are encouraged to apply.",
		"jobDescPreq":'Extensive hands-on development of a data science pipeline',
		"shortlistProc":"Online programming test + interviews"

	}
	,
	{
		"name":"NoteShare.in",
		"place":"Chennai",
		"image":imgURL+"noteshare.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":' Rs 10,000',
		"applylink":"https://docs.google.com/forms/d/1odv8N0p6zpj_sWvtrN-GFMXEzIxumJL1wdY_rSOSGsc/viewform",
		"number":"1",
		"addr":"3rd floor, IIT Madras Research park, Chennai 600113 , Tamil Nadu , India  ",
		"about":"NoteShare is a social platform for sharing classroom related documents. We aim to interconnect learners and educators to provide easy access to quality content.",
		"jobDescPreq":'Coding skills and able to implement algorithms for recommendations',
		"shortlistProc":"Assignment, Interview"

	},
	{
		"name":"Verloop",
		"place":"Bengaluru",
		"image":imgURL+"verloop.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":'Rs 20,000',
		"applylink":"https://docs.google.com/forms/d/1LylPlSCIsKUCgK39jcWLaVV0m4AR2zOz5nXJWP_oJTs/viewform",
		"number":"2",
		"addr":"2nd Floor, 212/A, 1st Main Road, Domlur 2nd Stage , Bengaluru 560071, Karnataka ,India",
		"about":"<p>Verloop is a Customer Support and Engagement Automation platform. We use Machine Learning to automate responses and reduce human involvement in answering queries.</p><p>Verloop is a Open Source driven company. We heavily contribute back to products we use and all internal tools are open sourced too.</p><p>Verloop is deployed in Fortune 500 companies in US, Banks, Insurance and major retail companies in India.</p>",
		"jobDescPreq": 'Work with us in solving challenging natural language conversational problems.<br><label>Prerequisites : </label>Python, ML experience',
		"shortlistProc":"Github profile, Open Source contributions, Solving Challenge, Discussion"

	},
	{
		"name":"Grow Fit",
		"place":"Bangalore",
		"image":imgURL+"grow-fit.png",
		"startDate":"May 2017",
		"duration":"8 - 10 weeks",
		"stipend":' Rs 10,000 - Rs 15,000 per month',
		"applylink":"",
		"number":"1",
		"addr":"212/A, Double Road, Bengaluru 560071 , Karnataka ,India",
		"about":"Over 300 million Indians are at risk of lifestyle diseases like diabetes and have nowhere to turn to for support. Grow Fit prevents lifestyle diseases through a combination of data science, medical science and behavioral insights. We believe in empowering Indians to prevent and even reverse lifestyle disease by addressing its root causes - nutrition, mental wellness, stress, sleep and activity through a combination of expert advice and nutrition delivered to your doorstep.",
		"jobDescPreq":' We are looking for Machine Learning scientist who will be responsible for advanced machine learning technologies that can use data to take automatic user behaviour driven decisions.  The primary focus will be to build NLP based smart chat bots which can interact with users in absence of experts and to guide experts in making the right decisions. <br>Skills and Qualifications:<ol><li> Excellent understanding of machine learning techniques and algorithms, such as k-NN, Naive Bayes, SVM, etc</li><li>Proficiency in python </li><li> Excellent understanding of NLP concepts, such as sentiment analysis, and their application</li><li>Proficiency in using query languages such as SQL</li><li>Great communication skills</li></ol>',
		"shortlistProc":"We will be having <ol><li>Resume shortlisting</li><li>Technical Phone Interview</li> <li>Small Project Assignment (Optional)</li><li>Physical Interview</li></ol>"

	},

	
	]
	var opcompanies=[
	{
		"name":"DrivoJoy",
		"place":"Bengaluru",
		"image":imgURL+"drivojoy.gif",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":'Rs 10,000',
		"applylink":"https://docs.google.com/forms/d/1r2w7rjQykBmAaY5-zMsOhmSJKpP1WSTH3emfpWwz8MY/viewform",
		"number":"2",
		"addr":"L6 First Floor, 2nd Main Sec 6 HSR Layout , Bengaluru 560102, Karnataka , India  ",
		"about":"We are a Bangalore based startup with demonstrated ability and an unparalleled experience in on-demand economy and technology. We call ourselves a disruptive force trying to revive the 2-wheeler servicing industry, that has not changed much in decades. Our team dwells some hungry, passionate professionals from a multitude of backgrounds including alumni from IIT Bombay, IIT Delhi and ex-employees of Olacabs and PayPal. We are on a quest to challenge the status quo and push the boundaries of innovation by transforming the servicing and repair of 2-wheelers into a technology-driven and hassle-free experience.",
		"jobDescPreq":"Fulfillment management-Will be working on Order Management functions such as Order to cash, order processing, order managment etc.for customers",
		"shortlistProc":"Telephonic/Skype"
	},
	{
		"name":"T-Hub Foundation",
		"place":"Hyderabad",
		"image":imgURL+"t-hub.png",
		"startDate":"April 2017",
		"duration":"12-16 weeks",
		"stipend":'Negotiable',
		"applylink":"",
		"number":"2",
		"addr":"T-Hub Catalyst Building, Gachibowli 500032 , Telangana , India",
		"about":"<p>T-Hub is a unique public/private partnership between the government of Telangana, 3 of India’s premier academic institutes (IIIT-H, ISB & NALSAR) and key private sector leaders. It stands at the intersection of the start-up, academic, corporate, research and government sectors. </p><p>As an independent registered non-profit organization, T-Hub is at the intersection of the start-up community, government, corporate, academic, and research sectors. We endeavour to build a booming start-up ecosystem thriving on the tightly-knit, most vibrant entrepreneurial ecosystem in the country. Our goal is to build an ecosystem that not only caters to local entrepreneurs but also acts as a gateway for anyone who wants to start a tech company in India.</p>",
		"jobDescPreq":' <ul><li>Investment Buy-side research</li><li>Need to understand & track technology sectors, analyze trends and identify opportunities that are of interest.</li><li>Gather and synthesize industry/market data.</li><li>Assist in the preparation of preliminary and final investment research notes</li></ul>',
		"shortlistProc":"Interview with the candidate directly."

	},
	  {
        "name":"BoxMySpace",
        "place":"Mumbai",
        "image":imgURL+"box.png",
        "startDate":"May 2017",
        "duration":"Flexible",
        "stipend":'Rs 10,000',
        "applylink":"https://docs.google.com/forms/d/1qE5iJ8pY7ToGZxh2kIclvC28xAOVhhJzFejKT_KV3YE/viewform",
        "number":"1",
        "addr":"1a, Krishna Kunj, Tagore Road,, Mumbai 400054 , Maharashtra , India  ",
        "about":"<p>BoxMySpace is an On-Demand storage platform for consumers and businesses.</p><p>BoxMySpace provides safe and secure storage options for consumers looking to rent space to keep their stuff while they are away or if they just want to create more living space for themselves.</p><p>We also provides warehouse storage for businesses on a pay per use flexible storage model. For more information on our warehouse storage please visit our warehousing section</p>",
        "jobDescPreq":' Handle ops process flow and make analysis of the process, how can we improve , do some research of the process flow ',
        "shortlistProc":"Interview - Round 1- Phone Call<br> Round 2 - In Person or video call."

    },
	{
		"name":"Climber Knowledge and Careers private ltd.",
		"place":"Virtual",
		"image":imgURL+"Climberlogo.png",
		"startDate":"15th April 2017",
		"duration":"8 weeks",
		"stipend":' Rs 5000',
		"applylink":"https://docs.google.com/forms/d/15PRTo8SuiBpPY0pDeOd8TvpzbC6UFuL0fAFFGEW7WJY/viewform",
		"number":"1",
		"addr":"NSRCEL, IIM Bangalore, Bannerghatta Road , Bengaluru 560076 , Karnataka , India",
		"about":"The Climber is an NSRCEL, IIM Bangalore incubated Edu-Tech startup that helps students Discover and pursue their passions. Our main product, MyCaptain, is an Online Youth mentoring Youth Program where young achievers guide and mentor school and College students who share the same Career Aspirations.",
		"jobDescPreq":'Handling Day to Day product related Operations, Routine Quality Checks, Recruiting & On-Boarding Mentors onto the platform.<br><br>Analytical Skills, Communication Skills ',
		"shortlistProc":"Initial Selection based on CV and Work Experience; thereafter, an Interview by the respective Heads / Managers."

	},

	
	]

	var daDevcompanies=[
	{
		"name":"Perpule (Delvit Solutions Private Limited)",
		"place":"Bengaluru",
		"image":imgURL+"perpule.png",
		"startDate":"May 2017",
		"duration":"6 - 8 weeks",
		"stipend":'Rs 10,000 - Rs 20,000 per month',
		"applylink":"https://docs.google.com/forms/d/1a2_9xenNMMmb5_gGIj29q-nj2wU9noHP7_ns5Sdrex8/viewform",
		"number":"2",
		"addr":"Thought Factory, Diamond District, Domlur , Bengaluru 560040, Karnataka ,India",
		"about":"Perpule aims to provide a unique and queue-less checkout experience for shoppers at retail stores. Their vision is to enhance the shopping experience of customers in-store, by making it more engaging and personal. The smartphone-based software solution can be scaled across various retail outlets and provides retailers deep insights about their customers allowing them to create personalized campaigns.",
		"jobDescPreq":'Should have knowledge on basic mining techniques. Strong on data analytics fundamentals. High GPA is preferred.',
		"shortlistProc":"</ol><li>Resume shortlist</li><li>Phone Screen</li><li>Skype interview/In-person</li></ol>"

	},
	{
		"name":"DrivoJoy",
		"place":"Bengaluru",
		"image":imgURL+"drivojoy.gif",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":' Rs 10,000',
		"applylink":"https://docs.google.com/forms/d/14L4fjI1Ihp58SVKk95RUpU_567aoc49_O7h7oqhfUgw/viewform",
		"number":"1 - 2",
		"addr":"L6 First Floor, 2nd Main Sec 6 HSR Layout , Bengaluru 560102, Karnataka , India  ",
		"about":"We are a Bangalore based startup with demonstrated ability and an unparalleled experience in on-demand economy and technology. We call ourselves a disruptive force trying to revive the 2-wheeler servicing industry, that hasn’t changed much in decades. Our team dwells some hungry, passionate professionals from a multitude of backgrounds including alumni from IIT Bombay, IIT Delhi and ex-employees of Olacabs and PayPal. We are on a quest to challenge the status quo and push the boundaries of innovation by transforming the servicing and repair of 2-wheelers into a technology-driven and hassle-free experience.",
		"jobDescPreq":' Candidate must be good knowledge of Statistics,MSExcel,MySql,PLSql,R and some knowledge of MongoDB,SaaS,Python would be desirable.',
		"shortlistProc":"Telephonic(2 rounds)"
	},
	{
        "name":"FASTNEXT EDUCATION PVT LTD",
        "place":"Chennai,Bengaluru",
        "image":imgURL+"xwn1.png",
        "startDate":"Whenever",
        "duration":"Flexible",
        "stipend":'Unpaid',
        "applylink":"https://docs.google.com/forms/d/1wkuaOLc-V63OQBoijuYBUOCMqhk-AwquRIv0tuQdQD4/viewform",
        "number":"2 in each of the two cities",
        "addr":"NASSCOM 10k Warehouse, Chennai 600036 , Tamilnadu , India  ",
        "about":"We're building AI algorithms to match candidates and companies.",
        "jobDescPreq":'Prerequisites: ANNs, NLP, Regression models',
        "shortlistProc":"Telephonic - Problem statement - PI"

    },
	{
		"name":"iB Hubs",
		"place":"Hyderabad",
		"image":imgURL+"ibhubs.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":'Rs 5,000 per month + Food + Accomodation',
		"applylink":"https://docs.google.com/forms/d/1A4uJ8Jyhf_gZ5m5voOUaBeRDpNKOmVAxhrLwruvjvn4/viewform",
		"number":"4",
		"addr":"Brigade Towers, Financial District, Nanakaramguda , Hyderabad 500032, Telangana ,India",
		"about":"<p>iB Hubs is a platform for the youth to ideate, create and make an impact.</p> <p>It is a PAN India startup hub envisioning to develop a culture of innovation and entrepreneurship in every nook and corner of the country</p><p>On a mission to establish 500 hubs with 4 spokes each, making it 2500 centers across India by 2019, we have already established 5 nodal centers and 20 hubs in 7 states.</p><p>We have a strong team of 1000+ people with 150 full-time individuals who are alumni from premier institutions like IITs, IIMs, NITs, IIIT Hyderabad, BITS Pilani etc. with work experience in reputed MNCs like Amazon,Samsung, Intel, Qualcomm.</p>",
		"jobDescPreq":'<p>Will be working on creating content in statistics and machine learning</p>Requirements:<ol><li>Basic analytical and problem-solving skills.</li><li>Adept at written communication and be able to express ideas precisely.</li><li>Knowledge in statistics and/or machine learning will help</li></ol>',
		"shortlistProc":"</ol><li>Resume shortlisting</li><li>Interview</li></ol>"

	},
	{
		"name":"Nadhi Information Technologies",
		"place":"Chennai",
		"image":imgURL+"nadhi.jpg",
		"startDate":"Flexible",
		"duration":"Flexible",
		"stipend":' Rs 8,000',
		"applylink":"https://docs.google.com/forms/d/1n1_lyMuzhatZCT2gf83RUyHhuPD5KuC_5tZhLFFeqnM/viewform",
		"number":"1",
		"addr":"22 Venkatraman Street, T. Nagar , Chennai 600017 , Tamil Nadu, India  ",
		"about":"Nadhi makes infrastructure and construction projects (power, bridges, roads etc.) run smarter, faster and cheaper by using our proprietary alogrithms to provide management with real time analytics and data driven decision support on their handhelds.<br><br>In other words, we're cool as hell, and a great bunch of people to work with ;)",
		"jobDescPreq":' Use data science to come up with new predictive algorithms for our domain. Programming skills essential, prior expertise with analytics highly desirable.',
		"shortlistProc":"Personal interviews of shortlisted candidates. Will include programming, problem solving and check for culture fit."

	}

	
	]

	var marDevcompanies=[
	{
		"name":"Perpule (Delvit Solutions Private Limited)",
		"place":"Bengaluru",
		"image":imgURL+"perpule.png",
		"startDate":"May 2017",
		"duration":"8 - 12 weeks",
		"stipend":'Rs 10,000 per month',
		"applylink":"https://docs.google.com/forms/d/1Aa05_wDtUvN-FkxmZIon0ei8DjmXivbnF40dXJu2PwU/viewform",
		"number":"1",
		"addr":"Thought Factory, Diamond District, Domlur , Bengaluru 560040, Karnataka ,India",
		"about":"Perpule aims to provide a unique and queue-less checkout experience for shoppers at retail stores. Their vision is to enhance the shopping experience of customers in-store, by making it more engaging and personal. The smartphone-based software solution can be scaled across various retail outlets and provides retailers deep insights about their customers allowing them to create personalized campaigns.",
		"jobDescPreq":' Looking for someone who believes can fit into a marketing role with prior experience at a startup maybe.',
		"shortlistProc":"</ol><li>Resume shortlist</li><li>Phone Screen</li><li>Skype interview/In-person</li></ol>"

	},
	{
        "name":"HashLearn",
        "place":"Bengaluru",
        "image":imgURL+"hashlearn.png",
        "startDate":"May 2017",
        "duration":"8 weeks",
        "stipend":' Rs 10,000 to Rs 15,000 per month',
        "applylink":"https://docs.google.com/forms/d/1ecLaj-x-MmutpAwDdxR9FMqbSnH3t19QuYoBOum09hY/viewform",
        "number":"3",
        "addr":"205, Brigade Business Suites, Near Ashoka Pillar, Jayanagar 2nd Block, Bengaluru 560011 , Karnataka , India  ",
        "about":"HashLearn is a mobile app that instantly connects students with tutors and provides them with highly curated questions relevant for their preparation.<br> Today, students (Grade 8-12) from all over India use HashLearn to prepare for various exams like the JEE, BITSAT and other Entrance/Board Exams.",
        "jobDescPreq":'Only interest is a pre-requisite. If you have interest, then apply for it',
        "shortlistProc":"<ul><li>Online Screening and Shortlisting</li><li>Virtual / Telephonic Interview</li><li>Physical Interview</li></ul>"

    }, 
	{
		"name":"Climber Knowledge and Careers private ltd.",
		"place":"Virtual",
		"image":imgURL+"Climberlogo.png",
		"startDate":"1st April 2017",
		"duration":"8 weeks",
		"stipend":'Performance based',
		"applylink":"https://docs.google.com/forms/d/1uQaXOdRSRsXTPhAjSNZEAPweGW7XQDqpnCqpy6MTWYI/viewform",
		"number":"5",
		"addr":"NSRCEL, IIM Bangalore, Bannerghatta Road , Bengaluru 560076 , Karnataka , India",
		"about":"The Climber is an NSRCEL, IIM Bangalore incubated Edu-Tech startup that helps students Discover and pursue their passions. Our main product, MyCaptain, is an Online Youth mentoring Youth Program where young achievers guide and mentor school and College students who share the same Career Aspirations.",
		"jobDescPreq":'People skills, Marketing Skills, Sales Skills.Marketing, Sales, Business Development, University Relations, On Ground Marketing Campaigns. ( Business Development) ',
		"shortlistProc":"Initial Selection based on CV and Work Experience; thereafter, an Interview by the respective Heads / Managers."

	},
	{
		"name":"Furlenco",
		"place":"Bangalore",
		"image":imgURL+"furlenco.jpg",
		"startDate":"April",
		"duration":"8-12 weeks",
		"stipend":' Rs 15,000',
		"applylink":"https://docs.google.com/forms/d/1O7-y6CrYPTzp1zdoQwvXXU5sMa6MC-K51J-I971foHE/viewform",
		"number":"3",
		"addr":"Krishna Annex, Near Silk Board Junction, Sector 6, HSR Layout, Bengaluru 560102 , Karnataka , India",
		"about":"Furlenco is India’s first and only Home Furniture Subscription Program based out of Bangalore.<br> Furlenco offers a range of curated home furniture experiences, designed to suit the lifestyle needs of varied audiences spanning students to families and expatriates. Our solutions are convenient, cost-effective and offer access to quality furniture with the added advantage of being able to exchange it at will.<br>To deliver the best possible home experience, our furniture is designed and developed in-house by a team of experienced designers who follow a strict development process, resulting in an enhanced product experience. We aim to simplify the home decorating process by providing  seamless assistance and support that is designed to delight!",
		"jobDescPreq":'<ul><li>Marketing Research</li><li>Design Research</li><li>Analysis to develop a model on Customer Retention & Loyalty</li></ul>',
		"shortlistProc":"<ul><li>Students express interest</li><li>Assignment shared</li><li>Assignment to be submitted</li> <li>Telephonic/ Skype calls for technical discussion</li><li>Offer roll-out</li></ul>"

	},
	// {
	// 	"name":"GetGrub.in",
	// 	"place":"Chennai",
	// 	"image":imgURL+"getgrub.png",
	// 	"startDate":"As soon as possible",
	// 	"duration":"6 - 8 weeks",
	// 	"stipend":'Rs 7,000 + Food + Accomodation',
	// 	"applylink":"https://docs.google.com/forms/d/1Z0kZf2q10AoOXOCmXAiqU3EA5-zoRB3lEDiUklarl8Q/viewform",
	// 	"number":"1",
	// 	"addr":"GetGrub.in , Janakpuri 2nd street , Velachery , Chennai 600042 , Tamil Nadu , India",
	// 	"about":"A Food tech startup implementing a unique model of cloud kitchens and serving healthy & customized food according to the community. Where AI plays a major role in easing the innovation & operations.",
	// 	"jobDescPreq":'Should have awareness about startup ecosystem and interests towards growth strategies ',
	// 	"shortlistProc":"We will be giving the problems statements to analyze the candidate skills. Based on the performance a final round of telephonic interview will be taken to shortlist the candidates and offers will be rolled out."

	// },
	
	]
	var contentDevcompanies=[
	{
		"name":"Perpule (Delvit Solutions Private Limited)",
		"place":"Bengaluru",
		"image":imgURL+"perpule.png",
		"startDate":"May 2017",
		"duration":"8 - 12 weeks",
		"stipend":'Rs 10,000 per month',
		"applylink":"https://docs.google.com/forms/d/1fGhpXld2xkref59hCAF0duC0JlKjVbVlC-K3JJwpufw/viewform",
		"number":"1",
		"addr":"Thought Factory, Diamond District, Domlur , Bengaluru 560040, Karnataka ,India",
		"about":"Perpule aims to provide a unique and queue-less checkout experience for shoppers at retail stores. Their vision is to enhance the shopping experience of customers in-store, by making it more engaging and personal. The smartphone-based software solution can be scaled across various retail outlets and provides retailers deep insights about their customers allowing them to create personalized campaigns.",
		"jobDescPreq":'Should have experience in a similar role, probably at Fifth Estate for e.g.',
		"shortlistProc":"</ol><li>Resume shortlist</li><li>Phone Screen</li><li>Skype interview/In-person</li></ol>"

	},
	{
		"name":"HashLearn",
		"place":"Bengaluru",
		"image":imgURL+"hashlearn.png",
		"startDate":"May 2017",
		"duration":"8 weeks",
		"stipend":' Rs 10,000 to Rs 15,000',
		"applylink":"https://docs.google.com/forms/d/1oVzjFFdI-6RO-Kj-EQozKu4OR7uZnj9MKKfZit53A2M/viewform",
		"number":"5",
		"addr":"205, Brigade Business Suites, Near Ashoka Pillar, Jayanagar 2nd Block, Bengaluru 560011 , Karnataka , India  ",
		"about":"HashLearn is a mobile app that instantly connects students with tutors and provides them with highly curated questions relevant for their preparation.<br> Today, students (Grade 8-12) from all over India use HashLearn to prepare for various exams like the JEE, BITSAT and other Entrance/Board Exams.",
		"jobDescPreq":' The selected intern(s) will work on following during the internship: <ol><li>Developing academic content for grades 8-10 and / or 11-12.</li><li>Working with a team of 10+ Operators to ensure the content is successfully ported on to the mobile app.</li><li>Ensuring the developed content is effectively marketed.</li><li> Experimenting and implementing various methods of learning.</li></ol>',
		"shortlistProc":"<ul><li>Online Screening and Shortlisting</li><li>Virtual / Telephonic Interview</li><li>Physical Interview</li></ul>"

	},
	// {
	// 	"name":"GetGrub.in",
	// 	"place":"Chennai",
	// 	"image":imgURL+"getgrub.png",
	// 	"startDate":"As soon as possible",
	// 	"duration":"6 - 8 weeks",
	// 	"stipend":'Rs 7,000 + Food + Accomodation',
	// 	"applylink":"",
	// 	"number":"1",
	// 	"addr":"GetGrub.in , Janakpuri 2nd street, Velachery , Chennai 600042 , Tamil Nadu , India",
	// 	"about":"A Food tech startup implementing a unique model of cloud kitchens and serving healthy & customized food according to the community. Where AI plays a major role in easing the innovation & operations.",
	// 	"jobDescPreq":'Should be a creative writer to attract all the ages about Food, Blog, articles ',
	// 	"shortlistProc":"We will be giving the problems statements to analyze the candidate skills. Based on the performance a final round of telephonic interview will be taken to shortlist the candidates and offers will be rolled out."

	// },

	
	]
	var softDevcompanies=[
	   {
        "name":"HashLearn",
        "place":"Bengaluru",
        "image":imgURL+"hashlearn.png",
        "startDate":"May 2017",
        "duration":"8 weeks",
        "stipend":' Rs 10,000 to Rs 15,000 per month',
        "applylink":"https://docs.google.com/forms/d/11h9hFv9miyMXhYHt7Snyno8amjMTilImBauJ38rjPA0/viewform",
        "number":"5",
        "addr":"205, Brigade Business Suites, Near Ashoka Pillar, Jayanagar 2nd Block, Bengaluru 560011 , Karnataka , India  ",
        "about":"HashLearn is a mobile app that instantly connects students with tutors and provides them with highly curated questions relevant for their preparation.<br> Today, students (Grade 8-12) from all over India use HashLearn to prepare for various exams like the JEE, BITSAT and other Entrance/Board Exams.",
        "jobDescPreq":'Knowledge of atleast two of the following : PHP, Ruby, Python, Java. Interest is a pre-requisite. If you have interest, then apply for it',
        "shortlistProc":"<ul><li>Online Screening and Shortlisting</li><li>Virtual / Telephonic Interview</li><li>Physical Interview</li></ul>"

    }, 

	
	]	
		var qacompanies=[
	 {
        "name":"HashLearn",
        "place":"Bengaluru",
        "image":imgURL+"hashlearn.png",
        "startDate":"Flexible",
        "duration":"Flexible",
        "stipend":' Flexible',
        "applylink":"https://docs.google.com/forms/d/1WY6-5u3cNmCHh2IcIEe7Kn0yjtrgQbe3nHBOrbLjnmk/viewform",
        "number":"Flexible",
        "addr":"205, Brigade Business Suites, Near Ashoka Pillar, Jayanagar 2nd Block, Bengaluru 560011 , Karnataka , India  ",
        "about":"HashLearn is a mobile app that instantly connects students with tutors and provides them with highly curated questions relevant for their preparation.<br> Today, students (Grade 8-12) from all over India use HashLearn to prepare for various exams like the JEE, BITSAT and other Entrance/Board Exams.",
        "jobDescPreq":'Only interest is a pre-requisite. If you have interest, then apply for it.',
        "shortlistProc":"<ul><li>Online Screening and Shortlisting</li><li>Virtual / Telephonic Interview</li><li>Physical Interview</li></ul>"

    }, 
	
	]		

    $.each(webDevcompanies,function(index,value){
    	var btnStatus=""

    	if (!value.applylink=="") {
    	btnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}


       	
       	webNewCompanyModal='<div class="modal fade" id="myModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="companyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="companyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+btnStatus+'</div></div></div></div>'
       	

       	webNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	webNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage'></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	webNewCompany+=webNewCompanyModalBtn
       	webNewCompany+=webNewCompanyModal
    	
    	webInHtml+=webNewCompany
    })
    $('.webInternTile').html(webInHtml)

    $.each(appDevcompanies,function(index,value){
		var appbtnStatus=""

    	if (!value.applylink=="") {
    	appbtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myappModal'+index+'">Apply Now</a>'
	    		
    	}       	
       	
       	appNewCompanyModal='<div class="modal fade" id="myappModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="appcompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="appcompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+appbtnStatus+'</div></div></div></div>'

       	appNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myappModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	appNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage'></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	appNewCompany+=appNewCompanyModalBtn
       	appNewCompany+=appNewCompanyModal
    	
    	appInHtml+=appNewCompany
    })
    $('.appInternTile').html(appInHtml)

    $.each(bdDevcompanies,function(index,value){
		var bdbtnStatus=""

    	if (!value.applylink=="") {
    	bdbtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}

       	
       	
       	bdNewCompanyModal='<div class="modal fade" id="mybdModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="bdcompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="bdcompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+bdbtnStatus+'</div></div></div></div>'

       	bdNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mybdModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	bdNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage '></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	bdNewCompany+=bdNewCompanyModalBtn
       	bdNewCompany+=bdNewCompanyModal
    	
    	bdInHtml+=bdNewCompany
    })
    $('.bdInternTile').html(bdInHtml)

    $.each(gdDevcompanies,function(index,value){
		var gdbtnStatus=""

    	if (!value.applylink=="") {
    	gdbtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}

       	
       	
       	gdNewCompanyModal='<div class="modal fade" id="mygdModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="gdcompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="gdcompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+gdbtnStatus+'</div></div></div></div>'

       	gdNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mygdModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	gdNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage '></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	gdNewCompany+=gdNewCompanyModalBtn
       	gdNewCompany+=gdNewCompanyModal
    	
    	gdInHtml+=gdNewCompany
    })
    $('.gdInternTile').html(gdInHtml)


	 $.each(marDevcompanies,function(index,value){
		var marbtnStatus=""

    	if (!value.applylink=="") {
    	marbtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}

       	
       	
       	marNewCompanyModal='<div class="modal fade" id="mymarModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="marcompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="marcompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+marbtnStatus+'</div></div></div></div>'

       	marNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mymarModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	marNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage '></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	marNewCompany+=marNewCompanyModalBtn
       	marNewCompany+=marNewCompanyModal
    	
    	marInHtml+=marNewCompany
    })
    $('.marInternTile').html(marInHtml)

    
    $.each(mlcompanies,function(index,value){
       	
       	var mlbtnStatus=""

    	if (!value.applylink=="") {
    	mlbtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}


       	mlNewCompanyModal='<div class="modal fade" id="mymlModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="mlcompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="mlcompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+mlbtnStatus+'</div></div></div></div>'

       	mlNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mymlModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	mlNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage '></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	mlNewCompany+=mlNewCompanyModalBtn
       	mlNewCompany+=mlNewCompanyModal
    	
    	mlInHtml+=mlNewCompany
    })
    $('.mlInternTile').html(mlInHtml)

$.each(daDevcompanies,function(index,value){
       	
       	var dabtnStatus=""

    	if (!value.applylink=="") {
    	dabtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}


       	daNewCompanyModal='<div class="modal fade" id="mydaModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="dacompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="dacompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+dabtnStatus+'</div></div></div></div>'

       	daNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mydaModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	daNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage '></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	daNewCompany+=daNewCompanyModalBtn
       	daNewCompany+=daNewCompanyModal
    	
    	daInHtml+=daNewCompany
    })
    $('.daInternTile').html(daInHtml)

$.each(contentDevcompanies,function(index,value){
       	
       	var contentbtnStatus=""

    	if (!value.applylink=="") {
    	contentbtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}

	
       	contentNewCompanyModal='<div class="modal fade" id="mycontentModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="contentcompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="contentcompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+contentbtnStatus+'</div></div></div></div>'

       	contentNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mycontentModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	contentNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage '></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	contentNewCompany+=contentNewCompanyModalBtn
       	contentNewCompany+=contentNewCompanyModal
    	
    	contentInHtml+=contentNewCompany
    })
    $('.contentInternTile').html(contentInHtml)


$.each(opcompanies,function(index,value){
	var opbtnStatus=""

    	if (!value.applylink=="") {
    	opbtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}

       	
       	
       	opNewCompanyModal='<div class="modal fade" id="myopModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="opcompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="opcompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+opbtnStatus+'</div></div></div></div>'

       	opNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myopModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	opNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage '></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	opNewCompany+=opNewCompanyModalBtn
       	opNewCompany+=opNewCompanyModal
    	
    	opInHtml+=opNewCompany
    })
  $('.opInternTile').html(opInHtml)

$.each(softDevcompanies,function(index,value){
	var softbtnStatus=""

    	if (!value.applylink=="") {
    	softbtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}

       	
       	
       	softNewCompanyModal='<div class="modal fade" id="mysoftModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="softcompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="softcompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+softbtnStatus+'</div></div></div></div>'

       	softNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mysoftModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	softNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage '></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	softNewCompany+=softNewCompanyModalBtn
       	softNewCompany+=softNewCompanyModal
    	
    	softInHtml+=softNewCompany
    })
    $('.softInternTile').html(softInHtml)

$.each(qacompanies,function(index,value){
	var qabtnStatus=""

    	if (!value.applylink=="") {
    	qabtnStatus='<a style="float:left;" href="'+value.applylink+'" target="_blank" class="btn btn-info btn-myModal'+index+'">Apply Now</a>'
	    		
    	}

       	
       	
       	qaNewCompanyModal='<div class="modal fade" id="myqaModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="qacompanyLabel'+index+'" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3 class="modal-title" id="qacompanyLabel'+index+'">'+value.name+'</h3></div><div class="modal-body"><label class="modalSub">About '+value.name+':</label><br>'+value.about+'<br><br><label class="modalSub">Address :</label><br>'+value.addr+'<br><br><label class="modalSub">Job Description and Prerequisites :</label><br>'+value.jobDescPreq+'<br><br><label class="modalSub">Number of interns :</label>&nbsp;'+value.number+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+qabtnStatus+'</div></div></div></div>'

       	qaNewCompanyModalBtn='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myqaModal'+index+'">View More</button><hr style="border:1.8px solid"></div>'


       	qaNewCompany='<div class="col-md-10 col-md-offset-1"><div style="display:table;margin-bottom:2.5%;"><div class="companyName">'+value.name+"</div><div><img src='"+value.image+"'class='companyImage '></div>"+"</div><br><label class='internLocationTitle'>Location : </label><label> "+value.place+"</label><br><table class='infoTable'><tr><th>Start Date</th><th>Duration</th><th>Stipend</th></tr><tr><td>"+value.startDate+"</td><td>"+value.duration+"</td><td>"+value.stipend+"</td></tr></table><br>"

       	qaNewCompany+=qaNewCompanyModalBtn
       	qaNewCompany+=qaNewCompanyModal
    	
    	qaInHtml+=qaNewCompany
    })
    $('.qaInternTile').html(qaInHtml)



})(jQuery);