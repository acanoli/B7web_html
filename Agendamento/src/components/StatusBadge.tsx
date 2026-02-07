import React from 'react';
import { type ScheduleStatus } from '../types';

interface StatusBadgeProps {
    status: ScheduleStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const getStatusConfig = (status: ScheduleStatus) => {
        switch (status) {
            case 'AGUARDANDO_CARGA':
                return {
                    label: 'Aguardando Carga',
                    color: 'var(--color-status-loading)',
                    bg: 'var(--color-status-loading-bg)',
                };
            case 'EM_TRANSITO':
                return {
                    label: 'Em Trânsito',
                    color: 'var(--color-status-transit)',
                    bg: 'var(--color-status-transit-bg)',
                };
            case 'AGUARDANDO_DESCARGA':
                return {
                    label: 'Aguardando Descarga',
                    color: 'var(--color-status-unloading)',
                    bg: 'var(--color-status-unloading-bg)',
                };
            default:
                return {
                    label: status,
                    color: 'var(--color-text-muted)',
                    bg: 'var(--color-surface)',
                };
        }
    };

    const config = getStatusConfig(status);

    return (
        <span
            style={{
                color: config.color,
                backgroundColor: config.bg,
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: `1px solid ${config.color}40`, // 40 is hex for 25% opacity
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap'
            }}
        >
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: config.color }}></span>
            {config.label}
        </span>
    );
};
