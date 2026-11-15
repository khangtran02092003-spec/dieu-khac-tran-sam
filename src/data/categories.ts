export interface Category {
  slug: string;
  name: string;
  short: string;
  cover: string; // tên ảnh gốc (không đuôi)
  intro: string[];
  fits: string[]; // dùng cho đâu
  faq: { q: string; a: string }[];
}

export const categories: Category[] = [
  {
    slug: 'phu-dieu',
    name: 'Phù điêu trang trí',
    short: 'Tranh nổi cho tường nhà, sảnh, cổng và sân vườn.',
    cover: 'phu-dieu-decor-14',
    intro: [
      'Phù điêu là nghề chính của xưởng. Mỗi bức bắt đầu từ một bản phác thảo theo đúng mảng tường của bạn, rồi được nặn bằng đất sét ở tỷ lệ thật để bạn duyệt trước khi đúc.',
      'Chúng tôi làm phù điêu composite đúc khuôn (nhẹ, lắp nhanh, nhân bản được), phù điêu xi măng đắp trực tiếp tại công trình, và hoàn thiện bề mặt giả đồng, giả đá, nhũ vàng hoặc sơn màu.',
    ],
    fits: ['Tường phòng khách, sảnh khách sạn', 'Cổng, tường rào, mặt tiền biệt thự', 'Nhà hàng, quán cà phê', 'Tranh treo tường đặt riêng'],
    faq: [
      { q: 'Composite hay xi măng đắp tại chỗ thì bền hơn?', a: 'Cả hai đều dùng ngoài trời được. Xi măng đắp tại chỗ liền khối với tường, hợp mảng rất lớn. Composite nhẹ, ít mối nối, làm trong xưởng nên kiểm soát chi tiết tốt hơn và lắp nhanh.' },
      { q: 'Tôi chỉ có ảnh mẫu trên mạng, có làm được không?', a: 'Được. Gửi ảnh mẫu và kích thước tường, xưởng sẽ điều chỉnh bố cục cho vừa không gian của bạn thay vì sao chép nguyên mẫu.' },
      { q: 'Làm một bức phù điêu mất bao lâu?', a: 'Tùy kích thước và độ chi tiết. Xưởng báo tiến độ cụ thể khi chốt bản phác thảo.' },
    ],
  },
  {
    slug: 'phat-giao',
    name: 'Tượng & phù điêu Phật giáo',
    short: 'Tượng thờ, phù điêu chùa và không gian thiền.',
    cover: 'phat-giao-03',
    intro: [
      'Tượng Phật, Quan Âm, hộ pháp và phù điêu cho chùa, nhà thờ tự, phòng thiền. Tỷ lệ khuôn mặt, thủ ấn và tòa sen được làm theo đúng quy cách của từng dòng tượng.',
      'Có thể hoàn thiện nhũ vàng, giả đồng, giả đá trắng hoặc sơn màu theo yêu cầu của nhà chùa.',
    ],
    fits: ['Chùa, tịnh xá, nhà thờ họ', 'Phòng thờ gia đình', 'Spa, phòng thiền, homestay', 'Phù điêu vòm và hậu cung'],
    faq: [
      { q: 'Xưởng có tư vấn kích thước tượng theo không gian thờ không?', a: 'Có. Bạn gửi kích thước bệ và chiều cao trần, xưởng đề xuất tỷ lệ tượng cân đối với không gian.' },
      { q: 'Có làm tượng theo mẫu riêng của nhà chùa không?', a: 'Có. Xưởng nặn mẫu đất sét theo ảnh hoặc tượng cũ để nhà chùa duyệt trước khi đúc.' },
    ],
  },
  {
    slug: 'bao-tang',
    name: 'Bảo tàng, tượng đài & huy hiệu',
    short: 'Phù điêu lịch sử, cụm tượng trưng bày, quốc huy.',
    cover: 'bao-tang-02',
    intro: [
      'Phù điêu tường kể chuyện lịch sử, cụm tượng người kích thước thật tái hiện sự kiện, huy hiệu và quốc huy cho cơ quan, nhà truyền thống và khu di tích.',
      'Xưởng làm việc theo hồ sơ nội dung của chủ đầu tư, phối hợp với đơn vị thiết kế trưng bày ở khâu bố cục, ánh sáng và lắp đặt.',
    ],
    fits: ['Bảo tàng, nhà truyền thống', 'Khu di tích, đài tưởng niệm', 'Trụ sở cơ quan, hội trường', 'Trường học, đơn vị lực lượng vũ trang'],
    faq: [
      { q: 'Xưởng có nhận gói từ thiết kế đến lắp đặt không?', a: 'Có. Xưởng nhận làm từ phác thảo, nặn mẫu, sản xuất đến vận chuyển và lắp đặt tại công trình.' },
    ],
  },
  {
    slug: 'chan-dung',
    name: 'Tượng chân dung',
    short: 'Tượng bán thân theo ảnh người thật.',
    cover: 'chan-dung-07',
    intro: [
      'Tượng chân dung bán thân của ông bà, cha mẹ, người sáng lập hay danh nhân. Nghệ nhân nặn mẫu đất sét từ ảnh chụp nhiều góc, gia đình xem và góp ý đến khi thần thái đúng mới đúc.',
    ],
    fits: ['Tượng thờ gia tiên', 'Tượng người sáng lập cho doanh nghiệp, trường học', 'Phòng truyền thống, nhà lưu niệm'],
    faq: [
      { q: 'Cần chuẩn bị ảnh như thế nào?', a: 'Càng nhiều góc càng tốt: chính diện, nghiêng hai bên, ba phần tư. Ảnh cũ chất lượng thấp vẫn làm được, nghệ nhân sẽ trao đổi thêm về đặc điểm khuôn mặt.' },
      { q: 'Gia đình có được xem mẫu trước khi đúc không?', a: 'Có. Mẫu đất sét được gửi ảnh hoặc mời gia đình đến xưởng xem trực tiếp, chỉnh đến khi ưng ý.' },
    ],
  },
  {
    slug: 'co-dien',
    name: 'Tượng cổ điển & thiên thần',
    short: 'Tượng tròn phong cách châu Âu cho biệt thự, sân vườn.',
    cover: 'phu-dieu-decor-10',
    intro: [
      'Tượng thiếu nữ, thiên thần, cột người, đầu tượng David và các mẫu cổ điển khác, làm từ composite nhẹ, sơn giả đá trắng hoặc giả đồng.',
    ],
    fits: ['Biệt thự tân cổ điển', 'Sân vườn, đài phun nước', 'Sảnh khách sạn, tiệc cưới', 'Studio, phim trường'],
    faq: [
      { q: 'Tượng composite đặt ngoài trời có bị phai không?', a: 'Lớp sơn hoàn thiện ngoài trời có phủ chống tia UV. Nên vệ sinh và phủ lại sau vài năm tùy điều kiện nắng mưa.' },
    ],
  },
  {
    slug: 'mo-hinh',
    name: 'Mô hình quảng cáo & linh vật',
    short: 'Linh vật thương hiệu, món ăn khổng lồ, đạo cụ sự kiện.',
    cover: 'nha-may-bia-03',
    intro: [
      'Mô hình giúp thương hiệu được nhìn thấy từ xa: linh vật trước cửa hàng, món ăn phóng lớn, sản phẩm khổng lồ cho sự kiện ra mắt, tác phẩm sắp đặt trong khuôn viên nhà máy.',
      'Xưởng dựng từ bản vẽ nhận diện thương hiệu của bạn, làm mẫu xốp hoặc đất sét để duyệt hình khối rồi mới đúc composite.',
    ],
    fits: ['Cửa hàng, chuỗi F&B', 'Nhà máy, khuôn viên doanh nghiệp', 'Sự kiện ra mắt sản phẩm', 'Hội chợ, triển lãm'],
    faq: [
      { q: 'Linh vật có chịu được nắng mưa không?', a: 'Có. Mô hình đặt ngoài trời dùng composite sợi thủy tinh và sơn ngoài trời, có khung thép bên trong và bệ neo.' },
      { q: 'Có làm từ file thiết kế 2D của agency không?', a: 'Có. Xưởng dựng hình khối 3D từ bản vẽ 2D và gửi ảnh mẫu từng giai đoạn để duyệt.' },
    ],
  },
  {
    slug: 'xuyen-sang',
    name: 'Mô hình xuyên sáng',
    short: 'Mô hình phát sáng từ bên trong, ngày là tượng, đêm là đèn.',
    cover: 'xuyen-sang-10',
    intro: [
      'Lớp vỏ composite xuyên sáng mỏng cho ánh đèn LED bên trong đi qua, làm mô hình tự phát sáng vào buổi tối. Hợp với biển hiệu, quầy bar, sân khấu và khu ẩm thực.',
    ],
    fits: ['Biển hiệu cửa hàng', 'Quầy bar, beer club', 'Sân khấu, sự kiện', 'Trang trí lễ hội'],
    faq: [
      { q: 'Đèn bên trong có thay được không?', a: 'Có. Mô hình được chừa cửa kỹ thuật để thay đèn và dây điện.' },
    ],
  },
  {
    slug: 'noi-that',
    name: 'Nội thất & decor composite',
    short: 'Quầy lễ tân, bàn ghế, đèn và vật dụng đúc liền khối.',
    cover: 'decor-11',
    intro: [
      'Composite cho phép làm những hình khối cong liền mạch mà gỗ hay kim loại khó làm: quầy lễ tân uốn lượn, cầu trượt xoắn, đôn ghế giả đá, chụp đèn đổ màu.',
    ],
    fits: ['Văn phòng, sảnh doanh nghiệp', 'Quán cà phê, nhà hàng', 'Khu vui chơi trẻ em', 'Showroom'],
    faq: [
      { q: 'Có sản xuất số lượng lớn cho chuỗi cửa hàng không?', a: 'Có. Sau khi có khuôn, xưởng đúc hàng loạt với chất lượng đồng đều.' },
    ],
  },
  {
    slug: 'quan-co',
    name: 'Quân cờ khổng lồ',
    short: 'Cờ vua, cờ cá ngựa cho công viên và khu đô thị.',
    cover: 'quan-co-04',
    intro: [
      'Bộ cờ cỡ lớn để người chơi đi lại trên bàn cờ thật. Kích thước quân theo mặt bằng, từ vài chục centimet đến hơn một mét.',
    ],
    fits: ['Công viên, khu đô thị', 'Resort, khu nghỉ dưỡng', 'Trung tâm thương mại', 'Trường học'],
    faq: [
      { q: 'Quân cờ có nặng không, trẻ em nhấc được không?', a: 'Composite rỗng nên nhẹ. Xưởng tư vấn kích thước phù hợp với người chơi chính.' },
    ],
  },
  {
    slug: 'mat-na',
    name: 'Mặt nạ & đạo cụ',
    short: 'Mặt nạ sân khấu, nạ đội đầu, đạo cụ biểu diễn.',
    cover: 'mat-na-02',
    intro: [
      'Mặt nạ biểu diễn, nạ đội đầu linh vật và đạo cụ cho phim, quảng cáo, sân khấu. Làm nhẹ, có lót mút và khoét tầm nhìn cho người mặc.',
    ],
    fits: ['Sân khấu, đoàn nghệ thuật', 'Quảng cáo, phim', 'Hoạt náo sự kiện', 'Trưng bày'],
    faq: [
      { q: 'Có làm theo nhân vật thương hiệu không?', a: 'Có, với điều kiện bạn có quyền sử dụng nhân vật đó.' },
    ],
  },
];

