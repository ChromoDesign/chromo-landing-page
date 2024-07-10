export type TeamMember = {
  name: string;
  jobTitle: string;
  socials: {
    linkedin: string;
    twitter: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export const TEAM_MEMBERS = [
  {
    name: "John Doe",
    jobTitle: "CEO",
    socials: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
    image: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "John Doe",
    },
  },
  {
    name: "Jane Doe",
    jobTitle: "CTO",
    socials: {
      linkedin: "https://www.linkedin.com/in/janedoe",
      twitter: "https://twitter.com/janedoe",
    },
    image: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "Jane Doe",
    },
  },
  {
    name: "John Doe",
    jobTitle: "CEO",
    socials: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
    image: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "John Doe",
    },
  },
  {
    name: "Jane Doe",
    jobTitle: "CTO",
    socials: {
      linkedin: "https://www.linkedin.com/in/janedoe",
      twitter: "https://twitter.com/janedoe",
    },
    image: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "Jane Doe",
    },
  },
] as const satisfies TeamMember[];
