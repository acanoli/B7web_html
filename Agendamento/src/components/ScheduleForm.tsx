import React, { useState } from 'react';
import { type Schedule, type ScheduleStatus } from '../types';

interface ScheduleFormProps {
    onAddSchedule: (schedule: Omit<Schedule, 'id' | 'createdAt'>) => void;
}

export const ScheduleForm: React.FC<ScheduleFormProps> = ({ onAddSchedule }) => {
    const [driverName, setDriverName] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [city, setCity] = useState('');
    const [clientName, setClientName] = useState('');
    const [status, setStatus] = useState<ScheduleStatus>('AGUARDANDO_CARGA');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!driverName || !vehiclePlate || !city || !clientName) return;

        onAddSchedule({
            driverName,
            vehiclePlate,
            city,
            clientName,
            status,
        });

        // Reset form
        setDriverName('');
        setVehiclePlate('');
        setCity('');
        setClientName('');
        setStatus('AGUARDANDO_CARGA');
    };

    return (
        <form onSubmit={handleSubmit} className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Nome do Motorista</label>
                <input
                    type="text"
                    value={driverName}
                    onChange={(e) => setDriverName(e.target.value)}
                    placeholder="Ex: João Silva"
                    required
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Placa do Veículo</label>
                <input
                    type="text"
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value.toUpperCase())}
                    placeholder="ABC-1234"
                    required
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Cidade de Entrega</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: São Paulo"
                    required
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Nome do Cliente</label>
                <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: Mercado Livre"
                    required
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Status Atual</label>
                <select value={status} onChange={(e) => setStatus(e.target.value as ScheduleStatus)}>
                    <option value="AGUARDANDO_CARGA">Aguardando Carga</option>
                    <option value="EM_TRANSITO">Em Trânsito</option>
                    <option value="AGUARDANDO_DESCARGA">Aguardando Descarga</option>
                </select>
            </div>

            <button type="submit" style={{ backgroundColor: 'var(--color-primary)', color: '#fff', fontWeight: 'bold' }}>
                Adicionar Agendamento
            </button>
        </form>
    );
};
