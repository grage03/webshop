import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._section = [
            {id: 1, device: 'Все'},
            {id: 2, device: 'Мобильные телефоны'},
            {id: 3, device: 'Ноутбуки'},
            {id: 4, device: 'Моноблоки'},
            {id: 5, device: 'Аксессуары'},
            {id: 6, device: 'Планшеты'},
        ];

        this._devicesItem = [
            {id: 1, name: 'Xiaomi Redmi 9T', type: 'Мобильные телефоны', description: 'Android, экран 6.8" AMOLED (1440x3200), Exynos 2100, ОЗУ 12 ГБ, флэш-память 128 ГБ, камера 108 Мп, аккумулятор 5000 мАч, 2 SIM', price: 500, img: 'https://content2.onliner.by/catalog/device/header/eb06fdbcb8f3f638cfccab238c29f7c7.jpeg', properties: [{id: 1, name: 'Операционная система', text: 'Android'}, {id: 2, name: 'Версия операционной системы', text: 'Android 10.0'}, {id: 3, name: 'Разрешение экрана', text: '1080x2340'}, {id: 4, name: 'Оперативная память', text: '4 ГБ  (LPDDR4X)'}, {id: 5, name: 'Встроенная камера', text: '48 Мп + 8 Мп + 2 Мп + 2 Мп'}, {id: 6, name: 'Количество точек матрицы', text: '48 Мп'}]},
            {id: 2, name: 'Samsung Galaxy S21 Ultra', type: 'Мобильные телефоны', description: 'Android, экран 6.8" AMOLED (1440x3200), Exynos 2100, ОЗУ 12 ГБ, флэш-память 256 ГБ, камера 108 Мп, аккумулятор 5000 мАч, 2 SIM', price: 500, img: 'https://content2.onliner.by/catalog/device/header/8274f4fe0e187fada545a5471ac4534f.jpeg', properties: []},
            {id: 3, name: 'Huawei P40 lite', type: 'Мобильные телефоны', description: 'Android, экран 6.4" IPS (1080x2310), HiSilicon Kirin 810, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 4200 мАч, 2 SIM', price: 500, img: 'https://content2.onliner.by/catalog/device/header/fdc0226b08f95b9b8fed5cc26c0f36f0.jpeg', properties: []},
            {id: 4, name: 'HONOR 10X Lite DNN-LX9', type: 'Мобильные телефоны', description: 'Android, экран 6.67" IPS (1080x2400), HiSilicon Kirin 710A, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 5000 мАч, 2 SIM', price: 500, img: 'https://content2.onliner.by/catalog/device/header/42d35bd50bd153fe4027758fc72679af.jpeg', properties: []},
            {id: 5, name: 'ASUS TUF Gaming F15', type: 'Ноутбуки', description: '15.6" 1920 x 1080 IPS, несенсорный, Intel Core i5 10300H 2500 МГц, 8 ГБ, SSD 512 ГБ, граф. адаптер: NVIDIA GeForce GTX 1650 Ti 4 ГБ, без ОС, цвет крышки черный', price: 500, img: 'https://content2.onliner.by/catalog/device/header/40b4ea5dfad47cfbf39a72e5afbef237.jpeg', properties: []},
            {id: 6, name: 'HONOR MagicBook 14', type: 'Ноутбуки', description: '14.0" 1920 x 1080 IPS, несенсорный, AMD Ryzen 5 3500U 2100 МГц, 8 ГБ, SSD 512 ГБ, граф. адаптер: встроенный, Windows 10, цвет крышки темно-серый', price: 500, img: 'https://content2.onliner.by/catalog/device/header/3ca32c20c4104d66bc0bf2155d9b85b6.jpeg', properties: []},
            {id: 7, name: 'HP 15s-eq1103ur', type: 'Ноутбуки', description: '15.6" 1920 x 1080 IPS, несенсорный, AMD Ryzen 5 4500U 2300 МГц, 8 ГБ, SSD 256 ГБ, граф. адаптер: встроенный, без ОС, цвет крышки темно-серый', price: 500, img: 'https://content2.onliner.by/catalog/device/header/20c0d2fe95fc1e8bf24b0f852de351c4.jpeg', properties: []},
        ];

        this._basketDevices = [];

        this._currentDevice = [];

        this._currentProperties = [];

        this._isDeviceActive = 1;

        makeAutoObservable(this);
    }

    setBasketDevices(value) {
        this._basketDevices = value;
    }

    setCurrentProperties(value) {
        this._currentProperties = value;
    }

    setCurrentDevice(value) {
        this._currentDevice = value;
    }

    setIsDeviceActive(value) {
        this._isDeviceActive = value;
    }

    setDevicesItem(value) {
        this._devicesItem = value;
    }

    setSection(value) {
        this._section = value;
    }

    get basketDevices() {
        return this._basketDevices;
    }

    get currentProperties() {
        return this._currentProperties;
    }

    get currentDevice() {
        return this._currentDevice;
    }

    get isDeviceActive() {
        return this._isDeviceActive;
    }

    get devicesItem() {
        return this._devicesItem;
    }

    get section() {
        return this._section;
    }
} 