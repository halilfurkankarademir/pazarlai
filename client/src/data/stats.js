import {
    FiTrendingUp,
    FiDollarSign,
    FiUsers,
    FiStar,
    FiTarget,
    FiZap,
    FiHeart,
    FiCamera,
} from "react-icons/fi";

export const homeStats = [
    {
        icon: FiUsers,
        value: "15K+",
        label: "Mutlu Satıcı",
        change: "+23%",
        changeType: "increase",
    },
    {
        icon: FiTrendingUp,
        value: "%340",
        label: "Ortalama Satış Artışı",
        change: "+12%",
        changeType: "increase",
    },
    {
        icon: FiDollarSign,
        value: "₺2.4M",
        label: "Toplam Gelir Artışı",
        change: "+45%",
        changeType: "increase",
    },
    {
        icon: FiZap,
        value: "30sn",
        label: "Ortalama Analiz Süresi",
        change: "-15%",
        changeType: "decrease",
    },
];

export const exampleStats = [
    {
        icon: FiTrendingUp,
        value: "15,847",
        label: "Başarılı Ürün Analizi",
        color: "blue",
    },
    {
        icon: FiDollarSign,
        value: "₺2.4M",
        label: "Toplam Satış Artışı",
        color: "green",
    },
    {
        icon: FiUsers,
        value: "3,256",
        label: "Mutlu Satıcı",
        color: "purple",
    },
    {
        icon: FiStar,
        value: "4.9",
        label: "Müşteri Memnuniyeti",
        color: "yellow",
    },
];

export const categories = [
    {
        name: "El Yapımı Ürünler",
        icon: FiHeart,
        count: "2,847",
        color: "pink",
    },
    {
        name: "Ev Yemekleri",
        icon: FiTarget,
        count: "1,923",
        color: "orange",
    },
    {
        name: "Hizmet Sektörü",
        icon: FiUsers,
        count: "3,456",
        color: "blue",
    },
    {
        name: "Teknoloji",
        icon: FiZap,
        count: "987",
        color: "purple",
    },
    {
        name: "Moda & Aksesuar",
        icon: FiStar,
        count: "2,156",
        color: "pink",
    },
    {
        name: "Fotoğrafçılık",
        icon: FiCamera,
        count: "1,234",
        color: "green",
    },
];
