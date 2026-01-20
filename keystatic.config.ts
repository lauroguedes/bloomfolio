import { config, fields, collection, singleton } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

export default config({
  storage: import.meta.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
    ? {
        kind: "github",
        repo: {
          owner: import.meta.env.PUBLIC_KEYSTATIC_REPO_OWNER!,
          name: import.meta.env.PUBLIC_KEYSTATIC_REPO_NAME!,
        },
      }
    : {
        kind: "local",
      },

  singletons: {
    hero: singleton({
      label: "Hero Section",
      path: "src/content/hero/",
      schema: {
        name: fields.text({
          label: "Name",
          description: "Your name or site name",
        }),
        title: fields.text({
          label: "Title",
          description: "Main headline/tagline",
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          description: "Hero section description",
        }),
        avatar: fields.image({
          label: "Avatar",
          directory: "src/assets/hero",
          publicPath: "@assets/hero/",
        }),
        location: fields.text({
          label: "Location",
          description: 'e.g., "🇧🇷 Brazil"',
        }),
        socialLinks: fields.array(
          fields.object({
            url: fields.text({
              label: "URL",
              description: "Profile URL or mailto: link",
              validation: { isRequired: true },
            }),
            icon: fields.select({
              label: "Icon",
              description: "Select a social media icon",
              options: [
                { label: "GitHub", value: "GitHub" },
                { label: "LinkedIn", value: "LinkedIn" },
                { label: "Twitter/X", value: "Twitter" },
                { label: "Bluesky", value: "Bluesky" },
                { label: "Instagram", value: "Instagram" },
                { label: "YouTube", value: "YouTube" },
                { label: "Email", value: "Email" },
                { label: "CodeTips (Folder)", value: "FolderCode" },
              ],
              defaultValue: "GitHub",
            }),
            label: fields.text({
              label: "Aria Label",
              description: "Accessibility label (e.g., 'GitHub', 'Email')",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Social Links",
            itemLabel: (props) => props.fields.label.value || "New Link",
            description: "Your social media and contact links",
          }
        ),
      },
    }),

    about: singleton({
      label: "About",
      path: "src/content/about/",
      format: {
        contentField: "content",
      },
      schema: {
        title: fields.text({
          label: "Title",
          description: "About section title",
        }),
        photo: fields.image({
          label: "Photo",
          directory: "src/assets/about",
          publicPath: "@assets/about/",
          description: "Your photo for the about section",
        }),
        content: fields.markdoc({
          label: "Content",
          description: "About section content (supports Markdown)",
          extension: "md",
        }),
        link: fields.url({
          label: "LinkedIn URL or Other",
          description: "Your LinkedIn profile URL or other link",
        }),
      },
    }),

    general: singleton({
      label: "General Settings",
      path: "src/content/general/",
      schema: {
        enableThemeSelector: fields.checkbox({
          label: "Enable Theme Selector",
          description: "Show theme dropdown instead of toggle switch",
          defaultValue: true,
        }),
        extraLinksEnabled: fields.checkbox({
          label: "Enable Extra Links FAB",
          description: "Show floating action button with extra links",
          defaultValue: true,
        }),
        extraLinks: fields.array(
          fields.object({
            link: fields.text({
              label: "Link URL",
              description: "URL or path (e.g., /blog or https://example.com)",
              validation: { isRequired: true },
            }),
            icon: fields.select({
              label: "Icon",
              description: "Select an icon from Lucide icon library",
              options: [
                { label: "Flower (Flower2)", value: "Flower2" },
                { label: "Book (BookOpen)", value: "BookOpen" },
                { label: "File (FileText)", value: "FileText" },
                { label: "Code (CodeXml)", value: "CodeXml" },
                { label: "Mail (Mail)", value: "Mail" },
                { label: "Home (Home)", value: "Home" },
                { label: "User (User)", value: "User" },
                { label: "Briefcase (Briefcase)", value: "Briefcase" },
                {
                  label: "Graduation Cap (GraduationCap)",
                  value: "GraduationCap",
                },
                { label: "Link (Link)", value: "Link" },
              ],
              defaultValue: "Link",
            }),
            label: fields.text({
              label: "Tooltip Label",
              description: "Label shown on hover",
              validation: { isRequired: true },
            }),
            displayOn: fields.select({
              label: "Display On",
              description: "Where this link should be displayed",
              options: [
                { label: "Both (Dock & Fab)", value: "both" },
                { label: "Only Dock (Mobile)", value: "dock" },
                { label: "Only Fab (Desktop)", value: "fab" },
              ],
              defaultValue: "both",
            }),
          }),
          {
            label: "Extra Links",
            itemLabel: (props) => props.fields.label.value || "New Link",
            description: "Links to display in the floating action button",
          }
        ),
        showAboutSection: fields.checkbox({
          label: "Show About Section",
          defaultValue: true,
        }),
        showProjectsSection: fields.checkbox({
          label: "Show Projects Section",
          defaultValue: true,
        }),
        showBlogSection: fields.checkbox({
          label: "Show Blog Section",
          defaultValue: true,
        }),
        showWorkSection: fields.checkbox({
          label: "Show Work Experience Section",
          defaultValue: true,
        }),
        showEducationSection: fields.checkbox({
          label: "Show Education Section",
          defaultValue: true,
        }),
        showHackathonsSection: fields.checkbox({
          label: "Show Hackathons Section",
          defaultValue: true,
        }),
        showContactSection: fields.checkbox({
          label: "Show Contact Section",
          defaultValue: true,
        }),
      },
    }),

    contact: singleton({
      label: "Contact Section",
      path: "src/content/contact/",
      format: { contentField: "content" },
      schema: {
        icon: fields.select({
          label: "Section Icon",
          description: "Icon displayed at the top of contact section",
          options: [
            {
              label: "Message Circle (MessageCircleCode)",
              value: "MessageCircleCode",
            },
            { label: "Mail (Mail)", value: "Mail" },
            { label: "Phone (Phone)", value: "Phone" },
          ],
          defaultValue: "MessageCircleCode",
        }),
        content: fields.markdoc({
          label: "Contact Message",
          description: "Main contact message (supports Markdown)",
          extension: "md",
        }),
        linkUrl: fields.url({
          label: "Contact Link URL",
          description: "URL for contact link (e.g., Twitter profile)",
        }),
        linkText: fields.text({
          label: "Contact Link Text",
          description: "Text for the contact link",
        }),
        footerIcon: fields.select({
          label: "Footer Icon",
          description: "Icon for footer credit",
          options: [
            { label: "Pickaxe", value: "Pickaxe" },
            { label: "Hammer (Hammer)", value: "Hammer" },
            { label: "Heart (Heart)", value: "Heart" },
          ],
          defaultValue: "Pickaxe",
        }),
        footerText: fields.text({
          label: "Footer Text",
          description: "Footer credit text",
          defaultValue: "Crafted by an Artisan",
        }),
        footerLinkText: fields.text({
          label: "Footer Link Text",
          description: "Name/text for footer link",
        }),
        footerLinkUrl: fields.url({
          label: "Footer Link URL",
          description: "URL for footer credit link",
        }),
      },
    }),
  },

  collections: {
    work: collection({
      label: "Work Experience",
      path: "src/content/work/*",
      slugField: "title",
      format: {
        contentField: "content",
      },
      schema: {
        title: fields.slug({
          name: { label: "Company Name" },
        }),
        subtitle: fields.text({
          label: "Position",
          description: "Job title/role",
        }),
        location: fields.text({
          label: "Location",
          description: "Country or city (e.g., 'Brazil', 'Remote')",
        }),
        startDate: fields.date({
          label: "Start Date",
          validation: { isRequired: true },
        }),
        endDate: fields.date({
          label: "End Date",
          description: "Leave empty if current position",
        }),
        logo: fields.image({
          label: "Company Logo",
          directory: "src/assets/work",
          publicPath: "@assets/work/",
          description: "Optional company logo",
        }),
        link: fields.url({
          label: "Company Website",
          description: "Optional link to company website",
        }),
        content: fields.markdoc({
          label: "Description",
          description: "Job responsibilities and achievements",
          extension: "md",
        }),
        skills: fields.array(fields.text({ label: "Skill" }), {
          label: "Skills/Technologies",
          itemLabel: (props) => props.value,
          description: "Technologies and tools used in this role",
        }),
      },
    }),

    education: collection({
      label: "Education",
      path: "src/content/education/*",
      slugField: "title",
      format: {
        contentField: "content",
      },
      schema: {
        title: fields.slug({
          name: { label: "Institution Name" },
        }),
        subtitle: fields.text({
          label: "Degree/Course",
          description: 'e.g., "Bachelor of Computer Science"',
        }),
        startDate: fields.date({
          label: "Start Date",
          validation: { isRequired: true },
        }),
        endDate: fields.date({
          label: "End Date",
          description: "Leave empty if ongoing",
        }),
        logo: fields.image({
          label: "Institution Logo",
          directory: "src/assets/education",
          publicPath: "@assets/education/",
          description: "Optional institution logo",
        }),
        link: fields.url({
          label: "Institution Website",
          description: "Optional link to institution website",
        }),
        content: fields.markdoc({
          label: "Description",
          description: "Education details and achievements",
          extension: "md",
        }),
      },
    }),

    projects: collection({
      label: "Projects",
      path: "src/content/projects/*",
      slugField: "title",
      entryLayout: "content",
      format: {
        contentField: "content",
      },
      schema: {
        featured: fields.checkbox({
          label: "Featured Project",
          description: "Show this project on the homepage",
          defaultValue: false,
        }),
        title: fields.slug({
          name: { label: "Project Name" },
        }),
        description: fields.text({
          label: "Short Description",
          multiline: true,
          description: "Brief project summary for cards",
        }),
        image: fields.image({
          label: "Project Image",
          directory: "src/assets/projects",
          publicPath: "@assets/projects/",
          validation: { isRequired: true },
          description: "Main project image",
        }),
        startDate: fields.date({
          label: "Start Date",
          validation: { isRequired: true },
        }),
        endDate: fields.date({
          label: "End Date",
          description: "Leave empty if ongoing",
        }),
        skills: fields.array(fields.text({ label: "Skill" }), {
          label: "Skills/Technologies",
          itemLabel: (props) => props.value,
          description: "Technologies and tools used in this project",
        }),
        demoLink: fields.url({
          label: "Demo Link",
          description: "Live demo URL (optional)",
        }),
        sourceLink: fields.url({
          label: "Source Code Link",
          description: "GitHub or repository URL (optional)",
        }),
        content: fields.markdoc({
          label: "Full Description",
          description: "Detailed project information",
          extension: "md",
          options: {
            image: {
              directory: "src/assets/projects",
              publicPath: "@assets/projects/",
            },
          },
          components: {
            Spotify: block({
              label: "Spotify Playlist",
              schema: {
                url: fields.text({ label: "Playlist ID" }),
              },
            }),
          },
        }),
      },
    }),

    blog: collection({
      label: "Blog Posts",
      path: "src/content/blog/**",
      slugField: "title",
      entryLayout: "content",
      format: {
        contentField: "content",
      },
      schema: {
        title: fields.slug({
          name: { label: "Post Title" },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          description: "SEO description and excerpt",
        }),
        image: fields.image({
          label: "Cover Image",
          directory: "src/assets/blog",
          publicPath: "@assets/blog/",
          validation: { isRequired: true },
          description: "Blog post cover image",
        }),
        publishDate: fields.date({
          label: "Publish Date",
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({
          label: "Updated Date",
          description: "Last update date (optional)",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
          description: "Blog post tags",
        }),
        content: fields.markdoc({
          label: "Content",
          description: "Blog post content",
          options: {
            image: {
              directory: "src/assets/blog",
              publicPath: "@assets/blog/",
            },
          },
          components: {
            Spotify: block({
              label: "Spotify Embed",
              schema: {
                url: fields.text({
                  label: "Spotify URL",
                  description:
                    "Full Spotify URL (track, album, playlist, or podcast)",
                  validation: { isRequired: true },
                }),
              },
            }),
            YouTube: block({
              label: "YouTube Video",
              schema: {
                id: fields.text({
                  label: "Video ID",
                  description: "YouTube video ID (optional if URL is provided)",
                }),
                url: fields.text({
                  label: "YouTube URL",
                  description: "Full YouTube URL (optional if ID is provided)",
                }),
              },
            }),
            Twitter: block({
              label: "Twitter/X Embed",
              schema: {
                url: fields.text({
                  label: "Tweet URL",
                  description: "Full Twitter/X URL",
                }),
                id: fields.text({
                  label: "Tweet ID",
                  description: "Tweet ID (optional if URL is provided)",
                }),
                username: fields.text({
                  label: "Username",
                  description: "Twitter username (optional if URL is provided)",
                }),
              },
            }),
          },
        }),
      },
    }),

    hackathons: collection({
      label: "Hackathons",
      path: "src/content/hackathons/*",
      slugField: "title",
      format: {
        contentField: "content",
      },
      schema: {
        title: fields.slug({
          name: { label: "Hackathon Name" },
        }),
        location: fields.text({
          label: "Location",
          description: 'City, venue, or "Virtual"',
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          description: "Brief hackathon summary",
        }),
        startDate: fields.date({
          label: "Start Date",
          validation: { isRequired: true },
        }),
        endDate: fields.date({
          label: "End Date",
          description: "Last day of event (optional)",
        }),
        logo: fields.image({
          label: "Event Logo",
          directory: "src/assets/hackathons",
          publicPath: "@assets/hackathons/",
          description: "Optional event logo",
        }),
        sourceLink: fields.url({
          label: "Project Link",
          description: "GitHub repo or project URL (optional)",
        }),
        content: fields.markdoc({
          label: "Full Description",
          description: "Detailed information about the hackathon and project",
          extension: "md",
        }),
      },
    }),
  },
});
