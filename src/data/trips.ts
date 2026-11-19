import type { Lang } from '../components/i18n'

export interface Trip {
  id: string
  slug: string
  rating: number
  reviewsCount: number
  imageUrl: string
  gallery: string[]
  numericPrice: number
  maxGuests: number
  bedrooms: number
  i18n: Record<
    Lang,
    {
      title: string
      location: string
      duration: string
      price: string
      short: string
      description: string
      highlights: string[]
      dates: string
      departure: string
      returnTime: string
      amenities: string[]
      included: string[]
      itinerary: { day: string; text: string }[]
      requirements: string[]
      booking: string
      tag: string
    }
  >
}

const base = {
  dates: { fa: 'بر اساس هماهنگی', en: 'By arrangement' },
  departure: { fa: 'حرکت: طبق برنامه', en: 'Departure: per plan' },
  returnTime: { fa: 'بازگشت: طبق برنامه', en: 'Return: per plan' },
  booking: { fa: 'رزرو با تأیید نهایی انجام می‌شود.', en: 'Booking is completed with final confirmation.' },
  amenities: { fa: ['اقامت منتخب', 'راهنمای محلی', 'برنامه‌ریزی سفر'], en: ['Selected stay', 'Local guide', 'Trip planning'] },
  included: { fa: ['برنامه سفر', 'راهنما', 'پشتیبانی'], en: ['Itinerary', 'Guide', 'Support'] },
  requirements: { fa: ['کفش راحت', 'کارت شناسایی'], en: ['Comfortable shoes', 'ID card'] },
}

