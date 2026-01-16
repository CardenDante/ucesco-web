# UCESCO Strapi CMS Schema

This document outlines the content types (collections) to be created in Strapi.

## Collections to Create

### 1. Post (Blog/News)
**API ID:** `post`
**Display Name:** Posts

Fields:
- `title` (Text, required)
- `slug` (UID, attached to title, required)
- `excerpt` (Text, max 200 chars)
- `content` (Rich Text, required)
- `coverImage` (Media, single image)
- `category` (Enumeration: News, Story, Update, Event)
- `publishedAt` (DateTime)
- `author` (Relation to User)
- `featured` (Boolean, default false)

### 2. Event
**API ID:** `event`
**Display Name:** Events

Fields:
- `title` (Text, required)
- `slug` (UID, attached to title, required)
- `description` (Rich Text, required)
- `location` (Text, required)
- `date` (DateTime, required)
- `endDate` (DateTime)
- `coverImage` (Media, single image)
- `gallery` (Media, multiple images)
- `category` (Enumeration: Medical Camp, Workshop, Community Event, Fundraiser)
- `registrationLink` (Text)

### 3. Award
**API ID:** `award`
**Display Name:** Awards

Fields:
- `title` (Text, required)
- `year` (Number, required)
- `description` (Rich Text)
- `image` (Media, single image)
- `awardingBody` (Text)
- `featured` (Boolean, default false)

### 4. Volunteer Opportunity
**API ID:** `volunteer-opportunity`
**Display Name:** Volunteer Opportunities

Fields:
- `title` (Text, required)
- `slug` (UID, attached to title, required)
- `location` (Enumeration: Samburu, Mathare, Kibera, Busia, Uganda, Flexible)
- `duration` (Text, e.g., "2 weeks", "1 month")
- `description` (Rich Text, required)
- `requirements` (Rich Text, required)
- `responsibilities` (Rich Text)
- `coverImage` (Media, single image)
- `gallery` (Media, multiple images)
- `accommodation` (Text)
- `meals` (Text)
- `fee` (Number)
- `available` (Boolean, default true)
- `category` (Enumeration: Medical, Education, Youth, Women Empowerment, General)

### 5. Impact Story
**API ID:** `impact-story`
**Display Name:** Impact Stories

Fields:
- `title` (Text, required)
- `slug` (UID, attached to title, required)
- `story` (Rich Text, required)
- `programCategory` (Enumeration: Medical, Education, Women Empowerment, Youth, Food Security, General)
- `location` (Text)
- `coverImage` (Media, single image)
- `gallery` (Media, multiple images)
- `featured` (Boolean, default false)
- `date` (DateTime)

### 6. Partner/Badge
**API ID:** `partner`
**Display Name:** Partners

Fields:
- `name` (Text, required)
- `logo` (Media, single image, required)
- `url` (Text)
- `type` (Enumeration: Partner, Badge, Certification, Donor)
- `description` (Text)
- `featured` (Boolean, default false)

### 7. Child Profile (Optional for Sponsorship)
**API ID:** `child`
**Display Name:** Children

Fields:
- `code` (Text, required, unique - e.g., "KE-001")
- `firstName` (Text, required)
- `age` (Number, required)
- `gender` (Enumeration: Male, Female)
- `location` (Enumeration: Samburu, Mathare, Kibera, Busia, Uganda)
- `bio` (Rich Text, required)
- `needs` (Rich Text)
- `photo` (Media, single image)
- `gallery` (Media, multiple images)
- `sponsored` (Boolean, default false)
- `sponsorshipOptions` (JSON)

### 8. Meaningful Travel Experience
**API ID:** `meaningful-travel-experience`
**Display Name:** Meaningful Travel Experiences

Fields:
- `title` (Text, required)
- `slug` (UID, attached to title, required)
- `description` (Rich Text, required)
- `duration` (Text, e.g., "7 days", "2 weeks")
- `location` (Text, required)
- `itinerary` (Rich Text)
- `included` (Rich Text)
- `notIncluded` (Rich Text)
- `accommodation` (Text)
- `price` (Number)
- `coverImage` (Media, single image)
- `gallery` (Media, multiple images)
- `available` (Boolean, default true)
- `maxParticipants` (Number)

### 9. Testimonial
**API ID:** `testimonial`
**Display Name:** Testimonials

Fields:
- `name` (Text, required)
- `role` (Text, e.g., "Volunteer", "Donor", "Partner")
- `content` (Text, required, max 500 chars)
- `photo` (Media, single image)
- `rating` (Number, min 1, max 5)
- `category` (Enumeration: Volunteer, Meaningful Travel, Sponsorship, General)
- `featured` (Boolean, default false)

### 10. Team Member
**API ID:** `team-member`
**Display Name:** Team Members

Fields:
- `name` (Text, required)
- `position` (Text, required)
- `bio` (Rich Text)
- `photo` (Media, single image)
- `email` (Email)
- `order` (Number, for sorting)
- `featured` (Boolean, default false)

### 11. Gallery Item
**API ID:** `gallery-item`
**Display Name:** Gallery

Fields:
- `title` (Text, required)
- `description` (Text)
- `media` (Media, single image or video)
- `category` (Enumeration: Medical Camps, Education, Youth, Women, Events, General)
- `location` (Text)
- `date` (DateTime)
- `featured` (Boolean, default false)

## API Permissions

For each collection, ensure to set the following permissions in Strapi:

**Public role permissions:**
- `find` (list all)
- `findOne` (get single item)

**Authenticated role:**
- All CRUD operations for managing content

## Environment Variables for Next.js

Add to `.env.local` in Next.js:
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here
```

## Notes

1. All collections should have `createdAt` and `updatedAt` timestamps (automatic)
2. Enable "Draft & Publish" for Posts, Events, and Impact Stories
3. Configure image optimization in Strapi for better performance
4. Set up proper SEO fields using the Strapi SEO plugin (optional)
