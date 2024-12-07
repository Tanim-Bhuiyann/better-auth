import Dashboard from '@/components/dashboard/simpleDashboard';
import React from 'react';
import { SessionProvider } from "next-auth/react"
const page = () => {
    return (
        <div>
               <SessionProvider><Dashboard/></SessionProvider>
            
        </div>
    );
};

export default page;