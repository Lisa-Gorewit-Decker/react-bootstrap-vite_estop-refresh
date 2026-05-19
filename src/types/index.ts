export interface DrivingService {
    id: string;
    title: string;
    description: string;
    price: string;
    date: string;
    time: string;
    location: string;
}
export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

export interface ContactState {
    fullName: string;
    phone: string;
    message: string;
}
export interface DayCounterProps {
    startDateIso: string;
    endDateIso: string;
}
