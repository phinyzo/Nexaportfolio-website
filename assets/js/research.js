/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Strengthening Cybersecurity Posture in Small and Medium Enterprises",
    authors: "NexaTech Research Team",
    conferences: "International Conference on Information Security & Privacy",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "NexaTech Research Team. Strengthening Cybersecurity Posture in Small and Medium Enterprises. International Conference on Information Security & Privacy 2023.",
    },
    abstract:
      "An exploration of practical, cost-effective cybersecurity frameworks tailored for SMEs, covering threat detection, incident response, and security awareness training.",
    absbox: "absPopup1",
  },

  {
    title: "Cloud-Native Architecture Patterns for Scalable Web Applications",
    authors: "NexaTech Research Team",
    conferences: "International Symposium on Software Engineering & Cloud Computing",
    researchYr: 2023,
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "NexaTech Research Team. Cloud-Native Architecture Patterns for Scalable Web Applications. International Symposium on Software Engineering & Cloud Computing 2023.",
    },
    abstract:
      "A comparative study of microservices, serverless, and containerized deployment strategies for building resilient, scalable web platforms.",
    absbox: "absPopup2",
  },

  {
    title: "AI-Driven Threat Intelligence for Real-Time Network Monitoring",
    authors: "NexaTech Research Team",
    conferences: "Annual Conference on Artificial Intelligence in Cybersecurity",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver:
        "NexaTech Research Team. AI-Driven Threat Intelligence for Real-Time Network Monitoring. Annual Conference on Artificial Intelligence in Cybersecurity 2022.",
    },
    abstract:
      "Investigating the application of machine learning models to detect anomalous network behaviour and automate threat response in enterprise environments.",
    absbox: "absPopup3",
  },

  {
    title: "Secure Software Development Lifecycle: Best Practices and Tooling",
    authors: "NexaTech Research Team",
    conferences: "International Workshop on Secure Software Engineering",
    researchYr: 2022,
    citebox: "popup4",
    image: "assets/images/research-page/dialogueState.png",
    citation: {
      vancouver:
        "NexaTech Research Team. Secure Software Development Lifecycle: Best Practices and Tooling. International Workshop on Secure Software Engineering 2022.",
    },
    abstract:
      "A review of DevSecOps methodologies, static analysis tools, and security testing frameworks integrated into modern CI/CD pipelines.",
    absbox: "absPopup4",
  },

  {
    title: "Mobile Application Security: Vulnerabilities and Mitigation Strategies",
    authors: "NexaTech Research Team",
    conferences: "Conference on Mobile Computing & Security",
    researchYr: 2022,
    citebox: "popup5",
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver:
        "NexaTech Research Team. Mobile Application Security: Vulnerabilities and Mitigation Strategies. Conference on Mobile Computing & Security 2022.",
    },
    abstract:
      "An analysis of common mobile app vulnerabilities including insecure data storage, improper authentication, and insufficient transport layer security.",
    absbox: "absPopup5",
  },

  {
    title: "IT Consulting Frameworks for Digital Transformation in Emerging Markets",
    authors: "NexaTech Research Team",
    conferences: "International Conference on IT Management & Digital Innovation",
    researchYr: 2021,
    citebox: "popup6",
    image: "assets/images/research-page/deepNetwork.png",
    citation: {
      vancouver:
        "NexaTech Research Team. IT Consulting Frameworks for Digital Transformation in Emerging Markets. International Conference on IT Management & Digital Innovation 2021.",
    },
    abstract:
      "Examining structured IT consulting approaches that help organisations in emerging markets adopt digital tools, improve operational efficiency, and reduce technology risk.",
    absbox: "absPopup6",
  },
];

AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
