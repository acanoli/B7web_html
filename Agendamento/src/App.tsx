import { useState, useEffect } from 'react';
import { type Schedule } from './types';
import { ScheduleForm } from './components/ScheduleForm';
import { ScheduleList } from './components/ScheduleList';

function App() {
  const [schedules, setSchedules] = useState<Schedule[]>(() => {
    const saved = localStorage.getItem('schedules');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('schedules', JSON.stringify(schedules));
  }, [schedules]);

  const handleAddSchedule = (newSchedule: Omit<Schedule, 'id' | 'createdAt'>) => {
    const schedule: Schedule = {
      ...newSchedule,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setSchedules(prev => [schedule, ...prev]);
  };

  const handleDeleteSchedule = (id: string) => {
    if (confirm('Tem certeza que deseja remover este agendamento?')) {
      setSchedules(prev => prev.filter(s => s.id !== id));
    }
  };

  return (
    <div className="container">
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1>Controle de Agendamentos</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem' }}>
          Gerenciamento simples e eficiente de transporte
        </p>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <ScheduleForm onAddSchedule={handleAddSchedule} />
        </section>

        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500 }}>Agendamentos Recentes</h2>
            <span style={{
              background: 'var(--color-surface)',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              fontSize: '0.875rem',
              color: 'var(--color-text-muted)'
            }}>
              {schedules.length} veiculo{schedules.length !== 1 && 's'}
            </span>
          </div>
          <ScheduleList schedules={schedules} onDelete={handleDeleteSchedule} />
        </section>
      </main>
    </div>
  );
}

export default App;
