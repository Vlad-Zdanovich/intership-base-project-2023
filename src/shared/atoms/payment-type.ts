export interface PaymentTypeResponse {
    category: PaymentType[];
}

export interface PaymentType {
    category_id: string;
    category_name: CategoryName;
    category_icon: string;
    services: Service[];
}

export interface Service {
    service_id: string;
    service_name: string;
    service_icon: string;
}

type CategoryName = 'Мобильная связь' | 'ЖКХ' | 'Интернет'