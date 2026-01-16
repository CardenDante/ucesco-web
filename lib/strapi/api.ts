import type {
  Post,
  Event,
  Award,
  VolunteerOpportunity,
  ImpactStory,
  Partner,
  Child,
  MeaningfulTravelExperience,
  Testimonial,
  TeamMember,
  GalleryItem,
  StrapiResponse,
  StrapiSingleResponse,
} from "./types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "";

interface FetchOptions {
  populate?: string | string[];
  filters?: Record<string, unknown>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}

/**
 * Base fetch function for Strapi API
 */
async function fetchAPI<T>(
  path: string,
  options: FetchOptions = {},
  config: RequestInit = {}
): Promise<T> {
  const { populate, filters, sort, pagination } = options;

  const queryParams = new URLSearchParams();

  // Add populate
  if (populate) {
    if (Array.isArray(populate)) {
      populate.forEach((field) => queryParams.append("populate", field));
    } else {
      queryParams.append("populate", populate);
    }
  }

  // Add filters
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      queryParams.append(`filters[${key}]`, String(value));
    });
  }

  // Add sort
  if (sort) {
    if (Array.isArray(sort)) {
      sort.forEach((field) => queryParams.append("sort", field));
    } else {
      queryParams.append("sort", sort);
    }
  }

  // Add pagination
  if (pagination) {
    if (pagination.page) {
      queryParams.append("pagination[page]", String(pagination.page));
    }
    if (pagination.pageSize) {
      queryParams.append("pagination[pageSize]", String(pagination.pageSize));
    }
  }

  const url = `${STRAPI_URL}/api${path}?${queryParams.toString()}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_API_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const response = await fetch(url, {
    headers,
    ...config,
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Get media URL
 */
export function getStrapiMediaUrl(url: string | null): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

// ==================== POSTS ====================

export async function getPosts(options: FetchOptions = {}): Promise<StrapiResponse<Post[]>> {
  return fetchAPI<StrapiResponse<Post[]>>("/posts", {
    populate: "*",
    sort: ["publishedAt:desc"],
    ...options,
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const response = await fetchAPI<StrapiResponse<Post[]>>("/posts", {
    populate: "*",
    filters: { slug },
  });
  return response.data[0] || null;
}

export async function getFeaturedPosts(limit: number = 3): Promise<Post[]> {
  const response = await fetchAPI<StrapiResponse<Post[]>>("/posts", {
    populate: "*",
    filters: { featured: true },
    pagination: { pageSize: limit },
    sort: ["publishedAt:desc"],
  });
  return response.data;
}

// ==================== EVENTS ====================

export async function getEvents(options: FetchOptions = {}): Promise<StrapiResponse<Event[]>> {
  return fetchAPI<StrapiResponse<Event[]>>("/events", {
    populate: "*",
    sort: ["date:desc"],
    ...options,
  });
}

export async function getUpcomingEvents(limit: number = 3): Promise<Event[]> {
  const response = await fetchAPI<StrapiResponse<Event[]>>("/events", {
    populate: "*",
    filters: { date: { $gte: new Date().toISOString() } },
    pagination: { pageSize: limit },
    sort: ["date:asc"],
  });
  return response.data;
}

// ==================== AWARDS ====================

export async function getAwards(options: FetchOptions = {}): Promise<StrapiResponse<Award[]>> {
  return fetchAPI<StrapiResponse<Award[]>>("/awards", {
    populate: "*",
    sort: ["year:desc"],
    ...options,
  });
}

// ==================== VOLUNTEER OPPORTUNITIES ====================

export async function getVolunteerOpportunities(
  options: FetchOptions = {}
): Promise<StrapiResponse<VolunteerOpportunity[]>> {
  return fetchAPI<StrapiResponse<VolunteerOpportunity[]>>("/volunteer-opportunities", {
    populate: "*",
    filters: { available: true },
    ...options,
  });
}

export async function getVolunteerOpportunityBySlug(
  slug: string
): Promise<VolunteerOpportunity | null> {
  const response = await fetchAPI<StrapiResponse<VolunteerOpportunity[]>>(
    "/volunteer-opportunities",
    {
      populate: "*",
      filters: { slug },
    }
  );
  return response.data[0] || null;
}

// ==================== IMPACT STORIES ====================

export async function getImpactStories(
  options: FetchOptions = {}
): Promise<StrapiResponse<ImpactStory[]>> {
  return fetchAPI<StrapiResponse<ImpactStory[]>>("/impact-stories", {
    populate: "*",
    sort: ["date:desc"],
    ...options,
  });
}

export async function getImpactStoryBySlug(slug: string): Promise<ImpactStory | null> {
  const response = await fetchAPI<StrapiResponse<ImpactStory[]>>("/impact-stories", {
    populate: "*",
    filters: { slug },
  });
  return response.data[0] || null;
}

export async function getFeaturedImpactStories(limit: number = 3): Promise<ImpactStory[]> {
  const response = await fetchAPI<StrapiResponse<ImpactStory[]>>("/impact-stories", {
    populate: "*",
    filters: { featured: true },
    pagination: { pageSize: limit },
    sort: ["date:desc"],
  });
  return response.data;
}

// ==================== PARTNERS ====================

export async function getPartners(options: FetchOptions = {}): Promise<StrapiResponse<Partner[]>> {
  return fetchAPI<StrapiResponse<Partner[]>>("/partners", {
    populate: "*",
    ...options,
  });
}

export async function getFeaturedPartners(): Promise<Partner[]> {
  const response = await fetchAPI<StrapiResponse<Partner[]>>("/partners", {
    populate: "*",
    filters: { featured: true },
  });
  return response.data;
}

// ==================== CHILDREN (SPONSORSHIP) ====================

export async function getChildren(options: FetchOptions = {}): Promise<StrapiResponse<Child[]>> {
  return fetchAPI<StrapiResponse<Child[]>>("/children", {
    populate: "*",
    filters: { sponsored: false },
    ...options,
  });
}

export async function getChildByCode(code: string): Promise<Child | null> {
  const response = await fetchAPI<StrapiResponse<Child[]>>("/children", {
    populate: "*",
    filters: { code },
  });
  return response.data[0] || null;
}

// ==================== MEANINGFUL TRAVEL ====================

export async function getMeaningfulTravelExperiences(
  options: FetchOptions = {}
): Promise<StrapiResponse<MeaningfulTravelExperience[]>> {
  return fetchAPI<StrapiResponse<MeaningfulTravelExperience[]>>(
    "/meaningful-travel-experiences",
    {
      populate: "*",
      filters: { available: true },
      ...options,
    }
  );
}

export async function getMeaningfulTravelExperienceBySlug(
  slug: string
): Promise<MeaningfulTravelExperience | null> {
  const response = await fetchAPI<StrapiResponse<MeaningfulTravelExperience[]>>(
    "/meaningful-travel-experiences",
    {
      populate: "*",
      filters: { slug },
    }
  );
  return response.data[0] || null;
}

// ==================== TESTIMONIALS ====================

export async function getTestimonials(
  options: FetchOptions = {}
): Promise<StrapiResponse<Testimonial[]>> {
  return fetchAPI<StrapiResponse<Testimonial[]>>("/testimonials", {
    populate: "*",
    ...options,
  });
}

export async function getFeaturedTestimonials(limit: number = 6): Promise<Testimonial[]> {
  const response = await fetchAPI<StrapiResponse<Testimonial[]>>("/testimonials", {
    populate: "*",
    filters: { featured: true },
    pagination: { pageSize: limit },
  });
  return response.data;
}

// ==================== TEAM MEMBERS ====================

export async function getTeamMembers(
  options: FetchOptions = {}
): Promise<StrapiResponse<TeamMember[]>> {
  return fetchAPI<StrapiResponse<TeamMember[]>>("/team-members", {
    populate: "*",
    sort: ["order:asc"],
    ...options,
  });
}

// ==================== GALLERY ====================

export async function getGalleryItems(
  options: FetchOptions = {}
): Promise<StrapiResponse<GalleryItem[]>> {
  return fetchAPI<StrapiResponse<GalleryItem[]>>("/gallery-items", {
    populate: "*",
    sort: ["date:desc"],
    ...options,
  });
}

export async function getFeaturedGalleryItems(limit: number = 12): Promise<GalleryItem[]> {
  const response = await fetchAPI<StrapiResponse<GalleryItem[]>>("/gallery-items", {
    populate: "*",
    filters: { featured: true },
    pagination: { pageSize: limit },
    sort: ["date:desc"],
  });
  return response.data;
}