export const FEATURED_TRIPS: Trip[] = [
  {
    id: '1', slug: 'masal-highlands', rating: 4.9, reviewsCount: 38, imageUrl: '/img/masal02.jpg',
    gallery: ['/img/masal02.jpg', '/img/home01.jpg', '/img/home02.jpg'], numericPrice: 3850000, maxGuests: 6, bedrooms: 2,
    i18n: {
      fa: { title: 'ییلاقات مه‌آلود ماسال', location: 'گیلان، ماسال', duration: '۳ روز / ۲ شب', price: '۳٬۸۵۰٬۰۰۰ تومان', short: 'اقامت در ییلاقات مه‌آلود با جنگل هیرکانی و هوای کوهستانی.', description: 'تجربه آرامش در کلبه‌های ییلاقی، پیاده‌روی در جنگل و تماشای اقیانوس ابر همراه راهنمای محلی.', highlights: ['اقیانوس ابر', 'جنگل هیرکانی'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'حرکت و استقرار.' }, { day: 'روز ۲', text: 'گشت طبیعت.' }, { day: 'روز ۳', text: 'بازگشت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'محبوب' },
      en: { title: 'Misty Masal Highlands', location: 'Gilan, Masal', duration: '3 Days / 2 Nights', price: '3,850,000 Toman', short: 'Misty highland stay with Hyrcanian forest and mountain air.', description: 'A calm highland escape with forest walks, sea-of-cloud views, and local guidance.', highlights: ['Sea of clouds', 'Hyrcanian forest'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Travel and check-in.' }, { day: 'Day 2', text: 'Nature tour.' }, { day: 'Day 3', text: 'Return.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'Popular' },
    },
  },
  {
    id: '2', slug: 'anzali-lagoon', rating: 4.8, reviewsCount: 22, imageUrl: '/img/anzali12.jpg',
    gallery: ['/img/anzali12.jpg', '/img/home02.jpg', '/img/home03.jpg'], numericPrice: 2400000, maxGuests: 5, bedrooms: 2,
    i18n: {
      fa: { title: 'تالاب و ساحل انزلی', location: 'گیلان، انزلی', duration: '۲ روز / ۱ شب', price: '۲٬۴۰۰٬۰۰۰ تومان', short: 'قایق‌سواری در تالاب، غروب ساحلی و بازار محلی.', description: 'سفری آرام کنار آب با بازدید تالاب انزلی، پیاده‌روی ساحلی و تجربه خوراک محلی.', highlights: ['تالاب انزلی', 'غروب ساحلی'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'تالاب و اقامت.' }, { day: 'روز ۲', text: 'ساحل و بازگشت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'طبیعت' },
      en: { title: 'Anzali Lagoon & Coast', location: 'Gilan, Anzali', duration: '2 Days / 1 Night', price: '2,400,000 Toman', short: 'Lagoon boating, coastal sunset, and local market.', description: 'A relaxing water-side journey with Anzali lagoon, coastal walks, and local food.', highlights: ['Anzali lagoon', 'Coastal sunset'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Lagoon and stay.' }, { day: 'Day 2', text: 'Coast and return.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'Nature' },
    },
  },
  {
    id: '3', slug: 'talesh-gisoom', rating: 4.95, reviewsCount: 47, imageUrl: '/img/talesh01.jpg',
    gallery: ['/img/talesh01.jpg', '/img/home04.jpg', '/img/home05.jpg'], numericPrice: 4900000, maxGuests: 8, bedrooms: 3,
    i18n: {
      fa: { title: 'گیسوم و جاده اسالم به خلخال', location: 'گیلان، تالش', duration: '۴ روز / ۳ شب', price: '۴٬۹۰۰٬۰۰۰ تومان', short: 'تلاقی جنگل و ساحل با مسیر رویایی اسالم به خلخال.', description: 'اقامت طبیعت‌گردی در گیسوم با تجربه یکی از زیباترین جاده‌های جنگلی ایران.', highlights: ['ساحل گیسوم', 'جنگل هیرکانی'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'رسیدن به گیسوم.' }, { day: 'روز ۲', text: 'جنگل و ساحل.' }, { day: 'روز ۳', text: 'جاده اسالم.' }, { day: 'روز ۴', text: 'بازگشت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'ویژه' },
      en: { title: 'Gisoom & Asalem–Khalkhal Road', location: 'Gilan, Talesh', duration: '4 Days / 3 Nights', price: '4,900,000 Toman', short: 'Forest meets coast with the scenic Asalem–Khalkhal road.', description: 'A nature-focused escape in Gisoom with one of Iran’s most scenic forest roads.', highlights: ['Gisoom coast', 'Hyrcanian forest'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Arrive in Gisoom.' }, { day: 'Day 2', text: 'Forest and coast.' }, { day: 'Day 3', text: 'Asalem road.' }, { day: 'Day 4', text: 'Return.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'Special' },
    },
  },
  {
    id: '4', slug: 'shiraz-cultural', rating: 4.9, reviewsCount: 64, imageUrl: '/img/shiraz09.jpg',
    gallery: ['/img/shiraz09.jpg', '/img/shiraz10.jpg', '/img/shiraz11.jpg'], numericPrice: 5200000, maxGuests: 6, bedrooms: 2,
    i18n: {
      fa: { title: 'سفر فرهنگی شیراز', location: 'فارس، شیراز', duration: '۳ روز / ۲ شب', price: '۵٬۲۰۰٬۰۰۰ تومان', short: 'باغ، معماری و میراث فرهنگی با برنامه‌ریزی آرام.', description: 'بازدید از جاذبه‌های شاخص شیراز همراه اقامت منتخب و زمان‌بندی منعطف.', highlights: ['باغ ایرانی', 'معماری تاریخی'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'ورود و گشت شهری.' }, { day: 'روز ۲', text: 'بازدید تاریخی.' }, { day: 'روز ۳', text: 'بازگشت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'فرهنگی' },
      en: { title: 'Shiraz Cultural Journey', location: 'Fars, Shiraz', duration: '3 Days / 2 Nights', price: '5,200,000 Toman', short: 'Gardens, architecture, and cultural heritage at an easy pace.', description: 'Visit Shiraz highlights with selected stay and flexible time for city walks.', highlights: ['Persian garden', 'Historic architecture'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Arrival and city walk.' }, { day: 'Day 2', text: 'Historic visits.' }, { day: 'Day 3', text: 'Return.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'Culture' },
    },
  },
  {
    id: '5', slug: 'mazandaran-forest', rating: 4.85, reviewsCount: 31, imageUrl: '/img/masal03.jpg',
    gallery: ['/img/talesh01.jpg', '/img/masal02.jpg'], numericPrice: 4300000, maxGuests: 6, bedrooms: 2,
    i18n: {
      fa: { title: 'جنگل و مه مازندران', location: 'مازندران', duration: '۳ روز / ۲ شب', price: '۴٬۳۰۰٬۰۰۰ تومان', short: 'سفر به جنگل‌های سرسبز و ییلاق‌های مه‌آلود مازندران.', description: 'تجربه طبیعت شمال در مسیرهای جنگلی، هوای خنک و اقامت آرام با برنامه‌ریزی مسئولانه.', highlights: ['جنگل‌های سرسبز', 'هوای کوهستان'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'حرکت و استقرار.' }, { day: 'روز ۲', text: 'گشت جنگلی.' }, { day: 'روز ۳', text: 'بازگشت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'شمال' },
      en: { title: 'Mazandaran Forest Escape', location: 'Mazandaran', duration: '3 Days / 2 Nights', price: '4,300,000 Toman', short: 'A journey through lush forests and misty highlands of Mazandaran.', description: 'Experience northern nature with forest routes, cool mountain air, and a calm, responsible stay.', highlights: ['Lush forests', 'Mountain air'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Travel and check-in.' }, { day: 'Day 2', text: 'Forest tour.' }, { day: 'Day 3', text: 'Return.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'North' },
    },
  },
  {
    id: '6', slug: 'mosque-heritage', rating: 4.75, reviewsCount: 18, imageUrl: '/img/mosque08.jpg',
    gallery: ['/img/mosque08.jpg', '/img/shiraz10.jpg', '/img/shiraz11.jpg'], numericPrice: 3100000, maxGuests: 10, bedrooms: 2,
    i18n: {
      fa: { title: 'مسیر میراث و مسجد', location: 'ایران، مسیر فرهنگی', duration: '۲ روز / ۱ شب', price: '۳٬۱۰۰٬۰۰۰ تومان', short: 'بازدید از معماری مذهبی و فضاهای تاریخی با راهنمای فرهنگی.', description: 'سفری آرام برای آشنایی با جزئیات معماری، هنر و بافت تاریخی اطراف مسجدهای شاخص.', highlights: ['معماری تاریخی', 'راهنمای فرهنگی'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'بازدید و اقامت.' }, { day: 'روز ۲', text: 'گشت فرهنگی و بازگشت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'میراث' },
      en: { title: 'Mosque Heritage Trail', location: 'Iran, cultural route', duration: '2 Days / 1 Night', price: '3,100,000 Toman', short: 'Visit religious architecture and historic spaces with cultural guidance.', description: 'A calm journey to explore architectural details, art, and the historic context of notable mosques.', highlights: ['Historic architecture', 'Cultural guide'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Visit and stay.' }, { day: 'Day 2', text: 'Cultural walk and return.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'Heritage' },
    },
  },
  {
    id: '7', slug: 'rasht-food-nature', rating: 4.88, reviewsCount: 29, imageUrl: '/img/rasht06.jpg',
    gallery: ['/img/rasht06.jpg', '/img/home02.jpg', '/img/anzali12.jpg'], numericPrice: 3600000, maxGuests: 6, bedrooms: 2,
    i18n: {
      fa: { title: 'رشت؛ طبیعت و طعم محلی', location: 'گیلان، رشت', duration: '۳ روز / ۲ شب', price: '۳٬۶۰۰٬۰۰۰ تومان', short: 'ترکیب بازار محلی، خوراک گیلانی و طبیعت اطراف رشت.', description: 'سفری خوش‌ذوق برای تجربه شهر خلاق خوراک، بازارهای محلی و مسیرهای طبیعت نزدیک رشت.', highlights: ['خوراک محلی', 'بازار رشت'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'ورود و گشت شهری.' }, { day: 'روز ۲', text: 'طبیعت و تجربه محلی.' }, { day: 'روز ۳', text: 'بازگشت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'گیلان' },
      en: { title: 'Rasht: Nature & Local Flavor', location: 'Gilan, Rasht', duration: '3 Days / 2 Nights', price: '3,600,000 Toman', short: 'Local markets, Gilaki flavors, and nature around Rasht.', description: 'A tasteful journey through the creative food city, local bazaars, and nearby nature routes.', highlights: ['Local food', 'Rasht bazaar'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Arrival and city walk.' }, { day: 'Day 2', text: 'Nature and local experience.' }, { day: 'Day 3', text: 'Return.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'Gilan' },
    },
  },
  {
    id: '8', slug: 'castle-fortress', rating: 4.82, reviewsCount: 24, imageUrl: '/img/castle07.jpg',
    gallery: ['/img/castle07.jpg', '/img/home01.jpg', '/img/home04.jpg'], numericPrice: 3400000, maxGuests: 8, bedrooms: 2,
    i18n: {
      fa: { title: 'قلعه و تاریخ کوهستان', location: 'ایران، منطقه تاریخی', duration: '۲ روز / ۱ شب', price: '۳٬۴۰۰٬۰۰۰ تومان', short: 'گشت تاریخی در کنار طبیعت با بازدید از قلعه و چشم‌اندازهای پیرامون.', description: 'ترکیب تاریخ و طبیعت در سفری کوتاه به سازه‌های دفاعی تاریخی و مناظر اطراف.', highlights: ['قلعه تاریخی', 'چشم‌انداز طبیعت'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'بازدید قلعه و اقامت.' }, { day: 'روز ۲', text: 'گشت پیرامون و بازگشت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'تاریخی' },
      en: { title: 'Castle & Mountain History', location: 'Iran, historic region', duration: '2 Days / 1 Night', price: '3,400,000 Toman', short: 'A historic walk in nature with castle views and surrounding landscapes.', description: 'A short blend of history and nature around historic defensive architecture and scenic views.', highlights: ['Historic castle', 'Natural views'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Castle visit and stay.' }, { day: 'Day 2', text: 'Nearby walk and return.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'Historic' },
    },
  },
]



export const INTERNATIONAL_TRIPS: Trip[] = [
  {
    id: 'int-1', slug: 'turkey-discovery', rating: 4.9, reviewsCount: 24, imageUrl: '/img/turkey01.jpg',
    gallery: ['/img/turkey01.jpg', '/img/turkey02.jpg'], numericPrice: 8900000, maxGuests: 8, bedrooms: 2,
    i18n: {
      fa: { title: 'کشف ترکیه', location: 'ترکیه', duration: '۵ روز / ۴ شب', price: '۸٬۹۰۰٬۰۰۰ تومان', short: 'سفر به استانبول و جاذبه‌های ترکیه.', description: 'تجربه فرهنگ، تاریخ و طبیعت ترکیه با برنامه‌ریزی کامل.', highlights: ['استانبول', 'فرهنگ'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'ورود.' }, { day: 'روز ۲', text: 'گشت شهری.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'بین‌المللی' },
      en: { title: 'Turkey Discovery', location: 'Turkey', duration: '5 Days / 4 Nights', price: '8,900,000 Toman', short: 'Journey through Istanbul and Turkey highlights.', description: 'Experience culture, history, and nature in Turkey with full planning.', highlights: ['Istanbul', 'Culture'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Arrival.' }, { day: 'Day 2', text: 'City tour.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'International' },
    },
  },
  {
    id: 'int-2', slug: 'maldives-escape', rating: 4.95, reviewsCount: 40, imageUrl: '/img/maldives01.jpg',
    gallery: ['/img/maldives01.jpg', '/img/maldives02.jpg'], numericPrice: 15900000, maxGuests: 4, bedrooms: 1,
    i18n: {
      fa: { title: 'فرار به مالدیو', location: 'مالدیو', duration: '۶ روز / ۵ شب', price: '۱۵٬۹۰۰٬۰۰۰ تومان', short: 'جزایر مرجانی و آب‌های فیروزه‌ای.', description: 'اقامت رویایی در ویلاهای روی آب و تفریحات دریایی.', highlights: ['ویلای روی آب', 'غواصی'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'ورود.' }, { day: 'روز ۲', text: 'استراحت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'لوکس' },
      en: { title: 'Maldives Escape', location: 'Maldives', duration: '6 Days / 5 Nights', price: '15,900,000 Toman', short: 'Coral islands and turquoise waters.', description: 'Dream stay in overwater villas with marine activities.', highlights: ['Overwater villa', 'Diving'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Arrival.' }, { day: 'Day 2', text: 'Relax.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'Luxury' },
    },
  },
  {
    id: 'int-3', slug: 'tajikistan-journey', rating: 4.85, reviewsCount: 18, imageUrl: '/img/tajikistan01.jpg',
    gallery: ['/img/tajikistan01.jpg', '/img/tajikistan02.jpg'], numericPrice: 7600000, maxGuests: 6, bedrooms: 2,
    i18n: {
      fa: { title: 'سفر به تاجیکستان', location: 'تاجیکستان', duration: '۵ روز / ۴ شب', price: '۷٬۶۰۰٬۰۰۰ تومان', short: 'طبیعت و فرهنگ تاجیکستان.', description: 'تجربه کوهستان‌ها و فرهنگ محلی.', highlights: ['کوهستان', 'فرهنگ'], dates: base.dates.fa, departure: base.departure.fa, returnTime: base.returnTime.fa, amenities: base.amenities.fa, included: base.included.fa, itinerary: [{ day: 'روز ۱', text: 'ورود.' }, { day: 'روز ۲', text: 'گشت.' }], requirements: base.requirements.fa, booking: base.booking.fa, tag: 'بین‌المللی' },
      en: { title: 'Tajikistan Journey', location: 'Tajikistan', duration: '5 Days / 4 Nights', price: '7,600,000 Toman', short: 'Nature and culture of Tajikistan.', description: 'Experience mountains and local culture.', highlights: ['Mountains', 'Culture'], dates: base.dates.en, departure: base.departure.en, returnTime: base.returnTime.en, amenities: base.amenities.en, included: base.included.en, itinerary: [{ day: 'Day 1', text: 'Arrival.' }, { day: 'Day 2', text: 'Tour.' }], requirements: base.requirements.en, booking: base.booking.en, tag: 'International' },
    },
  },
]

export const trips = FEATURED_TRIPS
export function getTripBySlug(slug?: string) {
  return [...FEATURED_TRIPS, ...INTERNATIONAL_TRIPS].find((t) => t.slug === slug || t.id === slug)
}