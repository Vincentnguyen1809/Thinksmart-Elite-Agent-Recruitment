
export const SITE_CONTENT = {
  // PHẦN MÃ THEO DÕI (TRACKING CODES)
  // Bạn có thể dán mã Facebook Pixel, Google Analytics hoặc bất kỳ script nào vào đây
  tracking: {
    headScripts: `
      <!-- Dán mã tracking vào giữa cặp dấu nháy này để chèn vào <head> -->
    `,
    bodyScripts: `
      <!-- Dán mã tracking vào giữa cặp dấu nháy này để chèn vào cuối <body> -->
    `
  },

  // THÔNG TIN CHUNG & LIÊN HỆ
  brand: {
    name: "Thinksmart Insurance",
    logo: "https://i.imgur.com/U8vuRtv.png",
    slogan: "Thinksmart Insurance - Cùng Elite Agent bảo vệ sức khoẻ và tài chính cho hàng triệu người Việt Tại Hoa Kỳ.",
    hotline: "+1 (678) 722-3447",
    email: "Support@thinksmartinsurance.com",
    address: "1424 N Brown Rd # 450, Lawrenceville, GA 30043, Hoa Kỳ",
    applyButtonText: "ỨNG TUYỂN NGAY",
    formUrl: "https://api.leadconnectorhq.com/widget/bookings/become-an-elite-agent-with-thinksmart-insurance"
  },

  // HERO SECTION
  hero: {
    badgeText: "Sự nghiệp đỉnh cao bắt đầu từ đây",
    titleMain: "TRỞ THÀNH",
    titleHighlight: "ELITE AGENT",
    subBrand: "THINKSMART INSURANCE",
    headline: "KIẾN TẠO TƯƠNG LAI TÀI CHÍNH & SỰ NGHIỆP THU NHẬP ĐỘT PHÁ",
    description: "Bạn khao khát một công việc online/remote thu nhập KHÔNG GIỚI HẠN, được đào tạo bài bản từ A-Z để làm chủ sự nghiệp và xây dựng tương lai tại Hoa Kỳ?",
    buttonText: "Bắt đầu ứng tuyển ngay",
    noteText: "Đăng ký phỏng vấn 1:1 cùng Elite Agent Manager",
    videoId: "PoUWP--0CDU",
    avatars: [
      "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
    ]
  },

  // STATS
  stats: [
    { label: 'THƯƠNG HIỆU UY TÍN', value: '13+ NĂM' },
    { label: 'NHÂN SỰ HỖ TRỢ', value: '100+' },
    { label: 'BANG ĐƯỢC CẤP PHÉP', value: '50 BANG' },
    { label: 'HỖ TRỢ KHÁCH HÀNG', value: '20,000+' },
    { label: 'ĐÁNH GIÁ GOOGLE', value: '5 STARS' },
    { label: 'REVIEW KHÁCH HÀNG', value: '800+ REVIEW' },
  ],

  // BENEFITS SECTION
  benefitsSection: {
    badge: "The Advantage",
    title: "LỢI THẾ CẠNH TRANH TẠI THINKSMART",
    items: [
      {
        title: 'NGUỒN KHÁCH HÀNG CHẤT LƯỢNG (LEADS)',
        desc: 'Hệ thống Marketing đa kênh của chúng tôi cung cấp liên tục khách hàng tiềm năng (warm leads) đã được sàng lọc kỹ lưỡng. Bạn tập trung vào chuyên môn: Tư vấn và chốt sale.'
      },
      {
        title: 'HỖ TRỢ BỞI 100+ NHÂN SỰ',
        desc: 'Đội ngũ Underwriting xử lý hồ sơ kỹ thuật, đàm phán trực tiếp với các hãng. Bộ phận CSKH chăm sóc sau bán. Bạn không bao giờ đơn độc: Có cả một hệ thống phía sau.'
      },
      {
        title: 'ĐÀO TẠO HỖ TRỢ 1:1 CHUYÊN SÂU',
        desc: 'Lộ trình "Elite Launchpad" dẫn dắt từ người mới đến khi có License. Được đội ngũ Elite Agent cùng Manager có 10+ năm kinh nghiệm training và support liên tục.'
      },
      {
        title: 'LÀM VIỆC ONLINE/LINH HOẠT TỪ XA',
        desc: 'Làm việc từ xa (Remote) giúp linh hoạt về thời gian. Thu nhập ổn định trên $5,000/tháng bao gồm lương cứng và commission. Xây dựng công việc vững chắc tại Hoa Kỳ.',
        specialBadge: "QUYỀN LỢI ĐẶC BIỆT: TRIP 5 SAO HẰNG NĂM"
      }
    ]
  },

  // STEPS SECTION
  stepsSection: {
    badge: "The Journey",
    title: "HÀNH TRÌNH 5 BƯỚC TRỞ THÀNH ELITE AGENT",
    items: [
      { number: '01', title: 'KHÁM PHÁ', desc: 'Xem video giới thiệu về văn hoá, giá trị và câu chuyện thành công từ Thinksmart Insurance, hiểu vì sao chúng tôi khác biệt.' },
      { number: '02', title: 'ĐỐI THOẠI', desc: 'Một cuộc trò chuyện giữa bạn và Elite Agent Manager. Cùng thảo luận về mục tiêu và cơ hội phù hợp.' },
      { number: '03', title: 'THAM GIA ĐÀO TẠO', desc: 'Học mọi thứ cần thiết để vượt qua kỳ thi, với hướng dẫn rõ ràng và sự hỗ trợ tận tình bởi đội ngũ Elite Agent Manager.' },
      { number: '04', title: 'THI LẤY LICENSE', desc: 'Chúng tôi hướng dẫn bạn từng bước để bạn tự tin thi lấy chứng chỉ (License) ngay lần đầu. Chúng tôi giúp bạn thành công.' },
      { number: '05', title: 'GIA NHẬP & PHÁT TRIỂN', desc: 'Bắt đầu tiếp cận toàn bộ hệ thống sản phẩm, công cụ và nguồn leads chất lượng. Tạo ra thu nhập vượt trội và sự tự do.' }
    ]
  },

  // TESTIMONIALS SECTION
  testimonialsSection: {
    badge: "The Elite Community",
    title: "CÂU CHUYỆN TỪ ĐỘI NGŨ ELITE AGENT",
    subtitle: "Lắng nghe hành trình thực tế của các Agent đã bứt phá cùng Thinksmart.",
    items: [
      { id: 1, videoId: 'ZO6_ExAxO0k', title: 'Bứt phá thu nhập cùng Thinksmart', name: 'Agent Ha Nguyen', description: 'Hành trình từ một người mới đến Elite Agent xuất sắc với mức thu nhập mơ ước.' },
      { id: 2, videoId: 'yhyxB0eanqw', title: 'Hệ thống hỗ trợ chuyên nghiệp 24/7', name: 'Agent Celine', description: 'Chia sẻ về sự hỗ trợ từ bộ phận Underwriting và CS giúp chốt hồ sơ nhanh chóng.' },
      { id: 3, videoId: 'FzOHUkyr8ho', title: 'Tự do tài chính & thời gian linh hoạt', name: 'Agent Hung Huynh', description: 'Làm việc Remote từ bất cứ đâu nhưng vẫn đạt hiệu quả công việc tối đa.' },
      { id: 4, videoId: 'QOYIkO4cOy8', title: 'Đào tạo 1:1 tận tâm từ Leader', name: 'Agent Gina Dang', description: 'Hành trình vượt qua kỳ thi License và bắt đầu sự nghiệp bảo hiểm thành công.' },
    ]
  },

  // OPPORTUNITY SECTION
  opportunitySection: {
    badge: "THE OPPORTUNITY AWAITS",
    title: "BẠN ĐÃ SẴN SÀNG BẮT ĐẦU CHƯA?",
    description: "Tương lai không được định đoạt bởi xuất phát điểm, mà bởi NHỮNG LỰA CHỌN bạn đưa ra.",
    highlightText: "NHỮNG LỰA CHỌN",
    subNote: "Đăng ký ngay để được phỏng vấn 1:1 cùng Elite Agent Manager",
    mainButton: "Ứng tuyển ngay vào đội ngũ Elite"
  },

  // PARTNERS (Logos)
  partners: [
    { name: 'NATIONAL LIFE GROUP', logo: 'https://i.imgur.com/eG7LzSR.png', border: 'border-elite-red' },
    { name: 'ALLIANZ', logo: 'https://i.imgur.com/EMKMC4c.png', border: 'border-blue-600' },
    { name: 'TRANSAMERICA', logo: 'https://i.imgur.com/NvNN4og.png', border: 'border-red-500' },
    { name: 'AIG GROUP', logo: 'https://i.imgur.com/u1H7TT1.png', border: 'border-blue-400' },
  ],

  // FAQ SECTION
  faqSection: {
    badge: "Support Center",
    title: "SUPPORT & FAQ",
    items: [
      { q: "1. Tôi không có kinh nghiệm về bảo hiểm hay bán hàng thì có thể ứng tuyển không?", a: "CÓ. Hơn 70% Elite Agent thành công của chúng tôi bắt đầu từ con số 0. Chương trình đào tạo \"Elite Agent\" được thiết kế đặc biệt cho người mới, đưa bạn từ chưa biết gì đến trở thành chuyên gia tư vấn." },
      { q: "2. Tôi phải bỏ tiền túi ra để mua Leads không?", a: "KHÔNG. Bạn được cung cấp bởi nguồn leads chất lượng từ hệ thống marketing của công ty mà không mất thêm bất kỳ chi phí nào." },
      { q: "3. Tôi có thể làm Part-Time hoặc 2 job được không?", a: "KHÔNG. Để trở thành Elite Agent thật sự chúng tôi cần bạn phải có sự kỷ luật và tập trung 100% để làm việc tốt nhất." },
      { q: "4. Tôi cần chuẩn bị những gì để làm việc tốt nhất?", a: "Làm việc Online/Remote nên bạn cần có Laptop, Phone, Internet và một không gian làm việc yên tĩnh." },
      { q: "5. Có yêu cầu giao tiếp bằng tiếng anh không?", a: "Giao tiếp bằng tiếng Việt là chủ yếu, vì phục vụ cho cộng đồng người Việt. Nhưng cần tiếng Anh cơ bản để thi lấy bằng và tương tác email, giấy tờ với bộ phận bên hãng bảo hiểm." }
    ]
  },

  // SOCIAL CHANNELS
  socials: [
    { name: 'Facebook', logo: 'https://i.imgur.com/11hfVCu.png', url: 'https://www.facebook.com/Thinksmartinsuranceus' },
    { name: 'Youtube', logo: 'https://i.imgur.com/e4aR9PE.png', url: 'https://www.youtube.com/@ThinksmartInsurance/videos' },
    { name: 'Tiktok', logo: 'https://i.imgur.com/fZvPOHL.png', url: 'https://www.tiktok.com/@thinksmartnews/' },
    { name: 'Instagram', logo: 'https://i.imgur.com/kXINFvH.png', url: 'https://www.instagram.com/thinksmartinsuranceofficial/' },
  ]
};
