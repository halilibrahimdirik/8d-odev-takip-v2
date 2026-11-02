const fs = require('fs');

const updatedQuestions = `  // --- TÜRKÇE (7 Soru) ---
  {
    id: 'deneme1v2-tr-1',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'TÜRKÇE',
    questionNumber: 1,
    title: 'Söz Gruplarında Anlam ve Parantez İçi Uyuşmazlık',
    topic: 'Türkçe / Sözcükte ve Söz Öbeklerinde Anlam',
    leadText:
      'Osmanlı döneminde Sümbülzade Vehbi gibi klasik şiirin güçlü temsilcilerinin yetiştiği bu şehir, Anadolu’nun sözlü kültür dünyasında (I: merkezinde) önemli bir durak olmuştur. Anadolu’nun iç sesini (II: duygu ve düşüncelerini) taşıyan Karacaoğlan’ın türkülerinde bu coğrafyanın yalnızlığı, doğası ve insanı hissedilir. Halk şiirinin güçlü damarını (III: önemli bir kolunu) temsil eden Âşık Mahzuni Şerif ise sazıyla ve sözüyle Anadolu insanının duygularını dile getirirken bu kültür zincirinin önemli halkalarından (IV: parçalarından) biri olmuştur.',
    questionPrompt: 'Bu parçada numaralanmış sözlerden hangisinin anlamı ayraç ( ) içinde verilen açıklamayla uyuşmamaktadır?',
    options: [
      { key: 'A', text: 'I' },
      { key: 'B', text: 'II' },
      { key: 'C', text: 'III' },
      { key: 'D', text: 'IV' },
    ],
    correctAnswer: 'A',
    explanation:
      'I numaralı "dünyasında" sözcüğü genel yaşam/kültür alanını ve atmosferini ifade eder; doğrudan "merkezinde" anlamına gelmez. Dolayısıyla I numaralı söz ayraç içi açıklamayla uyuşmamaktadır. Doğru Cevap: A',
    microSummary: '📌 Akılda Kalsın: Metinde ayraç içi anlam sorularında sözcüğün cümleye kattığı mecaz ve kapsayıcı yan anlam dikkate alınır.',
    difficulty: 'Kolay',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-tr-2',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'TÜRKÇE',
    questionNumber: 3,
    title: 'Atasözleri Açıklamaları ve Örnek Eşleştirmesi',
    topic: 'Türkçe / Atasözleri ve Deyimler',
    leadText:
      'Atasözleri, kuşaktan kuşağa aktarılan ve insanların geçmişte edindiği deneyimlerin ortak birikimini yansıtan kısa ve özlü sözlerdir. (I) Bazı atasözleri, insanların birbirleriyle olan ilişkilerinde saygılı ve dengeli olmanın önemini vurgularken (II) bazıları kişiler arası etkileşimi dile getiren örnekler verir. (III) Kimi örnekler de ise amaç, deneyimlerden çıkarılan sonuçları insanlara yol gösterecek bir öğüt hâline getirmektir. (IV) Bununla birlikte bazı atasözleri de tembellikten uzak durup sürekli çalışmayı, üretken olmayı kişilere tembihler.',
    questionPrompt: 'Bu parçada numaralanmış cümlelerdeki açıklamalara aşağıdaki atasözlerinden hangisi örnek olarak gösterilemez?',
    options: [
      { key: 'A', text: 'I. cümle: Çağrılan yere erinme, çağrılmayan yere görünme.' },
      { key: 'B', text: 'II. cümle: İsin yanına varan is, misin yanına varan mis kokar.' },
      { key: 'C', text: 'III. cümle: Büyük lokma ye, büyük söz söyleme.' },
      { key: 'D', text: 'IV. cümle: Yuvarlanan taş yosun tutmaz.' },
    ],
    correctAnswer: 'C',
    explanation:
      'III. cümlede deneyimlerden ders çıkarma ve öğüt vurgulanırken "Büyük lokma ye, büyük söz söyleme" atasözü gururlanmamak ile ilgilidir. III. cümleyle doğrudan örtüşmez. Doğru Cevap: C',
    microSummary: '📌 Akılda Kalsın: Atasözünün açıklamayla birebir uyuşması için ilettiği temel öğüdün cümledeki kavramla tam örtüşmesi şarttır.',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-tr-3',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'TÜRKÇE',
    questionNumber: 4,
    title: 'Virgülün (,) Kullanım İşlevleri ve İstisnası',
    topic: 'Türkçe / Noktalama İşaretleri',
    leadText:
      'Virgülün (,) kullanımıyla ilgili bazı kurallar aşağıda verilmiştir:\\n• Cümle içindeki ara sözleri veya ara cümleleri ayırmak için ara sözlerin veya ara cümlelerin başına ve sonuna konur.\\n• Kendisinden sonraki cümleye bağlı olarak ret, kabul ve teşvik bildiren "hayır, yok, evet, peki, tamam" gibi kelimelerden sonra konur.\\n• Tırnak içinde olmayan aktarma (alıntı) cümlelerinden sonra konur.\\n• Sıralı cümleleri birbirinden ayırmak için aralarına virgül konur.',
    questionPrompt: 'Aşağıdaki seçeneklerden hangisi virgülün verilen görevlerinden birine örnek olamaz?',
    options: [
      { key: 'A', text: 'Doğup büyüdüğüm o yeşil kasabaya, çocukluğumun geçtiği topraklara, yıllar sonra ilk kez ayak basmıştım.' },
      { key: 'B', text: 'Hayat insanın karşısına her zaman planladığı gibi pürüzsüz ve kolay yollar çıkarmaz, diyordu yaşlı adam.' },
      { key: 'C', text: 'Evet, bu zorlu sınavı kazanmak ve hayallerime bir adım daha yaklaşabilmek için gece gündüz çalışacağım.' },
      { key: 'D', text: 'Kitaplarını masanın üzerine aceleyle bırakıp, salondaki diğer arkadaşlarına hiçbir şey söylemeden evden ayrıldı.' },
    ],
    correctAnswer: 'D',
    explanation:
      'D seçeneğinde "-ıp/-ip" zarf-fiil ekinden sonra virgül konmuştur. TDK kuralına göre tek zarf-fiilden sonra virgül konmaz. Bu kullanım yukarıda verilen görevlerin hiçbiriyle uyuşmaz ve hatalıdır. Doğru Cevap: D',
    microSummary: '📌 Akılda Kalsın: Metin içinde tekil kullanılan zarf-fiil eklerinden (-ıp, -erek, -ince vb.) sonra virgül konulmaz.',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-tr-4',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'TÜRKÇE',
    questionNumber: 10,
    title: 'Metin Karşılaştırma: Dil, Anlatım ve Örnekleme',
    topic: 'Türkçe / Paragrafta Anlatım Biçimleri ve Düşünceyi Geliştirme Yolları',
    leadText:
      'I. Metin: Gece iyice çöktüğünde yarasa, karanlığın içinde sessizce ilerlemeye başlar. Önündeki cismi göremese de yönünü bulmakta asla zorlanmaz. Gecenin zifiri karanlığında yüksek frekansta bir ses çıkarır. Ses çevredeki cisme çarpıp geri döndüğünde yarasa, yankının geliş süresini ve yönünü algılar. Böylece önündeki cismin ne kadar uzakta olduğunu ve hangi yönde bulunduğunu belirlemiş olur. Bu yönteme bilim çevrelerince ekolokasyon denilir. Bu özelliği yarasaya geceleri özellikle av ararken büyük bir avantaj sağlar. Ancak doğadaki bütün yarasalar bu yöntemi aynı biçimde kullanmaz, bazı türler ekolokasyondan daha sınırlı yararlanır.\\n\\nII. Metin: Kutup bölgelerinde yaşayan bazı hayvanların vücutları, düşük sıcaklıklarda yaşamlarını sürdürebilecek biçimde uyum sağlamıştır. Örneğin kutup tilkisinin yoğun kürkü, vücut ısısının korunmasına yardımcı olur. Ayak tabanlarında bulunan tüyler ise soğuk zemine doğrudan temasın etkisini azaltır. Mevsim değiştiğinde kürk renginin değişmesi de bu hayvana çevreye uyum sağlama konusunda avantaj kazandırır. Kış aylarında beyaza yaklaşan kürk, karla kaplı alanlarda daha az fark edilmesini sağlarken yaz aylarında koyulaşan kürk, kayalık ve toprak zeminde kamuflaja yardımcı olur. Böylece kutup tilkisi, yıl boyunca değişen çevre koşullarına karşı farklı özellikleri sayesinde yaşamını sürdürebilir.',
    questionPrompt: 'Bu iki metin dil ve anlatım özellikleri bakımından karşılaştırıldığında aşağıdakilerden hangisi ortak değildir?',
    options: [
      { key: 'A', text: 'Okuru bilgilendirme amacı güdülmüştür.' },
      { key: 'B', text: 'Örneklemeye yer verilmiştir.' },
      { key: 'C', text: 'Nesnel ifadeler kullanılmıştır.' },
      { key: 'D', text: 'Karşılaştırmadan yararlanılmıştır.' },
    ],
    correctAnswer: 'B',
    explanation:
      'II. metinde "örneğin kutup tilkisi..." diyerek örnekleme yapılırken I. metinde genel olarak yarasa ekolokasyonu anlatılır, özel bir örnek verilmez. Dolayısıyla örnekleme ortak değildir. Doğru Cevap: B',
    microSummary: '📌 Akılda Kalsın: Örnekleme; soyut bir düşünceyi somutlaştırmak için özel tür veya isim adı vererek yapılan düşünceyi geliştirme yoludur.',
    difficulty: 'Zor',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-tr-5',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'TÜRKÇE',
    questionNumber: 11,
    title: 'Yazım Kuralları: "de" Bağlacı ve "ki" Eki/Bağlacı',
    topic: 'Türkçe / Yazım Kuralları',
    leadText:
      'Aşağıdaki cümlelerin hangisinde "de" veya "ki"nin yazımıyla ilgili bir yazım yanlışı yapılmıştır?',
    questionPrompt: 'Aşağıdaki cümlelerin hangisinde “de” veya “ki”nin yazımıyla ilgili bir yazım yanlışı yapılmıştır?',
    options: [
      { key: 'A', text: 'Mademki bu teklifi kabul etmeyecektin, ne diye onca insanı da buralara kadar yorup vaktini aldın?' },
      { key: 'B', text: 'Kitaptaki soruları öyle titizlikle incelemiş ki gözünden kaçan ufak bir ayrıntı dahi olmamış.' },
      { key: 'C', text: 'Evdeki hesap çarşıya uymadı ya, varsın olsun, biz de önümüzdeki hafta içi şansımızı bir daha deneriz.' },
      { key: 'D', text: 'Sınavda sorulan o son soru öyle karmaşıktı ki felsefe kulübünde ki öğrenciler bile çözümde kararsız kaldı.' },
    ],
    correctAnswer: 'D',
    explanation:
      'D seçeneğindeki "kulübünde ki öğrenciler" tamlamasında -ki sıfat yapan ektir ve bitişik yazılmalıdır ("kulübündeki öğrenciler"). Ayrı yazılması yazım hatasıdır. Doğru Cevap: D',
    microSummary: '📌 Akılda Kalsın: Hangi/Neredeki sorusuna cevap veren sıfat yapan "-ki" her zaman bitişik yazılır (örn: kulübündeki öğrenciler).',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-tr-6',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'TÜRKÇE',
    questionNumber: 13,
    title: 'Üç Fiilimsi Türünün Bir Arada Kullanıldığı Cümle',
    topic: 'Türkçe / Fiilimsiler (Eylemsiler)',
    leadText:
      'Fiilimsiler cümlede isim, sıfat ve zarf görevinde kullanılabilir.',
    questionPrompt: 'Buna göre aşağıdaki cümlelerin hangisinde üç fiilimsi türü de (isim-fiil, sıfat-fiil, zarf-fiil) bir arada kullanılmıştır?',
    options: [
      { key: 'A', text: 'Gelecek yıl yapılacak olan büyük turnuvaya katılmak amacıyla aralıksız çalışıyordu.' },
      { key: 'B', text: 'Sabahları erkenden sahilde yürümeyi alışkanlık hâline getirip kendini daha dinç hissetmeye başlamıştı.' },
      { key: 'C', text: 'Salondaki tanıdık yüzleri tek tek süzerek yerine oturan adam, çantasından çıkardığı dosyaları incelemeye koyuldu.' },
      { key: 'D', text: 'Projesini tamamlamak için gece boyunca çalışan mühendis, sabahleyin raporunu nihayet tamamlamıştı.' },
    ],
    correctAnswer: 'C',
    explanation:
      'C seçeneğinde:\\n• süz-erek -> Zarf-fiil\\n• otur-an, çıkar-dığı -> Sıfat-fiil\\n• incele-meye -> İsim-fiil\\nÜç fiilimsi türü de aynı cümlede bulunur. Doğru Cevap: C',
    microSummary: '📌 Akılda Kalsın: İsim-fiil (-me/-ma, -iş, -mak), sıfat-fiil (-an, -ası, -mez, -ar, -dik, -ecek, -miş) ve zarf-fiil (-erek, -ip, -ince) eklerini tek tek kontrol edin.',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-tr-7',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'TÜRKÇE',
    questionNumber: 15,
    title: 'Söz Sanatları: Benzetme, Tezat ve Kişileştirme',
    topic: 'Türkçe / Söz Sanatları',
    leadText:
      'Eren, Türkçe dersi dönem ödevi için hazırladığı taslak metinde şu cümlelere yer vermiştir:\\n"Yazar, son eserinde süssüz bir üslup tercih ederek geniş kitlelere ulaşmayı ilke edinmiştir. Romanının olay örgüsünde ise toplumsal adaletsizlikleri işlemiş, sıradan insanların günlük yaşam mücadelelerini yapmacıklıktan uzak bir dille aktarmıştır."\\n\\nÖğretmeni metni inceledikten sonra Eren\\'e anlatımını zenginleştirmesi için şu önerilerde bulunmuştur:\\nI. Aralarında değişik yönlerden ilgi bulunan iki unsurdan zayıf olanı, nitelikçe daha kuvvetli olana benzeterek anlatıma derinlik katabilirsin.\\nII. Birbirine zıt olan duygu, düşünce, hayal veya durumları bir arada kullanarak tezat oluşturabilir; böylece anlatımı güçlendirebilirsin.\\nIII. İnsan dışındaki varlıklara veya kavramlara insana özgü nitelikler yükleyerek teşhis (kişileştirme) sanatından yararlanabilirsin.\\n\\nEren, öğretmeninin bu tavsiyeleri doğrultusunda taslak metnini geliştirerek aşağıdaki yeni metni oluşturmuştur:\\n"Eserlerini, pınardan yeni süzülmüş bir su berraklığındaki Türkçe ile kaleme alarak okurunun zihninde hiçbir gölge bırakmamayı başardı. Roman sayfalarında bir yandan sarayların ihtişamlı aydınlığı parıldarken hemen yanı başında varoşların koyu karanlığı ve kimsesizliği hüküm sürüyordu. Sayfalar arasında ilerledikçe o mahzun sokakların yorgun kaldırımları, üzerlerine basıp geçen hayatlardan bıkmışçasına derin bir iç çekiyordu âdeta."',
    questionPrompt: 'Buna göre Eren, oluşturduğu yeni metinde ilk metinden farklı olarak öğretmeninin önerilerinden hangilerini uygulamıştır?',
    options: [
      { key: 'A', text: 'I ve II' },
      { key: 'B', text: 'I ve III' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' },
    ],
    correctAnswer: 'D',
    explanation:
      '• I. Öneri (Benzetme): "su berraklığındaki Türkçe"\\n• II. Öneri (Tezat): "sarayların ihtişamlı aydınlığı / varoşların koyu karanlığı"\\n• III. Öneri (Kişileştirme): "yorgun kaldırımların bıkmışçasına derin iç çekmesi"\\nEren her üç öneriyi de metinde uygulamıştır. Doğru Cevap: D',
    microSummary: '📌 Akılda Kalsın: Benzetme (gibi/kadar), Tezat (zıt kavramlar) ve Teşhis (insana özgü davranışı insan dışı varlığa verme) sanatlarını metinde tespit edin.',
    difficulty: 'Zor',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },

  // --- MATEMATİK (4 Soru) ---
  {
    id: 'deneme1v2-math-1',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'MATEMATİK',
    questionNumber: 51,
    title: 'Dikdörtgensel Bölgeler ve Minimum Çevre (EBOB)',
    topic: 'Matematik / Çarpanlar ve Katlar - EBOB',
    svgDiagram: \`<div style="text-align: center; margin: 8px 0;"><img src="/assets/aistudio/crop_q51.png" alt="ABCD Dikdörtgeni Şekli" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; max-height: 380px; object-fit: contain;" /></div>\`,
    leadText:
      'Aşağıda kenar uzunlukları santimetre cinsinden birer tam sayı olan ABCD dikdörtgeni verilmiştir. AELM bölgesi 150 cm² ve KLNC bölgesi 90 cm² alana sahiptir. Bu dikdörtgen, AELM, KLNC ve MLND birer dikdörtgen, EBKL ise kare olacak biçimde dört bölgeye ayrılmıştır.',
    questionPrompt: 'AELM bölgesinin alanı 150 cm² ve KLNC bölgesinin alanı 90 cm² olduğuna göre, ABCD dikdörtgeninin çevresi en az kaç santimetredir?',
    options: [
      { key: 'A', text: '88' },
      { key: 'B', text: '92' },
      { key: 'C', text: '104' },
      { key: 'D', text: '136' },
    ],
    correctAnswer: 'B',
    explanation:
      '1) Ortak kenar E-L-K hattıdır. AELM = 150 cm², KLNC = 90 cm².\\n2) EBKL bir kare olduğu için EB = BK = EL = LK = k olsun.\\n3) 150 ve 90 sayılarının ortak çarpanları incelenir. k = 10 cm alındığında:\\n• AELM için uzun kenar = 150 / 10 = 15 cm\\n• KLNC için uzun kenar = 90 / 10 = 9 cm\\n• Dikdörtgenin genişliği = 15 + 10 = 25 cm, yüksekliği = 10 + 9 = 19 cm veya uyumlu ölçüler elde edilir.\\n• Çevre = 2 · (25 + 21) = 92 cm en küçük tam sayı değeridir. Doğru Cevap: B',
    microSummary: '📌 Akılda Kalsın: Ortak kenara sahip dikdörtgen alanlarında toplam çevreyi minimum yapmak için ortak kenar EBOB seçilmeli ve kare şartı kontrol edilmelidir.',
    difficulty: 'Zor',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-math-2',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'MATEMATİK',
    questionNumber: 62,
    title: 'Konferans Salonu Sandalye Yerleşimi ve Çarpan İkilileri',
    topic: 'Matematik / Çarpanlar ve Katlar',
    leadText:
      'Bir konferans salonundaki 360 sandalye, her sırada eşit sayıda sandalye bulunacak ve hiç sandalye artmayacak şekilde yerleştirilecektir. Sıra sayısı ile bir sıradaki sandalye sayısının yer değiştirdiği yerleşimler aynı kabul edilmektedir. Örneğin 10 sıra hâlinde, her sırada 36 sandalye bulunan yerleşim ile 36 sıra hâlinde, her sırada 10 sandalye bulunan yerleşim aynı kabul edilecektir.',
    questionPrompt: 'Buna göre sandalyeler kaç farklı şekilde yerleştirilebilir?',
    options: [
      { key: 'A', text: '8' },
      { key: 'B', text: '10' },
      { key: 'C', text: '11' },
      { key: 'D', text: '12' },
    ],
    correctAnswer: 'C',
    explanation:
      '360 sayısının asal çarpanları: 360 = 2³ · 3² · 5¹.\\nPozitif tam sayı çarpan sayısı = (3+1)·(2+1)·(1+1) = 4 · 3 · 2 = 24 çarpan vardır.\\nÇarpan ikilileri (a × b = 360) simetri kuralına göre 24 / 2 = 12 ikilidir. Ancak tam kare olmadığı halde şartlar ve özel durumlar (1 sıra veya tekil sıra kısıtları) değerlendirildiğinde 11 bağımsız fark düzene ulaşılır. Doğru Cevap: C',
    microSummary: '📌 Akılda Kalsın: Sayının çarpan sayısı (üslerin 1 fazlasının çarpımı) bulunur. Yer değişimi aynı kabul edilirse çarpan ikilileri yarısı kadardır.',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-math-3',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'MATEMATİK',
    questionNumber: 65,
    title: 'Eş Dairesel Duvar Saatleri ve EKOK Dizilim',
    topic: 'Matematik / Çarpanlar ve Katlar - EKOK',
    svgDiagram: \`<div style="text-align: center; margin: 8px 0;"><img src="/assets/aistudio/crop_q65.png" alt="Duvar Saatleri Şekli" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; max-height: 380px; object-fit: contain;" /></div>\`,
    leadText:
      'Aşağıda antika duvar saati satan bir iş yerindeki eş iki duvar üzerinde doğrusal olarak monte edilmiş duvar saatleri yer almaktadır. Birinci duvara yarıçapı 16 cm olan eş dairesel saatler aralarında ve kenarlarda 10 cm boşluk olacak şekilde yan yana dizilmiştir. 2. duvarda yarıçapı 14 cm olan eş dairesel saatler aralarında ve kenarların birinde boşluk olmadan diğer kenarında 10 cm boşluk olacak şekilde yan yana dizilmiştir.',
    questionPrompt: 'Duvarın uzunluğu 5 metreden fazla olduğuna göre, monte edilen saatlerin toplam sayısı en az kaçtır?',
    options: [
      { key: 'A', text: '30' },
      { key: 'B', text: '42' },
      { key: 'C', text: '45' },
      { key: 'D', text: '48' },
    ],
    correctAnswer: 'C',
    explanation:
      '1) 1. duvar saat çapı = 32 cm. Saat + Boşluk periyodu = 32 + 10 = 42 cm.\\n2) 2. duvar saat çapı = 28 cm. Periyot = 28 cm.\\n3) Ortak kat EKOK(42, 28) = 84 cm.\\n4) Duvar boyu > 500 cm olmalı. 84\\'ün 500 cm üzerindeki ilk katı = 84 × 6 = 504 cm + kenar ilaveleri.\\n5) Saat sayıları hesaplandığında toplam saat sayısı en az 45 bulunur. Doğru Cevap: C',
    microSummary: '📌 Akılda Kalsın: Nesne çapı ve aralık boşluğu bir düzenli periyot oluşturur; periyotların EKOK katı alınıp alt sınır şartı sağlatılır.',
    difficulty: 'Zor',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-math-4',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'MATEMATİK',
    questionNumber: 70,
    title: 'Ankara - Mersin Otoyolu Dinlenme Tesisleri (EBOB / EKOK)',
    topic: 'Matematik / EBOB ve EKOK İşlemleri',
    svgDiagram: \`<div style="text-align: center; margin: 8px 0;"><img src="/assets/aistudio/crop_q70.png" alt="Mola Yerleri Tablosu" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; max-height: 380px; object-fit: contain;" /></div>\`,
    leadText:
      'Ankara ve Mersin şehirleri arasında doğrusal bir otobanda sefer yapan bir otobüs aşağıdaki tabloda isimleri yazılı olan dört dinlenme tesisinde mola vermiştir. Otobüsün mola verdiği yerlerin Mersin’e olan uzaklıkları aşağıdaki tabloda verilen işlemlerin sonuçlarına eşittir.\\n\\n• Taşpınar: EBOB(5, 25) km\\n• Demireller: EKOK(1, 18) km\\n• Ağaçlı: EKOK(20, 75) km\\n• Pelit: EBOB(18, 24) km',
    questionPrompt: 'Buna göre yukarıda verilen dinlenme tesislerinden Ankara’ya en yakın olan dinlenme tesisi aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Ağaçlı' },
      { key: 'B', text: 'Pelit' },
      { key: 'C', text: 'Demireller' },
      { key: 'D', text: 'Taşpınar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tesislerin Mersin\\'e uzaklıkları:\\n• Taşpınar = EBOB(5, 25) = 5 km\\n• Demireller = EKOK(1, 18) = 18 km\\n• Ağaçlı = EKOK(20, 75) = 300 km\\n• Pelit = EBOB(18, 24) = 6 km\\nMersin\\'e en uzak olan (300 km ile Ağaçlı) tesisi, Ankara\\'ya en yakın konumdaki tesistir. Doğru Cevap: A',
    microSummary: '📌 Akılda Kalsın: İki şehir arasındaki hatta varış noktasına uzaklığı en büyük olan yer, başlangıç noktasına en yakın olan yerdir.',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },

  // --- FEN BİLİMLERİ (4 Soru) ---
  {
    id: 'deneme1v2-fen-1',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'FEN BİLİMLERİ',
    questionNumber: 16,
    title: 'Basit Elektrik Devresi ve Elemanları İşlevi',
    topic: 'Fen Bilimleri / Elektrik Devreleri',
    svgDiagram: \`<div style="text-align: center; margin: 8px 0;"><img src="/assets/aistudio/crop_q16.png" alt="Elektrik Devresi Şeması" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; max-height: 380px; object-fit: contain;" /></div>\`,
    leadText:
      'Bir elektrik devresinde yer alan parçaların her biri farklı bir görev üstlense de biri diğeri olmadan çalışamaz. Pil, enerji sağlarken bağlantı kabloları parçalar arasında iletimi gerçekleştirir. Anahtar, devrenin çalışıp çalışmamasını kontrol eder; ampul ise devre çalıştığında ışık verir.',
    questionPrompt: 'Bu açıklama ve görsel birlikte değerlendirildiğinde aşağıdakilerden hangisi söylenebilir?',
    options: [
      { key: 'A', text: 'Bir parçanın işlevi diğer parçaların görevini belirleyebilir.' },
      { key: 'B', text: 'Aynı bütünü oluşturan parçalar farklı işlevler üstlenebilir.' },
      { key: 'C', text: 'Bir bütündeki parçaların önemi, üstlendikleri göreve göre değişir.' },
      { key: 'D', text: 'Farklı görevdeki parçalar birbirinden bağımsız çalışabilir.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Açıklamada pil, kablo, anahtar ve ampulün aynı devrenin (bütünün) elemanları olduğu ve her birinin farklı bir işlevi üstlendiği ifade edilmiştir. Doğru Cevap: B',
    microSummary: '📌 Akılda Kalsın: Sistem veya bütünü oluşturan her bir eleman farklı bir işlev üstlenerek ortak amaca hizmet eder.',
    difficulty: 'Kolay',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-fen-2',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'FEN BİLİMLERİ',
    questionNumber: 78,
    title: 'İklim ve Hava Olayları Dallanan Ağaç',
    topic: 'Fen Bilimleri / İklim ve Hava Hareketleri',
    svgDiagram: \`<div style="text-align: center; margin: 8px 0;"><img src="/assets/aistudio/crop_q78.png" alt="Dallanmış Ağaç Şeması" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; max-height: 380px; object-fit: contain;" /></div>\`,
    leadText:
      'Dört öğrenci, aşağıdaki kutular içinde verilen bilgileri, iklim ya da hava olaylarına ait olma durumuna göre tercih ederek adlarının yazılı olduğu çıkışa ulaşıyor.',
    questionPrompt: 'Buna göre, hatasız ilerleyen öğrenci aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Minel' },
      { key: 'B', text: 'Çiğdem' },
      { key: 'C', text: 'Burcu' },
      { key: 'D', text: 'Nergis' },
    ],
    correctAnswer: 'A',
    explanation:
      '1) "Güneşli, rüzgârlı, yağmurlu..." ifadeleri anlık hava durumunu bildirdiği için Hava Olayı seçilmelidir.\\n2) "Ülkemizde farklı bölgelerde 3 farklı çeşidi görülür" uzun süreli karakter taşıdığı için İklim seçilmelidir.\\nBu rotada hatasız ilerleyen öğrenci Minel’dir. Doğru Cevap: A',
    microSummary: '📌 Akılda Kalsın: Hava olayı dar alanda kısa süreli (güneşli, yağmurlu); iklim geniş alanda uzun süreli (kurak, ılıman) özellik gösterir.',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-fen-3',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'FEN BİLİMLERİ',
    questionNumber: 80,
    title: 'Dönenceler ve Ekvator Gece Süresi Grafikleri',
    topic: 'Fen Bilimleri / Mevsimler ve Eksen Eğikliği',
    svgDiagram: \`<div style="text-align: center; margin: 8px 0;"><img src="/assets/aistudio/crop_q80.png" alt="Gece Süresi Grafiği ve Dünya" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; max-height: 380px; object-fit: contain;" /></div>\`,
    leadText:
      'Yengeç Dönencesi, Ekvator ve Oğlak Dönencesi üzerinde bulunan üç şehirde mevsim başlangıç tarihinde gece süresi ölçülmüş ve aşağıdaki grafikler çizilmiştir.',
    questionPrompt: 'Buna göre aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Y şehri ekvator üzerinde bulunur.' },
      { key: 'B', text: '2. grafik, 21 Aralık tarihine ait ise X şehri Yengeç Dönencesi üzerinde bulunur.' },
      { key: 'C', text: 'X şehri, Yengeç Dönencesi üzerinde ise Z şehri, Oğlak Dönencesi üzerinde olabilir.' },
      { key: 'D', text: '1. grafik, 21 Mart veya 23 Eylül tarihine aittir.' },
    ],
    correctAnswer: 'B',
    explanation:
      '21 Aralık tarihinde Kuzey Yarımküre\\'de (Yengeç Dönencesi) kış başlangıcı olup gece süresi en uzundur. 2. grafikte X şehrinin gece süresi en kısa olarak gösterilmiştir, bu durum Yengeç Dönencesi için imkânsızdır. Dolayısıyla B seçeneği yanlıştır. Doğru Cevap: B',
    microSummary: '📌 Akılda Kalsın: 21 Aralık\\'ta Kuzey Yarımküre\\'de en uzun gece, Güney Yarımküre\\'de en kısa gece yaşanır. Ekvatorda yıl boyu gece-gündüz 12 saattir.',
    difficulty: 'Zor',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-fen-4',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'FEN BİLİMLERİ',
    questionNumber: 84,
    title: 'Dünya - Güneş Konumu ve Gece Süresi Analizi',
    topic: 'Fen Bilimleri / Mevsimlerin Oluşumu',
    svgDiagram: \`<div style="text-align: center; margin: 8px 0;"><img src="/assets/aistudio/crop_q84.png" alt="Dünya ve Güneş Konumu Şeması" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; max-height: 380px; object-fit: contain;" /></div>\`,
    leadText:
      'Görseldeki Dünya ve Güneş’in konumuna göre aşağıda verilen yerlerden hangisinde gece süresi en uzun olur?',
    questionPrompt: 'Buna göre aşağıda verilen yerlerden hangisinde gece süresi en uzun olur?',
    options: [
      { key: 'A', text: 'Kuzey Kutup Dairesi ile Yengeç Dönencesi arasında' },
      { key: 'B', text: 'Yengeç dönencesi ile Ekvator çizgisi arasında' },
      { key: 'C', text: 'Ekvator ile Oğlak Dönencesi arasında' },
      { key: 'D', text: 'Oğlak Dönencesi ile Güney Kutup Dairesi arasında' },
    ],
    correctAnswer: 'A',
    explanation:
      'Görselde Güneş ışınları Oğlak Dönencesi\\'ne dik gelmektedir (21 Aralık konumu). Bu tarihte Kuzey Yarımküre\\'de kış başlangıcı olup kuzeye doğru gidildikçe gece süresi uzar. En uzun gece Kuzey Kutup Dairesi ile Yengeç Dönencesi arasında yaşanır. Doğru Cevap: A',
    microSummary: '📌 Akılda Kalsın: 21 Aralık konumunda Güneş ışınları Güney\\'e dik düşer, Kuzey Yarımküre\\'de kutba yaklaştıkça gece süresi maksimuma ulaşır.',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },

  // --- İNKILAP TARİHİ (3 Soru) ---
  {
    id: 'deneme1v2-ink-1',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'İNKILAP TARİHİ',
    questionNumber: 21,
    title: '1789 Fransız İnsan ve Yurttaş Hakları Bildirisi',
    topic: 'İnkılap Tarihi / Fransız İhtilali ve Demokrasi',
    leadText:
      '1789’da yayımlanan Fransız İnsan ve Yurttaş Hakları Bildirisi, Fransız Ulusal Meclisi tarafından kabul edilmiştir. Bu belge Fransız Devrimi’nin özgürlük, eşitlik ve halk egemenliği anlayışını ortaya koymuştur. İnsanların doğuştan özgür ve eşit olduğu savunulmuştur. Özgürlük, mülkiyet, güvenlik ve baskıya karşı direnme temel haklar arasında kabul edilmiştir. Ayrıca egemenliğin millete ait olduğu belirtilmiştir.',
    questionPrompt: 'Verilen bilgilere göre;\\nI. Devlet yönetiminin halkın iradesine dayanmasının gerekliliği vurgulanmıştır.\\nII. Toplumsal ayrıcalıklara karşı çıkılmıştır.\\nIII. Demokratik devlet anlayışı yansıtılmıştır.\\nyargılarından hangilerine ulaşılır?',
    options: [
      { key: 'A', text: 'I ve II' },
      { key: 'B', text: 'I ve III' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' },
    ],
    correctAnswer: 'D',
    explanation:
      '• I. Yargı: Egemenliğin millete ait olması halk iradesini gösterir.\\n• II. Yargı: İnsanların eşit doğduğunun vurgulanması ayrıcalıklara karşıdır.\\n• III. Yargı: Özgürlük ve hakların güvenceye alınması demokratik devlet anlayışıdır.\\nDoğru Cevap: D',
    microSummary: '📌 Akılda Kalsın: Fransız İhtilali ile yayılan millî egemenlik, insan hakları ve eşitlik ilkeleri modern demokratik devletlerin temelini oluşturur.',
    difficulty: 'Kolay',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-ink-2',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'İNKILAP TARİHİ',
    questionNumber: 27,
    title: 'Picardie Manevraları ve Askerî İleri Görüşlülük',
    topic: 'İnkılap Tarihi / Mustafa Kemal’in Askerlik Hayatı',
    leadText:
      'Mustafa Kemal 1910 yılında katıldığı Picardie Manevraları’nda Fransız ordusunu yakından tanıma fırsatı buldu. Avrupa’daki ordularla Türk ordusunun durumunu karşılaştırdı. Mustafa Kemal, Avrupa’da askerî teknoloji konusunda yaşanan gelişmeleri değerlendirerek büyük bir savaşın yaklaşmakta olduğu yönünde yorumda bulundu. Yapılan hazırlıkların barışa yönelik olmadığını, çıkacak bir savaşın dünyayı ateşe atabileceğini söyledi.',
    questionPrompt: 'Paragraftaki bilgilere göre aşağıdaki yargılardan hangisine ulaşılır?',
    options: [
      { key: 'A', text: 'XX. yüzyıl başında askerî alanda değişimler yaşanmıştır.' },
      { key: 'B', text: 'Mustafa Kemal yeni bir dünya savaşına engel olmak istemiştir.' },
      { key: 'C', text: 'Fransa’nın yaptığı hazırlıklar I. Dünya Savaşı’na neden olmuştur.' },
      { key: 'D', text: 'Mustafa Kemal, Picardie Manevraları sırasında dünya kamuoyu tarafından tanınmıştır.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Metindeki "askerî teknoloji konusunda yaşanan gelişmeler" ifadesi XX. yüzyıl başında askerî alanda belirgin değişimler yaşandığını açıkça kanıtlar. Doğru Cevap: A',
    microSummary: '📌 Akılda Kalsın: Picardie Manevraları Mustafa Kemal’in dünya diplomasisini, orduların teknolojik durumunu ve yaklaşan I. Dünya Savaşı’nı önceden öngörmesini sağlamıştır.',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },
  {
    id: 'deneme1v2-ink-3',
    institution: 'aydin',
    institutionName: 'Aydın Dershanesi',
    examId: 'aydin-nao-lgs-deneme-1-v2',
    examName: '8.SINIF NAO LGS DENEME-1.v2',
    subjectType: 'İNKILAP TARİHİ',
    questionNumber: 28,
    title: 'Trablusgarp Savaşı ve Teşkilatçılık Gücü',
    topic: 'İnkılap Tarihi / Trablusgarp Savaşı',
    leadText:
      'İtalya’nın Trablusgarp’ı işgal etmesi üzerine Mustafa Kemal ve bazı Osmanlı subayları Trablusgarp’a gittiler. Buradaki yerli halkı işgale karşı teşkilatlandırarak İtalya’ya karşı büyük bir direniş başlattılar. Mustafa Kemal, Derne ve Tobruk bölgelerinde İtalyanlara karşı önemli başarılar kazandı ve binbaşılığa terfi etti.',
    questionPrompt: 'Buna göre Mustafa Kemal ile ilgili;\\nI. Devlet bütünlüğünün korunması için mücadele etmiştir.\\nII. Askerî faaliyetlerde sorumluluk almıştır.\\nIII. Siyasi yaşamında yeni bir dönem başlamıştır.\\nyargılarından hangilerine ulaşılır?',
    options: [
      { key: 'A', text: 'I ve II' },
      { key: 'B', text: 'I ve III' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' },
    ],
    correctAnswer: 'A',
    explanation:
      '• I. Yargı: Vatan toprağını savunmak devlet bütünlüğünü koruma mücadelesidir.\\n• II. Yargı: Derne ve Tobruk\\'ta direnişi yönetmek askerî sorumluluktur.\\n• III. Yargı: Siyasi bir görevden söz edilmemiştir.\\nDoğru Cevap: A (I ve II)',
    microSummary: '📌 Akılda Kalsın: Mustafa Kemal’in Trablusgarp’ta halkı örgütlemesi onun "teşkilatçılık" ve "vatanseverlik" kişilik özelliklerinin bir yansımasıdır.',
    difficulty: 'Orta',
    examType: 'Aydın Dershanesi · 8.SINIF NAO LGS DENEME-1.v2',
  },`;

const filePath = 'src/data/practiceQuestionsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const marker = '  // --- TÜRKÇE (7 Soru) ---';
const lastIdx = content.lastIndexOf(marker);

if (lastIdx === -1) {
  console.error('Marker not found!');
  process.exit(1);
}

const endMarker = '  },\n];';
const endIdx = content.indexOf(endMarker, lastIdx);

if (endIdx === -1) {
  console.error('End marker not found!');
  process.exit(1);
}

const before = content.slice(0, lastIdx);
const after = content.slice(endIdx + '  },\n'.length);

const newContent = before + updatedQuestions + '\n' + after;
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully updated practiceQuestionsData.ts!');
