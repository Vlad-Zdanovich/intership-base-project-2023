type CategoryName = 'Мобильная связь' | 'ЖКХ' | 'Интернет'

export interface Service {
    service_id: string;
    service_name: string;
    service_icon: string;
}

export interface PaymentType {
    category_id: string;
    category_name: CategoryName;
    category_icon: string;
    services: Service[];
}

export interface PaymentTypeResponse {
    category: PaymentType[];
}