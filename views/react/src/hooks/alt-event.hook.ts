import { useEffect } from 'react';

export default function useAltEvent(eventName: string, listener: (...args: any[]) => void) {
    useEffect(() => {
        if ('alt' in window) {
            alt.on(eventName, listener);
        }
        return () => {
            if ('alt' in window) {
                alt.off(eventName, listener);
            }
        };
    });
}
