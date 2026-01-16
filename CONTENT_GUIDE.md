# UCESCO Website Content Integration Guide

This guide explains how to replace placeholder content with actual content from the provided Word documents in `public/UCESCO_WEBSITE_CONTENT_2026-01-01/01_Text_Content-/`.

## 📄 Content Files Available

The following Word documents contain actual content that should replace the current placeholder text:

1. **About UCESCO.docx** → `/app/about/page.tsx`
2. **Child Sponsorship.docx** → `/app/sponsor/page.tsx`
3. **Contact details.docx** → `/app/contact/page.tsx`
4. **Get Involved.docx** → `/app/get-involved/page.tsx`
5. **Homepage_Content.docx** → `/app/page.tsx`
6. **Medical_Volunteer_Content.docx** → `/app/apply-medic/page.tsx`
7. **Our Impact.docx** → `/app/impact/page.tsx`
8. **Programs & Projects.docx** → `/app/programs/` (all program pages)
9. **Volunteer Program.docx** → `/app/volunteer/page.tsx`
10. **Volunteer_s Testimonials (1).doc** → `/app/volunteer/page.tsx`

## 🔄 How to Extract and Use Content

### Step 1: Extract Content from Word Documents

Since the Word documents can't be read programmatically, you'll need to:

1. Open each `.docx` file in Microsoft Word, Google Docs, or LibreOffice
2. Copy the content
3. Replace the placeholder content in the corresponding page file

### Step 2: Content Mapping Guide

#### Homepage (`/app/page.tsx`)
**Source:** `Homepage_Content.docx`

Replace the following sections:
- Hero title and description
- Stats section numbers and labels
- Program highlights descriptions
- Any specific messaging or value propositions

**Current placeholder:**
```tsx
title="Building Futures, Transforming Lives"
description="Empowering communities across Kenya and Uganda..."
```

#### About Page (`/app/about/page.tsx`)
**Source:** `About UCESCO.docx`

Replace:
- Mission statement
- Vision statement
- Values descriptions
- History/story narrative
- Where we work descriptions
- Team member information (if provided)

**Location in file:** Lines 50-80 (Mission/Vision sections)

#### Sponsor a Child (`/app/sponsor/page.tsx`)
**Source:** `Child Sponsorship.docx`

Replace:
- How sponsorship works description
- What sponsorship covers
- FAQ answers
- Pricing information
- Safeguarding text

**Location in file:** Lines 140-190 (How Sponsorship Works section)

#### Volunteer Page (`/app/volunteer/page.tsx`)
**Sources:** `Volunteer Program.docx` + `Volunteer_s Testimonials (1).doc`

Replace:
- Why volunteer section
- Program descriptions
- Requirements
- What's included
- Testimonials (from the separate testimonials document)

**Location in file:** Lines 80-120 (Testimonials section at bottom)

#### Apply as Medic (`/app/apply-medic/page.tsx`)
**Source:** `Medical_Volunteer_Content.docx`

Replace:
- Program overview
- Requirements list
- Responsibilities list
- What we provide

**Location in file:** Lines 30-60 (Requirements and Responsibilities)

#### Impact Page (`/app/impact/page.tsx`)
**Source:** `Our Impact.docx`

Replace:
- Impact statistics
- Program-specific impact numbers
- Success stories

**Location in file:** Lines 30-80 (Statistics sections)

#### Programs Pages (`/app/programs/*.tsx`)
**Source:** `Programs & Projects.docx`

The document likely contains content for all 5 programs:
1. Medical Camps → `/app/programs/medical-camps/page.tsx`
2. Women Empowerment → `/app/programs/women-empowerment/page.tsx`
3. Education → `/app/programs/education/page.tsx`
4. Youth Development → `/app/programs/youth-development/page.tsx`
5. Food Security → `/app/programs/food-security/page.tsx`

Replace program-specific content in each file.

#### Contact Page (`/app/contact/page.tsx`)
**Source:** `Contact details.docx`

Replace:
- Office addresses
- Phone numbers
- Email addresses
- Office hours
- Location-specific details

**Location in file:** Lines 80-160 (Contact information section)

