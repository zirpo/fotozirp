Product Requirements Document (PRD)
Project Title: Black & White Photography Portfolio
Owner: Zirpo
Hosting Platform: GitHub Pages

⸻

1. Purpose

Create a minimalist, modern website to showcase black and white photography projects. Each project (or “showroom”) will have its own folder and page, highlighting a series of optimized images. The focus is on visual impact, simplicity, and performance.

⸻

2. Objectives
	•	Present curated black and white photo projects with minimal distraction.
	•	Ensure fast loading through image optimization.
	•	Maintain simple maintenance and scalability using GitHub Pages.
	•	Support future addition of projects without technical complexity.

⸻

3. Target Audience
	•	Photography enthusiasts and potential collaborators.
	•	Art galleries or curators evaluating photographic work.
	•	General public interested in fine art photography.

⸻

4. Scope

In Scope
	•	Static website hosted via GitHub Pages.
	•	Individual subpages per project folder.
	•	Responsive layout for desktop, tablet, and mobile.
	•	Image optimization pipeline (manual or automated).
	•	Basic navigation and branding.

Out of Scope
	•	User accounts or comments.
	•	Backend or database.
	•	Online shop or print sales.
	•	Dynamic content or CMS integration.

⸻

5. Content Structure

Section	Description	Example
Home Page	Overview of photographer and links to projects	“Berlin Series”, “Iceland Light”
Project Page	Gallery of images + short description or date	Grid or horizontal scroll
About Page	Short biography or statement	Optional
Contact	Simple email link or social links	“mailto:” or Instagram handle


⸻

6. Design Requirements
	•	Visual Style: Monochrome, minimalist, modern typography.
	•	Colors: Black, white, gray scale only.
	•	Font: Sans-serif, geometric (e.g., Inter, Helvetica, Lato).
	•	Layout: Grid or masonry gallery with lightbox view.
	•	Navigation: Simple top or bottom bar with Home, Projects, About, Contact.
	•	Transitions: Subtle fades, no heavy animation.

⸻

7. Technical Requirements

Category	Requirement
Framework	Static HTML/CSS/JS (no frameworks unless necessary)
Hosting	GitHub Pages
Image Format	.webp preferred, max width 1600px
Optimization	Compression quality target 70–80%
Accessibility	Alt text for all images, keyboard navigation
Responsiveness	Must adapt to mobile, tablet, desktop
Browser Support	Latest versions of Chrome, Safari, Firefox, Edge


⸻

8. Maintenance
	•	Adding a new project = create folder under /projects/ with index.html + images.
	•	Update main navigation manually or through a simple script.
	•	Commit to main branch → auto-deploy via GitHub Pages.

⸻

9. Success Metrics
	•	Page load under 2 s for any gallery page.
	•	Lighthouse performance score ≥ 90.
	•	Mobile usability score ≥ 95.
	•	Simplicity of project addition (≤ 3 steps).

⸻

10. Future Enhancements (Optional)
	•	Add EXIF or description overlay.
	•	Integrate analytics (privacy-friendly).
	•	Support for multilingual captions.
	•	Add lazy loading for large series.
