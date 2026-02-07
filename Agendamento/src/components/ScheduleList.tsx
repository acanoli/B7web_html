import React from 'react';
import { type Schedule } from '../types';
import { StatusBadge } from './StatusBadge';

interface ScheduleListProps {
    schedules: Schedule[];
    onDelete: (id: string) => void;
}

export const ScheduleList: React.FC<ScheduleListProps> = ({ schedules, onDelete }) => {
    if (schedules.length === 0) {
        return (
            <div className="glass-panel" style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                <p>Nenhum agendamento encontrado.</p>
            </div>
        );
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {schedules.map((schedule) => (
                <div key={schedule.id} className="glass-panel" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{schedule.vehiclePlate}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{schedule.driverName}</p>
                        </div>
                        <StatusBadge status={schedule.status} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: 'auto' }}>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Destino</p>
                            <p>{schedule.city}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cliente</p>
                            <p>{schedule.clientName}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => onDelete(schedule.id)}
                        style={{
                            marginTop: '1rem',
                            background: 'transparent',
                            border: '1px solid var(--color-surface-hover)',
                            color: 'var(--color-text-muted)',
                            padding: '0.4rem',
                            fontSize: '0.8rem'
                        }}
                    >
                        Remover
                    </button>
                </div>
            ))}
        </div>
    );
};