#### Get Involved (`/app/get-involved/page.tsx`)
**Source:** `Get Involved.docx`

Replace:
- Ways to help descriptions
- Call-to-action text
- FAQ content

**Location in file:** Throughout the entire file

## 📊 Images Integration

Images are organized in `public/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/`:

- **Child_Sponsorship-/** → Use in `/app/sponsor/` pages
- **Events-/** → Use in blog posts and events
- **Homepage-/** → Use in `/app/page.tsx` hero or sections
- **Impact-/** → Use in `/app/impact/` pages
- **Medical_Camps-/** → Use in `/app/programs/medical-camps/`
- **Meaningful_Travel-/** → Use in `/app/meaningful-travel/`
- **Programs-/** → Use across various `/app/programs/` pages
- **Volunteer-/** → Use in `/app/volunteer/` pages

### How to Replace Image Paths

Current placeholder images use paths like:
```tsx
src="/UCESCO_WEBSITE_CONTENT_2026-01-01/02_Images-/Medical_Camps-/IMG_1819.JPG"
```

Browse the image folders and replace with the most appropriate images for each section.

## 🎯 Priority Content to Replace

### High Priority (Core Messaging)
1. ✅ Homepage hero and main sections
2. ✅ About page mission/vision
3. ✅ Sponsor a Child page descriptions
4. ✅ Contact details (phone, email, addresses)

### Medium Priority (Program Details)
5. ✅ All program pages content
6. ✅ Volunteer program details
7. ✅ Medical volunteer content
8. ✅ Impact statistics

### Lower Priority (Can Update Later)
9. Blog post examples
10. Impact story examples
11. Testimonials

## 📝 Step-by-Step Process

### For Each Page:

1. **Open the Word document**
2. **Identify the relevant section** in the corresponding page file
3. **Copy the content** from Word
4. **Replace placeholder text** in the TypeScript/React file
5. **Maintain the HTML structure** - keep the same tags but replace the text content
6. **Update any numbers, statistics, or facts**
7. **Test the page** to ensure formatting looks good

### Example Replacement

**Before (placeholder):**
```tsx
<p className="mt-4 text-lg leading-relaxed text-muted-foreground">
  To empower underserved communities across Kenya and Uganda through sustainable programs...
</p>
```

**After (actual content from Word doc):**
```tsx
<p className="mt-4 text-lg leading-relaxed text-muted-foreground">
  [Paste actual mission statement from About UCESCO.docx here]
</p>
```

## ⚠️ Important Notes

1. **Preserve the structure** - Don't change the HTML tags, just the text content
2. **Maintain styling** - Keep className attributes as they are
3. **Format as needed** - If content has bullet points, convert to `<ul><li>` tags
4. **Update statistics** - Replace all placeholder numbers with actual data
5. **Check links** - Update any URLs mentioned in the documents
6. **Hero video** - Add the actual video file referenced: `Where Hope Takes Root I Education and Care for Communities.mp4`

## 🖼️ Hero Video

The homepage references a hero video that should be placed at:
```
/public/Where Hope Takes Root I Education and Care for Communities.mp4
```

If you have this video, upload it to the `/public` folder.

## ✅ Verification Checklist

After replacing content, verify:

- [ ] All contact information is correct (phone, email, addresses)
- [ ] Mission and vision statements match official documents
- [ ] Statistics and numbers are accurate and up-to-date
- [ ] Program descriptions are complete
- [ ] Testimonials are real and attributed correctly
- [ ] All images display correctly
- [ ] Hero video plays (if available)
- [ ] No placeholder text remains (search for "placeholder", "example", "lorem")

## 🚀 Next Steps

1. Start with high-priority pages (Homepage, About, Contact)
2. Work through program pages
3. Update volunteer and sponsorship pages
4. Add real testimonials
5. Test all pages thoroughly
6. Get content approved by UCESCO team

## 📞 Questions?

If you're unsure about any content placement, refer to the existing structure in the page files - they're designed to accommodate the content from these documents.

---

**Note:** This is placeholder/template content. The actual content from your Word documents will be much more compelling and accurate!
