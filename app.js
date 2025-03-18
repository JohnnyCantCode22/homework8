document.addEventListener("DOMContentLoaded", () => {
    // Skills Section
    document.getElementById("addSkill").addEventListener("click", () => {
        let skillInput = document.getElementById("skillInput").value.trim();
        if (skillInput) {
            let li = document.createElement("li");
            li.textContent = skillInput;
            document.getElementById("skillList").appendChild(li);
            document.getElementById("skillInput").value = "";
        }
    });

    // Projects Section (Improved Layout)
    let projects = [
        { title: "Network Penetration Testing", description: "Used Kali Linux tools to perform security assessments.", deadline: "2025-05-01" },
        { title: "Threat Intelligence Analysis", description: "Analyzed security logs for cyber threat detection.", deadline: "2023-12-15" },
        { title: "Web Application Security", description: "Performed SQL injection & XSS vulnerability tests.", deadline: "2024-07-10" }
    ];

    let projectContainer = document.getElementById("projectContainer");
    let today = new Date();

    projects.forEach(project => {
        let projectDiv = document.createElement("div");
        let deadlineDate = new Date(project.deadline);
        let status = deadlineDate > today ? "Ongoing" : "Completed";

        projectDiv.innerHTML = `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Deadline:</strong> ${project.deadline} - <strong>Status:</strong> ${status}</p>
            </div>
        `;
        projectContainer.appendChild(projectDiv);
    });

    // Resume Download Counter
    let downloadCount = 0;
    document.getElementById("downloadResume").addEventListener("click", () => {
        downloadCount++;
        document.getElementById("downloadCount").textContent = downloadCount;
    });

    // Work Experience Table
    let experienceData = [
        { job: "Cybersecurity Intern", company: "XYZ Security", start: "2023-06", end: "2023-12" },
        { job: "Penetration Tester", company: "Freelance", start: "2024-01", end: "Present" }
    ];

    let experienceTable = document.querySelector("#experienceTable tbody");
    experienceData.forEach(exp => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${exp.job}</td><td>${exp.company}</td><td>${exp.start}</td><td>${exp.end}</td>`;
        experienceTable.appendChild(row);
    });

    // Education Table
    let educationData = [
        { degree: "BSc Cybersecurity", institution: "Northern Arizona University", start: "2022", end: "2026" }
    ];

    let educationTable = document.querySelector("#educationTable tbody");
    educationData.forEach(edu => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${edu.degree}</td><td>${edu.institution}</td><td>${edu.start}</td><td>${edu.end}</td>`;
        educationTable.appendChild(row);
    });

    // Dark Mode Toggle
    document.getElementById("toggleTheme").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});