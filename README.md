<h1 align="center"> Pazarlai Ai Destekli Ürün Pazarlama Platformu </h1> <br>
<p align="center">
  <img width="512" height="256" alt="pazarlai (2)" src="https://github.com/user-attachments/assets/4e55800b-4efa-4e65-bcab-1710979d411b" />
</p>


## 📋 Proje Hakkında

**Pazarlai**, e-ticaret işletmelerinin ürün fotoğraflarından otomatik olarak profesyonel içerik üretmesini sağlayan yapay zeka destekli bir platformdur. Kullanıcılar basit ürün fotoğrafları yükleyerek, AI teknolojisi ile profesyonel ürün açıklamaları, sosyal medya içerikleri, fiyat önerileri ve görsel iyileştirmeler elde edebilirler.

## ✨ Ana Özellikler

### 🎯 AI Destekli İçerik Üretimi

-   **Profesyonel Ürün Açıklamaları**: Ürün fotoğrafını analiz ederek satış odaklı, SEO uyumlu açıklamalar oluşturur
-   **Sosyal Medya İçerikleri**: Instagram, Facebook, Twitter, LinkedIn ve TikTok için özelleştirilmiş içerikler
-   **Akıllı Fiyat Önerisi**: Piyasa araştırması ve rekabet analizi ile optimal fiyat önerileri
-   **Kategori Belirleme**: Ürünleri otomatik olarak doğru kategorilere yerleştirir
-   **Hashtag Üretimi**: Platform bazlı hashtag önerileri
-   **Özellik Çıkarımı**: Ürün özelliklerini otomatik olarak ürün görselinden analizi

### 📸 Görsel İşleme

-   **Profesyonel Fotoğraf Dönüşümü**: Basit telefon fotoğraflarını e-ticaret kalitesinde görsellere dönüştürür
-   **Otomatik Arka Plan Düzenleme**: AI ile görsel optimizasyonu
-   **Çoklu Format Desteği**: JPG, PNG formatları

### 🔐 Kullanıcı Yönetimi

-   **JWT Tabanlı Kimlik Doğrulama**: Güvenli giriş sistemi
-   **Korumalı Rotalar**: Kullanıcı bazlı erişim kontrolü
-   **Kişisel İçerik Yönetimi**: Kullanıcıların kendi içeriklerini yönetebilmesi

## 🛠️ Teknoloji Stack'i

### Frontend

-   **React 19.1.0** - Modern React hooks ve context API
-   **React Router DOM 7.7.1** - SPA routing
-   **Tailwind CSS 4.1.11** - Modern CSS framework
-   **Vite 7.0.4** - Hızlı geliştirme ortamı
-   **Axios 1.11.0** - HTTP client
-   **React Icons 5.5.0** - Icon kütüphanesi
-   **React Toastify 11.0.5** - Bildirim sistemi

### Backend

-   **Flask** - Python web framework
-   **FastAPI** - AI servisleri için async API framework
-   **SQLAlchemy Core** - Veritabanı ORM
-   **PostgreSQL** - Ana veritabanı (JSONB desteği)
-   **JWT** - Token tabanlı kimlik doğrulama
-   **CORS** - Cross-origin resource sharing

### AI Servisleri

-   **Google Gemini 2.5 Pro** - Ana AI modeli
-   **Google Gemini 2.0 Flash Preview** - Görsel üretim
-   **Cloudinary** - Görsel depolama ve işleme
-   **PIL (Pillow)** - Python görsel işleme
-   **aiohttp** - Asenkron HTTP istekleri

### Geliştirme Araçları

-   **ESLint** - JavaScript/React linting
-   **PostCSS** - CSS işleme
-   **Autoprefixer** - CSS vendor prefix'leri

## 🏗️ Proje Yapısı

```
pazarlai/
├── client/                          # Frontend React uygulaması
│   ├── src/
│   │   ├── api/                     # API client'ları
│   │   ├── components/              # React bileşenleri
│   │   │   ├── sections/            # Sayfa bölümleri
│   │   │   ├── ui/                  # UI bileşenleri
│   │   │   └── pricing/             # Fiyatlandırma bileşenleri
│   │   ├── contexts/                # React context'leri
│   │   ├── data/                    # Statik veri dosyaları
│   │   ├── pages/                   # Sayfa bileşenleri
│   │   └── constants/               # Sabitler ve konfigürasyon
│   ├── public/                      # Statik dosyalar
│   └── package.json                 # Frontend bağımlılıkları
├── server/                          # Backend Flask uygulaması
│   ├── ai_services/                 # AI mikroservisleri
│   │   ├── marketing_description_service/  # Pazarlama açıklaması
│   │   ├── tag_generator_service/          # Hashtag üretimi
│   │   ├── feature_extractor_service/      # Özellik çıkarımı
│   │   ├── image_generator_service/        # Görsel üretimi
│   │   └── pazarlai_service/              # Ana orchestrator servis
│   ├── config/                      # Konfigürasyon dosyaları
│   ├── controllers/                 # API controller'ları
│   ├── models/                      # Veritabanı modelleri
│   ├── routes/                      # API rotaları
│   ├── services/                    # İş mantığı servisleri
│   └── utils/                       # Yardımcı fonksiyonlar
└── README.md                        # Proje dokümantasyonu
```


## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje BTK Akademi 2025 Hackathon kapsamında geliştirilmiştir.

## 📞 İletişim

Proje ile ilgili sorularınız için:

-   **E-posta**: hfurkankarademir@gmail.com ya da mertustun033@gmail.com
-   **GitHub Issues**: Teknik sorunlar için issue açabilirsiniz

## 🙏 Teşekkürler

-   **BTK Akademi** - Eğitim ve destek için
-   **Google AI** - Gemini modelleri için
-   **Cloudinary** - Görsel depolama hizmeti için
-   **React & Flask Communities** - Açık kaynak katkıları için

---

**Not**: Bu proje aktif geliştirme aşamasındadır. Özellikler ve API'ler değişebilir.
