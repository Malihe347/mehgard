import type { Lang } from '../components/i18n'

export interface Accommodation {
  slug: string
  image: string
  gallery: string[]
  rating: number
  reviews: number
  price: number
  i18n: Record<
    Lang,
    {
      name: string
      location: string
      address: string
      short: string
      description: string
      facilities: string[]
      booking: string
      priceLabel: string
    }
  >
}

export const accommodations: Accommodation[] = [
  {
    slug: 'masal-wood-cabin',
    image: '/img/home01.jpg',
    gallery: ['/img/home01.jpg', '/img/home02.jpg', '/img/masal02.jpg'],
    rating: 4.9,
    reviews: 41,
    price: 1850000,
    i18n: {
      fa: {
        name: 'کلبه چوبی ماسال',
        location: 'گیلان، ماسال',
        address: 'ییلاقات اولسبلنگاه، مسیر دسترسی محلی، ماسال',
        short: 'کلبه آرام با چشم‌انداز مه و جنگل، مناسب طبیعت‌گردی.',
        description:
          'اقامتگاهی دنج با نمای کوهستان و فضای گرم چوبی. این کلبه برای سفرهای آرام، زوج‌ها و خانواده‌های کوچک طراحی شده و دسترسی مناسبی به مسیرهای طبیعت‌گردی دارد.',
        facilities: ['Wi-Fi', 'گرمایش', 'صبحانه محلی', 'پارکینگ', 'تراس چشم‌انداز', 'راهنمای محلی'],
        booking: 'رزرو با پرداخت امن و تأیید تلفنی انجام می‌شود. لغو تا ۴۸ ساعت قبل امکان‌پذیر است.',
        priceLabel: '۱٬۸۵۰٬۰۰۰ تومان / هر شب',
      },
      en: {
        name: 'Masal Wood Cabin',
        location: 'Gilan, Masal',
        address: 'Olasbelangah highlands, local access road, Masal',
        short: 'A quiet cabin with misty forest views for nature escapes.',
        description:
          'A cozy stay with mountain views and a warm wooden interior. Designed for calm trips, couples, and small families with easy access to nature routes.',
        facilities: ['Wi-Fi', 'Heating', 'Local breakfast', 'Parking', 'View terrace', 'Local guide'],
        booking: 'Book with secure payment and phone confirmation. Cancellation is available up to 48 hours before arrival.',
        priceLabel: '1,850,000 Toman / night',
      },
    },
  },
  {
    slug: 'anzali-lagoon-lodge',
    image: '/img/home03.jpg',
    gallery: ['/img/home03.jpg', '/img/anzali12.jpg', '/img/home05.jpg'],
    rating: 4.8,
    reviews: 27,
    price: 2100000,
    i18n: {
      fa: {
        name: 'اقامتگاه کنار تالاب انزلی',
        location: 'گیلان، انزلی',
        address: 'نزدیک اسکله تالاب، بندر انزلی',
        short: 'اقامت روشن کنار آب با دسترسی آسان به تالاب و بازار.',
        description:
          'اقامتگاهی راحت برای تجربه آرام تالاب انزلی، غروب‌های ساحلی و گردش محلی. اتاق‌ها ساده، تمیز و مناسب سفرهای کوتاه هستند.',
        facilities: ['Wi-Fi', 'تهویه', 'صبحانه', 'ترانسفر محلی', 'دسترسی به قایق', 'پذیرش'],
        booking: 'رزرو آنلاین با تأیید سریع. اطلاعات ورود پس از ثبت درخواست ارسال می‌شود.',
        priceLabel: '۲٬۱۰۰٬۰۰۰ تومان / هر شب',
      },
      en: {
        name: 'Anzali Lagoon Lodge',
        location: 'Gilan, Anzali',
        address: 'Near lagoon pier, Bandar Anzali',
        short: 'A bright waterside stay with easy access to the lagoon.',
        description:
          'A comfortable base for Anzali lagoon, coastal sunsets, and local walks. Rooms are simple, clean, and suited to short relaxing stays.',
        facilities: ['Wi-Fi', 'Air conditioning', 'Breakfast', 'Local transfer', 'Boat access', 'Reception'],
        booking: 'Online booking with fast confirmation. Check-in details are sent after your request.',
        priceLabel: '2,100,000 Toman / night',
      },
    },
  },
  {
    slug: 'talesh-forest-villa',
    image: '/img/home05.jpg',
    gallery: ['/img/home05.jpg', '/img/talesh01.jpg', '/img/home04.jpg'],
    rating: 4.95,
    reviews: 33,
    price: 2650000,
    i18n: {
      fa: {
        name: 'ویلای جنگلی تالش',
        location: 'گیلان، تالش',
        address: 'مسیر گیسوم، منطقه جنگلی تالش',
        short: 'ویلای دنج نزدیک جنگل و ساحل، مناسب اقامت گروهی.',
        description:
          'ویلایی با فضای باز، آرامش جنگلی و دسترسی مناسب به گیسوم و جاده‌های سرسبز تالش. انتخابی مناسب برای خانواده‌ها و گروه‌های کوچک.',
        facilities: ['پارکینگ', 'آشپزخانه', 'باربیکیو', 'حیاط', 'Wi-Fi', 'نزدیک طبیعت'],
        booking: 'برای رزرو، تاریخ و تعداد مهمان را ثبت کنید. تیم پشتیبانی جزئیات اقامت را تأیید می‌کند.',
        priceLabel: '۲٬۶۵۰٬۰۰۰ تومان / هر شب',
      },
      en: {
        name: 'Talesh Forest Villa',
        location: 'Gilan, Talesh',
        address: 'Gisoom route, forest area, Talesh',
        short: 'A cozy villa near forest and coast, ideal for groups.',
        description:
          'A villa with open space, forest calm, and convenient access to Gisoom and Talesh’s green roads. A good fit for families and small groups.',
        facilities: ['Parking', 'Kitchen', 'BBQ', 'Yard', 'Wi-Fi', 'Near nature'],
        booking: 'Submit your dates and guest count to book. Our team will confirm the stay details.',
        priceLabel: '2,650,000 Toman / night',
      },
    },
  },
]

export function getAccommodation(slug?: string) {
  return accommodations.find((a) => a.slug === slug)
}