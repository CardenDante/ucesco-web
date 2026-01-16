// Strapi response wrapper types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}

export interface StrapiAttributes {
  id: number;
  attributes: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

// Media types
export interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: Record<string, unknown>;
      url: string;
      previewUrl: string | null;
      provider: string;
      mime: string;
      size: number;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
}

// Collection Types
export interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: StrapiMedia;
    category: "News" | "Story" | "Update" | "Event";
    publishedAt: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Event {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    location: string;
    date: string;
    endDate: string | null;
    coverImage: StrapiMedia;
    gallery: { data: Array<{ id: number; attributes: Record<string, unknown> }> };
    category: "Medical Camp" | "Workshop" | "Community Event" | "Fundraiser";
    registrationLink: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Award {
  id: number;
  attributes: {
    title: string;
    year: number;
    description: string;
    image: StrapiMedia;
    awardingBody: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface VolunteerOpportunity {
  id: number;
  attributes: {
    title: string;
    slug: string;
    location: "Samburu" | "Mathare" | "Kibera" | "Busia" | "Uganda" | "Flexible";
    duration: string;
    description: string;
    requirements: string;
    responsibilities: string;
    coverImage: StrapiMedia;
    gallery: { data: Array<{ id: number; attributes: Record<string, unknown> }> };
    accommodation: string;
    meals: string;
    fee: number | null;
    available: boolean;
    category: "Medical" | "Education" | "Youth" | "Women Empowerment" | "General";
    createdAt: string;
    updatedAt: string;
  };
}

export interface ImpactStory {
  id: number;
  attributes: {
    title: string;
    slug: string;
    story: string;
    programCategory: "Medical" | "Education" | "Women Empowerment" | "Youth" | "Food Security" | "General";
    location: string;
    coverImage: StrapiMedia;
    gallery: { data: Array<{ id: number; attributes: Record<string, unknown> }> };
    featured: boolean;
    date: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Partner {
  id: number;
  attributes: {
    name: string;
    logo: StrapiMedia;
    url: string | null;
    type: "Partner" | "Badge" | "Certification" | "Donor";
    description: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Child {
  id: number;
  attributes: {
    code: string;
    firstName: string;
    age: number;
    gender: "Male" | "Female";
    location: "Samburu" | "Mathare" | "Kibera" | "Busia" | "Uganda";
    bio: string;
    needs: string;
    photo: StrapiMedia;
    gallery: { data: Array<{ id: number; attributes: Record<string, unknown> }> };
    sponsored: boolean;
    sponsorshipOptions: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
  };
}

export interface MeaningfulTravelExperience {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    duration: string;
    location: string;
    itinerary: string;
    included: string;
    notIncluded: string;
    accommodation: string;
    price: number;
    coverImage: StrapiMedia;
    gallery: { data: Array<{ id: number; attributes: Record<string, unknown> }> };
    available: boolean;
    maxParticipants: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Testimonial {
  id: number;
  attributes: {
    name: string;
    role: string;
    content: string;
    photo: StrapiMedia;
    rating: number;
    category: "Volunteer" | "Meaningful Travel" | "Sponsorship" | "General";
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface TeamMember {
  id: number;
  attributes: {
    name: string;
    position: string;
    bio: string;
    photo: StrapiMedia;
    email: string | null;
    order: number;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface GalleryItem {
  id: number;
  attributes: {
    title: string;
    description: string;
    media: StrapiMedia;
    category: "Medical Camps" | "Education" | "Youth" | "Women" | "Events" | "General";
    location: string;
    date: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  };
}