export const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

export const process = [
  { title: 'Nghe bạn kể', text: 'Gửi ảnh mặt bằng, kích thước, ý tưởng hoặc ảnh mẫu. Xưởng hỏi lại những điều cần biết: đặt ở đâu, nhìn từ khoảng cách nào, ngân sách và thời hạn.', image: 'phu-dieu-decor-28' },
  { title: 'Phác thảo', text: 'Bản vẽ bố cục đặt lên ảnh thật của công trình, để bạn thấy tác phẩm nằm trong không gian trước khi làm.', image: 'phu-dieu-decor-06' },
  { title: 'Nặn mẫu đất sét', text: 'Nghệ nhân nặn mẫu ở tỷ lệ thật. Đây là lúc bạn đến xưởng xem, góp ý từng chi tiết. Mẫu chưa đạt thì chưa đúc.', image: 'phu-dieu-decor-13' },
  { title: 'Làm khuôn và đúc', text: 'Lấy khuôn từ mẫu đã duyệt, đúc bằng composite, composite xuyên sáng hoặc xi măng, gia cố khung thép khi cần.', image: 'phat-giao-16' },
  { title: 'Hoàn thiện bề mặt', text: 'Mài, sửa nguội, sơn giả đồng, giả đá, nhũ vàng hoặc sơn màu theo mẫu đã chọn.', image: 'phu-dieu-decor-15' },
  { title: 'Vận chuyển và lắp đặt', text: 'Đóng gói, vận chuyển và lắp đặt tại công trình. Bàn giao kèm hướng dẫn bảo quản.', image: 'bao-tang-07' },
];

export const materials = [
  { name: 'Composite', text: 'Nhựa gia cường sợi thủy tinh. Nhẹ, bền ngoài trời, đúc được hình khối phức tạp và nhân bản nhiều lần.' },
  { name: 'Xi măng đắp tại chỗ', text: 'Đắp trực tiếp lên tường công trình, liền khối với kiến trúc. Hợp với mảng phù điêu rất lớn.' },
  { name: 'Giả đồng, giả đá', text: 'Lớp sơn hoàn thiện tạo vẻ đồng cổ, đồng xanh, đá trắng, đá xám với chi phí và trọng lượng thấp hơn vật liệu thật.' },
  { name: 'Nhũ vàng', text: 'Phủ nhũ hoặc mạ màu vàng cho tượng thờ, huy hiệu, phù điêu cần bắt sáng.' },
  { name: 'Composite xuyên sáng', text: 'Vỏ composite mỏng cho ánh đèn LED bên trong đi qua, biến mô hình thành đèn vào buổi tối.' },
];
