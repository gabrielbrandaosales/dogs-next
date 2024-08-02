'use client';

import { useUser } from '@/contexts/user-context';
import React from 'react';

export default function ContaPage() {
  const { user } = useUser();
  return (
    <main>
      <h1>{user?.nome}</h1>
    </main>
  );
}
