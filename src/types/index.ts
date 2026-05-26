export interface ContactState {
    fullName: string;
    phone: string;
    message: string;
}
export interface Services {
    id: string;
    title: string;
    description: string;
}
interface DayCounterProps {
    startDateIso: string;
    label: string;
}
