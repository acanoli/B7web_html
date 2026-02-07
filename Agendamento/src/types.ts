export type ScheduleStatus = 'AGUARDANDO_CARGA' | 'EM_TRANSITO' | 'AGUARDANDO_DESCARGA';

export interface Schedule {
    id: string;
    driverName: string;
    vehiclePlate: string;
    city: string;
    clientName: string;
    status: ScheduleStatus;
    createdAt: string;
}
